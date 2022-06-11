from delayer import Delayer
from elements import ElementWrapper

__pragma__ ('alias', 'S', '$') # to use jQuery library with 'S' instead of '$'

if not Array.prototype.findIndex:  # for IE
    Array.prototype.findIndex = lambda func: findIndex(this, func)

def findIndex(array, func):  # for IE
    i = 0
    while i < array.length:
        if func(array[i]):
            return i
        i += 1
    return -1

class ScrollPosition():

    def left(self):
        doc = document.documentElement
        return (window.pageXOffset or doc.scrollLeft) - (doc.clientLeft or 0)

    def top(self):
        doc = document.documentElement
        return (window.pageYOffset or doc.scrollTop) - (doc.clientTop or 0)

    def save(self):
        self._left = self.left()
        self._top = self.top()

    def restore(self):
        window.scrollTo(self._left, self._top)

scrollPosition = ScrollPosition()

# some helper methods / classes

def element(name):
    return document.createElement(name)
 
def Element(name):
    return ElementWrapper(element(name))

#
# Make object with attributes according fields
#
def named_tuple(fields, values=None):
    result = {}
    for field in fields:
        result[field] = None
    if not values == None:
        for i in range(0, values.length):
            result[fields[i]] = values[i]
    return result
        
def contains_all(object, fields):
    for f in fields:
        if not object.hasOwnProperty(f):
            return False
    return True

def contains_more(object, fields):
    for key in Object.js_keys(object):
        if fields.indexOf(key) < 0:
            return True
    return False

_default_buttons = []

def add_default_button(id, name, style_class):
    result = PagedListButton(id, name, style_class)
    _default_buttons.append(result)
    return result
    
_default_text = { 'text_total': "Total", 'text_filter': 'Filter' }

