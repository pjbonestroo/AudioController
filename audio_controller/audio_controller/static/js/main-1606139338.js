main =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./python/__target__/elements.js
var elements_namespaceObject = {};
__webpack_require__.r(elements_namespaceObject);
__webpack_require__.d(elements_namespaceObject, "get_element", function() { return get_element; });
__webpack_require__.d(elements_namespaceObject, "get_Element", function() { return get_Element; });
__webpack_require__.d(elements_namespaceObject, "get_elements", function() { return get_elements; });
__webpack_require__.d(elements_namespaceObject, "element", function() { return elements_element; });
__webpack_require__.d(elements_namespaceObject, "Element", function() { return Element; });
__webpack_require__.d(elements_namespaceObject, "ElementWrapper", function() { return ElementWrapper; });

// NAMESPACE OBJECT: ./python/__target__/paged_list.js
var paged_list_namespaceObject = {};
__webpack_require__.r(paged_list_namespaceObject);
__webpack_require__.d(paged_list_namespaceObject, "findIndex", function() { return findIndex; });
__webpack_require__.d(paged_list_namespaceObject, "ScrollPosition", function() { return ScrollPosition; });
__webpack_require__.d(paged_list_namespaceObject, "scrollPosition", function() { return scrollPosition; });
__webpack_require__.d(paged_list_namespaceObject, "element", function() { return paged_list_element; });
__webpack_require__.d(paged_list_namespaceObject, "Element", function() { return paged_list_Element; });
__webpack_require__.d(paged_list_namespaceObject, "named_tuple", function() { return named_tuple; });
__webpack_require__.d(paged_list_namespaceObject, "contains_all", function() { return contains_all; });
__webpack_require__.d(paged_list_namespaceObject, "contains_more", function() { return contains_more; });
__webpack_require__.d(paged_list_namespaceObject, "_default_buttons", function() { return _default_buttons; });
__webpack_require__.d(paged_list_namespaceObject, "add_default_button", function() { return add_default_button; });
__webpack_require__.d(paged_list_namespaceObject, "_default_text", function() { return _default_text; });
__webpack_require__.d(paged_list_namespaceObject, "PagedList", function() { return PagedList; });
__webpack_require__.d(paged_list_namespaceObject, "PagedListStyling", function() { return PagedListStyling; });
__webpack_require__.d(paged_list_namespaceObject, "PagedListRow", function() { return PagedListRow; });
__webpack_require__.d(paged_list_namespaceObject, "PagedListSubRow", function() { return PagedListSubRow; });
__webpack_require__.d(paged_list_namespaceObject, "PagedListButton", function() { return PagedListButton; });
__webpack_require__.d(paged_list_namespaceObject, "PagedListColumn", function() { return PagedListColumn; });
__webpack_require__.d(paged_list_namespaceObject, "Pager", function() { return Pager; });
__webpack_require__.d(paged_list_namespaceObject, "DataServer", function() { return DataServer; });
__webpack_require__.d(paged_list_namespaceObject, "AjaxServer", function() { return AjaxServer; });
__webpack_require__.d(paged_list_namespaceObject, "FakeServer", function() { return FakeServer; });

// NAMESPACE OBJECT: ./python/__target__/utils.js
var utils_namespaceObject = {};
__webpack_require__.r(utils_namespaceObject);
__webpack_require__.d(utils_namespaceObject, "sleep", function() { return sleep; });
__webpack_require__.d(utils_namespaceObject, "get_url", function() { return get_url; });
__webpack_require__.d(utils_namespaceObject, "redirect_relative", function() { return redirect_relative; });
__webpack_require__.d(utils_namespaceObject, "redirect", function() { return redirect; });
__webpack_require__.d(utils_namespaceObject, "post", function() { return post; });
__webpack_require__.d(utils_namespaceObject, "example_handle_progress", function() { return example_handle_progress; });
__webpack_require__.d(utils_namespaceObject, "handle_progress", function() { return utils_handle_progress; });
__webpack_require__.d(utils_namespaceObject, "post_upload_file", function() { return post_upload_file; });
__webpack_require__.d(utils_namespaceObject, "post_download_file", function() { return post_download_file; });
__webpack_require__.d(utils_namespaceObject, "save_file", function() { return save_file; });
__webpack_require__.d(utils_namespaceObject, "save_blob_to_file", function() { return save_blob_to_file; });

// NAMESPACE OBJECT: ./python/__target__/dialogs.js
var dialogs_namespaceObject = {};
__webpack_require__.r(dialogs_namespaceObject);
__webpack_require__.d(dialogs_namespaceObject, "Dialog", function() { return Dialog; });
__webpack_require__.d(dialogs_namespaceObject, "DialogConfirm", function() { return DialogConfirm; });
__webpack_require__.d(dialogs_namespaceObject, "dialog_confirm", function() { return dialog_confirm; });
__webpack_require__.d(dialogs_namespaceObject, "DialogLogin", function() { return DialogLogin; });
__webpack_require__.d(dialogs_namespaceObject, "dialog_login", function() { return dialog_login; });
__webpack_require__.d(dialogs_namespaceObject, "DialogListSelect", function() { return DialogListSelect; });
__webpack_require__.d(dialogs_namespaceObject, "DialogSelect", function() { return DialogSelect; });

// NAMESPACE OBJECT: ./python/__target__/math.js
var math_namespaceObject = {};
__webpack_require__.r(math_namespaceObject);
__webpack_require__.d(math_namespaceObject, "pi", function() { return pi; });
__webpack_require__.d(math_namespaceObject, "e", function() { return e; });
__webpack_require__.d(math_namespaceObject, "exp", function() { return exp; });
__webpack_require__.d(math_namespaceObject, "expm1", function() { return expm1; });
__webpack_require__.d(math_namespaceObject, "log", function() { return log; });
__webpack_require__.d(math_namespaceObject, "log1p", function() { return log1p; });
__webpack_require__.d(math_namespaceObject, "log2", function() { return log2; });
__webpack_require__.d(math_namespaceObject, "log10", function() { return log10; });
__webpack_require__.d(math_namespaceObject, "pow", function() { return math_pow; });
__webpack_require__.d(math_namespaceObject, "sqrt", function() { return sqrt; });
__webpack_require__.d(math_namespaceObject, "sin", function() { return sin; });
__webpack_require__.d(math_namespaceObject, "cos", function() { return cos; });
__webpack_require__.d(math_namespaceObject, "tan", function() { return tan; });
__webpack_require__.d(math_namespaceObject, "asin", function() { return asin; });
__webpack_require__.d(math_namespaceObject, "acos", function() { return acos; });
__webpack_require__.d(math_namespaceObject, "atan", function() { return atan; });
__webpack_require__.d(math_namespaceObject, "atan2", function() { return atan2; });
__webpack_require__.d(math_namespaceObject, "hypot", function() { return hypot; });
__webpack_require__.d(math_namespaceObject, "degrees", function() { return degrees; });
__webpack_require__.d(math_namespaceObject, "radians", function() { return radians; });
__webpack_require__.d(math_namespaceObject, "sinh", function() { return sinh; });
__webpack_require__.d(math_namespaceObject, "cosh", function() { return cosh; });
__webpack_require__.d(math_namespaceObject, "tanh", function() { return tanh; });
__webpack_require__.d(math_namespaceObject, "asinh", function() { return asinh; });
__webpack_require__.d(math_namespaceObject, "acosh", function() { return acosh; });
__webpack_require__.d(math_namespaceObject, "atanh", function() { return atanh; });
__webpack_require__.d(math_namespaceObject, "floor", function() { return floor; });
__webpack_require__.d(math_namespaceObject, "ceil", function() { return ceil; });
__webpack_require__.d(math_namespaceObject, "trunc", function() { return trunc; });
__webpack_require__.d(math_namespaceObject, "isnan", function() { return isnan; });
__webpack_require__.d(math_namespaceObject, "inf", function() { return inf; });
__webpack_require__.d(math_namespaceObject, "nan", function() { return nan; });
__webpack_require__.d(math_namespaceObject, "modf", function() { return modf; });

// NAMESPACE OBJECT: ./python/__target__/random.js
var random_namespaceObject = {};
__webpack_require__.r(random_namespaceObject);
__webpack_require__.d(random_namespaceObject, "_array", function() { return _array; });
__webpack_require__.d(random_namespaceObject, "_index", function() { return _index; });
__webpack_require__.d(random_namespaceObject, "_bitmask1", function() { return _bitmask1; });
__webpack_require__.d(random_namespaceObject, "_bitmask2", function() { return _bitmask2; });
__webpack_require__.d(random_namespaceObject, "_bitmask3", function() { return _bitmask3; });
__webpack_require__.d(random_namespaceObject, "_fill_array", function() { return _fill_array; });
__webpack_require__.d(random_namespaceObject, "_random_integer", function() { return _random_integer; });
__webpack_require__.d(random_namespaceObject, "seed", function() { return seed; });
__webpack_require__.d(random_namespaceObject, "randint", function() { return randint; });
__webpack_require__.d(random_namespaceObject, "choice", function() { return choice; });
__webpack_require__.d(random_namespaceObject, "random", function() { return random; });
__webpack_require__.d(random_namespaceObject, "shuffle", function() { return shuffle; });

// NAMESPACE OBJECT: ./python/__target__/layout.js
var layout_namespaceObject = {};
__webpack_require__.r(layout_namespaceObject);
__webpack_require__.d(layout_namespaceObject, "E", function() { return layout_E; });
__webpack_require__.d(layout_namespaceObject, "home", function() { return home; });
__webpack_require__.d(layout_namespaceObject, "set_title", function() { return set_title; });
__webpack_require__.d(layout_namespaceObject, "is_fullscreen", function() { return is_fullscreen; });
__webpack_require__.d(layout_namespaceObject, "click_fullscreen", function() { return click_fullscreen; });
__webpack_require__.d(layout_namespaceObject, "main_menu", function() { return main_menu; });
__webpack_require__.d(layout_namespaceObject, "main", function() { return main; });
__webpack_require__.d(layout_namespaceObject, "menu_items", function() { return menu_items; });
__webpack_require__.d(layout_namespaceObject, "MenuItem", function() { return MenuItem; });
__webpack_require__.d(layout_namespaceObject, "refresh_after_disconnect", function() { return refresh_after_disconnect; });
__webpack_require__.d(layout_namespaceObject, "setup_websocket", function() { return setup_websocket; });
__webpack_require__.d(layout_namespaceObject, "logged_in", function() { return logged_in; });
__webpack_require__.d(layout_namespaceObject, "login_and_view", function() { return login_and_view; });
__webpack_require__.d(layout_namespaceObject, "check_logged_in", function() { return check_logged_in; });
__webpack_require__.d(layout_namespaceObject, "login", function() { return login; });
__webpack_require__.d(layout_namespaceObject, "logout", function() { return logout; });
__webpack_require__.d(layout_namespaceObject, "logout_button", function() { return logout_button; });

// CONCATENATED MODULE: ./python/__target__/org.transcrypt.__runtime__.js
// Transcrypt'ed from Python, 2020-11-23 14:48:46
var __name__ = 'org.transcrypt.__runtime__';
var __envir__ = {};
__envir__.interpreter_name = 'python';
__envir__.transpiler_name = 'transcrypt';
__envir__.executor_name = __envir__.transpiler_name;
__envir__.transpiler_version = '3.7.16';

