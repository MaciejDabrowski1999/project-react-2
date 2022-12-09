import React from "react";

const InputValue = ({onInputChange}) =>{
    return(
        <input type="number" className="inputValue inputStyle" id="inputValue" onChange={onInputChange}/>
    )
}

export default InputValue