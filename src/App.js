import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import PatternRecognitionDemo from './patternRecognition/PatternRecognition';
import WebcamDemo from './webcam/Webcam';
import 'antd/dist/antd.css';

class App extends Component {

  constructor(props) {
      super(props);
      this.state = { loaded: false };
  }

  render() {
    return (
      <Router basename="/">
        <div>
          <Header />
          <div>
            <Route path="/enclaveML" component={Home} />
            <Route path="/enclaveML/pattern_recognition" component={PatternRecognitionDemo} />
            <Route path="/enclaveML/webcam" component={WebcamDemo} />
          </div>
        </div>
      </Router>
    );
  }
  
}

export default App;
