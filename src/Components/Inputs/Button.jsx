import React from "react"
import {valueOption} from "./../Main"
import {value} from "../MainSection/Input"

let resultSum;
const url = "https://api.nbp.pl/api/exchangerates/rates/a/";

const Button = () =>{
    return(
        <button className="countsButton inputStyle" id="countsButton" onClick={fetchURL}>
        Przelicz
      </button>
    )
};

const DataLink= (rates) =>{
    let number = value*1;
    let currency = rates[0].mid;
    resultSum = number*currency;
    return resultSum;
};

const fetchURL = () => {
    fetch(url + valueOption)
      .then((response) => response.json())
      .then((data) => DataLink(data.rates))
      .catch((err) => console.error(err));
  };

export default Button;
export {resultSum}
