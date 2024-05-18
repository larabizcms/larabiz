"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/app.tsx":
/*!******************************!*\
  !*** ./resources/js/app.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ "./resources/js/store.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _layouts_Master__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layouts/Master */ "./resources/js/layouts/Master.tsx");
/* harmony import */ var _layouts_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layouts/Auth */ "./resources/js/layouts/Auth.tsx");
/* harmony import */ var _views_auth_ForgotPassword__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/auth/ForgotPassword */ "./resources/js/views/auth/ForgotPassword.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









var Login = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("resources_js_views_auth_Login_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/auth/Login */ "./resources/js/views/auth/Login.tsx"));
});
var NotFound = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return __webpack_require__.e(/*! import() */ "resources_js_views_NotFound_tsx").then(__webpack_require__.bind(__webpack_require__, /*! ./views/NotFound */ "./resources/js/views/NotFound.tsx"));
});
var Document = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("resources_js_views_api_Document_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/api/Document */ "./resources/js/views/api/Document.tsx"));
});
var Register = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("resources_js_views_auth_Register_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/auth/Register */ "./resources/js/views/auth/Register.tsx"));
});
var Dashboard = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("resources_js_views_Dashboard_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/Dashboard */ "./resources/js/views/Dashboard.tsx"));
});
var router = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_7__.createBrowserRouter)([{
  path: "/admin-cp",
  element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_layouts_Auth__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
  errorElement: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(NotFound, {}),
  children: [{
    path: "login",
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Login, {})
  }, {
    path: "register",
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Register, {})
  }, {
    path: "forgot-password",
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_views_auth_ForgotPassword__WEBPACK_IMPORTED_MODULE_5__["default"], {})
  }]
}, {
  path: "/admin-cp",
  element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_layouts_Master__WEBPACK_IMPORTED_MODULE_3__["default"], {}),
  errorElement: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(NotFound, {}),
  children: [{
    path: "/admin-cp",
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Dashboard, {})
  }, {
    path: "/admin-cp/:page",
    element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Dashboard, {})
  }]
}, {
  path: "/admin-cp/api-documentation",
  element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(Document, {})
}, {
  path: "*",
  element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(NotFound, {})
}]);
react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("app")).render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_8__.Provider, {
    store: _store__WEBPACK_IMPORTED_MODULE_2__.store,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Suspense, {
      fallback: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        children: "Loading..."
      }),
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.RouterProvider, {
        router: router
      })
    })
  })
}));

/***/ }),

/***/ "./resources/js/components/container/PageContainer.tsx":
/*!*************************************************************!*\
  !*** ./resources/js/components/container/PageContainer.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_helmet_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-helmet-async */ "./node_modules/react-helmet-async/lib/index.module.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
// import { Helmet } from 'react-helmet';



var PageContainer = function PageContainer(_ref) {
  var title = _ref.title,
    description = _ref.description,
    children = _ref.children;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_helmet_async__WEBPACK_IMPORTED_MODULE_0__.HelmetProvider, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_helmet_async__WEBPACK_IMPORTED_MODULE_0__.Helmet, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("title", {
          children: title
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("meta", {
          name: "description",
          content: description
        })]
      }), children]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PageContainer);

/***/ }),

/***/ "./resources/js/components/forms/theme-elements/CustomTextField.tsx":
/*!**************************************************************************!*\
  !*** ./resources/js/components/forms/theme-elements/CustomTextField.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




var CustomTextField = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_2__["default"])(function (props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], _objectSpread({}, props));
})(function (_ref) {
  var theme = _ref.theme;
  return {
    '& .MuiOutlinedInput-input::-webkit-input-placeholder': {
      color: theme.palette.text.secondary,
      opacity: '0.8'
    },
    '& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder': {
      color: theme.palette.text.secondary,
      opacity: '1'
    },
    '& .Mui-disabled .MuiOutlinedInput-notchedOutline': {
      borderColor: theme.palette.grey[200]
    }
  };
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomTextField);

/***/ }),

