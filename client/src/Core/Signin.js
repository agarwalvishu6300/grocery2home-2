import React from "react";
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
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

      <input type="submit" />
    </form>
  );
}
