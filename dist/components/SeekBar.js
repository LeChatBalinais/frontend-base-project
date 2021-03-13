"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const seekbar_current_time_slider_1 = require("~/containers/seekbar-current-time-slider");
const track_pointer_on_1 = require("~/interactivity/track-pointer-on");
const SeekBar = ({ onMouseDown, onMouseUp, onMouseMove }) => {
    const divEl = react_1.useRef(null);
    const getTarget = react_1.useCallback(() => divEl.current, [divEl]);
    const getMouseListener = react_1.useCallback(() => track_pointer_on_1.default(onMouseUp, onMouseDown, onMouseMove, getTarget), [onMouseUp, onMouseDown, onMouseMove, getTarget]);
    return (react_1.default.createElement("div", { className: "box seek-bar-box" },
        react_1.default.createElement("div", { className: "ribbon-container" },
            react_1.default.createElement("div", { className: "ribbon", ref: divEl, onMouseDown: getMouseListener() }),
            react_1.default.createElement("div", { className: "slider-container" },
                react_1.default.createElement(seekbar_current_time_slider_1.default, null)))));
};
exports.default = SeekBar;
//# sourceMappingURL=SeekBar.js.map