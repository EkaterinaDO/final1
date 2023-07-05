
export const initialState = [];

const USER_CASES = 'USER_CASES';
const CASES_CHANGE = 'CASES_CHANGE';

export const userCasesReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_CASES:
            return [
                ...action.payload,
            ]
            case CASES_CHANGE:
                return [
                    ...action.payload
                ]
        default:
            return state;
    }
}

export const user_cases = (data) => {
    return {
        type: USER_CASES,
        payload: data,
    }
};

export const cases_change = (data) => {
    return {
        type: CASES_CHANGE,
        payload: data
    }
};