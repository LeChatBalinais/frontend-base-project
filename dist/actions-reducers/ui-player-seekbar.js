"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducersRegister = void 0;
const mouseDown = require("./ui-player-seekbar-mouse-down");
const mouseMoveDuringSeeking = require("./ui-player-seekbar-mouse-move-during-seeking");
const mouseUpDuringSeeking = require("./ui-player-seekbar-mouse-up-during-seeking");
exports.reducersRegister = Object.assign(Object.assign(Object.assign({}, mouseDown.reducer), mouseMoveDuringSeeking.reducer), mouseUpDuringSeeking.reducer);
//# sourceMappingURL=ui-player-seekbar.js.map