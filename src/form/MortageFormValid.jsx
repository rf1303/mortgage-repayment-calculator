import { useMortageAmount } from '../mortageContext.jsx';

export const MortageValidForm = (state) => {
    const errors = {};

    if (!state.amount || isNaN(state.amount) || +state.amount <= 0) errors.amount = true;

    if (!state.term || isNaN(state.term) || +state.term <= 0) errors.amount = true;

    if (!state.rate || isNaN(state.rate) || +state.rate <= 0) errors.rate = true;

    if (!state.mortageType) errors.mortageType = true;
    console.log('errors:', errors)
    return errors;
}
