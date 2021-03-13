"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const TagPanel_1 = require("~/components/TagPanel");
const ui_current_tag_panel_trace_visibility_checkbox_toggled_1 = require("~/actions-reducers/ui-current-tag-panel-trace-visibility-checkbox-toggled");
const ui_current_tag_panel_appears_at_edited_1 = require("~/actions-reducers/ui-current-tag-panel-appears-at-edited");
const ui_current_tag_panel_disappears_at_edited_1 = require("~/actions-reducers/ui-current-tag-panel-disappears-at-edited");
const tag_editor_1 = require("~/getters/tag-editor");
const get_point_tag_appears_at_1 = require("~/selectors/get-point-tag-appears-at");
const get_point_tag_disappears_at_1 = require("~/selectors/get-point-tag-disappears-at");
const getTimeTagAppearsAt = (state, ID) => {
    const { time } = get_point_tag_appears_at_1.getPointTagAppearsAt(state, ID);
    return time;
};
const getTimeTagDisappearsAt = (state, ID) => {
    const { time } = get_point_tag_disappears_at_1.getPointTagDisappearsAt(state, ID);
    return time;
};
const isTagTraceVisible = (state, ID) => {
    return tag_editor_1.getVisibleTraceTagIDs(state).includes(ID);
};
const onTagTraceVisbileCheckboxInput = (dispatch, ID) => {
    return (visible) => {
        dispatch(ui_current_tag_panel_trace_visibility_checkbox_toggled_1.actionCreator({ tagID: ID, visible }));
    };
};
const onAppearsAtInput = (dispatch, ID) => {
    return (time) => {
        dispatch(ui_current_tag_panel_appears_at_edited_1.actionCreator({ tagID: ID, time }));
    };
};
const onDisappearsAtInput = (dispatch, ID) => {
    return (time) => {
        dispatch(ui_current_tag_panel_disappears_at_edited_1.actionCreator({ tagID: ID, time }));
    };
};
const makeMapStateToProps = () => {
    return (state) => {
        const ID = tag_editor_1.getCurrentTagID(state);
        return {
            name: ID,
            start: getTimeTagAppearsAt(state, ID),
            end: getTimeTagDisappearsAt(state, ID),
            traceIsVisible: isTagTraceVisible(state, ID)
        };
    };
};
const makeMapDispatchToProps = () => {
    return (dispatch, { ID }) => {
        return {
            onTagTraceVisbileCheckboxInput: onTagTraceVisbileCheckboxInput(dispatch, ID),
            onAppearsAtInput: onAppearsAtInput(dispatch, ID),
            onDisappearsAtInput: onDisappearsAtInput(dispatch, ID)
        };
    };
};
exports.default = react_redux_1.connect(makeMapStateToProps, makeMapDispatchToProps)(TagPanel_1.default);
//# sourceMappingURL=tag-panel.js.map