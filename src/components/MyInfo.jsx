import React from 'react'
import MouseEnter from './MouseEnter';

function MyInfo(props){
    return (
        <div className="my-info">
            <h1>Tristen Janzen</h1>
            <paragraph>Hi, I'm Tristen Janzen. I'm from Andale, Kansas, and I am a recent graduate from Wichita State Univeristy 
                where I got a Bachelor in Computer Science. I also recently finished a training program with Pyramid Academy, and now I am 
                looking for a company in which I can continue to learn and grow as a software engineer.{"\n"}{"\n"}
            </paragraph>
            <h2>Desired vacation spots:</h2>
            <vac class="vacation">
                <MouseEnter pic = {props.locs.Hawaii}/> {"\t"}
                <MouseEnter pic = {props.locs.Japan}/> {"\t"}
                <MouseEnter pic = {props.locs.Finland}/>{"\t"}
            </vac>
        </div>
    )
}

export default MyInfo