/***/ "./resources/js/features/auth/authSlice.ts":
/*!*************************************************!*\
  !*** ./resources/js/features/auth/authSlice.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");

var initialState = {
  loading: false,
  userInfo: {},
  // for user object
  userToken: null,
  // for storing the JWT
  error: null,
  success: false // for monitoring the registration process.
};
var authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: 'auth',
  initialState: initialState,
  reducers: {},
  extraReducers: function extraReducers(builder) {
    // Define your extra reducers here
    // builder.addCase(...)
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (authSlice.reducer);

/***/ }),

/***/ "./resources/js/layouts/Auth.tsx":
/*!***************************************!*\
  !*** ./resources/js/layouts/Auth.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Auth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_theme_DefaultColors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/theme/DefaultColors */ "./resources/js/utils/theme/DefaultColors.tsx");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/ThemeProvider.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






function Auth() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"], {
    theme: _utils_theme_DefaultColors__WEBPACK_IMPORTED_MODULE_1__.baselightTheme,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_4__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_5__.Outlet, {})]
  });
}

/***/ }),

/***/ "./resources/js/layouts/Master.tsx":
/*!*****************************************!*\
  !*** ./resources/js/layouts/Master.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Master)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Container/Container.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/Header */ "./resources/js/layouts/header/Header.tsx");
/* harmony import */ var _sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sidebar/Sidebar */ "./resources/js/layouts/sidebar/Sidebar.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/ThemeProvider.js");
/* harmony import */ var _mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/CssBaseline */ "./node_modules/@mui/material/CssBaseline/CssBaseline.js");
/* harmony import */ var _utils_theme_DefaultColors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/theme/DefaultColors */ "./resources/js/utils/theme/DefaultColors.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









var MainWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"])("div")(function () {
  return {
    display: "flex",
    minHeight: "100vh",
    width: "100%"
  };
});
var PageWrapper = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"])("div")(function () {
  return {
    display: "flex",
    flexGrow: 1,
    paddingBottom: "60px",
    flexDirection: "column",
    zIndex: 1,
    backgroundColor: "transparent"
  };
});
function Master() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    isSidebarOpen = _useState2[0],
    setSidebarOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isMobileSidebarOpen = _useState4[0],
    setMobileSidebarOpen = _useState4[1];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__["default"], {
    theme: _utils_theme_DefaultColors__WEBPACK_IMPORTED_MODULE_3__.baselightTheme,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material_CssBaseline__WEBPACK_IMPORTED_MODULE_7__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(MainWrapper, {
      className: "mainwrapper",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_sidebar_Sidebar__WEBPACK_IMPORTED_MODULE_2__["default"], {
        isSidebarOpen: isSidebarOpen,
        isMobileSidebarOpen: isMobileSidebarOpen,
        onSidebarClose: function onSidebarClose() {
          return setMobileSidebarOpen(false);
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(PageWrapper, {
        className: "page-wrapper",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_header_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
          toggleMobileSidebar: function toggleMobileSidebar() {
            return setMobileSidebarOpen(true);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
          sx: {
            paddingTop: "20px",
            maxWidth: "1200px"
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
            sx: {
              minHeight: "calc(100vh - 170px)"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Outlet, {})
          })
        })]
      })]
    })]
  });
}

/***/ }),

/***/ "./resources/js/layouts/header/Header.tsx":
/*!************************************************!*\
  !*** ./resources/js/layouts/header/Header.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/AppBar/AppBar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Toolbar/Toolbar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Badge/Badge.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _Profile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Profile */ "./resources/js/layouts/header/Profile.tsx");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconMenu.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconBellRinging.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }




// components



