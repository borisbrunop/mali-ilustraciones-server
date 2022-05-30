import lodash from "lodash"

export default async function frames (results: any[]){
    return lodash.sortBy(results.filter((item: any) => item.properties.active.checkbox).map((item: any) => (  {
        key: item.properties.key.rich_text[0]?.plain_text || '', 
        name: item.properties.Name.title[0].plain_text || '',
        description_card: item.properties.description_card.rich_text[0]?.plain_text || '',
        description_page: item.properties.description_page.rich_text[0]?.plain_text || '',
        url: item.properties.url.url,
        order: item.properties.order.number || 0,
        countries: item.properties.Countries.multi_select.map((country: any) => country.name)
    })), ['order'],['asc'])
}