import React from 'react'

function Joke(props) {
    return (
        <div classname="joke">
            <p>Id: {props.id}</p>
            <p>Question: {props.question}</p>
            <p>Punchline: {props.punchline}</p>
        </div>
    )
}
export default Joke