class PagedList(ElementWrapper):
    
    _send_data = { 'page', 'pageSize', 'filterColumns', 'filterValues', 'sortOn', 'sortAsc' }
    _receive_data = { 'Items', 'CurrentPage', 'PageCount', 'TotalCount' }
    
    def __init__(self, container: str, url: str):
        if Object.prototype.toString.call(container) == "[object String]": # container is an id
            self.containerId = container
            container = document.querySelector(self.containerId)
            if container == None:
                console.error("Paged-List cannot find container with id {}".format(self.containerId))
            ElementWrapper.__init__(self, container)
        else:
            self.containerId = container.id if not container.id == '' else 'Unknown id'
            # TODO: check if container is HTML Element
            ElementWrapper.__init__(self, container)
        self.top_pager = Pager(element('div'), self)
        self.table = Element('table')
        self.thead = Element('thead'); self.table.append(self.thead)
        self.tbody = Element('tbody'); self.table.append(self.tbody)
        self.header_rendered = False
        self.rows = [] # type: List[PagedListRow]
        self.bottom_pager = Pager(element('div'), self)
        self.append(self.top_pager, self.table, self.bottom_pager)
        if url == None or url == "":
            self._server = FakeServer() # type: DataServer
        else:
            self._server = AjaxServer(url) # type: DataServer
        self.receive_data = None  # object with field as in _receive_data
        self.buttons = []  # PagedListButton's
        self.columns = []  # PagedListColumn's
        self.sorting = { 'columnIndex':-1, 'ascending': True }  # initial values, no sorting
        self.page_size = 20  # default value
        """ Maximum number of rows to place on one page """
        self.merge_button_columns = True
        """ Place all buttons in one column, instead of each button in one column """
        self._on_page_refreshed = None
        self._on_page_refreshing = None
        self.refresh_delayer = Delayer(500) # to make sure the refresh function does not get called too many times (for example caused by callbacks on server triggers)
        self.styling = PagedListStyling(self)
        self.styling.table_class('table table-striped table-hover')
        self._row_classes_function = None

    def get_styling(self):
        return self.styling

    def add_column(self, id: str, header: str = id):
        column = PagedListColumn(id, header)
        self.columns.append(column)
        return column

    def set_url(self, url: str):
        self._server.url = url
        return self

    def get_url(self):
        if not self._server == None:
            return self._server.url
        return ''

    def on_page_refreshed(self, func = None):
        if typeof(func) == 'function':
            self._on_page_refreshed = func
        elif func == None:
            self._on_page_refreshed = None
        else:
            console.error(".on_page_refreshed on Paged-List for container with id {} failed. Passed argument is not a function.".format(self.containerId))
        return self

    def on_page_refreshing(self, func = None):
        if typeof(func) == 'function':
            self._on_page_refreshing = func
        elif func == None:
            self._on_page_refreshing = None
        else:
            console.error(".on_page_refreshing on Paged-List for container with id {} failed. Passed argument is not a function.".format(self.containerId))
        return self
    
    def add_button(self, id, name, style_class):
        button = None
        if style_class is None:
            button = PagedListButton(id, id, name)
        else:
            button = PagedListButton(id, name, style_class)
        self.buttons.append(button)
        return button

    def get_top_pager(self):
        return self.top_pager

    def get_bottom_pager(self):
        return self.bottom_pager
    
    def hide_count(self):  # to hide the counter (Total: ...)
        self.top_pager.hide_count()
        self.bottom_pager.hide_count()
        return self
    
    def disable_pagination(self):
        self.top_pager.disable()
        self.bottom_pager.disable()
        return self
    
    def add_default_buttons(self, *ids):
        for button in _default_buttons:
            if button.id in ids:
                newButton = button.copy()
                if self[newButton.id] == None:
                    self[newButton.id] = newButton
                    self.buttons.append(newButton)
                else:
                    console.error("Paged-List for container with id {} cannot add default button '{}' since it already exists.".format(self.containerId, newButton.id))
        for n in ids:
            if _default_buttons.findIndex(lambda b: b.id == n) < 0:
                console.error("Paged-List for container with id {} cannot add default button '{}' since this isn't a default button.".format(self.containerId, n))
    
    def render_header(self):
        if self.columns.length == 0:
            console.error("Paged-List for container with id {} cannot render header. It does not contain columns.".format(self.containerId))
        tr = Element('tr'); self.thead.append(tr)
        for i in range(0, self.columns.length):
            column = self.columns[i]
            th = Element('th'); tr.append(th)
            if column.classes_header.length > 0:
                th.attr('class', " ".join(column.classes_header))
            if column.styles_header.length > 0:
                th.attr('style', " ".join(column.styles_header))
            #th.attr('style', 'vertical-align:top')
            elements = column.get_elements(self)
            for e in elements:
                th.append(e)
            column.span.element.onclick = self.toggle_sort.bind(None, i)
        if self.buttons.length > 0:
            for button in self.buttons:
                tr.append(Element('th').attr("class", self.styling.class_button_column))
                if self.merge_button_columns:
                    break
        self.header_rendered = True
    
    def toggle_sort(self, columnIndex):
        column = self.columns[columnIndex]
        if column.sortable:
            if self.sorting.columnIndex >= 0:
                self.columns[self.sorting.columnIndex].toggle_figure.attr('class', '')
            if self.sorting.columnIndex == columnIndex:
                if self.sorting.ascending == True:
                    self.sorting.ascending = False
                else:
                    self.sorting.columnIndex = -1
            else:  # self.sorting.columnIndex == -1 or not self.sorting.columnIndex == columnIndex:
                self.sorting.columnIndex = columnIndex
                self.sorting.ascending = True
            # # set class on toggle figure
            if self.sorting.columnIndex >= 0:
                if self.sorting.ascending:
                    column.toggle_figure.attr('class', self.styling.class_ascending)
                else:
                    column.toggle_figure.attr('class', self.styling.class_descending)
            self.get_data(1, True)

    def render(self, data, fullPage):
        if self.columns.length == 0:
            console.error("Paged-List for container with id {} cannot render. It does not contain columns.".format(self.containerId))
        # _receive_data = { 'Items', 'CurrentPage', 'PageCount', 'TotalCount' }
        if not contains_all(data, PagedList._receive_data):
            console.error("Paged-List for container with id {} cannot render. Received data does not contain all required fields: {}.".format(self.containerId, PagedList._receive_data))
        if self._on_page_refreshing != None:
            self._on_page_refreshing()
        if data.CurrentPage > data.PageCount and data.PageCount > 0:
            self.get_data(data.PageCount)
            return
        self.receive_data = data
        # render header if not done yet
        if self.header_rendered == False:
            self.render_header()
        # set property 'Id' of item if item has property 'id' but not 'Id'
        if not fullPage:
            for item in data.Items:
                if item.hasOwnProperty('id') and not item.hasOwnProperty('Id'):
                    item['Id'] = item['id']
        # if not all items in data have property 'Id', force to rerender full page
        if not fullPage and not data.Items.every(lambda item: item.hasOwnProperty('Id')):
            fullPage = True
        # remove all current rows
        if fullPage:
            scrollPosition.save()
            while self.rows.length > 0:
                self.rows[0].remove()
        # remove all current rows which are not in data
        if not fullPage:
            i = 0
            while i < self.rows.length:
                row = self.rows[i]
                if data.Items.findIndex(lambda item: item.Id == row.item.Id) < 0:
                    row.remove()
                else:
                    i += 1
        # refresh top- and bottom-pagers
        self.top_pager.refresh(data.CurrentPage, data.PageCount, data.TotalCount)
        self.bottom_pager.refresh(data.CurrentPage, data.PageCount, data.TotalCount)
        # add or update rows for all items in data
        for i in range(0, data.Items.length):
            item = data.Items[i]
            if fullPage:
                PagedListRow(self, item)
            else:
                index = self.rows.findIndex(lambda r: r.item.Id == item.Id)
                if index > -1:
                    row = self.rows[index]
                    row.refresh(item)
                    # sorting according data.Items:
                    self.rows.remove(row)
                    self.rows.append(row)
                else:
                    PagedListRow(self, item)
        # refresh sorting according self.rows
        if not fullPage:
            for row in self.rows:
                row.refreshPosition()
        if fullPage:
            setTimeout(lambda: scrollPosition.restore(), 0)
        if self._on_page_refreshed != None:
            self._on_page_refreshed()

    def get_data(self, page, fullPage = False):
        if self.header_rendered == False:
            self.render_header()
        # _send_data = { 'page', 'pageSize', 'filterColumns', 'filterValues', 'sortOn', 'sortAsc' }
        sendData = named_tuple(PagedList._send_data, [page, self.page_size, [], [], '', True ])
        for column in self.columns:
            if column.filter_enabled:
                sendData.filterColumns.append(column.id)
                sendData.filterValues.append(column.get_value_function())
        if self.sorting.columnIndex >= 0:
            sendData.sortOn = self.columns[self.sorting.columnIndex].id
            sendData.sortAsc = self.sorting.ascending
        def onSucces(data):
            self.render.bind(None, data, fullPage)()
        self.refresh_delayer.execute(self._server.get_page_data.bind(None, sendData, onSucces, self.get_data_error))
        # self._server.get_page_data(sendData, onSucces, self.get_data_error)

    def get_data_error(self, data, errorText):
        console.error("Paged-List for container with id = {} didn't receive data. Error: {}.".format(self.containerId, errorText))

    def refresh(self, fullPage = False):
        if self.receive_data == None:
            self.get_data(1, fullPage)
        else:
            self.get_data(self.receive_data.CurrentPage, fullPage)

    def refresh_item(self, item, newItem = None):
        r = self.get_row(item)
        if r != None:
            r.refresh(newItem)

    def get_row(self, item):
        """ Return the row which contains item as data """
        for row in self.rows: # type: PagedListRow
            if item == row.item:
                return row
        return None

    def get_server(self):
        return self._server

    def fake_server(self):
        self._server = FakeServer()
        return self._server

    def ajax_server(self, url):
        self._server = AjaxServer(url)
        return self._server

    def add_row_listener(self, event, func, useCapture: bool = False):
        def newFunction(ev):
            rowFound = None
            for row in self.rows:
                if row.element.contains(ev.target):
                    rowFound = row
                    break
            if not rowFound == None:
                func(rowFound.item, ev)
        result = newFunction
        self.tbody.element.addEventListener(event, result, useCapture)
        return result

    def remove_row_listener(self, event, func, useCapture: bool = False):
        self.tbody.element.removeEventListener(event, func, useCapture)
    
        
