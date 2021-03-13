"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTagIDsSortedByTime = void 0;
const get_point_tag_appears_at_1 = require("~/selectors/get-point-tag-appears-at");
const tags_1 = require("~/getters/tags");
const get_point_tag_disappears_at_1 = require("./get-point-tag-disappears-at");
const location_1 = require("~/getters/location");
function compareTagsOnTimeLine(state, firstID, secondID) {
    const { time: timeFirstTagAppearsAt } = get_point_tag_appears_at_1.getPointTagAppearsAt(state, firstID);
    const { time: timeSecondTagAppearsAt } = get_point_tag_appears_at_1.getPointTagAppearsAt(state, secondID);
    if (timeFirstTagAppearsAt !== timeSecondTagAppearsAt)
        return timeFirstTagAppearsAt - timeSecondTagAppearsAt;
    const { time: timeFirstTagDisappearsAt } = get_point_tag_disappears_at_1.getPointTagDisappearsAt(state, firstID);
    const { time: timeSecondTagDisappearsAt } = get_point_tag_disappears_at_1.getPointTagDisappearsAt(state, secondID);
    return timeFirstTagDisappearsAt - timeSecondTagDisappearsAt;
}
const getTagIDsSortedByTime = (state) => tags_1.getTagIDs(state).filter((tagID) => {
    const { entities: { tags: { byID: { [tagID]: { videoID } } } } } = state;
    return videoID === location_1.getIDofVideoInReferenceEditor(state);
}).sort((firstID, secondID) => compareTagsOnTimeLine(state, firstID, secondID));
exports.getTagIDsSortedByTime = getTagIDsSortedByTime;
//# sourceMappingURL=get-tag-ids-sorted-by-time.js.map