import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Card from "./Card";
import { AnimatePresence } from "framer-motion";
const Coba = () => {
  const [cards, setCards] = useState(defaultCards);

  async function addCard() {
    const res = await fetch("https://source.unsplash.com/random");
    if (!res.ok) return;
    const id = uuid();
    const card = { id, img: res.url };
    setCards([...cards, card]);
  }

  function removeCard(id) {
    setCards(cards.filter((card) => card.id !== id));
  }

  return (
    <>
      <div>
        <h1>Sweet Animations!</h1>
      </div>
      <button className="btn btn-primary" onClick={addCard}>
        Add Card
      </button>
      <div className="list">
        {cards.map((card) => (
          <AnimatePresence>
            <Card
              card={card}
              setCards={setCards}
              removeCard={removeCard}
              key={card.id}
            />
          </AnimatePresence>
        ))}
      </div>
    </>
  );
};

const defaultCards = [
  {
    id: 0,
    img:
      "https://images.unsplash.com/photo-1587900437942-8758241767ef?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=300"
  },
  {
    id: 1,
    img:
      "https://images.unsplash.com/photo-1586336900429-71f0642f66fd?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=400&ixlib=rb-1.2.1&q=80&w=300"
  }
];
export default Coba;
