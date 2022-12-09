import React from "react";
import Choose from "./MainSection/Choose";
import Input from "./MainSection/Input";
import Result from "./MainSection/Result";


let valueOption;

const Main = () => {

    return(
        <main className="blur">
            <Choose onSelectChange={(e) => option(e.target.value)}/>
            <Input />
            <Result />
        </main>
    )

};

const option = (target) => {
    valueOption = target
    return valueOption;
}

export default Main;
export {valueOption}

