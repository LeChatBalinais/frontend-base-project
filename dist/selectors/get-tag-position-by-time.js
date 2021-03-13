"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTagPositionByTime = void 0;
const tags_1 = require("~/getters/tags");
const getTagPositionByTime = (state, ID, time) => {
    const path = tags_1.getTagPath(state, ID);
    if (path.length === 0)
        return undefined;
    let x = 0;
    let y = 0;
    const { length: l, 0: firstPoint, [l - 1]: lastPoint } = path;
    if (time < firstPoint.time) {
        ({ x, y } = firstPoint);
    }
    else if (time > lastPoint.time) {
        ({ x, y } = lastPoint);
    }
    else {
        for (let i = 0; i < path.length; i += 1) {
            const { [i]: iPoint } = path;
            if (path[i].time === time) {
                ({ x } = iPoint);
                ({ y } = iPoint);
                break;
            }
            else {
                const { [i + 1]: nextToIPoint } = path;
                if (iPoint.time <= time && nextToIPoint.time >= time) {
                    x = (iPoint.x + nextToIPoint.x) / 2;
                    y = (iPoint.y + nextToIPoint.y) / 2;
                    break;
                }
            }
        }
    }
    return { x, y };
};
exports.getTagPositionByTime = getTagPositionByTime;
//# sourceMappingURL=get-tag-position-by-time.js.map