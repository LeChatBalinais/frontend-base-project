"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.watchUIPlayerSeekbarMouseDown = exports.watchUIListRowClicked = exports.watchSeekPreviewSeeked = void 0;
const effects_1 = require("redux-saga/effects");
const ui_player_seekpreview_seeked_1 = require("~/actions-reducers/ui-player-seekpreview-seeked");
const ui_tag_list_row_clicked_1 = require("~/actions-reducers/ui-tag-list-row-clicked");
const ui_player_seekbar_mouse_down_1 = require("~/actions-reducers/ui-player-seekbar-mouse-down");
const saga_video_seek_delay_ended_1 = require("~/actions-reducers/saga-video-seek-delay-ended");
const player_1 = require("~/getters/player");
const state_1 = require("~/state");
function* seekPreviewSeekedCase() {
    const requestedStage = yield effects_1.select(player_1.getLastRequestedStage);
    yield effects_1.delay(50);
    yield effects_1.put(saga_video_seek_delay_ended_1.actionCreator({ requestedStage }));
}
function* seekPreviewAlreadyOnRequestedStage() {
    const requestedStage = yield effects_1.select(player_1.getLastRequestedStage);
    const stageSeekPreviewAt = yield effects_1.select(player_1.getStageSeekPreviewAt);
    const seekPreviewStatus = yield effects_1.select(player_1.getSeekPreviewStatus);
    const delayIsOn = yield effects_1.select(player_1.isDelayOn);
    if (requestedStage !== stageSeekPreviewAt ||
        seekPreviewStatus === state_1.VideoStatus.Seeking ||
        delayIsOn)
        return;
    yield effects_1.delay(50);
    yield effects_1.put(saga_video_seek_delay_ended_1.actionCreator({ requestedStage }));
}
function* watchSeekPreviewSeeked() {
    yield effects_1.takeEvery(ui_player_seekpreview_seeked_1.ACTION_ID, seekPreviewSeekedCase);
}
exports.watchSeekPreviewSeeked = watchSeekPreviewSeeked;
function* watchUIListRowClicked() {
    yield effects_1.takeEvery(ui_tag_list_row_clicked_1.ACTION_ID, seekPreviewAlreadyOnRequestedStage);
}
exports.watchUIListRowClicked = watchUIListRowClicked;
function* watchUIPlayerSeekbarMouseDown() {
    yield effects_1.takeEvery(ui_player_seekbar_mouse_down_1.ACTION_ID, seekPreviewAlreadyOnRequestedStage);
}
exports.watchUIPlayerSeekbarMouseDown = watchUIPlayerSeekbarMouseDown;
//# sourceMappingURL=seekpreview-seeked-delay.js.map