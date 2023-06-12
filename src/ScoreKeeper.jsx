import { useState } from "react";

export default function ScoreKeeper () {
const [scores, setScores] = useState({
    p1Score: 0,
    p2Score: 0
});

function increaseP1score() {
    setScores((oldScores) => {
        return { ...oldScores, p1Score: oldScores.p1Score +1 };
    });
}

function increaseP2score() {
    setScores((oldScores) => {
        return { ...oldScores, p2Score: oldScores.p2Score +1 };
    });
}

    return (
        <>
        <div>
            <p>🔵Player 1: {scores.p1Score}</p>
            <p>🔴Player 2: {scores.p2Score}</p>
            
            <button onClick={increaseP1score}>🔵 PLAYER 1 ➕1️⃣</button>
            <br></br>
            <button onClick={increaseP2score}>🔴 PLAYER 2 ➕1️⃣</button>

        </div>
        </>
    )
}