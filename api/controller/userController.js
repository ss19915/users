const users = [];

const getAll = (onSuccess, onError) => {
    onSuccess(users);
};

const create = (payload, onSuccess, onError) => {
    users.push(payload);
    onSuccess(users[users.length-1]);
};

module.exports = {
    getAll,
    create,
};