import { useState } from "react";

export default function Counter() {
    console.log("⚛️⚛️⚛️ RENDERED COUNTER! ⚛️⚛️⚛️")
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(c => c+1);
    }

    const addThree = () => {
        setCount(c => c+3);
    }

    const setToTen = () => {
        setCount(10);
    }


    return (
        <>
        <h1>{count}</h1>

        <button onClick={incrementCount}>➕1️⃣</button>

        <button onClick={addThree}>➕3️⃣</button>

        <button onClick={setToTen}>Set to 🔟</button>


        </>
    )
}