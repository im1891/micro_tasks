import React from "react";

export type FilterType = 'All' | 'Rubl' | 'Dollar';

export type MoneyType = {
    banknots: string,
    value: number,
    number: string
}

type PropsType = {
    currentMoney: MoneyType[],
    callBack1: (nameButton: FilterType) => void,
}


export const NewComponent = (props: PropsType) => {

    return (
        <div className="App">


            <ul>
                {/*
                {cash.map((cashElement: any) => <li>
                    <span>{cashElement.banknots}</span><span>{cashElement.value}</span><span>{cashElement.number}</span>
                </li>)}*/}
                {props.currentMoney.map((cash, i) => <li key={i}>
                    <span>{cash.banknots}</span><span>{cash.value}</span><span>{cash.number}</span></li>)}
            </ul>

            <button onClick={() => props.callBack1('All')}>all</button>
            <button onClick={() => props.callBack1('Rubl')}>rubles</button>
            <button onClick={() => props.callBack1('Dollar')}>dollars</button>

            {/*  <button onClick={(event: any) => onClickFilterHandler(event.target.innerHTML)}>All</button>
            <button onClick={(event: any) => onClickFilterHandler(event.target.innerHTML)}>Dollars</button>
            <button onClick={(event: any) => onClickFilterHandler(event.target.innerHTML)}>Rubls</button>
*/}
        </div>
    )
}
