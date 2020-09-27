import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/header/Header';
import Content from './components/content/Content';
import Total from './components/total/Total';

const App = () => {
  const course = 'Half Stack application development'
  const exercises = [10, 7, 14];
  const parts = 
  [
  'Fundamentals of React', 
  'Using props to pass data', 
  'State of a component'
  ];

  const exerciseSum = exercises.reduce((accum, currentValue) => accum + currentValue);

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} exercises={exercises} />
      <Total exerciseSum={exerciseSum} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))