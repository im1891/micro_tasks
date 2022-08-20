import React from "react";

export type FilterType = 'All' | 'Rubl' | 'Dollar';

export type MoneyType = {
    banknots: string,
    value: number,
    number: string
}

type PropsType = {
    currentMoney: MoneyType[],
    callBack: (nameButton: FilterType) => void,
}


export const NewComponent = (props: PropsType) => {

    return (
        <div className="App">


            <ul>

                {props.currentMoney.map((cash, i) => <li key={i}>
                    <span>{cash.banknots}</span><span>{cash.value}</span><span>{cash.number}</span></li>)}
            </ul>

            <button onClick={() => props.callBack('All')}>all</button>
            <button onClick={() => props.callBack('Rubl')}>rubles</button>
            <button onClick={() => props.callBack('Dollar')}>dollars</button>


        </div>
    )
}
