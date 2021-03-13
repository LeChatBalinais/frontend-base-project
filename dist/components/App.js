"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const store_1 = require("~/store");
const components_map_1 = require("~/routing/components-map");
const App2 = ({ page }) => {
    const Component = components_map_1.default[page];
    return Component;
};
const mapStateToProps = ({ page }) => ({ page });
const App2Container = react_redux_1.connect(mapStateToProps)(App2);
const App = () => (react_1.default.createElement(react_redux_1.Provider, { store: store_1.default },
    react_1.default.createElement(App2Container, null)));
exports.default = App;
//# sourceMappingURL=App.js.map