var Header = function Header(_ref) {
  var toggleMobileSidebar = _ref.toggleMobileSidebar;
  // const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
  // const lgDown = useMediaQuery((theme) => theme.breakpoints.down('lg'));

  var AppBarStyled = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"])(function (_ref2) {
    var theme = _ref2.theme;
    return _defineProperty({
      boxShadow: 'none',
      background: theme.palette.background.paper,
      justifyContent: 'center',
      backdropFilter: 'blur(4px)'
    }, theme.breakpoints.up('lg'), {
      minHeight: '70px'
    });
  });
  var ToolbarStyled = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"])(function (_ref4) {
    var theme = _ref4.theme;
    return {
      width: '100%',
      color: theme.palette.text.secondary
    };
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(AppBarStyled, {
    position: "sticky",
    color: "default",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(ToolbarStyled, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        color: "inherit",
        "aria-label": "menu",
        onClick: toggleMobileSidebar,
        sx: {
          display: {
            lg: "none",
            xs: "inline"
          }
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__["default"], {
          width: "20",
          height: "20"
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        size: "large",
        "aria-label": "show 11 new notifications",
        color: "inherit",
        "aria-controls": "msgs-menu",
        "aria-haspopup": "true",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
          variant: "dot",
          color: "primary",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
            size: "21",
            stroke: "1.5"
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
        flexGrow: 1
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
        spacing: 1,
        direction: "row",
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
          variant: "contained",
          disableElevation: true,
          color: "primary",
          children: "Download"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_Profile__WEBPACK_IMPORTED_MODULE_1__["default"], {})]
      })]
    })
  });
};
Header.propTypes = {
  sx: (prop_types__WEBPACK_IMPORTED_MODULE_13___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./resources/js/layouts/header/Profile.tsx":
/*!*************************************************!*\
  !*** ./resources/js/layouts/header/Profile.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Menu/Menu.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconUser.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconMail.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconListCheck.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var Profile = function Profile() {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    anchorEl2 = _useState2[0],
    setAnchorEl2 = _useState2[1];
  var handleClick2 = function handleClick2(event) {
    setAnchorEl2(event.currentTarget);
  };
  var handleClose2 = function handleClose2() {
    setAnchorEl2(null);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      size: "large",
      "aria-label": "show 11 new notifications",
      color: "inherit",
      "aria-controls": "msgs-menu",
      "aria-haspopup": "true",
      sx: _objectSpread({}, _typeof(anchorEl2) === "object" && {
        color: "primary.main"
      }),
      onClick: handleClick2,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        src: "/images/profile/user-1.jpg",
        alt: "image",
        sx: {
          width: 35,
          height: 35
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      id: "msgs-menu",
      anchorEl: anchorEl2,
      keepMounted: true,
      open: Boolean(anchorEl2),
      onClose: handleClose2,
      anchorOrigin: {
        horizontal: "right",
        vertical: "bottom"
      },
      transformOrigin: {
        horizontal: "right",
        vertical: "top"
      },
      sx: {
        "& .MuiMenu-paper": {
          width: "200px"
        }
      },
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
            width: 20
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
          children: "My Profile"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_10__["default"], {
            width: 20
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
          children: "My Account"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_11__["default"], {
            width: 20
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
          children: "My Tasks"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
        mt: 1,
        py: 1,
        px: 2,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
          href: "/authentication/login",
          variant: "outlined",
          color: "primary",
          fullWidth: true,
          children: "Logout"
        })
      })]
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Profile);

/***/ }),

/***/ "./resources/js/layouts/shared/logo/Logo.tsx":
/*!***************************************************!*\
  !*** ./resources/js/layouts/shared/logo/Logo.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var LinkStyled = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"])(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link)(function () {
  return {
    height: "70px",
    width: "180px",
    overflow: "hidden",
    display: "block"
  };
});
var Logo = function Logo() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(LinkStyled, {
    to: "/"
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);

/***/ }),

