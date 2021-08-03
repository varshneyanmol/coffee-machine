const errorCodes = require('./errorCodes');

class CustomError extends Error {
    constructor(message, name, errorCode) {
        super(message);
        this.errorCode = errorCode;
        this.name = name;
    }

    serializeError() {
        return {
            state: 'error',
            errorCode: this.errorCode || errorCodes.unknown,
            name: this.name || 'Error',
            message: this.message || 'Some Error Occurred',
        };
    }
}


class BadRequestError extends CustomError {
    constructor(message) {
        super(message, 'BadRequestError', errorCodes.badRequest);
    }
}

class InsufficientMaterialError extends CustomError {
    constructor(message) {
        super(message, 'InsufficientMaterialError', errorCodes.insufficientMaterial);
    }
}

class UnknownError extends CustomError {
    constructor(message = 'Some Error Occurred') {
        super(message, 'Error', errorCodes.unknown);
    }
}

class InternalServerError extends CustomError {
    constructor(message = 'Internal Server Error') {
        super(message, 'InternalServerError', errorCodes.internal);
    }
}

class InvalidParamError extends CustomError {
    constructor(message) {
        super(message, 'InvalidParamError', errorCodes.invalidParam);
    }
}

module.exports = {
    BadRequestError,
    InsufficientMaterialError,
    InternalServerError,
    InvalidParamError,
    UnknownError,
};