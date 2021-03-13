"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const tag_existance_status_button_1 = require("~/containers/tag-existance-status-button");
const TagRow = ({ ID, caption, isSaveButtonAvailable: isLocal, className, onClick, onMouseEnter, onMouseLeave }) => {
    return (
    /* eslint-disable-next-line */
    react_1.default.createElement("div", Object.assign({}, {
        className,
        onClick: (event) => {
            event.stopPropagation();
            onClick();
        },
        onMouseEnter,
        onMouseLeave
    }),
        react_1.default.createElement("span", null,
            caption,
            " "),
        react_1.default.createElement(tag_existance_status_button_1.default, Object.assign({}, { ID, isLocal }))));
};
exports.default = TagRow;
//# sourceMappingURL=TagRow.js.map