import apis from '../apis/index';
const {
	loginApi,
	signupApi,
	otpApi,
	forgotPasswordApi,
} = apis.usersApis;

export const login = (payload) => {
	return (dispatch) => {
		const USER = {
			pending: true,
			failed: false,
			data: {},
		};
		dispatch({ type: 'USER', data: USER });
		return loginApi(payload)
		.then((response) => response.json())
		.then((todos) => {
				if(todos.meta.code === 200) {
					USER.data = todos.data;
					USER.pending = false;
					USER.failed = false;
					dispatch({ type: 'USER', data: USER });
					return USER;
				} else {
					throw todos.meta.message
				}
			})
			.catch((error) => {
				USER.data = {};
				USER.error = error;
				USER.pending = false;
				USER.failed = true;
				dispatch({ type: 'USER', data: USER });
				return USER;
			});
	};
};

export const signup = (payload, headers) => {
	return (dispatch) => {
		const USER = {
			pending: true,
			failed: false,
			data: {},
		};
		dispatch({ type: 'USER', data: USER });
		return signupApi(payload, headers)
		.then((response) => response.json())
		.then((todos) => {
				if(todos.meta.code === 200) {
					USER.data = todos.data;
					USER.pending = false;
					USER.failed = false;
					dispatch({ type: 'USER', data: USER });
					return USER;
				} else {
					throw new Error(todos.meta.message)
				}
			})
			.catch((error) => {
				USER.data = {};
				USER.error = error;
				USER.pending = false;
				USER.failed = true;
				dispatch({ type: 'USER', data: USER });
				return USER;
			});
	};
};

export const otp = (payload, headers) => {
	return (dispatch) => {
		const USER = {
			pending: true,
			failed: false,
			data: {},
		};
		dispatch({ type: 'USER', data: USER });
		return otpApi(payload, headers)
		.then((response) => response.json())
		.then((todos) => {
				if(todos.meta.code === 200) {
					USER.data = todos.data;
					USER.pending = false;
					USER.failed = false;
					dispatch({ type: 'USER', data: USER });
					return USER;
				} else {
					throw new Error(todos.meta.message)
				}
			})
			.catch((error) => {
				USER.data = {};
				USER.error = error;
				USER.pending = false;
				USER.failed = true;
				dispatch({ type: 'USER', data: USER });
				return USER;
			});
	};
};

export const forgotPassword = (payload, headers) => {
	return (dispatch) => {
		const USER = {
			pending: true,
			failed: false,
			data: {},
		};
		dispatch({ type: 'USER', data: USER });
		return forgotPasswordApi(payload, headers)
		.then((response) => response.json())
		.then((todos) => {
				if(todos.meta.code === 200) {
					USER.data = todos.data;
					USER.pending = false;
					USER.failed = false;
					dispatch({ type: 'USER', data: USER });
					return USER;
				} else {
					throw new Error(todos.meta.message)
				}
			})
			.catch((error) => {
				USER.data = {};
				USER.error = error;
				USER.pending = false;
				USER.failed = true;
				dispatch({ type: 'USER', data: USER });
				return USER;
			});
	};
};
