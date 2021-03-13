"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const create_reducer_1 = require("~/utils/create-reducer");
const tags_1 = require("~/setters/tags");
const tags_2 = require("~/getters/tags");
const make_action_creator_1 = require("~/utils/make-action-creator");
const map_state_to_determiner_1 = require("~/utils/map-state-to-determiner");
exports.ACTION_ID = 'SAGA_TAG_SAVING_CONFIRMED';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
const getNewTagGlobalID = (state, { tagGlobalID }) => tagGlobalID;
const getPrevTagGlobalID = (state, { tagID }) => tags_2.getTagGlobalID(state, tagID);
const setNewTagGlobalID = (state, globalID, { tagID }) => tags_1.setTagGlobalID(state, tagID, globalID);
const calculateTagGlobalID = (globalID) => globalID;
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID, [
    [
        getPrevTagGlobalID,
        setNewTagGlobalID,
        map_state_to_determiner_1.mapStateToDeterminer(calculateTagGlobalID, [getNewTagGlobalID])
    ]
]);
//# sourceMappingURL=saga-tag-saving-confirmed.js.map