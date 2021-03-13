"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastRequestedTime = void 0;
const player_1 = require("~/getters/player");
const getLastRequestedTime = (state) => player_1.getLastRequestedStage(state) * player_1.getVideoDuration(state);
exports.getLastRequestedTime = getLastRequestedTime;
//# sourceMappingURL=get-last-requested-time.js.map