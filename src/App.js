import React ,{Component} from 'react';
import './App.css';
import * as firebase from 'firebase';
import { tsExternalModuleReference } from '@babel/types';

class App extends Component {
  constructor(){
    super();
    this.state = {
      name: "test",
      reps:10
    };
  }

  
  componentDidMount(){
    const rootRef = firebase.database().ref().child('Legs');//alex asked for a change
    const legsRef = rootRef.child('Lunges');
 


    rootRef.on('value',snap=>{
      snap.forEach(function(data){
        console.log(data.key +" : "+data.val());
      })
    });
    
    legsRef.on('value',snap=>{
      // console.log(snap.toJSON());
      this.setState({
        name: snap.key,
        reps: Math.floor(snap.val()*(Math.floor(Math.random()*10))+10)
      });
    });
    
  }

  render(){
    return(
      <div className="App">
        <h1>{this.state.name}:{this.state.reps}</h1>
      </div>
    )
  }
}

export default App;
