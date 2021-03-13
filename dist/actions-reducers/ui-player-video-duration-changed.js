"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const make_action_creator_1 = require("~/utils/make-action-creator");
const player_1 = require("~/setters/player");
const create_reducer_1 = require("~/utils/create-reducer");
const player_2 = require("~/getters/player");
const map_state_to_determiner_1 = require("~/utils/map-state-to-determiner");
exports.ACTION_ID = 'UI_PLAYER_VIDEO_DURATION_CHANGED';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
const getDuration = (state, { duration }) => duration;
const getNewDuration = (duration) => duration;
const getNewStageVideoAt = () => 0;
const getNewStageSeekPreviewAt = getNewStageVideoAt;
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID, [
    [
        player_2.getVideoDuration,
        player_1.setVideoDuration,
        map_state_to_determiner_1.mapStateToDeterminer(getNewDuration, [getDuration])
    ],
    [player_2.getStageVideoAt, player_1.setStageVideoAt, map_state_to_determiner_1.mapStateToDeterminer(getNewStageVideoAt)],
    [
        player_2.getStageSeekPreviewAt,
        player_1.setStageSeekPreviewAt,
        map_state_to_determiner_1.mapStateToDeterminer(getNewStageSeekPreviewAt)
    ]
]);
//# sourceMappingURL=ui-player-video-duration-changed.js.map