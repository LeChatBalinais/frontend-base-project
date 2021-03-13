"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const make_action_creator_1 = require("~/utils/make-action-creator");
const create_reducer_1 = require("~/utils/create-reducer");
const tag_editor_1 = require("~/getters/tag-editor");
const tag_editor_2 = require("~/setters/tag-editor");
const map_state_to_determiner_1 = require("~/utils/map-state-to-determiner");
exports.ACTION_ID = 'TAG_TRACE_VISIBILITY_CHECKBOX_TOGGLED';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
const getTagID = (state, { tagID }) => tagID;
const isVisible = (state, { visible }) => visible;
const getNewVisibleTraceTagIDs = (tagID, visible, prevVisibleTraceTagIDs) => tag_editor_2.setTagTraceVisible(prevVisibleTraceTagIDs, tagID, visible);
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID, [
    [
        tag_editor_1.getVisibleTraceTagIDs,
        tag_editor_2.setVisibleTraceTagIDs,
        map_state_to_determiner_1.mapStateToDeterminer(getNewVisibleTraceTagIDs, [
            getTagID,
            isVisible,
            tag_editor_1.getVisibleTraceTagIDs
        ])
    ]
]);
//# sourceMappingURL=ui-current-tag-panel-trace-visibility-checkbox-toggled.js.map