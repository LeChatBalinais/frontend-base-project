"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const Tag_1 = require("~/components/Tag");
const ui_player_augmentation_tag_mouse_down_1 = require("~/actions-reducers/ui-player-augmentation-tag-mouse-down");
const ui_player_augmentation_tag_mouse_up_1 = require("~/actions-reducers/ui-player-augmentation-tag-mouse-up");
const ui_tag_mouse_enter_1 = require("~/actions-reducers/ui-tag-mouse-enter");
const ui_tag_mouse_out_1 = require("~/actions-reducers/ui-tag-mouse-out");
const player_1 = require("~/getters/player");
const is_tag_dragged_1 = require("~/selectors/is-tag-dragged");
const is_tag_current_1 = require("~/selectors/is-tag-current");
const get_point_tag_appears_at_1 = require("~/selectors/get-point-tag-appears-at");
const get_tag_position_by_time_1 = require("~/selectors/get-tag-position-by-time");
const tags_1 = require("~/getters/tags");
const get_time_player_at_1 = require("~/selectors/get-time-player-at");
const isAnimated = (state, ID) => {
    return player_1.isPlaying(state) && !is_tag_dragged_1.isTagDragged(state, ID);
};
const getTimeTagAt = (state, ID) => {
    const { time } = get_point_tag_appears_at_1.getPointTagAppearsAt(state, ID);
    const a = get_time_player_at_1.getTimePlayerAt(state);
    return a - time;
};
const getPosition = (state, ID) => {
    const { x, y } = isAnimated(state, ID)
        ? get_point_tag_appears_at_1.getPointTagAppearsAt(state, ID)
        : get_tag_position_by_time_1.getTagPositionByTime(state, ID, get_time_player_at_1.getTimePlayerAt(state));
    return { x, y };
};
const getClassName = (state, ID) => {
    let result = 'Tag marker ';
    if (is_tag_current_1.isTagCurrent(state, ID))
        result += 'selected ';
    if (player_1.isTagHighlighted(state, ID))
        result += 'highlighted';
    return result;
};
const makeMapStateToProps = () => {
    return (state, { ID }) => {
        return {
            className: getClassName(state, ID),
            position: getPosition(state, ID),
            path: tags_1.getTagPath(state, ID),
            timeAt: getTimeTagAt(state, ID),
            isAnimated: isAnimated(state, ID)
        };
    };
};
const mapDispatchToProps = (dispatch, { ID }) => ({
    onMouseDown: () => {
        dispatch(ui_player_augmentation_tag_mouse_down_1.actionCreator({ tagID: ID }));
    },
    onMouseUp: () => {
        dispatch(ui_player_augmentation_tag_mouse_up_1.actionCreator());
    },
    onMouseEnter: () => {
        dispatch(ui_tag_mouse_enter_1.actionCreator({ tagID: ID }));
    },
    onMouseOut: () => {
        dispatch(ui_tag_mouse_out_1.actionCreator({ tagID: ID }));
    }
});
exports.default = react_redux_1.connect(makeMapStateToProps, mapDispatchToProps)(Tag_1.default);
//# sourceMappingURL=tag.js.map