import React, { Component } from 'react';
import Banner from './Banner';
import Cards from "./Cards";
import Search from "./Search";
import Logos from "./Logos";

class Landing extends Component {
    render() {
        return (
            <>
                <Banner />
                <Cards />
                <Search />
                <Logos />
            </>
        );
    }
}

export default Landing;