class PagedListStyling():

    def __init__(self, pagedList):
        self.paged_list = pagedList
        self._row_styles_functions = [] # type: List[Callable[[item], string]] # functions which return string with styles as function of item (data of 1 row)
        self._row_classes_functions = [] # type: List[Callable[[item], string]] # functions which return string with style classes as function of item (data of 1 row)
        self.class_expanded =  'fa fa-angle-down' # 'cursor glyphicon glyphicon-triangle-bottom'
        self.class_collapsed = 'fa fa-angle-right' # 'cursor glyphicon glyphicon-triangle-right'
        self.class_ascending = 'fa fa-angle-up' # 'glyphicon glyphicon-triangle-top'
        self.class_descending = 'fa fa-angle-down' # 'glyphicon glyphicon-triangle-bottom'
        self.class_button_column = 'pagedList-buttonColumn'

    def row_styles(self, func):
        if typeof(func) == 'function':
            self._row_styles_functions.append(func)
        elif func == None:
            self._row_styles_functions = []
        else:
            console.error(".row_styles on Paged-List for container with id {} failed. Passed argument is not a function.".format(self.containerId))
        return self

    def row_classes(self, func):
        if typeof(func) == 'function':
            self._row_classes_functions.append(func)
        elif func == None:
            self._row_classes_functions = []
        else:
            console.error(".row_classes on Paged-List for container with id {} failed. Passed argument is not a function.".format(self.containerId))
        return self

    def table_class(self, style_class):
        self.paged_list.table.attr('class', style_class)
        return self

    def table_style(self, style):
        self.paged_list.table.attr('style', style)
        return self

    def set_class_expanded(self, style_class):
        self.class_expanded = style_class
        return self

    def set_class_collapsed(self, style_class):
        self.class_collapsed = style_class
        return self

    def set_class_ascending(self, style_class):
        self.class_ascending = style_class
        return self

    def set_class_descending(self, style_class):
        self.class_descending = style_class
        return self

    def set_class_button_column(self, style_class):
        self.class_button_column = style_class
        return self

