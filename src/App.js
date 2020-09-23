import React,{createContext,useState,Suspense} from 'react';
import './App.css';
import Payment from "./components/paymentstatus";
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
const  Home = React.lazy(()=>import("./components/home"));
const  PreCheckout = React.lazy(()=>import("./components/precheckout"));
export const FormSelectContext = createContext(null)
export const RegisterContext = createContext(null)
export const OtpContext = createContext(null)
export const SpinnerContext = createContext(null)

function App() {
    const [form,setForm] = useState(0)
    const [register,setRegister] = useState({
        name:'',
        mobile:'',
        school:'',
        email:'',
        date:'',
        slot:'',
        order_id:'',
        payment:false
    })
    const [otpContent,setOtpContent] = useState(null)
    const [spin,setSpin] = useState(false)

  return (
      <React.Fragment>
          <Router>
              <Switch>

                  <FormSelectContext.Provider value={{form,setForm}}>
                  <RegisterContext.Provider value={{register,setRegister}}>
                  <OtpContext.Provider value={{otpContent,setOtpContent}}>
                  <SpinnerContext.Provider value={{spin,setSpin}}>
                      <Suspense fallback={<Grid container justify={'center'} alignItems={'center'} style={{
                          height:'100vh'
                      }}>
                          <Grid item>
                              <CircularProgress />
                          </Grid>

                      </Grid>}>
                            <Route exact path={'/'} component={Home}/>
                            <Route exact path={'/checkout'} component={PreCheckout}/>
                            <Route exact path={'/paymentstatus'} component={Payment}/>
                      </Suspense>
                  </SpinnerContext.Provider>
                  </OtpContext.Provider>
                  </RegisterContext.Provider>
                  </FormSelectContext.Provider>


              </Switch>
          </Router>

      </React.Fragment>
  );
}

export default App;
