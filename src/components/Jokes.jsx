import React from 'react'
import Joke from './Joke'
import JokeData from '../data/JokeData'


function Jokes() {
    const jokeData = JokeData.map((joke) => {
        return(
            <Joke id={joke.id} question={joke.question} punchline={joke.punchline} />
        )
    })
    return (
        <div className="jokes">
            <h1>Jokes:{"\n"}</h1>
            <div className="joke-data">
                {jokeData}
            </div>
        </div>
    );
}
export default Jokes;