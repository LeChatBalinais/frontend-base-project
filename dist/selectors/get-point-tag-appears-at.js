"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPointTagAppearsAt = void 0;
const tags_1 = require("~/getters/tags");
const getPointTagAppearsAt = (state, ID) => {
    const tag = tags_1.getTag(state, ID);
    if (tag === undefined)
        return undefined;
    const { path } = tag;
    if (path.length === 0)
        return undefined;
    const [appearsAt] = path;
    return appearsAt;
};
exports.getPointTagAppearsAt = getPointTagAppearsAt;
//# sourceMappingURL=get-point-tag-appears-at.js.map