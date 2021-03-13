"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const SeekPreview_1 = require("~/components/SeekPreview");
const state_1 = require("~/state");
const ui_player_seekpreview_seeked_1 = require("~/actions-reducers/ui-player-seekpreview-seeked");
const ui_player_seekpreview_seeking_1 = require("~/actions-reducers/ui-player-seekpreview-seeking");
const player_1 = require("~/getters/player");
const location_1 = require("~/getters/location");
const get_last_requested_time_1 = require("~/selectors/get-last-requested-time");
const time_is_close_enough_1 = require("~/utils/time-is-close-enough");
const shouldSeekpreviewSeek = (state) => player_1.getSeekPreviewStatus(state) !== state_1.VideoStatus.Seeking &&
    player_1.getSeekingStatus(state) !== state_1.SeekingStatus.NoSeeking;
const seekPreviewIsVisible = (state) => {
    return (player_1.getSeekingStatus(state) !== state_1.SeekingStatus.NoSeeking &&
        player_1.getLastRequestedStage(state) !== undefined &&
        !time_is_close_enough_1.timeIsCloseEnough(player_1.getStageVideoAt(state), player_1.getLastRequestedStage(state)));
};
const mapStateToProps = (state) => {
    return {
        url: location_1.getSeekPreviewURL(state),
        seek: shouldSeekpreviewSeek(state),
        timeSeekTo: get_last_requested_time_1.getLastRequestedTime(state),
        hidden: !seekPreviewIsVisible(state)
    };
};
const mapDispatchToProps = (dispatch) => ({
    onSeeking: (time) => {
        dispatch(ui_player_seekpreview_seeking_1.actionCreator({ time }));
    },
    onSeeked: () => {
        dispatch(ui_player_seekpreview_seeked_1.actionCreator());
    }
});
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(SeekPreview_1.default);
//# sourceMappingURL=seek-preview.js.map