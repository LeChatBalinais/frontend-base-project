"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const effects_1 = require("redux-saga/effects");
const ui_player_created_for_video_of_id_1 = require("~/actions-reducers/ui-player-created-for-video-of-id");
const saga_tags_fetching_fetched_1 = require("~/actions-reducers/saga-tags-fetching-fetched");
function* fetchTagsForVideoOfID({ payload: { ID } }) {
    const response = yield effects_1.call(fetch, `http://localhost:9000/anchors/${ID}`);
    if (!response.ok)
        return;
    const { tags: { byID, allIDs } } = yield response.json();
    const tags = { byID: {}, allIDs: [] };
    allIDs.forEach((tagID) => {
        const localID = uuid_1.v4();
        tags.allIDs.push(localID);
        tags.byID[localID] = byID[tagID];
    });
    yield effects_1.put(saga_tags_fetching_fetched_1.actionCreator({ tags }));
}
function* watchFetchTags() {
    yield effects_1.takeEvery(ui_player_created_for_video_of_id_1.ACTION_ID, fetchTagsForVideoOfID);
}
exports.default = watchFetchTags;
//# sourceMappingURL=fetch-tags-for-video-of-id.js.map