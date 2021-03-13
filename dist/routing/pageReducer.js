"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// pageReducer.js
const redux_first_router_1 = require("redux-first-router");
const route_home_1 = require("../actions-reducers/route-home");
const route_reference_editor_1 = require("../actions-reducers/route-reference-editor");
const components = {
    [route_home_1.ACTION_ID]: 'Home',
    [route_reference_editor_1.ACTION_ID]: 'ReferenceEditor',
    [redux_first_router_1.NOT_FOUND]: 'NotFound'
};
exports.default = (state = 'Home', action) => components[action.type] || state;
//# sourceMappingURL=pageReducer.js.map