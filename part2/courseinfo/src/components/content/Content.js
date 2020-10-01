import React from 'react';
import Part from '../part/Part';
import Title from '../title/Title';
import Total from '../total/Total';

const Content = ({courses}) => (
    <>
        {courses.map(course => (
            <>
                <Title secondaryTitle={course.name} key={course.id}/>
                {course.parts.map(part => <Part part={part.name} key={part.id}/>)}
                <Total exerciseSum={course.parts.reduce((accum, item) => accum + item.exercises, 0)}/>
            </>)
        )}
    </>
);

export default Content;
