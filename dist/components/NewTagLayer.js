"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function createOnClick(onClick) {
    return (event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        onClick(((event.clientX - rect.left) / rect.width) * 100, ((event.clientY - rect.top) / rect.height) * 100);
    };
}
const NewTagLayer = ({ onClick }) => (
// eslint-disable-next-line
react_1.default.createElement("div", { className: "augmentation addition-layer", onClick: createOnClick(onClick) }));
exports.default = NewTagLayer;
//# sourceMappingURL=NewTagLayer.js.map