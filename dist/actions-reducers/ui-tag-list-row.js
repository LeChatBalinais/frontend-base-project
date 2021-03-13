"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducersRegister = void 0;
const rowClicked = require("./ui-tag-list-row-clicked");
const deleteButtonClicked = require("./ui-tag-list-row-delete-button-clicked");
const saveButtonClicked = require("./ui-tag-list-row-save-button-clicked");
exports.reducersRegister = Object.assign(Object.assign(Object.assign({}, rowClicked.reducer), deleteButtonClicked.reducer), saveButtonClicked.reducer);
//# sourceMappingURL=ui-tag-list-row.js.map