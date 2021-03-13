"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const state_1 = require("~/state");
const create_reducer_1 = require("~/utils/create-reducer");
const make_action_creator_1 = require("~/utils/make-action-creator");
const player_1 = require("~/getters/player");
const player_2 = require("~/setters/player");
const time_is_close_enough_1 = require("~/utils/time-is-close-enough");
const map_state_to_determiner_1 = require("~/utils/map-state-to-determiner");
exports.ACTION_ID = 'SAGA_VIDEO_SEEK_DELAY_ENDED';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
const getRequestedStage = (state, { requestedStage }) => requestedStage;
const getNewSeekVideo = (stageVideoAt, lastRequestedStage, seekPreviewStatus, stageSeekpreviewAt, requestedStage) => {
    return (!time_is_close_enough_1.timeIsCloseEnough(stageVideoAt, lastRequestedStage) &&
        seekPreviewStatus !== state_1.VideoStatus.Seeking &&
        time_is_close_enough_1.timeIsCloseEnough(lastRequestedStage, stageSeekpreviewAt) &&
        time_is_close_enough_1.timeIsCloseEnough(requestedStage, lastRequestedStage));
};
const getNewLastRequestedStage = (stageVideoAt, prevLastRequestedStage, seekPreviewStatus, stageSeekpreviewAt, requestedStage) => time_is_close_enough_1.timeIsCloseEnough(stageVideoAt, prevLastRequestedStage) &&
    seekPreviewStatus !== state_1.VideoStatus.Seeking &&
    time_is_close_enough_1.timeIsCloseEnough(prevLastRequestedStage, stageSeekpreviewAt) &&
    time_is_close_enough_1.timeIsCloseEnough(requestedStage, prevLastRequestedStage)
    ? undefined
    : prevLastRequestedStage;
const getNewDelayOn = () => false;
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID, [
    [
        player_1.getSeekVideo,
        player_2.setSeekVideo,
        map_state_to_determiner_1.mapStateToDeterminer(getNewSeekVideo, [
            player_1.getStageVideoAt,
            player_1.getLastRequestedStage,
            player_1.getSeekPreviewStatus,
            player_1.getStageSeekPreviewAt,
            getRequestedStage
        ])
    ],
    [
        player_1.getLastRequestedStage,
        player_2.setLastRequestedStage,
        map_state_to_determiner_1.mapStateToDeterminer(getNewLastRequestedStage, [
            player_1.getStageVideoAt,
            player_1.getLastRequestedStage,
            player_1.getSeekPreviewStatus,
            player_1.getStageSeekPreviewAt,
            getRequestedStage
        ])
    ],
    [player_1.isDelayOn, player_2.setDelayOn, map_state_to_determiner_1.mapStateToDeterminer(getNewDelayOn)]
]);
//# sourceMappingURL=saga-video-seek-delay-ended.js.map