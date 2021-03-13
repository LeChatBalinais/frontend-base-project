"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stage = void 0;
const react_redux_1 = require("react-redux");
const TagList_1 = require("~/components/TagList");
const get_tag_ids_sorted_by_time_1 = require("~/selectors/get-tag-ids-sorted-by-time");
const get_currentily_visible_tag_ids_1 = require("~/selectors/get-currentily-visible-tag-ids");
var Stage;
(function (Stage) {
    Stage[Stage["BeforeExposed"] = 0] = "BeforeExposed";
    Stage[Stage["Exposed"] = 1] = "Exposed";
    Stage[Stage["AfterExposed"] = 2] = "AfterExposed";
})(Stage = exports.Stage || (exports.Stage = {}));
const getDistributedAndSortedTagIDs = (state) => {
    const exposedTagIDs = get_currentily_visible_tag_ids_1.default(state);
    const otherTagIDs = get_tag_ids_sorted_by_time_1.getTagIDsSortedByTime(state);
    const beforeExposed = [];
    const exposed = [];
    const afterExposed = [];
    let stage = Stage.BeforeExposed;
    if (otherTagIDs.length !== 0) {
        if (exposedTagIDs.includes(otherTagIDs[0]))
            stage = Stage.Exposed;
        for (let i = 0; i < otherTagIDs.length; i += 1) {
            if (exposedTagIDs.includes(otherTagIDs[i])) {
                if (stage === Stage.BeforeExposed)
                    stage = Stage.Exposed;
            }
            else if (stage === Stage.Exposed) {
                stage = Stage.AfterExposed;
            }
            switch (+stage) {
                case Stage.BeforeExposed:
                    beforeExposed.push(otherTagIDs[i]);
                    break;
                case Stage.Exposed:
                    exposed.push(otherTagIDs[i]);
                    break;
                case Stage.AfterExposed:
                    afterExposed.push(otherTagIDs[i]);
                    break;
                default:
                    break;
            }
        }
    }
    return { beforeExposed, exposed, afterExposed };
};
const mapStateToProps = (state) => getDistributedAndSortedTagIDs(state);
exports.default = react_redux_1.connect(mapStateToProps)(TagList_1.default);
//# sourceMappingURL=tag-list.js.map