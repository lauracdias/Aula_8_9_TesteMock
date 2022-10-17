const create = {
    marca: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const update = {
    modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
    ano: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const get = {
    modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

const deleteBy = {
    modelo: {
        presence: {
            allowEmpty: false,
        },
        type: 'string',
    },
};

module.exports = {
    update,
    create,
    get,
    deleteBy,
};