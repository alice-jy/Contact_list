import { useState } from 'react';
import './App.css';
import ContactList from './components/ContactList.jsx';



function App() {
  const [count, setCount] = useState(0);
  //create a selectedContactID state variable in App.jsx 
  const [selectedContactID, setSelectedContactID] = useState(null);

  return (
    <>
      {/*what is a parent fragment?*/}
      {/* Only if theres no selectedContactID - render ContactList component*/}
      {/*
        write a conditional statement that evaluates: 
        if selectedContactId is truthy, render a div with a short message,
        if selectedContactId is falsey, render the ContactList component
      */}
      {selectedContactID ? (
        <div>Selected Contact View</div>
      ) : (
        <ContactList setSelectedContactID={setSelectedContactID}></ContactList>
      )}
    </>
  );
}

export default App;
