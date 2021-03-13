"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const make_action_creator_1 = require("~/utils/make-action-creator");
const create_reducer_1 = require("~/utils/create-reducer");
const player_1 = require("~/setters/player");
const player_2 = require("~/getters/player");
const map_state_to_determiner_1 = require("~/utils/map-state-to-determiner");
exports.ACTION_ID = 'UI_PLAYER_VIDEO_PLAYED_TO_TIME';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
const getTime = (state, { time }) => time;
const getNewStageVideoAt = (duration, time) => time / duration;
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID, [
    [
        player_2.getStageVideoAt,
        player_1.setStageVideoAt,
        map_state_to_determiner_1.mapStateToDeterminer(getNewStageVideoAt, [player_2.getVideoDuration, getTime])
    ]
]);
//# sourceMappingURL=ui-player-video-played-to-time.js.map