/***/ "./resources/js/layouts/sidebar/MenuItems.tsx":
/*!****************************************************!*\
  !*** ./resources/js/layouts/sidebar/MenuItems.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconLayoutDashboard.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconTypography.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconCopy.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconLogin.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconUserPlus.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconMoodHappy.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconAperture.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


var Menuitems = [{
  navlabel: true,
  subheader: "Home"
}, {
  id: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqueId)(),
  title: "Dashboard",
  icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_1__["default"],
  href: "/"
}, {
  navlabel: true,
  subheader: "Utilities"
}, {
  id: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqueId)(),
  title: "Typography",
  icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_2__["default"],
  href: "/utilities/typography"
}, {
  id: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqueId)(),
  title: "Shadow",
  icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_3__["default"],
  href: "/utilities/shadow"
}, {
  navlabel: true,
  subheader: "Auth"
}, {
  id: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqueId)(),
  title: "Login",
  icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_4__["default"],
  href: "/authentication/login"
}, {
  id: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqueId)(),
  title: "Register",
  icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_5__["default"],
  href: "/authentication/register"
}, {
  navlabel: true,
  subheader: "Extra"
}, {
  id: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqueId)(),
  title: "Icons",
  icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_6__["default"],
  href: "/icons"
}, {
  id: (0,lodash__WEBPACK_IMPORTED_MODULE_0__.uniqueId)(),
  title: "Sample Page",
  icon: _tabler_icons_react__WEBPACK_IMPORTED_MODULE_7__["default"],
  href: "/sample-page"
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Menuitems);

/***/ }),

/***/ "./resources/js/layouts/sidebar/NavGroup/NavGroup.tsx":
/*!************************************************************!*\
  !*** ./resources/js/layouts/sidebar/NavGroup/NavGroup.tsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListSubheader/ListSubheader.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

// mui imports


var NavGroup = function NavGroup(_ref) {
  var item = _ref.item;
  var ListSubheaderStyle = (0,_mui_material__WEBPACK_IMPORTED_MODULE_1__["default"])(function (props) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], _objectSpread({
      disableSticky: true
    }, props));
  })(function (_ref2) {
    var theme = _ref2.theme;
    return _objectSpread(_objectSpread({}, theme.typography.overline), {}, {
      fontWeight: '700',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(0),
      color: theme.palette.text.primary,
      lineHeight: '26px',
      padding: '3px 12px'
    });
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ListSubheaderStyle, {
    children: item.subheader
  });
};
NavGroup.propTypes = {
  item: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().object)
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavGroup);

/***/ }),

/***/ "./resources/js/layouts/sidebar/NavItem/index.tsx":
/*!********************************************************!*\
  !*** ./resources/js/layouts/sidebar/NavItem/index.tsx ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/styles/styled.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItem/ListItem.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemButton/ListItemButton.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemIcon/ListItemIcon.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/ListItemText/ListItemText.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");

// mui imports


var NavItem = function NavItem(_ref) {
  var item = _ref.item,
    level = _ref.level,
    pathDirect = _ref.pathDirect,
    onClick = _ref.onClick;
  var Icon = item.icon;
  var theme = (0,_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"])();
  var itemIcon = /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Icon, {
    stroke: 1.5,
    size: "1.3rem"
  });
  var ListItemStyled = (0,_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"])(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"])(function () {
    return {
      padding: 0,
      ".MuiButtonBase-root": {
        whiteSpace: "nowrap",
        marginBottom: "2px",
        padding: "8px 10px",
        borderRadius: "8px",
        backgroundColor: level > 1 ? "transparent !important" : "inherit",
        color: theme.palette.text.secondary,
        paddingLeft: "10px",
        "&:hover": {
          backgroundColor: theme.palette.primary.light,
          color: theme.palette.primary.main
        },
        "&.Mui-selected": {
          color: "white",
          backgroundColor: theme.palette.primary.main,
          "&:hover": {
            backgroundColor: theme.palette.primary.main,
            color: "white"
          }
        }
      }
    };
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    component: "div",
    disablePadding: true,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ListItemStyled, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        href: item.href,
        disabled: item.disabled,
        selected: pathDirect === item.href,
        target: item.external ? "_blank" : "",
        onClick: onClick,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
          sx: {
            minWidth: "36px",
            p: "3px 0",
            color: "inherit"
          },
          children: itemIcon
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
            children: item.title
          })
        })]
      })
    })
  }, item.id);
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavItem);

/***/ }),