class PagedListRow(ElementWrapper):

    def __init__(self, pagedList: 'PagedList', item):
        """ item contains data for this row """
        ElementWrapper.__init__(self, element('tr'))
        self.paged_list = pagedList
        self.item = item
        self.refresh_functions = []
        self.elements_to_remove = [] # List[ElementWrapper] # elements to remove on refresh
        self.sub_rows = [] # List[PagedListSubRow]
        self.add_to_paged_list()
        self.render()
        self.refresh(self.item)

    def add_to_paged_list(self):
        self.paged_list.rows.append(self)
        self.paged_list.tbody.append(self)

    def remove(self):
        index = self.paged_list.rows.indexOf(self)
        self.paged_list.rows.splice(index, 1)
        self.remove_from_parent()
        while self.sub_rows.length > 0:
            self.sub_rows[0].remove()

    def lengthInRows(self):
        return 1 + self.sub_rows.length
    
    def position_in_rows(self):
        result = 0
        for i in range(0, self.paged_list.rows.length):
            row = self.paged_list.rows[i]
            if self == row:
                break
            else:
                result += row.lengthInRows()
        return result

    def render(self):
        for column in self.paged_list.columns:
            td = Element('td')
            self.append(td)
            if column.classes_rows.length > 0:
                td.attr('class', " ".join(column.classes_rows))
            if column.styles_rows.length > 0:
                td.attr('style', " ".join(column.styles_rows))
            if not column.on_expand_item_function == None:
                buttonExpand = ElementWrapper(document.createElement('span')).attr('style', 'margin-right: 5px;')
                buttonExpand.isExpanded = False
                def clsName(isExpanded):
                    return self.paged_list.styling.class_expanded if isExpanded else self.paged_list.styling.class_collapsed
                buttonExpand.element.className = clsName(buttonExpand.isExpanded)
                def toggleExpand(buttonExpand, expandFunction, rowBefore: 'PagedListRow', event):
                    buttonExpand.isExpanded = not buttonExpand.isExpanded
                    buttonExpand.element.className = clsName(buttonExpand.isExpanded)
                    if buttonExpand.isExpanded:
                        buttonExpand.row = PagedListSubRow(self.paged_list, rowBefore, expandFunction())
                        self.sub_rows.append(buttonExpand.row)
                    else:
                        buttonExpand.row.remove()
                        buttonExpand.row = None
                    event.stopPropagation()
                td.append(buttonExpand)
                def refreshFunction(buttonExpand, toggleExpand, column, item):
                    buttonExpand.element.onclick = toggleExpand.bind(None, buttonExpand, column.on_expand_item_function.bind(None, item), self)
                self.refresh_functions.append(refreshFunction.bind(None, buttonExpand, toggleExpand, column))
            if not column.item_to_html_function == None:
                htmlSpan = document.createElement('span'); td.element.appendChild(htmlSpan)
                def refreshFunction(span, column, item):
                    span.innerHTML = column.item_to_html_function(item)
                self.refresh_functions.append(refreshFunction.bind(None, htmlSpan, column))
            if not column.item_to_element_function == None:
                def refreshFunction(td, column, item):
                    columnElement = ElementWrapper(column.item_to_element_function(item))
                    self.elements_to_remove.append(columnElement)
                    td.append(columnElement)
                self.refresh_functions.append(refreshFunction.bind(None, td, column))
        self.refresh_functions.append(self.render_buttons)

    def render_buttons(self, item):
        if self.paged_list.buttons.length > 0:
            td = None
            if self.paged_list.merge_button_columns:
                td = Element('td').attr("class", self.paged_list.styling.class_button_column)
                self.append(td); self.elements_to_remove.append(td)
            for button in self.paged_list.buttons:
                if not self.paged_list.merge_button_columns:
                    td = Element('td').attr("class", self.paged_list.styling.class_button_column)
                    self.append(td); self.elements_to_remove.append(td)
                if button._show_if == None or button._show_if(item):
                    buttonElement = button.get_element(item)
                    td.append(buttonElement)

    def refresh(self, item):
        """ Compute styling and re-render elements of this row. """
        if item != None:
            self.item = item
        style = ""
        for func in self.paged_list.styling._row_styles_functions:
            style += func(self.item) + " "
        self.attr('style', style)
        style_class = ""
        for func in self.paged_list.styling._row_classes_functions:
            style_class += func(self.item) + " "
        self.attr('class', style_class)
        if not self.paged_list._row_classes_function == None:
            self.attr('class', self.paged_list._row_classes_function(self.item))
        for element in self.elements_to_remove:
            element.remove_from_parent()
        self.elements_to_remove = []
        for func in self.refresh_functions:
            func(self.item)

    def refreshPosition(self):
        # make sorting of elements according sorting in pagedList.rows
        position_in_parent = self.index_in_parent()
        position_in_rows = self.position_in_rows()
        if not position_in_parent == position_in_rows:
            self.remove_from_parent()
            children = self.paged_list.tbody.children()
            if not children.length > position_in_rows:
                self.paged_list.tbody.append(self)
                for subRow in self.sub_rows:
                    self.paged_list.tbody.append(subRow)
            else:
                existingNode = children[position_in_rows]
                self.paged_list.tbody.insert_before(self, existingNode)
                for subRow in self.sub_rows[:].reverse():
                    self.paged_list.tbody.insert_before(subRow, existingNode)

