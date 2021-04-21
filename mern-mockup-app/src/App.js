import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navigationbar from "./components/navigationbar.component";
import Home from "./components/home.component";
import Pioneers from "./components/pioneers.component";
import Technology from "./components/technology.component";
import Footer from "./components/footer";


function App() {
  return (
    
    <Router>
      <div style={{
        backgroundColor: '#000000'
      }} >
      <Navigationbar />
      <Route path="/" exact component={Home} />
      <Route path="/pioneers" component={Pioneers} />
      <Route path="/technology" component={Technology} />
      <Footer/>
      </div>
    </Router>
    
  );
}

export default App;
