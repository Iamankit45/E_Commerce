import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productcontex";
import reducer from "../reducer/filterReducer";
const FilterContext = createContext();

const initialState={

    filter_products:[],
    all_products:[],

};

export const FilterContextProvider = ({ children }) => {

    const { products } = useProductContext();
   
    const[state,dispatch]=useReducer(reducer,initialState);

    useEffect(()=>{
      dispatch({type:"LOAD_FILTER_PRODUCTS",payload:products})

    },[products])


    return (<FilterContext.Provider value={{ ...state }}>{children}</FilterContext.Provider>);
};

//custom hook bana rhe h

export const useFilterContext = () => {
    return useContext(FilterContext);
};
