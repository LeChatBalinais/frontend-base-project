"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTagCaption = void 0;
const tags_1 = require("~/getters/tags");
const getTagCaption = (state, ID) => {
    const { path } = tags_1.getTag(state, ID);
    return `${ID.substring(0, 4)} (${path.length === 0 ? '' : path[0].time.toFixed(2)} - ${path.length <= 1 ? '' : path[path.length - 1].time.toFixed(2)})`;
};
exports.getTagCaption = getTagCaption;
//# sourceMappingURL=get-tag-caption.js.map