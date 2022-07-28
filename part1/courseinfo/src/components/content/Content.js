import React from 'react';
import Part from '../part/Part';

const Content = ({parts}) => <>{parts.map((part, index) => <Part part={part.name} exercise={part.exercises} />)}</>

export default Content;