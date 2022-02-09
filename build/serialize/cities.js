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
function cities(results) {
    return __awaiter(this, void 0, void 0, function* () {
        const countries = [...new Set(results.map((item) => item.properties.pais.rich_text[0].plain_text))];
        const newCountries = [...new Set(countries.map((item) => {
                const newCities = results.filter((inner) => inner.properties.pais.rich_text[0].plain_text === item);
                return ({
                    name: item,
                    cities: newCities.map((inner) => ({
                        name: inner.properties.Name.title[0].plain_text || '',
                        delivery: inner.properties.delivery.number || 0,
                        id: inner.id
                    }))
                });
            }))];
        // let citiesFinal: any = {}
        // countries.forEach((item: any) =>{
        //     const cities = results.filter((inner) => inner.properties.pais.rich_text[0].plain_text === item)
        //     citiesFinal[item] = cities.map((inner) => ({
        //         name: inner.properties.Name.title[0].plain_text || '',
        //         delivery: inner.properties.delivery.number || 0,
        //         id: inner.id
        //     }))
        // })
        // return citiesFinal
        return newCountries;
    });
}
exports.default = cities;
