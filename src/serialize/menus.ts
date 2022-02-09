import lodash from "lodash"

export default async function menus (results: any[]){
    return lodash.sortBy(results.filter((item: any) => item.properties.active.checkbox).map((item: any) => (  {
        name: item.properties.Name.title[0].plain_text || '', 
        order: item.properties.order.number || 0,
        path: item.properties.path.rich_text[0].plain_text || ''
    })), ['order'],['asc'])
}