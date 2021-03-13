"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReducer = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const create_partial_reducer_1 = require("./create-partial-reducer");
function createReducerPrivate(reducers) {
    return (state, { payload }) => {
        let newState = state;
        newState = reducers.reduce((intermediateState, reducer) => reducer(state, intermediateState, payload), newState);
        return newState;
    };
}
function createReducer(ACTION_ID, reducersComponents) {
    let subreducers = [];
    if (reducersComponents !== undefined)
        subreducers = reducersComponents.map((reducerComponents) => create_partial_reducer_1.createPartialReducer(reducerComponents[0], reducerComponents[1], reducerComponents[2]));
    const result = {
        [ACTION_ID]: createReducerPrivate(subreducers)
    };
    return result;
}
exports.createReducer = createReducer;
//# sourceMappingURL=create-reducer.js.map