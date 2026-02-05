import { createContext, useContext, useReducer } from 'react';
import { mortageReducer, mortageValues } from './mortageFormReducer.jsx';

const MortageContext = createContext();

export const MortageProvider = ({ children }) => {
    const [state, dispatch] = useReducer(mortageReducer, mortageValues);
    return (
        <MortageContext.Provider value={{ state, dispatch }}> 
        { children }
        </MortageContext.Provider>
    );
};
export const useMortageAmount = () => {
    const context = useContext(MortageContext);
    if (!context) {
        throw new Error('Error en el uso de useMortageAmount');
    }
    return context;
};
