"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTagGlobalID = exports.getTagPath = exports.getTag = exports.getTagIDs = exports.getTags = void 0;
const getTags = ({ entities: { tags: { byID } } }) => byID;
exports.getTags = getTags;
const getTagIDs = ({ entities: { tags: { allIDs } } }) => allIDs;
exports.getTagIDs = getTagIDs;
const getTag = ({ entities: { tags: { byID } } }, ID) => byID[ID];
exports.getTag = getTag;
const getTagPath = (state, ID) => {
    const tag = exports.getTag(state, ID);
    return tag === undefined ? undefined : tag.path;
};
exports.getTagPath = getTagPath;
const getTagGlobalID = (state, ID) => {
    const tag = exports.getTag(state, ID);
    return tag ? tag.globalID : undefined;
};
exports.getTagGlobalID = getTagGlobalID;
//# sourceMappingURL=tags.js.map