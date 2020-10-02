import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Home from './components/Home';
import Loader from './components/Loader';


export default function App() {
  return (        
      <Router>
        <Scene key="root">
          <Scene key="Logo" component={Loader} hideNavBar={true}></Scene>
          <Scene key="Home" component={Home} hideNavBar={true}></Scene>
        </Scene>
      </Router>
     
         
  );
}

