"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const NewTagLayer_1 = require("~/components/NewTagLayer");
const ui_tag_editor_new_tag_layer_clicked_1 = require("~/actions-reducers/ui-tag-editor-new-tag-layer-clicked");
const mapDispatchToProps = (dispatch) => ({
    onClick: (x, y) => {
        dispatch(ui_tag_editor_new_tag_layer_clicked_1.actionCreator({ x, y }));
    }
});
exports.default = react_redux_1.connect(undefined, mapDispatchToProps)(NewTagLayer_1.default);
//# sourceMappingURL=new-tag-layer.js.map