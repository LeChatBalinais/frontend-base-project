"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const create_reducer_1 = require("~/utils/create-reducer");
const tags_1 = require("~/getters/tags");
const tag_editor_1 = require("~/getters/tag-editor");
const get_time_video_at_1 = require("~/selectors/get-time-video-at");
const tags_2 = require("~/setters/tags");
const make_action_creator_1 = require("~/utils/make-action-creator");
const map_state_to_determiner_1 = require("~/utils/map-state-to-determiner");
exports.ACTION_ID = 'MOUSE_MOVE_ON_AUGMENTATION';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
const getPosition = (state, payload) => payload;
const getNewTagsByID = (tagBeingEditedID, time, { x, y }, prevTagsByID) => {
    if (tagBeingEditedID === undefined)
        return prevTagsByID;
    const { [tagBeingEditedID]: tagBeingEdited } = prevTagsByID;
    const { path } = tagBeingEdited;
    let newPath = path;
    if (newPath.length === 0 || newPath[newPath.length - 1].time <= time) {
        newPath = [...newPath, { time, x, y }];
    }
    else if (newPath[0].time >= time) {
        newPath = [{ time, x, y }, ...newPath];
    }
    else {
        const prepEnd = newPath.findIndex((value) => {
            if (value.time >= time - 0.015) {
                return true;
            }
            return false;
        });
        let postBegin = prepEnd;
        while (postBegin < newPath.length &&
            newPath[postBegin].time > time + 0.015) {
            postBegin += 1;
        }
        newPath = [
            ...newPath.slice(0, prepEnd),
            { time, x, y },
            ...newPath.slice(postBegin, newPath.length - 1)
        ];
    }
    return Object.assign(Object.assign({}, prevTagsByID), { [tagBeingEditedID]: Object.assign(Object.assign({}, tagBeingEdited), { path: newPath }) });
};
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID, [
    [
        tags_1.getTags,
        tags_2.setTagsByID,
        map_state_to_determiner_1.mapStateToDeterminer(getNewTagsByID, [
            tag_editor_1.getTagBeingEditedID,
            get_time_video_at_1.getTimeVideoAt,
            getPosition,
            tags_1.getTags
        ])
    ]
]);
//# sourceMappingURL=ui-player-augmentation-mouse-move.js.map