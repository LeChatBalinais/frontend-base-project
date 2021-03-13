"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSeekPreviewURL = exports.getVideoURL = exports.getIDofVideoInReferenceEditor = void 0;
const getIDofVideoInReferenceEditor = ({ location: { payload: { videoID } } }) => videoID;
exports.getIDofVideoInReferenceEditor = getIDofVideoInReferenceEditor;
const getVideoURL = ({ location: { payload: { videoID } } }) => `http://localhost:9000/video/${videoID}`;
exports.getVideoURL = getVideoURL;
const getSeekPreviewURL = ({ location: { payload: { videoID } } }) => `http://localhost:9000/seekpreview/${videoID}`;
exports.getSeekPreviewURL = getSeekPreviewURL;
//# sourceMappingURL=location.js.map