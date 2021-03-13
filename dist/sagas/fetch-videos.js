"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const effects_1 = require("redux-saga/effects");
const route_home_1 = require("~/actions-reducers/route-home");
const saga_videos_fetching_fetched_1 = require("~/actions-reducers/saga-videos-fetching-fetched");
function* fetchVideos() {
    const response = yield effects_1.call(fetch, `http://localhost:9000/videos`);
    if (!response.ok)
        return;
    const { videos: { byID, allIDs } } = yield response.json();
    const videos = { byID: {}, allIDs: [] };
    allIDs.forEach((ID) => {
        const localID = uuid_1.v4();
        videos.allIDs.push(localID);
        videos.byID[localID] = Object.assign({ globalID: ID }, byID[ID]);
    });
    yield effects_1.put(saga_videos_fetching_fetched_1.actionCreator({ videos }));
}
function* watchFetchTags() {
    yield effects_1.takeEvery(route_home_1.ACTION_ID, fetchVideos);
}
exports.default = watchFetchTags;
//# sourceMappingURL=fetch-videos.js.map