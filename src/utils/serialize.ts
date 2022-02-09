import 'dotenv/config'
import {databases} from '../const/databases';
import {frames, menus, variables, photos, cities, galleryComponents} from '../serialize'

export default async function serialize (results: any[], database: string | undefined, key?: string){
    if(database === databases.FRAMES){
        return frames(results)
    }else if(database === databases.VARIABLES){
        return variables(results)
    }else if(database === databases.PHOTOS){    
        return photos(results)
    }else if(database === databases.MENUS){   
        return menus(results)
    }else if(database === databases.CITIES){
        return cities(results)
    }else if(database === 'componente'){
        return galleryComponents(results, key)
    }else{
        return key ? `key param not found ${database}` : `database not found ${database}`
    } 
} 