import React , {Component} from "react";
import { Route , Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Products from "./components/Products";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

class App extends Component{

    render(){
        return(
            <>

                <Navbar />

                <Switch>
                    
                    <Route path="/products" component={Products} />
                    <Route path="/aboutus" component={AboutUs} />
                    <Route path="/" component={Landing} />

                </Switch>
                
                <Footer />
                
            </>
        );
    }
}

export default App;