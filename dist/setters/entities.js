"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setVideos = exports.setTags = void 0;
const setTags = (state, tags) => (Object.assign(Object.assign({}, state), { entities: Object.assign(Object.assign({}, state.entities), { tags }) }));
exports.setTags = setTags;
const setVideos = (state, videos) => (Object.assign(Object.assign({}, state), { entities: Object.assign(Object.assign({}, state.entities), { videos }) }));
exports.setVideos = setVideos;
//# sourceMappingURL=entities.js.map