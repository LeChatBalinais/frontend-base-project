"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const SeekBar_1 = require("~/components/SeekBar");
const ui_player_seekbar_mouse_down_1 = require("~/actions-reducers/ui-player-seekbar-mouse-down");
const ui_player_seekbar_mouse_up_during_seeking_1 = require("~/actions-reducers/ui-player-seekbar-mouse-up-during-seeking");
const ui_player_seekbar_mouse_move_during_seeking_1 = require("~/actions-reducers/ui-player-seekbar-mouse-move-during-seeking");
const mapDispatchToProps = (dispatch) => ({
    onMouseDown: (relativePosition) => {
        dispatch(ui_player_seekbar_mouse_down_1.actionCreator({ position: relativePosition }));
    },
    onMouseUp: () => {
        dispatch(ui_player_seekbar_mouse_up_during_seeking_1.actionCreator());
    },
    onMouseMove: (relativePosition) => {
        dispatch(ui_player_seekbar_mouse_move_during_seeking_1.actionCreator({ position: relativePosition }));
    }
});
exports.default = react_redux_1.connect(undefined, mapDispatchToProps)(SeekBar_1.default);
//# sourceMappingURL=seekbar.js.map