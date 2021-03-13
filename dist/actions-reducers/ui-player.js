"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducersRegister = void 0;
const video = require("./ui-player-video");
const seekpreview = require("./ui-player-seekpreview");
const seekbar = require("./ui-player-seekbar");
const augmentation = require("./ui-player-augmentation");
const controls = require("./ui-player-controls");
const createdForVideoOfID = require("./ui-player-created-for-video-of-id");
exports.reducersRegister = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, video.reducersRegister), seekpreview.reducersRegister), seekbar.reducersRegister), augmentation.reducersRegister), controls.reducersRegister), createdForVideoOfID.reducer);
//# sourceMappingURL=ui-player.js.map