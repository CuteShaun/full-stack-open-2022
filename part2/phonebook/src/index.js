import React, { useState } from 'react'
import ReactDOM from 'react-dom';

import Filter from './components/Filter/Filter';
import Persons from './components/Persons/Persons';
import PersonForm from './components/PersonForm/PersonForm';

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  
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

    setPersons(persons.concat({name: newName, number: number}))
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