"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const make_action_creator_1 = require("~/utils/make-action-creator");
const state_1 = require("~/state");
const create_reducer_1 = require("~/utils/create-reducer");
const player_1 = require("~/getters/player");
const player_2 = require("~/setters/player");
const map_state_to_determiner_1 = require("~/utils/map-state-to-determiner");
exports.ACTION_ID = 'UI_PLAYER_SEEKPREVIEW_SEEKED';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
const getNewStageSeekPreviewAt = (stageVideoSeekingTo) => stageVideoSeekingTo;
const getNewSeekPreviewStatus = () => state_1.VideoStatus.Paused;
const getNewStageSeekPreviewSeekingTo = () => undefined;
const getNewDelayOn = () => true;
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID, [
    [player_1.isDelayOn, player_2.setDelayOn, map_state_to_determiner_1.mapStateToDeterminer(getNewDelayOn)],
    [
        player_1.getStageSeekPreviewSeekingTo,
        player_2.setStageSeekPreviewSeekingTo,
        map_state_to_determiner_1.mapStateToDeterminer(getNewStageSeekPreviewSeekingTo)
    ],
    [
        player_1.getSeekPreviewStatus,
        player_2.setSeekPreviewStatus,
        map_state_to_determiner_1.mapStateToDeterminer(getNewSeekPreviewStatus)
    ],
    [
        player_1.getStageSeekPreviewAt,
        player_2.setStageSeekPreviewAt,
        map_state_to_determiner_1.mapStateToDeterminer(getNewStageSeekPreviewAt, [
            player_1.getStageSeekPreviewSeekingTo
        ])
    ]
]);
//# sourceMappingURL=ui-player-seekpreview-seeked.js.map