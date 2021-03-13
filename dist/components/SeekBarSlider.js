"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const SeekBarSlider = (props) => {
    const { className, position } = props;
    const style = {
        left: `calc(${position}% - 7px`
    };
    return react_1.default.createElement("div", Object.assign({}, { className }, { style: style }));
};
exports.default = SeekBarSlider;
//# sourceMappingURL=SeekBarSlider.js.map