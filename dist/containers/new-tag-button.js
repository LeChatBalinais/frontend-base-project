"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const Button_1 = require("~/components/Button");
const tag_editor_1 = require("~/getters/tag-editor");
const ui_tag_editor_new_tag_button_clicked_1 = require("~/actions-reducers/ui-tag-editor-new-tag-button-clicked");
const mapStateToProps = (state) => ({
    caption: tag_editor_1.isPlaceNewTagModeOn(state) ? 'X' : 'Place New Tag'
});
const mapDispatchToProps = (dispatch) => ({
    onPress: () => {
        dispatch(ui_tag_editor_new_tag_button_clicked_1.actionCreator());
    }
});
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Button_1.default);
//# sourceMappingURL=new-tag-button.js.map