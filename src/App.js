import React,{createContext,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'

import Frame1 from "./components/home";
import PreCheckout from "./components/precheckout";
export const FormSelectContext = createContext(null)

function App() {
    const [form,setForm] = useState(0)
  return (
      <React.Fragment>
          <Router>
              <Switch>
                  <Route exact path={'/'} component={Frame1}/>
                  <FormSelectContext.Provider value={{form,setForm}}>
                        <Route exact path={'/checkout'} component={PreCheckout}/>
                  </FormSelectContext.Provider>


              </Switch>
          </Router>

      </React.Fragment>
  );
}

export default App;