function __nest__ (headObject, tailNames, value) {
    var current = headObject;
    if (tailNames != '') {
        var tailChain = tailNames.split ('.');
        var firstNewIndex = tailChain.length;
        for (var index = 0; index < tailChain.length; index++) {
            if (!current.hasOwnProperty (tailChain [index])) {
                firstNewIndex = index;
                break;
            }
            current = current [tailChain [index]];
        }
        for (var index = firstNewIndex; index < tailChain.length; index++) {
            current [tailChain [index]] = {};
            current = current [tailChain [index]];
        }
    }
    for (let attrib of Object.getOwnPropertyNames (value)) {
        Object.defineProperty (current, attrib, {
            get () {return value [attrib];},
            enumerable: true,
            configurable: true
        });
    }
};
function __init__ (module) {
    if (!module.__inited__) {
        module.__all__.__init__ (module.__all__);
        module.__inited__ = true;
    }
    return module.__all__;
};
var __proxy__ = false;
function __get__ (self, func, quotedFuncName) {
    if (self) {
        if (self.hasOwnProperty ('__class__') || typeof self == 'string' || self instanceof String) {
            if (quotedFuncName) {
                Object.defineProperty (self, quotedFuncName, {
                    value: function () {
                        var args = [] .slice.apply (arguments);
                        return func.apply (null, [self] .concat (args));
                    },
                    writable: true,
                    enumerable: true,
                    configurable: true
                });
            }
            return function () {
                var args = [] .slice.apply (arguments);
                return func.apply (null, [self] .concat (args));
            };
        }
        else {
            return func;
        }
    }
    else {
        return func;
    }
};
function __getcm__ (self, func, quotedFuncName) {
    if (self.hasOwnProperty ('__class__')) {
        return function () {
            var args = [] .slice.apply (arguments);
            return func.apply (null, [self.__class__] .concat (args));
        };
    }
    else {
        return function () {
            var args = [] .slice.apply (arguments);
            return func.apply (null, [self] .concat (args));
        };
    }
};
function __getsm__ (self, func, quotedFuncName) {
    return func;
};
var py_metatype = {
    __name__: 'type',
    __bases__: [],
    __new__: function (meta, name, bases, attribs) {
        var cls = function () {
            var args = [] .slice.apply (arguments);
            return cls.__new__ (args);
        };
        for (var index = bases.length - 1; index >= 0; index--) {
            var base = bases [index];
            for (var attrib in base) {
                var descrip = Object.getOwnPropertyDescriptor (base, attrib);
                Object.defineProperty (cls, attrib, descrip);
            }
            for (let symbol of Object.getOwnPropertySymbols (base)) {
                let descrip = Object.getOwnPropertyDescriptor (base, symbol);
                Object.defineProperty (cls, symbol, descrip);
            }
        }
        cls.__metaclass__ = meta;
        cls.__name__ = name.startsWith ('py_') ? name.slice (3) : name;
        cls.__bases__ = bases;
        for (var attrib in attribs) {
            var descrip = Object.getOwnPropertyDescriptor (attribs, attrib);
            Object.defineProperty (cls, attrib, descrip);
        }
        for (let symbol of Object.getOwnPropertySymbols (attribs)) {
            let descrip = Object.getOwnPropertyDescriptor (attribs, symbol);
            Object.defineProperty (cls, symbol, descrip);
        }
        return cls;
    }
};
py_metatype.__metaclass__ = py_metatype;
var object = {
    __init__: function (self) {},
    __metaclass__: py_metatype,
    __name__: 'object',
    __bases__: [],
    __new__: function (args) {
        var instance = Object.create (this, {__class__: {value: this, enumerable: true}});
        if ('__getattr__' in this || '__setattr__' in this) {
            instance = new Proxy (instance, {
                get: function (target, name) {
                    let result = target [name];
                    if (result == undefined) {
                        return target.__getattr__ (name);
                    }
                    else {
                        return result;
                    }
                },
                set: function (target, name, value) {
                    try {
                        target.__setattr__ (name, value);
                    }
                    catch (exception) {
                        target [name] = value;
                    }
                    return true;
                }
            })
        }
        this.__init__.apply (null, [instance] .concat (args));
        return instance;
    }
};
function __class__ (name, bases, attribs, meta) {
    if (meta === undefined) {
        meta = bases [0] .__metaclass__;
    }
    return meta.__new__ (meta, name, bases, attribs);
};
function __pragma__ () {};
function __call__ (/* <callee>, <this>, <params>* */) {
    var args = [] .slice.apply (arguments);
    if (typeof args [0] == 'object' && '__call__' in args [0]) {
        return args [0] .__call__ .apply (args [1], args.slice (2));
    }
    else {
        return args [0] .apply (args [1], args.slice (2));
    }
};
__envir__.executor_name = __envir__.transpiler_name;
var __main__ = {__file__: ''};
var __except__ = null;
function __kwargtrans__ (anObject) {
    anObject.__kwargtrans__ = null;
    anObject.constructor = Object;
    return anObject;
}
function __super__ (aClass, methodName) {
    for (let base of aClass.__bases__) {
        if (methodName in base) {
           return base [methodName];
        }
    }
    throw new Exception ('Superclass method not found');
}
function property (getter, setter) {
    if (!setter) {
        setter = function () {};
    }
    return {get: function () {return getter (this)}, set: function (value) {setter (this, value)}, enumerable: true};
}
function __setproperty__ (anObject, name, descriptor) {
    if (!anObject.hasOwnProperty (name)) {
        Object.defineProperty (anObject, name, descriptor);
    }
}
function assert (condition, message) {
    if (!condition) {
        throw AssertionError (message, new Error ());
    }
}
function __mergekwargtrans__ (object0, object1) {
    var result = {};
    for (var attrib in object0) {
        result [attrib] = object0 [attrib];
    }
    for (var attrib in object1) {
        result [attrib] = object1 [attrib];
    }
    return result;
};
function __mergefields__ (targetClass, sourceClass) {
    let fieldNames = ['__reprfields__', '__comparefields__', '__initfields__']
    if (sourceClass [fieldNames [0]]) {
        if (targetClass [fieldNames [0]]) {
            for (let fieldName of fieldNames) {
                targetClass [fieldName] = new Set ([...targetClass [fieldName], ...sourceClass [fieldName]]);
            }
        }
        else {
            for (let fieldName of fieldNames) {
                targetClass [fieldName] = new Set (sourceClass [fieldName]);
            }
        }
    }
}
function __withblock__ (manager, statements) {
    if (hasattr (manager, '__enter__')) {
        try {
            manager.__enter__ ();
            statements ();
            manager.__exit__ ();
        }
        catch (exception) {
            if (! (manager.__exit__ (exception.name, exception, exception.stack))) {
                throw exception;
            }
        }
    }
    else {
        statements ();
        manager.close ();
    }
};
function dir (obj) {
    var aList = [];
    for (var aKey in obj) {
        aList.push (aKey.startsWith ('py_') ? aKey.slice (3) : aKey);
    }
    aList.sort ();
    return aList;
};
function setattr (obj, name, value) {
    obj [name] = value;
};
function getattr (obj, name) {
    return name in obj ? obj [name] : obj ['py_' + name];
};
function hasattr (obj, name) {
    try {
        return name in obj || 'py_' + name in obj;
    }
    catch (exception) {
        return false;
    }
};
function delattr (obj, name) {
    if (name in obj) {
        delete obj [name];
    }
    else {
        delete obj ['py_' + name];
    }
};
function __in__ (element, container) {
    if (container === undefined || container === null) {
        return false;
    }
    if (container.__contains__ instanceof Function) {
        return container.__contains__ (element);
    }
    else {
        return (
            container.indexOf ?
            container.indexOf (element) > -1 :
            container.hasOwnProperty (element)
        );
    }
};
function __specialattrib__ (attrib) {
    return (attrib.startswith ('__') && attrib.endswith ('__')) || attrib == 'constructor' || attrib.startswith ('py_');
};
function len (anObject) {
    if (anObject === undefined || anObject === null) {
        return 0;
    }
    if (anObject.__len__ instanceof Function) {
        return anObject.__len__ ();
    }
    if (anObject.length !== undefined) {
        return anObject.length;
    }
    var length = 0;
    for (var attr in anObject) {
        if (!__specialattrib__ (attr)) {
            length++;
        }
    }
    return length;
};
function __i__ (any) {
    return py_typeof (any) == dict ? any.py_keys () : any;
}
function __k__ (keyed, key) {
    var result = keyed [key];
    if (typeof result == 'undefined') {
        if (keyed instanceof Array)
            if (key == +key && key >= 0 && keyed.length > key)
                return result;
            else
                throw IndexError (key, new Error());
        else
            throw KeyError (key, new Error());
    }
    return result;
}
function __t__ (target) {
    return (
        target === undefined || target === null ? false :
        ['boolean', 'number'] .indexOf (typeof target) >= 0 ? target :
        target.__bool__ instanceof Function ? (target.__bool__ () ? target : false) :
        target.__len__ instanceof Function ?  (target.__len__ () !== 0 ? target : false) :
        target instanceof Function ? target :
        len (target) !== 0 ? target :
        false
    );
}
function org_transcrypt_runtime_float (any) {
    if (any == 'inf') {
        return Infinity;
    }
    else if (any == '-inf') {
        return -Infinity;
    }
    else if (any == 'nan') {
        return NaN;
    }
    else if (isNaN (parseFloat (any))) {
        if (any === false) {
            return 0;
        }
        else if (any === true) {
            return 1;
        }
        else {
            throw ValueError ("could not convert string to float: '" + str(any) + "'", new Error ());
        }
    }
    else {
        return +any;
    }
};
org_transcrypt_runtime_float.__name__ = 'float';
org_transcrypt_runtime_float.__bases__ = [object];
function org_transcrypt_runtime_int (any) {
    return org_transcrypt_runtime_float (any) | 0
};
org_transcrypt_runtime_int.__name__ = 'int';
org_transcrypt_runtime_int.__bases__ = [object];
function bool (any) {
    return !!__t__ (any);
};
bool.__name__ = 'bool';
bool.__bases__ = [org_transcrypt_runtime_int];
function py_typeof (anObject) {
    var aType = typeof anObject;
    if (aType == 'object') {
        try {
            return '__class__' in anObject ? anObject.__class__ : object;
        }
        catch (exception) {
            return aType;
        }
    }
    else {
        return (
            aType == 'boolean' ? bool :
            aType == 'string' ? str :
            aType == 'number' ? (anObject % 1 == 0 ? org_transcrypt_runtime_int : org_transcrypt_runtime_float) :
            null
        );
    }
};
function issubclass (aClass, classinfo) {
    if (classinfo instanceof Array) {
        for (let aClass2 of classinfo) {
            if (issubclass (aClass, aClass2)) {
                return true;
            }
        }
        return false;
    }
    try {
        var aClass2 = aClass;
        if (aClass2 == classinfo) {
            return true;
        }
        else {
            var bases = [].slice.call (aClass2.__bases__);
            while (bases.length) {
                aClass2 = bases.shift ();
                if (aClass2 == classinfo) {
                    return true;
                }
                if (aClass2.__bases__.length) {
                    bases = [].slice.call (aClass2.__bases__).concat (bases);
                }
            }
            return false;
        }
    }
    catch (exception) {
        return aClass == classinfo || classinfo == object;
    }
};
function isinstance (anObject, classinfo) {
    try {
        return '__class__' in anObject ? issubclass (anObject.__class__, classinfo) : issubclass (py_typeof (anObject), classinfo);
    }
    catch (exception) {
        return issubclass (py_typeof (anObject), classinfo);
    }
};
function callable (anObject) {
    return anObject && typeof anObject == 'object' && '__call__' in anObject ? true : typeof anObject === 'function';
};
function repr (anObject) {
    try {
        return anObject.__repr__ ();
    }
    catch (exception) {
        try {
            return anObject.__str__ ();
        }
        catch (exception) {
            try {
                if (anObject == null) {
                    return 'None';
                }
                else if (anObject.constructor == Object) {
                    var result = '{';
                    var comma = false;
                    for (var attrib in anObject) {
                        if (!__specialattrib__ (attrib)) {
                            if (attrib.isnumeric ()) {
                                var attribRepr = attrib;
                            }
                            else {
                                var attribRepr = '\'' + attrib + '\'';
                            }
                            if (comma) {
                                result += ', ';
                            }
                            else {
                                comma = true;
                            }
                            result += attribRepr + ': ' + repr (anObject [attrib]);
                        }
                    }
                    result += '}';
                    return result;
                }
                else {
                    return typeof anObject == 'boolean' ? anObject.toString () .capitalize () : anObject.toString ();
                }
            }
            catch (exception) {
                return '<object of type: ' + typeof anObject + '>';
            }
        }
    }
};
function chr (charCode) {
    return String.fromCharCode (charCode);
};
function ord (aChar) {
    return aChar.charCodeAt (0);
};
function max (nrOrSeq) {
    return arguments.length == 1 ? Math.max (...nrOrSeq) : Math.max (...arguments);
};
function min (nrOrSeq) {
    return arguments.length == 1 ? Math.min (...nrOrSeq) : Math.min (...arguments);
};
var abs = Math.abs;
function round (number, ndigits) {
    if (ndigits) {
        var scale = Math.pow (10, ndigits);
        number *= scale;
    }
    var rounded = Math.round (number);
    if (rounded - number == 0.5 && rounded % 2) {
        rounded -= 1;
    }
    if (ndigits) {
        rounded /= scale;
    }
    return rounded;
};
function __jsUsePyNext__ () {
    try {
        var result = this.__next__ ();
        return {value: result, done: false};
    }
    catch (exception) {
        return {value: undefined, done: true};
    }
}
function __pyUseJsNext__ () {
    var result = this.next ();
    if (result.done) {
        throw StopIteration (new Error ());
    }
    else {
        return result.value;
    }
}
function py_iter (iterable) {
    if (typeof iterable == 'string' || '__iter__' in iterable) {
        var result = iterable.__iter__ ();
        result.next = __jsUsePyNext__;
    }
    else if ('selector' in iterable) {
        var result = org_transcrypt_runtime_list (iterable) .__iter__ ();
        result.next = __jsUsePyNext__;
    }
    else if ('next' in iterable) {
        var result = iterable
        if (! ('__next__' in result)) {
            result.__next__ = __pyUseJsNext__;
        }
    }
    else if (Symbol.iterator in iterable) {
        var result = iterable [Symbol.iterator] ();
        result.__next__ = __pyUseJsNext__;
    }
    else {
        throw IterableError (new Error ());
    }
    result [Symbol.iterator] = function () {return result;};
    return result;
}
function py_next (iterator) {
    try {
        var result = iterator.__next__ ();
    }
    catch (exception) {
        var result = iterator.next ();
        if (result.done) {
            throw StopIteration (new Error ());
        }
        else {
            return result.value;
        }
    }
    if (result == undefined) {
        throw StopIteration (new Error ());
    }
    else {
        return result;
    }
}
function __PyIterator__ (iterable) {
    this.iterable = iterable;
    this.index = 0;
}
__PyIterator__.prototype.__next__ = function() {
    if (this.index < this.iterable.length) {
        return this.iterable [this.index++];
    }
    else {
        throw StopIteration (new Error ());
    }
};
function __JsIterator__ (iterable) {
    this.iterable = iterable;
    this.index = 0;
}
__JsIterator__.prototype.next = function () {
    if (this.index < this.iterable.py_keys.length) {
        return {value: this.index++, done: false};
    }
    else {
        return {value: undefined, done: true};
    }
};
function py_reversed (iterable) {
    iterable = iterable.slice ();
    iterable.reverse ();
    return iterable;
};
function zip () {
    var args = [] .slice.call (arguments);
    for (var i = 0; i < args.length; i++) {
        if (typeof args [i] == 'string') {
            args [i] = args [i] .split ('');
        }
        else if (!Array.isArray (args [i])) {
            args [i] = Array.from (args [i]);
        }
    }
    var shortest = args.length == 0 ? [] : args.reduce (
        function (array0, array1) {
            return array0.length < array1.length ? array0 : array1;
        }
    );
    return shortest.map (
        function (current, index) {
            return args.map (
                function (current) {
                    return current [index];
                }
            );
        }
    );
};
function range (start, stop, step) {
    if (stop == undefined) {
        stop = start;
        start = 0;
    }
    if (step == undefined) {
        step = 1;
    }
    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }
    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }
    return result;
};
function any (iterable) {
    for (let item of iterable) {
        if (bool (item)) {
            return true;
        }
    }
    return false;
}
function org_transcrypt_runtime_all (iterable) {
    for (let item of iterable) {
        if (! bool (item)) {
            return false;
        }
    }
    return true;
}
function sum (iterable) {
    let result = 0;
    for (let item of iterable) {
        result += item;
    }
    return result;
}
function enumerate (iterable) {
    return zip (range (len (iterable)), iterable);
}
function copy (anObject) {
    if (anObject == null || typeof anObject == "object") {
        return anObject;
    }
    else {
        var result = {};
        for (var attrib in obj) {
            if (anObject.hasOwnProperty (attrib)) {
                result [attrib] = anObject [attrib];
            }
        }
        return result;
    }
}
function deepcopy (anObject) {
    if (anObject == null || typeof anObject == "object") {
        return anObject;
    }
    else {
        var result = {};
        for (var attrib in obj) {
            if (anObject.hasOwnProperty (attrib)) {
                result [attrib] = deepcopy (anObject [attrib]);
            }
        }
        return result;
    }
}
function org_transcrypt_runtime_list (iterable) {
    let instance = iterable ? Array.from (iterable) : [];
    return instance;
}
Array.prototype.__class__ = org_transcrypt_runtime_list;
org_transcrypt_runtime_list.__name__ = 'list';
org_transcrypt_runtime_list.__bases__ = [object];
Array.prototype.__iter__ = function () {return new __PyIterator__ (this);};
Array.prototype.__getslice__ = function (start, stop, step) {
    if (start < 0) {
        start = this.length + start;
    }
    if (stop == null) {
        stop = this.length;
    }
    else if (stop < 0) {
        stop = this.length + stop;
    }
    else if (stop > this.length) {
        stop = this.length;
    }
    if (step == 1) {
        return Array.prototype.slice.call(this, start, stop);
    }
    let result = org_transcrypt_runtime_list ([]);
    for (let index = start; index < stop; index += step) {
        result.push (this [index]);
    }
    return result;
};
Array.prototype.__setslice__ = function (start, stop, step, source) {
    if (start < 0) {
        start = this.length + start;
    }
    if (stop == null) {
        stop = this.length;
    }
    else if (stop < 0) {
        stop = this.length + stop;
    }
    if (step == null) {
        Array.prototype.splice.apply (this, [start, stop - start] .concat (source));
    }
    else {
        let sourceIndex = 0;
        for (let targetIndex = start; targetIndex < stop; targetIndex += step) {
            this [targetIndex] = source [sourceIndex++];
        }
    }
};
Array.prototype.__repr__ = function () {
    if (this.__class__ == set && !this.length) {
        return 'set()';
    }
    let result = !this.__class__ || this.__class__ == org_transcrypt_runtime_list ? '[' : this.__class__ == tuple ? '(' : '{';
    for (let index = 0; index < this.length; index++) {
        if (index) {
            result += ', ';
        }
        result += repr (this [index]);
    }
    if (this.__class__ == tuple && this.length == 1) {
        result += ',';
    }
    result += !this.__class__ || this.__class__ == org_transcrypt_runtime_list ? ']' : this.__class__ == tuple ? ')' : '}';;
    return result;
};
Array.prototype.__str__ = Array.prototype.__repr__;
Array.prototype.append = function (element) {
    this.push (element);
};
Array.prototype.py_clear = function () {
    this.length = 0;
};
Array.prototype.extend = function (aList) {
    this.push.apply (this, aList);
};
Array.prototype.insert = function (index, element) {
    this.splice (index, 0, element);
};
Array.prototype.remove = function (element) {
    let index = this.indexOf (element);
    if (index == -1) {
        throw ValueError ("list.remove(x): x not in list", new Error ());
    }
    this.splice (index, 1);
};
Array.prototype.index = function (element) {
    return this.indexOf (element);
};
Array.prototype.py_pop = function (index) {
    if (index == undefined) {
        return this.pop ();
    }
    else {
        return this.splice (index, 1) [0];
    }
};
Array.prototype.py_sort = function () {
    __sort__.apply  (null, [this].concat ([] .slice.apply (arguments)));
};
Array.prototype.__add__ = function (aList) {
    return org_transcrypt_runtime_list (this.concat (aList));
};
Array.prototype.__mul__ = function (scalar) {
    let result = this;
    for (let i = 1; i < scalar; i++) {
        result = result.concat (this);
    }
    return result;
};
Array.prototype.__rmul__ = Array.prototype.__mul__;
function tuple (iterable) {
    let instance = iterable ? [] .slice.apply (iterable) : [];
    instance.__class__ = tuple;
    return instance;
}
tuple.__name__ = 'tuple';
tuple.__bases__ = [object];
function set (iterable) {
    let instance = [];
    if (iterable) {
        for (let index = 0; index < iterable.length; index++) {
            instance.add (iterable [index]);
        }
    }
    instance.__class__ = set;
    return instance;
}
set.__name__ = 'set';
set.__bases__ = [object];
Array.prototype.__bindexOf__ = function (element) {
    element += '';
    let mindex = 0;
    let maxdex = this.length - 1;
    while (mindex <= maxdex) {
        let index = (mindex + maxdex) / 2 | 0;
        let middle = this [index] + '';
        if (middle < element) {
            mindex = index + 1;
        }
        else if (middle > element) {
            maxdex = index - 1;
        }
        else {
            return index;
        }
    }
    return -1;
};
Array.prototype.add = function (element) {
    if (this.indexOf (element) == -1) {
        this.push (element);
    }
};
Array.prototype.discard = function (element) {
    var index = this.indexOf (element);
    if (index != -1) {
        this.splice (index, 1);
    }
};
Array.prototype.isdisjoint = function (other) {
    this.sort ();
    for (let i = 0; i < other.length; i++) {
        if (this.__bindexOf__ (other [i]) != -1) {
            return false;
        }
    }
    return true;
};
Array.prototype.issuperset = function (other) {
    this.sort ();
    for (let i = 0; i < other.length; i++) {
        if (this.__bindexOf__ (other [i]) == -1) {
            return false;
        }
    }
    return true;
};
Array.prototype.issubset = function (other) {
    return set (other.slice ()) .issuperset (this);
};
Array.prototype.union = function (other) {
    let result = set (this.slice () .sort ());
    for (let i = 0; i < other.length; i++) {
        if (result.__bindexOf__ (other [i]) == -1) {
            result.push (other [i]);
        }
    }
    return result;
};
Array.prototype.intersection = function (other) {
    this.sort ();
    let result = set ();
    for (let i = 0; i < other.length; i++) {
        if (this.__bindexOf__ (other [i]) != -1) {
            result.push (other [i]);
        }
    }
    return result;
};
Array.prototype.difference = function (other) {
    let sother = set (other.slice () .sort ());
    let result = set ();
    for (let i = 0; i < this.length; i++) {
        if (sother.__bindexOf__ (this [i]) == -1) {
            result.push (this [i]);
        }
    }
    return result;
};
Array.prototype.symmetric_difference = function (other) {
    return this.union (other) .difference (this.intersection (other));
};
Array.prototype.py_update = function () {
    let updated = [] .concat.apply (this.slice (), arguments) .sort ();
    this.py_clear ();
    for (let i = 0; i < updated.length; i++) {
        if (updated [i] != updated [i - 1]) {
            this.push (updated [i]);
        }
    }
};
Array.prototype.__eq__ = function (other) {
    if (this.length != other.length) {
        return false;
    }
    if (this.__class__ == set) {
        this.sort ();
        other.sort ();
    }
    for (let i = 0; i < this.length; i++) {
        if (this [i] != other [i]) {
            return false;
        }
    }
    return true;
};
Array.prototype.__ne__ = function (other) {
    return !this.__eq__ (other);
};
Array.prototype.__le__ = function (other) {
    if (this.__class__ == set) {
        return this.issubset (other);
    }
    else {
        for (let i = 0; i < this.length; i++) {
            if (this [i] > other [i]) {
                return false;
            }
            else if (this [i] < other [i]) {
                return true;
            }
        }
        return true;
    }
};
Array.prototype.__ge__ = function (other) {
    if (this.__class__ == set) {
        return this.issuperset (other);
    }
    else {
        for (let i = 0; i < this.length; i++) {
            if (this [i] < other [i]) {
                return false;
            }
            else if (this [i] > other [i]) {
                return true;
            }
        }
        return true;
    }
};
Array.prototype.__lt__ = function (other) {
    return (
        this.__class__ == set ?
        this.issubset (other) && !this.issuperset (other) :
        !this.__ge__ (other)
    );
};
Array.prototype.__gt__ = function (other) {
    return (
        this.__class__ == set ?
        this.issuperset (other) && !this.issubset (other) :
        !this.__le__ (other)
    );
};
function bytearray (bytable, encoding) {
    if (bytable == undefined) {
        return new Uint8Array (0);
    }
    else {
        let aType = py_typeof (bytable);
        if (aType == org_transcrypt_runtime_int) {
            return new Uint8Array (bytable);
        }
        else if (aType == str) {
            let aBytes = new Uint8Array (len (bytable));
            for (let i = 0; i < len (bytable); i++) {
                aBytes [i] = bytable.charCodeAt (i);
            }
            return aBytes;
        }
        else if (aType == org_transcrypt_runtime_list || aType == tuple) {
            return new Uint8Array (bytable);
        }
        else {
            throw py_TypeError;
        }
    }
}
var bytes = bytearray;
Uint8Array.prototype.__add__ = function (aBytes) {
    let result = new Uint8Array (this.length + aBytes.length);
    result.set (this);
    result.set (aBytes, this.length);
    return result;
};
Uint8Array.prototype.__mul__ = function (scalar) {
    let result = new Uint8Array (scalar * this.length);
    for (let i = 0; i < scalar; i++) {
        result.set (this, i * this.length);
    }
    return result;
};
Uint8Array.prototype.__rmul__ = Uint8Array.prototype.__mul__;
function str (stringable) {
    if (typeof stringable === 'number')
        return stringable.toString();
    else {
        try {
            return stringable.__str__ ();
        }
        catch (exception) {
            try {
                return repr (stringable);
            }
            catch (exception) {
                return String (stringable);
            }
        }
    }
};
String.prototype.__class__ = str;
str.__name__ = 'str';
str.__bases__ = [object];
String.prototype.__iter__ = function () {new __PyIterator__ (this);};
String.prototype.__repr__ = function () {
    return (this.indexOf ('\'') == -1 ? '\'' + this + '\'' : '"' + this + '"') .py_replace ('\t', '\\t') .py_replace ('\n', '\\n');
};
String.prototype.__str__ = function () {
    return this;
};
String.prototype.capitalize = function () {
    return this.charAt (0).toUpperCase () + this.slice (1);
};
String.prototype.endswith = function (suffix) {
    if (suffix instanceof Array) {
        for (var i=0;i<suffix.length;i++) {
            if (this.slice (-suffix[i].length) == suffix[i])
                return true;
        }
    } else
        return suffix == '' || this.slice (-suffix.length) == suffix;
    return false;
};
String.prototype.find = function (sub, start) {
    return this.indexOf (sub, start);
};
String.prototype.__getslice__ = function (start, stop, step) {
    if (start < 0) {
        start = this.length + start;
    }
    if (stop == null) {
        stop = this.length;
    }
    else if (stop < 0) {
        stop = this.length + stop;
    }
    var result = '';
    if (step == 1) {
        result = this.substring (start, stop);
    }
    else {
        for (var index = start; index < stop; index += step) {
            result = result.concat (this.charAt(index));
        }
    }
    return result;
};
__setproperty__ (String.prototype, 'format', {
    get: function () {return __get__ (this, function (self) {
        var args = tuple ([] .slice.apply (arguments).slice (1));
        var autoIndex = 0;
        return self.replace (/\{(\w*)\}/g, function (match, key) {
            if (key == '') {
                key = autoIndex++;
            }
            if (key == +key) {
                return args [key] === undefined ? match : str (args [key]);
            }
            else {
                for (var index = 0; index < args.length; index++) {
                    if (typeof args [index] == 'object' && args [index][key] !== undefined) {
                        return str (args [index][key]);
                    }
                }
                return match;
            }
        });
    });},
    enumerable: true
});
String.prototype.isalnum = function () {
    return /^[0-9a-zA-Z]{1,}$/.test(this)
}
String.prototype.isalpha = function () {
    return /^[a-zA-Z]{1,}$/.test(this)
}
String.prototype.isdecimal = function () {
    return /^[0-9]{1,}$/.test(this)
}
String.prototype.isdigit = function () {
    return this.isdecimal()
}
String.prototype.islower = function () {
    return /^[a-z]{1,}$/.test(this)
}
String.prototype.isupper = function () {
    return /^[A-Z]{1,}$/.test(this)
}
String.prototype.isspace = function () {
    return /^[\s]{1,}$/.test(this)
}
String.prototype.isnumeric = function () {
    return !isNaN (parseFloat (this)) && isFinite (this);
};
String.prototype.join = function (strings) {
    strings = Array.from (strings);
    return strings.join (this);
};
String.prototype.lower = function () {
    return this.toLowerCase ();
};
String.prototype.py_replace = function (old, aNew, maxreplace) {
    return this.split (old, maxreplace) .join (aNew);
};
String.prototype.lstrip = function () {
    return this.replace (/^\s*/g, '');
};
String.prototype.rfind = function (sub, start) {
    return this.lastIndexOf (sub, start);
};
String.prototype.rsplit = function (sep, maxsplit) {
    if (sep == undefined || sep == null) {
        sep = /\s+/;
        var stripped = this.strip ();
    }
    else {
        var stripped = this;
    }
    if (maxsplit == undefined || maxsplit == -1) {
        return stripped.split (sep);
    }
    else {
        var result = stripped.split (sep);
        if (maxsplit < result.length) {
            var maxrsplit = result.length - maxsplit;
            return [result.slice (0, maxrsplit) .join (sep)] .concat (result.slice (maxrsplit));
        }
        else {
            return result;
        }
    }
};
String.prototype.rstrip = function () {
    return this.replace (/\s*$/g, '');
};
String.prototype.py_split = function (sep, maxsplit) {
    if (sep == undefined || sep == null) {
        sep = /\s+/;
        var stripped = this.strip ();
    }
    else {
        var stripped = this;
    }
    if (maxsplit == undefined || maxsplit == -1) {
        return stripped.split (sep);
    }
    else {
        var result = stripped.split (sep);
        if (maxsplit < result.length) {
            return result.slice (0, maxsplit).concat ([result.slice (maxsplit).join (sep)]);
        }
        else {
            return result;
        }
    }
};
String.prototype.startswith = function (prefix) {
    if (prefix instanceof Array) {
        for (var i=0;i<prefix.length;i++) {
            if (this.indexOf (prefix [i]) == 0)
                return true;
        }
    } else
        return this.indexOf (prefix) == 0;
    return false;
};
String.prototype.strip = function () {
    return this.trim ();
};
String.prototype.upper = function () {
    return this.toUpperCase ();
};
String.prototype.__mul__ = function (scalar) {
    var result = '';
    for (var i = 0; i < scalar; i++) {
        result = result + this;
    }
    return result;
};
String.prototype.__rmul__ = String.prototype.__mul__;
function __contains__ (element) {
    return this.hasOwnProperty (element);
}
function __keys__ () {
    var keys = [];
    for (var attrib in this) {
        if (!__specialattrib__ (attrib)) {
            keys.push (attrib);
        }
    }
    return keys;
}
function __items__ () {
    var items = [];
    for (var attrib in this) {
        if (!__specialattrib__ (attrib)) {
            items.push ([attrib, this [attrib]]);
        }
    }
    return items;
}
function __del__ (key) {
    delete this [key];
}
function __clear__ () {
    for (var attrib in this) {
        delete this [attrib];
    }
}
function __getdefault__ (aKey, aDefault) {
    var result = this [aKey];
    if (result == undefined) {
        result = this ['py_' + aKey]
    }
    return result == undefined ? (aDefault == undefined ? null : aDefault) : result;
}
function __setdefault__ (aKey, aDefault) {
    var result = this [aKey];
    if (result != undefined) {
        return result;
    }
    var val = aDefault == undefined ? null : aDefault;
    this [aKey] = val;
    return val;
}
function __pop__ (aKey, aDefault) {
    var result = this [aKey];
    if (result != undefined) {
        delete this [aKey];
        return result;
    } else {
        if ( aDefault === undefined ) {
            throw KeyError (aKey, new Error());
        }
    }
    return aDefault;
}
function __popitem__ () {
    var aKey = Object.keys (this) [0];
    if (aKey == null) {
        throw KeyError ("popitem(): dictionary is empty", new Error ());
    }
    var result = tuple ([aKey, this [aKey]]);
    delete this [aKey];
    return result;
}
function __update__ (aDict) {
    for (var aKey in aDict) {
        this [aKey] = aDict [aKey];
    }
}
function __values__ () {
    var values = [];
    for (var attrib in this) {
        if (!__specialattrib__ (attrib)) {
            values.push (this [attrib]);
        }
    }
    return values;
}
function __dgetitem__ (aKey) {
    return this [aKey];
}
function __dsetitem__ (aKey, aValue) {
    this [aKey] = aValue;
}
function dict (objectOrPairs) {
    var instance = {};
    if (!objectOrPairs || objectOrPairs instanceof Array) {
        if (objectOrPairs) {
            for (var index = 0; index < objectOrPairs.length; index++) {
                var pair = objectOrPairs [index];
                if ( !(pair instanceof Array) || pair.length != 2) {
                    throw ValueError(
                        "dict update sequence element #" + index +
                        " has length " + pair.length +
                        "; 2 is required", new Error());
                }
                var key = pair [0];
                var val = pair [1];
                if (!(objectOrPairs instanceof Array) && objectOrPairs instanceof Object) {
                     if (!isinstance (objectOrPairs, dict)) {
                         val = dict (val);
                     }
                }
                instance [key] = val;
            }
        }
    }
    else {
        if (isinstance (objectOrPairs, dict)) {
            var aKeys = objectOrPairs.py_keys ();
            for (var index = 0; index < aKeys.length; index++ ) {
                var key = aKeys [index];
                instance [key] = objectOrPairs [key];
            }
        } else if (objectOrPairs instanceof Object) {
            instance = objectOrPairs;
        } else {
            throw ValueError ("Invalid type of object for dict creation", new Error ());
        }
    }
    __setproperty__ (instance, '__class__', {value: dict, enumerable: false, writable: true});
    __setproperty__ (instance, '__contains__', {value: __contains__, enumerable: false});
    __setproperty__ (instance, 'py_keys', {value: __keys__, enumerable: false});
    __setproperty__ (instance, '__iter__', {value: function () {new __PyIterator__ (this.py_keys ());}, enumerable: false});
    __setproperty__ (instance, Symbol.iterator, {value: function () {new __JsIterator__ (this.py_keys ());}, enumerable: false});
    __setproperty__ (instance, 'py_items', {value: __items__, enumerable: false});
    __setproperty__ (instance, 'py_del', {value: __del__, enumerable: false});
    __setproperty__ (instance, 'py_clear', {value: __clear__, enumerable: false});
    __setproperty__ (instance, 'py_get', {value: __getdefault__, enumerable: false});
    __setproperty__ (instance, 'py_setdefault', {value: __setdefault__, enumerable: false});
    __setproperty__ (instance, 'py_pop', {value: __pop__, enumerable: false});
    __setproperty__ (instance, 'py_popitem', {value: __popitem__, enumerable: false});
    __setproperty__ (instance, 'py_update', {value: __update__, enumerable: false});
    __setproperty__ (instance, 'py_values', {value: __values__, enumerable: false});
    __setproperty__ (instance, '__getitem__', {value: __dgetitem__, enumerable: false});
    __setproperty__ (instance, '__setitem__', {value: __dsetitem__, enumerable: false});
    return instance;
}
dict.__name__ = 'dict';
dict.__bases__ = [object];
function __setdoc__ (docString) {
    this.__doc__ = docString;
    return this;
}
__setproperty__ (Function.prototype, '__setdoc__', {value: __setdoc__, enumerable: false});
function __jsmod__ (a, b) {
    if (typeof a == 'object' && '__mod__' in a) {
        return a.__mod__ (b);
    }
    else if (typeof b == 'object' && '__rmod__' in b) {
        return b.__rmod__ (a);
    }
    else {
        return a % b;
    }
};
function __mod__ (a, b) {
    if (typeof a == 'object' && '__mod__' in a) {
        return a.__mod__ (b);
    }
    else if (typeof b == 'object' && '__rmod__' in b) {
        return b.__rmod__ (a);
    }
    else {
        return ((a % b) + b) % b;
    }
};
function __pow__ (a, b) {
    if (typeof a == 'object' && '__pow__' in a) {
        return a.__pow__ (b);
    }
    else if (typeof b == 'object' && '__rpow__' in b) {
        return b.__rpow__ (a);
    }
    else {
        return Math.pow (a, b);
    }
};
var pow = __pow__;
function __neg__ (a) {
    if (typeof a == 'object' && '__neg__' in a) {
        return a.__neg__ ();
    }
    else {
        return -a;
    }
};
function __matmul__ (a, b) {
    return a.__matmul__ (b);
};
function __mul__ (a, b) {
    if (typeof a == 'object' && '__mul__' in a) {
        return a.__mul__ (b);
    }
    else if (typeof b == 'object' && '__rmul__' in b) {
        return b.__rmul__ (a);
    }
    else if (typeof a == 'string') {
        return a.__mul__ (b);
    }
    else if (typeof b == 'string') {
        return b.__rmul__ (a);
    }
    else {
        return a * b;
    }
};
function __truediv__ (a, b) {
    if (typeof a == 'object' && '__truediv__' in a) {
        return a.__truediv__ (b);
    }
    else if (typeof b == 'object' && '__rtruediv__' in b) {
        return b.__rtruediv__ (a);
    }
    else if (typeof a == 'object' && '__div__' in a) {
        return a.__div__ (b);
    }
    else if (typeof b == 'object' && '__rdiv__' in b) {
        return b.__rdiv__ (a);
    }
    else {
        return a / b;
    }
};
function __floordiv__ (a, b) {
    if (typeof a == 'object' && '__floordiv__' in a) {
        return a.__floordiv__ (b);
    }
    else if (typeof b == 'object' && '__rfloordiv__' in b) {
        return b.__rfloordiv__ (a);
    }
    else if (typeof a == 'object' && '__div__' in a) {
        return a.__div__ (b);
    }
    else if (typeof b == 'object' && '__rdiv__' in b) {
        return b.__rdiv__ (a);
    }
    else {
        return Math.floor (a / b);
    }
};
function __add__ (a, b) {
    if (typeof a == 'object' && '__add__' in a) {
        return a.__add__ (b);
    }
    else if (typeof b == 'object' && '__radd__' in b) {
        return b.__radd__ (a);
    }
    else {
        return a + b;
    }
};
function __sub__ (a, b) {
    if (typeof a == 'object' && '__sub__' in a) {
        return a.__sub__ (b);
    }
    else if (typeof b == 'object' && '__rsub__' in b) {
        return b.__rsub__ (a);
    }
    else {
        return a - b;
    }
};
function __lshift__ (a, b) {
    if (typeof a == 'object' && '__lshift__' in a) {
        return a.__lshift__ (b);
    }
    else if (typeof b == 'object' && '__rlshift__' in b) {
        return b.__rlshift__ (a);
    }
    else {
        return a << b;
    }
};
function __rshift__ (a, b) {
    if (typeof a == 'object' && '__rshift__' in a) {
        return a.__rshift__ (b);
    }
    else if (typeof b == 'object' && '__rrshift__' in b) {
        return b.__rrshift__ (a);
    }
    else {
        return a >> b;
    }
};
function __or__ (a, b) {
    if (typeof a == 'object' && '__or__' in a) {
        return a.__or__ (b);
    }
    else if (typeof b == 'object' && '__ror__' in b) {
        return b.__ror__ (a);
    }
    else {
        return a | b;
    }
};
function __xor__ (a, b) {
    if (typeof a == 'object' && '__xor__' in a) {
        return a.__xor__ (b);
    }
    else if (typeof b == 'object' && '__rxor__' in b) {
        return b.__rxor__ (a);
    }
    else {
        return a ^ b;
    }
};
function __and__ (a, b) {
    if (typeof a == 'object' && '__and__' in a) {
        return a.__and__ (b);
    }
    else if (typeof b == 'object' && '__rand__' in b) {
        return b.__rand__ (a);
    }
    else {
        return a & b;
    }
};
function __eq__ (a, b) {
    if (typeof a == 'object' && '__eq__' in a) {
        return a.__eq__ (b);
    }
    else {
        return a == b;
    }
};
function __ne__ (a, b) {
    if (typeof a == 'object' && '__ne__' in a) {
        return a.__ne__ (b);
    }
    else {
        return a != b
    }
};
function __lt__ (a, b) {
    if (typeof a == 'object' && '__lt__' in a) {
        return a.__lt__ (b);
    }
    else {
        return a < b;
    }
};
function __le__ (a, b) {
    if (typeof a == 'object' && '__le__' in a) {
        return a.__le__ (b);
    }
    else {
        return a <= b;
    }
};
function __gt__ (a, b) {
    if (typeof a == 'object' && '__gt__' in a) {
        return a.__gt__ (b);
    }
    else {
        return a > b;
    }
};
function __ge__ (a, b) {
    if (typeof a == 'object' && '__ge__' in a) {
        return a.__ge__ (b);
    }
    else {
        return a >= b;
    }
};
function __imatmul__ (a, b) {
    if ('__imatmul__' in a) {
        return a.__imatmul__ (b);
    }
    else {
        return a.__matmul__ (b);
    }
};
function __ipow__ (a, b) {
    if (typeof a == 'object' && '__pow__' in a) {
        return a.__ipow__ (b);
    }
    else if (typeof a == 'object' && '__ipow__' in a) {
        return a.__pow__ (b);
    }
    else if (typeof b == 'object' && '__rpow__' in b) {
        return b.__rpow__ (a);
    }
    else {
        return Math.pow (a, b);
    }
};
function __ijsmod__ (a, b) {
    if (typeof a == 'object' && '__imod__' in a) {
        return a.__ismod__ (b);
    }
    else if (typeof a == 'object' && '__mod__' in a) {
        return a.__mod__ (b);
    }
    else if (typeof b == 'object' && '__rpow__' in b) {
        return b.__rmod__ (a);
    }
    else {
        return a % b;
    }
};
function __imod__ (a, b) {
    if (typeof a == 'object' && '__imod__' in a) {
        return a.__imod__ (b);
    }
    else if (typeof a == 'object' && '__mod__' in a) {
        return a.__mod__ (b);
    }
    else if (typeof b == 'object' && '__rmod__' in b) {
        return b.__rmod__ (a);
    }
    else {
        return ((a % b) + b) % b;
    }
};
function __imul__ (a, b) {
    if (typeof a == 'object' && '__imul__' in a) {
        return a.__imul__ (b);
    }
    else if (typeof a == 'object' && '__mul__' in a) {
        return a = a.__mul__ (b);
    }
    else if (typeof b == 'object' && '__rmul__' in b) {
        return a = b.__rmul__ (a);
    }
    else if (typeof a == 'string') {
        return a = a.__mul__ (b);
    }
    else if (typeof b == 'string') {
        return a = b.__rmul__ (a);
    }
    else {
        return a *= b;
    }
};
function __idiv__ (a, b) {
    if (typeof a == 'object' && '__idiv__' in a) {
        return a.__idiv__ (b);
    }
    else if (typeof a == 'object' && '__div__' in a) {
        return a = a.__div__ (b);
    }
    else if (typeof b == 'object' && '__rdiv__' in b) {
        return a = b.__rdiv__ (a);
    }
    else {
        return a /= b;
    }
};
function __iadd__ (a, b) {
    if (typeof a == 'object' && '__iadd__' in a) {
        return a.__iadd__ (b);
    }
    else if (typeof a == 'object' && '__add__' in a) {
        return a = a.__add__ (b);
    }
    else if (typeof b == 'object' && '__radd__' in b) {
        return a = b.__radd__ (a);
    }
    else {
        return a += b;
    }
};
function __isub__ (a, b) {
    if (typeof a == 'object' && '__isub__' in a) {
        return a.__isub__ (b);
    }
    else if (typeof a == 'object' && '__sub__' in a) {
        return a = a.__sub__ (b);
    }
    else if (typeof b == 'object' && '__rsub__' in b) {
        return a = b.__rsub__ (a);
    }
    else {
        return a -= b;
    }
};
function __ilshift__ (a, b) {
    if (typeof a == 'object' && '__ilshift__' in a) {
        return a.__ilshift__ (b);
    }
    else if (typeof a == 'object' && '__lshift__' in a) {
        return a = a.__lshift__ (b);
    }
    else if (typeof b == 'object' && '__rlshift__' in b) {
        return a = b.__rlshift__ (a);
    }
    else {
        return a <<= b;
    }
};
function __irshift__ (a, b) {
    if (typeof a == 'object' && '__irshift__' in a) {
        return a.__irshift__ (b);
    }
    else if (typeof a == 'object' && '__rshift__' in a) {
        return a = a.__rshift__ (b);
    }
    else if (typeof b == 'object' && '__rrshift__' in b) {
        return a = b.__rrshift__ (a);
    }
    else {
        return a >>= b;
    }
};
function __ior__ (a, b) {
    if (typeof a == 'object' && '__ior__' in a) {
        return a.__ior__ (b);
    }
    else if (typeof a == 'object' && '__or__' in a) {
        return a = a.__or__ (b);
    }
    else if (typeof b == 'object' && '__ror__' in b) {
        return a = b.__ror__ (a);
    }
    else {
        return a |= b;
    }
};
function __ixor__ (a, b) {
    if (typeof a == 'object' && '__ixor__' in a) {
        return a.__ixor__ (b);
    }
    else if (typeof a == 'object' && '__xor__' in a) {
        return a = a.__xor__ (b);
    }
    else if (typeof b == 'object' && '__rxor__' in b) {
        return a = b.__rxor__ (a);
    }
    else {
        return a ^= b;
    }
};
function __iand__ (a, b) {
    if (typeof a == 'object' && '__iand__' in a) {
        return a.__iand__ (b);
    }
    else if (typeof a == 'object' && '__and__' in a) {
        return a = a.__and__ (b);
    }
    else if (typeof b == 'object' && '__rand__' in b) {
        return a = b.__rand__ (a);
    }
    else {
        return a &= b;
    }
};
function __getitem__ (container, key) {
    if (typeof container == 'object' && '__getitem__' in container) {
        return container.__getitem__ (key);
    }
    else if ((typeof container == 'string' || container instanceof Array) && key < 0) {
        return container [container.length + key];
    }
    else {
        return container [key];
    }
};
function __setitem__ (container, key, value) {
    if (typeof container == 'object' && '__setitem__' in container) {
        container.__setitem__ (key, value);
    }
    else if ((typeof container == 'string' || container instanceof Array) && key < 0) {
        container [container.length + key] = value;
    }
    else {
        container [key] = value;
    }
};
function __getslice__ (container, lower, upper, step) {
    if (typeof container == 'object' && '__getitem__' in container) {
        return container.__getitem__ ([lower, upper, step]);
    }
    else {
        return container.__getslice__ (lower, upper, step);
    }
};
function __setslice__ (container, lower, upper, step, value) {
    if (typeof container == 'object' && '__setitem__' in container) {
        container.__setitem__ ([lower, upper, step], value);
    }
    else {
        container.__setslice__ (lower, upper, step, value);
    }
};
var BaseException =  __class__ ('BaseException', [object], {
	__module__: __name__,
});
var Exception =  __class__ ('Exception', [BaseException], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		var kwargs = dict ();
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						default: kwargs [__attrib0__] = __allkwargs0__ [__attrib0__];
					}
				}
				delete kwargs.__kwargtrans__;
			}
			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
		}
		else {
			var args = tuple ();
		}
		self.__args__ = args;
		try {
			self.stack = kwargs.error.stack;
		}
		catch (__except0__) {
			self.stack = 'No stack trace available';
		}
	});},
	get __repr__ () {return __get__ (this, function (self) {
		if (len (self.__args__) > 1) {
			return '{}{}'.format (self.__class__.__name__, repr (tuple (self.__args__)));
		}
		else if (len (self.__args__)) {
			return '{}({})'.format (self.__class__.__name__, repr (self.__args__ [0]));
		}
		else {
			return '{}()'.format (self.__class__.__name__);
		}
	});},
	get __str__ () {return __get__ (this, function (self) {
		if (len (self.__args__) > 1) {
			return str (tuple (self.__args__));
		}
		else if (len (self.__args__)) {
			return str (self.__args__ [0]);
		}
		else {
			return '';
		}
	});}
});
var IterableError =  __class__ ('IterableError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, error) {
		Exception.__init__ (self, "Can't iterate over non-iterable", __kwargtrans__ ({error: error}));
	});}
});
var StopIteration =  __class__ ('StopIteration', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, error) {
		Exception.__init__ (self, 'Iterator exhausted', __kwargtrans__ ({error: error}));
	});}
});
var ValueError =  __class__ ('ValueError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
var KeyError =  __class__ ('KeyError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
var AssertionError =  __class__ ('AssertionError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		if (message) {
			Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
		}
		else {
			Exception.__init__ (self, __kwargtrans__ ({error: error}));
		}
	});}
});
var NotImplementedError =  __class__ ('NotImplementedError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
var IndexError =  __class__ ('IndexError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
var AttributeError =  __class__ ('AttributeError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
var py_TypeError =  __class__ ('py_TypeError', [Exception], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self, message, error) {
		Exception.__init__ (self, message, __kwargtrans__ ({error: error}));
	});}
});
var Warning =  __class__ ('Warning', [Exception], {
	__module__: __name__,
});
var UserWarning =  __class__ ('UserWarning', [Warning], {
	__module__: __name__,
});
var DeprecationWarning =  __class__ ('DeprecationWarning', [Warning], {
	__module__: __name__,
});
var RuntimeWarning =  __class__ ('RuntimeWarning', [Warning], {
	__module__: __name__,
});
var __sort__ = function (iterable, key, reverse) {
	if (typeof key == 'undefined' || (key != null && key.hasOwnProperty ("__kwargtrans__"))) {;
		var key = null;
	};
	if (typeof reverse == 'undefined' || (reverse != null && reverse.hasOwnProperty ("__kwargtrans__"))) {;
		var reverse = false;
	};
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
					case 'key': var key = __allkwargs0__ [__attrib0__]; break;
					case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	if (key) {
		iterable.sort ((function __lambda__ (a, b) {
			if (arguments.length) {
				var __ilastarg0__ = arguments.length - 1;
				if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
					var __allkwargs0__ = arguments [__ilastarg0__--];
					for (var __attrib0__ in __allkwargs0__) {
						switch (__attrib0__) {
							case 'a': var a = __allkwargs0__ [__attrib0__]; break;
							case 'b': var b = __allkwargs0__ [__attrib0__]; break;
						}
					}
				}
			}
			else {
			}
			return (key (a) > key (b) ? 1 : -(1));
		}));
	}
	else {
		iterable.sort ();
	}
	if (reverse) {
		iterable.reverse ();
	}
};
var sorted = function (iterable, key, reverse) {
	if (typeof key == 'undefined' || (key != null && key.hasOwnProperty ("__kwargtrans__"))) {;
		var key = null;
	};
	if (typeof reverse == 'undefined' || (reverse != null && reverse.hasOwnProperty ("__kwargtrans__"))) {;
		var reverse = false;
	};
	if (arguments.length) {
		var __ilastarg0__ = arguments.length - 1;
		if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
			var __allkwargs0__ = arguments [__ilastarg0__--];
			for (var __attrib0__ in __allkwargs0__) {
				switch (__attrib0__) {
					case 'iterable': var iterable = __allkwargs0__ [__attrib0__]; break;
					case 'key': var key = __allkwargs0__ [__attrib0__]; break;
					case 'reverse': var reverse = __allkwargs0__ [__attrib0__]; break;
				}
			}
		}
	}
	else {
	}
	if (py_typeof (iterable) == dict) {
		var result = copy (iterable.py_keys ());
	}
	else {
		var result = copy (iterable);
	}
	__sort__ (result, key, reverse);
	return result;
};
var map = function (func, iterable) {
	return (function () {
		var __accu0__ = [];
		for (var item of iterable) {
			__accu0__.append (func (item));
		}
		return __accu0__;
	}) ();
};
var filter = function (func, iterable) {
	if (func == null) {
		var func = bool;
	}
	return (function () {
		var __accu0__ = [];
		for (var item of iterable) {
			if (func (item)) {
				__accu0__.append (item);
			}
		}
		return __accu0__;
	}) ();
};
var divmod = function (n, d) {
	return tuple ([Math.floor (n / d), __mod__ (n, d)]);
};
var __Terminal__ =  __class__ ('__Terminal__', [object], {
	__module__: __name__,
	get __init__ () {return __get__ (this, function (self) {
		self.buffer = '';
		try {
			self.element = document.getElementById ('__terminal__');
		}
		catch (__except0__) {
			self.element = null;
		}
		if (self.element) {
			self.element.style.overflowX = 'auto';
			self.element.style.boxSizing = 'border-box';
			self.element.style.padding = '5px';
			self.element.innerHTML = '_';
		}
	});},
	get print () {return __get__ (this, function (self) {
		var sep = ' ';
		var end = '\n';
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'sep': var sep = __allkwargs0__ [__attrib0__]; break;
						case 'end': var end = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
			var args = tuple ([].slice.apply (arguments).slice (1, __ilastarg0__ + 1));
		}
		else {
			var args = tuple ();
		}
		self.buffer = '{}{}{}'.format (self.buffer, sep.join ((function () {
			var __accu0__ = [];
			for (var arg of args) {
				__accu0__.append (str (arg));
			}
			return __accu0__;
		}) ()), end).__getslice__ (-(4096), null, 1);
		if (self.element) {
			self.element.innerHTML = self.buffer.py_replace ('\n', '<br>').py_replace (' ', '&nbsp');
			self.element.scrollTop = self.element.scrollHeight;
		}
		else {
			console.log (sep.join ((function () {
				var __accu0__ = [];
				for (var arg of args) {
					__accu0__.append (str (arg));
				}
				return __accu0__;
			}) ()));
		}
	});},
	get input () {return __get__ (this, function (self, question) {
		if (arguments.length) {
			var __ilastarg0__ = arguments.length - 1;
			if (arguments [__ilastarg0__] && arguments [__ilastarg0__].hasOwnProperty ("__kwargtrans__")) {
				var __allkwargs0__ = arguments [__ilastarg0__--];
				for (var __attrib0__ in __allkwargs0__) {
					switch (__attrib0__) {
						case 'self': var self = __allkwargs0__ [__attrib0__]; break;
						case 'question': var question = __allkwargs0__ [__attrib0__]; break;
					}
				}
			}
		}
		else {
		}
		self.print ('{}'.format (question), __kwargtrans__ ({end: ''}));
		var answer = window.prompt ('\n'.join (self.buffer.py_split ('\n').__getslice__ (-(8), null, 1)));
		self.print (answer);
		return answer;
	});}
});
var __terminal__ = __Terminal__ ();
var print = __terminal__.print;
var input = __terminal__.input;

