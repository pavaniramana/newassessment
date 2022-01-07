import './App.css';
import Greet from './component/Greet';
import Greet1 from './component/Greet1';
import React from 'react';

class App extends React.Component {
 constructor(props){
   super(props);
   this.state={
    funcComp : false ,
    classComp : false
  }
 }

 render(){
  return (
    <div className="App">
      <h1 className="heading">Styling using Function and class Component</h1>
      <button className="btn1" onClick= {()=>{this.setState({funcComp:!this.state.funcComp})}}>To see styling in functional components</button>
      <button className="btn2" onClick= {()=>{this.setState({classComp:!this.state.classComp})}}>To see styling in class components</button>
      {this.state.funcComp===true  
      ?
      <Greet/>
      :
      null}
      {this.state.classComp===true  
      ?
      <Greet1/>
      :
      null}
    </div>
  );
 }
}

export default App;
 
