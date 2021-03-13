"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const state_1 = require("~/state");
const create_reducer_1 = require("~/utils/create-reducer");
const player_1 = require("~/getters/player");
const player_2 = require("~/setters/player");
const make_action_creator_1 = require("~/utils/make-action-creator");
const map_state_to_determiner_1 = require("~/utils/map-state-to-determiner");
exports.ACTION_ID = 'MOUSE_UP_ON_TAG';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
const getNewPlaybackStatus = () => state_1.PlaybackStatus.Paused;
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID, [
    [
        player_1.getPlaybackStatus,
        player_2.setPlaybackStatus,
        map_state_to_determiner_1.mapStateToDeterminer(getNewPlaybackStatus)
    ]
]);
//# sourceMappingURL=ui-player-augmentation-tag-mouse-up.js.map