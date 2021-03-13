"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const Augmentation_1 = require("~/components/Augmentation");
const get_currentily_visible_tag_ids_1 = require("~/selectors/get-currentily-visible-tag-ids");
const ui_player_augmentation_mouse_down_1 = require("~/actions-reducers/ui-player-augmentation-mouse-down");
const ui_player_augmentation_mouse_move_1 = require("~/actions-reducers/ui-player-augmentation-mouse-move");
const ui_player_augmentation_mouse_up_1 = require("~/actions-reducers/ui-player-augmentation-mouse-up");
const tag_editor_1 = require("~/getters/tag-editor");
const mapStateToProps = (state) => ({
    tagIDs: get_currentily_visible_tag_ids_1.default(state),
    reactOnMouseMove: tag_editor_1.getTagBeingEditedID(state) !== undefined
});
const mapDispatchToProps = (dispatch) => ({
    onMouseDown: () => {
        dispatch(ui_player_augmentation_mouse_down_1.actionCreator());
    },
    onMouseMove: (x, y) => {
        dispatch(ui_player_augmentation_mouse_move_1.actionCreator({ x, y }));
    },
    onMouseUp: (x, y) => {
        dispatch(ui_player_augmentation_mouse_up_1.actionCreator({ x, y }));
    }
});
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Augmentation_1.default);
//# sourceMappingURL=augmentation.js.map