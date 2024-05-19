"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_Dashboard_tsx"],{

/***/ "./resources/js/components/dashboard/MonthlyEarnings.tsx":
/*!***************************************************************!*\
  !*** ./resources/js/components/dashboard/MonthlyEarnings.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Fab/Fab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconCurrencyDollar.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconArrowDownRight.js");
/* harmony import */ var _components_shared_DashboardCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/shared/DashboardCard */ "./resources/js/components/shared/DashboardCard.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Chart = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.lazy)(function () {
  return __webpack_require__.e(/*! import() */ "/js/vendor").then(__webpack_require__.bind(__webpack_require__, /*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js"));
});
var MonthlyEarnings = function MonthlyEarnings() {
  // chart color
  var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();
  var secondary = theme.palette.secondary.main;
  var secondarylight = '#f5fcff';
  var errorlight = '#fdede8';

  // chart
  var optionscolumnchart = {
    chart: {
      type: 'area',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false
      },
      height: 60,
      sparkline: {
        enabled: true
      },
      group: 'sparklines'
    },
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      colors: [secondarylight],
      type: 'solid',
      opacity: 0.05
    },
    markers: {
      size: 0
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light'
    }
  };
  var seriescolumnchart = [{
    name: '',
    color: secondary,
    data: [25, 66, 20, 40, 12, 58, 20]
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_shared_DashboardCard__WEBPACK_IMPORTED_MODULE_0__["default"], {
    title: "Monthly Earnings",
    action: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      color: "secondary",
      size: "medium",
      sx: {
        color: '#ffffff'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_5__["default"], {
        width: 24
      })
    }),
    footer: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Chart, {
      options: optionscolumnchart,
      series: seriescolumnchart,
      type: "area",
      height: 60,
      width: "100%"
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
        variant: "h3",
        fontWeight: "700",
        mt: "-20px",
        children: "$6,820"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
        direction: "row",
        spacing: 1,
        my: 1,
        alignItems: "center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
          sx: {
            bgcolor: errorlight,
            width: 27,
            height: 27
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_9__["default"], {
            width: 20,
            color: "#FA896B"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "subtitle2",
          fontWeight: "600",
          children: "+9%"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
          variant: "subtitle2",
          color: "textSecondary",
          children: "last year"
        })]
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MonthlyEarnings);

/***/ }),

/***/ "./resources/js/components/dashboard/ProductPerformance.tsx":
/*!******************************************************************!*\
  !*** ./resources/js/components/dashboard/ProductPerformance.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Table/Table.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableHead/TableHead.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableRow/TableRow.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableCell/TableCell.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/TableBody/TableBody.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Chip/Chip.js");
/* harmony import */ var _components_shared_DashboardCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/shared/DashboardCard */ "./resources/js/components/shared/DashboardCard.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var products = [{
  id: "1",
  name: "Sunil Joshi",
  post: "Web Designer",
  pname: "Elite Admin",
  priority: "Low",
  pbg: "primary.main",
  budget: "3.9"
}, {
  id: "2",
  name: "Andrew McDownland",
  post: "Project Manager",
  pname: "Real Homes WP Theme",
  priority: "Medium",
  pbg: "secondary.main",
  budget: "24.5"
}, {
  id: "3",
  name: "Christopher Jamil",
  post: "Project Manager",
  pname: "MedicalPro WP Theme",
  priority: "High",
  pbg: "error.main",
  budget: "12.8"
}, {
  id: "4",
  name: "Nirav Joshi",
  post: "Frontend Engineer",
  pname: "Hosting Press HTML",
  priority: "Critical",
  pbg: "success.main",
  budget: "2.4"
}];
var ProductPerformance = function ProductPerformance() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_shared_DashboardCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Product Performance",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      sx: {
        overflow: 'auto',
        width: {
          xs: '280px',
          sm: 'auto'
        }
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        "aria-label": "simple table",
        sx: {
          whiteSpace: "nowrap",
          mt: 2
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
                variant: "subtitle2",
                fontWeight: 600,
                children: "Id"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
                variant: "subtitle2",
                fontWeight: 600,
                children: "Assigned"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
                variant: "subtitle2",
                fontWeight: 600,
                children: "Name"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
                variant: "subtitle2",
                fontWeight: 600,
                children: "Priority"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
              align: "right",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
                variant: "subtitle2",
                fontWeight: 600,
                children: "Budget"
              })
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
          children: products.map(function (product) {
            return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  sx: {
                    fontSize: "15px",
                    fontWeight: "500"
                  },
                  children: product.id
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
                  sx: {
                    display: "flex",
                    alignItems: "center"
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
                      variant: "subtitle2",
                      fontWeight: 600,
                      children: product.name
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
                      color: "textSecondary",
                      sx: {
                        fontSize: "13px"
                      },
                      children: product.post
                    })]
                  })
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  color: "textSecondary",
                  variant: "subtitle2",
                  fontWeight: 400,
                  children: product.pname
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  sx: {
                    px: "4px",
                    backgroundColor: product.pbg,
                    color: "#fff"
                  },
                  size: "small",
                  label: product.priority
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
                align: "right",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  variant: "h6",
                  children: ["$", product.budget, "k"]
                })
              })]
            }, product.name);
          })
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductPerformance);

