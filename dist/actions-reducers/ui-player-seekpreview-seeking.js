"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const make_action_creator_1 = require("~/utils/make-action-creator");
const state_1 = require("~/state");
const create_reducer_1 = require("~/utils/create-reducer");
const player_1 = require("~/getters/player");
const player_2 = require("~/setters/player");
const map_state_to_determiner_1 = require("~/utils/map-state-to-determiner");
exports.ACTION_ID = 'UI_PLAYER_SEEKPREVIEW_SEEKING';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
const getToTime = (state, { time }) => time;
const getNewSeekPreviewStatus = () => state_1.VideoStatus.Seeking;
const getNewStageSeekPreviewSeekingTo = (duration, toTime) => toTime / duration;
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID, [
    [
        player_1.getSeekPreviewStatus,
        player_2.setSeekPreviewStatus,
        map_state_to_determiner_1.mapStateToDeterminer(getNewSeekPreviewStatus)
    ],
    [
        player_1.getStageSeekPreviewSeekingTo,
        player_2.setStageSeekPreviewSeekingTo,
        map_state_to_determiner_1.mapStateToDeterminer(getNewStageSeekPreviewSeekingTo, [
            player_1.getVideoDuration,
            getToTime
        ])
    ]
]);
//# sourceMappingURL=ui-player-seekpreview-seeking.js.map