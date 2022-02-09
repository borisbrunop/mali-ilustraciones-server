import express  from "express";
import 'dotenv/config'
import get, { getComponents } from './services/notion'
import findPageName from './utils/findPageName'
import {databases} from './const/databases'


const app = express();

// var databases = require('./const/databases');
const port = process.env.PORT || 5400

// app.get('/all', async (req, res) => {
//     try{
//         const frames = await get(databases.FRAMES, 'POST');
//         const variables = await get(databases.VARIABLES, 'POST');
//         const photos = await get(databases.PHOTOS, 'POST');
//         console.info('response all successfull 200')
//         res.json({frames, variables, photos})
//     }catch(e){
//         console.error(e)
//     }
// })

app.get('/:name', async (req, res) => {
    try{
        const response = await get(req.params.name, 'POST');
        const name = findPageName(req.params.name)
        console.info(`get database ${name} 200 response status`)
        res.json(response)
    }catch(e){
        console.error(e)
    }
})
app.get(`/${databases.PHOTOS}/:key`, async (req, res) => {
    try{
        const response = await getComponents(databases.PHOTOS, 'POST', req.params.key);
        const name = findPageName(databases.PHOTOS)
        console.info(`get database ${name} ${req.params.key} 200 response status`)
        res.json(response)
    }catch(e){
        console.error(e)
    }
})

app.listen(port, () => console.log(`Server started on port ${port}`));






