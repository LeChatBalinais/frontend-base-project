"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducersRegister = void 0;
const durationChanged = require("./ui-player-video-duration-changed");
const paused = require("./ui-player-video-paused");
const playedToTime = require("./ui-player-video-played-to-time");
const playing = require("./ui-player-video-playing");
const seeked = require("./ui-player-video-seeked");
const seeking = require("./ui-player-video-seeking");
exports.reducersRegister = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, durationChanged.reducer), paused.reducer), playedToTime.reducer), playing.reducer), seeked.reducer), seeking.reducer);
//# sourceMappingURL=ui-player-video.js.map