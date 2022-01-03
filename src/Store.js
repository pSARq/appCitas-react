import React, { useReducer, createContext } from 'react';
import Reducer from './Redux/Reducer';

const initialState = {
    citas: {
        elements: []
    },
    mensage: {}
};
const Store = createContext(initialState);

function reducer(state, action) {
    console.log("dispatch => ", action.type)
    
    return Reducer()[action.type] 
        ? Reducer()[action.type](state, action) 
        : state;
}

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return <Store.Provider value={{ state, dispatch }}>
        {children}
    </Store.Provider>
};

export default Store;