"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const Button_1 = require("~/components/Button");
const ui_player_controls_play_button_clicked_1 = require("~/actions-reducers/ui-player-controls-play-button-clicked");
const player_1 = require("~/getters/player");
const mapStateToProps = (state) => ({
    caption: player_1.isPlaying(state) ? 'Pause' : 'Play'
});
const mapDispatchToProps = (dispatch) => ({
    onPress: () => {
        dispatch(ui_player_controls_play_button_clicked_1.actionCreator());
    }
});
exports.default = react_redux_1.connect(mapStateToProps, mapDispatchToProps)(Button_1.default);
//# sourceMappingURL=play-button.js.map