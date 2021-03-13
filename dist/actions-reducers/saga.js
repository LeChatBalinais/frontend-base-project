"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reducersRegister = void 0;
const tagDeletionConfirmed = require("./saga-tag-deletion-confirmed");
const tagSavingConfirmed = require("./saga-tag-saving-confirmed");
const tagsFetchingFetched = require("./saga-tags-fetching-fetched");
const videosFetchingFetched = require("./saga-videos-fetching-fetched");
const videoSeekDelayEnded = require("./saga-video-seek-delay-ended");
exports.reducersRegister = Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, tagDeletionConfirmed.reducer), tagSavingConfirmed.reducer), tagsFetchingFetched.reducer), videoSeekDelayEnded.reducer), videosFetchingFetched.reducer);
//# sourceMappingURL=saga.js.map