class PagedListSubRow(ElementWrapper):

    def __init__(self, pagedList: 'PagedList', rowBefore: 'PagedListRow', elementToShow):
        ElementWrapper.__init__(self, element('tr'))
        self.paged_list = pagedList
        self.rowBefore = rowBefore
        self.elementToShow = elementToShow
        self.render()

    def render(self):
        td = Element('td'); td.element.className = 'subPagedListTd'; self.append(td)
        td.element.colSpan = self.paged_list.columns.length + self.paged_list.buttons.length
        table = Element('table'); table.element.className = 'subPagedListTable'; td.append(table)
        subRow = Element('tr'); table.append(subRow)
        td1 = Element('td'); td1.element.className = 'subPagedListCell1'; subRow.append(td1)
        td2 = Element('td'); td2.element.className = 'subPagedListCell2'; subRow.append(td2)
        td2.element.appendChild(self.elementToShow)
        self.rowBefore.element.parentNode.insertBefore(self.element, self.rowBefore.element.nextSibling)
        S(self.element).hide().fadeIn()

    def remove(self):
        self.remove_from_parent()
        index = self.rowBefore.sub_rows.indexOf(self)
        if index > -1:
            self.rowBefore.sub_rows.splice(index, 1)


class PagedListButton():
    """ Button for PagedList. Buttons are shown for each row.
    Function onclick can be added which will be called with row-item as argument.
    Function show_if can be added to only show a button if the row-item satisfies a predicate
    """
    
    def __init__(self, id, name, style_class=""):
        self.id = id
        self.name = name
        self.style_class = style_class
        self._onclick = None
        self._show_if = None
        self._create_element = None # function to create child element, accepts item and returns ElementWrapper
    
    def use_element(self, create_function):
        """ Instead of a name, display a html element to be created by the provided function.
        
        :Parameters:
         - function accepts an item, and returns an :class:`ElementWrapper`
        """
        self._create_element = create_function
        return self
        
    def onclick(self, functionOnclick):
        if not self._onclick == None:
            console.error(".onclick on button {} failed. Button has already an onclick-function.".format(self.id))
        if not typeof(functionOnclick) == 'function':
            console.error(".onclick on button {} failed. Passed argument is not a function.".format(self.id))
        self._onclick = functionOnclick
        return self
    
    def onClick(self, functionOnclick):
        return self.onclick(functionOnclick)
    
    def showIf(self, function_show_if):
        return self.show_if(function_show_if)

    def showif(self, function_show_if):
        return self.show_if(function_show_if)
    
    def show_if(self, function_show_if):
        #if not self._show_if == None:
        #    console.error(".showIf on button {} failed. Button has already an showIf-function.".format(self.id))
        if not typeof(function_show_if) == 'function':
            console.error(".showIf on button {} failed. Passed argument is not a function.".format(self.id))
        self._show_if = function_show_if
        return self
    
    
    def get_element(self, item):
        result = Element('button')
        if self._create_element is not None:
            result.element.innerHTML = ""
            result.append(self._create_element(item))
        else:
            result.element.innerHTML = self.name
        result.attr('class', self.style_class)
        if not self._onclick == None:
            result.element.onclick = self._onclick.bind(None, item)
        return result
    
    def copy(self):
        result = PagedListButton(self.id, self.name, self.style_class)
        result._onclick = self._onclick
        result._show_if = self._show_if
        return result