/***/ "./resources/js/layouts/sidebar/Sidebar.tsx":
/*!**************************************************!*\
  !*** ./resources/js/layouts/sidebar/Sidebar.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/system/esm/useMediaQuery/useMediaQuery.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Drawer/Drawer.js");
/* harmony import */ var _shared_logo_Logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/logo/Logo */ "./resources/js/layouts/shared/logo/Logo.tsx");
/* harmony import */ var _SidebarItems__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SidebarItems */ "./resources/js/layouts/sidebar/SidebarItems.tsx");
/* harmony import */ var _Updrade__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Updrade */ "./resources/js/layouts/sidebar/Updrade.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Sidebar = function Sidebar(_ref) {
  var isMobileSidebarOpen = _ref.isMobileSidebarOpen,
    onSidebarClose = _ref.onSidebarClose,
    isSidebarOpen = _ref.isSidebarOpen;
  var lgUp = (0,_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"])(function (theme) {
    return theme.breakpoints.up("lg");
  });
  var sidebarWidth = "270px";
  if (lgUp) {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        width: sidebarWidth,
        flexShrink: 0
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
        anchor: "left",
        open: isSidebarOpen,
        variant: "permanent",
        PaperProps: {
          sx: {
            width: sidebarWidth,
            boxSizing: "border-box"
          }
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
          sx: {
            height: "100%"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
            px: 3,
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_shared_logo_Logo__WEBPACK_IMPORTED_MODULE_1__["default"], {})
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SidebarItems__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Updrade__WEBPACK_IMPORTED_MODULE_3__.Upgrade, {})]
          })]
        })
      })
    });
  }
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
    anchor: "left",
    open: isMobileSidebarOpen,
    onClose: onSidebarClose,
    variant: "temporary",
    PaperProps: {
      sx: {
        width: sidebarWidth,
        boxShadow: function boxShadow(theme) {
          return theme.shadows[8];
        }
      }
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      px: 2,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_shared_logo_Logo__WEBPACK_IMPORTED_MODULE_1__["default"], {})
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_SidebarItems__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_Updrade__WEBPACK_IMPORTED_MODULE_3__.Upgrade, {})]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

/***/ }),

/***/ "./resources/js/layouts/sidebar/SidebarItems.tsx":
/*!*******************************************************!*\
  !*** ./resources/js/layouts/sidebar/SidebarItems.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _MenuItems__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuItems */ "./resources/js/layouts/sidebar/MenuItems.tsx");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/List/List.js");
/* harmony import */ var _NavItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NavItem */ "./resources/js/layouts/sidebar/NavItem/index.tsx");
/* harmony import */ var _NavGroup_NavGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavGroup/NavGroup */ "./resources/js/layouts/sidebar/NavGroup/NavGroup.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var SidebarItems = function SidebarItems(_ref) {
  var toggleMobileSidebar = _ref.toggleMobileSidebar;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
    sx: {
      px: 3
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
      sx: {
        pt: 0
      },
      className: "sidebarNav",
      component: "div",
      children: _MenuItems__WEBPACK_IMPORTED_MODULE_1__["default"].map(function (item) {
        // {/********SubHeader**********/}
        if (item.subheader) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_NavGroup_NavGroup__WEBPACK_IMPORTED_MODULE_3__["default"], {
            item: item
          }, item.subheader);

          // {/********If Sub Menu**********/}
          /* eslint no-else-return: "off" */
        } else {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_NavItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
            item: item,
            pathDirect: 'pathDirect',
            onClick: toggleMobileSidebar
          }, item.id);
        }
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SidebarItems);

/***/ }),

/***/ "./resources/js/layouts/sidebar/Updrade.tsx":
/*!**************************************************!*\
  !*** ./resources/js/layouts/sidebar/Updrade.tsx ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Upgrade: () => (/* binding */ Upgrade)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


// import img1 from 'public/images/backgrounds/rocket.png';