//# sourceMappingURL=org.transcrypt.__runtime__.map
// CONCATENATED MODULE: ./python/__target__/elements.js
// Transcrypt'ed from Python, 2020-11-23 14:48:47

var elements_name_ = 'elements';
var get_element = function (css_selectors) {
	return document.querySelector (css_selectors);
};
var get_Element = function (css_selectors) {
	return ElementWrapper (get_element (css_selectors));
};
var get_elements = function (css_selectors) {
	return document.querySelectorAll (css_selectors);
};
var elements_element = function (py_name) {
	return document.createElement (py_name);
};
var Element = function (py_name) {
	return ElementWrapper (elements_element (py_name));
};
var ElementWrapper =  __class__ ('ElementWrapper', [object], {
	__module__: elements_name_,
	get __init__ () {return __get__ (this, function (self, element) {
		if (element == null) {
			var __except0__ = Exception ('ElementWrapper: element cannot be None');
			__except0__.__cause__ = null;
			throw __except0__;
		}
		self.element = element;
	});},
	get append () {return __get__ (this, function (self) {
		var others = tuple ([].slice.apply (arguments).slice (1));
		for (var o of others) {
			self.element.appendChild (o.element);
		}
		return self;
	});},
	get attr () {return __get__ (this, function (self, py_name, value) {
		if (value === null) {
			self.element.setAttributeNode (document.createAttribute (py_name));
		}
		else {
			self.element.setAttribute (py_name, value);
		}
		return self;
	});},
	get remove_attr () {return __get__ (this, function (self, py_name) {
		self.element.removeAttribute (py_name);
		return self;
	});},
	get enable () {return __get__ (this, function (self, enable) {
		if (typeof enable == 'undefined' || (enable != null && enable.hasOwnProperty ("__kwargtrans__"))) {;
			var enable = true;
		};
		if (enable) {
			return self.remove_attr ('disabled');
		}
		else {
			return self.disable ();
		}
	});},
	get disable () {return __get__ (this, function (self) {
		return self.attr ('disabled', null);
	});},
	get is_enabled () {return __get__ (this, function (self) {
		return !(self.element.hasAttribute ('disabled'));
	});},
	get remove_childs () {return __get__ (this, function (self) {
		while (self.element.hasChildNodes ()) {
			self.element.removeChild (self.element.firstChild);
		}
	});},
	get remove_from_parent () {return __get__ (this, function (self) {
		self.element.parentNode.removeChild (self.element);
	});},
	get children () {return __get__ (this, function (self) {
		return Array.prototype.slice.call (self.element.children);
	});},
	get index_in_parent () {return __get__ (this, function (self) {
		return self.children ().indexOf (self.element);
	});},
	get insert_before () {return __get__ (this, function (self, newnode, existingnode) {
		return self.element.insertBefore (newnode.element, existingnode.element);
	});},
	get inner_html () {return __get__ (this, function (self, txt) {
		self.element.innerHTML = txt;
		return self;
	});}
});

