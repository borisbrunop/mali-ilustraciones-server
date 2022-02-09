

export default async function frames (results: any[]){
    return results.map((item: any) => ({
        dimensions: item.properties.dimensiones.rich_text[0].plain_text , 
        name: item.properties.Name.title[0].plain_text || ''
    }))
}