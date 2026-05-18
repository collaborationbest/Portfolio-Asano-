import React from 'react';
import { IntlProvider } from 'react-intl';

const langContext = React.createContext();


const LangProvider = ({ children }) => {

    return (
        <langContext.Provider value={{}}>
            <IntlProvider locale="en" messages={{}}>
                {children}
            </IntlProvider>
        </langContext.Provider>
    );
};

export { LangProvider, langContext };