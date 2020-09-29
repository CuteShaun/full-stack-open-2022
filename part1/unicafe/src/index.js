import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Button from './components/button/Button';
import Quantity from './components/quantity/Quantity';
import Title from './components/title/Title';

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1);
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  }

  const handleBad = () => {
    setBad(bad + 1);
  }

  const parts = [
    {rating: 'good', quantity: good, handler: handleGood},
    {rating: 'neutral', quantity: neutral, handler: handleNeutral},
    {rating: 'bad', quantity: bad, handler: handleBad},
  ]


  return (
    <>

      <Title title="give feedback"/>

      <div>
        {parts.map(part => <Button rating={part.rating} handleClick={part.handler}/>)}
      </div>

      <Title title="statistics"/>

      <div>
        {parts.map(part => <Quantity quantity={part.quantity} rating={part.rating}/>)}
      </div>

    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)