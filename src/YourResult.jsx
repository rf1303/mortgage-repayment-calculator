

export const YourResults = () => {

    return (
        <aside className="bg-slate-900 ">
            <header className="grid gap-4">
                <h3 className="text-white text-preset-2 font-bold">Your result</h3>
                <p className="text-slate-300 text-preset-4 font-medium">
                    Your results are shown below based on the information you provided.
                    To adjust the results, edit the form and click “calculate repayments” again.
                </p>
            </header>
            <section className="bg-slate-950 rounded-xl ">
                <div>
                    <span>Your monthly repayments</span>
                    <p>&pound;{`1,777.000`}</p>
                </div>
                <div>
                    <span>Total you'll repay over the term
                        <p>&pound;{`539,333.90`}</p>
                    </span>
                </div>
            </section>
        </aside>
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