//# sourceMappingURL=elements.map
// CONCATENATED MODULE: ./python/__target__/delayer.js
// Transcrypt'ed from Python, 2020-11-23 14:48:47

var delayer_name_ = 'delayer';
var Delayer =  __class__ ('Delayer', [object], {
	__module__: delayer_name_,
	get __init__ () {return __get__ (this, function (self, timespan) {
		self.timespan = timespan;
		self.last_time = null;
		self.function_holder = null;
	});},
	get now () {return __get__ (this, function (self) {
		return new Date ().getTime ();
	});},
	get execute () {return __get__ (this, function (self, func) {
		if (self.last_time === null) {
			self.execute_now (func);
		}
		else {
			var wait_time = (self.last_time + self.timespan) - self.now ();
			if (wait_time < 0) {
				self.execute_now (func);
			}
			else if (self.function_holder === null) {
				self.function_holder = func;
				var execute_later = function () {
					self.execute_now (self.function_holder);
					self.function_holder = null;
					self.last_time = null;
				};
				setTimeout (execute_later, wait_time);
			}
			else {
				self.function_holder = func;
			}
		}
	});},
	get execute_now () {return __get__ (this, function (self, func) {
		self.last_time = self.now ();
		func ();
	});}
});
var Delayer2 =  __class__ ('Delayer2', [object], {
	__module__: delayer_name_,
	get __init__ () {return __get__ (this, function (self, timespan, reset_delay) {
		if (typeof reset_delay == 'undefined' || (reset_delay != null && reset_delay.hasOwnProperty ("__kwargtrans__"))) {;
			var reset_delay = false;
		};
		self.timespan = timespan;
		self.reset_delay = reset_delay;
		self.last_timeout = null;
		self.last_deferred = null;
		self.hit_time = null;
	});},
	get now () {return __get__ (this, function (self) {
		return new Date ().getTime ();
	});},
	get check_call_allowed () {return __get__ (this, function (self) {
		var x = self.last_timeout === null;
		var y = self.last_deferred === null;
	});},
	get execute () {return __get__ (this, function (self, func) {
		var execute_ = function (f) {
			f ();
			self.last_timeout = null;
		};
		if (self.last_timeout === null) {
			self.last_timeout = setTimeout (execute_.bind (null, func), self.timespan);
			self.hit_time = self.now ();
		}
		else {
			clearTimeout (self.last_timeout);
			var time_left = 0.0;
			if (self.reset_delay) {
				var time_left = self.timespan;
			}
			else {
				var time_left = Math.max (0, self.timespan - (self.now () - self.hit_time));
			}
			self.last_timeout = setTimeout (execute_.bind (null, func), time_left);
		}
	});},
	get await_execute () {return __get__ (this, async function (self) {
		self.check_call_allowed ();
		var deferred = $.Deferred ();
		var execute_ = function (r) {
			deferred.resolve (r);
			self.last_timeout = null;
			self.last_deferred = null;
		};
		if (self.last_timeout === null) {
			self.last_timeout = setTimeout (execute_.bind (null, true), self.timespan);
			self.last_deferred = deferred;
			self.hit_time = self.now ();
		}
		else {
			clearTimeout (self.last_timeout);
			self.last_deferred.resolve (false);
			var time_left = 0.0;
			if (self.reset_delay) {
				var time_left = self.timespan;
			}
			else {
				var time_left = Math.max (0, self.timespan - (self.now () - self.hit_time));
			}
			self.last_timeout = setTimeout (execute_.bind (null, true), time_left);
			self.last_deferred = deferred;
		}
		return deferred.promise ();
	});}
});

//# sourceMappingURL=delayer.map
// CONCATENATED MODULE: ./python/__target__/paged_list.js
// Transcrypt'ed from Python, 2020-11-23 14:48:47



