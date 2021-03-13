"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable jsx-a11y/media-has-caption */
const react_1 = require("react");
const gsap_1 = require("gsap");
const Video = ({ url: src, onDurationChange: onDurationChangeFunc, onTimeUpdate: onTimeUpdateFunc, onSeeked, onSeeking: onSeekingFunc, onPlaying, onPause, playback, timeSeekTo, seek }) => {
    const videoEl = react_1.useRef(null);
    const [tickOn, setTickOn] = react_1.useState(false);
    const onTick = react_1.useCallback(() => {
        if (videoEl === null)
            return;
        const { current } = videoEl;
        if (current === null)
            return;
        const { currentTime: videoCurrentTime } = current;
        onTimeUpdateFunc(videoCurrentTime);
    }, [onTimeUpdateFunc]);
    const onDurationChange = () => {
        const { current } = videoEl;
        if (!current)
            return;
        onDurationChangeFunc(current.duration);
    };
    const onSeeking = react_1.useCallback(() => {
        if (seek)
            onSeekingFunc(timeSeekTo);
    }, [seek, timeSeekTo, onSeekingFunc]);
    const { current } = videoEl;
    if (current) {
        if (playback) {
            current.play();
            if (!tickOn) {
                gsap_1.TweenMax.ticker.addEventListener('tick', onTick);
                setTickOn(true);
            }
        }
        else {
            current.pause();
            if (seek && Math.abs(current.currentTime - timeSeekTo) > 0.001) {
                current.currentTime = timeSeekTo;
            }
            if (tickOn) {
                gsap_1.TweenMax.ticker.removeEventListener('tick', onTick);
                setTickOn(false);
            }
        }
    }
    return (react_1.default.createElement("video", Object.assign({ preload: "auto", className: "main-video" }, { onDurationChange, onSeeking, onSeeked, onPlaying, onPause, src }, { ref: videoEl })));
};
exports.default = Video;
//# sourceMappingURL=Video.js.map