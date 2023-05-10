import { useDispatch } from "react-redux";

import { setBoard, allCards } from "./features/board/boardSlice";

import Score from "./component/score";
import Board from "./features/board/Board";

import "./index.css";

const App = () => {
  const dispatch = useDispatch();

  const shuffleCards = () => {
    let shuffledCards = [];
    let variants = [...allCards];
    const cardsNumber = variants.length;
    for (let i = 0; i < cardsNumber; i++) {
      const index = Math.floor(Math.random() * variants.length);
      shuffledCards.push(variants[index]);
      variants.splice(index, 1);
    }

    return shuffledCards;
  };

  const startGameHandler = () => {
    dispatch(setBoard(shuffleCards()));
  };

  return (
    <div className="App">
      <Score />
      <Board />
      <footer className="footer">
        <button onClick={startGameHandler}>Start New Game</button>
      </footer>
    </div>
  );
};

export default App;
