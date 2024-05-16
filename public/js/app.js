(self["webpackChunk"] = self["webpackChunk"] || []).push([["/js/app"],{

/***/ "./resources/js/app.tsx":
/*!******************************!*\
  !*** ./resources/js/app.tsx ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ "./resources/js/router.tsx");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store */ "./resources/js/store.ts");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/dist/react-redux.mjs");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot(document.getElementById("app")).render( /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)((react__WEBPACK_IMPORTED_MODULE_0___default().StrictMode), {
  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_redux__WEBPACK_IMPORTED_MODULE_5__.Provider, {
    store: _store__WEBPACK_IMPORTED_MODULE_3__.store,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_6__.BrowserRouter, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_router__WEBPACK_IMPORTED_MODULE_2__.Router, {})
    })
  })
}));

/***/ }),

/***/ "./resources/js/components/container/PageContainer.tsx":
/*!*************************************************************!*\
  !*** ./resources/js/components/container/PageContainer.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/js/components/dashboard/Blog.tsx":
/*!****************************************************!*\
  !*** ./resources/js/components/dashboard/Blog.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Avatar/Avatar.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Fab/Fab.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/CardContent/CardContent.js");
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Rating/Rating.js");
/* harmony import */ var _mui_system__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/system */ "./node_modules/@mui/system/esm/Stack/Stack.js");
/* harmony import */ var _tabler_icons_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tabler/icons-react */ "./node_modules/@tabler/icons-react/dist/esm/icons/IconBasket.js");
/* harmony import */ var _components_shared_BlankCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/shared/BlankCard */ "./resources/js/components/shared/BlankCard.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


// import img1 from "public/images/products/s4.jpg";
// import img2 from "public/images/products/s5.jpg";
// import img3 from "public/images/products/s7.jpg";
// import img4 from "public/images/products/s11.jpg";




var ecoCard = [{
  title: "Boat Headphone",
  subheader: "September 14, 2023",
  photo: '/images/products/s4.jpg',
  salesPrice: 375,
  price: 285,
  rating: 4
}, {
  title: "MacBook Air Pro",
  subheader: "September 14, 2023",
  photo: '/images/products/s5.jpg',
  salesPrice: 650,
  price: 900,
  rating: 5
}, {
  title: "Red Valvet Dress",
  subheader: "September 14, 2023",
  photo: '/images/products/s7.jpg',
  salesPrice: 150,
  price: 200,
  rating: 3
}, {
  title: "Cute Soft Teddybear",
  subheader: "September 14, 2023",
  photo: '/images/products/s11.jpg',
  salesPrice: 285,
  price: 345,
  rating: 2
}];
var Blog = function Blog() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
    container: true,
    spacing: 3,
    children: ecoCard.map(function (product, index) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_3__["default"], {
        item: true,
        xs: 12,
        md: 4,
        lg: 3,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_components_shared_BlankCard__WEBPACK_IMPORTED_MODULE_1__["default"], {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_5__["default"], {
              src: product.photo,
              variant: "square",
              sx: {
                height: 250,
                width: '100%'
              }
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_6__["default"], {
            title: "Add To Cart",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__["default"], {
              size: "small",
              color: "primary",
              sx: {
                bottom: "75px",
                right: "15px",
                position: "absolute"
              },
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_tabler_icons_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
                size: "16"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_9__["default"], {
            sx: {
              p: 3,
              pt: 2
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
              variant: "h6",
              children: product.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_10__["default"], {
              direction: "row",
              alignItems: "center",
              justifyContent: "space-between",
              mt: 1,
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_system__WEBPACK_IMPORTED_MODULE_10__["default"], {
                direction: "row",
                alignItems: "center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  variant: "h6",
                  children: ["$", product.price]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_4__["default"], {
                  color: "textSecondary",
                  ml: 1,
                  sx: {
                    textDecoration: "line-through"
                  },
                  children: ["$", product.salesPrice]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_11__["default"], {
                name: "read-only",
                size: "small",
                value: product.rating,
                readOnly: true
              })]
            })]
          })]
        })
      }, index);
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Blog);

/***/ }),

