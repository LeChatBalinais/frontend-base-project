"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPointTagDisappearsAt = void 0;
const tags_1 = require("~/getters/tags");
const getPointTagDisappearsAt = (state, ID) => {
    const tag = tags_1.getTag(state, ID);
    if (tag === undefined)
        return undefined;
    const { path } = tag;
    if (path.length === 0)
        return undefined;
    const { length: l, [l - 1]: disappearsAt } = path;
    return disappearsAt;
};
exports.getPointTagDisappearsAt = getPointTagDisappearsAt;
//# sourceMappingURL=get-point-tag-disappears-at.js.map