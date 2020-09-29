import React from 'react';

const Button = ({rating, handleClick = () => {}}) => <button onClick={handleClick}type="button">{rating}</button>

export default Button;