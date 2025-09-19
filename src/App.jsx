
import './App.css'


// import LudoBoard from './LudoBoard'

// import { useState } from "react";


import Lticket from './Lticket';

import Ticket from './Ticket';

import { sum } from './helper';

import Form from './Form';

import CommentsForm from './CommentsForm';
import Comments from './comments';

import Counter from './Counter';

import Joker from './joker';


function App() {

  let winCondition = (ticket) =>{

    // return ticket.every((num) => num === ticket[0]);

    return sum(ticket)==15

  }
  
  return (
    <>
     
      {/* < Lticket n={3} winCondition={winCondition} /> */}

      {/* <Comments /> */}

      < Joker />
   
 

    </>
  )
}

export default App
