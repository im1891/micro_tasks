import React from "react";

type ButtonPropsType = {
    title: string,
    callBack: () => void,
}

export const Button = (props: ButtonPropsType) => {

    const onclickHandler = () => {
        props.callBack();
    }
    return (
        <button onClick={onclickHandler}>{props.title}</button>
    )
}