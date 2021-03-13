"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducersRegister = void 0;
const appearsAtEdited = require("./ui-current-tag-panel-appears-at-edited");
const disappearsAtEdited = require("./ui-current-tag-panel-disappears-at-edited");
const traceVisibilityCheckboxToggled = require("./ui-current-tag-panel-trace-visibility-checkbox-toggled");
exports.reducersRegister = Object.assign(Object.assign(Object.assign({}, appearsAtEdited.reducer), disappearsAtEdited.reducer), traceVisibilityCheckboxToggled.reducer);
//# sourceMappingURL=ui-current-tag-panel.js.map