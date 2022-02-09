"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
function photos(results) {
    return __awaiter(this, void 0, void 0, function* () {
        return lodash_1.default.sortBy(results.filter((item) => item.properties.Name.title[0].plain_text === 'foto').map((item) => ({
            order: item.properties.order.number || 0,
            url: item.properties.url.url,
            width: item.properties.width.number || 4,
            height: item.properties.height.number || 5
        })), ['order'], ['asc']);
    });
}
exports.default = photos;
