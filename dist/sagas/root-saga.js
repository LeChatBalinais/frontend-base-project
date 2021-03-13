"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const delete_tag_1 = require("./delete-tag");
const save_tag_1 = require("./save-tag");
const fetch_tags_1 = require("./fetch-tags");
const fetch_tags_for_video_of_id_1 = require("./fetch-tags-for-video-of-id");
const fetch_videos_1 = require("./fetch-videos");
const seekpreview_seeked_delay_1 = require("./seekpreview-seeked-delay");
function* rootSaga() {
    yield effects_1.all([
        delete_tag_1.default(),
        save_tag_1.default(),
        fetch_tags_1.default(),
        seekpreview_seeked_delay_1.watchSeekPreviewSeeked(),
        seekpreview_seeked_delay_1.watchUIListRowClicked(),
        seekpreview_seeked_delay_1.watchUIPlayerSeekbarMouseDown(),
        fetch_videos_1.default(),
        fetch_tags_for_video_of_id_1.default()
    ]);
}
exports.default = rootSaga;
//# sourceMappingURL=root-saga.js.map