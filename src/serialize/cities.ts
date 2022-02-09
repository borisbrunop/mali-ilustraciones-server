import findPageName from "../utils/findPageName";

export default async function cities (results: any[]){
    const countries: string[] = [...new Set(results.map((item: any) => item.properties.pais.rich_text[0].plain_text))]
    const newCountries: any = [...new Set(countries.map((item: string) => {
        const newCities = results.filter((inner) => inner.properties.pais.rich_text[0].plain_text === item);
        return ({
            name: item,
            cities: newCities.map((inner) => ({
                name: inner.properties.Name.title[0].plain_text || '',
                delivery: inner.properties.delivery.number || 0,
                id: inner.id
            }))
        })
        }))]

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
    return newCountries
}
