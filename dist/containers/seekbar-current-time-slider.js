"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const state_1 = require("~/state");
const SeekBarSlider_1 = require("~/components/SeekBarSlider");
const player_1 = require("~/getters/player");
const getSliderPosition = (state) => {
    const normalizedPosition = player_1.getSeekingStatus(state) !== state_1.SeekingStatus.NoSeeking
        ? player_1.getLastRequestedStage(state)
        : player_1.getStageVideoAt(state);
    return normalizedPosition * 100;
};
const mapStateToProps = (state) => {
    return {
        position: getSliderPosition(state),
        className: 'slider-current-time'
    };
};
exports.default = react_redux_1.connect(mapStateToProps)(SeekBarSlider_1.default);
//# sourceMappingURL=seekbar-current-time-slider.js.map