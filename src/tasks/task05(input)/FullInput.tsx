import React, {useState} from 'react';

type PropsType = {
    addNewMessage: (message: string) => void
}

function FullInput(props: PropsType) {
    let [inputMessage, setInputMessage] = useState('');

    const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputMessage(event.currentTarget.value);
    }

    const onclickButtonHandler = () => {
        props.addNewMessage(inputMessage)
        setInputMessage('');
    }

    return (

        <div>
            <input onChange={onChangeInputHandler} value={inputMessage}/>
            <button onClick={onclickButtonHandler}>+</button>
        </div>

    )
}

export default FullInput;