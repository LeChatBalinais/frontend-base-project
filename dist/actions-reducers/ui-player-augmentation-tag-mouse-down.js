"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const make_action_creator_1 = require("~/utils/make-action-creator");
const state_1 = require("~/state");
const create_reducer_1 = require("~/utils/create-reducer");
const tag_editor_1 = require("~/getters/tag-editor");
const player_1 = require("~/getters/player");
const player_2 = require("~/setters/player");
const tag_editor_2 = require("~/setters/tag-editor");
const map_state_to_determiner_1 = require("~/utils/map-state-to-determiner");
exports.ACTION_ID = 'MOUSE_DOWN_ON_TAG';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
const getTagID = (state, { tagID }) => tagID;
const getNewCurrentTagID = (tagID) => tagID;
const getNewTagBeingEditedID = (tagID, currentTagID) => tagID === currentTagID ? tagID : undefined;
const getNewPlaybackStatus = (currentTagID, prevPlaybackStatus, tagID) => currentTagID !== tagID ? prevPlaybackStatus : state_1.PlaybackStatus.Playing;
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID, [
    [
        tag_editor_1.getCurrentTagID,
        tag_editor_2.setCurrentTagID,
        map_state_to_determiner_1.mapStateToDeterminer(getNewCurrentTagID, [getTagID])
    ],
    [
        tag_editor_1.getTagBeingEditedID,
        tag_editor_2.setTagBeingEditedID,
        map_state_to_determiner_1.mapStateToDeterminer(getNewTagBeingEditedID, [getTagID, tag_editor_1.getCurrentTagID])
    ],
    [
        player_1.getPlaybackStatus,
        player_2.setPlaybackStatus,
        map_state_to_determiner_1.mapStateToDeterminer(getNewPlaybackStatus, [
            tag_editor_1.getCurrentTagID,
            player_1.getPlaybackStatus,
            getTagID
        ])
    ]
]);
//# sourceMappingURL=ui-player-augmentation-tag-mouse-down.js.map