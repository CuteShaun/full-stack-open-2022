import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Button from './components/button/Button';
import Title from './components/title/Title';
import Statistics from './components/statistics/Statistics';

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

  const countPositive = () => {
    return good / (good + neutral + bad) * 100;
  }

  const ratingSum = () => {
    return good + neutral + bad;
  }

  const countAverage = () => {
    return (good * 1 + bad * -1) / ratingSum();

  }

  const parts = [
    {rating: 'good', quantity: good, handler: handleGood},
    {rating: 'neutral', quantity: neutral, handler: handleNeutral},
    {rating: 'bad', quantity: bad, handler: handleBad},
  ];

  const statParts = [
    {rating: 'all', quantity: ratingSum()},
    {rating: 'average', quantity: countAverage()},
    {rating: 'positive', quantity: `${countPositive()} %`},
  ]

  return (
    <>

      <Title title="give feedback"/>

      <div>
        {parts.map(part => <Button rating={part.rating} key={part.rating} handleClick={part.handler}/>)}
      </div>

      <Title title="statistics"/>

      <Statistics good={good} neutral={neutral} bad={bad} parts={parts} statParts={statParts}/>

    </>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)