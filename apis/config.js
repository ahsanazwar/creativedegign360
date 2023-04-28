
import axios from 'axios';
const basicRoute = 'https://creativedesign.rayyserve.com/api' || 'localhost:3000';


const instance = axios.create({
    baseURL: basicRoute,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
});

export default instance;