import React from 'react';

type PropsType = {
    inputMessage: string
    changeInputMessage: (message: string) => void

}

const Input = (props: PropsType) => {


    const onChangeButtonHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.changeInputMessage(event.currentTarget.value);
    }

    return (

        <input type="text" onChange={onChangeButtonHandler} value={props.inputMessage}/>

    );
};

export default Input;