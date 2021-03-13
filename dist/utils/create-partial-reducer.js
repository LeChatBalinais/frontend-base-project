"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDefaultReducedVal = exports.createPartialReducer = void 0;
function createPartialReducer(getReducedVal, setReducedVal, determiner) {
    return (initialState, currentState, payload) => {
        const val = determiner(initialState, payload);
        if (getReducedVal(initialState, payload) === val)
            return currentState;
        return setReducedVal(currentState, val, payload);
    };
}
exports.createPartialReducer = createPartialReducer;
const getDefaultReducedVal = () => undefined;
exports.getDefaultReducedVal = getDefaultReducedVal;
//# sourceMappingURL=create-partial-reducer.js.map