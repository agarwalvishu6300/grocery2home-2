import React , {useState, useContext} from "react";
import { Mycontext } from "./Main";




const Order = () => {

const data = useContext(Mycontext);
    return (
        <div>
            <h1>This is order page.</h1>
            <h1>here next is , {data.value.next}</h1>
            <button onClick = {()=>{data.change({type : "SUB"})}}> change </button>
        </div>
    )
}
export default Order ;