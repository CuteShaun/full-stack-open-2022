import React from 'react';

const Filter = ({handleFilter = () => {}}) => <input type="text" onChange={handleFilter}/>

export default Filter;