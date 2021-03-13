"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducersRegister = void 0;
const mouseDown = require("./ui-player-augmentation-mouse-down");
const mouseMove = require("./ui-player-augmentation-mouse-move");
const mouseUp = require("./ui-player-augmentation-mouse-up");
const tagMouseDown = require("./ui-player-augmentation-tag-mouse-down");
const tagMouseUp = require("./ui-player-augmentation-tag-mouse-up");
exports.reducersRegister = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, mouseDown.reducer), mouseMove.reducer), mouseUp.reducer), tagMouseDown.reducer), tagMouseUp.reducer);
//# sourceMappingURL=ui-player-augmentation.js.map