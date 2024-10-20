import React from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
  return (
    <div className='game'>
        <div className='board'>
            {Array(9).fill(null).map((_, index) => (
                <button key={index} className='square'></button>
            )) }
        </div>
    </div>
  );
};

export default TicTacToe;
