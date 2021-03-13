"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStagePlayerAt = void 0;
const player_1 = require("~/getters/player");
const getStagePlayerAt = (state) => {
    const stageVideoAt = player_1.getStageVideoAt(state);
    const stageSeekPreviewAt = player_1.getStageSeekPreviewAt(state);
    const lastRequestedStage = player_1.getLastRequestedStage(state);
    if (lastRequestedStage !== undefined && stageVideoAt !== lastRequestedStage) {
        return stageSeekPreviewAt;
    }
    return stageVideoAt;
};
exports.getStagePlayerAt = getStagePlayerAt;
//# sourceMappingURL=get-stage-player-at.js.map