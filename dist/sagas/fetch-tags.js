"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const effects_1 = require("redux-saga/effects");
const route_reference_editor_1 = require("~/actions-reducers/route-reference-editor");
const saga_tags_fetching_fetched_1 = require("~/actions-reducers/saga-tags-fetching-fetched");
function* fetchTags() {
    const response = yield effects_1.call(fetch, `http://localhost:9000/markers`);
    if (!response.ok)
        return;
    const { tags: { byID, allIDs } } = yield response.json();
    const tags = { byID: {}, allIDs: [] };
    allIDs.forEach((ID) => {
        const localID = uuid_1.v4();
        tags.allIDs.push(localID);
        tags.byID[localID] = byID[ID];
    });
    yield effects_1.put(saga_tags_fetching_fetched_1.actionCreator({ tags }));
}
function* watchFetchTags() {
    yield effects_1.takeEvery(route_reference_editor_1.ACTION_ID, fetchTags);
}
exports.default = watchFetchTags;
//# sourceMappingURL=fetch-tags.js.map