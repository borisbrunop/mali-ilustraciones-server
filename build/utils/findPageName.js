"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const databases_1 = require("../const/databases");
function findPageName(database) {
    let name = '';
    Object.keys(databases_1.databases).forEach((item) => {
        if (databases_1.databases[item] === database) {
            name = item;
        }
    });
    return name;
}
exports.default = findPageName;
