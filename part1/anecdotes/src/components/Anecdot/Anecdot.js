import React from 'react';

const Anecdot = ({anecdot, vote = ''}) => <><div>{anecdot}</div><div> {vote ? `has ${vote} votes` : 'no ratings yet'}</div></>

export default Anecdot;