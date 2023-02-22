import React, { Component } from 'react';
import Styles from "./Search.module.css";

class Search extends Component {
    constructor(){
        super();
        this.state = {
            text:""
        }
    }
    
    changeHandler = (event) => {
        this.setState({
            text : event.target.value
        })
    }

    render() {
        return (
            <div className={Styles.container}>
                <p>Search What You Want</p>
                <div>
                    <input onChange={this.changeHandler} value={this.state.text} placeholder='Search ...' type="text" />
                    <br />
                    <br />
                    <span>{this.state.text}</span>
                </div>

            </div>
        );
    }
}

export default Search;