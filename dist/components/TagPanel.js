"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const TagPanel = ({ start, end, traceIsVisible, onTagTraceVisbileCheckboxInput, onAppearsAtInput, onDisappearsAtInput }) => {
    return (
    /* eslint-disable-next-line */
    react_1.default.createElement("div", { className: "columns" },
        react_1.default.createElement("div", { className: "column" },
            react_1.default.createElement("span", null,
                "Start at:",
                react_1.default.createElement("input", { type: "NUMBER", step: 0.1, value: start, onChange: (event) => {
                        onAppearsAtInput(Number(event.target.value));
                    } }))),
        react_1.default.createElement("div", { className: "column" },
            react_1.default.createElement("span", null,
                "End at:",
                ' ',
                react_1.default.createElement("input", { type: "NUMBER", step: 0.1, value: end, onChange: (event) => {
                        onDisappearsAtInput(Number(event.target.value));
                    } }),
                ' ')),
        react_1.default.createElement("div", { className: "column" },
            react_1.default.createElement("span", null,
                react_1.default.createElement("input", Object.assign({ type: "checkbox" }, { checked: traceIsVisible, value: 'Trace Is Visible' }, { onChange: (event) => {
                        onTagTraceVisbileCheckboxInput(event.target.checked);
                    } })),
                "Trace is Visible"))));
};
exports.default = TagPanel;
//# sourceMappingURL=TagPanel.js.map