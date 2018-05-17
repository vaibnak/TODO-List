import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

  


class App extends Component {
  constructor(props){
    super(props)
  
    this.state = {
  
    friends: ['virat', 'steven', 'david'],
    input: ""
  }
  
  this.Removefromlist = this.Removefromlist.bind(this)
  }
  
  
  Addtolist(name){
if(name == " ")
alert("please enter some value")
else{
this.setState(() =>{

  return {friends: this.state.friends.concat(name),
    input: " "
  }
}


)
}
  }
   Removefromlist(name){
/*var array = this.state.friends
    console.log(name, array.indexOf(name))
    array.splice(array.indexOf(name), 1)
    this.setState({
      friends:array
    })*/
    console.log(name)
    this.setState(prevState =>{
    
      return {
        friends: prevState.friends.filter((fr) => fr !== name)
      }
}    
)
  }

  changing = e => {

    this.setState(
   {input: e.target.value}
  
  );


  }
   
  
   
  
  
  
  
    render(){
  
  
function Listt(props){
  return (	
  <ul>
    
  {
    props.friends.map((fri,i) => (
  <span>
    <li key = {i}>{fri}</li>
    <button onClick={() => props.fun(fri)}>remove</button>
  </span>
  ))
  }
  
  
  </ul>
  
  )
  
  }  
  
    
  return (
  <div>
    <h1>Hello everyone</h1>
<input type = 'text' placeholder = 'Enter name' id="namme" onChange = {this.changing} value = {this.state.input} />

<button onClick = {() => this.Addtolist(this.state.input)}>ADD</button>

  <Listt friends= {this.state.friends}
        fun = {this.Removefromlist}
  />
  </div>
  
  )
  
  }
}

export default App;
