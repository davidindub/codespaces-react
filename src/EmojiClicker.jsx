import { useState } from "react";
import { v4 as uuid } from "uuid";

var randomEmoji = require('random-unicode-emoji');

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: "😁"}]);

    function addEmoji() {
        setEmojis((oldEmojis) => {
            return [...oldEmojis, {id: uuid(), emoji: (randomEmoji.random({count: 1}).toString())}]
        })
    }

    function deleteEmoji(id) {
        setEmojis((oldEmojis) => {
            return oldEmojis.filter(e => e.id != id);
        })

    }

    const replaceWithHearts = () => {
        setEmojis(oldEmojis => {
            return oldEmojis.map(e => {
                return {...e, emoji: "❤️"}
            })
        })
    }

    return (
        <div>
            <button onClick={replaceWithHearts}>Replace with ❤️</button>
            <button onClick={addEmoji}>Add Emoji</button>
            <br />
            {emojis.map(e => (
                <span onClick={() => deleteEmoji(e.id)} key={e.id} style={{ fontSize: "4rem" }}>{e.emoji}</span>
            ))}

        </div>
    )
}