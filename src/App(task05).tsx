import React, {useState} from "react";
import Input from "./tasks/task05(input)/Input";
import Button from "./tasks/task05(input)/Button";

type MessageType = {
    message: string
}

function AppTask05() {
    let [messages, setMessage] = useState<MessageType[]>([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ])

    let [inputMessage, setInputMessage] = useState('')

    const changeInputMessage = (message: string) => {
        setInputMessage(message);
    }

    const addNewMessage = () => {
        setMessage([{message: inputMessage}, ...messages])
        setInputMessage('');

    }
    return (
        <div className='App'>
            {/*   <FullInput addNewMessage={addNewMessage}/>*/}
            <Input changeInputMessage={changeInputMessage} inputMessage={inputMessage}/>
            <Button callBack={addNewMessage} name={'+'}/>
            {messages.map((m, i) => <div key={i}>{m.message}</div>)}
        </div>
    )
}

export default AppTask05;

