import { useState } from "react";

function generateGameBoard() {
    console.log("Making the inital gameboard!");
    return Array(5000);
}

export default function Gameboard() {
const [board, setBoard] = useState(generateGameBoard);
// const setBoard = () => "";

return (
    <>
    <button onClick={() => setBoard("ghello")}>Click me to change state.</button>
    </>
)
}