var paged_list_name_ = 'paged_list';
if (!(Array.prototype.findIndex)) {
	Array.prototype.findIndex = (function __lambda__ (func) {
		return findIndex (this, func);
	});
}
var findIndex = function (array, func) {
	var i = 0;
	while (i < array.length) {
		if (func (array [i])) {
			return i;
		}
		i += 1;
	}
	return -(1);
};
var ScrollPosition =  __class__ ('ScrollPosition', [object], {
	__module__: paged_list_name_,
	get left () {return __get__ (this, function (self) {
		var doc = document.documentElement;
		return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
	});},
	get top () {return __get__ (this, function (self) {
		var doc = document.documentElement;
		return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
	});},
	get save () {return __get__ (this, function (self) {
		self._left = self.left ();
		self._top = self.top ();
	});},
	get restore () {return __get__ (this, function (self) {
		window.scrollTo (self._left, self._top);
	});}
});
var scrollPosition = ScrollPosition ();
var paged_list_element = function (py_name) {
	return document.createElement (py_name);
};
var paged_list_Element = function (py_name) {
	return ElementWrapper (paged_list_element (py_name));
};
var named_tuple = function (fields, py_values) {
	if (typeof py_values == 'undefined' || (py_values != null && py_values.hasOwnProperty ("__kwargtrans__"))) {;
		var py_values = null;
	};
	var result = dict ({});
	for (var field of fields) {
		result [field] = null;
	}
	if (!(py_values == null)) {
		for (var i = 0; i < py_values.length; i++) {
			result [fields [i]] = py_values [i];
		}
	}
	return result;
};
var contains_all = function (object, fields) {
	for (var f of fields) {
		if (!(object.hasOwnProperty (f))) {
			return false;
		}
	}
	return true;
};
var contains_more = function (object, fields) {
	for (var key of Object.keys (object)) {
		if (fields.indexOf (key) < 0) {
			return true;
		}
	}
	return false;
};
var _default_buttons = [];
var add_default_button = function (id, py_name, style_class) {
	var result = PagedListButton (id, py_name, style_class);
	_default_buttons.append (result);
	return result;
};
var _default_text = dict ([['text_total', 'Total'], ['text_filter', 'Filter']]);
var PagedList =  __class__ ('PagedList', [ElementWrapper], {
	__module__: paged_list_name_,
	_send_data: new set (['page', 'pageSize', 'filterColumns', 'filterValues', 'sortOn', 'sortAsc']),
	_receive_data: new set (['Items', 'CurrentPage', 'PageCount', 'TotalCount']),
	get __init__ () {return __get__ (this, function (self, container, url) {
		if (Object.prototype.toString.call (container) == '[object String]') {
			self.containerId = container;
			var container = document.querySelector (self.containerId);
			if (container == null) {
				console.error ('Paged-List cannot find container with id {}'.format (self.containerId));
			}
			ElementWrapper.__init__ (self, container);
		}
		else {
			self.containerId = (!(container.id == '') ? container.id : 'Unknown id');
			ElementWrapper.__init__ (self, container);
		}
		self.top_pager = Pager (paged_list_element ('div'), self);
		self.table = paged_list_Element ('table');
		self.thead = paged_list_Element ('thead');
		self.table.append (self.thead);
		self.tbody = paged_list_Element ('tbody');
		self.table.append (self.tbody);
		self.header_rendered = false;
		self.rows = [];
		self.bottom_pager = Pager (paged_list_element ('div'), self);
		self.append (self.top_pager, self.table, self.bottom_pager);
		if (url == null || url == '') {
			self._server = FakeServer ();
		}
		else {
			self._server = AjaxServer (url);
		}
		self.receive_data = null;
		self.buttons = [];
		self.columns = [];
		self.sorting = dict ([['columnIndex', -(1)], ['ascending', true]]);
		self.page_size = 20;
		self.merge_button_columns = true;
		self._on_page_refreshed = null;
		self._on_page_refreshing = null;
		self.refresh_delayer = Delayer (500);
		self.styling = PagedListStyling (self);
		self.styling.table_class ('table table-striped table-hover');
		self._row_classes_function = null;
	});},
	get get_styling () {return __get__ (this, function (self) {
		return self.styling;
	});},
	get add_column () {return __get__ (this, function (self, id, header) {
		if (typeof header == 'undefined' || (header != null && header.hasOwnProperty ("__kwargtrans__"))) {;
			var header = id;
		};
		var column = PagedListColumn (id, header);
		self.columns.append (column);
		return column;
	});},
	get set_url () {return __get__ (this, function (self, url) {
		self._server.url = url;
		return self;
	});},
	get get_url () {return __get__ (this, function (self) {
		if (!(self._server == null)) {
			return self._server.url;
		}
		return '';
	});},
	get on_page_refreshed () {return __get__ (this, function (self, func) {
		if (typeof func == 'undefined' || (func != null && func.hasOwnProperty ("__kwargtrans__"))) {;
			var func = null;
		};
		if (typeof (func) == 'function') {
			self._on_page_refreshed = func;
		}
		else if (func == null) {
			self._on_page_refreshed = null;
		}
		else {
			console.error ('.on_page_refreshed on Paged-List for container with id {} failed. Passed argument is not a function.'.format (self.containerId));
		}
		return self;
	});},
	get on_page_refreshing () {return __get__ (this, function (self, func) {
		if (typeof func == 'undefined' || (func != null && func.hasOwnProperty ("__kwargtrans__"))) {;
			var func = null;
		};
		if (typeof (func) == 'function') {
			self._on_page_refreshing = func;
		}
		else if (func == null) {
			self._on_page_refreshing = null;
		}
		else {
			console.error ('.on_page_refreshing on Paged-List for container with id {} failed. Passed argument is not a function.'.format (self.containerId));
		}
		return self;
	});},
	get add_button () {return __get__ (this, function (self, id, py_name, style_class) {
		var button = null;
		if (style_class === null) {
			var button = PagedListButton (id, id, py_name);
		}
		else {
			var button = PagedListButton (id, py_name, style_class);
		}
		self.buttons.append (button);
		return button;
	});},
	get get_top_pager () {return __get__ (this, function (self) {
		return self.top_pager;
	});},
	get get_bottom_pager () {return __get__ (this, function (self) {
		return self.bottom_pager;
	});},
	get hide_count () {return __get__ (this, function (self) {
		self.top_pager.hide_count ();
		self.bottom_pager.hide_count ();
		return self;
	});},
	get disable_pagination () {return __get__ (this, function (self) {
		self.top_pager.disable ();
		self.bottom_pager.disable ();
		return self;
	});},
	get add_default_buttons () {return __get__ (this, function (self) {
		var ids = tuple ([].slice.apply (arguments).slice (1));
		for (var button of _default_buttons) {
			if (__in__ (button.id, ids)) {
				var newButton = button.copy ();
				if (self [newButton.id] == null) {
					self [newButton.id] = newButton;
					self.buttons.append (newButton);
				}
				else {
					console.error ("Paged-List for container with id {} cannot add default button '{}' since it already exists.".format (self.containerId, newButton.id));
				}
			}
		}
		for (var n of ids) {
			if (_default_buttons.findIndex ((function __lambda__ (b) {
				return b.id == n;
			})) < 0) {
				console.error ("Paged-List for container with id {} cannot add default button '{}' since this isn't a default button.".format (self.containerId, n));
			}
		}
	});},
	get render_header () {return __get__ (this, function (self) {
		if (self.columns.length == 0) {
			console.error ('Paged-List for container with id {} cannot render header. It does not contain columns.'.format (self.containerId));
		}
		var tr = paged_list_Element ('tr');
		self.thead.append (tr);
		for (var i = 0; i < self.columns.length; i++) {
			var column = self.columns [i];
			var th = paged_list_Element ('th');
			tr.append (th);
			if (column.classes_header.length > 0) {
				th.attr ('class', ' '.join (column.classes_header));
			}
			if (column.styles_header.length > 0) {
				th.attr ('style', ' '.join (column.styles_header));
			}
			var elements = column.get_elements (self);
			for (var e of elements) {
				th.append (e);
			}
			column.span.element.onclick = self.toggle_sort.bind (null, i);
		}
		if (self.buttons.length > 0) {
			for (var button of self.buttons) {
				tr.append (paged_list_Element ('th').attr ('class', self.styling.class_button_column));
				if (self.merge_button_columns) {
					break;
				}
			}
		}
		self.header_rendered = true;
	});},
	get toggle_sort () {return __get__ (this, function (self, columnIndex) {
		var column = self.columns [columnIndex];
		if (column.sortable) {
			if (self.sorting.columnIndex >= 0) {
				self.columns [self.sorting.columnIndex].toggle_figure.attr ('class', '');
			}
			if (self.sorting.columnIndex == columnIndex) {
				if (self.sorting.ascending == true) {
					self.sorting.ascending = false;
				}
				else {
					self.sorting.columnIndex = -(1);
				}
			}
			else {
				self.sorting.columnIndex = columnIndex;
				self.sorting.ascending = true;
			}
			if (self.sorting.columnIndex >= 0) {
				if (self.sorting.ascending) {
					column.toggle_figure.attr ('class', self.styling.class_ascending);
				}
				else {
					column.toggle_figure.attr ('class', self.styling.class_descending);
				}
			}
			self.get_data (1, true);
		}
	});},
	get render () {return __get__ (this, function (self, data, fullPage) {
		if (self.columns.length == 0) {
			console.error ('Paged-List for container with id {} cannot render. It does not contain columns.'.format (self.containerId));
		}
		if (!(contains_all (data, PagedList._receive_data))) {
			console.error ('Paged-List for container with id {} cannot render. Received data does not contain all required fields: {}.'.format (self.containerId, PagedList._receive_data));
		}
		if (self._on_page_refreshing != null) {
			self._on_page_refreshing ();
		}
		if (data.CurrentPage > data.PageCount && data.PageCount > 0) {
			self.get_data (data.PageCount);
			return ;
		}
		self.receive_data = data;
		if (self.header_rendered == false) {
			self.render_header ();
		}
		if (!(fullPage)) {
			for (var item of data.Items) {
				if (item.hasOwnProperty ('id') && !(item.hasOwnProperty ('Id'))) {
					item ['Id'] = item ['id'];
				}
			}
		}
		if (!(fullPage) && !(data.Items.every ((function __lambda__ (item) {
			return item.hasOwnProperty ('Id');
		})))) {
			var fullPage = true;
		}
		if (fullPage) {
			scrollPosition.save ();
			while (self.rows.length > 0) {
				self.rows [0].remove ();
			}
		}
		if (!(fullPage)) {
			var i = 0;
			while (i < self.rows.length) {
				var row = self.rows [i];
				if (data.Items.findIndex ((function __lambda__ (item) {
					return item.Id == row.item.Id;
				})) < 0) {
					row.remove ();
				}
				else {
					i += 1;
				}
			}
		}
		self.top_pager.refresh (data.CurrentPage, data.PageCount, data.TotalCount);
		self.bottom_pager.refresh (data.CurrentPage, data.PageCount, data.TotalCount);
		for (var i = 0; i < data.Items.length; i++) {
			var item = data.Items [i];
			if (fullPage) {
				PagedListRow (self, item);
			}
			else {
				var index = self.rows.findIndex ((function __lambda__ (r) {
					return r.item.Id == item.Id;
				}));
				if (index > -(1)) {
					var row = self.rows [index];
					row.refresh (item);
					self.rows.remove (row);
					self.rows.append (row);
				}
				else {
					PagedListRow (self, item);
				}
			}
		}
		if (!(fullPage)) {
			for (var row of self.rows) {
				row.refreshPosition ();
			}
		}
		if (fullPage) {
			setTimeout ((function __lambda__ () {
				return scrollPosition.restore ();
			}), 0);
		}
		if (self._on_page_refreshed != null) {
			self._on_page_refreshed ();
		}
	});},
	get get_data () {return __get__ (this, function (self, page, fullPage) {
		if (typeof fullPage == 'undefined' || (fullPage != null && fullPage.hasOwnProperty ("__kwargtrans__"))) {;
			var fullPage = false;
		};
		if (self.header_rendered == false) {
			self.render_header ();
		}
		var sendData = named_tuple (PagedList._send_data, [page, self.page_size, [], [], '', true]);
		for (var column of self.columns) {
			if (column.filter_enabled) {
				sendData.filterColumns.append (column.id);
				sendData.filterValues.append (column.get_value_function ());
			}
		}
		if (self.sorting.columnIndex >= 0) {
			sendData.sortOn = self.columns [self.sorting.columnIndex].id;
			sendData.sortAsc = self.sorting.ascending;
		}
		var onSucces = function (data) {
			self.render.bind (null, data, fullPage) ();
		};
		self.refresh_delayer.execute (self._server.get_page_data.bind (null, sendData, onSucces, self.get_data_error));
	});},
	get get_data_error () {return __get__ (this, function (self, data, errorText) {
		console.error ("Paged-List for container with id = {} didn't receive data. Error: {}.".format (self.containerId, errorText));
	});},
	get refresh () {return __get__ (this, function (self, fullPage) {
		if (typeof fullPage == 'undefined' || (fullPage != null && fullPage.hasOwnProperty ("__kwargtrans__"))) {;
			var fullPage = false;
		};
		if (self.receive_data == null) {
			self.get_data (1, fullPage);
		}
		else {
			self.get_data (self.receive_data.CurrentPage, fullPage);
		}
	});},
	get refresh_item () {return __get__ (this, function (self, item, newItem) {
		if (typeof newItem == 'undefined' || (newItem != null && newItem.hasOwnProperty ("__kwargtrans__"))) {;
			var newItem = null;
		};
		var r = self.get_row (item);
		if (r != null) {
			r.refresh (newItem);
		}
	});},
	get get_row () {return __get__ (this, function (self, item) {
		for (var row of self.rows) {
			if (item == row.item) {
				return row;
			}
		}
		return null;
	});},
	get get_server () {return __get__ (this, function (self) {
		return self._server;
	});},
	get fake_server () {return __get__ (this, function (self) {
		self._server = FakeServer ();
		return self._server;
	});},
	get ajax_server () {return __get__ (this, function (self, url) {
		self._server = AjaxServer (url);
		return self._server;
	});},
	get add_row_listener () {return __get__ (this, function (self, event, func, useCapture) {
		if (typeof useCapture == 'undefined' || (useCapture != null && useCapture.hasOwnProperty ("__kwargtrans__"))) {;
			var useCapture = false;
		};
		var newFunction = function (ev) {
			var rowFound = null;
			for (var row of self.rows) {
				if (row.element.contains (ev.target)) {
					var rowFound = row;
					break;
				}
			}
			if (!(rowFound == null)) {
				func (rowFound.item, ev);
			}
		};
		var result = newFunction;
		self.tbody.element.addEventListener (event, result, useCapture);
		return result;
	});},
	get remove_row_listener () {return __get__ (this, function (self, event, func, useCapture) {
		if (typeof useCapture == 'undefined' || (useCapture != null && useCapture.hasOwnProperty ("__kwargtrans__"))) {;
			var useCapture = false;
		};
		self.tbody.element.removeEventListener (event, func, useCapture);
	});}
});
var PagedListStyling =  __class__ ('PagedListStyling', [object], {
	__module__: paged_list_name_,
	get __init__ () {return __get__ (this, function (self, pagedList) {
		self.paged_list = pagedList;
		self._row_styles_functions = [];
		self._row_classes_functions = [];
		self.class_expanded = 'fa fa-angle-down';
		self.class_collapsed = 'fa fa-angle-right';
		self.class_ascending = 'fa fa-angle-up';
		self.class_descending = 'fa fa-angle-down';
		self.class_button_column = 'pagedList-buttonColumn';
	});},
	get row_styles () {return __get__ (this, function (self, func) {
		if (typeof (func) == 'function') {
			self._row_styles_functions.append (func);
		}
		else if (func == null) {
			self._row_styles_functions = [];
		}
		else {
			console.error ('.row_styles on Paged-List for container with id {} failed. Passed argument is not a function.'.format (self.containerId));
		}
		return self;
	});},
	get row_classes () {return __get__ (this, function (self, func) {
		if (typeof (func) == 'function') {
			self._row_classes_functions.append (func);
		}
		else if (func == null) {
			self._row_classes_functions = [];
		}
		else {
			console.error ('.row_classes on Paged-List for container with id {} failed. Passed argument is not a function.'.format (self.containerId));
		}
		return self;
	});},
	get table_class () {return __get__ (this, function (self, style_class) {
		self.paged_list.table.attr ('class', style_class);
		return self;
	});},
	get table_style () {return __get__ (this, function (self, style) {
		self.paged_list.table.attr ('style', style);
		return self;
	});},
	get set_class_expanded () {return __get__ (this, function (self, style_class) {
		self.class_expanded = style_class;
		return self;
	});},
	get set_class_collapsed () {return __get__ (this, function (self, style_class) {
		self.class_collapsed = style_class;
		return self;
	});},
	get set_class_ascending () {return __get__ (this, function (self, style_class) {
		self.class_ascending = style_class;
		return self;
	});},
	get set_class_descending () {return __get__ (this, function (self, style_class) {
		self.class_descending = style_class;
		return self;
	});},
	get set_class_button_column () {return __get__ (this, function (self, style_class) {
		self.class_button_column = style_class;
		return self;
	});}
});
var PagedListRow =  __class__ ('PagedListRow', [ElementWrapper], {
	__module__: paged_list_name_,
	get __init__ () {return __get__ (this, function (self, pagedList, item) {
		ElementWrapper.__init__ (self, paged_list_element ('tr'));
		self.paged_list = pagedList;
		self.item = item;
		self.refresh_functions = [];
		self.elements_to_remove = [];
		self.sub_rows = [];
		self.add_to_paged_list ();
		self.render ();
		self.refresh (self.item);
	});},
	get add_to_paged_list () {return __get__ (this, function (self) {
		self.paged_list.rows.append (self);
		self.paged_list.tbody.append (self);
	});},
	get remove () {return __get__ (this, function (self) {
		var index = self.paged_list.rows.indexOf (self);
		self.paged_list.rows.splice (index, 1);
		self.remove_from_parent ();
		while (self.sub_rows.length > 0) {
			self.sub_rows [0].remove ();
		}
	});},
	get lengthInRows () {return __get__ (this, function (self) {
		return 1 + self.sub_rows.length;
	});},
	get position_in_rows () {return __get__ (this, function (self) {
		var result = 0;
		for (var i = 0; i < self.paged_list.rows.length; i++) {
			var row = self.paged_list.rows [i];
			if (self == row) {
				break;
			}
			else {
				result += row.lengthInRows ();
			}
		}
		return result;
	});},
	get render () {return __get__ (this, function (self) {
		for (var column of self.paged_list.columns) {
			var td = paged_list_Element ('td');
			self.append (td);
			if (column.classes_rows.length > 0) {
				td.attr ('class', ' '.join (column.classes_rows));
			}
			if (column.styles_rows.length > 0) {
				td.attr ('style', ' '.join (column.styles_rows));
			}
			if (!(column.on_expand_item_function == null)) {
				var buttonExpand = ElementWrapper (document.createElement ('span')).attr ('style', 'margin-right: 5px;');
				buttonExpand.isExpanded = false;
				var clsName = function (isExpanded) {
					return (isExpanded ? self.paged_list.styling.class_expanded : self.paged_list.styling.class_collapsed);
				};
				buttonExpand.element.className = clsName (buttonExpand.isExpanded);
				var toggleExpand = function (buttonExpand, expandFunction, rowBefore, event) {
					buttonExpand.isExpanded = !(buttonExpand.isExpanded);
					buttonExpand.element.className = clsName (buttonExpand.isExpanded);
					if (buttonExpand.isExpanded) {
						buttonExpand.row = PagedListSubRow (self.paged_list, rowBefore, expandFunction ());
						self.sub_rows.append (buttonExpand.row);
					}
					else {
						buttonExpand.row.remove ();
						buttonExpand.row = null;
					}
					event.stopPropagation ();
				};
				td.append (buttonExpand);
				var refreshFunction = function (buttonExpand, toggleExpand, column, item) {
					buttonExpand.element.onclick = toggleExpand.bind (null, buttonExpand, column.on_expand_item_function.bind (null, item), self);
				};
				self.refresh_functions.append (refreshFunction.bind (null, buttonExpand, toggleExpand, column));
			}
			if (!(column.item_to_html_function == null)) {
				var htmlSpan = document.createElement ('span');
				td.element.appendChild (htmlSpan);
				var refreshFunction = function (span, column, item) {
					span.innerHTML = column.item_to_html_function (item);
				};
				self.refresh_functions.append (refreshFunction.bind (null, htmlSpan, column));
			}
			if (!(column.item_to_element_function == null)) {
				var refreshFunction = function (td, column, item) {
					var columnElement = ElementWrapper (column.item_to_element_function (item));
					self.elements_to_remove.append (columnElement);
					td.append (columnElement);
				};
				self.refresh_functions.append (refreshFunction.bind (null, td, column));
			}
		}
		self.refresh_functions.append (self.render_buttons);
	});},
	get render_buttons () {return __get__ (this, function (self, item) {
		if (self.paged_list.buttons.length > 0) {
			var td = null;
			if (self.paged_list.merge_button_columns) {
				var td = paged_list_Element ('td').attr ('class', self.paged_list.styling.class_button_column);
				self.append (td);
				self.elements_to_remove.append (td);
			}
			for (var button of self.paged_list.buttons) {
				if (!(self.paged_list.merge_button_columns)) {
					var td = paged_list_Element ('td').attr ('class', self.paged_list.styling.class_button_column);
					self.append (td);
					self.elements_to_remove.append (td);
				}
				if (button._show_if == null || button._show_if (item)) {
					var buttonElement = button.get_element (item);
					td.append (buttonElement);
				}
			}
		}
	});},
	get refresh () {return __get__ (this, function (self, item) {
		if (item != null) {
			self.item = item;
		}
		var style = '';
		for (var func of self.paged_list.styling._row_styles_functions) {
			style += func (self.item) + ' ';
		}
		self.attr ('style', style);
		var style_class = '';
		for (var func of self.paged_list.styling._row_classes_functions) {
			style_class += func (self.item) + ' ';
		}
		self.attr ('class', style_class);
		if (!(self.paged_list._row_classes_function == null)) {
			self.attr ('class', self.paged_list._row_classes_function (self.item));
		}
		for (var element of self.elements_to_remove) {
			element.remove_from_parent ();
		}
		self.elements_to_remove = [];
		for (var func of self.refresh_functions) {
			func (self.item);
		}
	});},
	get refreshPosition () {return __get__ (this, function (self) {
		var position_in_parent = self.index_in_parent ();
		var position_in_rows = self.position_in_rows ();
		if (!(position_in_parent == position_in_rows)) {
			self.remove_from_parent ();
			var children = self.paged_list.tbody.children ();
			if (!(children.length > position_in_rows)) {
				self.paged_list.tbody.append (self);
				for (var subRow of self.sub_rows) {
					self.paged_list.tbody.append (subRow);
				}
			}
			else {
				var existingNode = children [position_in_rows];
				self.paged_list.tbody.insert_before (self, existingNode);
				for (var subRow of self.sub_rows.__getslice__ (0, null, 1).reverse ()) {
					self.paged_list.tbody.insert_before (subRow, existingNode);
				}
			}
		}
	});}
});
var PagedListSubRow =  __class__ ('PagedListSubRow', [ElementWrapper], {
	__module__: paged_list_name_,
	get __init__ () {return __get__ (this, function (self, pagedList, rowBefore, elementToShow) {
		ElementWrapper.__init__ (self, paged_list_element ('tr'));
		self.paged_list = pagedList;
		self.rowBefore = rowBefore;
		self.elementToShow = elementToShow;
		self.render ();
	});},
	get render () {return __get__ (this, function (self) {
		var td = paged_list_Element ('td');
		td.element.className = 'subPagedListTd';
		self.append (td);
		td.element.colSpan = self.paged_list.columns.length + self.paged_list.buttons.length;
		var table = paged_list_Element ('table');
		table.element.className = 'subPagedListTable';
		td.append (table);
		var subRow = paged_list_Element ('tr');
		table.append (subRow);
		var td1 = paged_list_Element ('td');
		td1.element.className = 'subPagedListCell1';
		subRow.append (td1);
		var td2 = paged_list_Element ('td');
		td2.element.className = 'subPagedListCell2';
		subRow.append (td2);
		td2.element.appendChild (self.elementToShow);
		self.rowBefore.element.parentNode.insertBefore (self.element, self.rowBefore.element.nextSibling);
		$ (self.element).hide ().fadeIn ();
	});},
	get remove () {return __get__ (this, function (self) {
		self.remove_from_parent ();
		var index = self.rowBefore.sub_rows.indexOf (self);
		if (index > -(1)) {
			self.rowBefore.sub_rows.splice (index, 1);
		}
	});}
});
var PagedListButton =  __class__ ('PagedListButton', [object], {
	__module__: paged_list_name_,
	get __init__ () {return __get__ (this, function (self, id, py_name, style_class) {
		if (typeof style_class == 'undefined' || (style_class != null && style_class.hasOwnProperty ("__kwargtrans__"))) {;
			var style_class = '';
		};
		self.id = id;
		self.py_name = py_name;
		self.style_class = style_class;
		self._onclick = null;
		self._show_if = null;
		self._create_element = null;
	});},
	get use_element () {return __get__ (this, function (self, create_function) {
		self._create_element = create_function;
		return self;
	});},
	get onclick () {return __get__ (this, function (self, functionOnclick) {
		if (!(self._onclick == null)) {
			console.error ('.onclick on button {} failed. Button has already an onclick-function.'.format (self.id));
		}
		if (!(typeof (functionOnclick) == 'function')) {
			console.error ('.onclick on button {} failed. Passed argument is not a function.'.format (self.id));
		}
		self._onclick = functionOnclick;
		return self;
	});},
	get onClick () {return __get__ (this, function (self, functionOnclick) {
		return self.onclick (functionOnclick);
	});},
	get showIf () {return __get__ (this, function (self, function_show_if) {
		return self.show_if (function_show_if);
	});},
	get showif () {return __get__ (this, function (self, function_show_if) {
		return self.show_if (function_show_if);
	});},
	get show_if () {return __get__ (this, function (self, function_show_if) {
		if (!(typeof (function_show_if) == 'function')) {
			console.error ('.showIf on button {} failed. Passed argument is not a function.'.format (self.id));
		}
		self._show_if = function_show_if;
		return self;
	});},
	get get_element () {return __get__ (this, function (self, item) {
		var result = paged_list_Element ('button');
		if (self._create_element !== null) {
			result.element.innerHTML = '';
			result.append (self._create_element (item));
		}
		else {
			result.element.innerHTML = self.py_name;
		}
		result.attr ('class', self.style_class);
		if (!(self._onclick == null)) {
			result.element.onclick = self._onclick.bind (null, item);
		}
		return result;
	});},
	get copy () {return __get__ (this, function (self) {
		var result = PagedListButton (self.id, self.py_name, self.style_class);
		result._onclick = self._onclick;
		result._show_if = self._show_if;
		return result;
	});}
});
var PagedListColumn =  __class__ ('PagedListColumn', [object], {
	__module__: paged_list_name_,
	FilterItem: new set (['Text', 'Value']),
	get __init__ () {return __get__ (this, function (self, id, header) {
		self.id = id;
		self.header = header;
		self.sortable = false;
		self.filter_enabled = false;
		self.filter_items = null;
		self.item_to_html_function = null;
		self.item_to_element_function = null;
		self.on_expand_item_function = null;
		self.span = null;
		self.toggle_figure = null;
		self.get_value_function = null;
		self.classes_header = ['pagedListColumnHeader'];
		self.styles_header = [];
		self.classes_header_span = [];
		self.styles_header_span = [];
		self.classes_rows = ['pagedListColumnRow'];
		self.styles_rows = [];
		self.filter_input_element = null;
	});},
	get add_class_header () {return __get__ (this, function (self, style_class) {
		self.classes_header.append (style_class);
		return self;
	});},
	get add_style_header () {return __get__ (this, function (self, style) {
		self.styles_header.append (style);
		return self;
	});},
	get add_class_header_span () {return __get__ (this, function (self, style_class) {
		self.classes_header_span.append (style_class);
		return self;
	});},
	get add_style_header_span () {return __get__ (this, function (self, style) {
		self.styles_header_span.append (style);
		return self;
	});},
	get add_class_rows () {return __get__ (this, function (self, style_class) {
		self.classes_rows.append (style_class);
		return self;
	});},
	get add_style_rows () {return __get__ (this, function (self, style) {
		self.styles_rows.append (style);
		return self;
	});},
	get add_style () {return __get__ (this, function (self, style) {
		self.add_style_header (style);
		self.add_style_rows (style);
		return self;
	});},
	get add_class () {return __get__ (this, function (self, style_class) {
		self.add_class_header (style_class);
		self.add_class_rows (style_class);
		return self;
	});},
	get enable_sort () {return __get__ (this, function (self) {
		self.sortable = true;
		return self;
	});},
	get enable_filter () {return __get__ (this, function (self, py_items) {
		if (typeof py_items == 'undefined' || (py_items != null && py_items.hasOwnProperty ("__kwargtrans__"))) {;
			var py_items = null;
		};
		self.filter_enabled = true;
		if (!(py_items == null)) {
			if (!(py_items.length)) {
				console.error ('.enable_filter on column {} failed. Argument must be an array or list.'.format (self.header));
			}
			for (var item of py_items) {
				if (!(contains_all (item, PagedListColumn.FilterItem))) {
					console.error ('.enable_filter on column {} failed. Each FilterItem must contain all fields: {}'.format (self.header, PagedListColumn.FilterItem));
				}
			}
			self.filter_items = py_items.__getslice__ (0, null, 1);
		}
		return self;
	});},
	get item_to_html () {return __get__ (this, function (self, item_to_html_function) {
		if (!(typeof (item_to_html_function) == 'function')) {
			console.error ('.item_to_html on column {} failed. Passed argument is not a function.'.format (self.header));
		}
		self.item_to_html_function = item_to_html_function;
		return self;
	});},
	get item_to_element () {return __get__ (this, function (self, item_to_element_function) {
		if (!(typeof (item_to_element_function) == 'function')) {
			console.error ('.item_to_element on column {} failed. Passed argument is not a function.'.format (self.header));
		}
		self.item_to_element_function = item_to_element_function;
		return self;
	});},
	get on_expand_item () {return __get__ (this, function (self, on_expand_item) {
		if (!(typeof (on_expand_item) == 'function')) {
			console.error ('.on_expand_item on column {} failed. Passed argument is not a function.'.format (self.header));
		}
		self.on_expand_item_function = on_expand_item;
		return self;
	});},
	get get_elements () {return __get__ (this, function (self, pagedList) {
		var result = [];
		if (self.span == null) {
			self.span = paged_list_Element ('span');
			result.append (self.span);
			self.span.element.innerHTML = self.header;
			if (self.classes_header_span.length > 0) {
				self.span.attr ('class', ' '.join (self.classes_header_span));
			}
			if (self.styles_header_span.length > 0) {
				self.span.attr ('style', ' '.join (self.styles_header_span));
			}
			if (self.sortable) {
				self.span.attr ('style', 'cursor: pointer;');
				self.toggle_figure = paged_list_Element ('i');
				result.append (self.toggle_figure);
			}
			if (self.filter_enabled) {
				result.append (paged_list_Element ('br'));
				var getValue = function (element) {
					return $ (element).val ();
				};
				if (self.filter_items == null || self.filter_items.length == 0) {
					var input = paged_list_Element ('input').attr ('width', '100%').attr ('value', '').attr ('placeholder', _default_text.text_filter);
					self.filter_input_element = input;
					result.append (input);
					self.get_value_function = getValue.bind (null, input.element);
					$ (input.element).bind ('input', pagedList.get_data.bind (null, 1, true));
				}
				else {
					var select = paged_list_Element ('select').attr ('width', '100%');
					result.append (select);
					self.filter_input_element = select;
					var filterItemToOption = function (filterItem) {
						var r = paged_list_Element ('option').attr ('value', filterItem.Value);
						r.element.innerHTML = filterItem.Text;
						return r;
					};
					var options = self.filter_items.map (filterItemToOption);
					options [0].attr ('selected', 'selected');
					for (var option of options) {
						select.append (option);
					}
					self.get_value_function = getValue.bind (null, select.element);
					$ (select.element).change (pagedList.get_data.bind (null, 1, true));
				}
			}
		}
		else {
			console.error ("Column '{}'.get_elements() is called twice (for Paged-List in container with id {}). ".format (self.id, pagedList.containerId));
		}
		return result;
	});}
});
var Pager =  __class__ ('Pager', [ElementWrapper], {
	__module__: paged_list_name_,
	get __init__ () {return __get__ (this, function (self, container, pagedList) {
		ElementWrapper.__init__ (self, container);
		self.paged_list = pagedList;
		self.table = paged_list_Element ('table').attr ('width', '100%');
		self.table.attr ('style', 'height: 80px;');
		self.append (self.table);
		var tr = paged_list_Element ('tr');
		self.table.append (tr);
		var td_left = paged_list_Element ('td');
		tr.append (td_left);
		self.td_right = paged_list_Element ('td').attr ('align', 'right');
		tr.append (self.td_right);
		self.number_list = paged_list_Element ('ul');
		td_left.append (self.number_list);
		self.text_node_total = document.createTextNode ('{}: '.format (_default_text.text_total));
		self.td_right.element.appendChild (self.text_node_total);
		self.count = paged_list_Element ('span');
		self.td_right.append (self.count);
		self._hide_count = false;
		self.disabled = false;
		self.auto_disabled = false;
		self.set_pagination_class ('pagination');
		self.active_class = 'active';
		self.set_count_class ('label label-default');
	});},
	get getTable () {return __get__ (this, function (self) {
		return self.table.element;
	});},
	get set_pagination_class () {return __get__ (this, function (self, style_class) {
		self.number_list.attr ('class', style_class);
		return self;
	});},
	get set_active_class () {return __get__ (this, function (self, style_class) {
		self.active_class = style_class;
		return self;
	});},
	get set_count_class () {return __get__ (this, function (self, style_class) {
		self.count.attr ('class', style_class);
		return self;
	});},
	get hide_count () {return __get__ (this, function (self) {
		self._hide_count = true;
		self.td_right.element.removeChild (self.text_node_total);
		self.td_right.element.removeChild (self.count.element);
		return self;
	});},
	get disable () {return __get__ (this, function (self) {
		self.disabled = true;
		self.attr ('style', 'display: none;');
		return self;
	});},
	get enable () {return __get__ (this, function (self) {
		self.disabled = false;
		self.attr ('style', 'display: block;');
		return self;
	});},
	get refresh () {return __get__ (this, function (self, currentPage, pageCount, itemCount) {
		if (self.disabled && self.auto_disabled && pageCount > 1) {
			self.enable ();
			self.auto_disabled = false;
		}
		if (!(self.disabled)) {
			self.number_list.remove_childs ();
			if (!(self._hide_count)) {
				self.count.element.innerHTML = itemCount;
			}
			var maxPages = 5;
			var startPage = Math.floor (currentPage / maxPages) * maxPages + 1;
			if (__mod__ (currentPage, maxPages) == 0) {
				startPage -= maxPages;
			}
			if (currentPage > maxPages) {
				self.add_number (1, '<<');
				self.add_number (startPage - 1, '<');
			}
			if (pageCount > 1) {
				var i = startPage;
				while (i < startPage + maxPages && i <= pageCount) {
					var li = self.add_number (i);
					if (i == currentPage) {
						li.element.classList.add (self.active_class);
					}
					i += 1;
				}
				if (startPage + maxPages <= pageCount) {
					self.add_number (startPage + maxPages, '>');
					self.add_number (pageCount, '>>');
				}
			}
		}
	});},
	get add_number () {return __get__ (this, function (self, number, text) {
		if (typeof text == 'undefined' || (text != null && text.hasOwnProperty ("__kwargtrans__"))) {;
			var text = null;
		};
		var li = paged_list_Element ('li').attr ('class', 'page-item');
		self.number_list.append (li);
		var a = paged_list_Element ('a').attr ('href', '#').attr ('class', 'page-link');
		li.append (a);
		if (!(text == null)) {
			a.element.innerHTML = text;
		}
		else {
			a.element.innerHTML = number;
		}
		a.element.onclick = self.paged_list.get_data.bind (null, number, true);
		return li;
	});}
});
var DataServer =  __class__ ('DataServer', [object], {
	__module__: paged_list_name_,
	get __init__ () {return __get__ (this, function (self) {
		// pass;
	});},
	get get_page_data () {return __get__ (this, function (self, data, onSucces, onFailure) {
		console.error ('Server.get_page_data should be overridden.');
	});}
});
var AjaxServer =  __class__ ('AjaxServer', [DataServer], {
	__module__: paged_list_name_,
	get __init__ () {return __get__ (this, function (self, url) {
		DataServer.__init__ (self);
		self.url = url;
	});},
	get get_page_data () {return __get__ (this, function (self, data, onSucces, onFailure) {
		var ajaxCall = dict ([['type', 'POST'], ['url', self.url], ['data', JSON.stringify (data)], ['success', onSucces], ['error', onFailure], ['contentType', 'application/json; charset=utf-8']]);
		$.ajax (ajaxCall);
	});}
});
var FakeServer =  __class__ ('FakeServer', [DataServer], {
	__module__: paged_list_name_,
	get __init__ () {return __get__ (this, function (self) {
		DataServer.__init__ (self);
		self.data = [];
		self.data_filtered = [];
	});},
	get getMaxId () {return __get__ (this, function (self) {
		var result = 0;
		for (var item of self.data) {
			if (item ['Id'] > result) {
				var result = item ['Id'];
			}
		}
	});},
	get addData () {return __get__ (this, function (self) {
		var py_items = tuple ([].slice.apply (arguments).slice (1));
		for (var item of py_items) {
			self.data.append (item);
		}
	});},
	get get_data () {return __get__ (this, function (self) {
		return self.data;
	});},
	get clear_data () {return __get__ (this, function (self) {
		self.data = [];
	});},
	get get_item () {return __get__ (this, function (self, id) {
		for (var item of self.data) {
			if (item ['Id'] == id) {
				return item;
			}
		}
		return null;
	});},
	get delete_item () {return __get__ (this, function (self, id) {
		var i = 0;
		while (i < self.data.length) {
			if (self.data [i] ['Id'] == id) {
				self.data.splice (i, 1);
				break;
			}
			i += 1;
		}
	});},
	get get_nested_value () {return function (obj, fields) {
		if (obj == null || len (fields) == 0) {
			return obj;
		}
		return FakeServer.get_nested_value (obj [fields [0]], fields.__getslice__ (1, null, 1));
	};},
	get get_filters () {return __get__ (this, function (self, filterColumns, filterValues) {
		var result = [];
		var passFilter = function (field, value, item) {
			var itemValue = FakeServer.get_nested_value (item, field.py_split ('.'));
			if (itemValue == null) {
				return false;
			}
			if (Object.prototype.toString.call (itemValue) == '[object Number]') {
				if (isNaN (value)) {
					return false;
				}
				else {
					return itemValue == parseFloat (value);
				}
			}
			var match = itemValue.toString ().toLowerCase ().indexOf (value.toString ().toLowerCase ());
			return match > -(1);
		};
		for (var i = 0; i < filterColumns.length; i++) {
			if (!(filterValues [i] == '')) {
				result.append (passFilter.bind (null, filterColumns [i], filterValues [i]));
			}
		}
		return result;
	});},
	get get_page_data () {return __get__ (this, function (self, data, onSucces, onFailure) {
		var py_items = [];
		var filters = self.get_filters (data.filterColumns, data.filterValues);
		for (var item of self.data) {
			if (filters.every ((function __lambda__ (passFilter) {
				return passFilter (item);
			}))) {
				py_items.append (item);
			}
		}
		var fields = data.sortOn.py_split ('.');
		var compare = function (a, b) {
			var aValue = FakeServer.get_nested_value (a, fields);
			var bValue = FakeServer.get_nested_value (b, fields);
			if (!(aValue == null) && !(bValue == null)) {
				var isNumber = function (v) {
					return Object.prototype.toString.call (v) == '[object Number]';
				};
				if (isNumber (aValue) && isNumber (bValue)) {
					return aValue - bValue;
				}
				else {
					return aValue.toString ().localeCompare (bValue.toString ());
				}
			}
			else if (aValue == null && bValue == null) {
				return 0;
			}
			else if (aValue == null) {
				return -(1);
			}
			else {
				return 1;
			}
		};
		if (!(data.sortOn == '')) {
			if (data.sortAsc) {
				py_items.sort ((function __lambda__ (a, b) {
					return compare (a, b);
				}));
			}
			else {
				py_items.sort ((function __lambda__ (b, a) {
					return compare (a, b);
				}));
			}
		}
		var totalCount = py_items.length;
		var nrOfPages = Math.max (1, Math.ceil (py_items.length / data.pageSize));
		var page = (data.page > nrOfPages ? nrOfPages : (data.page < 1 ? 1 : data.page));
		var indexFrom = (page - 1) * data.pageSize;
		var indexTo = indexFrom + data.pageSize;
		self.data_filtered = py_items;
		var py_items = py_items.__getslice__ (indexFrom, indexTo, 1);
		var result = dict ({});
		result ['Items'] = py_items;
		result ['CurrentPage'] = page;
		result ['PageCount'] = nrOfPages;
		result ['TotalCount'] = totalCount;
		onSucces (result);
	});}
});

