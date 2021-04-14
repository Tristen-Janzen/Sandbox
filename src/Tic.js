import React, { Component } from 'react';
import './Tic.css';

class Home extends Component {
    constructor(props){
      super(props)
      this.state = {
        currentchar:"X",
        topleft: "   ",
        topmid: "   ",
        topright: "   ",
        midleft:"   ",
        midmid:"   ",
        midright:"   ",
        botleft:"   ",
        botmid:"   ",
        botright:"   ",
        winner:""
      }
      this.handleClick = this.handleClick.bind(this)
    }
    handleClick(props){
      console.log("I was clicked!")
      
      this.setState(prevState => {
        if(this.state.currentchar == "X"){
            return {currentchar: "O",[props]: "X"}
        }
        return{currentchar:"X",[props]:"O"}
      });
    } 

    componentDidUpdate(){
        if(((this.state.winner!="X")&&(this.state.winner!="O")&&(this.state.winner!="No one, the match has ended in a Draw."))){
            //Top Row
            if(((this.state.topleft==this.state.topmid)&&(this.state.topleft==this.state.topright))&&((this.state.topleft=="X")||(this.state.topleft=="O"))){
                this.setState(prevState => {
                    return {winner:[this.state.topleft]}
                })
                this.btn1.setAttribute("disabled","disabled")
                this.btn2.setAttribute("disabled","disabled")
                this.btn3.setAttribute("disabled","disabled")
                this.btn4.setAttribute("disabled","disabled")
                this.btn5.setAttribute("disabled","disabled")
                this.btn6.setAttribute("disabled","disabled")
                this.btn7.setAttribute("disabled","disabled")
                this.btn8.setAttribute("disabled","disabled")
                this.btn9.setAttribute("disabled","disabled")
            }
            //Middle Row
            else if(((this.state.midleft==this.state.midmid)&&(this.state.midleft==this.state.midright))&&((this.state.midleft=="X")||(this.state.midleft=="O"))){
                this.setState(prevState => {
                    return {winner:[this.state.midleft]}
                })
                this.btn1.setAttribute("disabled","disabled")
                this.btn2.setAttribute("disabled","disabled")
                this.btn3.setAttribute("disabled","disabled")
                this.btn4.setAttribute("disabled","disabled")
                this.btn5.setAttribute("disabled","disabled")
                this.btn6.setAttribute("disabled","disabled")
                this.btn7.setAttribute("disabled","disabled")
                this.btn8.setAttribute("disabled","disabled")
                this.btn9.setAttribute("disabled","disabled")
            }
            //Bottom Row
            else if(((this.state.botleft==this.state.botmid)&&(this.state.botleft==this.state.botright))&&((this.state.botleft=="X")||(this.state.botleft=="O"))){
                this.setState(prevState => {
                    return {winner:[this.state.botleft]}
                })
                this.btn1.setAttribute("disabled","disabled")
                this.btn2.setAttribute("disabled","disabled")
                this.btn3.setAttribute("disabled","disabled")
                this.btn4.setAttribute("disabled","disabled")
                this.btn5.setAttribute("disabled","disabled")
                this.btn6.setAttribute("disabled","disabled")
                this.btn7.setAttribute("disabled","disabled")
                this.btn8.setAttribute("disabled","disabled")
                this.btn9.setAttribute("disabled","disabled")
            }
            //Left Column
            else if(((this.state.topleft==this.state.midleft)&&(this.state.topleft==this.state.botleft))&&((this.state.topleft=="X")||(this.state.topleft=="O"))){
                this.setState(prevState => {
                    return {winner:[this.state.topleft]}
                })
                this.btn1.setAttribute("disabled","disabled")
                this.btn2.setAttribute("disabled","disabled")
                this.btn3.setAttribute("disabled","disabled")
                this.btn4.setAttribute("disabled","disabled")
                this.btn5.setAttribute("disabled","disabled")
                this.btn6.setAttribute("disabled","disabled")
                this.btn7.setAttribute("disabled","disabled")
                this.btn8.setAttribute("disabled","disabled")
                this.btn9.setAttribute("disabled","disabled")
            }
            //Mid Column
            else if(((this.state.topmid==this.state.midmid)&&(this.state.topmid==this.state.botmid))&&((this.state.topmid=="X")||(this.state.topmid=="O"))){
                this.setState(prevState => {
                    return {winner:[this.state.topmid]}
                })
                this.btn1.setAttribute("disabled","disabled")
                this.btn2.setAttribute("disabled","disabled")
                this.btn3.setAttribute("disabled","disabled")
                this.btn4.setAttribute("disabled","disabled")
                this.btn5.setAttribute("disabled","disabled")
                this.btn6.setAttribute("disabled","disabled")
                this.btn7.setAttribute("disabled","disabled")
                this.btn8.setAttribute("disabled","disabled")
                this.btn9.setAttribute("disabled","disabled")
            }
            //Right Column
            else if(((this.state.topright==this.state.midright)&&(this.state.topright==this.state.botright))&&((this.state.topright=="X")||(this.state.topright=="O"))){
                this.setState(prevState => {
                    return {winner:[this.state.topright]}
                })
                this.btn1.setAttribute("disabled","disabled")
                this.btn2.setAttribute("disabled","disabled")
                this.btn3.setAttribute("disabled","disabled")
                this.btn4.setAttribute("disabled","disabled")
                this.btn5.setAttribute("disabled","disabled")
                this.btn6.setAttribute("disabled","disabled")
                this.btn7.setAttribute("disabled","disabled")
                this.btn8.setAttribute("disabled","disabled")
                this.btn9.setAttribute("disabled","disabled")
            }
            //Right Diagonal
            else if(((this.state.topleft==this.state.midmid)&&(this.state.topleft==this.state.botright))&&((this.state.topleft=="X")||(this.state.topleft=="O"))){
                this.setState(prevState => {
                    return {winner:[this.state.topleft]}
                })
                this.btn1.setAttribute("disabled","disabled")
                this.btn2.setAttribute("disabled","disabled")
                this.btn3.setAttribute("disabled","disabled")
                this.btn4.setAttribute("disabled","disabled")
                this.btn5.setAttribute("disabled","disabled")
                this.btn6.setAttribute("disabled","disabled")
                this.btn7.setAttribute("disabled","disabled")
                this.btn8.setAttribute("disabled","disabled")
                this.btn9.setAttribute("disabled","disabled")
            }
            //Left Diagonal
            else if(((this.state.botleft==this.state.midmid)&&(this.state.botleft==this.state.topright))&&((this.state.botleft=="X")||(this.state.botleft=="O"))){
                this.setState(prevState => {
                    return {winner:[this.state.botleft]}
                })
                this.btn1.setAttribute("disabled","disabled")
                this.btn2.setAttribute("disabled","disabled")
                this.btn3.setAttribute("disabled","disabled")
                this.btn4.setAttribute("disabled","disabled")
                this.btn5.setAttribute("disabled","disabled")
                this.btn6.setAttribute("disabled","disabled")
                this.btn7.setAttribute("disabled","disabled")
                this.btn8.setAttribute("disabled","disabled")
                this.btn9.setAttribute("disabled","disabled")
            }
            else if(((this.state.topleft=="X")||(this.state.topleft=="O"))&&
            ((this.state.topmid=="X")||(this.state.topmid=="O"))&&
            ((this.state.topright=="X")||(this.state.topright=="O"))&&
            ((this.state.midleft=="X")||(this.state.midleft=="O"))&&
            ((this.state.midmid=="X")||(this.state.midmid=="O"))&&
            ((this.state.midright=="X")||(this.state.midright=="O"))&&
            ((this.state.botleft=="X")||(this.state.botleft=="O"))&&
            ((this.state.botmid=="X")||(this.state.botmid=="O"))&&
            ((this.state.botright=="X")||(this.state.botright=="O"))
            )
            {
                this.setState(prevState => {
                    return {winner:"No one, the match has ended in a Draw."}
                })
                this.btn1.setAttribute("disabled","disabled")
                this.btn2.setAttribute("disabled","disabled")
                this.btn3.setAttribute("disabled","disabled")
                this.btn4.setAttribute("disabled","disabled")
                this.btn5.setAttribute("disabled","disabled")
                this.btn6.setAttribute("disabled","disabled")
                this.btn7.setAttribute("disabled","disabled")
                this.btn8.setAttribute("disabled","disabled")
                this.btn9.setAttribute("disabled","disabled")
            }
        }
    }
    
