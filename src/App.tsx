import React, {useState} from 'react';
import './App.css';
import {FilterType, MoneyType, NewComponent} from "./tasks/task04/NewComponent";


function App() {


    const [money, setMoney] = useState<Array<MoneyType>>([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('All')
    let currentMoney = money;

    if (filter === 'Dollar') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'Dollars');
    }
    if (filter === 'Rubl') {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknots === 'RUBLS');
    }

    let onclickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton);


    }
    return (
        <div>
            <NewComponent currentMoney={currentMoney} callBack={onclickFilterHandler}/>
        </div>
    )
}

export default App;
