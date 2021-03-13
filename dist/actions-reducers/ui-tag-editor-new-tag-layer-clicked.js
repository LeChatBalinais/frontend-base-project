"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const make_action_creator_1 = require("~/utils/make-action-creator");
const state_1 = require("~/state");
const create_reducer_1 = require("~/utils/create-reducer");
const get_default_reduced_val_1 = require("~/utils/get-default-reduced-val");
const tag_editor_1 = require("~/getters/tag-editor");
const player_1 = require("~/getters/player");
const player_2 = require("~/setters/player");
const tag_editor_2 = require("~/setters/tag-editor");
const tags_1 = require("~/setters/tags");
const map_state_to_determiner_1 = require("~/utils/map-state-to-determiner");
exports.ACTION_ID = 'NEW_TAG_LAYER_CLICKED';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
const getPosition = (state, { x, y }) => ({ x, y });
const getCurrentVideoID = ({ location: { payload: { videoID } } }) => videoID;
const getNewPlaybackStatus = () => state_1.PlaybackStatus.Paused;
const getNewPlacingNewTagMode = () => false;
const getNewTag = (videoID, stage, duration, { x, y }) => {
    return { videoID, time: stage * duration, x, y };
};
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID, [
    [
        player_1.getPlaybackStatus,
        player_2.setPlaybackStatus,
        map_state_to_determiner_1.mapStateToDeterminer(getNewPlaybackStatus)
    ],
    [
        tag_editor_1.isPlaceNewTagModeOn,
        tag_editor_2.setPlacingNewTagMode,
        map_state_to_determiner_1.mapStateToDeterminer(getNewPlacingNewTagMode)
    ],
    [
        get_default_reduced_val_1.getDefaultReducedVal,
        tags_1.addNewTag,
        map_state_to_determiner_1.mapStateToDeterminer(getNewTag, [
            getCurrentVideoID,
            player_1.getStageVideoAt,
            player_1.getVideoDuration,
            getPosition
        ])
    ]
]);
//# sourceMappingURL=ui-tag-editor-new-tag-layer-clicked.js.map