"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/car/[id]/page",{

/***/ "(app-pages-browser)/./app/car/[id]/page.tsx":
/*!*******************************!*\
  !*** ./app/car/[id]/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CarDetail; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-confetti */ \"(app-pages-browser)/./node_modules/react-confetti/dist/react-confetti.min.js\");\n/* harmony import */ var react_confetti__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_confetti__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction CarDetail(param) {\n    let { params } = param;\n    _s();\n    const [car, setCar] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchCar = async ()=>{\n            const response = await fetch(\"https://freetestapi.com/api/v1/cars/\".concat(params.id));\n            const data = await response.json();\n            setCar(data);\n        };\n        fetchCar();\n    }, [\n        params.id\n    ]);\n    const [showConfetti, setShowConfetti] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const handlePurchase = ()=>{\n        setShowConfetti(true);\n        setTimeout(()=>setShowConfetti(false), 2000); // Hide confetti after 2 seconds\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-white flex flex-col items-center min-h-screen w-full p-5\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-5xl font-bold mb-5 text-black\",\n                children: [\n                    car ? car.make : \"...\",\n                    \" \",\n                    car ? car.model : \"...\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Amadeus/Documents/Repositories/DDB Post Interview Test/app/car/[id]/page.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-start\",\n                children: [\n                    car && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: car.image,\n                        alt: car.make + \" \" + car.model,\n                        className: \"w-1/2 mr-5 shadow-lg\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Amadeus/Documents/Repositories/DDB Post Interview Test/app/car/[id]/page.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    !car && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-1/2 h-64 mr-5 shadow-lg bg-gray-200 animate-pulse\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Amadeus/Documents/Repositories/DDB Post Interview Test/app/car/[id]/page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"shadow overflow-hidden sm:rounded-lg\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"table\", {\n                            className: \"min-w-full text-sm text-gray-900 bg-white\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tbody\", {\n                                children: [\n                                    [\n                                        \"year\",\n                                        car ? car.year : \"...\"\n                                    ],\n                                    [\n                                        \"color\",\n                                        car ? car.color : \"...\"\n                                    ],\n                                    [\n                                        \"mileage\",\n                                        car ? car.mileage : \"...\"\n                                    ],\n                                    [\n                                        \"price\",\n                                        car ? car.price : \"...\"\n                                    ],\n                                    [\n                                        \"fuel\",\n                                        car ? car.fuelType : \"...\"\n                                    ],\n                                    [\n                                        \"transmission\",\n                                        car ? car.transmission : \"...\"\n                                    ],\n                                    [\n                                        \"engine\",\n                                        car ? car.engine : \"...\"\n                                    ],\n                                    [\n                                        \"horsepower\",\n                                        car ? car.horsepower : \"...\"\n                                    ],\n                                    [\n                                        \"owners\",\n                                        car ? car.owners : \"...\"\n                                    ]\n                                ].map((param, index)=>{\n                                    let [label, value] = param;\n                                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"tr\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"px-4 py-2 text-lg\",\n                                                children: [\n                                                    label,\n                                                    \":\"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/Amadeus/Documents/Repositories/DDB Post Interview Test/app/car/[id]/page.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"td\", {\n                                                className: \"px-4 py-2 text-lg\",\n                                                children: value\n                                            }, void 0, false, {\n                                                fileName: \"/Users/Amadeus/Documents/Repositories/DDB Post Interview Test/app/car/[id]/page.tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, label, true, {\n                                        fileName: \"/Users/Amadeus/Documents/Repositories/DDB Post Interview Test/app/car/[id]/page.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 17\n                                    }, this);\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/Amadeus/Documents/Repositories/DDB Post Interview Test/app/car/[id]/page.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/Amadeus/Documents/Repositories/DDB Post Interview Test/app/car/[id]/page.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Amadeus/Documents/Repositories/DDB Post Interview Test/app/car/[id]/page.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Amadeus/Documents/Repositories/DDB Post Interview Test/app/car/[id]/page.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.button, {\n                onClick: handlePurchase,\n                whileHover: {\n                    scale: 1.1\n                },\n                whileTap: {\n                    scale: 0.9\n                },\n                className: \"my-5 relative rounded px-5 py-2.5 overflow-hidden group bg-black text-white shadow-sm transition-all ease-out duration-300\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"relative\",\n                        children: \"Purchase Now\"\n                    }, void 0, false, {\n                        fileName: \"/Users/Amadeus/Documents/Repositories/DDB Post Interview Test/app/car/[id]/page.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.span, {\n                        className: \"absolute right-0 w-8 h-32 -mt-12 bg-white opacity-10\",\n                        initial: {\n                            x: 200,\n                            rotate: 12\n                        },\n                        animate: {\n                            x: -200\n                        },\n                        transition: {\n                            duration: 1,\n                            repeat: Infinity\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/Amadeus/Documents/Repositories/DDB Post Interview Test/app/car/[id]/page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/Amadeus/Documents/Repositories/DDB Post Interview Test/app/car/[id]/page.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            showConfetti && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_confetti__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                fileName: \"/Users/Amadeus/Documents/Repositories/DDB Post Interview Test/app/car/[id]/page.tsx\",\n                lineNumber: 76,\n                columnNumber: 22\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                children: showConfetti && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"fixed inset-0\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        initial: {\n                            opacity: 1\n                        },\n                        exit: {\n                            opacity: 0\n                        },\n                        transition: {\n                            duration: 2\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_confetti__WEBPACK_IMPORTED_MODULE_2___default()), {}, void 0, false, {\n                            fileName: \"/Users/Amadeus/Documents/Repositories/DDB Post Interview Test/app/car/[id]/page.tsx\",\n                            lineNumber: 86,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/Amadeus/Documents/Repositories/DDB Post Interview Test/app/car/[id]/page.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/Amadeus/Documents/Repositories/DDB Post Interview Test/app/car/[id]/page.tsx\",\n                    lineNumber: 80,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/Amadeus/Documents/Repositories/DDB Post Interview Test/app/car/[id]/page.tsx\",\n                lineNumber: 78,\n                columnNumber: 5\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/Amadeus/Documents/Repositories/DDB Post Interview Test/app/car/[id]/page.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(CarDetail, \"kH4T46QP0MvpGvEk6EPi2KkmNPE=\");\n_c = CarDetail;\nvar _c;\n$RefreshReg$(_c, \"CarDetail\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jYXIvW2lkXS9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQzRDO0FBQ047QUFFa0I7QUFJekMsU0FBU0ssVUFBVSxLQUFzQztRQUF0QyxFQUFFQyxNQUFNLEVBQThCLEdBQXRDOztJQUNoQyxNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR1AsK0NBQVFBLENBQWE7SUFFM0NELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVMsV0FBVztZQUNmLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSx1Q0FBaUQsT0FBVkwsT0FBT00sRUFBRTtZQUM3RSxNQUFNQyxPQUFPLE1BQU1ILFNBQVNJLElBQUk7WUFDaENOLE9BQU9LO1FBQ1Q7UUFFQUo7SUFDRixHQUFHO1FBQUNILE9BQU9NLEVBQUU7S0FBQztJQUVkLE1BQU0sQ0FBQ0csY0FBY0MsZ0JBQWdCLEdBQUdmLCtDQUFRQSxDQUFDO0lBRW5ELE1BQU1nQixpQkFBaUI7UUFDckJELGdCQUFnQjtRQUNoQkUsV0FBVyxJQUFNRixnQkFBZ0IsUUFBUSxPQUFPLGdDQUFnQztJQUNsRjtJQUVFLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUdELFdBQVU7O29CQUFzQ2IsTUFBTUEsSUFBSWUsSUFBSSxHQUFHO29CQUFNO29CQUFFZixNQUFNQSxJQUFJZ0IsS0FBSyxHQUFFOzs7Ozs7OzBCQUM5Riw4REFBQ0o7Z0JBQUlDLFdBQVU7O29CQUNkYixxQkFDQyw4REFBQ2lCO3dCQUFJQyxLQUFLbEIsSUFBSW1CLEtBQUs7d0JBQUVDLEtBQUtwQixJQUFJZSxJQUFJLEdBQUcsTUFBTWYsSUFBSWdCLEtBQUs7d0JBQUVILFdBQVU7Ozs7OztvQkFFakUsQ0FBQ2IscUJBQ0EsOERBQUNZO3dCQUFJQyxXQUFVOzs7Ozs7a0NBRWYsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDUTs0QkFBTVIsV0FBVTtzQ0FDZiw0RUFBQ1M7MENBQ0U7b0NBQ0M7d0NBQUM7d0NBQVF0QixNQUFNQSxJQUFJdUIsSUFBSSxHQUFHO3FDQUFNO29DQUNoQzt3Q0FBQzt3Q0FBU3ZCLE1BQU1BLElBQUl3QixLQUFLLEdBQUc7cUNBQU07b0NBQ2xDO3dDQUFDO3dDQUFXeEIsTUFBTUEsSUFBSXlCLE9BQU8sR0FBRztxQ0FBTTtvQ0FDdEM7d0NBQUM7d0NBQVN6QixNQUFNQSxJQUFJMEIsS0FBSyxHQUFHO3FDQUFNO29DQUNsQzt3Q0FBQzt3Q0FBUTFCLE1BQU1BLElBQUkyQixRQUFRLEdBQUc7cUNBQU07b0NBQ3BDO3dDQUFDO3dDQUFnQjNCLE1BQU1BLElBQUk0QixZQUFZLEdBQUc7cUNBQU07b0NBQ2hEO3dDQUFDO3dDQUFVNUIsTUFBTUEsSUFBSTZCLE1BQU0sR0FBRztxQ0FBTTtvQ0FDcEM7d0NBQUM7d0NBQWM3QixNQUFNQSxJQUFJOEIsVUFBVSxHQUFHO3FDQUFNO29DQUM1Qzt3Q0FBQzt3Q0FBVTlCLE1BQU1BLElBQUkrQixNQUFNLEdBQUc7cUNBQU07aUNBQ3JDLENBQUNDLEdBQUcsQ0FBQyxRQUFpQkM7d0NBQWhCLENBQUNDLE9BQU9DLE1BQU07eURBQ25CLDhEQUFDQzs7MERBQ0MsOERBQUNDO2dEQUFHeEIsV0FBVTs7b0RBQXFCcUI7b0RBQU07Ozs7Ozs7MERBQ3pDLDhEQUFDRztnREFBR3hCLFdBQVU7MERBQXFCc0I7Ozs7Ozs7dUNBRjVCRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQVNuQiw4REFBQ3JDLGlEQUFNQSxDQUFDeUMsTUFBTTtnQkFDVkMsU0FBUzdCO2dCQUNUOEIsWUFBWTtvQkFBRUMsT0FBTztnQkFBSTtnQkFDekJDLFVBQVU7b0JBQUVELE9BQU87Z0JBQUk7Z0JBQ3ZCNUIsV0FBVTs7a0NBRVYsOERBQUM4Qjt3QkFBSzlCLFdBQVU7a0NBQVc7Ozs7OztrQ0FDM0IsOERBQUNoQixpREFBTUEsQ0FBQzhDLElBQUk7d0JBQ1Y5QixXQUFVO3dCQUNWK0IsU0FBUzs0QkFBRUMsR0FBRzs0QkFBS0MsUUFBUTt3QkFBRzt3QkFDOUJDLFNBQVM7NEJBQUVGLEdBQUcsQ0FBQzt3QkFBSTt3QkFDbkJHLFlBQVk7NEJBQUVDLFVBQVU7NEJBQUdDLFFBQVFDO3dCQUFROzs7Ozs7Ozs7Ozs7WUFHbEQzQyw4QkFBZ0IsOERBQUNiLHVEQUFRQTs7Ozs7MEJBRTFCLDhEQUFDQywwREFBZUE7MEJBQ2JZLDhCQUNDLDhEQUFDSTtvQkFBSUMsV0FBVTs4QkFDYiw0RUFBQ2hCLGlEQUFNQSxDQUFDZSxHQUFHO3dCQUNUZ0MsU0FBUzs0QkFBRVEsU0FBUzt3QkFBRTt3QkFDdEJDLE1BQU07NEJBQUVELFNBQVM7d0JBQUU7d0JBQ25CSixZQUFZOzRCQUFFQyxVQUFVO3dCQUFFO2tDQUUxQiw0RUFBQ3RELHVEQUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckI7R0FwRndCRztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY2FyL1tpZF0vcGFnZS50c3g/YzQwMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ29uZmV0dGkgZnJvbSAncmVhY3QtY29uZmV0dGknO1xuaW1wb3J0IHsgQ2FyIH0gZnJvbSAnQC9hcHAvdHlwZXMvY2FyJztcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XG5pbXBvcnQgU2tlbGV0b24gZnJvbSAncmVhY3QtbG9hZGluZy1za2VsZXRvbic7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FyRGV0YWlsKHsgcGFyYW1zIH06IHsgcGFyYW1zOiB7IGlkOiBzdHJpbmcgfSB9KSB7XG4gIGNvbnN0IFtjYXIsIHNldENhcl0gPSB1c2VTdGF0ZTxDYXIgfCBudWxsPihudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoQ2FyID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9mcmVldGVzdGFwaS5jb20vYXBpL3YxL2NhcnMvJHtwYXJhbXMuaWR9YCk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgc2V0Q2FyKGRhdGEpO1xuICAgIH07XG5cbiAgICBmZXRjaENhcigpO1xuICB9LCBbcGFyYW1zLmlkXSk7XG5cbiAgY29uc3QgW3Nob3dDb25mZXR0aSwgc2V0U2hvd0NvbmZldHRpXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuY29uc3QgaGFuZGxlUHVyY2hhc2UgPSAoKSA9PiB7XG4gIHNldFNob3dDb25mZXR0aSh0cnVlKTtcbiAgc2V0VGltZW91dCgoKSA9PiBzZXRTaG93Q29uZmV0dGkoZmFsc2UpLCAyMDAwKTsgLy8gSGlkZSBjb25mZXR0aSBhZnRlciAyIHNlY29uZHNcbn07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG1pbi1oLXNjcmVlbiB3LWZ1bGwgcC01XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC01eGwgZm9udC1ib2xkIG1iLTUgdGV4dC1ibGFja1wiPntjYXIgPyBjYXIubWFrZSA6ICcuLi4nfSB7Y2FyID8gY2FyLm1vZGVsOiAnLi4uJ308L2gxPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLXN0YXJ0XCI+XG4gICAgICB7Y2FyICYmXG4gICAgICAgIDxpbWcgc3JjPXtjYXIuaW1hZ2V9IGFsdD17Y2FyLm1ha2UgKyAnICcgKyBjYXIubW9kZWx9IGNsYXNzTmFtZT1cInctMS8yIG1yLTUgc2hhZG93LWxnXCIgLz5cbiAgICAgIH0gICAgIFxuICAgICAgeyFjYXIgJiZcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvMiBoLTY0IG1yLTUgc2hhZG93LWxnIGJnLWdyYXktMjAwIGFuaW1hdGUtcHVsc2VcIiAvPlxuICAgICAgfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2hhZG93IG92ZXJmbG93LWhpZGRlbiBzbTpyb3VuZGVkLWxnJz5cbiAgICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwibWluLXctZnVsbCB0ZXh0LXNtIHRleHQtZ3JheS05MDAgYmctd2hpdGVcIj5cbiAgICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgICAge1tcbiAgICAgICAgICAgICAgICBbJ3llYXInLCBjYXIgPyBjYXIueWVhciA6ICcuLi4nXSxcbiAgICAgICAgICAgICAgICBbJ2NvbG9yJywgY2FyID8gY2FyLmNvbG9yIDogJy4uLiddLFxuICAgICAgICAgICAgICAgIFsnbWlsZWFnZScsIGNhciA/IGNhci5taWxlYWdlIDogJy4uLiddLFxuICAgICAgICAgICAgICAgIFsncHJpY2UnLCBjYXIgPyBjYXIucHJpY2UgOiAnLi4uJ10sXG4gICAgICAgICAgICAgICAgWydmdWVsJywgY2FyID8gY2FyLmZ1ZWxUeXBlIDogJy4uLiddLFxuICAgICAgICAgICAgICAgIFsndHJhbnNtaXNzaW9uJywgY2FyID8gY2FyLnRyYW5zbWlzc2lvbiA6ICcuLi4nXSxcbiAgICAgICAgICAgICAgICBbJ2VuZ2luZScsIGNhciA/IGNhci5lbmdpbmUgOiAnLi4uJ10sXG4gICAgICAgICAgICAgICAgWydob3JzZXBvd2VyJywgY2FyID8gY2FyLmhvcnNlcG93ZXIgOiAnLi4uJ10sXG4gICAgICAgICAgICAgICAgWydvd25lcnMnLCBjYXIgPyBjYXIub3duZXJzIDogJy4uLiddLFxuICAgICAgICAgICAgICBdLm1hcCgoW2xhYmVsLCB2YWx1ZV0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPHRyIGtleT17bGFiZWx9PlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMiB0ZXh0LWxnXCI+e2xhYmVsfTo8L3RkPlxuICAgICAgICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cInB4LTQgcHktMiB0ZXh0LWxnXCI+e3ZhbHVlfTwvdGQ+XG4gICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8bW90aW9uLmJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVB1cmNoYXNlfVxuICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMSB9fVxuICAgICAgICAgIHdoaWxlVGFwPXt7IHNjYWxlOiAwLjkgfX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJteS01IHJlbGF0aXZlIHJvdW5kZWQgcHgtNSBweS0yLjUgb3ZlcmZsb3ctaGlkZGVuIGdyb3VwIGJnLWJsYWNrIHRleHQtd2hpdGUgc2hhZG93LXNtIHRyYW5zaXRpb24tYWxsIGVhc2Utb3V0IGR1cmF0aW9uLTMwMFwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlB1cmNoYXNlIE5vdzwvc3Bhbj5cbiAgICAgICAgICA8bW90aW9uLnNwYW5cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHJpZ2h0LTAgdy04IGgtMzIgLW10LTEyIGJnLXdoaXRlIG9wYWNpdHktMTBcIlxuICAgICAgICAgICAgaW5pdGlhbD17eyB4OiAyMDAsIHJvdGF0ZTogMTIgfX1cbiAgICAgICAgICAgIGFuaW1hdGU9e3sgeDogLTIwMCB9fVxuICAgICAgICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMSwgcmVwZWF0OiBJbmZpbml0eX19XG4gICAgICAgICAgPjwvbW90aW9uLnNwYW4+XG4gICAgICA8L21vdGlvbi5idXR0b24+XG4gICAge3Nob3dDb25mZXR0aSAmJiA8Q29uZmV0dGkgLz59XG4gICAgXG4gICAgPEFuaW1hdGVQcmVzZW5jZT5cbiAgICAgIHtzaG93Q29uZmV0dGkgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpeGVkIGluc2V0LTBcIj5cbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgICAgICBleGl0PXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Q29uZmV0dGkgLz5cbiAgICAgICAgICA8L21vdGlvbi5kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L0FuaW1hdGVQcmVzZW5jZT5cbiAgICA8L2Rpdj5cbiAgKVxufTsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDb25mZXR0aSIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsIkNhckRldGFpbCIsInBhcmFtcyIsImNhciIsInNldENhciIsImZldGNoQ2FyIiwicmVzcG9uc2UiLCJmZXRjaCIsImlkIiwiZGF0YSIsImpzb24iLCJzaG93Q29uZmV0dGkiLCJzZXRTaG93Q29uZmV0dGkiLCJoYW5kbGVQdXJjaGFzZSIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsIm1ha2UiLCJtb2RlbCIsImltZyIsInNyYyIsImltYWdlIiwiYWx0IiwidGFibGUiLCJ0Ym9keSIsInllYXIiLCJjb2xvciIsIm1pbGVhZ2UiLCJwcmljZSIsImZ1ZWxUeXBlIiwidHJhbnNtaXNzaW9uIiwiZW5naW5lIiwiaG9yc2Vwb3dlciIsIm93bmVycyIsIm1hcCIsImluZGV4IiwibGFiZWwiLCJ2YWx1ZSIsInRyIiwidGQiLCJidXR0b24iLCJvbkNsaWNrIiwid2hpbGVIb3ZlciIsInNjYWxlIiwid2hpbGVUYXAiLCJzcGFuIiwiaW5pdGlhbCIsIngiLCJyb3RhdGUiLCJhbmltYXRlIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwicmVwZWF0IiwiSW5maW5pdHkiLCJvcGFjaXR5IiwiZXhpdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/car/[id]/page.tsx\n"));

/***/ })

});