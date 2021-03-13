"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_dom_1 = require("react-dom");
require("~/style.scss");
const App_1 = require("~/components/App");
require("../reset.css");
const renderApp = () => {
    const app = document && document.getElementById('app');
    if (app)
        react_dom_1.render(react_1.default.createElement(App_1.default, null), app);
};
renderApp();
if (module.hot) {
    module.hot.accept('./components/App', () => {
        renderApp();
    });
}
//# sourceMappingURL=index.js.map