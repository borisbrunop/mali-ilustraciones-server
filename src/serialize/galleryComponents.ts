const keys = ['componente']
import lodash from "lodash"

export default async function galleryComponents (results: any[], key?: string){
    if(key){
        const findKey: string | undefined = keys?.find((item) => item === key)
        const formatResult = lodash.sortBy(results.filter((item) => item.properties.Name.title[0].plain_text.split('-')[0] === key).map((item: any) => ({
            value: item.properties.valor.rich_text[0].plain_text ,
            name: item.properties.Name.title[0].plain_text.split('-')[1] || '',
            order: item.properties.order.number || 0, 
        })), ['order'],['asc'])
        return findKey ? {title: formatResult[0].value, description: formatResult[1].value} : {value: 'error', name: `param key ${key} not found`}
    }
    return {value: 'error', name: 'param key not provided'}
    
}