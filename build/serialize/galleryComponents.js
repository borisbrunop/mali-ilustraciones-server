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
const keys = ['componente'];
const lodash_1 = __importDefault(require("lodash"));
function galleryComponents(results, key) {
    return __awaiter(this, void 0, void 0, function* () {
        if (key) {
            const findKey = keys === null || keys === void 0 ? void 0 : keys.find((item) => item === key);
            const formatResult = lodash_1.default.sortBy(results.filter((item) => item.properties.Name.title[0].plain_text.split('-')[0] === key).map((item) => ({
                value: item.properties.valor.rich_text[0].plain_text,
                name: item.properties.Name.title[0].plain_text.split('-')[1] || '',
                order: item.properties.order.number || 0,
            })), ['order'], ['asc']);
            return findKey ? { title: formatResult[0].value, description: formatResult[1].value } : { value: 'error', name: `param key ${key} not found` };
        }
        return { value: 'error', name: 'param key not provided' };
    });
}
exports.default = galleryComponents;