/***/ }),

/***/ "./resources/js/components/dashboard/RecentTransactions.tsx":
/*!******************************************************************!*\
  !*** ./resources/js/components/dashboard/RecentTransactions.tsx ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_shared_DashboardCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/shared/DashboardCard */ "./resources/js/components/shared/DashboardCard.tsx");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/Timeline/Timeline.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TimelineOppositeContent/timelineOppositeContentClasses.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TimelineItem/TimelineItem.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TimelineOppositeContent/TimelineOppositeContent.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TimelineSeparator/TimelineSeparator.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TimelineDot/TimelineDot.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TimelineConnector/TimelineConnector.js");
/* harmony import */ var _mui_lab__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/lab */ "./node_modules/@mui/lab/TimelineContent/TimelineContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }





var RecentTransactions = function RecentTransactions() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_shared_DashboardCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Recent Transactions",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_lab__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: "theme-timeline",
        nonce: undefined,
        onResize: undefined,
        onResizeCapture: undefined,
        sx: _defineProperty({
          p: 0,
          mb: '-40px',
          '& .MuiTimelineConnector-root': {
            width: '1px',
            backgroundColor: '#efefef'
          }
        }, "& .".concat(_mui_lab__WEBPACK_IMPORTED_MODULE_4__["default"].root), {
          flex: 0.5,
          paddingLeft: 0
        }),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_lab__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: "09:30 am"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_lab__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_8__["default"], {
              color: "primary",
              variant: "outlined"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_9__["default"], {})]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_10__["default"], {
            children: "Payment received from John Doe of $385.90"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_lab__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: "10:00 am"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_lab__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_8__["default"], {
              color: "secondary",
              variant: "outlined"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_9__["default"], {})]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_lab__WEBPACK_IMPORTED_MODULE_10__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
              fontWeight: "600",
              children: "New sale recorded"
            }), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
              href: "/",
              underline: "none",
              children: "#ML-3467"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_lab__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: "12:00 am"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_lab__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_8__["default"], {
              color: "success",
              variant: "outlined"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_9__["default"], {})]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_10__["default"], {
            children: "Payment was made of $64.95 to Michael"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_lab__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: "09:30 am"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_lab__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_8__["default"], {
              color: "warning",
              variant: "outlined"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_9__["default"], {})]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_lab__WEBPACK_IMPORTED_MODULE_10__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
              fontWeight: "600",
              children: "New sale recorded"
            }), ' ', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_12__["default"], {
              href: "/",
              underline: "none",
              children: "#ML-3467"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_lab__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: "09:30 am"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_lab__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_8__["default"], {
              color: "error",
              variant: "outlined"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_9__["default"], {})]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_10__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
              fontWeight: "600",
              children: "New arrival recorded"
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_lab__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: "12:00 am"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_8__["default"], {
              color: "success",
              variant: "outlined"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_lab__WEBPACK_IMPORTED_MODULE_10__["default"], {
            children: "Payment Received"
          })]
        })]
      })
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RecentTransactions);

/***/ }),

