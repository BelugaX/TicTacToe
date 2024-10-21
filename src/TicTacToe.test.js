import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TicTacToe from "./TicTacToe";

describe('TicTacToe', () => {
    test('renders the Tic Tac Toe board', () => {
        render(<TicTacToe />);
        const squares = screen.getAllByRole('button');
        expect(squares.length).toBe(9);
    });

    test('allow players to take turns', () => {
        render(<TicTacToe />);
        const squares = screen.getAllByRole('button');

        fireEvent.click(squares[0]);
        expect(squares[0]).toHaveTextContent('X');

        fireEvent.click(squares[1]);
        expect(squares[1]).toHaveTextContent('O');
    });

    test('does not allow clicking on filled squares', () => {
        render(<TicTacToe />);
        const squares = screen.getAllByRole('button');

        fireEvent.click(squares[0]); // X's turn
        fireEvent.click(squares[0]); // Click again on the same square
        expect(squares[0]).toHaveTextContent('X');
    });

    test('displays the winner', () => {
        render(<TicTacToe />);
        const squares = screen.getAllByRole('button');

        // Simulate a winning scenario
        fireEvent.click(squares[0]); // X
        fireEvent.click(squares[3]); // O
        fireEvent.click(squares[1]); // X
        fireEvent.click(squares[4]); // O
        fireEvent.click(squares[2]); // X

        expect(screen.getByText(/Winner: X/i)).toBeInTheDocument();
    });

    test('displays a tie message when the game ends in a tie', () => {
        render(<TicTacToe />);
        const squares = screen.getAllByRole('button');

        // Simulate a tie scenario
        fireEvent.click(squares[0]); // X
        fireEvent.click(squares[1]); // O
        fireEvent.click(squares[2]); // X
        fireEvent.click(squares[4]); // X
        fireEvent.click(squares[3]); // X
        fireEvent.click(squares[5]); // O
        fireEvent.click(squares[7]); // O
        fireEvent.click(squares[6]); // X
        fireEvent.click(squares[8]); // O

        expect(screen.getByText(/Match Tie/i)).toBeInTheDocument();
    });

    test('resets the game', () => {
        render(<TicTacToe />);
        const squares = screen.getAllByRole('button');

        fireEvent.click(squares[0]); // X
        fireEvent.click(squares[1]); // O
        fireEvent.click(screen.getByText(/Reset/i)); // Reset the game

        expect(squares[0]).toBeEmptyDOMElement();
        expect(squares[1]).toBeEmptyDOMElement();
    });
});