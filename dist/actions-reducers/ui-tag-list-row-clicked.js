"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const make_action_creator_1 = require("~/utils/make-action-creator");
const state_1 = require("~/state");
const create_reducer_1 = require("~/utils/create-reducer");
const tag_editor_1 = require("~/getters/tag-editor");
const tag_editor_2 = require("~/setters/tag-editor");
const player_1 = require("~/setters/player");
const player_2 = require("~/getters/player");
const tags_1 = require("~/getters/tags");
const time_is_close_enough_1 = require("~/utils/time-is-close-enough");
const map_state_to_determiner_1 = require("~/utils/map-state-to-determiner");
exports.ACTION_ID = 'TAG_ROW_CLICKED';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
const getTagID = (state, { tagID }) => tagID;
const getPath = (state, { tagID }) => tags_1.getTagPath(state, tagID);
const getNewCurrentTagID = (tagID) => tagID;
const getNewLastRequestedStage = (stageVideoAt, path, duration, prevLastRequestedStage) => {
    if (path.length === 0)
        return prevLastRequestedStage;
    const lastRequestedStage = path[0].time / duration;
    if (time_is_close_enough_1.timeIsCloseEnough(lastRequestedStage, stageVideoAt))
        return undefined;
    return lastRequestedStage;
};
const getNewSeekingStatus = (stageVideoAt, path, duration, prevSeekingStatus) => {
    if (path.length === 0)
        return prevSeekingStatus;
    const lastRequestedStage = path[0].time / duration;
    if (time_is_close_enough_1.timeIsCloseEnough(lastRequestedStage, stageVideoAt))
        return prevSeekingStatus;
    return state_1.SeekingStatus.Seeking;
};
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID, [
    [
        tag_editor_1.getCurrentTagID,
        tag_editor_2.setCurrentTagID,
        map_state_to_determiner_1.mapStateToDeterminer(getNewCurrentTagID, [getTagID])
    ],
    [
        player_2.getLastRequestedStage,
        player_1.setLastRequestedStage,
        map_state_to_determiner_1.mapStateToDeterminer(getNewLastRequestedStage, [
            player_2.getStageVideoAt,
            getPath,
            player_2.getVideoDuration,
            player_2.getLastRequestedStage
        ])
    ],
    [
        player_2.getSeekingStatus,
        player_1.setSeekingStatus,
        map_state_to_determiner_1.mapStateToDeterminer(getNewSeekingStatus, [
            player_2.getStageVideoAt,
            getPath,
            player_2.getVideoDuration,
            player_2.getSeekingStatus
        ])
    ]
]);
//# sourceMappingURL=ui-tag-list-row-clicked.js.map