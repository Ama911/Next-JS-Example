"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/filter.tsx":
/*!***********************************!*\
  !*** ./app/components/filter.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// components/Filter.tsx\n\n\nconst Filter = (param)=>{\n    let { filter, setFilter, setPriceRange, carMakes } = param;\n    const handleMakeChange = (event)=>{\n        setFilter(event.target.value);\n    };\n    const handlePriceChange = (event)=>{\n        setPriceRange([\n            0,\n            Number(event.target.value)\n        ]);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center bg-gray-200 p-5 rounded-lg space-x-3\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n            onChange: handleMakeChange,\n            className: \"mb-4 bg-white p-2 rounded border-gray-300 text-black w-full sm:w-auto\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                    value: \"\",\n                    children: \"All\"\n                }, void 0, false, {\n                    fileName: \"/Users/Amadeus/Documents/Repositories/DDB Post Interview Test/app/components/filter.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, undefined),\n                carMakes.map((make)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: make,\n                        children: make\n                    }, make, false, {\n                        fileName: \"/Users/Amadeus/Documents/Repositories/DDB Post Interview Test/app/components/filter.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 11\n                    }, undefined))\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/Amadeus/Documents/Repositories/DDB Post Interview Test/app/components/filter.tsx\",\n            lineNumber: 16,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/Amadeus/Documents/Repositories/DDB Post Interview Test/app/components/filter.tsx\",\n        lineNumber: 15,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Filter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Filter);\nvar _c;\n$RefreshReg$(_c, \"Filter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2ZpbHRlci50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFBLHdCQUF3Qjs7QUFDRTtBQUUxQixNQUFNQyxTQUFTO1FBQUMsRUFBRUMsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLGFBQWEsRUFBRUMsUUFBUSxFQUFFO0lBRTVELE1BQU1DLG1CQUFtQixDQUFDQztRQUN4QkosVUFBVUksTUFBTUMsTUFBTSxDQUFDQyxLQUFLO0lBQzlCO0lBRUEsTUFBTUMsb0JBQW9CLENBQUNIO1FBQ3pCSCxjQUFjO1lBQUM7WUFBR08sT0FBT0osTUFBTUMsTUFBTSxDQUFDQyxLQUFLO1NBQUU7SUFDL0M7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFBT0MsVUFBVVQ7WUFBa0JPLFdBQVU7OzhCQUM1Qyw4REFBQ0c7b0JBQU9QLE9BQU07OEJBQUc7Ozs7OztnQkFDaEJKLFNBQVNZLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ1osOERBQUNGO3dCQUFrQlAsT0FBT1M7a0NBQU9BO3VCQUFwQkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkI7S0FwQk1qQjtBQXNCTiwrREFBZUEsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9maWx0ZXIudHN4PzBlMjQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9GaWx0ZXIudHN4XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBGaWx0ZXIgPSAoeyBmaWx0ZXIsIHNldEZpbHRlciwgc2V0UHJpY2VSYW5nZSwgY2FyTWFrZXMgfSkgPT4ge1xuXG4gIGNvbnN0IGhhbmRsZU1ha2VDaGFuZ2UgPSAoZXZlbnQpID0+IHtcbiAgICBzZXRGaWx0ZXIoZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVQcmljZUNoYW5nZSA9IChldmVudCkgPT4ge1xuICAgIHNldFByaWNlUmFuZ2UoWzAsIE51bWJlcihldmVudC50YXJnZXQudmFsdWUpXSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBiZy1ncmF5LTIwMCBwLTUgcm91bmRlZC1sZyBzcGFjZS14LTMnPlxuICAgICAgPHNlbGVjdCBvbkNoYW5nZT17aGFuZGxlTWFrZUNoYW5nZX0gY2xhc3NOYW1lPSdtYi00IGJnLXdoaXRlIHAtMiByb3VuZGVkIGJvcmRlci1ncmF5LTMwMCB0ZXh0LWJsYWNrIHctZnVsbCBzbTp3LWF1dG8nPlxuICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+QWxsPC9vcHRpb24+XG4gICAgICAgIHtjYXJNYWtlcy5tYXAobWFrZSA9PiAoXG4gICAgICAgICAgPG9wdGlvbiBrZXk9e21ha2V9IHZhbHVlPXttYWtlfT57bWFrZX08L29wdGlvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L3NlbGVjdD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjsiXSwibmFtZXMiOlsiUmVhY3QiLCJGaWx0ZXIiLCJmaWx0ZXIiLCJzZXRGaWx0ZXIiLCJzZXRQcmljZVJhbmdlIiwiY2FyTWFrZXMiLCJoYW5kbGVNYWtlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJ2YWx1ZSIsImhhbmRsZVByaWNlQ2hhbmdlIiwiTnVtYmVyIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VsZWN0Iiwib25DaGFuZ2UiLCJvcHRpb24iLCJtYXAiLCJtYWtlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/filter.tsx\n"));

/***/ })

});