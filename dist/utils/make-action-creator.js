"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeActionCreator = void 0;
function makeActionCreator(type) {
    return (payload) => {
        return { type, payload };
    };
}
exports.makeActionCreator = makeActionCreator;
//# sourceMappingURL=make-action-creator.js.map