//# sourceMappingURL=paged_list.map
// CONCATENATED MODULE: ./python/__target__/utils.js
// Transcrypt'ed from Python, 2020-11-23 14:48:48

var utils_name_ = 'utils';
var sleep = async function (time) {
	var deferred = $.Deferred ();
	setTimeout ((function __lambda__ () {
		return deferred.resolve ();
	}), time * 1000.0);
	return deferred.promise ();
};
var get_url = function (path) {
	if (typeof path == 'undefined' || (path != null && path.hasOwnProperty ("__kwargtrans__"))) {;
		var path = '';
	};
	var loc = window.location;
	return '{}/{}'.format (loc.origin, path);
};
var redirect_relative = function (path) {
	if (typeof path == 'undefined' || (path != null && path.hasOwnProperty ("__kwargtrans__"))) {;
		var path = '';
	};
	var loc = window.location;
	while (len (path) > 0 && path [0] == '/') {
		var path = path.__getslice__ (1, null, 1);
	}
	var new_url = '{}/{}'.format (loc.origin, path);
	window.location.href = new_url;
};
var redirect = function (url) {
	if (typeof url == 'undefined' || (url != null && url.hasOwnProperty ("__kwargtrans__"))) {;
		var url = '';
	};
	window.location.href = url;
};
var post = async function (url, data, json_parse, content_type) {
	if (typeof json_parse == 'undefined' || (json_parse != null && json_parse.hasOwnProperty ("__kwargtrans__"))) {;
		var json_parse = true;
	};
	if (typeof content_type == 'undefined' || (content_type != null && content_type.hasOwnProperty ("__kwargtrans__"))) {;
		var content_type = null;
	};
	var deferred = $.Deferred ();
	var success = function (result) {
		if (json_parse) {
			var r = JSON.parse (result);
			if (r.hasOwnProperty ('LoginException')) {
				redirect_relative ('login/');
			}
			deferred.resolve (r);
		}
		else {
			deferred.resolve (result);
		}
	};
	var error = function (result) {
		deferred.reject (result);
	};
	if (json_parse) {
		var data = JSON.stringify (data);
	}
	if (content_type === null) {
		var content_type = 'application/json; charset=utf-8';
	}
	$.ajax (dict ([['type', 'POST'], ['url', url], ['data', data], ['success', success], ['error', error], ['contentType', content_type]]));
	return deferred.promise ();
};
var example_handle_progress = function (event) {
	var percent = 0;
	var position = event.loaded || event.position;
	var total = event.total;
	if (event.lengthComputable) {
		var percent = Math.ceil ((position / total) * 100);
		console.log (percent);
	}
};
var utils_handle_progress = function (func) {
	var percent = 0;
	var position = event.loaded || event.position;
	var total = event.total;
	if (event.lengthComputable) {
		var percent = Math.ceil ((position / total) * 100);
		func (percent);
	}
};
var post_upload_file = async function (url, file, handle_progress) {
	if (typeof handle_progress == 'undefined' || (handle_progress != null && handle_progress.hasOwnProperty ("__kwargtrans__"))) {;
		var handle_progress = null;
	};
	var deferred = $.Deferred ();
	var success = function (result) {
		deferred.resolve (JSON.parse (result));
	};
	var error = function (result) {
		deferred.reject (result);
	};
	var form_data = new FormData ();
	form_data.append ('file', file, file ['name']);
	form_data.append ('upload_file', true);
	var xhr = function () {
		var r = $.ajaxSettings.xhr ();
		if (r.upload && handle_progress !== null) {
			r.upload.addEventListener ('progress', handle_progress, false);
		}
		return r;
	};
	$.ajax (dict ([['type', 'POST'], ['url', url], ['xhr', xhr], ['success', success], ['error', error], ['async', true], ['data', form_data], ['cache', false], ['contentType', false], ['processData', false], ['timeout', 60000]]));
	return deferred.promise ();
};
var post_download_file = async function (url, data, filename, handle_progress) {
	if (typeof handle_progress == 'undefined' || (handle_progress != null && handle_progress.hasOwnProperty ("__kwargtrans__"))) {;
		var handle_progress = null;
	};
	var deferred = $.Deferred ();
	var xhr = new XMLHttpRequest ();
	xhr.open ('POST', url);
	xhr.responseType = 'blob';
	if (handle_progress !== null) {
		xhr.onprogress = handle_progress;
	}
	xhr.send (JSON.stringify (data));
	var onload = function (evt) {
		if (evt.currentTarget.status == 200) {
			save_blob_to_file (evt.target.response, filename);
		}
		deferred.resolve ();
	};
	xhr.onload = onload;
	return deferred.promise ();
};
var save_file = function (txt, filename) {
	saveAs (new Blob ([txt], dict ([['type', 'text/plain;charset=utf-8']])), filename);
};
var save_blob_to_file = function (blob, filename) {
	var a = document.createElement ('a');
	a.style = 'display: none';
	document.body.appendChild (a);
	var url = window.URL.createObjectURL (blob);
	a.href = url;
	a.download = filename;
	a.click ();
	window.URL.revokeObjectURL (url);
};

//# sourceMappingURL=utils.map
// CONCATENATED MODULE: ./python/__target__/dialogs.js
// Transcrypt'ed from Python, 2020-11-23 14:48:46
var paged_list = {};
var utils = {};


__nest__ (paged_list, '', paged_list_namespaceObject);


__nest__ (utils, '', utils_namespaceObject);
var dialogs_name_ = 'dialogs';
var Dialog =  __class__ ('Dialog', [ElementWrapper], {
	__module__: dialogs_name_,
	get __init__ () {return __get__ (this, function (self, title) {
		__super__ (Dialog, '__init__') (self, elements_element ('div'));
		var E = Element;
		self.attr ('class', 'modal fade').attr ('role', 'dialog');
		self.title = E ('h5').attr ('class', 'modal-title').inner_html (title);
		self.body = E ('div').attr ('class', 'modal-body');
		self.footer = E ('div').attr ('class', 'modal-footer');
		self.modal_dialog = E ('div').attr ('class', 'modal-dialog').attr ('role', 'document').attr ('style', 'max-width:70%;').append (E ('div').attr ('class', 'modal-content').append (E ('div').attr ('class', 'modal-header').append (self.title, E ('button').attr ('type', 'button').attr ('class', 'close').attr ('data-dismiss', 'modal').attr ('aria-label', 'Close').append (E ('span').inner_html ('&times;'))), self.body, self.footer));
		self.append (self.modal_dialog);
		$ (self.element).on ('hidden.bs.modal', self.on_hide);
	});},
	get show () {return __get__ (this, function (self) {
		$ (self.element).modal ('show');
	});},
	get hide () {return __get__ (this, function (self) {
		$ (self.element).modal ('hide');
	});},
	get toggle () {return __get__ (this, function (self) {
		$ (self.element).modal ('toggle');
	});},
	get dispose () {return __get__ (this, function (self) {
		$ (self.element).modal ('dispose');
		setTimeout ((function __lambda__ () {
			return self.remove_from_parent ();
		}), 2.0 * 1000.0);
	});},
	get set_title () {return __get__ (this, function (self, title) {
		return self.title.inner_html (title);
	});},
	get on_hide () {return __get__ (this, function (self) {
		var args = tuple ([].slice.apply (arguments).slice (1));
		// pass;
	});},
	get add_button () {return __get__ (this, function (self, style_classes, text) {
		var E = Element;
		var button = E ('button').attr ('type', 'button').attr ('class', style_classes).inner_html (text);
		self.footer.append (button);
		return button;
	});},
	get add_button_close () {return __get__ (this, function (self) {
		return self.add_button ('btn btn-secondary', 'Close').attr ('data-dismiss', 'modal');
	});},
	get add_button_save () {return __get__ (this, function (self) {
		return self.add_button ('btn btn-primary', 'Save');
	});}
});
var DialogConfirm =  __class__ ('DialogConfirm', [Dialog], {
	__module__: dialogs_name_,
	get __init__ () {return __get__ (this, function (self, title) {
		if (typeof title == 'undefined' || (title != null && title.hasOwnProperty ("__kwargtrans__"))) {;
			var title = 'Bevestigen a.u.b.';
		};
		__super__ (DialogConfirm, '__init__') (self, title);
		var button_confirm = self.add_button ('btn btn-primary', 'Confirm').attr ('data-dismiss', 'modal');
		var button_cancel = self.add_button ('btn btn-secondary', 'Cancel').attr ('data-dismiss', 'modal');
		self.deferred = null;
		button_confirm.element.onclick = (function __lambda__ (evt) {
			return self.on_button_click (true);
		});
		button_cancel.element.onclick = (function __lambda__ (evt) {
			return self.on_button_click (false);
		});
	});},
	get on_button_click () {return __get__ (this, function (self, confirm) {
		if (self.deferred !== null) {
			self.deferred.resolve (confirm);
			self.deferred = null;
		}
		self.hide ();
	});},
	get get_confirm () {return __get__ (this, async function (self, txt) {
		self.body.inner_html (txt);
		self.deferred = $.Deferred ();
		self.show ();
		return self.deferred.promise ();
	});}
});
var dialog_confirm = DialogConfirm ();
var DialogLogin =  __class__ ('DialogLogin', [Dialog], {
	__module__: dialogs_name_,
	get __init__ () {return __get__ (this, function (self) {
		__super__ (DialogLogin, '__init__') (self, 'Login');
		self.modal_dialog.element.style.maxWidth = '500px';
		var E = Element;
		self.deferred = null;
		self.add_button_close ();
		var button_login = self.add_button ('btn btn-primary', 'Login');
		button_login.element.onclick = (function __lambda__ (evt) {
			return self.on_login ();
		});
		var container = E ('div').attr ('class', 'container');
		self.body.append (container);
		self.input_username = E ('input');
		self.input_password = E ('input').attr ('type', 'password');
		container.append (E ('div').attr ('class', 'form-group row').append (E ('label').inner_html ('Username').attr ('class', 'col-sm-3'), self.input_username.attr ('class', 'form-control col-sm-8')), E ('div').attr ('class', 'form-group row').append (E ('label').inner_html ('Password').attr ('class', 'col-sm-3'), self.input_password.attr ('class', 'form-control col-sm-8')));
	});},
	get on_login () {return __get__ (this, function (self) {
		if (self.deferred !== null) {
			self.deferred.resolve (dict ([['username', self.input_username.element.value], ['password', self.input_password.element.value]]));
			self.deferred = null;
		}
	});},
	get on_hide () {return __get__ (this, function (self) {
		if (self.deferred !== null) {
			self.deferred.reject ();
			self.deferred = null;
		}
	});},
	get get_value () {return __get__ (this, function (self) {
		self.deferred = $.Deferred ();
		self.show ();
		return self.deferred.promise ();
	});}
});
var dialog_login = DialogLogin ();
var DialogListSelect =  __class__ ('DialogListSelect', [Dialog], {
	__module__: dialogs_name_,
	get __init__ () {return __get__ (this, function (self, title, element, list) {
		__super__ (DialogListSelect, '__init__') (self, title);
		self.list = list;
		self.body.append (element);
		var button_select = self.list.add_button ('select', 'Select', 'btn btn-primary btn-sm');
		button_select.onclick (self.on_select);
		var button_close = self.add_button_close ();
		button_close.element.onclick = (function __lambda__ (evt) {
			return self.on_select (null);
		});
		self.deferred = null;
	});},
	get on_select () {return __get__ (this, function (self, item) {
		if (self.deferred !== null) {
			self.deferred.resolve (item);
			self.deferred = null;
		}
		self.hide ();
	});},
	get get_value () {return __get__ (this, async function (self) {
		self.deferred = $.Deferred ();
		self.list.refresh ();
		self.show ();
		return self.deferred.promise ();
	});}
});
var DialogSelect =  __class__ ('DialogSelect', [Dialog], {
	__module__: dialogs_name_,
	get __init__ () {return __get__ (this, function (self, title, options) {
		__super__ (DialogSelect, '__init__') (self, title);
		var E = Element;
		self.select_element = E ('select').attr ('class', 'form-control');
		if (options !== null) {
			self.set_options (options);
		}
		self.body.append (E ('div').attr ('class', 'form-group').append (self.select_element));
		self.deferred = null;
		self.add_button_close ();
		var button_next = self.add_button ('btn btn-primary', 'Next');
		button_next.element.onclick = (function __lambda__ (evt) {
			return self.on_next (self.select_element.element.value);
		});
	});},
	get set_options () {return __get__ (this, function (self, options) {
		var E = Element;
		for (var [value, text] of options) {
			self.select_element.append (E ('option').attr ('value', value).inner_html (text));
		}
		return self;
	});},
	get on_next () {return __get__ (this, function (self, selected_value) {
		if (self.deferred !== null) {
			self.deferred.resolve (selected_value);
			self.deferred = null;
		}
		self.hide ();
	});},
	get get_value () {return __get__ (this, async function (self) {
		self.deferred = $.Deferred ();
		self.show ();
		return self.deferred.promise ();
	});}
});

