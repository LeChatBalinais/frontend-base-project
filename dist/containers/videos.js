"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const Videos_1 = require("~/components/Videos");
const mapStateToProps = ({ entities: { videos: { allIDs, byID } } }) => ({
    videos: allIDs.map((ID) => byID[ID])
});
exports.default = react_redux_1.connect(mapStateToProps)(Videos_1.default);
//# sourceMappingURL=videos.js.map