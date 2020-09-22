import React, {useEffect} from "react";

const Payment = (props)=>{
    useEffect(()=>{
        console.log(props)
    },[])
    return(
        <div>
            <h1>success</h1>
        </div>
    )
}
export default Payment