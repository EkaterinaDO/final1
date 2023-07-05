export const user = localStorage.getItem("token");

const initialState = user
    ? {
        isAuthorization: true,
        isRegistered: true,
        user,
        message: '',
    }
    : {
        isAuthorization: false,
        isRegistered: false,
        user: null,
        message: '',
    }

const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
const SIGN_IN_FAILED = 'SIGN_IN_FAILED';
const LOG_OUT = 'LOG_OUT';


export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SIGN_UP_REQUEST:
            return {
                ...state,
                isAuthorization: false,
                user: null,
                message: '',
            }
        case SIGN_UP_SUCCESS:
            return {
                ...state,
                isAuthorization: false,
                isRegistered: true,
                message: '',
            }
        case SIGN_IN_REQUEST:
            return {
                ...state,
                isAuthorization: false,
                user: null,
                message: '',
            }
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                isAuthorization: true,
                isRegistered: true,
                user: action.payload,
                message: '',
            };
        case SIGN_IN_FAILED:
            return {
                ...state,
                isAuthorization: false,
                message: action.payload.response.data.message,
            };
        case LOG_OUT:
            return {
                ...state,
                isAuthorization: false,
                isRegistered: false,
                user: null,
                message: "",
            };
        default:
            return state
    }
}

export const signUpRequest = () => {
    return {
        type: SIGN_UP_REQUEST,
    }
};


export const signUpSuccess = () => {
    return {
        type: SIGN_UP_SUCCESS,
    }
};


export const signInRequest = () => {
    return {
        type: SIGN_IN_REQUEST,
    }
};

export const signInSuccess = (data) => {
    return {
        type: SIGN_IN_SUCCESS,
        payload: data
    }
};

export const signInFailed = (error) => {
    return {
        type: SIGN_IN_FAILED,
        payload: error
    }
};


export const logOut = () => {
    return {
        type: LOG_OUT,
    }
};