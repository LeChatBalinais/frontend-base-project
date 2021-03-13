"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const tags_1 = require("~/getters/tags");
const ui_tag_list_row_save_button_clicked_1 = require("~/actions-reducers/ui-tag-list-row-save-button-clicked");
const saga_tag_saving_confirmed_1 = require("~/actions-reducers/saga-tag-saving-confirmed");
function* saveTag({ payload: { tagID } }) {
    const tag = yield effects_1.select(tags_1.getTag, tagID);
    const response = yield effects_1.call(fetch, `http://localhost:9000/addTag`, {
        method: 'post',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ tagID, tag })
    });
    if (!response.ok)
        return;
    const { id: tagGlobalID } = yield response.json();
    if (response.ok)
        yield effects_1.put(saga_tag_saving_confirmed_1.actionCreator({ tagID, tagGlobalID }));
}
function* watchIncrementAsync() {
    yield effects_1.takeEvery(ui_tag_list_row_save_button_clicked_1.ACTION_ID, saveTag);
}
exports.default = watchIncrementAsync;
//# sourceMappingURL=save-tag.js.map