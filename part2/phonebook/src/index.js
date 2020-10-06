import React, { useState, useEffect} from 'react'
import ReactDOM from 'react-dom';
import axios from 'axios'

import Filter from './components/Filter/Filter';
import Persons from './components/Persons/Persons';
import PersonForm from './components/PersonForm/PersonForm';


const App = () => {
  const [ persons, setPersons ] = useState([])
  const [ newName, setNewName ] = useState('')
  const [ number, setNumber ] = useState('')
  const [ showFiltered, setShowFiltered ] = useState(false);
  const [ filtered, setFiltered ] = useState([])

  const handleName = ({target}) => {
    setNewName(target.value);
  }

  const handleNumber = ({target}) => {
    setNumber(target.value);
  }

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      const notes = response.data;
      setPersons(notes);
    })
  }, [])

  const handleFilter = ({target}) => {

    if(target.value) {
      setShowFiltered(true);
      const filtered = persons.filter(person => person.name.trim().toLowerCase().includes(target.value.toLowerCase().trim()))
      setFiltered(filtered);
      return;
    }

    setShowFiltered(false);

  }


  const handleForm = (e) => {
    e.preventDefault();
    const sameName = persons.find(item => item.name === newName);
    if(sameName) {
      return alert(`${newName} is already added to phonebook`)
    }

    setPersons(persons.concat({name: newName, number: number, id: persons.length + 1}))
    setNumber('');
    setNewName('');
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter handleFilter={handleFilter}/>

      <h3>Add a new</h3>

      <PersonForm number={number} newName={newName} handleForm={handleForm} handleName={handleName} handleNumber={handleNumber}/>
   
      <h3>Numbers</h3>

      <Persons persons={showFiltered ? filtered : persons} />

    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('root'))