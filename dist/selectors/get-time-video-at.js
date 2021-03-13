"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeVideoAt = void 0;
const player_1 = require("~/getters/player");
const getTimeVideoAt = (state) => player_1.getStageVideoAt(state) * player_1.getVideoDuration(state);
exports.getTimeVideoAt = getTimeVideoAt;
//# sourceMappingURL=get-time-video-at.js.map