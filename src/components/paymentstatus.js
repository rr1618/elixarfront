import React from "react";
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const PaymentSuccess=(props)=>
{
    return(
        <React.Fragment>
            {/*<Grid container justify={'center'}   alignItems={'center'} container className="container-success" >*/}

            {/*        <Grid item  xs={11} md={10}     >*/}
            {/*            <Grid item className="printer-top" xs={12}>*/}
            {/*            </Grid>*/}
            {/*        </Grid>*/}

            {/*            /!*<Grid item container className="paper-container" justify={'center'} xs={11} md={8}>*!/*/}
            {/*            /!*    <Grid item className="printer-bottom" xs={11} md={10}></Grid>*!/*/}

            {/*            /!*    <Grid item className="paper-success" container justify={'center'}>*!/*/}
            {/*            /!*        <Grid item container  justify={'center'}>*!/*/}
            {/*            /!*            <Grid item className="success-icon" md={1} xs={2}>&#10004;</Grid>*!/*/}
            {/*            /!*            <Grid item  xs={12}>*!/*/}
            {/*            /!*                Payment Complete*!/*/}
            {/*            /!*            </Grid>*!/*/}
            {/*            /!*            <Grid item >*!/*/}
            {/*            /!*                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum*!/*/}
            {/*            /!*                has been the industry's standard dummy text.*!/*/}
            {/*            /!*            </Grid>*!/*/}
            {/*            /!*            <Grid item container className="order-details">*!/*/}
            {/*            /!*                <Grid item className="order-number-label" xs={12}><p>Order Number</p></Grid>*!/*/}
            {/*            /!*                <Grid item className="order-number" xs={12}><p>{props.match.params.orderId}</p></Grid>*!/*/}
            {/*            /!*            </Grid>*!/*/}
            {/*            /!*            <Grid item container justify={'center'} xs={12}>*!/*/}
            {/*            /!*                <Grid item  xs={12} style={{textAlign:'center'}}>Thank you!</Grid>*!/*/}
            {/*            /!*                <Grid item xs={5}>*!/*/}
            {/*            /!*                    <Button variant={'outlined'} color={'primary'}>Take Me to Kalam Labs</Button>*!/*/}
            {/*            /!*                </Grid>*!/*/}
            {/*            /!*            </Grid>*!/*/}

            {/*            /!*        </Grid>*!/*/}





            {/*            /!*        </Grid>*!/*/}

            {/*            /!*    </Grid>*!/*/}
            {/*            </Grid>*/}
            <div className="container-success">
                <div className="printer-top"></div>

                <div className="paper-container">
                    <div className="printer-bottom"></div>

                    <div className="paper-payment">
                        <div className="main-contents">
                            <div className="success-icon">&#10004;</div>
                            <div className="success-title">
                                Payment Complete
                            </div>
                            <div className="success-description">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                has been the industry's standard dummy text.
                            </div>
                            <div className="order-details">
                                <div className="order-number-label">Order Number</div>
                                <div className="order-number">{props.match.params.orderId}</div>
                            </div>
                            <div className="order-footer">Thank you!</div>
                        </div>
                        <div className="jagged-edge"></div>
                    </div>
                </div>
            </div>



        </React.Fragment>
    )
}

export default PaymentSuccess