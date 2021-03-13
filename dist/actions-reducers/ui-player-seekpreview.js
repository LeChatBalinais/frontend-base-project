"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducersRegister = void 0;
const seeked = require("./ui-player-seekpreview-seeked");
const seeking = require("./ui-player-seekpreview-seeking");
exports.reducersRegister = Object.assign(Object.assign({}, seeked.reducer), seeking.reducer);
//# sourceMappingURL=ui-player-seekpreview.js.map