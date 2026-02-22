
export const initialState = {
    amount: "",
    term: "",
    rate: "",
    mortgageType: "",
    errorMortgage: {},
    result: null,
}

export const mortageReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE":
            return {
                ...state,
                [action.field]: action.value,
                errorMortgage: { ...state.errorMortgage, [action.field]: false },
                result: null,
            };
        case "ERRORS":
            return {
                 ...state, errorMortgage: action.error
            };
        case "RESULT":
            return {
                ...state, result: action.result, errorMortgage: {}
            };
        case "MORTGAGE_TYPE":
            return {
                ...state,
                mortgageType: action.payload,
                result: null,
            };
        case "CLEAR_ALL":
            return initialState;
        default:
            return state;
    }
}
