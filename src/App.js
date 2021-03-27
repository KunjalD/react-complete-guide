import React, { useState } from 'react';
import './App.css';
import Person from "./Person/Person";

const app = props => {
  const [personState, setPersonState] = useState ({
    person: [
      {name:'Kunjal', age:'33'},
      {name:'Sid', age:'36'},
      {name:'Nivi', age:'1'},
    ],
    otherState:'Some other value'
  });

  const [otherState, setOtherState] = useState('some other value');

  console.log(personState, otherState);

  const switchNameHandler = () => {

    setPersonState({ person: [
      {name:'Kunj', age:'33'},
      {name:'Sid', age:'36'},
      {name:'Nitya', age:'3'},
      ] 
    });
  };

  return (
    <div className="App">
      <h1>Hi How are you</h1>
      <p>This is really working</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personState.person[0].name} age={personState.person[0].age}/>
      <Person name={personState.person[1].name} age={personState.person[1].age}> My Hobbies : Racing</Person>
      <Person name={personState.person[2].name} age={personState.person[2].age}/>
    </div>
  );
}

export default app;
