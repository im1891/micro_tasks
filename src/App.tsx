import React from 'react';

import './App.css';
import {CarType, TopCars} from "./tasks/task01/TopCars";

const topCars: Array<CarType> = [
    {manufacturer: 'BMW', model: 'm5cs'},
    {manufacturer: 'Mercedes', model: 'e63s'},
    {manufacturer: 'Audi', model: 'rs6'}
]

function App() {

    return (
        <div className="App">
            <TopCars cars={topCars}/>
        </div>
    );
}

export default App;
