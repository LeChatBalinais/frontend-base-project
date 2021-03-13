"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimePlayerAt = void 0;
const get_stage_player_at_1 = require("./get-stage-player-at");
const player_1 = require("~/getters/player");
const getTimePlayerAt = (state) => get_stage_player_at_1.getStagePlayerAt(state) * player_1.getVideoDuration(state);
exports.getTimePlayerAt = getTimePlayerAt;
//# sourceMappingURL=get-time-player-at.js.map