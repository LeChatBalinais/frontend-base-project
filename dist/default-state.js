"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const state_1 = require("~/state");
const DEFAULT_STATE = {
    page: 'Home',
    entities: {
        tags: {
            byID: {},
            allIDs: []
        },
        videos: {
            byID: {},
            allIDs: []
        },
        players: {
            byID: {},
            allIDs: []
        }
    },
    tagEditor: {
        userIsPlacingNewTag: false,
        tagsBeingEdited: [],
        currentTag: undefined,
        selectedTags: [],
        tagsWithVisibleTrace: []
    },
    player: {
        videoID: '',
        duration: 0,
        delayOn: false,
        seekVideo: false,
        playbackStatus: state_1.PlaybackStatus.Paused,
        seekingStatus: state_1.SeekingStatus.NoSeeking,
        lastRequestedStage: undefined,
        video: {
            status: state_1.VideoStatus.Paused
        },
        seekPreview: {
            status: state_1.VideoStatus.Paused
        },
        seekbar: {
            status: state_1.SeekbarStatus.Idle
        }
    }
};
exports.default = DEFAULT_STATE;
//# sourceMappingURL=default-state.js.map