"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const tag_1 = require("~/containers/tag");
const Augmentation = ({ tagIDs, reactOnMouseMove, onMouseDown, onMouseMove, onMouseUp }) => {
    const divEl = react_1.useRef(null);
    const onMouseMoveFunc = react_1.useCallback((e) => {
        if (!reactOnMouseMove || !onMouseMove)
            return;
        const area = divEl.current.getBoundingClientRect();
        let relativePositionX = ((e.clientX - area.left) / area.width) * 100;
        if (relativePositionX < 0)
            relativePositionX = 0;
        else if (relativePositionX > 100)
            relativePositionX = 100;
        let relativePositionY = ((e.clientY - area.top) / area.height) * 100;
        if (relativePositionY < 0)
            relativePositionY = 0;
        else if (relativePositionY > 100)
            relativePositionY = 100;
        onMouseMove(relativePositionX, relativePositionY);
    }, [onMouseMove, reactOnMouseMove]);
    const onMouseUpFunc = react_1.useCallback((e) => {
        if (!onMouseUp)
            return;
        const area = divEl.current.getBoundingClientRect();
        let relativePositionX = ((e.clientX - area.left) / area.width) * 100;
        if (relativePositionX < 0)
            relativePositionX = 0;
        else if (relativePositionX > 100)
            relativePositionX = 100;
        let relativePositionY = ((e.clientY - area.top) / area.height) * 100;
        if (relativePositionY < 0)
            relativePositionY = 0;
        else if (relativePositionY > 100)
            relativePositionY = 100;
        onMouseUp(relativePositionX, relativePositionY);
    }, [onMouseUp]);
    const tagContainers = tagIDs.map((tagID) => (react_1.default.createElement(tag_1.default, Object.assign({}, { key: tagID, ID: tagID }))));
    return (
    /* eslint-disable-next-line */
    react_1.default.createElement("div", Object.assign({ className: "augmentation", ref: divEl }, {
        onMouseDown,
        onMouseMove: onMouseMoveFunc,
        onMouseUp: onMouseUpFunc
    }), tagContainers));
};
exports.default = Augmentation;
//# sourceMappingURL=Augmentation.js.map