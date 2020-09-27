import React, {createContext, useState, Suspense, useEffect} from 'react';
import './App.css';
import PaymentSuccess from "./components/paymentstatus";
import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';
import Slide from "./components/slider";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
// import Carousel from "./components/slider";
const  Home = React.lazy(()=>import("./components/home"));
const  PreCheckout = React.lazy(()=>import("./components/precheckout"));
export const FormSelectContext = createContext(null)
export const RegisterContext = createContext(null)
export const OtpContext = createContext(null)
export const SpinnerContext = createContext(null)
export const BookFreeContext = createContext(null)
export const PopupContext = createContext(null)

function App() {
    const [form,setForm] = useState(0)
    const [book,setBook] = useState(false)
    var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

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
    const [anchorEl, setAnchorEl] = useState(null);
    const [spin,setSpin] = useState(false)
    useEffect(()=>{

    },[register])
  return (
      <React.Fragment>
          <Router>
              <Switch>
                  <PopupContext.Provider value={{anchorEl, setAnchorEl}}>
                    <BookFreeContext.Provider value={{book,setBook}}>
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
                          <Route exact path={'/'} component={Home} />
                              {/*<Slide />*/}
                          {/*</Route>*/}

                            <Route exact path={'/checkout/:trial'} component={PreCheckout}/>
                            {/*<Route exact path={'/booktrial'} component={PreCheckout}/>*/}
                         <Route exact path={'/paymentstatus/:orderId'} component={PaymentSuccess}/>
                      </Suspense>
                  </SpinnerContext.Provider>
                  </OtpContext.Provider>
                  </RegisterContext.Provider>
                  </FormSelectContext.Provider>
                    </BookFreeContext.Provider>
                  </PopupContext.Provider>
              </Switch>
          </Router>
      </React.Fragment>
  );
}

export default App;
