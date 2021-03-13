"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = void 0;
const default_state_1 = require("~/default-state");
const saga = require("./saga");
const ui = require("./ui");
const route = require("./route");
const reducersRegister = Object.assign(Object.assign(Object.assign({}, saga.reducersRegister), ui.reducersRegister), route.reducersRegister);
const getReducerFromRegister = (register, action) => register[action.type];
const reducer = (state = default_state_1.default, action) => {
    const actionReducer = getReducerFromRegister(reducersRegister, action);
    if (actionReducer === undefined)
        return state;
    return actionReducer(state, action);
};
exports.reducer = reducer;
//# sourceMappingURL=index.js.map