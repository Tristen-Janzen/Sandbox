//import React from 'react';
//import './App.css';
//import FooterComponent from './components/FooterComponent';
//import HeaderComponent from './components/HeaderComponent';
//import MyInfo from './components/MyInfo';
//import TodoItem from './components/TodoItem';
//import Jokes from './components/Jokes';




//function App() {
//  
//  return (
//    <body>
//    <div className="test">
//      <HeaderComponent />
//      <MyInfo />
//      <TodoItem />
//      <TodoItem />
//      <TodoItem />
//      <Jokes />
//      <FooterComponent/>
//    </div>
//    </body>
//  );
//}
//
//export default App;


import React, {Component} from 'react';
import './Home.css';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import MyInfo from './components/MyInfo';
import TodoItem from './components/TodoItem';
import Jokes from './components/Jokes';
//import MouseEnter from './components/MouseEnter';




class Home extends Component {
//  constructor(){
//    super()
//    this.state = {
//      name: "Tristen",
//      age: 24,
//      height: [6,0]
//    }
//  }
constructor(props){
  super(props)
  this.state = {
    count: 1,
    loading: true,
    pokemon: {},
    Hawaii: {
      name: "Hawaii",
      src: "https://content.api.news/v3/images/bin/2788fba023921799476ae49e8f1b30c3",
      alt: "description"
    },
    Japan: {
      name: "Japan",
      src: "https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg",
      alt: "description"
    },
    Finland:{
      name: "Finland",
      src: "https://www.state.gov/wp-content/uploads/2018/11/Finland-2435x1406.jpg",
      alt: "description"
    }
  }
  this.handleClick = this.handleClick.bind(this)
}
handleClick(type){
  console.log("I was clicked!")
  this.setState(prevState => {
    return {count: type == 'add' ? prevState.count + 1: prevState.count - 1}
  });
} 
componentDidMount(){
  fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.count}`)
  .then(response => response.json())
  .then(data => {
    this.setState({
      loading: false,
      pokemon: data
    })
    console.log(data)
  })
}
componentDidUpdate(){
  fetch(`https://pokeapi.co/api/v2/pokemon/${this.state.count}`)
  .then(response => response.json())
  .then(data => {
    this.setState({
      loading: false,
      pokemon: data
    })
  })
}

//        <img onMouseOver={() => console.log("Hovered!")} src={this.state.src} alt={this.state.alt} />
//<MouseEnter pic = {this.state.Hawaii}/>
//        <MouseEnter pic = {this.state.Japan}/>
//        <MouseEnter pic = {this.state.Finland}/>
  render(){
    var text = this.state.loading ? "Loading..." : this.state.pokemon.name
    return (
      <body>
      <div className="test">
        <MyInfo locs = {this.state}/>
        <TodoItem data={"I like pie!"}/>
        <TodoItem data={"I like coding!"}/>
        <TodoItem data={"I like Turkey!"}/>
        <Jokes />
        <h1 class="poke">
        <button onClick={this.handleClick.bind(this, 'add')} value = 'Inc'>Increment!</button>
        <button onClick={this.handleClick.bind(this,'sub')} value = 'Dec'>Decrement!</button>
        <br/>Pokedex Number: {this.state.count}{"\t"}
        {text}
        </h1>
        <FooterComponent/>
      </div>
      </body>
    );
  }
}

export default Home;
//<h1>My name is{this.state.name}</h1>
//        <h2>I am {this.state.age} years old</h2>
//        <h2>My height is {this.state.height[0]}'{this.state.height[1]}"</h2>