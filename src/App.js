import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import NativeSelects from './NativeSelects';
import Home from './Home';
import Dose from './DoseAntibiotics/Dose';
import SearchAppBar from './Appbar';
import CapSevererity from './cap/CapSevererity';
import CapTreat from './cap/CapTreat';
import NhcapSevererity from './nhcap/NhcapSevererity';
import NhcapTreat from './nhcap/NhcapTreat';
import HapSevererity from './hap/HapSevererity';
import Simple from './simple/Simple';
import Complex from './complex/Complex';



class App extends Component {

  render() {


    return (
        
                <Router>
                <div>
                    <SearchAppBar />               
                    <Route exact path="/" component={Home} />
                    <Route path="/cr" component={NativeSelects} />
                    <Route path="/dose" component={Dose} />
                    <Route path="/capsevererity" component={CapSevererity} />
                    <Route path="/captreat" component={CapTreat} />
                    <Route path="/nhcapsevererity" component={NhcapSevererity} />
                    <Route path="/nhcaptreat" component={NhcapTreat} />
                    <Route path="/hapsevererity" component={HapSevererity} />
                    <Route path="/haptreat" component={NhcapTreat} />
                    <Route path="/simple" component={Simple} />
                    <Route path="/complex" component={Complex} />
                </div>
                </Router>

    );
  }
}

export default App;