//# sourceMappingURL=dialogs.map
// CONCATENATED MODULE: ./python/__target__/pages.page_overview.js
// Transcrypt'ed from Python, 2020-11-23 14:48:48
var pages_page_overview_utils = {};






__nest__ (pages_page_overview_utils, '', utils_namespaceObject);
var pages_page_overview_name_ = 'pages.page_overview';
var pages_page_overview_E = Element;
var ButtonsSettings =  __class__ ('ButtonsSettings', [ElementWrapper], {
	__module__: pages_page_overview_name_,
	get __init__ () {return __get__ (this, function (self) {
		__super__ (ButtonsSettings, '__init__') (self, elements_element ('table'));
		self.sources_destinations = null;
		var checkbox_connect = pages_page_overview_E ('input').attr ('type', 'checkbox');
		self.checkbox_connect = checkbox_connect;
		var checkbox_auto_switch = pages_page_overview_E ('input').attr ('type', 'checkbox');
		var tr_auto_switch = pages_page_overview_E ('tr').append (pages_page_overview_E ('td').append (pages_page_overview_E ('span').inner_html ('Automatisch bron kiezen')), pages_page_overview_E ('td').attr ('style', 'padding: 10px 0px 0px 10px;').append (pages_page_overview_E ('label').attr ('class', 'switch').append (checkbox_auto_switch, pages_page_overview_E ('span').attr ('class', 'slider round'))));
		self.append (pages_page_overview_E ('tbody').append (pages_page_overview_E ('tr').append (pages_page_overview_E ('td').append (pages_page_overview_E ('span').inner_html ('Bron en bestemming(en) verbinden')), pages_page_overview_E ('td').attr ('style', 'padding: 10px 0px 0px 10px;').append (pages_page_overview_E ('label').attr ('class', 'switch').append (checkbox_connect, pages_page_overview_E ('span').attr ('class', 'slider round')))), tr_auto_switch));
		var set_inputs = function (settings) {
			checkbox_connect.element.checked = settings ['connect_source_destination'];
			checkbox_auto_switch.element.checked = settings ['enable_auto_switch'];
			tr_auto_switch.element.style.display = 'none';
			if (settings ['enable_option_auto_switch']) {
				tr_auto_switch.element.style.display = '';
			}
			self.sources_destinations.refresh ();
		};
		var onchange = async function (evt) {
			var settings = dict ([['connect_source_destination', checkbox_connect.element.checked], ['enable_auto_switch', checkbox_auto_switch.element.checked]]);
			var r = await pages_page_overview_utils.post (pages_page_overview_utils.get_url ('general/setSettings'), settings);
			set_inputs (r);
		};
		checkbox_connect.element.onchange = onchange;
		checkbox_auto_switch.element.onchange = onchange;
		var initialize = async function () {
			var r = await pages_page_overview_utils.post (pages_page_overview_utils.get_url ('general/getSettings'), dict ({}));
			set_inputs (r);
			set_title (r ['title']);
		};
		self.refresh = initialize;
	});}
});
var SourcesDestinations =  __class__ ('SourcesDestinations', [ElementWrapper], {
	__module__: pages_page_overview_name_,
	get __init__ () {return __get__ (this, function (self) {
		__super__ (SourcesDestinations, '__init__') (self, elements_element ('table'));
		self.buttons_settings = null;
		self.attr ('class', 'table borderless');
		self.td_sources = pages_page_overview_E ('td');
		self.td_destinations = pages_page_overview_E ('td');
		self.append (pages_page_overview_E ('thead').attr ('style', 'border-bottom: solid rgb(200,200,200);').append (pages_page_overview_E ('tr').append (pages_page_overview_E ('th').inner_html ('Bron'), pages_page_overview_E ('th').inner_html (''), pages_page_overview_E ('th').inner_html ('Bestemming'))), pages_page_overview_E ('tbody').append (pages_page_overview_E ('tr').append (pages_page_overview_E ('td'), pages_page_overview_E ('td'), pages_page_overview_E ('td')), pages_page_overview_E ('tr').append (self.td_sources.attr ('class', 'container').attr ('style', 'width: 250px;'), pages_page_overview_E ('td').attr ('style', 'width: 220px;').append (pages_page_overview_E ('img').attr ('src', '/static/pictures/connected.png').attr ('style', 'width: 160px;')), self.td_destinations.attr ('style', 'width: 250px;'))));
		var get_sources = async function () {
			self.sources = await pages_page_overview_utils.post (pages_page_overview_utils.get_url ('general/getSources'), dict ({}));
		};
		var select_source = async function (radio_button, source, evt) {
			if (radio_button.element.checked) {
				for (var s of self.sources) {
					s ['selected'] = false;
				}
				source ['selected'] = true;
				self.sources = await pages_page_overview_utils.post (pages_page_overview_utils.get_url ('general/setSources'), dict ([['sources', self.sources]]));
				show_sources ();
			}
		};
		var get_destinations = async function () {
			self.destinations = await pages_page_overview_utils.post (pages_page_overview_utils.get_url ('general/getDestinations'), dict ({}));
		};
		var select_destination = async function (checkbox, destination, evt) {
			destination ['selected'] = checkbox.element.checked;
			self.destinations = await pages_page_overview_utils.post (pages_page_overview_utils.get_url ('general/setDestinations'), dict ([['destinations', self.destinations]]));
			show_destinations ();
		};
		var volume_spans = dict ({});
		var show_sources = function () {
			self.td_sources.remove_childs ();
			volume_spans.py_clear ();
			for (var s of self.sources) {
				var volume_span = pages_page_overview_E ('span');
				volume_spans [str (s.id)] = volume_span;
				if (s ['enabled']) {
					var radio_button = pages_page_overview_E ('input').attr ('type', 'radio').attr ('name', 'select_source');
					radio_button.element.checked = s ['selected'];
					radio_button.element.onchange = select_source.bind (null, radio_button, s);
					self.td_sources.append (pages_page_overview_E ('div').attr ('class', 'row').append (pages_page_overview_E ('div').attr ('class', 'radio col-sm-9').append (pages_page_overview_E ('label').attr ('style', 'white-space: nowrap;').append (radio_button, pages_page_overview_E ('span').inner_html ('  '), pages_page_overview_E ('span').inner_html (s ['name']))), pages_page_overview_E ('div').attr ('class', 'col-sm-3').append (volume_span)));
				}
			}
		};
		var show_destinations = function () {
			self.td_destinations.remove_childs ();
			for (var d of self.destinations) {
				if (d ['enabled']) {
					var checkbox = pages_page_overview_E ('input').attr ('type', 'checkbox');
					checkbox.element.checked = d ['selected'];
					checkbox.element.onchange = select_destination.bind (null, checkbox, d);
					self.td_destinations.append (pages_page_overview_E ('div').attr ('class', 'radio').append (pages_page_overview_E ('label').attr ('style', 'white-space: nowrap;').append (pages_page_overview_E ('label').attr ('class', 'switch').append (checkbox, pages_page_overview_E ('span').attr ('class', 'slider round')), pages_page_overview_E ('span').inner_html ('  '), pages_page_overview_E ('span').inner_html (d ['name']))));
				}
			}
		};
		var update_volume_level = async function () {
			var volume_off = '';
			var volume_on = 'fas fa-volume-up';
			while (true) {
				try {
					var inputLevels = await pages_page_overview_utils.post (pages_page_overview_utils.get_url ('general/getInputLevels'), dict ({}));
					var inputLevels = dict (inputLevels);
					for (var [source_id, level] of inputLevels.py_items ()) {
						var span = volume_spans [str (source_id)];
						if (level ['level'] !== null && level ['level'] >= level ['threshold']) {
							span.attr ('class', volume_on).attr ('title', str (level ['level']));
						}
						else {
							span.attr ('class', volume_off);
							if (level ['level'] !== null) {
								span.attr ('title', str (level ['level']));
							}
						}
					}
				}
				catch (__except0__) {
					// pass;
				}
				await pages_page_overview_utils.sleep (3);
			}
		};
		var initialize = async function () {
			var connected = (self.buttons_settings !== null ? self.buttons_settings.checkbox_connect.element.checked : true);
			if (connected) {
				self.element.style.display = 'block';
				await get_sources ();
				await get_destinations ();
				show_sources ();
				show_destinations ();
			}
			else {
				self.element.style.display = 'none';
			}
		};
		self.refresh = initialize;
		update_volume_level ();
	});}
});
var Page =  __class__ ('Page', [ElementWrapper], {
	__module__: pages_page_overview_name_,
	get __init__ () {return __get__ (this, function (self) {
		__super__ (Page, '__init__') (self, elements_element ('div'));
		self.attr ('style', 'max-width: 1000px;');
		var buttons_settings = ButtonsSettings ();
		var sources_destinations = SourcesDestinations ();
		buttons_settings.sources_destinations = sources_destinations;
		sources_destinations.buttons_settings = buttons_settings;
		self.append (buttons_settings, sources_destinations);
		self.refresh = (function __lambda__ () {
			return buttons_settings.refresh ();
		});
	});},
	get show () {return __get__ (this, function (self) {
		main.remove_childs ();
		main.append (self);
		self.refresh ();
	});}
});

//# sourceMappingURL=pages.page_overview.map
// CONCATENATED MODULE: ./python/__target__/pages.page_admin.js
// Transcrypt'ed from Python, 2020-11-23 14:48:48
var pages_page_admin_utils = {};








__nest__ (pages_page_admin_utils, '', utils_namespaceObject);
var pages_page_admin_name_ = 'pages.page_admin';
var pages_page_admin_E = Element;
var AccordionItem =  __class__ ('AccordionItem', [ElementWrapper], {
	__module__: pages_page_admin_name_,
	get __init__ () {return __get__ (this, function (self, heading_title) {
		__super__ (AccordionItem, '__init__') (self, elements_element ('div'));
		self.arrow_down = pages_page_admin_E ('span').attr ('class', 'fas fa-chevron-down');
		self.arrow_up = pages_page_admin_E ('span').attr ('class', 'fas fa-chevron-up');
		self.arrow_up.element.style.display = 'none';
		self.heading = pages_page_admin_E ('div').attr ('class', 'accordion_head bg-dark text-white').append (self.arrow_down, self.arrow_up, pages_page_admin_E ('span').inner_html (' '), pages_page_admin_E ('span').inner_html (heading_title));
		self.body = pages_page_admin_E ('div').attr ('class', 'accordion_body');
		self.body.element.style.display = 'none';
		self.append (self.heading, self.body);
		self.heading.element.onclick = self.show_hide;
		self.refresh = (function __lambda__ () {
			return null;
		});
	});},
	get show_hide () {return __get__ (this, function (self, evt) {
		$ (self.arrow_up.element).toggle (0);
		$ (self.arrow_down.element).toggle (0);
		$ (self.body.element).toggle (200);
	});}
});
var Settings =  __class__ ('Settings', [AccordionItem], {
	__module__: pages_page_admin_name_,
	get __init__ () {return __get__ (this, function (self) {
		__super__ (Settings, '__init__') (self, 'Instellingen');
		var input_title = pages_page_admin_E ('input').attr ('class', 'form-control').attr ('type', 'text');
		var input_nr_in_ports = pages_page_admin_E ('input').attr ('class', 'form-control').attr ('type', 'number');
		var input_nr_out_ports = pages_page_admin_E ('input').attr ('class', 'form-control').attr ('type', 'number');
		var input_port_in_stream = pages_page_admin_E ('input').attr ('class', 'form-control').attr ('type', 'text');
		var input_port_out_stream = pages_page_admin_E ('input').attr ('class', 'form-control').attr ('type', 'text');
		var input_auto_switch = pages_page_admin_E ('input').attr ('class', 'form-control').attr ('type', 'checkbox');
		var input_timeout = pages_page_admin_E ('input').attr ('class', 'form-control').attr ('type', 'number');
		var width_1 = 'col-sm-5';
		var width_2 = 'col-sm-3';
		self.body.append (pages_page_admin_E ('div').attr ('class', 'form-group row').append (pages_page_admin_E ('label').attr ('class', '{} col-form-label'.format (width_1)).inner_html ('Titel'), pages_page_admin_E ('div').attr ('class', '{}'.format (width_2)).append (input_title)), pages_page_admin_E ('div').attr ('class', 'form-group row').append (pages_page_admin_E ('label').attr ('class', '{} col-form-label'.format (width_1)).inner_html ('Aantal IN poorten'), pages_page_admin_E ('div').attr ('class', '{}'.format (width_2)).append (input_nr_in_ports)), pages_page_admin_E ('div').attr ('class', 'form-group row').append (pages_page_admin_E ('label').attr ('class', '{} col-form-label'.format (width_1)).inner_html ('Aantal OUT poorten'), pages_page_admin_E ('div').attr ('class', '{}'.format (width_2)).append (input_nr_out_ports)), pages_page_admin_E ('div').attr ('class', 'form-group row').append (pages_page_admin_E ('label').attr ('class', '{} col-form-label'.format (width_1)).inner_html ('IN poort voor URL streams'), pages_page_admin_E ('div').attr ('class', '{}'.format (width_2)).append (input_port_in_stream)), pages_page_admin_E ('div').attr ('class', 'form-group row').append (pages_page_admin_E ('label').attr ('class', '{} col-form-label'.format (width_1)).inner_html ('OUT poort voor URL stream'), pages_page_admin_E ('div').attr ('class', '{}'.format (width_2)).append (input_port_out_stream)), pages_page_admin_E ('div').attr ('class', 'form-group row').append (pages_page_admin_E ('label').attr ('class', '{} col-form-label'.format (width_1)).inner_html ("Inschakelen optie 'Automatisch schakelen'"), pages_page_admin_E ('div').attr ('class', '{}'.format (width_2)).append (input_auto_switch)), pages_page_admin_E ('div').attr ('class', 'form-group row').append (pages_page_admin_E ('label').attr ('class', '{} col-form-label'.format (width_1)).inner_html ("Wachttijd (minuten) voor 'Automatisch schakelen'"), pages_page_admin_E ('div').attr ('class', '{}'.format (width_2)).append (input_timeout)));
		var get_inputs = function () {
			return dict ([['title', input_title.element.value], ['nr_IN_ports', input_nr_in_ports.element.value], ['nr_OUT_ports', input_nr_out_ports.element.value], ['port_IN_for_streams', input_port_in_stream.element.value], ['port_OUT_to_stream', input_port_out_stream.element.value], ['enable_option_auto_switch', input_auto_switch.element.checked], ['timeout_auto_switch', input_timeout.element.value]]);
		};
		var set_inputs = function (settings) {
			input_title.element.value = settings ['title'];
			input_nr_in_ports.element.value = settings ['nr_IN_ports'];
			input_nr_out_ports.element.value = settings ['nr_OUT_ports'];
			input_port_in_stream.element.value = settings ['port_IN_for_streams'];
			input_port_out_stream.element.value = settings ['port_OUT_to_stream'];
			input_auto_switch.element.checked = settings ['enable_option_auto_switch'];
			input_timeout.element.value = settings ['timeout_auto_switch'];
		};
		var initialize = async function () {
			self.settings = await pages_page_admin_utils.post (pages_page_admin_utils.get_url ('general/getSettings'), dict ({}));
			set_inputs (self.settings);
			set_title (self.settings ['title']);
		};
		var onchange = async function (evt) {
			var settings = get_inputs ();
			self.settings = await pages_page_admin_utils.post (pages_page_admin_utils.get_url ('general/setSettings'), settings);
			set_inputs (self.settings);
		};
		input_title.element.onchange = onchange;
		input_nr_in_ports.element.onchange = onchange;
		input_nr_out_ports.element.onchange = onchange;
		input_port_in_stream.element.onchange = onchange;
		input_port_out_stream.element.onchange = onchange;
		input_auto_switch.element.onchange = onchange;
		input_timeout.element.onchange = onchange;
		self.refresh = initialize;
	});}
});
var pages_page_admin_source = function (py_name, enabled, port_url, scan_prio, db_level, selected) {
	return dict ([['name', py_name], ['enabled', enabled], ['port_url', port_url], ['scan_prio', scan_prio], ['db_level', db_level], ['selected', selected]]);
};
var Sources =  __class__ ('Sources', [AccordionItem], {
	__module__: pages_page_admin_name_,
	get __init__ () {return __get__ (this, function (self) {
		__super__ (Sources, '__init__') (self, 'Bronnen');
		var plist = PagedList (self.body.element, '').hide_count ().disable_pagination ();
		plist.get_styling ().table_class ('table borderless');
		var text_element = function (attr, item) {
			var r = pages_page_admin_E ('input').attr ('type', 'text');
			r.element.value = item [attr];
			var onchange = function (evt) {
				item [attr] = r.element.value;
				save_changes ();
			};
			r.element.onchange = onchange;
			return r.element;
		};
		var checkbox_element = function (attr, item) {
			var r = pages_page_admin_E ('input').attr ('type', 'checkbox');
			r.element.checked = item [attr];
			var onchange = function (evt) {
				item [attr] = r.element.checked;
				save_changes ();
			};
			r.element.onchange = onchange;
			return r.element;
		};
		plist.add_column ('name', 'Naam').item_to_element (text_element.bind (null, 'name'));
		plist.add_column ('enabled', 'Actief').item_to_element (checkbox_element.bind (null, 'enabled'));
		plist.add_column ('port_url', 'Poort / Url').item_to_element (text_element.bind (null, 'port_url'));
		plist.add_column ('scan_prio', 'Prio').item_to_element (text_element.bind (null, 'scan_prio'));
		plist.add_column ('db_level', 'dB level threshold').item_to_element (text_element.bind (null, 'db_level'));
		var delete_item = async function (item) {
			self.sources.remove (item);
			self.sources = await pages_page_admin_utils.post (pages_page_admin_utils.get_url ('general/setSources'), dict ([['sources', self.sources]]));
			plist.get_server ().data = self.sources;
			plist.refresh ();
		};
		var save_changes = async function () {
			self.sources = await pages_page_admin_utils.post (pages_page_admin_utils.get_url ('general/setSources'), dict ([['sources', self.sources]]));
			plist.get_server ().data = self.sources;
			plist.refresh ();
		};
		plist.add_button ('delete', '', 'btn btn-danger btn-sm').use_element ((function __lambda__ (item) {
			return pages_page_admin_E ('i').attr ('class', 'fas fa-trash-alt');
		})).onclick (delete_item);
		var change_order = async function (up, item) {
			var i = self.sources.index (item);
			if (!((-(1) < i && i < len (self.sources)))) {
				return ;
			}
			var j = (up ? i - 1 : i + 1);
			var j = max (0, min (j, len (self.sources) - 1));
			self.sources.remove (item);
			self.sources.insert (j, item);
			self.sources = await pages_page_admin_utils.post (pages_page_admin_utils.get_url ('general/setSources'), dict ([['sources', self.sources]]));
			plist.get_server ().data = self.sources;
			plist.refresh ();
		};
		plist.add_button ('up', '', 'btn btn-primary btn-sm').use_element ((function __lambda__ (item) {
			return pages_page_admin_E ('i').attr ('class', 'fas fa-sort-up').attr ('style', 'font-size: 20px; vertical-align: bottom;');
		})).onclick (change_order.bind (null, true));
		plist.add_button ('down', '', 'btn btn-primary btn-sm').use_element ((function __lambda__ (item) {
			return pages_page_admin_E ('i').attr ('class', 'fas fa-sort-down').attr ('style', 'font-size: 20px; vertical-align: bottom;');
		})).onclick (change_order.bind (null, false));
		var add_item = function (evt) {
			self.sources.append (pages_page_admin_source ('Naam', false, 'IN1', 0, -(60), false));
			plist.get_server ().data = self.sources;
			plist.refresh ();
		};
		var button_add = pages_page_admin_E ('button').attr ('class', 'btn btn-primary btn-sm').inner_html ('Toevoegen');
		button_add.element.onclick = add_item;
		self.body.append (button_add);
		var initialize = async function () {
			self.sources = await pages_page_admin_utils.post (pages_page_admin_utils.get_url ('general/getSources'), dict ({}));
			self.sources = org_transcrypt_runtime_list (self.sources);
			plist.get_server ().data = self.sources;
			plist.refresh ();
		};
		self.refresh = initialize;
	});}
});
var pages_page_admin_destination = function (py_name, enabled, port_url_file, selected) {
	return dict ([['name', py_name], ['enabled', enabled], ['port_url_file', port_url_file], ['selected', selected]]);
};
var Destinations =  __class__ ('Destinations', [AccordionItem], {
	__module__: pages_page_admin_name_,
	get __init__ () {return __get__ (this, function (self) {
		__super__ (Destinations, '__init__') (self, 'Bestemmingen');
		var plist = PagedList (self.body.element, '').hide_count ().disable_pagination ();
		plist.get_styling ().table_class ('table borderless');
		var text_element = function (attr, item) {
			var r = pages_page_admin_E ('input').attr ('type', 'text');
			r.element.value = item [attr];
			var onchange = function (evt) {
				item [attr] = r.element.value;
				save_changes ();
			};
			r.element.onchange = onchange;
			return r.element;
		};
		var checkbox_element = function (attr, item) {
			var r = pages_page_admin_E ('input').attr ('type', 'checkbox');
			r.element.checked = item [attr];
			var onchange = function (evt) {
				item [attr] = r.element.checked;
				save_changes ();
			};
			r.element.onchange = onchange;
			return r.element;
		};
		plist.add_column ('name', 'Naam').item_to_element (text_element.bind (null, 'name'));
		plist.add_column ('enabled', 'Actief').item_to_element (checkbox_element.bind (null, 'enabled'));
		plist.add_column ('port_url_file', 'Poort / Url / File').item_to_element (text_element.bind (null, 'port_url_file'));
		var delete_item = async function (item) {
			self.destinations.remove (item);
			self.destinations = await pages_page_admin_utils.post (pages_page_admin_utils.get_url ('general/setDestinations'), dict ([['destinations', self.destinations]]));
			plist.get_server ().data = self.destinations;
			plist.refresh ();
		};
		var save_changes = async function () {
			self.destinations = await pages_page_admin_utils.post (pages_page_admin_utils.get_url ('general/setDestinations'), dict ([['destinations', self.destinations]]));
			plist.get_server ().data = self.destinations;
			plist.refresh ();
		};
		plist.add_button ('delete', '', 'btn btn-danger btn-sm').use_element ((function __lambda__ (item) {
			return pages_page_admin_E ('i').attr ('class', 'fas fa-trash-alt');
		})).onclick (delete_item);
		var change_order = async function (up, item) {
			var i = self.destinations.index (item);
			if (!((-(1) < i && i < len (self.destinations)))) {
				return ;
			}
			var j = (up ? i - 1 : i + 1);
			var j = max (0, min (j, len (self.destinations) - 1));
			self.destinations.remove (item);
			self.destinations.insert (j, item);
			self.destinations = await pages_page_admin_utils.post (pages_page_admin_utils.get_url ('general/setDestinations'), dict ([['destinations', self.destinations]]));
			plist.get_server ().data = self.destinations;
			plist.refresh ();
		};
		plist.add_button ('up', '', 'btn btn-primary btn-sm').use_element ((function __lambda__ (item) {
			return pages_page_admin_E ('i').attr ('class', 'fas fa-sort-up').attr ('style', 'font-size: 20px; vertical-align: bottom;');
		})).onclick (change_order.bind (null, true));
		plist.add_button ('down', '', 'btn btn-primary btn-sm').use_element ((function __lambda__ (item) {
			return pages_page_admin_E ('i').attr ('class', 'fas fa-sort-down').attr ('style', 'font-size: 20px; vertical-align: bottom;');
		})).onclick (change_order.bind (null, false));
		var add_item = function (evt) {
			self.destinations.append (pages_page_admin_destination ('Naam', false, 'OUT1', false));
			plist.get_server ().data = self.destinations;
			plist.refresh ();
		};
		var button_add = pages_page_admin_E ('button').attr ('class', 'btn btn-primary btn-sm').inner_html ('Toevoegen');
		button_add.element.onclick = add_item;
		self.body.append (button_add);
		var initialize = async function () {
			self.destinations = await pages_page_admin_utils.post (pages_page_admin_utils.get_url ('general/getDestinations'), dict ({}));
			plist.get_server ().data = self.destinations;
			plist.refresh ();
		};
		self.refresh = initialize;
	});}
});
var TestDebug =  __class__ ('TestDebug', [AccordionItem], {
	__module__: pages_page_admin_name_,
	get __init__ () {return __get__ (this, function (self) {
		__super__ (TestDebug, '__init__') (self, 'Test and debug');
		self.button_show_ip = pages_page_admin_E ('button').attr ('class', 'btn btn-primary btn-sm').inner_html ('Toon IP adres');
		self.button_show_routes = pages_page_admin_E ('button').attr ('class', 'btn btn-primary btn-sm').inner_html ('Toon ITEC routes');
		self.button_download_log = pages_page_admin_E ('button').attr ('class', 'btn btn-primary btn-sm').inner_html ('Download log');
		self.button_reboot = pages_page_admin_E ('button').attr ('class', 'btn btn-primary btn-sm').inner_html ('Herstarten');
		self.button_shutdown = pages_page_admin_E ('button').attr ('class', 'btn btn-primary btn-sm').inner_html ('Afsluiten');
		var buttons = [self.button_show_ip, self.button_show_routes, self.button_download_log, self.button_reboot, self.button_shutdown];
		for (var b of buttons) {
			b.attr ('style', 'margin-right: 5px;');
		}
		self.button_show_ip.element.onclick = self.show_ip;
		self.button_show_routes.element.onclick = self.show_routes;
		self.button_download_log.element.onclick = self.download_log;
		self.button_reboot.element.onclick = self.reboot;
		self.button_shutdown.element.onclick = self.shutdown;
		self.body.append (pages_page_admin_E ('div').append (...buttons));
		self.div_info = pages_page_admin_E ('div').attr ('style', 'white-space: pre-wrap;');
		self.body.append (self.div_info);
	});},
	get download_log () {return __get__ (this, async function (self, evt) {
		self.button_download_log.disable ();
		var datetime = luxon.DateTime.local ().toFormat ('yyyyMMdd_HHmm');
		var filename = '{}_logs.tar'.format (datetime);
		await pages_page_admin_utils.post_download_file (pages_page_admin_utils.get_url ('general/downloadLog'), dict ({}), filename);
		self.button_download_log.enable ();
	});},
	get show_ip () {return __get__ (this, async function (self, evt) {
		self.button_show_ip.disable ();
		var txt = await pages_page_admin_utils.post (pages_page_admin_utils.get_url ('general/ifconfig'), dict ({}), false);
		console.log (txt);
		self.div_info.inner_html (txt);
		self.button_show_ip.enable ();
	});},
	get show_routes () {return __get__ (this, async function (self, evt) {
		self.button_show_routes.disable ();
		var txt = await pages_page_admin_utils.post (pages_page_admin_utils.get_url ('general/getRoutes'), dict ({}), false);
		console.log (txt);
		self.div_info.inner_html (txt);
		self.button_show_routes.enable ();
	});},
	get reboot () {return __get__ (this, async function (self, evt) {
		var sure = await dialog_confirm.get_confirm ('Systeem zal worden herstart. Weet u het zeker?');
		if (sure) {
			await pages_page_admin_utils.post (pages_page_admin_utils.get_url ('general/reboot'), dict ({}));
		}
	});},
	get shutdown () {return __get__ (this, async function (self, evt) {
		var sure = await dialog_confirm.get_confirm ('Systeem zal worden uitgeschakeld. Weet u het zeker?');
		if (sure) {
			await pages_page_admin_utils.post (pages_page_admin_utils.get_url ('general/shutdown'), dict ({}));
		}
	});}
});
var pages_page_admin_Page =  __class__ ('Page', [ElementWrapper], {
	__module__: pages_page_admin_name_,
	get __init__ () {return __get__ (this, function (self) {
		__super__ (pages_page_admin_Page, '__init__') (self, elements_element ('div'));
		self.attr ('style', 'max-width: 1000px;');
		self.py_items = [Settings (), Sources (), Destinations (), TestDebug ()];
		for (var i of self.py_items) {
			self.append (i);
		}
		self.button_download = pages_page_admin_E ('button').attr ('class', 'btn btn-primary btn-sm').inner_html ('Download');
		self.button_download.element.onclick = self.download_settings;
		self.file_input = pages_page_admin_E ('input').attr ('type', 'file').attr ('style', 'display: none;');
		self.file_input.element.onchange = self.upload_settings;
		self.button_upload = pages_page_admin_E ('button').attr ('class', 'btn btn-primary btn-sm').inner_html ('Upload');
		self.button_upload.element.onclick = self.click_upload;
		var button_restore = pages_page_admin_E ('button').attr ('class', 'btn btn-secondary btn-sm').inner_html ('Terug naar fabrieksinstellingen');
		button_restore.element.onclick = self.restore_settings;
		var space = function () {
			return pages_page_admin_E ('span').inner_html (' ');
		};
		self.append (pages_page_admin_E ('div').attr ('style', 'margin-top: 15px;').append (self.button_download, space (), self.file_input, self.button_upload, space (), button_restore));
	});},
	get restore_settings () {return __get__ (this, async function (self, evt) {
		var sure = await dialog_confirm.get_confirm ('Terug naar fabrieksinstellingen. Weet u het zeker?');
		if (sure) {
			await pages_page_admin_utils.post (pages_page_admin_utils.get_url ('general/restoreSettings'), dict ({}));
			self.refresh ();
		}
	});},
	get download_settings () {return __get__ (this, async function (self, evt) {
		self.button_download.disable ();
		var datetime = luxon.DateTime.local ().toFormat ('yyyyMMdd_HHmm');
		var filename = '{}_audio_controller_settings.pickle'.format (datetime);
		await pages_page_admin_utils.post_download_file (pages_page_admin_utils.get_url ('general/downloadSettings'), dict ({}), filename);
		self.button_download.enable ();
	});},
	get upload_settings () {return __get__ (this, async function (self, evt) {
		var file = self.file_input.element.files [0];
		self.file_input.element.value = null;
		await pages_page_admin_utils.post_upload_file (pages_page_admin_utils.get_url ('general/uploadSettings'), file);
		pages_page_admin_utils.redirect_relative ('');
	});},
	get click_upload () {return __get__ (this, function (self, evt) {
		self.file_input.element.click ();
	});},
	get refresh () {return __get__ (this, function (self) {
		for (var item of self.py_items) {
			item.refresh ();
		}
	});},
	get show () {return __get__ (this, function (self) {
		main.remove_childs ();
		main.append (self);
		self.refresh ();
	});}
});

