import { useMortageAmount } from './mortageContext.jsx'

export const YourResults = () => {
    const { state, dispatch } = useMortageAmount();

    return (
        <>
            <header className="grid gap-4 ">
                <h3 className="text-white text-preset-2 font-bold">Your result</h3>
                <p className="text-slate-300 text-preset-4 font-medium">
                    Your results are shown below based on the information you provided.
                    To adjust the results, edit the form and click “calculate repayments” again.
                </p>
            </header>
            <section className="bg-slate-950/25 rounded-xl py-6 px-4 divide-y divide-slate-200/45 grid gap-4 shadow-xl shadow-slate-950/30">
                <div className="grid gap-2 pb-4">
                    <span className="text-slate-300 text-preset-4 font-medium">Your monthly repayments</span>
                    <p className="text-preset-1 text-lime font-bold leading-none">&pound; {`1,777.000`}</p>
                </div>
                <div className="grid gap-2">
                    <span className="text-slate-300 text-preset-4 font-medium">Total you'll repay over the term
                        <p className="text-white text-preset-2 font font-bold">&pound; {`539,333.90`}</p>
                    </span>
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

