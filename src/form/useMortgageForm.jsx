import { useCallback } from 'react';
import { useMortgageAmount } from '../mortgageContext.jsx'
import { MortgageValidForm } from './MortgageFormValid.jsx';
import { MortgageFormCalculate } from '../MortgageCalculate.jsx';

export const useMortgageForm = () => {
    const { state, dispatch } = useMortgageAmount();

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        const errorsForm = MortgageValidForm(state);
        const hasErrors = Object.values(errorsForm).some(value => value === true);

        if (hasErrors) return dispatch({ type: "ERRORS", error: errorsForm })

        const result = MortgageFormCalculate(state.amount, state.term, state.rate, state.mortgageType);
        dispatch({ type: "RESULT", result });
    }, [state, dispatch]);

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        dispatch({
            type: 'UPDATE',
            field: name,
            value: value
        });
    }, [dispatch]);

    const handleMortgageType = useCallback((e) => {
        dispatch({
            type: "MORTGAGE_TYPE",
            payload: e.target.value,
        });
    }, [dispatch]);

    const handleReset = useCallback(() => {
        dispatch({ type: "CLEAR_ALL" });
    }, [dispatch]);

    return {
        state,
        handleSubmit,
        handleChange,
        handleMortgageType,
        handleReset,
    };
}
