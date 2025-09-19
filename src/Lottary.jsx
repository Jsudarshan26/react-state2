import { useState } from "react";

// import './Lottery.css';

export default function Lottary(){

    let[ticket,setTicket]= useState([0,0,0]);

    return(
        <div className="ticket">
            <span>{ticket[0]}</span>
            <span>{ticket[1]}</span>
            <span>{ticket[2]}</span>
        </div>
        
    )
}