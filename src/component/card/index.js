import { useSelector, useDispatch } from "react-redux";

import {
  selectVisibleIDs,
  selectMatchedIDs,
  flipCard,
  reset,
} from "../../features/board/boardSlice";

const Card = ({ id, contents }) => {
  const dispatch = useDispatch();
  const visibleIDs = useSelector(selectVisibleIDs);
  const matchedIDs = useSelector(selectMatchedIDs);

  const isCardVisibleOrMatched =
    visibleIDs.includes(id) || matchedIDs.includes(id);

  let click = () => dispatch(flipCard(id));

  let cardContent = (
    <img src={"./assets/card.png"} className="logo-placeholder" alt="Card option" />
  );

  if (isCardVisibleOrMatched) {
    cardContent = contents;
    click = () => {};
  }

  if (visibleIDs.length === 2) {
    setTimeout(() => {
      dispatch(reset());
    }, 800);
    click = () => {};
  }

  let cardStyle;
  if (matchedIDs.includes(id)) {
    cardStyle = "matched";
  }
  if (visibleIDs.length >= 2 && !matchedIDs.includes(id)) {
    cardStyle = "no-match";
  }

  return (
    <button onClick={click} className={`card ${cardStyle}`}>
      {cardContent}
    </button>
  );
};

export default Card;
