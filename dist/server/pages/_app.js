"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 338:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
;// CONCATENATED MODULE: external "react-custom-scrollbars-2"
const external_react_custom_scrollbars_2_namespaceObject = require("react-custom-scrollbars-2");
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "redux-thunk"
const external_redux_thunk_namespaceObject = require("redux-thunk");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_namespaceObject);
;// CONCATENATED MODULE: external "redux-devtools-extension"
const external_redux_devtools_extension_namespaceObject = require("redux-devtools-extension");
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
;// CONCATENATED MODULE: ./reducers/userReducers.js
const UserReducer = (state = {}, action)=>{
    switch(action.type){
        default:
            return state;
    }
};

;// CONCATENATED MODULE: ./reducers/index.js

// import { connectRouter } from 'connected-react-router';

const rootReducers = ()=>(0,external_redux_namespaceObject.combineReducers)({
        user: UserReducer
    })
;
/* harmony default export */ const reducers = (rootReducers);

;// CONCATENATED MODULE: ./store.js





// initial states here
const initalState = {};
// middleware
const middleware = [
    (external_redux_thunk_default())
];
// creating store
const store = (0,external_redux_namespaceObject.createStore)(reducers, initalState, (0,external_redux_devtools_extension_namespaceObject.composeWithDevTools)((0,external_redux_namespaceObject.applyMiddleware)(...middleware)));
// assigning store to next wrapper
const makeStore = ()=>store
;
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(makeStore);

;// CONCATENATED MODULE: external "react-redux"
const external_react_redux_namespaceObject = require("react-redux");
;// CONCATENATED MODULE: ./pages/_app.js






function MyApp({ Component , pageProps: pageProps1  }) {
    const { 0: scrollEvent , 1: setScroll  } = (0,external_react_.useState)("notscroll");
    const handleScrollFrame = (values)=>{
        const { top  } = values;
        if (top > 0) {
            setScroll("scrollactive");
        } else {
            setScroll("notscroll");
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_custom_scrollbars_2_namespaceObject.Scrollbars, {
        renderThumbVertical: (pageProps)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                ...pageProps,
                className: "thumb-vertical"
            })
        ,
        autoHide: true,
        universal: true,
        ...pageProps1,
        onScrollFrame: handleScrollFrame,
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_namespaceObject.Provider, {
            store: store,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps1,
                scrollEvent: scrollEvent
            })
        })
    });
}
/* harmony default export */ const _app = (wrapper.withRedux(MyApp));


/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(338));
module.exports = __webpack_exports__;

})();