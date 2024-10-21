import React, { useState } from 'react';
import './TicTacToe.css';

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
    let status = '';

    const handleClick = (index) => {
        if (board[index]) return;
        const newBoard = board.slice();
        newBoard[index] = isXNext ? 'X' : 'O';
        setBoard(newBoard);
        setIsXNext(!isXNext);
    }

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6], // Diagonals
        ];
        for (let line of lines) {
            const [a, b, c] = line;
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const winner = calculateWinner(board);

    if (winner) {
        status = `Winner: ${winner}`;
    }

    return (
        <div className='game'>
            <div className="status">{status}</div>
            <div className='board'>
                {board.map((value, index) => (
                    <button key={index} className='square' onClick={() => handleClick(index)}>{value}</button>
                ))}
            </div>
        </div>
    );
};

export default TicTacToe;
