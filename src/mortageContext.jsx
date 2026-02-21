import { createContext, useContext, useReducer } from 'react';
import { mortageReducer, initialState } from './mortageFormReducer.jsx';

const MortageContext = createContext();

export const MortageProvider = ({ children }) => {
    const [state, dispatch] = useReducer(mortageReducer, initialState);
    return (
        <MortageContext.Provider value={{ state, dispatch }}>
            {children}
        </MortageContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useMortageAmount = () => {
    const context = useContext(MortageContext);
    if (!context) {
        throw new Error('Error en el uso de useMortageAmount');
    }
    return context;
};
