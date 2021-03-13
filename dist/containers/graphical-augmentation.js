"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const GraphicalAugmentation_1 = require("~/components/GraphicalAugmentation");
const tag_editor_1 = require("~/getters/tag-editor");
const mapStateToProps = (state) => {
    const result = {
        tagIDs: tag_editor_1.getVisibleTraceTagIDs(state)
    };
    return result;
};
exports.default = react_redux_1.connect(mapStateToProps)(GraphicalAugmentation_1.default);
//# sourceMappingURL=graphical-augmentation.js.map