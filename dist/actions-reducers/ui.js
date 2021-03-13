"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducersRegister = void 0;
const player = require("./ui-player");
const tagListRow = require("./ui-tag-list-row");
const currentTagPanel = require("./ui-current-tag-panel");
const tag = require("./ui-tag");
const tagEditor = require("./ui-tag-editor");
exports.reducersRegister = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, player.reducersRegister), tagListRow.reducersRegister), currentTagPanel.reducersRegister), tag.reducersRegister), tagEditor.reducersRegister);
//# sourceMappingURL=ui.js.map