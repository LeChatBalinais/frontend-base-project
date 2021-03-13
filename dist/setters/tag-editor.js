"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTagTraceVisible = exports.setVisibleTraceTagIDs = exports.setPlacingNewTagMode = exports.setTagBeingEditedID = exports.setCurrentTagID = void 0;
const setCurrentTagID = (state, currentTag) => (Object.assign(Object.assign({}, state), { tagEditor: Object.assign(Object.assign({}, state.tagEditor), { currentTag }) }));
exports.setCurrentTagID = setCurrentTagID;
const setTagBeingEditedID = (state, tagBeingEditedID) => {
    return Object.assign(Object.assign({}, state), { tagEditor: Object.assign(Object.assign({}, state.tagEditor), { tagsBeingEdited: [tagBeingEditedID] }) });
};
exports.setTagBeingEditedID = setTagBeingEditedID;
const setPlacingNewTagMode = (state, userIsPlacingNewTag) => (Object.assign(Object.assign({}, state), { tagEditor: Object.assign(Object.assign({}, state.tagEditor), { userIsPlacingNewTag }) }));
exports.setPlacingNewTagMode = setPlacingNewTagMode;
const setVisibleTraceTagIDs = (state, tagsWithVisibleTrace) => (Object.assign(Object.assign({}, state), { tagEditor: Object.assign(Object.assign({}, state.tagEditor), { tagsWithVisibleTrace }) }));
exports.setVisibleTraceTagIDs = setVisibleTraceTagIDs;
const setTagTraceVisible = (tagsWithVisibleTrace, tagID, visible) => {
    if (visible) {
        if (!tagsWithVisibleTrace.includes(tagID)) {
            return [...tagsWithVisibleTrace, tagID];
        }
    }
    else if (tagsWithVisibleTrace.includes(tagID)) {
        return tagsWithVisibleTrace.filter((value) => value !== tagID);
    }
    return tagsWithVisibleTrace;
};
exports.setTagTraceVisible = setTagTraceVisible;
//# sourceMappingURL=tag-editor.js.map