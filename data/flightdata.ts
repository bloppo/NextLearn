//const axios =  import require('axios');
import axios from "axios";

const getFlightData = async () => {

    const options = {
        method: 'GET',
        url: 'https://flight-info-api.p.rapidapi.com/status',
        params: {
            version: 'v2',
            DepartureDateTime: '2024-05-20',
            ArrivalDateTime: '2024-05-20',
            DepartureAirport: 'PHX',
            CodeType: 'FAA'
        },
        headers: {
            'X-RapidAPI-Key': '153bc7dcf0mshabc9a8f4510881ep1cae05jsna30ed66f3d58',
            'X-RapidAPI-Host': 'flight-info-api.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(error);
    }

}

export default getFlightData;