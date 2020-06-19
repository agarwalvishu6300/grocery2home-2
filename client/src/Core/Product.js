import React, { useContext, useEffect, useState } from 'react';
import { Mycontext } from './Main';
import {getCategories , getProducts} from './corehelper.js';


const Products = () => 
{

    const [values , setValues] = useState({
        categories : [] ,
        products : [],
        selectedValues : [],
        error : "",
    });

    const {categories , products , selectedValues , error} = values;

    const preloadcategories = () => {
        getCategories()
        .then(data => {
            if(data)
            {
                setValues({...values , categories : data });
            }
        })
    }

    const preloadproducts = () => { 
        getProducts()
        .then(data => {
            if(data)
            {
                setValues({...values , products : data});
            }
        })
    }


    useEffect(()=> {
        preloadcategories();
        preloadproducts();
    } , []);

    console.log(categories);
    console.log(products);


    const data = useContext(Mycontext);
    return (
        <div>
            <h1> this is product page </h1>
            <h1>here next is , {data.value.next}</h1>
            <button onClick = {()=>{data.change({type : "ADD"})}}> change </button>
            <button onClick = {()=>{data.change({type : "SUB"})}}> change </button>
        </div>
    )
}

export default Products;
