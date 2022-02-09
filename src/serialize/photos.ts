import lodash from "lodash"

export default async function photos (results: any[]){
    return lodash.sortBy(results.filter((item: any) => item.properties.Name.title[0].plain_text === 'foto').map((item: any) => ({
        order: item.properties.order.number || 0, 
        url: item.properties.url.url,
        width: item.properties.width.number || 4,
        height: item.properties.height.number || 5
    })), ['order'],['asc'])
}