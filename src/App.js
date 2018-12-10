import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import NativeSelects from './NativeSelects';
import Home from './Home';
import Dose from './DoseAntibiotics/Dose';
import SearchAppBar from './Appbar';
import CapSeverity from './cap/CapSevererity';



class App extends Component {

  render() {


    return (
        
                <Router>
                <div>
                    <SearchAppBar />               
                    <Route exact path="/" component={Home} />
                    <Route path="/cr" component={NativeSelects} />
                    <Route path="/dose" component={Dose} />
                    <Route path="/capseverity" component={CapSeverity} />
                </div>
                </Router>

    );
  }
}

export default App;