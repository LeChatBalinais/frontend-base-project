"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateElementInTable = exports.removeElementFromTable = exports.addElementToTable = void 0;
const uuid_1 = require("uuid");
function addElementToTable(table, instance) {
    const ID = uuid_1.v4();
    return {
        byID: Object.assign(Object.assign({}, table.byID), { [ID]: instance }),
        allIDs: [...table.allIDs, ID]
    };
}
exports.addElementToTable = addElementToTable;
function removeElementFromTable({ byID: prevByID, allIDs }, ID) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _a = prevByID, _b = ID, removedTag = _a[_b], byID = __rest(_a, [typeof _b === "symbol" ? _b : _b + ""]);
    const index = allIDs.findIndex((element) => element === ID);
    return {
        byID,
        allIDs: [...allIDs.slice(0, index), ...allIDs.slice(index + 1)]
    };
}
exports.removeElementFromTable = removeElementFromTable;
function updateElementInTable({ byID, allIDs }, ID, element) {
    return {
        allIDs,
        byID: Object.assign(Object.assign({}, byID), { [ID]: element })
    };
}
exports.updateElementInTable = updateElementInTable;
//# sourceMappingURL=table.js.map