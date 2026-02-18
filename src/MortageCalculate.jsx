export const MortageFormCalculate = (amount, term, rate, mortageType) => {
    const amountCalc = Number(amount);
    const termCalc = Number(term) * 12;
    const rateCalc = Number(rate) / 100 / 12;

    if (mortageType === "repayment") {
        const monthly = (amountCalc * rateCalc * Math.pow(1 + rateCalc, termCalc)) / (Math.pow(1 + rateCalc, termCalc) - 1);
        const totalAmount = monthly * termCalc;
        const repayOver = totalAmount - amountCalc;
        return { monthly, totalAmount, repayOver }
    } else {
        const monthly = amountCalc * rateCalc;
        const totalAmount = monthly * termCalc + amountCalc;
        const repayOver = monthly * termCalc;
        return { monthly, totalAmount, repayOver }
    }
}
