"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTagLocal = void 0;
const tags_1 = require("~/getters/tags");
const isTagLocal = (state, ID) => {
    const tag = tags_1.getTag(state, ID);
    if (!tag)
        return false;
    return tag.globalID === undefined;
};
exports.isTagLocal = isTagLocal;
//# sourceMappingURL=is-tag-local.js.map