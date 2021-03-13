"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const redux_first_router_link_1 = require("redux-first-router-link");
const route_reference_editor_1 = require("../actions-reducers/route-reference-editor");
const TagTable = ({ videos }) => {
    const videoIDsLinks = videos.map(({ globalID, name }) => (react_1.default.createElement("div", Object.assign({}, { key: globalID }, { className: "box" }),
        react_1.default.createElement(redux_first_router_link_1.default, { to: route_reference_editor_1.actionCreator({ videoID: globalID }) }, name))));
    return (react_1.default.createElement("div", { className: "box markers-list" },
        react_1.default.createElement("div", null, videoIDsLinks)));
};
exports.default = TagTable;
//# sourceMappingURL=Videos.js.map