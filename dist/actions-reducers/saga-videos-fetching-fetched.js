"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const create_reducer_1 = require("~/utils/create-reducer");
const entities_1 = require("~/setters/entities");
const entities_2 = require("~/getters/entities");
const make_action_creator_1 = require("~/utils/make-action-creator");
const map_state_to_determiner_1 = require("~/utils/map-state-to-determiner");
exports.ACTION_ID = 'SAGA_VIDEOS_FETCHED';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
const getVideos = (state, { videos }) => videos;
const getNewVideos = (videos) => videos;
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID, [
    [entities_2.getVideosTable, entities_1.setVideos, map_state_to_determiner_1.mapStateToDeterminer(getNewVideos, [getVideos])]
]);
//# sourceMappingURL=saga-videos-fetching-fetched.js.map