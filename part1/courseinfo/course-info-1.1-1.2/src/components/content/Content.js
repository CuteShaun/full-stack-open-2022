import React from 'react';
import Part from '../part/Part';

const Content = ({parts, exercises}) => <>{parts.map((part, index) => <Part part={part} exercise={exercises[index]} />)}</>

export default Content;