import { useEffect, useState } from "react";

export default function Counter(){

    let [countx,setCountx] = useState(0);
    let [county,setCounty] = useState(0);

    let Controlx= ()=>{
        setCountx((currCount)=>currCount+1)
    }

     let Controly= ()=>{
        setCounty((currCount)=>currCount+1)
    }


    useEffect(function print(){
        console.log("this is side effect")
    },[countx])

    // [] --> used for render Once 


    return(
        <div>
            <h3>Count = { countx}</h3>

            <button onClick={Controlx}>+1</button>


            <h3>Count = {county} </h3>

            <button onClick={Controly}>+1</button>
            
        </div>
    )
}

