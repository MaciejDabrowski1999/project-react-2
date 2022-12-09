import React, {useState} from "react";
import Select from "./../Inputs/Select";



const Choose = ({onSelectChange}) => {
    const [currencyTable, setcurrencyTable] = useState([{ name: "EUR" }, { name: "USD" }, { name: "CHF" }])
    return(
    <section className="descripton">
        <p>Wybierz walutę i przelicz</p>
        <select className="selectValue inputStyle" id="currency" onChange={onSelectChange} >
        {
                    currencyTable.map((currencyTable) =>{return <Select key={currencyTable.name} currencyTable={currencyTable}/>}
                    )}
        </select>
    </section>
  )

}

export default Choose;