//# sourceMappingURL=pages.page_admin.map
// CONCATENATED MODULE: ./python/__target__/pages.page_iframe.js
// Transcrypt'ed from Python, 2020-11-23 14:48:48
var pages_page_iframe_utils = {};








__nest__ (pages_page_iframe_utils, '', utils_namespaceObject);
var pages_page_iframe_name_ = 'pages.page_iframe';
var pages_page_iframe_E = Element;
var pages_page_iframe_Page =  __class__ ('Page', [ElementWrapper], {
	__module__: pages_page_iframe_name_,
	get __init__ () {return __get__ (this, function (self, url) {
		__super__ (pages_page_iframe_Page, '__init__') (self, elements_element ('div'));
		self.attr ('style', 'width: 100%; height: 100%;');
		self.append (pages_page_iframe_E ('iframe').attr ('src', url).attr ('style', 'width: 100%; height: 500px;').attr ('sandbox', 'allow-scripts allow-same-origin'));
	});},
	get refresh () {return __get__ (this, function (self) {
		// pass;
	});},
	get show () {return __get__ (this, function (self) {
		main.remove_childs ();
		main.append (self);
		self.refresh ();
	});}
});

//# sourceMappingURL=pages.page_iframe.map
// CONCATENATED MODULE: ./python/__target__/math.js
// Transcrypt'ed from Python, 2020-11-23 14:48:48

var math_name_ = 'math';
var pi = Math.PI;
var e = Math.E;
var exp = Math.exp;
var expm1 = function (x) {
	return Math.exp (x) - 1;
};
var log = function (x, base) {
	return (base === undefined ? Math.log (x) : Math.log (x) / Math.log (base));
};
var log1p = function (x) {
	return Math.log (x + 1);
};
var log2 = function (x) {
	return Math.log (x) / Math.LN2;
};
var log10 = function (x) {
	return Math.log (x) / Math.LN10;
};
var math_pow = Math.pow;
var sqrt = Math.sqrt;
var sin = Math.sin;
var cos = Math.cos;
var tan = Math.tan;
var asin = Math.asin;
var acos = Math.acos;
var atan = Math.atan;
var atan2 = Math.atan2;
var hypot = Math.hypot;
var degrees = function (x) {
	return (x * 180) / Math.PI;
};
var radians = function (x) {
	return (x * Math.PI) / 180;
};
var sinh = Math.sinh;
var cosh = Math.cosh;
var tanh = Math.tanh;
var asinh = Math.asinh;
var acosh = Math.acosh;
var atanh = Math.atanh;
var floor = Math.floor;
var ceil = Math.ceil;
var trunc = Math.trunc;
var isnan = isNaN;
var inf = Infinity;
var nan = NaN;
var modf = function (n) {
	var sign = (n >= 0 ? 1 : -(1));
	var __left0__ = divmod (abs (n), 1);
	var f = __left0__ [0];
	var mod = __left0__ [1];
	return tuple ([mod * sign, f * sign]);
};

//# sourceMappingURL=math.map
// CONCATENATED MODULE: ./python/__target__/random.js
// Transcrypt'ed from Python, 2020-11-23 14:48:48
var math = {};


__nest__ (math, '', math_namespaceObject);
var random_name_ = 'random';
var _array = (function () {
	var __accu0__ = [];
	for (var i = 0; i < 624; i++) {
		__accu0__.append (0);
	}
	return __accu0__;
}) ();
var _index = 0;
var _bitmask1 = Math.pow (2, 32) - 1;
var _bitmask2 = Math.pow (2, 31);
var _bitmask3 = Math.pow (2, 31) - 1;
var _fill_array = function () {
	for (var i = 0; i < 624; i++) {
		var y = (_array [i] & _bitmask2) + (_array [__mod__ (i + 1, 624)] & _bitmask3);
		_array [i] = _array [__mod__ (i + 397, 624)] ^ y >> 1;
		if (__mod__ (y, 2) != 0) {
			_array [i] ^= 2567483615;
		}
	}
};
var _random_integer = function () {
	if (_index == 0) {
		_fill_array ();
	}
	var y = _array [_index];
	y ^= y >> 11;
	y ^= y << 7 & 2636928640;
	y ^= y << 15 & 4022730752;
	y ^= y >> 18;
	_index = __mod__ (_index + 1, 624);
	return y;
};
var seed = function (x) {
	if (typeof x == 'undefined' || (x != null && x.hasOwnProperty ("__kwargtrans__"))) {;
		var x = org_transcrypt_runtime_int (_bitmask3 * Math.random ());
	};
	_array [0] = x;
	for (var i = 1; i < 624; i++) {
		_array [i] = (1812433253 * _array [i - 1] ^ (_array [i - 1] >> 30) + i) & _bitmask1;
	}
};
var randint = function (a, b) {
	return a + __mod__ (_random_integer (), (b - a) + 1);
};
var choice = function (seq) {
	return seq [randint (0, len (seq) - 1)];
};
var random = function () {
	return _random_integer () / _bitmask3;
};
var shuffle = function (x) {
	for (var i of range (len (x) - 1, 0, -(1))) {
		var j = math.floor (random () * (i + 1));
		var temp = x [i];
		x [i] = x [j];
		x [j] = temp;
	}
};
seed ();

//# sourceMappingURL=random.map
// CONCATENATED MODULE: ./python/__target__/layout.js
// Transcrypt'ed from Python, 2020-11-23 14:48:46
var dialogs = {};
var layout_random = {};
var layout_utils = {};


__nest__ (dialogs, '', dialogs_namespaceObject);





__nest__ (layout_utils, '', utils_namespaceObject);

__nest__ (layout_random, '', random_namespaceObject);
var layout_name_ = 'layout';
var layout_E = Element;
var home = ElementWrapper (get_element ('#home'));
home.inner_html ('Audio Regelaar');
home.element.onclick = (function __lambda__ (evt) {
	return layout_utils.redirect_relative ('');
});
var set_title = function (title) {
	home.inner_html (title);
	window.document.title = title;
};
var is_fullscreen = false;
var click_fullscreen = function () {
	if (is_fullscreen) {
		var elem = window.document;
		var attrs = 'exitFullscreen mozCancelFullScreen webkitExitFullscreen msExitFullscreen'.py_split ();
	}
	else {
		var elem = window.document.documentElement;
		var attrs = 'requestFullscreen mozRequestFullScreen webkitRequestFullscreen msRequestFullscreen'.py_split ();
	}
	for (var attr of attrs) {
		if (hasattr (elem, attr)) {
			elem [attr].call (elem);
			break;
		}
	}
	is_fullscreen = !(is_fullscreen);
};
var main_menu = ElementWrapper (get_element ('#main_menu'));
var main = ElementWrapper (get_element ('#main_container'));
var menu_items = [];
var MenuItem =  __class__ ('MenuItem', [ElementWrapper], {
	__module__: layout_name_,
	get __init__ () {return __get__ (this, function (self) {
		__super__ (MenuItem, '__init__') (self, elements_element ('li'));
		self.title = layout_E ('a').attr ('class', 'nav-link').attr ('href', '#');
		self.attr ('class', 'nav-item').append (self.title);
		menu_items.append (self);
		self.active = false;
	});},
	get set_title () {return __get__ (this, function (self, title) {
		self.title.inner_html (title);
		return self;
	});},
	get activate () {return __get__ (this, function (self, active) {
		self.active = active;
		if (active) {
			self.element.classList.add ('active');
		}
		else {
			self.element.classList.remove ('active');
		}
		return self;
	});},
	get onclick () {return __get__ (this, function (self, evt) {
		for (var mi of menu_items) {
			mi.activate (false);
		}
		self.activate (true);
		self.page.show ();
	});},
	get set_page () {return __get__ (this, function (self, page) {
		self.page = page;
		self.element.onclick = self.onclick;
		return self;
	});}
});
main_menu.append (MenuItem ().set_title ('Bediening').set_page (Page ()), MenuItem ().set_title ('Instellingen').set_page (pages_page_admin_Page ()));
var refresh_after_disconnect = async function () {
	var disconnected = false;
	while (true) {
		await layout_utils.sleep (5);
		try {
			await layout_utils.post (layout_utils.get_url ('general/ping'), dict ({}));
			if (disconnected) {
				console.log ('ping success, now refresh');
				layout_utils.redirect_relative ('');
			}
		}
		catch (__except0__) {
			var disconnected = true;
			console.log ('ping failed');
		}
	}
};
var setup_websocket = function () {
	var socket = io (dict ([['path', '/websocket']]));
	var disconnected = false;
	var on_connect = function () {
		console.log ('websocket connect');
		if (disconnected) {
			layout_utils.redirect_relative ('');
		}
	};
	socket.on ('connect', on_connect);
	var on_disconnect = async function () {
		disconnected = true;
	};
	socket.on ('disconnect', on_disconnect);
	var on_event = function (data) {
		if (data == 'change') {
			for (var mi of menu_items) {
				if (mi.active) {
					mi.page.refresh ();
				}
			}
		}
		else {
			console.log ('unrecognised websocket event:');
			console.log (data);
		}
	};
	socket.on ('event', on_event);
};
var logged_in = false;
var login_and_view = async function () {
	var login_required = await layout_utils.post (layout_utils.get_url ('login/login_required'));
	var login_required = login_required ['login_required'];
	if (login_required) {
		await login ();
	}
	setup_websocket ();
	menu_items [0].onclick ();
};
login_and_view ();
var check_logged_in = async function () {
	if (logged_in) {
		return true;
	}
	else {
		var r = await layout_utils.post (layout_utils.get_url ('login/login'), dict ({}));
		logged_in = r ['success'];
		return logged_in;
	}
};
var login = async function () {
	await check_logged_in ();
	while (!(logged_in)) {
		try {
			var user = await dialogs.dialog_login.get_value ();
			if (user !== null) {
				var r = await layout_utils.post (layout_utils.get_url ('login/login'), user);
				if (r ['success']) {
					logged_in = true;
					dialogs.dialog_login.hide ();
					break;
				}
			}
		}
		catch (__except0__) {
			await layout_utils.sleep (0.1);
		}
	}
};
var logout = async function () {
	logged_in = false;
	var r = await layout_utils.post (layout_utils.get_url ('login/logout'), dict ({}));
	if (r ['success']) {
		layout_utils.redirect_relative ('');
	}
};
var logout_button = function () {
	var r = layout_E ('li').attr ('class', 'nav-item').attr ('style', 'position:absolute; top:1em; right:1em;').append (layout_E ('a').attr ('class', 'nav-link').attr ('style', 'line-height:10px;').inner_html ('Logout'));
	r.element.onclick = (function __lambda__ (evt) {
		return logout ();
	});
	return r;
};
main_menu.append (logout_button ());

//# sourceMappingURL=layout.map
// CONCATENATED MODULE: ./python/__target__/main.js
// Transcrypt'ed from Python, 2020-11-23 14:48:46
var main_elements = {};
var layout = {};
var main_utils = {};


__nest__ (layout, '', layout_namespaceObject);

__nest__ (main_utils, '', utils_namespaceObject);

__nest__ (main_elements, '', elements_namespaceObject);
var main_name_ = '__main__';

//# sourceMappingURL=main.map

/***/ })
/******/ ]);