class PagedListColumn():
    
    FilterItem = { 'Text', 'Value' }
    
    def __init__(self, id, header):
        self.id = id
        self.header = header
        self.sortable = False
        self.filter_enabled = False
        self.filter_items = None
        self.item_to_html_function = None  # function which accepts an item (the data for 1 row) and returns html string, which is the content of the table cell.
        self.item_to_element_function = None # function which accepts an item (the data for 1 row) and returns an html element, which is the content of the table cell.
        self.on_expand_item_function = None # function which accepts an item (the data for 1 row) and returns an html element, which must be shown below row when expand is clicked
        self.span = None  # element to show in header, and to click on for toggling sort
        self.toggle_figure = None  # figure (html element) to show sorting (arrow)
        self.get_value_function = None  # function which returns the value of the sorting (input or select) element
        self.classes_header = ["pagedListColumnHeader"] # html style classes to use for the header
        self.styles_header = [] # html styles to use for the header
        self.classes_header_span = [] # html style classes to use for the span in the header
        self.styles_header_span = [] # html styles to use for the span in the header
        self.classes_rows = ["pagedListColumnRow"] # html style classes to use for the data rows (for all rows, item independent)
        self.styles_rows = [] # html styles to use for the data rows (for all rows, item independent)
        self.filter_input_element: ElementWrapper = None
    
    def add_class_header(self, style_class):
        self.classes_header.append(style_class)
        return self

    def add_style_header(self, style):
        self.styles_header.append(style)
        return self

    def add_class_header_span(self, style_class):
        self.classes_header_span.append(style_class)
        return self

    def add_style_header_span(self, style):
        self.styles_header_span.append(style)
        return self

    def add_class_rows(self, style_class):
        self.classes_rows.append(style_class)
        return self

    def add_style_rows(self, style):
        self.styles_rows.append(style)
        return self

    def add_style(self, style):
        self.add_style_header(style)
        self.add_style_rows(style)
        return self

    def add_class(self, style_class):
        self.add_class_header(style_class)
        self.add_class_rows(style_class)
        return self
    
    def enable_sort(self):
        self.sortable = True
        return self

    def enable_filter(self, items=None):
        self.filter_enabled = True
        if not items == None:
            if not items.length:
                console.error(".enable_filter on column {} failed. Argument must be an array or list.".format(self.header))
            for item in items:
                if not contains_all(item, PagedListColumn.FilterItem):
                    console.error(".enable_filter on column {} failed. Each FilterItem must contain all fields: {}".format(self.header, PagedListColumn.FilterItem))
            self.filter_items = items[:]
        return self
    
    def item_to_html(self, item_to_html_function):
        if not typeof(item_to_html_function) == 'function':
            console.error(".item_to_html on column {} failed. Passed argument is not a function.".format(self.header))
        self.item_to_html_function = item_to_html_function
        return self

    def item_to_element(self, item_to_element_function):
        if not typeof(item_to_element_function) == 'function':
            console.error(".item_to_element on column {} failed. Passed argument is not a function.".format(self.header))
        self.item_to_element_function = item_to_element_function
        return self

    def on_expand_item(self, on_expand_item):
        if not typeof(on_expand_item) == 'function':
            console.error(".on_expand_item on column {} failed. Passed argument is not a function.".format(self.header))
        self.on_expand_item_function = on_expand_item
        return self
    
    def get_elements(self, pagedList):
        result = []
        if self.span == None:
            self.span = Element('span'); result.append(self.span)
            self.span.element.innerHTML = self.header
            if self.classes_header_span.length > 0:
                self.span.attr('class', " ".join(self.classes_header_span))
            if self.styles_header_span.length > 0:
                self.span.attr('style', " ".join(self.styles_header_span))
            if self.sortable:
                self.span.attr('style', 'cursor: pointer;')
                self.toggle_figure = Element('i')
                result.append(self.toggle_figure)
            if self.filter_enabled:
                result.append(Element('br'))
                def getValue(element):
                    return S(element).val()
                if self.filter_items == None or self.filter_items.length == 0:
                    input = Element('input').attr('width', '100%').attr('value', '').attr('placeholder', _default_text.text_filter)
                    self.filter_input_element = input
                    result.append(input)
                    self.get_value_function = getValue.bind(None, input.element)
                    S(input.element).bind('input', pagedList.get_data.bind(None, 1, True))
                    # S(input.element).bindWithDelay('input', pagedList.get_data.bind(None, 1, True), PagedList.Delay)
                else:
                    select = Element('select').attr('width', '100%'); result.append(select)
                    self.filter_input_element = select
                    def filterItemToOption(filterItem):
                        r = Element('option').attr('value', filterItem.Value)
                        r.element.innerHTML = filterItem.Text
                        return r
                    options = self.filter_items.map(filterItemToOption)
                    options[0].attr('selected', 'selected')
                    for option in options:
                        select.append(option)
                    self.get_value_function = getValue.bind(None, select.element)
                    S(select.element).change(pagedList.get_data.bind(None, 1, True))
        else:
            console.error("Column '{}'.get_elements() is called twice (for Paged-List in container with id {}). ".format(self.id, pagedList.containerId))
        return result
        
        
