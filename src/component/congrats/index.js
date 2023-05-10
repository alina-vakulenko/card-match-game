import { useSelector } from "react-redux";
import {
  allCards,
  selectMatchedIDs,
  selectMovesNumber,
} from "../../features/board/boardSlice";

const Congrats = () => {
  const cardsMatched = useSelector(selectMatchedIDs);
  const movesNumber = useSelector(selectMovesNumber);

  return (
    <>
      {cardsMatched.length === allCards.length && movesNumber > 0 && (
        <span className="congrats">👏🏻Congratulations!</span>
      )}
    </>
  );
};

export default Congrats;
