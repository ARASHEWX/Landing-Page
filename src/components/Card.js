import React, { Component } from "react";
import styles from "./Card.module.css";
import arrowUp from "../images/arrow-up.png";
import arrowDown from "../images/arrow-down.png";

class Card extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }

    upHandler = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1
        }))
    }

    downHandler = () => {
        if (this.state.counter >= 1) {
            this.setState( prevState => ({
                counter: prevState.counter - 1
            }))
        }
    }
    
    render() {
        const { image, name, cost } = this.props;
        const { counter } = this.state;
        return (
            <div className={styles.container}>
                <img src={image} alt="car" />
                <h3>{name}</h3>
                <p>{cost} {counter >= 1 && `* ${counter} = ${cost.split(' ')[0] * counter} $`}</p>
                <div className={styles.counter}>
                    <img className={counter ? "" : styles.deactive} onClick={this.downHandler} src={arrowDown} alt="arrow"/>
                    <span>{counter}</span>
                    <img onClick={this.upHandler} src={arrowUp} alt="arrow" />
                </div>
            </div>
        );
    }
}

export default Card;