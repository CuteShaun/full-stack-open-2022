import React from 'react';

const Statistic = ({rating, quantity = 0}) => <tr><td>{rating}</td><td>{quantity}</td></tr>

export default Statistic;