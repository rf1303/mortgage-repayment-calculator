import { createContext, useContext, useReducer } from 'react';
import { mortgageReducer, initialState } from './mortgageFormReducer.jsx';

const MortgageContext = createContext();

export const MortgageProvider = ({ children }) => {
    const [state, dispatch] = useReducer(mortgageReducer, initialState);
    return (
        <MortgageContext.Provider value={{ state, dispatch }}>
            {children}
        </MortgageContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMortgageAmount = () => {
    const context = useContext(MortgageContext);
    if (!context) {
        throw new Error('Error en el uso de useMortgageAmount');
    }
    return context;
};
