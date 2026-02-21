import { IllustrationEmpty } from './assets/IconsSvg.jsx';
import { useMortageAmount } from './mortageContext.jsx'

export const YourResults = () => {
    const { state } = useMortageAmount();
    const { result } = state;

    if (!result) {
        return (
            <div className='grid place-items-center gap-4 lg:max-h-100'>
                <div className="w-48 h-48">
                    <IllustrationEmpty />
                </div>
                <header className="grid place-items-center gap-4 ">
                    <h3 className="text-white text-preset-2 font-bold">Results shown here</h3>
                    <p className="text-slate-200 text-preset-4 text-center font-medium"> Complete the form and click “calculate repayments” to see what
                        your monthly repayments would be.
                    </p>
                </header>
            </div>
        );
    }

    return (
        <>
            <header className="grid gap-4 ">
                <h3 className="text-white text-preset-2 font-bold">Your result</h3>
                <p className="text-slate-200 text-preset-4 font-medium">
                    Your results are shown below based on the information you provided.
                    To adjust the results, edit the form and click "calculate repayments" again.
                </p>
            </header>
            <section className="bg-slate-950/25 rounded-xl py-6 px-4 grid items-center justify-items-start gap-4 shadow-xl shadow-slate-950/30 lg:w-full lg:h-full">
                <div className="max-h-20.5 grid gap-2 md:max-h-25.5">
                    <span className="text-slate-200 text-preset-4 font-medium leading-none">Your monthly repayments</span>
                    <p className="text-preset-1 text-lime font-bold leading-none md:text-[3.5rem] ">&pound;{result.monthly.toFixed(2)}</p>
                </div>
                <div className="h-px bg-white"></div>
                <div className="grid gap-2">
                    <span className="text-slate-200 text-preset-4 font-medium">Total you'll repay over the term</span>
                    <p className="text-white text-preset-2 font-bold">&pound;{result.totalAmount.toFixed(2)}</p>
                </div>
            </section>
        </>
    );
}

/* < !--Empty results start-- > */

//   Results shown here
//
// Complete the form and click “calculate repayments” to see what
// your monthly repayments would be.

// < !--Empty results end-- >
//
// < !--Completed results start-- >
//
//   Your results
//
// Your results are shown below based on the information you provided.
// To adjust the results, edit the form and click “calculate repayments” again.

// Your monthly repayments
//
// Total you'll repay over the term
//
//   < !--Completed results end-- >

