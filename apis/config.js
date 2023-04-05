// process.env.serviceURL = 'http://portal.memonsports.com:81/'; 
// const basicRoute = process.env.serviceURL || 'http://portal.memonsports.com:81/';
const basicRoute = 'https://134.209.156.182/';
import axios from 'axios';
// import cookie from 'cookie';

// const user = document.cookie ? JSON.parse(cookie.parse(document.cookie).user): {}; 




const instance = axios.create({
	baseURL: basicRoute,
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
		// 'Access-Control-Allow-Origin': '*',
		// 'Access-Control-Allow-Headers': '*',
        // 'Access-Control-Allow-Credentials': 'true'
	}
});


// if(user.token) {
// 	instance.defaults.headers = {
// 		...instance.defaults.headers, 
// 		Authorization: user.token
// 	};
// }

export default instance;
