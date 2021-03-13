"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const make_action_creator_1 = require("~/utils/make-action-creator");
const state_1 = require("~/state");
const create_reducer_1 = require("~/utils/create-reducer");
const map_state_to_determiner_1 = require("~/utils/map-state-to-determiner");
const player_1 = require("~/getters/player");
const player_2 = require("~/setters/player");
const time_is_close_enough_1 = require("~/utils/time-is-close-enough");
exports.ACTION_ID = 'MOUSE_DOWN_ON_SEEK_BAR';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
const getPosition = (state, { position }) => position;
const getNewLastRequestedStage = (position, seekbarStatus, seekingStatus, prevLastRequestedStage) => {
    return seekbarStatus === state_1.SeekbarStatus.Seeking &&
        time_is_close_enough_1.timeIsCloseEnough(prevLastRequestedStage, position) &&
        seekingStatus === state_1.SeekingStatus.SeekbarSeeking
        ? prevLastRequestedStage
        : position;
};
const getNewSeekingStatus = (position, seekbarStatus, lastRequestedStage, prevSeekingStatus) => {
    return seekbarStatus === state_1.SeekbarStatus.Seeking &&
        time_is_close_enough_1.timeIsCloseEnough(lastRequestedStage, position) &&
        prevSeekingStatus === state_1.SeekingStatus.SeekbarSeeking
        ? prevSeekingStatus
        : state_1.SeekingStatus.SeekbarSeeking;
};
const getNewSeekbarStatus = (position, lastRequestedStage, seekingStatus, prevSeekbarStatus) => {
    return prevSeekbarStatus === state_1.SeekbarStatus.Seeking &&
        time_is_close_enough_1.timeIsCloseEnough(lastRequestedStage, position) &&
        seekingStatus === state_1.SeekingStatus.SeekbarSeeking
        ? prevSeekbarStatus
        : state_1.SeekbarStatus.Seeking;
};
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID, [
    [
        player_1.getLastRequestedStage,
        player_2.setLastRequestedStage,
        map_state_to_determiner_1.mapStateToDeterminer(getNewLastRequestedStage, [
            getPosition,
            player_1.getSeekbarStatus,
            player_1.getSeekingStatus,
            player_1.getLastRequestedStage
        ])
    ],
    [
        player_1.getSeekingStatus,
        player_2.setSeekingStatus,
        map_state_to_determiner_1.mapStateToDeterminer(getNewSeekingStatus, [
            getPosition,
            player_1.getSeekbarStatus,
            player_1.getLastRequestedStage,
            player_1.getSeekingStatus
        ])
    ],
    [
        player_1.getSeekbarStatus,
        player_2.setSeekbarStatus,
        map_state_to_determiner_1.mapStateToDeterminer(getNewSeekbarStatus, [
            getPosition,
            player_1.getLastRequestedStage,
            player_1.getSeekingStatus,
            player_1.getSeekbarStatus
        ])
    ]
]);
//# sourceMappingURL=ui-player-seekbar-mouse-down.js.map