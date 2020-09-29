import React from 'react';
import Statistic from '../statistic/Statistic';

const Statistics = ({good, neutral, bad, parts, statParts}) => {
    if(good || neutral || bad) {
        return (
          <table>
            <tbody>
                {parts.map(part => <Statistic quantity={part.quantity} rating={part.rating} key={part.rating}/>)}
                {statParts.map(part => <Statistic quantity={part.quantity} rating={part.rating} key={part.rating}/>)}
            </tbody>
          </table>
        ) 
      }
  
      return <p>No feedback given</p>
}


export default Statistics;