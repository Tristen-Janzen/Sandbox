import React, {Component} from 'react';
import './Form.css'

class Form extends Component{
    constructor(){
        super()
        this.state={
            firstName: "",
            lastName: "",
            gender: "",
            age: 0,
            feet:0,
            inches:0

        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event){
        const {name,value,type,checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }
    
    render(){
        return(
            <main>
                <form onSubmit={this.handleSubmit}>
                    <h1>Simple Form</h1>
                    Name:  <input type="text" name="firstName" placeholder="First Name" onChange={this.handleChange}/>
                    <input type="text" name="lastName" placeholder="Last Name" onChange={this.handleChange}/>
                    <br/>
                    Age:     <input type="number" name="age" placeholder="20" onChange={this.handleChange}/>
                    <br />
                    Gender: 
                    <label>
                        <input type="radio" name="gender" value="Male" checked={this.state.gender === "Male"} onChange={this.handleChange}/>
                        Male
                    </label>

                    <label>
                        <input type="radio" name="gender" value="Female" checked={this.state.gender === "Female"} onChange={this.handleChange}/>
                        Female
                    </label>
                    <br />

                    <label>Height: </label>
                    <select value={this.state.feet} onChange = {this.handleChange} name="feet">
                        <option value="0">0'</option>
                        <option value="1">1'</option>
                        <option value="2">2'</option>
                        <option value="3">3'</option>
                        <option value="4">4'</option>
                        <option value="5">5'</option>
                        <option value="6">6'</option>
                        <option value="7">7'</option>
                        <option value="8">8'</option>
                    </select>
                    <select value={this.state.inches} onChange = {this.handleChange} name="inches">
                        <option value="0">0"</option>
                        <option value="1">1"</option>
                        <option value="2">2"</option>
                        <option value="3">3"</option>
                        <option value="4">4"</option>
                        <option value="5">5"</option>
                        <option value="6">6"</option>
                        <option value="7">7"</option>
                        <option value="8">8"</option>
                        <option value="9">9"</option>
                        <option value="10">10"</option>
                        <option value="11">11"</option>
                    </select>
                    <br/>
                    <button>Submit</button>
                </form>
                <br/>
                <h2>Entered Information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your height: {this.state.feet}'{this.state.inches}"</p>
            </main>
        )
    }
}
export default Form;