class Pager(ElementWrapper):
    
    def __init__(self, container, pagedList):
        ElementWrapper.__init__(self, container)
        self.paged_list = pagedList
        self.table = Element('table').attr('width', '100%')
        self.table.attr('style', 'height: 80px;')
        self.append(self.table)
        tr = Element('tr'); self.table.append(tr)
        td_left = Element('td'); tr.append(td_left)
        self.td_right = Element('td').attr('align', 'right'); tr.append(self.td_right)
        self.number_list = Element('ul'); td_left.append(self.number_list)
        self.text_node_total = document.createTextNode("{}: ".format(_default_text.text_total))
        self.td_right.element.appendChild(self.text_node_total)
        self.count = Element('span')
        self.td_right.append(self.count)
        self._hide_count = False
        self.disabled = False
        self.auto_disabled = False # set to True if pagedList has only 1 page
        # styling
        self.set_pagination_class('pagination')
        self.active_class = 'active'
        self.set_count_class('label label-default')

    def getTable(self):
        return self.table.element

    def set_pagination_class(self, style_class):
        self.number_list.attr('class', style_class)
        return self

    def set_active_class(self, style_class):
        self.active_class = style_class
        return self

    def set_count_class(self, style_class):
        self.count.attr('class', style_class)
        return self

    def hide_count(self): # to hide the counter (Total: ...)
        self._hide_count = True
        self.td_right.element.removeChild(self.text_node_total)
        self.td_right.element.removeChild(self.count.element)
        return self

    def disable(self):
        self.disabled = True
        self.attr('style', 'display: none;')
        return self

    def enable(self):
        self.disabled = False
        self.attr('style', 'display: block;')
        return self


    def refresh(self, currentPage, pageCount, itemCount):
        if self.disabled and self.auto_disabled and pageCount > 1:
            self.enable()
            self.auto_disabled = False
        if not self.disabled:
            # auto disabling feature:
            #if pageCount < 2:
            #    self.disable()
            #    self.auto_disabled = True
            #    return
            self.number_list.remove_childs()
            if not self._hide_count:
                self.count.element.innerHTML = itemCount
            maxPages = 5
            startPage = (Math.floor(currentPage / maxPages) * maxPages) + 1
            if currentPage % maxPages == 0:
                startPage -= maxPages
            if currentPage > maxPages:
                self.add_number(1, "<<")
                self.add_number(startPage - 1, "<")
            if pageCount > 1:
                i = startPage
                while i < startPage + maxPages and i <= pageCount:
                    li = self.add_number(i)
                    if i == currentPage:
                        li.element.classList.add(self.active_class)
                    i += 1
                if startPage + maxPages <= pageCount:
                    self.add_number(startPage + maxPages, ">")
                    self.add_number(pageCount, ">>")
    

    def add_number(self, number, text=None):
        li = Element('li').attr('class', 'page-item'); self.number_list.append(li)
        a = Element('a').attr('href', '#').attr('class', 'page-link'); li.append(a)
        if not text == None:
            a.element.innerHTML = text
        else:
            a.element.innerHTML = number
        a.element.onclick = self.paged_list.get_data.bind(None, number, True)
        return li

