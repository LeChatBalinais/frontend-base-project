"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const tag_trace_1 = require("~/containers/tag-trace");
const GraphicalAugmentation = ({ tagIDs }) => {
    const tagTraceContainers = tagIDs.map((tagID) => react_1.default.createElement(tag_trace_1.default, Object.assign({}, { key: tagID, tagID })));
    return (react_1.default.createElement("div", { className: "augmentation" },
        react_1.default.createElement("svg", { className: "graphical-augmentation", viewBox: "0 0 100 100", preserveAspectRatio: "none" }, tagTraceContainers)));
};
exports.default = GraphicalAugmentation;
//# sourceMappingURL=GraphicalAugmentation.js.map