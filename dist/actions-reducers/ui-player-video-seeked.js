"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const make_action_creator_1 = require("~/utils/make-action-creator");
const state_1 = require("~/state");
const create_reducer_1 = require("~/utils/create-reducer");
const player_1 = require("~/getters/player");
const player_2 = require("~/setters/player");
const time_is_close_enough_1 = require("~/utils/time-is-close-enough");
const map_state_to_determiner_1 = require("~/utils/map-state-to-determiner");
exports.ACTION_ID = 'UI_PLAYER_VIDEO_SEEKED';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
const getNewStageVideoAt = (stageVideoSeekingTo) => stageVideoSeekingTo;
const getNewSeekingStatus = (stageVideoSeekingTo, lastRequestedStage, seekbarStatus, prevSeekingStatus) => time_is_close_enough_1.timeIsCloseEnough(stageVideoSeekingTo, lastRequestedStage) &&
    seekbarStatus === state_1.SeekbarStatus.Idle
    ? state_1.SeekingStatus.NoSeeking
    : prevSeekingStatus;
const getNewLastRequestedStage = (stageVideoSeekingTo, prevLastRequestedStage) => time_is_close_enough_1.timeIsCloseEnough(stageVideoSeekingTo, prevLastRequestedStage)
    ? undefined
    : prevLastRequestedStage;
const getNewVideoStatus = () => state_1.VideoStatus.Paused;
const getNewStageVideoSeekingTo = () => undefined;
const getNewSeekVideo = (stageVideoSeekingTo, seekPreviewStatus, prevLastRequestedStage, delayIsOn) => !time_is_close_enough_1.timeIsCloseEnough(stageVideoSeekingTo, prevLastRequestedStage) &&
    seekPreviewStatus !== state_1.VideoStatus.Seeking &&
    !delayIsOn;
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID, [
    [
        player_1.getStageVideoSeekingTo,
        player_2.setStageVideoSeekingTo,
        map_state_to_determiner_1.mapStateToDeterminer(getNewStageVideoSeekingTo)
    ],
    [player_1.getVideoStatus, player_2.setVideoStatus, map_state_to_determiner_1.mapStateToDeterminer(getNewVideoStatus)],
    [
        player_1.getLastRequestedStage,
        player_2.setLastRequestedStage,
        map_state_to_determiner_1.mapStateToDeterminer(getNewLastRequestedStage, [
            player_1.getStageVideoSeekingTo,
            player_1.getLastRequestedStage
        ])
    ],
    [
        player_1.getSeekingStatus,
        player_2.setSeekingStatus,
        map_state_to_determiner_1.mapStateToDeterminer(getNewSeekingStatus, [
            player_1.getStageVideoSeekingTo,
            player_1.getLastRequestedStage,
            player_1.getSeekbarStatus,
            player_1.getSeekingStatus
        ])
    ],
    [
        player_1.getStageVideoAt,
        player_2.setStageVideoAt,
        map_state_to_determiner_1.mapStateToDeterminer(getNewStageVideoAt, [player_1.getStageVideoSeekingTo])
    ],
    [
        player_1.getSeekVideo,
        player_2.setSeekVideo,
        map_state_to_determiner_1.mapStateToDeterminer(getNewSeekVideo, [
            player_1.getStageVideoSeekingTo,
            player_1.getSeekPreviewStatus,
            player_1.getLastRequestedStage,
            player_1.isDelayOn
        ])
    ]
]);
//# sourceMappingURL=ui-player-video-seeked.js.map