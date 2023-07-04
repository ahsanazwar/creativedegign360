import {
    subscribeApi,
    blogsApi,
    blogsCategoryApi,
    blogsBySlugApi,
    blogsByCategorySlugApi,
    blogsBySearchApi,
} from '../apis/usersApis';


export const subscribe = (data) => {
    return (dispatch) => {
        const USER = {
            pending: true,
            failed: false,
            data: {},
        };
        dispatch({ type: 'USER', data: USER });
        return subscribeApi(data)
            .then((todos) => {
                USER.data = todos.data;
                USER.pending = false;
                USER.failed = false;
                dispatch({ type: 'USER', data: USER });
                return USER;
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

export const blogsGet = () => {
    return (dispatch) => {
        const USER = {
            pending: true,
            failed: false,
            data: false,
        };
        dispatch({ type: 'USER', data: USER });
        return blogsApi()
            .then((todos) => {
                USER.data = todos.data.data;
                USER.pending = false;
                USER.failed = false;
                dispatch({ type: 'USER', data: USER });
                return USER;
            })
            .catch((error) => {
                USER.data = false;
                USER.error = error;
                USER.pending = false;
                USER.failed = true;
                dispatch({ type: 'USER', data: USER });
                return USER;
            });
    };
};

export const blogsCategoryGet = (payload) => {
    return (dispatch) => {
        const USER = {
            pending: true,
            failed: false,
            data: false,
        };
        dispatch({ type: 'USER', data: USER });
        return blogsCategoryApi(payload)
            .then((todos) => {
                USER.data = todos.data.data;
                USER.pending = false;
                USER.failed = false;
                dispatch({ type: 'USER', data: USER });
                return USER;
            })
            .catch((error) => {
                USER.data = false;
                USER.error = error;
                USER.pending = false;
                USER.failed = true;
                dispatch({ type: 'USER', data: USER });
                return USER;
            });
    };
};

export const blogsDetailGet = (blodId) => {
    return (dispatch) => {
        const USER = {
            pending: true,
            failed: false,
            data: false,
        };
        dispatch({ type: 'USER', data: USER });
        return blogsBySlugApi(blodId)
            .then((todos) => {
                USER.data = todos.data.data;
                USER.pending = false;
                USER.failed = false;
                dispatch({ type: 'USER', data: USER });
                return USER;
            })
            .catch((error) => {
                USER.data = false;
                USER.error = error;
                USER.pending = false;
                USER.failed = true;
                dispatch({ type: 'USER', data: USER });
                return USER;
            });
    };
};

export const blogsByCategoryGet = (blodId) => {
    return (dispatch) => {
        const USER = {
            pending: true,
            failed: false,
            data: false,
        };
        dispatch({ type: 'USER', data: USER });
        return blogsByCategorySlugApi(blodId)
            .then((todos) => {
                USER.data = todos.data.data;
                USER.pending = false;
                USER.failed = false;
                dispatch({ type: 'USER', data: USER });
                return USER;
            })
            .catch((error) => {
                USER.data = false;
                USER.error = error;
                USER.pending = false;
                USER.failed = true;
                dispatch({ type: 'USER', data: USER });
                return USER;
            });
    };
};

export const blogsBySearchGet = (blodId) => {
    return (dispatch) => {
        const USER = {
            pending: true,
            failed: false,
            data: false,
        };
        dispatch({ type: 'USER', data: USER });
        return blogsBySearchApi(blodId)
            .then((todos) => {
                USER.data = todos.data.data;
                USER.pending = false;
                USER.failed = false;
                dispatch({ type: 'USER', data: USER });
                return USER;
            })
            .catch((error) => {
                USER.data = false;
                USER.error = error;
                USER.pending = false;
                USER.failed = true;
                dispatch({ type: 'USER', data: USER });
                return USER;
            });
    };
};

