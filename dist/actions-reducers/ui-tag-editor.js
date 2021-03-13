"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducersRegister = void 0;
const newTagButtonClicked = require("./ui-tag-editor-new-tag-button-clicked");
const newTagLayerClicked = require("./ui-tag-editor-new-tag-layer-clicked");
exports.reducersRegister = Object.assign(Object.assign({}, newTagButtonClicked.reducer), newTagLayerClicked.reducer);
//# sourceMappingURL=ui-tag-editor.js.map