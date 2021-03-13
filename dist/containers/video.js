"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const Video_1 = require("~/components/Video");
const state_1 = require("~/state");
const ui_player_video_played_to_time_1 = require("~/actions-reducers/ui-player-video-played-to-time");
const ui_player_video_seeked_1 = require("~/actions-reducers/ui-player-video-seeked");
const ui_player_video_seeking_1 = require("~/actions-reducers/ui-player-video-seeking");
const ui_player_video_duration_changed_1 = require("~/actions-reducers/ui-player-video-duration-changed");
const ui_player_video_playing_1 = require("~/actions-reducers/ui-player-video-playing");
const ui_player_video_paused_1 = require("~/actions-reducers/ui-player-video-paused");
const player_1 = require("~/getters/player");
const location_1 = require("~/getters/location");
const get_last_requested_time_1 = require("~/selectors/get-last-requested-time");
const shouldVideoSeek = (state) => {
    return player_1.getVideoStatus(state) !== state_1.VideoStatus.Seeking && player_1.getSeekVideo(state);
};
const shouldVideoPlayback = (state) => player_1.getPlaybackStatus(state) === state_1.PlaybackStatus.Playing &&
    player_1.getSeekingStatus(state) === state_1.SeekingStatus.NoSeeking;
const mapStateToProps = (state) => {
    return {
        playback: shouldVideoPlayback(state),
        url: location_1.getVideoURL(state),
        seek: shouldVideoSeek(state),
        timeSeekTo: get_last_requested_time_1.getLastRequestedTime(state)
    };
};
const mapDispatchToProps = (dispatch) => ({
    onTimeUpdate: (time) => {
        dispatch(ui_player_video_played_to_time_1.actionCreator({ time }));
    },
    onDurationChange: (duration) => {
        dispatch(ui_player_video_duration_changed_1.actionCreator({ duration }));
    },
    onSeeking: (time) => {
        dispatch(ui_player_video_seeking_1.actionCreator({ time }));
    },
    onSeeked: () => {
        dispatch(ui_player_video_seeked_1.actionCreator());
    },
    onPlaying: () => {
        dispatch(ui_player_video_playing_1.actionCreator());
    },
    onPause: () => {
        dispatch(ui_player_video_paused_1.actionCreator());
    }
});
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Video_1.default);
//# sourceMappingURL=video.js.map