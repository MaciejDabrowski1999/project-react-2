import React from "react";

const Header = () =>{
    return(
    <header>
        <h1 className="head">Przelicznik walut</h1>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#d4d4d4"
            className="bi bi-cash"
            viewBox="0 0 16 16"
            width="33%"
            >
            <path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
            <path
            d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V4zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2H3z"
            />
        </svg>
    </header>
        )
};

export default Header