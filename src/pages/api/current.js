import axios from "axios"
import appConfig from"./config.json";
import sampleData from"./sample.json";
export default async function handler(req, res) {
    try {
        const { q } = req.query;
        if (req.method === 'GET') {
            var currentForcast ;
            if(q && q.length > 0){
                currentForcast = await get(q);
            }else{
                currentForcast = sampleData;
            }
            return  res.status(200).json(currentForcast)
        } else {
            return res.status(500).json({ error: 'Un-supported Method' })
        }
    } catch (err) {
        console.log(err);
        
        return res.status(500).json({ error: 'failed to load data' })
    }
}

async function get(query) {
    try{

        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: `${appConfig.baseUrl}/forecast.json?key=${appConfig.apiKey}&days=14&aqi=yes&q=${query}`
            };
            
        var result =  await axios.request(config)
        return result.data;
    } catch (err) {
        console.log(err);
        return sampleData;
    }
}