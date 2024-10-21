import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);

    const handleClick = (index) => {
        if (board[index]) return;
        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
    }
  
    return (
        <div className='game'>
            <div className='board'>
                {board.map((value, index) => (
                    <button key={index} className='square' onClick={() => handleClick(index)}>{value}</button>
                )) }
            </div>
        </div>
  );
};

export default TicTacToe;
