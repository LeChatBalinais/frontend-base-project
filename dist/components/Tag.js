"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const element_animation_1 = require("~/interactivity/element-animation");
const Tag = ({ position, path, timeAt, className, isAnimated, onMouseDown, onMouseUp, onMouseEnter, onMouseOut }) => {
    const divEl = react_1.useRef(null);
    const width = 12.5;
    const height = 12.5;
    const animationProps = react_1.useMemo(() => element_animation_1.getUpdatedAnimationProps(path, timeAt, width, height, isAnimated), [path, timeAt, width, height, isAnimated]);
    const animationRef = react_1.useRef(undefined);
    const prevPropsRef = react_1.useRef(undefined);
    react_1.useEffect(() => {
        animationRef.current = element_animation_1.getUpdatedAnimation(animationRef.current, prevPropsRef.current, animationProps, () => divEl.current);
        prevPropsRef.current = animationProps;
    }, [animationProps]);
    const style = {
        top: `calc(${position.y}% - ${12.5}px`,
        left: `calc(${position.x}% - ${12.5}px`
    };
    return (
    /* eslint-disable-next-line */
    react_1.default.createElement("div", Object.assign({ onMouseDown: (event) => {
            event.stopPropagation();
            onMouseDown();
        } }, { onMouseUp, onMouseEnter, onMouseOut, className }, { style: style, ref: divEl })));
};
exports.default = Tag;
//# sourceMappingURL=Tag.js.map