import React,{createContext,useState,Suspense} from 'react';
import './App.css';
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
const  Frame1 = React.lazy(()=>import("./components/home"));
const  PreCheckout = React.lazy(()=>import("./components/precheckout"));
export const FormSelectContext = createContext(null)

function App() {
    const [form,setForm] = useState(0)
  return (
      <React.Fragment>
          <Router>
              <Switch>

                  <FormSelectContext.Provider value={{form,setForm}}>
                      <Suspense fallback={<Grid container justify={'center'} alignItems={'center'} style={{
                          height:'100vh'
                      }}>
                          <Grid item>
                              <CircularProgress />
                          </Grid>

                      </Grid>}>
                            <Route exact path={'/'} component={Frame1}/>
                            <Route exact path={'/checkout'} component={PreCheckout}/>
                      </Suspense>
                  </FormSelectContext.Provider>


              </Switch>
          </Router>

      </React.Fragment>
  );
}

export default App;
