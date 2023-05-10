import { useSelector } from "react-redux";

import CardRow from "../../component/cardRow";
import { selectBoard } from "./boardSlice";

const Board = () => {
  const currentBoard = useSelector(selectBoard);
  const numberOfCards = currentBoard.length;
  const columns = 3;
  const rows = Math.floor(numberOfCards / columns);

  const getRowCards = (row) => {
    const rowCards = [];
    for (let col = 0; col < columns; col++) {
      const cardIndex = row * columns + col;
      rowCards.push(currentBoard[cardIndex]);
    }
    return rowCards;
  };

  let content = [];
  for (let row = 0; row < rows; row++) {
    const rowCards = getRowCards(row);
    content.push(<CardRow key={row} cards={rowCards} />);
  }
  return <div className="cards-container">{content}</div>;
};

export default Board;
