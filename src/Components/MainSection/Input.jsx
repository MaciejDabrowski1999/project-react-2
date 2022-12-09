import React from "react";
import InputValue from "./../Inputs/InputValue";
import Button from "./../Inputs/Button";

let value;

const Input = () => {
 return(
    <section className="buttons">
        <p>Wpisz wartość</p>
        <InputValue onInputChange={(e)=> inpValue(e.target.value)}/>
        <Button />
      </section>
 )
}

const inpValue = (target) => {
  value=target;
  return value;
}

export default Input;
export {value};