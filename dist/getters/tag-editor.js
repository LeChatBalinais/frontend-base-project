"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTagBeingEditedIDs = exports.getCurrentTagID = exports.isPlaceNewTagModeOn = exports.getVisibleTraceTagIDs = exports.getTagBeingEditedID = void 0;
const getTagBeingEditedID = ({ tagEditor: { tagsBeingEdited } }) => tagsBeingEdited.length === 0 ? undefined : tagsBeingEdited[0];
exports.getTagBeingEditedID = getTagBeingEditedID;
const getVisibleTraceTagIDs = ({ tagEditor: { tagsWithVisibleTrace } }) => tagsWithVisibleTrace;
exports.getVisibleTraceTagIDs = getVisibleTraceTagIDs;
const isPlaceNewTagModeOn = ({ tagEditor: { userIsPlacingNewTag } }) => userIsPlacingNewTag;
exports.isPlaceNewTagModeOn = isPlaceNewTagModeOn;
const getCurrentTagID = ({ tagEditor: { currentTag } }) => currentTag;
exports.getCurrentTagID = getCurrentTagID;
const getTagBeingEditedIDs = ({ tagEditor: { tagsBeingEdited } }) => tagsBeingEdited;
exports.getTagBeingEditedIDs = getTagBeingEditedIDs;
//# sourceMappingURL=tag-editor.js.map