      render(){
        return (
          <body class="bdy">
              <h1>{this.state.currentchar}'s Turn</h1>
              <h1>The Winner is {this.state.winner}</h1>
          <div class="buttons">
            <button class="btn" ref={btn1 => {this.btn1 = btn1;}} onClick={() => {this.handleClick("topleft");this.btn1.setAttribute("disabled","disabled")}}>
                {this.state.topleft}
            </button>
            <button class="btn" ref={btn2 => {this.btn2 = btn2;}} onClick={() => {this.handleClick("topmid");this.btn2.setAttribute("disabled","disabled")}}>
                {this.state.topmid}
            </button>
            <button class="btn" ref={btn3 => {this.btn3 = btn3;}} onClick={() => {this.handleClick("topright");this.btn3.setAttribute("disabled","disabled")}}>
                {this.state.topright}
            </button>
            <br/>
            <button class="btn" ref={btn4 => {this.btn4 = btn4;}} onClick={() => {this.handleClick("midleft");this.btn4.setAttribute("disabled","disabled")}}>
                {this.state.midleft}
            </button>
            <button class="btn" ref={btn5 => {this.btn5 = btn5;}} onClick={() => {this.handleClick("midmid");this.btn5.setAttribute("disabled","disabled")}}>
                {this.state.midmid}
            </button>
            <button class="btn" ref={btn6 => {this.btn6 = btn6;}} onClick={() => {this.handleClick("midright");this.btn6.setAttribute("disabled","disabled")}}>
                {this.state.midright}
            </button>
            <br/>
            <button class="btn" ref={btn7 => {this.btn7 = btn7;}} onClick={() => {this.handleClick("botleft");this.btn7.setAttribute("disabled","disabled")}}>
                {this.state.botleft}
            </button>
            <button class="btn" ref={btn8 => {this.btn8 = btn8;}} onClick={() => {this.handleClick("botmid");this.btn8.setAttribute("disabled","disabled")}}>
                {this.state.botmid}
            </button>
            <button class="btn" ref={btn9 => {this.btn9 = btn9;}} onClick={() => {this.handleClick("botright");this.btn9.setAttribute("disabled","disabled")}}>
                {this.state.botright}
            </button>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <button onClick={() => window.location.reload()}>Play Again</button>
          </div>
          </body>
        );
      }
    }
    
    export default Home;