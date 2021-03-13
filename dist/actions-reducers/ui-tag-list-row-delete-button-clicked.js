"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const make_action_creator_1 = require("~/utils/make-action-creator");
const create_reducer_1 = require("~/utils/create-reducer");
exports.ACTION_ID = 'UI_TAG_LIST_ROW_DELETE_BUTTON_CLICKED';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID);
//# sourceMappingURL=ui-tag-list-row-delete-button-clicked.js.map