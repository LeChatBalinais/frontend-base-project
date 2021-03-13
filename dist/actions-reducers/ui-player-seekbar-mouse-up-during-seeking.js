"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const state_1 = require("~/state");
const create_reducer_1 = require("~/utils/create-reducer");
const player_1 = require("~/getters/player");
const player_2 = require("~/setters/player");
const make_action_creator_1 = require("~/utils/make-action-creator");
const time_is_close_enough_1 = require("~/utils/time-is-close-enough");
const map_state_to_determiner_1 = require("~/utils/map-state-to-determiner");
exports.ACTION_ID = 'MOUSE_UP_DURING_SEEKBAR_SEEKING';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
const getNewSeekingStatus = (seekbarStatus, videoStatus, lastRequestedStage, stageVideoAt, prevSeekingStatus) => {
    let seekingStatus = prevSeekingStatus;
    if (seekbarStatus === state_1.SeekbarStatus.Idle)
        return seekingStatus;
    seekingStatus = state_1.SeekingStatus.NoSeeking;
    if (videoStatus === state_1.VideoStatus.Seeking ||
        (lastRequestedStage !== undefined &&
            !time_is_close_enough_1.timeIsCloseEnough(stageVideoAt, lastRequestedStage)))
        seekingStatus = state_1.SeekingStatus.SeekbarSeeking;
    return seekingStatus;
};
const getNewSeekbarStatus = () => state_1.SeekbarStatus.Idle;
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID, [
    [
        player_1.getSeekingStatus,
        player_2.setSeekingStatus,
        map_state_to_determiner_1.mapStateToDeterminer(getNewSeekingStatus, [
            player_1.getSeekbarStatus,
            player_1.getVideoStatus,
            player_1.getLastRequestedStage,
            player_1.getStageVideoAt,
            player_1.getSeekingStatus
        ])
    ],
    [
        player_1.getSeekbarStatus,
        player_2.setSeekbarStatus,
        map_state_to_determiner_1.mapStateToDeterminer(getNewSeekbarStatus)
    ]
]);
//# sourceMappingURL=ui-player-seekbar-mouse-up-during-seeking.js.map