
export const initialState = {
    amount: "",
    term: "",
    rate: "",
    mortageType: "",
    errorMortage: {},
    result: null,
}

export const mortageReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE":
            return {
                ...state,
                [action.field]: action.value,
                errorMortage: { ...state.errorMortage, [action.field]: false },
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
        case "MORTAGE_TYPE":
            return {
                ...state,
                mortageType: action.payload,
            };
        case "CLEAR_ALL":
            return initialState;
        default:
            return state;
    }
}
