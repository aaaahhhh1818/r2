import React from 'react';
import useCounter from "../../hooks/useCounter";

//스프링 할 때 서비스 느낌..?
const CountButtons = ({change}) => {

    return (
        <div>
            <button onClick={() => change(1)}>INC</button>
            <button onClick={() => change(-1)}>DEC</button>
        </div>
    );
};

export default CountButtons;