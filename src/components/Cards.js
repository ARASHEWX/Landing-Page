import React, { Component } from "react";
import styles from "./Cards.module.css";
import Card from "./Card";
import kamaro from "../images/car-american-1.jpeg";
import lamborgini from "../images/car-american-2.jpeg";
import mustang from "../images/car-american-3.jpeg";
import ferari from "../images/car-american-4.jpeg";

class Cards extends Component {
    constructor() {
        super();
        this.state = {
            carsData: [
                { id: 1, image: kamaro, name: "Kamaro", cost: "5000 $" },
                { id: 2, image: lamborgini, name: "Lamborgini", cost: "8000 $" },
                { id: 3, image: mustang, name: "Mustang", cost: "9000 $" },
                { id: 4, image: ferari, name: "Ferari", cost: "10000 $" }
            ]
        }
    }
    render() {
        return (
            <div className={styles.container}>
                {/* <Card image={kamaro} name="Kamaro" cost="5000 $" />
                <Card image={lamborgini} name="Lamborgini" cost="8000 $" />
                <Card image={mustang} name="Mustang" cost="9000 $" />
                <Card image={ferari} name="Ferari" cost="10000 $" /> */}
                {this.state.carsData.map(car => <Card key={car.id} image={car.image} name={car.name} cost={car.cost} />)}
            </div>
        );
    }
}

export default Cards;