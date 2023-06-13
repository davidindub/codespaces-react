import LuckyN from "./LuckyN";
import { sum } from "./utils";
import "./App.css";
import Lucky7 from "./Lucky7";
import BoxGrid from "./BoxGrid";
function lessThan4(dice) {
  return sum(dice) < 4;
}

function allSameValue(dice) {
  return dice.every((v) => v === dice[0]);
}

function App() {
  return (
    <>
      {/* <LuckyN winCheck={lessThan4} title="Roll less than 4" />
      <LuckyN
        winCheck={allSameValue}
        numDice={3}
        title="Roll the same number"
      />
      <Lucky7 /> */}

      <BoxGrid />
    </>
  );
}

export default App;
