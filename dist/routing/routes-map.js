"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const route_home_1 = require("../actions-reducers/route-home");
const route_reference_editor_1 = require("../actions-reducers/route-reference-editor");
const actionIDToRoute = {
    [route_home_1.ACTION_ID]: '/',
    [route_reference_editor_1.ACTION_ID]: '/reference-editor/:videoID'
};
const routesMap = actionIDToRoute;
exports.default = routesMap;
//# sourceMappingURL=routes-map.js.map