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
});