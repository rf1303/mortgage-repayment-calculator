import { useMortageAmount } from './mortageContext.jsx'


export const MortageForm = () => {
    const [state, dispatch] = useMortageAmount();
    const handleSubmit = () => {
        console.log('state submit:', state)
        return
    }
    const handleChange = (e) => {
        const { amount, term, interestRate, repayment, intOnly } = e.target;
        console.log('e.target:', e.target)
    }
    return (
        <>
            <header className=''>
                <h1 className=''>mortage calculator</h1>
                <button type='reset' className=''>clear all</button>
            </header>
            <form onSubmit={handleSubmit} i className=''>
                <div className=''>
                    <label htmlFor="amount-id">mortage amount</label>
                    <div className=''>
                        <input type="number" aria-label='mortage amount' id='amount-id' name='amount-id' onChange={handleChange} />
                        <span className=''>&pound;</span>
                    </div>
                    <span className='error-amount'></span>
                </div>
                <div className=''>
                    <div className=''>
                        <label htmlFor="term-id">mortage term</label>
                        <div className=''>
                            <input type="number" aria-label='mortage term' id='term-id' name='term-id' onChange={handleChange} />
                            <span className=''>years</span>
                        </div>
                        <span className='error-term'></span>
                    </div>
                    <div className=''>
                        <label htmlFor="rate-id">interest rate</label>
                        <div className=''>
                            <input type="number" aria-label='interest rate' id='rate-id' name='rate-id' onChange={handleChange} />
                            <span className=''>%</span>
                        </div>
                        <span className='error-rate'></span>
                    </div>
                </div>
                <div className=''>
                    <h2 className=''>mortage type</h2>
                    <div className=''>
                        <input type="radio" name="repayment" id="repayment" />
                        <label htmlFor="repayment" className=''>repayment</label>
                    </div>
                    <div className=''>
                        <input type="radio" name="type" id="only" />
                        <label htmlFor="only" className=''>interest only</label>
                    </div>
                    <span className='error-radio'></span>
                </div>
            </form>
        </>
    );
}
