import React from "react";

export type CarType = {
    manufacturer: string,
    model: string,
}

type TopCarsPropsType = {
    cars: CarType[]
}

export const TopCars = (props: TopCarsPropsType) => {

    let cars = props.cars.map((car, i) => <tr key={i}>
        <td>{car.manufacturer}</td>
        <td>{car.model}</td>
    </tr>)

    return (
        <div>
            <table>
                <tr>
                    <th>Car</th>
                    <th>Model</th>
                </tr>
                {cars}
            </table>
        </div>
    )
}