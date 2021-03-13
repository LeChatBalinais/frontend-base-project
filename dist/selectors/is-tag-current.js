"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isTagCurrent = void 0;
const tag_editor_1 = require("~/getters/tag-editor");
const isTagCurrent = (state, ID) => tag_editor_1.getCurrentTagID(state) === ID;
exports.isTagCurrent = isTagCurrent;
//# sourceMappingURL=is-tag-current.js.map