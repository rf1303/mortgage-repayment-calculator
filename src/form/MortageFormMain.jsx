import { useMortageAmount } from '../mortageContext.jsx'
import { IconCalculator } from '../assets/IconsSvg.jsx'
import { MortageValidForm } from './MortageFormValid.jsx';
import { ErrorField } from './Error-field.jsx'
import { MortageFormCalculate } from '../MortageCalculate.jsx';


export const MortageForm = () => {
    const { state, dispatch } = useMortageAmount();
    const handleSubmit = (e) => {
        e.preventDefault();
        const errorsForm = MortageValidForm(state);
        const hasErrors = Object.values(errorsForm).some(value => value === true);

        if (hasErrors) return dispatch({ type: "ERRORS", errorsForm })

        const result = MortageFormCalculate(state.amount, state.term, state.rate, state.mortageType);
        console.log('result:', result)
        dispatch({ type: "RESULT", result });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: 'UPDATE',
            field: name,
            value: value
        });
    }

    const handleMortageType = (e) => {
        dispatch({
            type: "MORTAGE_TYPE",
            payload: e.target.value,
        });
    }

    return (
        <>
            <header className='flex flex-col items-start justify-start '>
                <h1 className='text-slate-900 text-preset-2 font-bold capitalize'>mortage calculator</h1>
                <button type='reset' className='text-slate-700 text-preset-4 '>clear all</button>
            </header>
            <form onSubmit={handleSubmit} className='grid gap-6'>
                <div className='grid gap-3'>
                    <label htmlFor="amount" className='form__label'>mortage amount</label>
                    <div className='label__inputs justify-start'>
                        <span className='input__items rounded-l-xl'>&pound;</span>
                        <input type="number" aria-label='mortage amount' id='amount' name='amount' value={state.amount} onChange={handleChange} className='inputs__preset' />
                    </div>
                    {/* <ErrorField e={`cv`} /> */}
                </div>
                <div className='grid gap-6'>
                    <div className='grid gap-3'>
                        <label htmlFor="term" className='form__label' >mortage term</label>
                        <div className='label__inputs justify-between'>
                            <input type="number" aria-label='mortage term' id='term' name='term' value={state.term} onChange={handleChange} className='inputs__preset' />
                            <span className='input__items rounded-r-xl'>years</span>
                        </div>
                        <span className='error sr-only' id='error-term' aria-hidden="true"></span>
                    </div>
                    <div className='grid gap-3'>
                        <label htmlFor="rate" className='form__label'>interest rate</label>
                        <div className='label__inputs justify-between'>
                            <input type="number" aria-label='interest rate' id='rate' name='rate' value={state.rate} onChange={handleChange} className='inputs__preset' />
                            <span className='input__items rounded-r-xl'>%</span>
                        </div>
                        <span className='error sr-only' id="error-rate" aria-hidden="true"></span>
                    </div>
                </div>
                <fieldset className='grid gap-3' id='radio'>
                    <legend className='form__label mb-3'>mortage type</legend>
                    <div className='inputs__radio'>
                        <input type="radio" name="mortageType" value="repayment" checked={state.mortageType === "repayment"} id="repayment" onChange={handleMortageType} className='type__radio' />

                        <label htmlFor="repayment" className='text-slate-900 text-preset-3 font-bold leading-none'>repayment</label>
                    </div>
                    <div className='inputs__radio'>
                        <input tabIndex="0" type="radio" name="mortageType" value="only" checked={state.mortageType === "only"} id="only" onChange={handleMortageType} className='type__radio' />
                        <label htmlFor="only" className='text-slate-900 text-preset-3 font-bold leading-none'>interest only</label>
                    </div>
                    <span className='error sr-only' id='error-radio' aria-hidden="true"></span>
                </fieldset>
                <button type='submit' className='flex items-center justify-center text-preset-4 text-slate-900 font-bold bg-lime py-3 rounded-4xl capitalize'><IconCalculator /> calculate repayments</button>
            </form>
        </>
    );
}
