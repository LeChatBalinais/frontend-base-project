"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const make_action_creator_1 = require("~/utils/make-action-creator");
const create_reducer_1 = require("~/utils/create-reducer");
const player_1 = require("~/getters/player");
const player_2 = require("~/setters/player");
const time_is_close_enough_1 = require("~/utils/time-is-close-enough");
const map_state_to_determiner_1 = require("~/utils/map-state-to-determiner");
exports.ACTION_ID = 'MOUSE_MOVE_DURING_SEEKBAR_SEEKING';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
const getPosition = (state, { position }) => position;
const getNewLastRequestedStage = (position, stageVideoAt) => (time_is_close_enough_1.timeIsCloseEnough(stageVideoAt, position) ? undefined : position);
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID, [
    [
        player_1.getLastRequestedStage,
        player_2.setLastRequestedStage,
        map_state_to_determiner_1.mapStateToDeterminer(getNewLastRequestedStage, [
            getPosition,
            player_1.getStageVideoAt
        ])
    ]
]);
//# sourceMappingURL=ui-player-seekbar-mouse-move-during-seeking.js.map