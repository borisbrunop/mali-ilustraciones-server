import 'dotenv/config'
import {databases} from '../const/databases';
import {frames, menus, variables, photos, cities} from '../serialize'

export default function findPageName (database: string ){
    let name = ''
    Object.keys(databases).forEach((item) => {
        if(databases[item] === database){
            name = item
        }
    })
    return name
} 