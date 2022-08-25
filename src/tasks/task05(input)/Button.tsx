import React from 'react';

type PropsType = {
    name: string
    callBack: () => void

}

const Button = (props: PropsType) => {

    const onclickButtonHandler = () => {
        props.callBack()
    }
    return (

        <button onClick={onclickButtonHandler}>{props.name}</button>

    );
};

export default Button;