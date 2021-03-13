"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducersRegister = void 0;
const home = require("./route-home");
const referenceEditor = require("./route-reference-editor");
exports.reducersRegister = Object.assign(Object.assign({}, home.reducer), referenceEditor.reducer);
//# sourceMappingURL=route.js.map