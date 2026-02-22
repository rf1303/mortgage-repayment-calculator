import { useMortgageForm } from './useMortgageForm.jsx'
import { IconCalculator } from '../assets/IconsSvg.jsx'
import { FormInput } from './FormInput.jsx'
import { ErrorField } from './Error-field.jsx'


export const MortageForm = () => {
    const { state, handleSubmit, handleChange, handleMortgageType, handleReset } = useMortgageForm();

    return (
        <>
            <header className='flex flex-col items-start justify-start gap-2 md:flex-row md:justify-between'>
                <h1 className='text-slate-900 text-preset-2 font-bold capitalize'>mortgage calculator</h1>
                <button type='button' aria-label='Clear all form fields' className='btn__reset' onClick={handleReset}>clear all</button>
            </header>
            <form noValidate onSubmit={handleSubmit} className='grid gap-6'>
                <FormInput
                    label="mortgage amount"
                    id="amount"
                    name="amount"
                    value={state.amount}
                    onChange={handleChange}
                    error={state.errorMortgage?.amount}
                    min="1"
                    max="1000000000"
                    step="0.01"
                    prefix={{
                        content: "\u00A3",
                        className: `w-11 rounded-l-xl ${state.errorMortgage?.amount ? 'bg-red text-white' : 'bg-slate-100 text-slate-700'}`
                    }} />
                <div className={`grid gap-6 md:grid-cols-2 md:gap-6`}>
                    <FormInput
                        label="mortgage term"
                        id="term"
                        name="term"
                        value={state.term}
                        onChange={handleChange}
                        error={state.errorMortgage?.term}
                        min="1"
                        max="100"
                        step="1"
                        suffix={{
                            content: "years",
                            className: `w-20 rounded-r-xl ${state.errorMortgage?.term ? 'bg-red text-white' : 'bg-slate-100 text-slate-700'}`
                        }}
                    />
                    <FormInput
                        label="interest rate"
                        id="rate"
                        name="rate"
                        value={state.rate}
                        onChange={handleChange}
                        error={state.errorMortgage?.rate}
                        min="0"
                        max="100"
                        step="0.01"
                        suffix={{
                            content: "%",
                            className: `w-13 rounded-r-xl ${state.errorMortgage?.rate ? 'bg-red text-white' : 'bg-slate-100 text-slate-700'}`
                        }}
                    />
                </div>
                <fieldset className="grid gap-3" id='radio'>
                    <legend className='form__label mb-3'>mortgage type</legend>
                    <div className='inputs__radio'>
                        <input type="radio" name="mortgageType" value="repayment" checked={state.mortgageType === "repayment"} id="repayment" onChange={handleMortgageType} className='type__radio' />
                        <label htmlFor="repayment" className='text-slate-900 text-preset-3 font-bold leading-none'>repayment</label>
                    </div>
                    <div className='inputs__radio'>
                        <input type="radio" name="mortgageType" value="only" checked={state.mortgageType === "only"} id="only" onChange={handleMortgageType} className='type__radio' />
                        <label htmlFor="only" className='text-slate-900 text-preset-3 font-bold leading-none'>interest only</label>
                    </div>
                    {state.errorMortgage?.mortgageType && <ErrorField hasError={true} id="error-mortgageType" />}
                </fieldset>
                <button type='submit' className='flex items-center justify-center text-preset-4 text-slate-900 font-bold bg-lime py-3 mt-4 rounded-4xl capitalize cursor-pointer md:max-w-78 hover:bg-lime/60 focus-within:bg-lime/60 '>
                    <IconCalculator aria-hidden="true" /> calculate repayments
                </button>
            </form>
        </>
    );
}
