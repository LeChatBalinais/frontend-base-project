"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const make_action_creator_1 = require("~/utils/make-action-creator");
const state_1 = require("~/state");
const create_reducer_1 = require("~/utils/create-reducer");
const player_1 = require("~/getters/player");
const player_2 = require("~/setters/player");
const map_state_to_determiner_1 = require("~/utils/map-state-to-determiner");
exports.ACTION_ID = 'UI_PLAYER_VIDEO_SEEKING';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
const getToTime = (state, { time }) => time;
const getNewVideoStatus = () => state_1.VideoStatus.Seeking;
const getNewStageVideoSeekingTo = (duration, toTime) => toTime / duration;
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID, [
    [player_1.getVideoStatus, player_2.setVideoStatus, map_state_to_determiner_1.mapStateToDeterminer(getNewVideoStatus)],
    [
        player_1.getStageVideoSeekingTo,
        player_2.setStageVideoSeekingTo,
        map_state_to_determiner_1.mapStateToDeterminer(getNewStageVideoSeekingTo, [
            player_1.getVideoDuration,
            getToTime
        ])
    ]
]);
//# sourceMappingURL=ui-player-video-seeking.js.map