/***/ "./resources/js/components/dashboard/MonthlyEarnings.tsx":
/*!***************************************************************!*\
  !*** ./resources/js/components/dashboard/MonthlyEarnings.tsx ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./resources/js/components/forms/theme-elements/CustomTextField.tsx":
/*!**************************************************************************!*\
  !*** ./resources/js/components/forms/theme-elements/CustomTextField.tsx ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/js/components/shared/BlankCard.tsx":
/*!******************************************************!*\
  !*** ./resources/js/components/shared/BlankCard.tsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ "./node_modules/@mui/material/Card/Card.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var BlankCard = function BlankCard(_ref) {
  var children = _ref.children,
    className = _ref.className;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: {
      p: 0,
      position: "relative"
    },
    className: className,
    elevation: 9,
    variant: undefined,
    children: children
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlankCard);

/***/ }),

/***/ "./resources/js/components/shared/DashboardCard.tsx":
/*!**********************************************************!*\
  !*** ./resources/js/components/shared/DashboardCard.tsx ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/js/features/auth/authSlice.ts":
/*!*************************************************!*\
  !*** ./resources/js/features/auth/authSlice.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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
    to: "/",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
      src: "/images/logos/dark-logo.svg",
      alt: "logo",
      height: 70,
      width: 174
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logo);

/***/ }),

/***/ "./resources/js/layouts/sidebar/MenuItems.tsx":
/*!****************************************************!*\
  !*** ./resources/js/layouts/sidebar/MenuItems.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

"use strict";
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

/***/ "./resources/js/router.tsx":
/*!*********************************!*\
  !*** ./resources/js/router.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Router: () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/dist/index.js");
/* harmony import */ var _layouts_Master__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layouts/Master */ "./resources/js/layouts/Master.tsx");
/* harmony import */ var _views_Home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/Home */ "./resources/js/views/Home.tsx");
/* harmony import */ var _views_NotFound__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/NotFound */ "./resources/js/views/NotFound.tsx");
/* harmony import */ var _views_api_Document__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/api/Document */ "./resources/js/views/api/Document.tsx");
/* harmony import */ var _views_auth_Register__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/auth/Register */ "./resources/js/views/auth/Register.tsx");
/* harmony import */ var _views_Dashboard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./views/Dashboard */ "./resources/js/views/Dashboard.tsx");
/* harmony import */ var _layouts_Auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layouts/Auth */ "./resources/js/layouts/Auth.tsx");
/* harmony import */ var _views_auth_ForgotPassword__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/auth/ForgotPassword */ "./resources/js/views/auth/ForgotPassword.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");











var Login = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().lazy(function () {
  return Promise.all(/*! import() */[__webpack_require__.e("/js/vendor"), __webpack_require__.e("resources_js_views_auth_Login_tsx")]).then(__webpack_require__.bind(__webpack_require__, /*! ./views/auth/Login */ "./resources/js/views/auth/Login.tsx"));
});
function Router() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Routes, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "/",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_layouts_Auth__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        index: true,
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_views_Home__WEBPACK_IMPORTED_MODULE_2__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "/admin-cp/login",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(Login, {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "/admin-cp/register",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_views_auth_Register__WEBPACK_IMPORTED_MODULE_5__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "/admin-cp/forgot-password",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_views_auth_ForgotPassword__WEBPACK_IMPORTED_MODULE_8__["default"], {})
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "/",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_layouts_Master__WEBPACK_IMPORTED_MODULE_1__["default"], {}),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "/admin-cp",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_views_Dashboard__WEBPACK_IMPORTED_MODULE_6__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "/admin-cp/api/documentation",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_views_api_Document__WEBPACK_IMPORTED_MODULE_4__["default"], {})
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
        path: "/admin-cp/:page",
        element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_views_api_Document__WEBPACK_IMPORTED_MODULE_4__["default"], {})
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_10__.Route, {
      path: "*",
      element: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_views_NotFound__WEBPACK_IMPORTED_MODULE_3__["default"], {})
    })]
  });
}

/***/ }),

/***/ "./resources/js/store.ts":
/*!*******************************!*\
  !*** ./resources/js/store.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ "./resources/js/views/Dashboard.tsx":
/*!******************************************!*\
  !*** ./resources/js/views/Dashboard.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Dashboard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Grid */ "./node_modules/@mui/material/Grid/Grid.js");
