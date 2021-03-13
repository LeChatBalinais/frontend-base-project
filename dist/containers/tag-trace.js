"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const TagTrace_1 = require("~/components/TagTrace");
const tags_1 = require("~/getters/tags");
const getTagTracePoints = (state, ID) => {
    const tag = tags_1.getTag(state, ID);
    if (tag === undefined)
        return undefined;
    const { path } = tag;
    return path.reduce((pointsStr, point) => {
        return pointsStr.concat(`${point.x},${point.y} `);
    }, '');
};
const makeMapStateToProps = () => {
    return (state, { tagID }) => {
        const result = {
            points: getTagTracePoints(state, tagID)
        };
        return result;
    };
};
exports.default = react_redux_1.connect(makeMapStateToProps)(TagTrace_1.default);
//# sourceMappingURL=tag-trace.js.map