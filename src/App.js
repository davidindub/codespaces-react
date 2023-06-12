import './App.css';
import Counter from './counter';
import ScoreKeeper from './ScoreKeeper';
import EmojiClicker from './EmojiClicker';

function App() {
  return (
    <div className="App">
      <h1>⚛️ React State ⚛️</h1>

      <Counter />
      <hr />
      <ScoreKeeper />
      <hr />
      <EmojiClicker />
      <hr />
    </div>
  );
}

export default App;
