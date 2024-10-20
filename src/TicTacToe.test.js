import React from "react";
import { render, screen } from "@testing-library/react";
import TicTacToe from "./TicTacToe";

describe('TicTacToe', () => {
    test('renders the Tic Tac Toe board', () => {
        render(<TicTacToe />);
        const squares = screen.getAllByRole();
        expect(squares.length).toBe(9);
    });
})