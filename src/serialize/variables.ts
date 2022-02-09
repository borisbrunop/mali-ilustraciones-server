

export default async function variables (results: any[]){
    return results.map((item: any) => ({
        price: item.properties.precio.number || 0 , 
        name: item.properties.Name.title[0].plain_text || ''
    }))
} 