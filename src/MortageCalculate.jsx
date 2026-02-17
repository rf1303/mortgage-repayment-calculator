import { useMortageAmount } from './mortageContext.jsx';

export const MortageFormCalculate = () => {
    const { state, dispatch } = useMortageAmount();

    const amountCalc = parseFloat(state.amount);
    const termCalc = parseFloat(state.term) * 12;
    const rateCalc = parseFloat(state.rate) / 100 / 12;

    if (state.mortageType === "repayment") {
        const monthly = (amountCalc * rateCalc * Math.pow(1 + rateCalc, termCalc)) / (Math.pow(1 + rateCalc, termCalc) - 1);
        const totalAmount = monthly * termCalc;
        const repayOver = totalAmount - amountCalc;
        console.log('monthly totalAmount reayOver:', monthly, totalAmount, repayOver)
        return { monthly, totalAmount, repayOver }
    } else {
        const monthly = amountCalc * termCalc;
        const totalAmount = monthly * rateCalc;
        const repayOver = monthly * termCalc;
        console.log('monthly totalAmount reayOver:', monthly, totalAmount, repayOver)
        return { monthly, totalAmount, repayOver }
    }
}
