"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeekbarStatus = exports.SeekingStatus = exports.PlaybackStatus = exports.VideoStatus = void 0;
var VideoStatus;
(function (VideoStatus) {
    VideoStatus[VideoStatus["Paused"] = 0] = "Paused";
    VideoStatus[VideoStatus["Playing"] = 1] = "Playing";
    VideoStatus[VideoStatus["Seeking"] = 2] = "Seeking";
})(VideoStatus = exports.VideoStatus || (exports.VideoStatus = {}));
var PlaybackStatus;
(function (PlaybackStatus) {
    PlaybackStatus[PlaybackStatus["Paused"] = 0] = "Paused";
    PlaybackStatus[PlaybackStatus["Playing"] = 1] = "Playing";
})(PlaybackStatus = exports.PlaybackStatus || (exports.PlaybackStatus = {}));
var SeekingStatus;
(function (SeekingStatus) {
    SeekingStatus[SeekingStatus["NoSeeking"] = 0] = "NoSeeking";
    SeekingStatus[SeekingStatus["SeekbarSeeking"] = 1] = "SeekbarSeeking";
    SeekingStatus[SeekingStatus["Seeking"] = 2] = "Seeking";
})(SeekingStatus = exports.SeekingStatus || (exports.SeekingStatus = {}));
var SeekbarStatus;
(function (SeekbarStatus) {
    SeekbarStatus[SeekbarStatus["Idle"] = 0] = "Idle";
    SeekbarStatus[SeekbarStatus["Seeking"] = 1] = "Seeking";
})(SeekbarStatus = exports.SeekbarStatus || (exports.SeekbarStatus = {}));
//# sourceMappingURL=players.js.map