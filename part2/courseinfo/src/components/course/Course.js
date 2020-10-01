import React from 'react';
import Header from '../header/Header';
import Content from '../content/Content';

const Course = ({courses, title}) => <><Header title={title} /><Content courses={courses} /></>

export default Course;
