// const serialize = require("../utils/serialize");
import serialize from '../utils/serialize'

const { Client } = require("@notionhq/client");


const notion = new Client({
    auth: process.env.NOTION_SECRET
})

export default async function get(database: string | undefined, method: string){
    const payload = {
        path: `databases/${database}/query`,
        method: method
    }

    const {results} = await notion.request(payload)

    return serialize(results, database)
} 
export async function getComponents(database: string | undefined, method: string, key: string){
    const payload = {
        path: `databases/${database}/query`,
        method: method,
    }

    const {results} = await notion.request(payload)

    return serialize(results, key, key)
} 