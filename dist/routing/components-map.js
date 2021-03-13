"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const videos_1 = require("~/containers/videos");
const ReferenceEditor_1 = require("~/components/ReferenceEditor");
const PageNotFound_1 = require("~/components/PageNotFound");
const pages_1 = require("./pages");
const pagesToComponents = {
    [pages_1.HOME_PAGE]: react_1.default.createElement(videos_1.default, null),
    [pages_1.REFERENCE_EDITOR_PAGE]: react_1.default.createElement(ReferenceEditor_1.default, null),
    [pages_1.NOT_FOUND_PAGE]: react_1.default.createElement(PageNotFound_1.default, null)
};
exports.default = pagesToComponents;
//# sourceMappingURL=components-map.js.map