/* harmony import */ var _components_container_PageContainer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/container/PageContainer */ "./resources/js/components/container/PageContainer.tsx");
/* harmony import */ var _components_dashboard_SalesOverview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/dashboard/SalesOverview */ "./resources/js/components/dashboard/SalesOverview.tsx");
/* harmony import */ var _components_dashboard_YearlyBreakup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/dashboard/YearlyBreakup */ "./resources/js/components/dashboard/YearlyBreakup.tsx");
/* harmony import */ var _components_dashboard_MonthlyEarnings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/dashboard/MonthlyEarnings */ "./resources/js/components/dashboard/MonthlyEarnings.tsx");
/* harmony import */ var _components_dashboard_RecentTransactions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/dashboard/RecentTransactions */ "./resources/js/components/dashboard/RecentTransactions.tsx");
/* harmony import */ var _components_dashboard_ProductPerformance__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/dashboard/ProductPerformance */ "./resources/js/components/dashboard/ProductPerformance.tsx");
/* harmony import */ var _components_dashboard_Blog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/dashboard/Blog */ "./resources/js/components/dashboard/Blog.tsx");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











// TODO remove, this demo shouldn't need to reset the theme.

function Dashboard() {
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(true),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var toggleDrawer = function toggleDrawer() {
    setOpen(!open);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_container_PageContainer__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "Dashboard",
    description: "this is Dashboard",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material_Box__WEBPACK_IMPORTED_MODULE_9__["default"], {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
        container: true,
        spacing: 3,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
          item: true,
          xs: 12,
          lg: 8,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_dashboard_SalesOverview__WEBPACK_IMPORTED_MODULE_2__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
          item: true,
          xs: 12,
          lg: 4,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
            container: true,
            spacing: 3,
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_dashboard_YearlyBreakup__WEBPACK_IMPORTED_MODULE_3__["default"], {})
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
              item: true,
              xs: 12,
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_dashboard_MonthlyEarnings__WEBPACK_IMPORTED_MODULE_4__["default"], {})
            })]
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
          item: true,
          xs: 12,
          lg: 4,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_dashboard_RecentTransactions__WEBPACK_IMPORTED_MODULE_5__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
          item: true,
          xs: 12,
          lg: 8,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_dashboard_ProductPerformance__WEBPACK_IMPORTED_MODULE_6__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_mui_material_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
          item: true,
          xs: 12,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_dashboard_Blog__WEBPACK_IMPORTED_MODULE_7__["default"], {})
        })]
      })
    })
  });
}

/***/ }),

/***/ "./resources/js/views/Home.tsx":
/*!*************************************!*\
  !*** ./resources/js/views/Home.tsx ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var Home = function Home() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: ["Whatever normally goes into the home/index page; A Plea To Heal The World for instance", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_mui_material_Link__WEBPACK_IMPORTED_MODULE_2__["default"], {
      href: "admin-cp/login",
      children: "Login"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);

/***/ }),

/***/ "./resources/js/views/NotFound.tsx":
/*!*****************************************!*\
  !*** ./resources/js/views/NotFound.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/dist/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");



var NotFound = function NotFound() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("p", {
    children: ["Whatever you were looking for isn't here.", " ", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Link, {
      to: "/",
      children: "Back to Index"
    })]
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFound);

/***/ }),

/***/ "./resources/js/views/api/Document.tsx":
/*!*********************************************!*\
  !*** ./resources/js/views/api/Document.tsx ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Document)
/* harmony export */ });
/* harmony import */ var swagger_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swagger-ui-react */ "./node_modules/swagger-ui-react/index.mjs");
/* harmony import */ var swagger_ui_react_swagger_ui_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swagger-ui-react/swagger-ui.css */ "./node_modules/swagger-ui-react/swagger-ui.css");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




function Document() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(swagger_ui_react__WEBPACK_IMPORTED_MODULE_0__["default"], {
    url: "https://petstore.swagger.io/v2/swagger.json"
  });
}

/***/ }),

/***/ "./resources/js/views/auth/ForgotPassword.tsx":
/*!****************************************************!*\
  !*** ./resources/js/views/auth/ForgotPassword.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/js/views/auth/Register.tsx":
/*!**********************************************!*\
  !*** ./resources/js/views/auth/Register.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/js/views/auth/components/AuthForgotPassword.tsx":
/*!*******************************************************************!*\
  !*** ./resources/js/views/auth/components/AuthForgotPassword.tsx ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ "./resources/js/views/auth/components/AuthRegister.tsx":
/*!*************************************************************!*\
  !*** ./resources/js/views/auth/components/AuthRegister.tsx ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

/***/ }),

/***/ "./resources/css/app.css":
/*!*******************************!*\
  !*** ./resources/css/app.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "?2128":
/*!********************************!*\
  !*** ./util.inspect (ignored) ***!
  \********************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["js/vendor-core.min","css/app","/js/vendor"], () => (__webpack_exec__("./resources/js/app.tsx"), __webpack_exec__("./resources/css/app.css")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);