var Upgrade = function Upgrade() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    display: 'flex',
    alignItems: "center",
    gap: 2,
    sx: {
      m: 3,
      p: 3,
      bgcolor: 'primary.light',
      borderRadius: '8px'
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
          variant: "h6",
          mb: 1,
          children: "Unlimited Access"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
          color: "primary",
          target: "_blank",
          disableElevation: true,
          href: "#",
          variant: "contained",
          "aria-label": "logout",
          size: "small",
          children: "Upgrade"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
        mt: "-35px",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
          alt: "Remy Sharp",
          src: "/images/backgrounds/rocket.png",
          width: 100,
          height: 100
        })
      })]
    })
  });
};

/***/ }),

/***/ "./resources/js/store.ts":
/*!*******************************!*\
  !*** ./resources/js/store.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   store: () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ "./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs");
/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/auth/authSlice */ "./resources/js/features/auth/authSlice.ts");


var store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.configureStore)({
  reducer: {
    auth: _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

// Infer the `RootState` and `AppDispatch` types from the store itself

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}

/***/ }),

/***/ "./resources/js/utils/theme/DefaultColors.tsx":
/*!****************************************************!*\
  !*** ./resources/js/utils/theme/DefaultColors.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   baselightTheme: () => (/* binding */ baselightTheme)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/createTheme.js");

// import { Plus_Jakarta_Sans } from "next/font/google";

// export const plus = Plus_Jakarta_Sans({
//   weight: ["300", "400", "500", "600", "700"],
//   subsets: ["latin"],
//   display: "swap",
//   fallback: ["Helvetica", "Arial", "sans-serif"],
// });

var baselightTheme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_0__["default"])({
  direction: "ltr",
  palette: {
    primary: {
      main: "#5D87FF",
      light: "#ECF2FF",
      dark: "#4570EA"
    },
    secondary: {
      main: "#49BEFF",
      light: "#E8F7FF",
      dark: "#23afdb"
    },
    success: {
      main: "#13DEB9",
      light: "#E6FFFA",
      dark: "#02b3a9",
      contrastText: "#ffffff"
    },
    info: {
      main: "#539BFF",
      light: "#EBF3FE",
      dark: "#1682d4",
      contrastText: "#ffffff"
    },
    error: {
      main: "#FA896B",
      light: "#FDEDE8",
      dark: "#f3704d",
      contrastText: "#ffffff"
    },
    warning: {
      main: "#FFAE1F",
      light: "#FEF5E5",
      dark: "#ae8e59",
      contrastText: "#ffffff"
    },
    grey: {
      100: "#F2F6FA",
      200: "#EAEFF4",
      300: "#DFE5EF",
      400: "#7C8FAC",
      500: "#5A6A85",
      600: "#2A3547"
    },
    text: {
      primary: "#2A3547",
      secondary: "#5A6A85"
    },
    action: {
      disabledBackground: "rgba(73,82,88,0.12)",
      hoverOpacity: 0.02,
      hover: "#f6f9fc"
    },
    divider: "#e5eaef"
  },
  typography: {
    //fontFamily: plus.style.fontFamily,
    h1: {
      fontWeight: 600,
      fontSize: "2.25rem",
      lineHeight: "2.75rem"
      //fontFamily: plus.style.fontFamily,
    },
    h2: {
      fontWeight: 600,
      fontSize: "1.875rem",
      lineHeight: "2.25rem"
      //fontFamily: plus.style.fontFamily,
    },
    h3: {
      fontWeight: 600,
      fontSize: "1.5rem",
      lineHeight: "1.75rem"
      //fontFamily: plus.style.fontFamily,
    },
    h4: {
      fontWeight: 600,
      fontSize: "1.3125rem",
      lineHeight: "1.6rem"
    },
    h5: {
      fontWeight: 600,
      fontSize: "1.125rem",
      lineHeight: "1.6rem"
    },
    h6: {
      fontWeight: 600,
      fontSize: "1rem",
      lineHeight: "1.2rem"
    },
    button: {
      textTransform: "capitalize",
      fontWeight: 400
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.334rem"
    },
    body2: {
      fontSize: "0.75rem",
      letterSpacing: "0rem",
      fontWeight: 400,
      lineHeight: "1rem"
    },
    subtitle1: {
      fontSize: "0.875rem",
      fontWeight: 400
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: 400
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        ".MuiPaper-elevation9, .MuiPopover-root .MuiPaper-elevation": {
          boxShadow: "rgb(145 158 171 / 30%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px !important"
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: "7px"
        }
      }
    }
  }
});


