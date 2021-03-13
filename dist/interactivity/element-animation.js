"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUpdatedAnimation = exports.getUpdatedAnimationProps = void 0;
const gsap_1 = require("gsap");
function getUpdatedAnimationProps(path, currentTime, width, height, existance) {
    if (!existance)
        return undefined;
    return { path, currentTime, width, height };
}
exports.getUpdatedAnimationProps = getUpdatedAnimationProps;
function shutedDownAnimation(animation) {
    if (animation) {
        animation.kill();
    }
    return undefined;
}
function createNewAnimation(target, path, width, height) {
    const animation = new gsap_1.TimelineLite({ paused: true, tweens: [] });
    for (let i = 0; i < path.length - 1; i += 1) {
        animation.to(target, path[i + 1].time - path[i].time, {
            left: `calc(${path[i + 1].x}% - ${width}px`,
            top: `calc(${path[i + 1].y}% - ${height}px`
        });
    }
    return animation;
}
function updatedAnimationToCurrentTime(animation, time) {
    if (Math.abs(time - animation.time()) > 0.01) {
        animation.resume(time);
    }
    return animation;
}
const getUpdatedAnimation = (animation, prevState, newState, getTarget) => {
    let updatedAnimation = animation;
    if (prevState === newState)
        return updatedAnimation;
    if (prevState && !newState)
        updatedAnimation = shutedDownAnimation(updatedAnimation);
    if (!newState)
        return updatedAnimation;
    const { width, height, path, currentTime } = newState;
    const target = getTarget();
    if (!target || !width || !height || !path)
        return updatedAnimation;
    if (!prevState) {
        updatedAnimation = createNewAnimation(target, path, width, height);
        updatedAnimation = updatedAnimationToCurrentTime(updatedAnimation, currentTime);
    }
    else {
        const { width: prevWidth, height: prevHeight, path: prevPath, currentTime: prevCurrentTime } = prevState;
        if (prevPath !== path || prevWidth !== width || prevHeight !== height) {
            updatedAnimation = createNewAnimation(target, path, width, height);
        }
        if (prevCurrentTime !== currentTime) {
            updatedAnimation = updatedAnimationToCurrentTime(updatedAnimation, currentTime);
        }
    }
    return updatedAnimation;
};
exports.getUpdatedAnimation = getUpdatedAnimation;
//# sourceMappingURL=element-animation.js.map