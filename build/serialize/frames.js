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
function frames(results) {
    return __awaiter(this, void 0, void 0, function* () {
        return lodash_1.default.sortBy(results.filter((item) => item.properties.active.checkbox).map((item) => {
            var _a, _b, _c;
            return ({
                key: ((_a = item.properties.key.rich_text[0]) === null || _a === void 0 ? void 0 : _a.plain_text) || '',
                name: item.properties.Name.title[0].plain_text || '',
                description_card: ((_b = item.properties.description_card.rich_text[0]) === null || _b === void 0 ? void 0 : _b.plain_text) || '',
                description_page: ((_c = item.properties.description_page.rich_text[0]) === null || _c === void 0 ? void 0 : _c.plain_text) || '',
                url: item.properties.url.url,
                order: item.properties.order.number || 0,
                countries: item.properties.Countries.multi_select.map((country) => country.name)
            });
        }), ['order'], ['asc']);
    });
}
exports.default = frames;
