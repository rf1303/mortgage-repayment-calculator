export const mortageValue = {
    amount: 0,
    term: 0,
    interestRate: 0,
    repaymanet: false,
    intOnly: false,
}

export const mortageReducer = (state, action) => {
    console.log('state:', state);
    console.log('action:', action)
}
