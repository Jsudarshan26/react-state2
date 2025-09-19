import { useState } from "react";

import { genTicket, sum } from "./helper";


import Ticket from "./Ticket";


import "./Lticket.css"

export default function Lticket({n=3,winCondition}) {
    let [ticket, setTicket] = useState(genTicket(n));

    let isWinning = winCondition(ticket);

    function gen(){

        setTicket(genTicket(n));

    }

    return (
        <div >
            <h1>Lottery Game </h1>


            <div className="ticket">

                <Ticket ticket ={ticket} />
{/* 
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span> */}
            </div>
            <button onClick={gen} className="btn">Regenerate Ticket</button>

            <h3>{isWinning && "congratulations You won!"}</h3>
        </div>

    )

}