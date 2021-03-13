"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const make_action_creator_1 = require("~/utils/make-action-creator");
const create_reducer_1 = require("~/utils/create-reducer");
const map_state_to_determiner_1 = require("~/utils/map-state-to-determiner");
const player_1 = require("~/setters/player");
const player_2 = require("~/getters/player");
exports.ACTION_ID = 'UI_PLAYER_AUGMENTATION_TAG_MOUSE_OUT';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
const getTagID = (state, { tagID }) => tagID;
const getNewHighlightedTagID = (tagID, prevHighlightedTagID) => tagID === prevHighlightedTagID ? undefined : prevHighlightedTagID;
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID, [
    [
        player_2.getHighlightedTagID,
        player_1.setHighlightedTagID,
        map_state_to_determiner_1.mapStateToDeterminer(getNewHighlightedTagID, [
            getTagID,
            player_2.getHighlightedTagID
        ])
    ]
]);
//# sourceMappingURL=ui-tag-mouse-out.js.map