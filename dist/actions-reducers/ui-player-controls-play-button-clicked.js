"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const make_action_creator_1 = require("~/utils/make-action-creator");
const state_1 = require("~/state");
const create_reducer_1 = require("~/utils/create-reducer");
const player_1 = require("~/getters/player");
const player_2 = require("~/setters/player");
const map_state_to_determiner_1 = require("~/utils/map-state-to-determiner");
exports.ACTION_ID = 'PLAY_BUTTON_CLICKED';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
const getNewPlaybackStatus = (prevPlaybackStatus) => prevPlaybackStatus === state_1.PlaybackStatus.Playing
    ? state_1.PlaybackStatus.Paused
    : state_1.PlaybackStatus.Playing;
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID, [
    [
        player_1.getPlaybackStatus,
        player_2.setPlaybackStatus,
        map_state_to_determiner_1.mapStateToDeterminer(getNewPlaybackStatus, [player_1.getPlaybackStatus])
    ]
]);
//# sourceMappingURL=ui-player-controls-play-button-clicked.js.map