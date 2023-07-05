export const initialState = {
    id: '',
}

const CREATE_CASES = 'CASES';
const DELETE_CASE = 'DELETE_CASE';

export const casesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CASES:
            return {
                ...state,
                id: action.payload.data.data._id,
            }
        case DELETE_CASE:
            return {
                id: '',
            }
        default:
            return state;
    }
}

export const cases = (data) => {
    return {
        type: CREATE_CASES,
        payload: data,
    }
};

export const delete_case = () => {
    return {
        type: DELETE_CASE,
    }
};



