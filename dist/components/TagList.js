"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const tag_row_1 = require("~/containers/tag-row");
const TagTable = ({ beforeExposed, exposed, afterExposed }) => {
    const sortedIDsOfTagsBeforeExposed = beforeExposed.map((ID) => react_1.default.createElement(tag_row_1.default, Object.assign({}, { key: ID, ID })));
    const sortedIDsOfExposedTags = exposed.map((ID) => react_1.default.createElement(tag_row_1.default, Object.assign({}, { key: ID, ID })));
    const sortedIDsOfTagsAfterExposed = afterExposed.map((ID) => react_1.default.createElement(tag_row_1.default, Object.assign({}, { key: ID, ID })));
    let exposedTags;
    if (sortedIDsOfExposedTags.length !== 0)
        exposedTags = react_1.default.createElement("div", Object.assign({ className: "box" }, { style: { boxShadow: '0 2px 3px red, 0 0 0 1px red' } }), sortedIDsOfExposedTags);
    return (react_1.default.createElement("div", { className: "box markers-list" },
        react_1.default.createElement("div", null, sortedIDsOfTagsBeforeExposed),
        exposedTags,
        react_1.default.createElement("div", null, sortedIDsOfTagsAfterExposed)));
};
exports.default = TagTable;
//# sourceMappingURL=TagList.js.map