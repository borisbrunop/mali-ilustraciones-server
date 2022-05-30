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
function variables(results) {
    return __awaiter(this, void 0, void 0, function* () {
        // results.forEach((item: any) => console.log('PRODUCTS', item.properties.description.rich_text[0]?.plain_text || 'N/A'))
        return lodash_1.default.sortBy(results.filter((item) => item.properties.active.checkbox).map((item) => {
            var _a;
            return ({
                name: item.properties.Name.title[0].plain_text || '',
                order: item.properties.order.number || 0,
                price: item.properties.price.number || 0,
                categories: item.properties.Categories.multi_select.map((category) => category.name),
                imgUrls: item.properties.urls.multi_select.map((url) => url.name),
                description: ((_a = item.properties.description.rich_text[0]) === null || _a === void 0 ? void 0 : _a.plain_text) || '',
            });
        }), ['order'], ['asc']);
    });
}
exports.default = variables;
