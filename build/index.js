"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const notion_1 = __importStar(require("./services/notion"));
const findPageName_1 = __importDefault(require("./utils/findPageName"));
const databases_1 = require("./const/databases");
var cors = require('cors');
var allowedOrigins = ['http://localhost:3000',
    'https://mali-ilustraciones.web.app/'];
const app = (0, express_1.default)();
app.use(cors());
const port = process.env.PORT || 5400;
// app.get('/all', async (req, res) => {
//     try{
//         const frames = await get(databases.FRAMES, 'POST');
//         const variables = await get(databases.VARIABLES, 'POST');
//         const photos = await get(databases.PHOTOS, 'POST');
//         console.info('response all successfull 200')
//         res.json({frames, variables, photos})
//     }catch(e){
//         console.error(e)
//     }
// })
app.get('/:name', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, notion_1.default)(req.params.name, 'POST');
        const name = (0, findPageName_1.default)(req.params.name);
        console.info(`get database ${name} 200 response status`);
        res.json(response);
    }
    catch (e) {
        console.error(e);
    }
}));
app.get(`/${databases_1.databases.PHOTOS}/:key`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, notion_1.getComponents)(databases_1.databases.PHOTOS, 'POST', req.params.key);
        const name = (0, findPageName_1.default)(databases_1.databases.PHOTOS);
        console.info(`get database ${name} ${req.params.key} 200 response status`);
        res.json(response);
    }
    catch (e) {
        console.error(e);
    }
}));
app.get(`/${databases_1.databases.PRODUCTS}/:key`, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield (0, notion_1.getProducts)(databases_1.databases.PRODUCTS, req.params.key);
        const name = (0, findPageName_1.default)(databases_1.databases.PHOTOS);
        console.info(`get database ${name} by categories 200 response status`);
        res.json(response[0] ? response : { message: 'Esta Categoria no tiene Productos', code: 404 });
    }
    catch (e) {
        console.error(e);
    }
}));
app.listen(port, () => console.log(`Server started on port ${port}`));
