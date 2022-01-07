var globalThis = this, self = this;
module.exports = {
"ids": [1],
"modules":{

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./src/components/common/validator.ts":
/*!********************************************!*\
  !*** ./src/components/common/validator.ts ***!
  \********************************************/
/*! exports provided: isFunction, isObj, isNumber, isBoolean */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isFunction", function() { return isFunction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObj", function() { return isObj; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNumber", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBoolean", function() { return isBoolean; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


/*
 * @Author: 刘利军
 * @Date: 2021-12-31 14:34:36
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-31 14:34:36
 * @Description:
 * @PageName:
 */
function isFunction(val) {
  return typeof val === "function";
}
function isObj(x) {
  var type = _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(x);

  return x !== null && (type === "object" || type === "function");
}
function isNumber(value) {
  return /^\d+(\.\d+)?$/.test(value);
}
function isBoolean(value) {
  return typeof value === "boolean";
}

/***/ }),

/***/ "./src/components/toast/toast.ts":
/*!***************************************!*\
  !*** ./src/components/toast/toast.ts ***!
  \***************************************/
/*! exports provided: Toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return Toast; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/utils */ "./src/components/common/utils.ts");
/* harmony import */ var _common_validator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/validator */ "./src/components/common/validator.ts");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

/*
 * @Author: 刘利军
 * @Date: 2021-12-30 13:03:11
 * @LastEditors: 刘利军
 * @LastEditTime: 2021-12-31 15:33:18
 * @Description:
 * @PageName:
 */


var defaultOptions = {
  show: true,
  message: "",
  duration: 2,
  zIndex: 2,
  type: "text",
  // text|| success || fail || loading
  selector: "#e-toast"
};
var queue = [];

var currentOptions = _objectSpread({}, defaultOptions);

Component({
  externalClasses: ["e-class"],
  properties: {
    show: Boolean,
    mask: Boolean,
    message: String,
    zIndex: {
      type: Number,
      value: 2
    },
    type: {
      type: String,
      value: "text"
    }
  },
  data: _objectSpread({}, defaultOptions)
}); // API 调用方式

function parseOptions(message) {
  return Object(_common_validator__WEBPACK_IMPORTED_MODULE_2__["isObj"])(message) ? message : {
    message: message
  };
}

function Toast(toastOptions) {
  var options = _objectSpread(_objectSpread({}, defaultOptions), parseOptions(toastOptions));

  var toast = Object(_common_utils__WEBPACK_IMPORTED_MODULE_1__["getContext"])(options.selector);

  if (!toast) {
    return;
  }

  delete options.selector;

  toast.clear = function () {
    toast.setData({
      show: false
    });
  };

  queue.push(toast);
  toast.setData(options);
  clearTimeout(toast.timer);

  if (options.duration != null && options.duration > 0) {
    toast.timer = setTimeout(function () {
      toast.clear();
      queue = queue.filter(function (item) {
        return item !== toast;
      });
    }, options.duration);
  }

  return toast;
}

var createMethod = function createMethod(type) {
  return function (options) {
    return Toast(_objectSpread({
      type: type
    }, parseOptions(options)));
  };
};

Toast.loading = createMethod("loading");
Toast.success = createMethod("success");
Toast.fail = createMethod("fail");

Toast.clear = function () {
  queue.forEach(function (toast) {
    toast.clear();
  });
  queue = [];
};

Toast.setDefaultOptions = function (options) {
  Object.assign(currentOptions, options);
};

Toast.resetDefaultOptions = function () {
  currentOptions = _objectSpread({}, defaultOptions);
};



/***/ })

}};
;