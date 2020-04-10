import React, {createContext, useReducer} from 'react';
import {formReducer, initialFormState} from '../reducers/FormReducer';

export const DocumentContext = createContext();

export const DocumentContextProvider = props => {
    const [formState, formDispatch] = useReducer(formReducer, initialFormState);

    return (
        <DocumentContext.Provider value = {{
            formState,
            formDispatch,
        }}>
            {props.children}
        </DocumentContext.Provider>
    );
}