"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const ControlPanel_1 = require("./ControlPanel");
const video_1 = require("~/containers/video");
const new_tag_layer_1 = require("~/containers/new-tag-layer");
const augmentation_1 = require("~/containers/augmentation");
const seekbar_1 = require("~/containers/seekbar");
const tag_panel_1 = require("~/containers/tag-panel");
const graphical_augmentation_1 = require("~/containers/graphical-augmentation");
const seek_preview_1 = require("~/containers/seek-preview");
const Player = ({ placeNewTagMode, currentTag }) => {
    let newTagLayerComponent = null;
    if (placeNewTagMode)
        newTagLayerComponent = react_1.default.createElement(new_tag_layer_1.default, null);
    let currentTagPanel = null;
    if (currentTag)
        currentTagPanel = react_1.default.createElement(tag_panel_1.default, Object.assign({}, { ID: currentTag }));
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { className: "box video-box" },
            react_1.default.createElement("div", { className: "augmented-video" },
                react_1.default.createElement(video_1.default, null),
                react_1.default.createElement(seek_preview_1.default, null),
                react_1.default.createElement(graphical_augmentation_1.default, null),
                react_1.default.createElement(augmentation_1.default, null),
                newTagLayerComponent),
            react_1.default.createElement(seekbar_1.default, null),
            react_1.default.createElement(ControlPanel_1.default, null),
            currentTagPanel)));
};
exports.default = Player;
//# sourceMappingURL=Player.js.map