import React, { useState, useReducer, useContext, createContext } from "react";
import Order from './Order';
import Product from './Product';
import Signin from './Signin';



//const [next , setNext] = useState(2);

   export const  Mycontext = createContext();

    const iState = {
        next : 0,
        name : "",
        address : "",
        contact : "",
    }
    const reducer = (state , action) => {
        const {next , name , address , contact } = state
        switch(action.type){
            case 'ADD': 
            {
                return {
                    ...state,
                    next : next+1
                }
            }
            case 'SUB' : 
            {
                return {
                    ...state ,
                    next : next-1
                }
            }
            case 'SIGNIN' : 
            {
                return {
                    ...state , 
                    name: action.payload.Name,
                    address : action.payload.Address,
                    contact : action.payload.Contact
                }
            }
            default : return state
        }
    }
const Main = () =>
{
    const [data , dispatch] = useReducer(reducer, iState);
    if(data.next ==0 )
    {
        return(
            <Mycontext.Provider value = {{value : data , change : dispatch}}>
                <Signin />
            </Mycontext.Provider>
        )
    }
    else if(data.next == 1)
    {
        return (
            <Mycontext.Provider value = {{value : data , change : dispatch}}>
                <Product />
            </Mycontext.Provider>
        )
    }
    else if(data.next == 2)
    {
         return (
            <Mycontext.Provider value = {{value : data , change : dispatch}}>
            <Order />
            </Mycontext.Provider>
        )
    }
};
export default Main;