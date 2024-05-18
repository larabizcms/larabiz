"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_auth_Register_tsx"],{

/***/ "./resources/js/views/auth/Register.tsx":
/*!**********************************************!*\
  !*** ./resources/js/views/auth/Register.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _components_container_PageContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/container/PageContainer */ "./resources/js/components/container/PageContainer.tsx");
/* harmony import */ var _layouts_shared_logo_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layouts/shared/logo/Logo */ "./resources/js/layouts/shared/logo/Logo.tsx");
/* harmony import */ var _components_AuthRegister__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AuthRegister */ "./resources/js/views/auth/components/AuthRegister.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var Register = function Register() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_container_PageContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Register",
    description: "this is Register page",
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
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_AuthRegister__WEBPACK_IMPORTED_MODULE_3__["default"], {
              subtext: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
                variant: "subtitle1",
                textAlign: "center",
                color: "textSecondary",
                mb: 1,
                children: "Your Social Campaigns"
              }),
              subtitle: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
                direction: "row",
                justifyContent: "center",
                spacing: 1,
                mt: 3,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  color: "textSecondary",
                  variant: "h6",
                  fontWeight: "400",
                  children: "Already have an Account?"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  fontWeight: "500",
                  sx: {
                    textDecoration: "none",
                    color: "primary.main"
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Link, {
                    to: "/admin-cp/login",
                    children: "Sign In"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Register);

/***/ }),

/***/ "./resources/js/views/auth/components/AuthRegister.tsx":
/*!*************************************************************!*\
  !*** ./resources/js/views/auth/components/AuthRegister.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _components_forms_theme_elements_CustomTextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/forms/theme-elements/CustomTextField */ "./resources/js/components/forms/theme-elements/CustomTextField.tsx");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/Stack/Stack.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/LoadingButton/LoadingButton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }







var AuthRegister = function AuthRegister(_ref) {
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
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(""),
    _useState8 = _slicedToArray(_useState7, 2),
    password = _useState8[0],
    setPassword = _useState8[1];
  var navigate = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useNavigate)();
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    setIsFormSubmitting(true);

    // AuthService.register({ email: email, password: password })
    //     .then((response) => {
    //         navigate("/admin-cp");
    //     })
    //     .catch((e) => {
    //         setError(e.response.data.message);
    //         setIsFormSubmitting(false);
    //     });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
    children: [title ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      fontWeight: "700",
      variant: "h2",
      mb: 1,
      children: title
    }) : null, subtext, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("form", {
      onSubmit: handleSubmit,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_6__["default"], {
          mb: 3,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
            variant: "subtitle1",
            fontWeight: 600,
            component: "label",
            htmlFor: "name",
            mb: "5px",
            children: "Name"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_forms_theme_elements_CustomTextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
            id: "name",
            variant: "outlined",
            fullWidth: true,
            onChange: function onChange(e) {
              setEmail(e.target.value);
            }
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
            variant: "subtitle1",
            fontWeight: 600,
            component: "label",
            htmlFor: "email",
            mb: "5px",
            mt: "25px",
            children: "Email Address"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_forms_theme_elements_CustomTextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
            id: "email",
            variant: "outlined",
            fullWidth: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
            variant: "subtitle1",
            fontWeight: 600,
            component: "label",
            htmlFor: "password",
            mb: "5px",
            mt: "25px",
            children: "Password"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_forms_theme_elements_CustomTextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
            id: "password",
            variant: "outlined",
            fullWidth: true,
            type: "password",
            onChange: function onChange(e) {
              setPassword(e.target.value);
            }
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_7__["default"], {
          color: "primary",
          variant: "contained",
          size: "large",
          fullWidth: true,
          type: "submit",
          loading: isFormSubmitting,
          children: "Sign Up"
        })]
      })
    }), subtitle]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthRegister);

/***/ })

}]);