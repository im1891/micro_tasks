import React from 'react';

import './App.css';
import {Button} from "./tasks/task02(button)/Button";


function App() {

    const foo1 = (name: string, age: number, address: string) => {
        console.log(`Hello, I\'m ${name}, my age ${age}, from ${address}`);
    }
    const foo2 = (name: string, age: number, address: string) => {
        console.log(`Hello, I\'m ${name}, my age ${age}, from ${address}`);
    }

    const foo3 = () => {
        console.log('Hello, I\'m stupid button');
    }


    return (
        <div className="App">
            <Button title='Кнопка-1' callBack={() => foo1('Vasya', 21, 'Minsk')}/>
            <Button title='Кнопка-2' callBack={() => foo2('Petya', 32, 'Kiev')}/>
            <Button title='Stupid button' callBack={foo3}/>
        </div>
    );
}

export default App;
