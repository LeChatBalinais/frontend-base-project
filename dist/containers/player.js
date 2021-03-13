"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const Player_1 = require("~/components/Player");
const tag_editor_1 = require("~/getters/tag-editor");
const mapStateToProps = (state) => ({
    currentTag: tag_editor_1.getCurrentTagID(state),
    placeNewTagMode: tag_editor_1.isPlaceNewTagModeOn(state)
});
exports.default = react_redux_1.connect(mapStateToProps)(Player_1.default);
//# sourceMappingURL=player.js.map