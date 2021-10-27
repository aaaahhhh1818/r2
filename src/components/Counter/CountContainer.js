import React from 'react';
import useCounter from "../../hooks/useCounter";
import CountButtons from "./CountButtons";

const CountContainer = () => {

    const {num, change} = useCounter()

    return (
        <div>
            <h1>{num}</h1>
            <CountButtons change={change}></CountButtons>
        </div>
    );
};

export default CountContainer;