/***/ }),

/***/ "./resources/js/views/auth/ForgotPassword.tsx":
/*!****************************************************!*\
  !*** ./resources/js/views/auth/ForgotPassword.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _components_container_PageContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/container/PageContainer */ "./resources/js/components/container/PageContainer.tsx");
/* harmony import */ var _layouts_shared_logo_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/shared/logo/Logo */ "./resources/js/layouts/shared/logo/Logo.tsx");
/* harmony import */ var _components_AuthForgotPassword__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AuthForgotPassword */ "./resources/js/views/auth/components/AuthForgotPassword.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



// components




var ForgotPassword = function ForgotPassword() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_container_PageContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Forgot Password",
    description: "Forgot Password",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
      sx: {
        position: "relative",
        "&:before": {
          content: '""',
          background: "radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",
          backgroundSize: "400% 400%",
          animation: "gradient 15s ease infinite",
          position: "absolute",
          height: "100%",
          width: "100%",
          opacity: "0.3"
        }
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        container: true,
        spacing: 0,
        justifyContent: "center",
        sx: {
          height: "100vh"
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
          item: true,
          xs: 12,
          sm: 12,
          lg: 4,
          xl: 3,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
            elevation: 9,
            sx: {
              p: 4,
              zIndex: 1,
              width: "100%",
              maxWidth: "500px"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_layouts_shared_logo_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_AuthForgotPassword__WEBPACK_IMPORTED_MODULE_3__["default"], {
              subtitle: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
                direction: "row",
                spacing: 1,
                justifyContent: "center",
                mt: 3,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  color: "textSecondary",
                  variant: "h6",
                  fontWeight: "500",
                  children: "Don't have an account?"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
                  fontWeight: "500",
                  sx: {
                    textDecoration: "none",
                    color: "primary.main"
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
                    to: "/admin-cp/login",
                    children: "Login"
                  })
                })]
              })
            })]
          })
        })
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForgotPassword);

/***/ }),

/***/ "./resources/js/views/auth/components/AuthForgotPassword.tsx":
/*!*******************************************************************!*\
  !*** ./resources/js/views/auth/components/AuthForgotPassword.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _components_forms_theme_elements_CustomTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/forms/theme-elements/CustomTextField */ "./resources/js/components/forms/theme-elements/CustomTextField.tsx");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/LoadingButton/LoadingButton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var AuthForgotPassword = function AuthForgotPassword(_ref) {
  var title = _ref.title,
    subtitle = _ref.subtitle,
    subtext = _ref.subtext;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isFormSubmitting = _useState2[0],
    setIsFormSubmitting = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),
    _useState4 = _slicedToArray(_useState3, 2),
    error = _useState4[0],
    setError = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState6 = _slicedToArray(_useState5, 2),
    email = _useState6[0],
    setEmail = _useState6[1];
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setIsFormSubmitting(true);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [title ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      fontWeight: "700",
      variant: "h2",
      mb: 1,
      children: title
    }) : null, subtext, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("form", {
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        mb: 3,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
            variant: "subtitle1",
            fontWeight: 600,
            component: "label",
            htmlFor: "username",
            mb: "5px",
            children: "Email"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_forms_theme_elements_CustomTextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
            variant: "outlined",
            fullWidth: true,
            type: "email",
            onChange: function onChange(e) {
              setEmail(e.target.value);
            }
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_7__["default"], {
          color: "primary",
          variant: "contained",
          size: "large",
          fullWidth: true,
          type: "submit",
          disabled: isFormSubmitting,
          loading: isFormSubmitting,
          children: "Submit"
        })
      })]
    }), subtitle]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthForgotPassword);

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["js/vendor-core.min","css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.tsx"), __webpack_exec__("./resources/css/app.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);