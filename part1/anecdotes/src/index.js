import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import Anecdot from './components/Anecdot/Anecdot';
import Title from './components/Title/Title';
import Button from './components/Button/Button';

const App = ({anecdotes}) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0))
  
  const genRandomAnecdot = () => {
    const randomAnecdot = Math.floor(Math.random() * Math.floor(anecdotes.length));
    setSelected(randomAnecdot);
  }

  const addNewVote = () => {
    const newPoints = [...points];
    newPoints[selected] += 1;
    setPoints(newPoints);
  }

  const maxVotes = Math.max(...points);
  const maxVotedAnecdote = points.findIndex((item) => item === maxVotes);

  return (
    <>
      <Title title="Anecdote of the day"/>
      <Anecdot anecdot={anecdotes[selected]} vote={points[selected]}/>

      <div>
        <Button type="button" text="vote" handleClick={addNewVote}></Button>
        <Button type="button" text="next anecdote" handleClick={genRandomAnecdot}></Button>
      </div>

      <Title title="Anecdote with most votes"/>
      <Anecdot anecdot={anecdotes[maxVotedAnecdote]} vote={maxVotes}/>
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
];

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)