import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Mycontext } from "./Main";
export default function App() {
  const { register, handleSubmit, watch, errors } = useForm();

  const content = useContext(Mycontext);
  const onSubmit = data => {
    //console.log(data);
    content.change({type : "SIGNIN" , payload : data});
  }
  //console.log("hello");

  //console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div>
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
    {/* register your input into the hook by invoking the "register" function */}
    <input name="Name" placeholder="Name" ref={register({ required: true, maxlength:20 })} />
    <br/>
      {errors.Name && "This field is required"}
      <br/>
      {/* include validation with required or other standard HTML validation rules */}
      <input name="Contact" type="tel" placeholder="0123456789" pattern="[0-9]{10}" ref={register({required: true})} />
      {/* errors will return when field validation fails  */}
      <br/>
      {errors.Contact && "This field is required"}
      <br/>
      <input name="Address" placeholder="Address" ref={register({ required: true })} />
      {/* errors will return when field validation fails  */}
      <br/>
      {errors.Address && "This field is required"}
      <br/>
      <button type="submit">SUBMIT</button>
    </form>

    <h1>here next is , {content.value.next}</h1>
    <button onClick = {()=>{content.change({type : "ADD"})}}> NEXT </button>
    <button onClick = {()=>{content.change({type : "SUB"})}}> BACK </button>


    <h1>Your Name is: {content.value.name}</h1>
    <h1>Address : {content.value.address}</h1>
    <h1>Contact No : {content.value.contact}</h1>





    </div>

  );
}
