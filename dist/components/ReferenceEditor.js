"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const player_1 = require("../containers/player");
const new_tag_button_1 = require("../containers/new-tag-button");
const tag_list_1 = require("../containers/tag-list");
const ReferenceEditor = () => (react_1.default.createElement("div", { className: "section main-section" },
    react_1.default.createElement("div", { className: "columns" },
        react_1.default.createElement("div", { className: "column is-8" },
            react_1.default.createElement(player_1.default, null)),
        react_1.default.createElement("div", { className: "column is-4" },
            react_1.default.createElement(new_tag_button_1.default, null),
            react_1.default.createElement(tag_list_1.default, null)))));
exports.default = ReferenceEditor;
//# sourceMappingURL=ReferenceEditor.js.map