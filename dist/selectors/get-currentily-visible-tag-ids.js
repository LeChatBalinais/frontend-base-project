"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reselect_1 = require("reselect");
const tag_editor_1 = require("~/getters/tag-editor");
const tags_1 = require("~/getters/tags");
const get_time_player_at_1 = require("./get-time-player-at");
const location_1 = require("~/getters/location");
const getCurrentlyVisibleTagIDs = reselect_1.createSelector([tags_1.getTagIDs, tags_1.getTags, get_time_player_at_1.getTimePlayerAt, tag_editor_1.getTagBeingEditedIDs, location_1.getIDofVideoInReferenceEditor], (tagIDs, byID, currentTime, tagIDsBeingEdited, videoBeingReferencedID) => {
    return tagIDs.filter((ID) => {
        const { [ID]: tag } = byID;
        if (tag.videoID !== videoBeingReferencedID)
            return false;
        if (tag.path.length === 0)
            return false;
        if (tagIDsBeingEdited.includes(ID))
            return true;
        if (currentTime >= byID[ID].path[0].time &&
            currentTime <= byID[ID].path[byID[ID].path.length - 1].time)
            return true;
        return false;
    });
});
exports.default = getCurrentlyVisibleTagIDs;
//# sourceMappingURL=get-currentily-visible-tag-ids.js.map