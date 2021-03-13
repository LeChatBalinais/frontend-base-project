"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function newMouseListener(onMouseUp, onMouseDown, onMouseMove, getTargetTarget) {
    const mouseMoveListener = (e) => {
        const ribbonRect = getTargetTarget().getBoundingClientRect();
        let relativePosition = (e.clientX - (ribbonRect.left + 7)) / (ribbonRect.width - 14);
        if (relativePosition < 0)
            relativePosition = 0;
        else if (relativePosition > 1)
            relativePosition = 1;
        onMouseMove(relativePosition);
    };
    const mouseUpListener = () => {
        document.removeEventListener('mousemove', mouseMoveListener);
        document.removeEventListener('mouseup', mouseUpListener);
        onMouseUp();
    };
    return (event) => {
        const ribbonRect = getTargetTarget().getBoundingClientRect();
        let relativePosition = (event.clientX - (ribbonRect.left + 7)) / (ribbonRect.width - 14);
        if (relativePosition < 0)
            relativePosition = 0;
        else if (relativePosition > 1)
            relativePosition = 1;
        document.addEventListener('mousemove', mouseMoveListener);
        document.addEventListener('mouseup', mouseUpListener);
        onMouseDown(relativePosition);
    };
}
exports.default = newMouseListener;
//# sourceMappingURL=track-pointer-on.js.map