/***/ "./resources/js/components/dashboard/SalesOverview.tsx":
/*!*************************************************************!*\
  !*** ./resources/js/components/dashboard/SalesOverview.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _components_shared_DashboardCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/shared/DashboardCard */ "./resources/js/components/shared/DashboardCard.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var Chart = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return __webpack_require__.e(/*! import() */ "/js/vendor").then(__webpack_require__.bind(__webpack_require__, /*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js"));
});
var SalesOverview = function SalesOverview() {
  // select
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default().useState('1'),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    month = _React$useState2[0],
    setMonth = _React$useState2[1];
  var handleChange = function handleChange(event) {
    setMonth(event.target.value);
  };

  // chart color
  var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();
  var primary = theme.palette.primary.main;
  var secondary = theme.palette.secondary.main;

  // chart
  var optionscolumnchart = {
    chart: {
      type: 'bar',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: true
      },
      height: 370
    },
    colors: [primary, secondary],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: '60%',
        columnWidth: '42%',
        borderRadius: [6],
        borderRadiusApplication: 'end',
        borderRadiusWhenStacked: 'all'
      }
    },
    stroke: {
      show: true,
      width: 5,
      lineCap: "butt",
      colors: ["transparent"]
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    grid: {
      borderColor: 'rgba(0,0,0,0.1)',
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false
        }
      }
    },
    yaxis: {
      tickAmount: 4
    },
    xaxis: {
      categories: ['16/08', '17/08', '18/08', '19/08', '20/08', '21/08', '22/08', '23/08'],
      axisBorder: {
        show: false
      }
    },
    tooltip: {
      theme: 'dark',
      fillSeriesColor: false
    }
  };
  var seriescolumnchart = [{
    name: 'Eanings this month',
    data: [355, 390, 300, 350, 390, 180, 355, 390]
  }, {
    name: 'Expense this month',
    data: [280, 250, 325, 215, 250, 310, 280, 250]
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_shared_DashboardCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Sales Overview",
    action: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      labelId: "month-dd",
      id: "month-dd",
      value: month,
      size: "small",
      onChange: handleChange,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        value: 1,
        children: "March 2023"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        value: 2,
        children: "April 2023"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        value: 3,
        children: "May 2023"
      })]
    }),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Chart, {
      options: optionscolumnchart,
      series: seriescolumnchart,
      type: "bar",
      height: 370,
      width: "100%"
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SalesOverview);

/***/ }),

/***/ "./resources/js/components/dashboard/YearlyBreakup.tsx":
/*!*************************************************************!*\
  !*** ./resources/js/components/dashboard/YearlyBreakup.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/styles */ "./node_modules/@mui/material/styles/useTheme.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconArrowUpLeft.js");
/* harmony import */ var _components_shared_DashboardCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/shared/DashboardCard */ "./resources/js/components/shared/DashboardCard.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");






var Chart = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(function () {
  return __webpack_require__.e(/*! import() */ "/js/vendor").then(__webpack_require__.bind(__webpack_require__, /*! react-apexcharts */ "./node_modules/react-apexcharts/dist/react-apexcharts.min.js"));
});
var YearlyBreakup = function YearlyBreakup() {
  // chart color
  var theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__["default"])();
  var primary = theme.palette.primary.main;
  var primarylight = '#ecf2ff';
  var successlight = theme.palette.success.light;

  // chart
  var optionscolumnchart = {
    chart: {
      type: 'donut',
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: '#adb0bb',
      toolbar: {
        show: false
      },
      height: 155
    },
    colors: [primary, primarylight, '#F9F9FD'],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
          background: 'transparent'
        }
      }
    },
    tooltip: {
      theme: theme.palette.mode === 'dark' ? 'dark' : 'light',
      fillSeriesColor: false
    },
    stroke: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    responsive: [{
      breakpoint: 991,
      options: {
        chart: {
          width: 120
        }
      }
    }]
  };
  var seriescolumnchart = [38, 40, 25];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_shared_DashboardCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Yearly Breakup",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
      container: true,
      spacing: 3,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        item: true,
        xs: 7,
        sm: 7,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
          variant: "h3",
          fontWeight: "700",
          children: "$36,358"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
          direction: "row",
          spacing: 1,
          mt: 1,
          alignItems: "center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
            sx: {
              bgcolor: successlight,
              width: 27,
              height: 27
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
              width: 20,
              color: "#39B69A"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
            variant: "subtitle2",
            fontWeight: "600",
            children: "+9%"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
            variant: "subtitle2",
            color: "textSecondary",
            children: "last year"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
          spacing: 3,
          mt: 5,
          direction: "row",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
            direction: "row",
            spacing: 1,
            alignItems: "center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
              sx: {
                width: 9,
                height: 9,
                bgcolor: primary,
                svg: {
                  display: 'none'
                }
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
              variant: "subtitle2",
              color: "textSecondary",
              children: "2022"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
            direction: "row",
            spacing: 1,
            alignItems: "center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
              sx: {
                width: 9,
                height: 9,
                bgcolor: primarylight,
                svg: {
                  display: 'none'
                }
              }
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
              variant: "subtitle2",
              color: "textSecondary",
              children: "2023"
            })]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        item: true,
        xs: 5,
        sm: 5,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Chart, {
          options: optionscolumnchart,
          series: seriescolumnchart,
          type: "donut",
          height: 150,
          width: "100%"
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (YearlyBreakup);

/***/ }),

