"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const core_1 = require("@redux-saga/core");
const redux_first_router_1 = require("redux-first-router");
const actions_reducers_1 = require("./actions-reducers");
const root_saga_1 = require("./sagas/root-saga");
const routes_map_1 = require("./routing/routes-map");
const pageReducer_1 = require("./routing/pageReducer");
const sagaMiddleware = core_1.default();
const { reducer: locationReducer, middleware: routerMiddleware, enhancer: routerEnhancer, initialDispatch } = redux_first_router_1.connectRoutes(routes_map_1.default, {
    initialDispatch: false
});
const rootReducer = (state, action) => {
    const newState = actions_reducers_1.reducer(state, action);
    return Object.assign(Object.assign({}, newState), { page: pageReducer_1.default(newState.page, action), location: locationReducer(newState.location, action) });
};
/* eslint-disable dot-notation */
/* eslint-disable no-underscore-dangle */
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || redux_1.compose;
const store = redux_1.createStore(rootReducer, composeEnhancers(routerEnhancer, redux_1.applyMiddleware(sagaMiddleware, routerMiddleware)));
/* eslint-enable */
/* eslint-enable */
sagaMiddleware.run(root_saga_1.default);
initialDispatch();
exports.default = store;
//# sourceMappingURL=store.js.map