import Card from "../card";

const CardRow = ({ cards }) => {
  return (
    <>
      {cards.map((card) => (
        <Card key={card.id} id={card.id} contents={card.contents} />
      ))}
    </>
  );
};

export default CardRow;
