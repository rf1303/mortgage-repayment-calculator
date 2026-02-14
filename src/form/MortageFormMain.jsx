import { useMortageAmount } from '../mortageContext.jsx'
import { IconCalculator } from '../assets/IconsSvg.jsx'
import { ErrorField } from './Error-field.jsx'


export const MortageForm = () => {
    const [state, dispatch] = useMortageAmount();
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('state submit:', state)
        return (
        <div></div>
        );
    }
    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log('name:', name);
        console.log('value:', value);
        dispatch({
            type:'UPDATE_FIELD',
            field: name,
            value: value
        });
    }


    return (
        <>
            <header className='bg-amber-700'>
                <h1 className=''>mortage calculator</h1>
                <button type='reset' className=''>clear all</button>
            </header>
            <form onSubmit={handleSubmit}  className=''>
                <div className=''>
                    <label htmlFor="amount">mortage amount</label>
                    <div className=''>
                        <input type="number" aria-label='mortage amount' id='amount' name='amount' value={state.amount} onChange={handleChange} />
                        <span className=''>&pound;</span>
                    </div>
                    <ErrorField e={`cv`} />
                </div>
                <div className=''>
                    <div className=''>
                        <label htmlFor="term">mortage term</label>
                        <div className=''>
                            <input type="number" aria-label='mortage term' id='term' name='term' value={state.amount} onChange={handleChange} />
                            <span className=''>years</span>
                        </div>
                        <span className='error' id='error-term' aria-hidden="true"></span>
                    </div>
                    <div className=''>
                        <label htmlFor="rate">interest rate</label>
                        <div className=''>
                            <input type="number" aria-label='interest rate' id='rate' name='rate' value={state.amount} onChange={handleChange} />
                            <span className=''>%</span>
                        </div>
                        <span className='error' id="error-rate" aria-hidden="true"></span>
                    </div>
                </div>
                <fieldset className='' id='radio'>
                    <legend className=''>mortage type</legend>
                    <div className=''>
                        <input type="radio" name="type" value="repayment" id="repayment" />
                        <label htmlFor="repayment" className=''>repayment</label>
                    </div>
                    <div className=''>
                        <input type="radio" name="type" value="only" id="only" />
                        <label htmlFor="only" className=''>interest only</label>
                    </div>
                    <span className='error' id='error-radio' aria-hidden="true"></span>
                </fieldset>
                <button type='submit' className=''><IconCalculator /> calculate repayments</button>
            </form>
        </>
    );
}
