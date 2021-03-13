"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setVideoDuration = exports.setHighlightedTagID = exports.setDelayOn = exports.setSeekVideo = exports.setLastRequestedStage = exports.setPlaybackStatus = exports.setSeekbarStatus = exports.setSeekingStatus = exports.setStageSeekPreviewAt = exports.setStageSeekPreviewSeekingTo = exports.setSeekPreviewStatus = exports.setStageVideoAt = exports.setStageVideoSeekingTo = exports.setVideoStatus = void 0;
const setVideoStatus = (state, status) => (Object.assign(Object.assign({}, state), { player: Object.assign(Object.assign({}, state.player), { video: Object.assign(Object.assign({}, state.player.video), { status }) }) }));
exports.setVideoStatus = setVideoStatus;
const setStageVideoSeekingTo = (state, stageSeekingTo) => (Object.assign(Object.assign({}, state), { player: Object.assign(Object.assign({}, state.player), { video: Object.assign(Object.assign({}, state.player.video), { stageSeekingTo }) }) }));
exports.setStageVideoSeekingTo = setStageVideoSeekingTo;
const setStageVideoAt = (state, stageAt) => (Object.assign(Object.assign({}, state), { player: Object.assign(Object.assign({}, state.player), { video: Object.assign(Object.assign({}, state.player.video), { stageAt }) }) }));
exports.setStageVideoAt = setStageVideoAt;
const setSeekPreviewStatus = (state, status) => (Object.assign(Object.assign({}, state), { player: Object.assign(Object.assign({}, state.player), { seekPreview: Object.assign(Object.assign({}, state.player.seekPreview), { status }) }) }));
exports.setSeekPreviewStatus = setSeekPreviewStatus;
const setStageSeekPreviewSeekingTo = (state, stageSeekingTo) => (Object.assign(Object.assign({}, state), { player: Object.assign(Object.assign({}, state.player), { seekPreview: Object.assign(Object.assign({}, state.player.seekPreview), { stageSeekingTo }) }) }));
exports.setStageSeekPreviewSeekingTo = setStageSeekPreviewSeekingTo;
const setStageSeekPreviewAt = (state, stageAt) => (Object.assign(Object.assign({}, state), { player: Object.assign(Object.assign({}, state.player), { seekPreview: Object.assign(Object.assign({}, state.player.seekPreview), { stageAt }) }) }));
exports.setStageSeekPreviewAt = setStageSeekPreviewAt;
const setSeekingStatus = (state, seekingStatus) => (Object.assign(Object.assign({}, state), { player: Object.assign(Object.assign({}, state.player), { seekingStatus }) }));
exports.setSeekingStatus = setSeekingStatus;
const setSeekbarStatus = (state, status) => (Object.assign(Object.assign({}, state), { player: Object.assign(Object.assign({}, state.player), { seekbar: Object.assign(Object.assign({}, state.player.seekbar), { status }) }) }));
exports.setSeekbarStatus = setSeekbarStatus;
const setPlaybackStatus = (state, playbackStatus) => (Object.assign(Object.assign({}, state), { player: Object.assign(Object.assign({}, state.player), { playbackStatus }) }));
exports.setPlaybackStatus = setPlaybackStatus;
const setLastRequestedStage = (state, lastRequestedStage) => (Object.assign(Object.assign({}, state), { player: Object.assign(Object.assign({}, state.player), { lastRequestedStage }) }));
exports.setLastRequestedStage = setLastRequestedStage;
const setSeekVideo = (state, seekVideo) => (Object.assign(Object.assign({}, state), { player: Object.assign(Object.assign({}, state.player), { seekVideo }) }));
exports.setSeekVideo = setSeekVideo;
const setDelayOn = (state, delayOn) => (Object.assign(Object.assign({}, state), { player: Object.assign(Object.assign({}, state.player), { delayOn }) }));
exports.setDelayOn = setDelayOn;
const setHighlightedTagID = (state, highlightedTagID) => (Object.assign(Object.assign({}, state), { tagEditor: Object.assign(Object.assign({}, state.tagEditor), { highlightedTagID }) }));
exports.setHighlightedTagID = setHighlightedTagID;
const setVideoDuration = (state, duration) => (Object.assign(Object.assign({}, state), { player: Object.assign(Object.assign({}, state.player), { duration }) }));
exports.setVideoDuration = setVideoDuration;
//# sourceMappingURL=player.js.map