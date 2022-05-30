import lodash from "lodash"

export default async function variables (results: any[]){
    // results.forEach((item: any) => console.log('PRODUCTS', item.properties.description.rich_text[0]?.plain_text || 'N/A'))
    return lodash.sortBy(results.filter((item: any) => item.properties.active.checkbox).map((item: any) => (  {
        name: item.properties.Name.title[0].plain_text || '', 
        order: item.properties.order.number || 0,
        price: item.properties.price.number || 0,
        categories: item.properties.Categories.multi_select.map((category: any) => category.name),
        imgUrls: item.properties.urls.multi_select.map((url: any) => url.name),
        description: item.properties.description.rich_text[0]?.plain_text || '',
    })), ['order'],['asc'])
} 