import React, { Component, View } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import AddProduct from './AddProduct';
import './App.css';
import { Amplify } from 'aws-amplify';
import { DataStore, Auth } from 'aws-amplify';
import {withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css'
import awsExports from './aws-exports';
import Subscribe from './Subscribe';
Amplify.configure(awsExports);  
  
class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
           <Routes>
            {/* <Route exact path='/' element={< Subscribe />}></Route> */}
                 <Route exact path='/' element={< Home />}></Route>
                 <Route exact path='/AddProduct' element={< AddProduct />}> </Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
  
export default App;