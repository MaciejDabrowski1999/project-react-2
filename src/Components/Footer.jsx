import React, {useState} from "react";


const Footer = () => {
    
    return(
    <footer>
      <p>Najczęściej wybierane</p>
      <section className="foot">
        <button className="eur inputStyle" id="eur">EUR</button>
        <button className="usc inputStyle" id="usd">USD</button>
        <button className="chf inputStyle" id="chf">CHF</button>
      </section>
    </footer>
    )
};

export default Footer