class DataServer():

    def __init__(self):
        pass

    def get_page_data(self, data, onSucces, onFailure): # data format: _send_data = { 'page', 'pageSize', 'filterColumns', 'filterValues', 'sortOn', 'sortAsc' }
        console.error("Server.get_page_data should be overridden.")

class AjaxServer(DataServer):

    def __init__(self, url):
        DataServer.__init__(self)
        self.url = url
    
    def get_page_data(self, data, onSucces, onFailure):
        ajaxCall = {
            'type': 'POST',
            'url': self.url,
            'data': JSON.stringify(data),
            'success': onSucces,
            'error': onFailure,
            'contentType': 'application/json; charset=utf-8',
        }
        S.ajax(ajaxCall)

class FakeServer(DataServer):

    def __init__(self):
        DataServer.__init__(self)
        self.data = []
        self.data_filtered = []

    def getMaxId(self):
        result = 0
        for item in self.data:
            if item['Id'] > result:
                result = item['Id']
    
    def addData(self, *items):
        for item in items:
            self.data.append(item)

    def get_data(self):
        return self.data

    def clear_data(self):
        self.data = []

    def get_item(self, id):
        for item in self.data:
            if item['Id'] == id:
                return item
        return None

    def delete_item(self, id):
        i = 0
        while i < self.data.length:
            if self.data[i]['Id'] == id:
                self.data.splice(i, 1)
                break
            i += 1

    @staticmethod
    def get_nested_value(obj, fields):
        if obj == None or len(fields) == 0:
            return obj
        return FakeServer.get_nested_value(obj[fields[0]], fields[1:])

    def get_filters(self, filterColumns, filterValues): # returns list of functions which accepts an data item and returns true/false.
        result = []
        def passFilter(field, value, item):
            itemValue = FakeServer.get_nested_value(item, field.split("."))
            if itemValue == None:
                return False
            if Object.prototype.toString.call(itemValue) == '[object Number]':
                if js_isNaN(value):
                    return False
                else:
                    return itemValue == parseFloat(value)
            # match = itemValue.toString().search(__new__(RegExp(value.toString(), "i"))) # problem: value can contain special characters so that regex does not work
            match = itemValue.toString().toLowerCase().indexOf(value.toString().toLowerCase())
            return match > -1 # must be regular expression
        for i in range(0, filterColumns.length):
            if not filterValues[i] == "":
                result.append(passFilter.bind(None, filterColumns[i], filterValues[i]))
        return result

    def get_page_data(self, data, onSucces, onFailure): # format: _send_data = { 'page', 'pageSize', 'filterColumns', 'filterValues', 'sortOn', 'sortAsc' }
        items = []
        # filtering
        filters = self.get_filters(data.filterColumns, data.filterValues)
        for item in self.data:
            if filters.every(lambda passFilter: passFilter(item)):
                items.append(item)
        # sorting
        fields = data.sortOn.split(".")
        def compare(a, b):
            aValue = FakeServer.get_nested_value(a, fields)
            bValue = FakeServer.get_nested_value(b, fields)
            if not aValue == None and not bValue == None:
                def isNumber(v):
                    return Object.prototype.toString.call(v) == "[object Number]"
                if isNumber(aValue) and isNumber(bValue):
                    return aValue - bValue
                else:
                    return aValue.toString().localeCompare(bValue.toString())
            else:
                if aValue == None and bValue == None:
                    return 0
                elif aValue == None:
                    return -1
                else:
                    return 1
        if not data.sortOn == "":
            if data.sortAsc:
                items.js_sort(lambda a, b:  compare(a, b))
            else:
                items.js_sort(lambda b, a:  compare(a, b))
        totalCount = items.length
        # paging
        nrOfPages = Math.max(1, Math.ceil(items.length / data.pageSize))
        page = nrOfPages if data.page > nrOfPages else 1 if data.page < 1 else data.page
        indexFrom = (page - 1) * data.pageSize
        indexTo = indexFrom + data.pageSize
        self.data_filtered = items
        items = items[indexFrom : indexTo]
        #
        result = {}
        result['Items'] = items
        result['CurrentPage'] = page
        result['PageCount'] = nrOfPages
        result['TotalCount'] = totalCount
        onSucces(result)
