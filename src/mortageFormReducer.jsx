
export const initialState = {
    amount: 0,
    term: 0,
    interestRate: 0,
    mortageType: '',
    errorMortage:{
        errorAmount: false,
        errorTerm: false,
        errorRate: false,
        errorType: false,
    },
    result: null,
}

export const mortageReducer = (state, action) => {
    console.log('state:', state);
    console.log('action:', action)
}
