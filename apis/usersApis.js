import config from './config';

const base_url = "https://api.rentifyy.com/";
const headers = {'Content-Type': 'application/json'};

export const loginApi = async (payload) => {
	return fetch(base_url+'users/login', {
			method: 'POST', // *GET, POST, PUT, DELETE, etc.
			// mode: 'no-cors', // no-cors, *cors, same-origin
			cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
			headers: headers,
			body:JSON.stringify(payload),
		})
};

export const signupApi = async (payload) => {
	return await fetch(base_url+'users/create', {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		// mode: 'no-cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		headers: headers,
		body:JSON.stringify(payload),
	})
};

export const otpApi = async (payload) => {
	return await fetch(base_url+'users/phoneverification', {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		// mode: 'no-cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		headers: headers,
		body:JSON.stringify(payload),
	})
};

export const forgotPasswordApi = async (payload) => {
	return await fetch(base_url+'users/forgotpassword', {
		method: 'POST', // *GET, POST, PUT, DELETE, etc.
		// mode: 'no-cors', // no-cors, *cors, same-origin
		cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
		headers: headers,
		body:JSON.stringify(payload),
	})
};
