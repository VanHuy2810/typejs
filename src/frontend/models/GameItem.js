"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameItem = exports.GameItemStatus = void 0;
var GameItemStatus;
(function (GameItemStatus) {
    GameItemStatus[GameItemStatus["Open"] = 0] = "Open";
    GameItemStatus[GameItemStatus["Close"] = 1] = "Close";
})(GameItemStatus || (exports.GameItemStatus = GameItemStatus = {}));
var GameItem = /** @class */ (function () {
    function GameItem(id, divId, image, status, isMathched, imageElement) {
        if (status === void 0) { status = GameItemStatus.Close; }
        if (isMathched === void 0) { isMathched = false; }
        if (imageElement === void 0) { imageElement = null; }
        this.id = id;
        this.divId = divId;
        this.image = image;
        this.status = status;
        this.isMathched = isMathched;
        this.imageElement = imageElement;
    }
    return GameItem;
}());
exports.GameItem = GameItem;
