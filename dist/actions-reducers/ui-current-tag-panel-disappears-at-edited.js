"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducer = exports.actionCreator = exports.ACTION_ID = void 0;
const make_action_creator_1 = require("~/utils/make-action-creator");
const create_reducer_1 = require("~/utils/create-reducer");
const tags_1 = require("~/getters/tags");
const tags_2 = require("~/setters/tags");
const time_is_close_enough_1 = require("~/utils/time-is-close-enough");
const map_state_to_determiner_1 = require("~/utils/map-state-to-determiner");
exports.ACTION_ID = 'TAG_DISAPPEARS_AT_EDIT_BOX_EDITED';
exports.actionCreator = make_action_creator_1.makeActionCreator(exports.ACTION_ID);
const getTagID = (state, { tagID }) => tagID;
const getTime = (state, { time }) => time;
const getNewTagsByID = (tagID, time, prevTagsByID) => {
    const { [tagID]: tag } = prevTagsByID;
    const { path } = tag;
    const { length } = path;
    if (length === 0 ||
        path[0].time > time ||
        time_is_close_enough_1.timeIsCloseEnough(path[length - 1].time, time))
        return prevTagsByID;
    let newPath = path;
    if (time > path[length - 1].time) {
        newPath = [...path, { time, x: path[length - 1].x, y: path[length - 1].y }];
    }
    else {
        const index = path.findIndex((value) => {
            if (value.time >= time) {
                return true;
            }
            return false;
        });
        if (time_is_close_enough_1.timeIsCloseEnough(path[index].time, time))
            newPath = path.slice(0, index + 1);
        else
            newPath = [
                ...path.slice(0, index + 1),
                {
                    time,
                    x: (path[index].x + path[index].x) / 2,
                    y: (path[index].y + path[index].y) / 2
                }
            ];
    }
    return Object.assign(Object.assign({}, prevTagsByID), { [tagID]: Object.assign(Object.assign({}, tag), { path: newPath }) });
};
exports.reducer = create_reducer_1.createReducer(exports.ACTION_ID, [
    [
        tags_1.getTags,
        tags_2.setTagsByID,
        map_state_to_determiner_1.mapStateToDeterminer(getNewTagsByID, [getTagID, getTime, tags_1.getTags])
    ]
]);
//# sourceMappingURL=ui-current-tag-panel-disappears-at-edited.js.map