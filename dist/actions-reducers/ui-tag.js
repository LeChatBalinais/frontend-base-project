"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducersRegister = void 0;
const mouseEnter = require("./ui-tag-mouse-enter");
const mouseOut = require("./ui-tag-mouse-out");
exports.reducersRegister = Object.assign(Object.assign({}, mouseEnter.reducer), mouseOut.reducer);
//# sourceMappingURL=ui-tag.js.map