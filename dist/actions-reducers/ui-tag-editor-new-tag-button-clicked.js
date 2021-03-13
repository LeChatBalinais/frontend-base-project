"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const make_action_creator_1 = require("~/utils/make-action-creator");
const create_reducer_1 = require("~/utils/create-reducer");
const tag_editor_1 = require("~/getters/tag-editor");
const tag_editor_2 = require("~/setters/tag-editor");
const map_state_to_determiner_1 = require("~/utils/map-state-to-determiner");
exports.ACTION_ID = 'UI_NEW_TAG_BUTTON_CLICKED';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
const getNewIsUserPlacingNewTag = (prevIsUserPlacingNewTagMode) => !prevIsUserPlacingNewTagMode;
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID, [
    [
        tag_editor_1.isPlaceNewTagModeOn,
        tag_editor_2.setPlacingNewTagMode,
        map_state_to_determiner_1.mapStateToDeterminer(getNewIsUserPlacingNewTag, [tag_editor_1.isPlaceNewTagModeOn])
    ]
]);
//# sourceMappingURL=ui-tag-editor-new-tag-button-clicked.js.map