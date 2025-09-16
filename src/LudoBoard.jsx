import { useState } from "react"

export default function LudoBoard() {
    let [moves, setMoves] = useState({ blue: 0, red: 0, yellow: 0, green: 0 });

    let styles = { border: "1px solid black", padding: "10px" };

    // let incrementBlue = () => {
    //     setMoves((lastMoves)=> {
    //         return { ...lastMoves, blue: lastMoves.blue + 1} 
    //     }
    //     );
    // };

    let incrementMoves = (color) => {
        setMoves(lastMoves => ({
            ...lastMoves, [color]: lastMoves[color] + 1}
        
        ));
    };

    return (
        <div>
            <p>Game Begins </p>
            <div className="Board " style={styles}>
                <p>Blue moves={moves.blue}</p>
                <button style={{ backgroundColor: "blue" }} onClick={()=>incrementMoves("blue")}>+1</button>

                <p>Yellow moves={moves.yellow}</p>
                <button style={{ backgroundColor: "yellow", color: "black" }} onClick={()=>incrementMoves("yellow")}>+1</button>

                <p>Green moves={moves.green}</p>
                <button style={{ backgroundColor: "green" }} onClick={()=>incrementMoves("green")}>+1</button>

                <p>Red moves={moves.red}</p>
                <button style={{ backgroundColor: "red" }} onClick={()=>incrementMoves("red")}>+1</button>

            </div>
        </div>
    )
}