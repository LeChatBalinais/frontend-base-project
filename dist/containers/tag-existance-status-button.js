"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const Button_1 = require("~/components/Button");
const ui_tag_list_row_save_button_clicked_1 = require("~/actions-reducers/ui-tag-list-row-save-button-clicked");
const ui_tag_list_row_delete_button_clicked_1 = require("~/actions-reducers/ui-tag-list-row-delete-button-clicked");
const onPress = (dispatch, tagID, isLocal) => {
    if (isLocal)
        return () => {
            dispatch(ui_tag_list_row_save_button_clicked_1.actionCreator({ tagID }));
        };
    return () => {
        dispatch(ui_tag_list_row_delete_button_clicked_1.actionCreator({ tagID }));
    };
};
const makeMapDispatchToProps = () => {
    return (dispatch, { ID, isLocal }) => ({ onPress: onPress(dispatch, ID, isLocal) });
};
const mapStateToProps = (state, { isLocal }) => {
    return { caption: isLocal ? 'Save' : 'Delete' };
};
exports.default = react_redux_1.connect(mapStateToProps, makeMapDispatchToProps)(Button_1.default);
//# sourceMappingURL=tag-existance-status-button.js.map