import config from './config';

export const subscribeApi = (payload) => {
    return config.post('/subscribe_create', payload);
};

export const blogsApi = () => {
    return config.get('/getBlogs');
};

export const blogsCategoryApi = (payload) => {
    return config.get('/getCategories', payload);
};

export const blogsBySlugApi = (id) => {
    return config.get(`/getBlogsBySlug/${id}`);
};

export const blogsByCategorySlugApi = (id) => {
    return config.get(`/getBlogsBycategorySlug/${id}`);
};

export const blogsBySearchApi = (id) => {
    return config.get(`/getSearchBlog/${id}`);
};