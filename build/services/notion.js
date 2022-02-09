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
exports.getComponents = void 0;
// const serialize = require("../utils/serialize");
const serialize_1 = __importDefault(require("../utils/serialize"));
const { Client } = require("@notionhq/client");
const notion = new Client({
    auth: process.env.NOTION_SECRET
});
function get(database, method) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = {
            path: `databases/${database}/query`,
            method: method
        };
        const { results } = yield notion.request(payload);
        return (0, serialize_1.default)(results, database);
    });
}
exports.default = get;
function getComponents(database, method, key) {
    return __awaiter(this, void 0, void 0, function* () {
        const payload = {
            path: `databases/${database}/query`,
            method: method,
        };
        const { results } = yield notion.request(payload);
        return (0, serialize_1.default)(results, key, key);
    });
}
exports.getComponents = getComponents;
