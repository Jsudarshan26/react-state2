import { useEffect, useState } from "react";

export default function Joker() {

    let [joke, setJoke] = useState({})

    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getnewJoke = async () => {

        let response = await fetch(URL);

        let jsonResponse = await response.json();

        console.log(jsonResponse);

        setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline })
    }

    useEffect(() => {
        async function getfirstJoke() {

            let response = await fetch(URL);

            let jsonResponse = await response.json();

            console.log(jsonResponse);

            setJoke({ setup: jsonResponse.setup, punchline: jsonResponse.punchline })
        }
        getfirstJoke();
    }, []
    )

    return (
        <div>
            <h3>Joke</h3>
            <h2>{joke.setup}</h2>
            <h2>{joke.punchline}</h2>

            <button onClick={getnewJoke}>New Joke</button>
        </div>
    )
}