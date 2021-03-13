"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getClassName = exports.isSaveButtonAvailable = exports.isTagRowHighlighted = void 0;
const react_redux_1 = require("react-redux");
const TagRow_1 = require("~/components/TagRow");
const ui_tag_list_row_clicked_1 = require("~/actions-reducers/ui-tag-list-row-clicked");
const ui_tag_mouse_enter_1 = require("~/actions-reducers/ui-tag-mouse-enter");
const ui_tag_mouse_out_1 = require("~/actions-reducers/ui-tag-mouse-out");
const is_tag_current_1 = require("~/selectors/is-tag-current");
const is_tag_local_1 = require("~/selectors/is-tag-local");
const get_tag_caption_1 = require("~/selectors/get-tag-caption");
const player_1 = require("~/getters/player");
const isTagRowHighlighted = (state, ID) => is_tag_current_1.isTagCurrent(state, ID);
exports.isTagRowHighlighted = isTagRowHighlighted;
const isSaveButtonAvailable = (state, ID) => is_tag_local_1.isTagLocal(state, ID);
exports.isSaveButtonAvailable = isSaveButtonAvailable;
const getClassName = (state, ID) => {
    let className = 'box';
    if (is_tag_current_1.isTagCurrent(state, ID))
        className = className.concat(' current-tag-row');
    if (player_1.isTagHighlighted(state, ID))
        className = className.concat(' hovered-tag-row');
    return className;
};
exports.getClassName = getClassName;
const makeMapStateToProps = () => (state, { ID }) => ({
    ID,
    caption: get_tag_caption_1.getTagCaption(state, ID),
    isSaveButtonAvailable: exports.isSaveButtonAvailable(state, ID),
    className: exports.getClassName(state, ID)
});
const makeMapDispatchToProps = () => (dispatch, { ID }) => ({
    onClick: () => {
        dispatch(ui_tag_list_row_clicked_1.actionCreator({ tagID: ID }));
    },
    onMouseEnter: () => {
        dispatch(ui_tag_mouse_enter_1.actionCreator({ tagID: ID }));
    },
    onMouseLeave: () => {
        dispatch(ui_tag_mouse_out_1.actionCreator({ tagID: ID }));
    }
});
exports.default = react_redux_1.connect(makeMapStateToProps, makeMapDispatchToProps)(TagRow_1.default);
//# sourceMappingURL=tag-row.js.map