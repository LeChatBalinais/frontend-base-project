"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTagsByID = exports.setTagGlobalID = exports.updateTag = exports.deleteTag = exports.addNewTag = void 0;
const table_1 = require("./table");
const tags_1 = require("~/getters/tags");
const addNewTag = (state, { videoID, time, x, y }) => (Object.assign(Object.assign({}, state), { entities: Object.assign(Object.assign({}, state.entities), { tags: table_1.addElementToTable(state.entities.tags, {
            videoID,
            globalID: undefined,
            path: [{ time, x, y }]
        }) }) }));
exports.addNewTag = addNewTag;
const deleteTag = (state, tagID) => (Object.assign(Object.assign({}, state), { entities: Object.assign(Object.assign({}, state.entities), { tags: table_1.removeElementFromTable(state.entities.tags, tagID) }) }));
exports.deleteTag = deleteTag;
const updateTag = (state, tagID, videoID, globalID, path) => (Object.assign(Object.assign({}, state), { entities: Object.assign(Object.assign({}, state.entities), { tags: table_1.updateElementInTable(state.entities.tags, tagID, {
            videoID,
            globalID,
            path
        }) }) }));
exports.updateTag = updateTag;
const setTagGlobalID = (state, tagID, globalID) => {
    const tag = tags_1.getTag(state, tagID);
    return exports.updateTag(state, tagID, tag.videoID, globalID, tag.path);
};
exports.setTagGlobalID = setTagGlobalID;
const setTagsByID = (state, byID) => (Object.assign(Object.assign({}, state), { entities: Object.assign(Object.assign({}, state.entities), { tags: Object.assign(Object.assign({}, state.entities.tags), { byID }) }) }));
exports.setTagsByID = setTagsByID;
//# sourceMappingURL=tags.js.map