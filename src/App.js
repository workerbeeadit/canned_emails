
import React from 'react';
import './App.css';
// Used https://daveceddia.com/react-image-tag/ to insert an image as a React Component
import dilbert from './canned-emails-frontliner.jpg';

const App = () => {
  return (
    <div className="App">
      <h1>Canned Emails </h1>
      <h2> Stop rewriting emails</h2> 
      <img src = {dilbert} alt = "Everyone has humble beginnings and thus a shrine to daddy elon"/>
      <h2> Asking for an intro </h2>
      <h3> Subject: [Intro to Person B] </h3>
      <p> Hi [Person you want the intro from], I'm writing because I was wondering you could connect me with [Person B]?
      Specifically, I'd like to know more about [what you'd like to get out of the interaction with Person B]. [Person B] seems like a great fit.
      Let me know, no worries either way
      [Sender]</p>


    </div>
  );
}

export default App;