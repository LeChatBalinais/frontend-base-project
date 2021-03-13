"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const tags_1 = require("~/getters/tags");
const ui_tag_list_row_delete_button_clicked_1 = require("~/actions-reducers/ui-tag-list-row-delete-button-clicked");
const saga_tag_deletion_confirmed_1 = require("~/actions-reducers/saga-tag-deletion-confirmed");
function* deleteTagAsync({ payload: { tagID: ID } }) {
    const { globalID } = yield effects_1.select(tags_1.getTag, ID);
    const response = yield effects_1.call(fetch, `http://localhost:9000/deleteTag`, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ID: globalID })
    });
    if (response.ok)
        yield effects_1.put(saga_tag_deletion_confirmed_1.actionCreator({ tagID: ID }));
}
function* watchIncrementAsync() {
    yield effects_1.takeEvery(ui_tag_list_row_delete_button_clicked_1.ACTION_ID, deleteTagAsync);
}
exports.default = watchIncrementAsync;
//# sourceMappingURL=delete-tag.js.map