/***/ "./resources/js/components/shared/DashboardCard.tsx":
/*!**********************************************************!*\
  !*** ./resources/js/components/shared/DashboardCard.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Stack/Stack.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var DashboardCard = function DashboardCard(_ref) {
  var title = _ref.title,
    subtitle = _ref.subtitle,
    children = _ref.children,
    action = _ref.action,
    footer = _ref.footer,
    cardheading = _ref.cardheading,
    headtitle = _ref.headtitle,
    headsubtitle = _ref.headsubtitle,
    middlecontent = _ref.middlecontent;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      padding: 0
    },
    elevation: 9,
    variant: undefined,
    children: [cardheading ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "h5",
        children: headtitle
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
        variant: "subtitle2",
        color: "textSecondary",
        children: headsubtitle
      })]
    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
      sx: {
        p: "30px"
      },
      children: [title ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
        direction: "row",
        spacing: 2,
        justifyContent: "space-between",
        alignItems: "center",
        mb: 3,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
          children: [title ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
            variant: "h5",
            children: title
          }) : "", subtitle ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
            variant: "subtitle2",
            color: "textSecondary",
            children: subtitle
          }) : ""]
        }), action]
      }) : null, children]
    }), middlecontent, footer]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DashboardCard);

/***/ }),

/***/ "./resources/js/views/Dashboard.tsx":
/*!******************************************!*\
  !*** ./resources/js/views/Dashboard.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _components_container_PageContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/container/PageContainer */ "./resources/js/components/container/PageContainer.tsx");
/* harmony import */ var _components_dashboard_SalesOverview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/dashboard/SalesOverview */ "./resources/js/components/dashboard/SalesOverview.tsx");
/* harmony import */ var _components_dashboard_YearlyBreakup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/dashboard/YearlyBreakup */ "./resources/js/components/dashboard/YearlyBreakup.tsx");
/* harmony import */ var _components_dashboard_MonthlyEarnings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/dashboard/MonthlyEarnings */ "./resources/js/components/dashboard/MonthlyEarnings.tsx");
/* harmony import */ var _components_dashboard_RecentTransactions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/dashboard/RecentTransactions */ "./resources/js/components/dashboard/RecentTransactions.tsx");
/* harmony import */ var _components_dashboard_ProductPerformance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/dashboard/ProductPerformance */ "./resources/js/components/dashboard/ProductPerformance.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");









//import Blog from '../components/dashboard/Blog';

function Dashboard() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_container_PageContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Dashboard",
    description: "this is Dashboard",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_8__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
        container: true,
        spacing: 3,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: true,
          xs: 12,
          lg: 8,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_dashboard_SalesOverview__WEBPACK_IMPORTED_MODULE_2__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: true,
          xs: 12,
          lg: 4,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
            container: true,
            spacing: 3,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_dashboard_YearlyBreakup__WEBPACK_IMPORTED_MODULE_3__["default"], {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_dashboard_MonthlyEarnings__WEBPACK_IMPORTED_MODULE_4__["default"], {})
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: true,
          xs: 12,
          lg: 4,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_dashboard_RecentTransactions__WEBPACK_IMPORTED_MODULE_5__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: true,
          xs: 12,
          lg: 8,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_components_dashboard_ProductPerformance__WEBPACK_IMPORTED_MODULE_6__["default"], {})
        })]
      })
    })
  });
}

/***/ })

}]);