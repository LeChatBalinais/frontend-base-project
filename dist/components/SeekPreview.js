"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable jsx-a11y/media-has-caption */
const react_1 = require("react");
const SeekPreview = ({ url: src, timeSeekTo, seek, hidden, onSeeked, onSeeking: onSeekingFunc }) => {
    const videoEl = react_1.useRef(null);
    const onSeeking = react_1.useCallback(() => {
        if (seek)
            onSeekingFunc(timeSeekTo);
    }, [seek, timeSeekTo, onSeekingFunc]);
    const { current } = videoEl;
    if (current) {
        if (seek && Math.abs(current.currentTime - timeSeekTo) > 0.001) {
            current.currentTime = timeSeekTo;
        }
    }
    return (react_1.default.createElement("video", Object.assign({ preload: "auto", className: "seek-preview" }, { onSeeking, onSeeked, src, hidden }, { ref: videoEl })));
};
exports.default = SeekPreview;
//# sourceMappingURL=SeekPreview.js.map