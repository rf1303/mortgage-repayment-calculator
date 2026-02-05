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
                    <label htmlFor="amountId">mortage amount</label>
                    <div className=''>
                        <input type="number" aria-label='mortage amount' name='amountId' onChange={handleChange} />
                        <span className=''>&pound;</span>
                    </div>
                    <span className=''>this field is required</span>
                </div>
                <div className=''>
                    <div className=''>
                        <label htmlFor="termId">mortage term</label>
                        <div className=''>
                            <input type="number" aria-label='mortage term' name='termId' onChange={handleChange} />
                            <span className=''>years</span>
                        </div>
                        <span className=''>this field is required</span>
                    </div>
                    <div className=''>
                        <label htmlFor="rateId">interest rate</label>
                        <div className=''>
                            <input type="number" aria-label='interest rate' name='rateId' onChange={handleChange} />
                            <span className=''>%</span>
                        </div>
                        <span className=''>this field is required</span>
                    </div>
                </div>
                <div className=''>
                    <h2 className=''>mortage type</h2>

                </div>
            </form>
        </>
    );
}
