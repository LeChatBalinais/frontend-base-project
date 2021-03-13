"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTagDragged = void 0;
const tag_editor_1 = require("~/getters/tag-editor");
const isTagDragged = (state, ID) => tag_editor_1.getTagBeingEditedIDs(state).includes(ID);
exports.isTagDragged = isTagDragged;
//# sourceMappingURL=is-tag-dragged.js.map