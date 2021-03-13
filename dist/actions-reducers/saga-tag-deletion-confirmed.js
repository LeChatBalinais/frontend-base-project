"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const make_action_creator_1 = require("~/utils/make-action-creator");
const create_reducer_1 = require("~/utils/create-reducer");
const tag_editor_1 = require("~/setters/tag-editor");
const tags_1 = require("~/setters/tags");
const get_default_reduced_val_1 = require("~/utils/get-default-reduced-val");
const tag_editor_2 = require("~/getters/tag-editor");
const map_state_to_determiner_1 = require("~/utils/map-state-to-determiner");
exports.ACTION_ID = 'SAGA_TAG_DELETION_CONFIRMED';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
const getTagID = (state, { tagID }) => tagID;
const getNewTagIDToDelete = (ID) => ID;
const getNewCurrentTagID = (tagToRemoveID, prevCurrentTagID) => tagToRemoveID === prevCurrentTagID ? undefined : prevCurrentTagID;
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID, [
    [
        get_default_reduced_val_1.getDefaultReducedVal,
        tags_1.deleteTag,
        map_state_to_determiner_1.mapStateToDeterminer(getNewTagIDToDelete, [getTagID])
    ],
    [
        tag_editor_2.getCurrentTagID,
        tag_editor_1.setCurrentTagID,
        map_state_to_determiner_1.mapStateToDeterminer(getNewCurrentTagID, [getTagID, tag_editor_2.getCurrentTagID])
    ]
]);
//# sourceMappingURL=saga-tag-deletion-confirmed.js.map