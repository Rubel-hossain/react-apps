import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Intro from './Intro';

class App extends Component {


  render() {
    
    return (
      <div className="App">
         <Parent name="children" msg="message" coolCars={this.props.cars}/>
      </div>
    );
  }
}

App.defaultProps = {

   cars: ['BMW','MARCHTES','CITY','DYNGE']
}

class Parent extends Component {

   render(){
      return (
        <div>
          <div className="parent"> 
            <h2>Hi, I am Parent</h2>
            <h3>Comes From {this.props.name}</h3>
            <h4>My Cars Brand Name {this.props.coolCars.map((items,i)=>{
              return " " + items;
            })}</h4>
          </div>
        </div>  
      );
   }

}

Parent.propTypes = {

  propObject: React.PropTypes.object,
  propNumber: React.PropTypes.number,
  PropString: React.PropTypes.string
}

Parent.defaultProps = {

     propNumber: 66,
     propString: "Prop String",
     propObject: {
       obj1: "obj one"
     }

}

export default App;
