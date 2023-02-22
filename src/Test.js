import React, { Component } from 'react';

class Test extends Component {
    constructor() {
        super();
        this.state = {
            cars: [
                {id:1 , name: "BMW"},
                {id:2 , name: "Benz"},
                {id:3 , name: "Lamborgini"},
                {id:4 , name: "Chevrolete"}
            ]
        }
    }

    render() {
        return (
            <div>
                <h1>My Cars :</h1>
                {this.state.cars.map(car => <h2 key={car.id}>{car.name}</h2>)}
            </div>
        );
    }
}

export default Test;