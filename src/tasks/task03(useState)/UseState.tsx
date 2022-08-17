import React, {useState} from "react";

export const UseState = () => {
    let [a, setA] = useState(1);

    const onclickHandler1 = () => {
        setA(++a);
    }

    const onClickHandler2 = () => {
        setA(a = 0);
    }

    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onclickHandler1}>+</button>
            <button onClick={onClickHandler2}>0</button>
        </div>
    )
}