"use strict";
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapStateToDeterminer = void 0;
function mapStateToDeterminer(determineValue, selectors) {
    return (state, payload) => {
        let val;
        if (!selectors)
            val = determineValue();
        else {
            const args = selectors.map((selector) => selector(state, payload));
            val = determineValue(...args);
        }
        return val;
    };
}
exports.mapStateToDeterminer = mapStateToDeterminer;
//# sourceMappingURL=map-state-to-determiner.js.map