"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const make_action_creator_1 = require("~/utils/make-action-creator");
const create_reducer_1 = require("~/utils/create-reducer");
exports.ACTION_ID = 'ROUTE_REFERENCE_EDITOR';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID);
//# sourceMappingURL=route-reference-editor.js.map