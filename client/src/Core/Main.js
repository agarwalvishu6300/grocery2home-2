import React, { useState } from "react";
// import Order from './Order';
import Product from './Product';
import Signin from './Signin';
const Main = () =>
{
    const [next , setNext] = useState(0);

    if(next ==0 )
    {
        return(
            <Signin />
        )
    }
    // else if(next == 1)
    // {
    //     return (
    //         <Product />
    //     )
    // }
    // else if(next == 3)
    // {
    //     return (
    //         <Order />
    //     )
    // }
};
export default Main;