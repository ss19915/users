import API from './api';

const userEndpoint = '/users';

export const getAll = () => {
    return API.get(userEndpoint);
};

export const create = (payload) => {
    return API.post(userEndpoint, payload);
};