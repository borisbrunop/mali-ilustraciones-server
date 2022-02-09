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
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const databases_1 = require("../const/databases");
const serialize_1 = require("../serialize");
function serialize(results, database, key) {
    return __awaiter(this, void 0, void 0, function* () {
        if (database === databases_1.databases.FRAMES) {
            return (0, serialize_1.frames)(results);
        }
        else if (database === databases_1.databases.VARIABLES) {
            return (0, serialize_1.variables)(results);
        }
        else if (database === databases_1.databases.PHOTOS) {
            return (0, serialize_1.photos)(results);
        }
        else if (database === databases_1.databases.MENUS) {
            return (0, serialize_1.menus)(results);
        }
        else if (database === databases_1.databases.CITIES) {
            return (0, serialize_1.cities)(results);
        }
        else if (database === 'componente') {
            return (0, serialize_1.galleryComponents)(results, key);
        }
        else {
            return key ? `key param not found ${database}` : `database not found ${database}`;
        }
    });
}
exports.default = serialize;
