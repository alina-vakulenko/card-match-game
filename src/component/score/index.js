import { useSelector } from "react-redux";

import {
  selectMatchedIDs,
  selectMovesNumber,
} from "../../features/board/boardSlice";
import Congrats from "../congrats";

const Score = () => {
  const cardsMatched = useSelector(selectMatchedIDs);
  const movesNumber = useSelector(selectMovesNumber);

  return (
    <div className="score-container">
      <span>Matched: {movesNumber > 0 ? cardsMatched.length / 2 : 0}</span>
      <Congrats />
      <span>Moves: {movesNumber}</span>
    </div>
  );
};

export default Score;
