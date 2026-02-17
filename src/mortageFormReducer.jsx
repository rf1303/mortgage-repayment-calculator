
export const initialState = {
    amount: 0,
    term: 0,
    rate: 0,
    mortageType: '',
    errorMortage: {},
    result: null,
}

export const mortageReducer = (state, action) => {
    console.log('state - action:', state, action);
    switch (action.type) {
        case "UPDATE":
            return {
                ...state,
                [action.field]: action.value,
                errorMortage: { ...state.errorMortage, [action.field]: "" },
                result: null,
            };
        case "ERRORS":
            return {
                ...state, errorMortage: action.error
            };
        case "RESULT":
            return {
                ...state, result: action.result, errorMortage: {}
            };
        case "CLEAR_ALL":
            return initialState;
        default:
            return state;
    }
}
