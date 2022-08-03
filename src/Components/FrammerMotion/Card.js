import { motion } from "framer-motion";
const Card = ({ card, setCards, removeCard }) => {
  const variants = {
    initiall: {
      strokeWidth: 2,
      pathLength: 0
    },
    animatee: {
      pathLength: 1,
      transition: { duration: 1, when: "afterChildren", staggerChildren: 1 }
    },
    hoverr: {
      strokeWidth: 4
    }
  };

  function handleRemove() {
    removeCard(card.id);
  }
  return (
    <motion.div
      initial={{ x: "-300px", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      className="card"
      style={{ width: "18rem" }}
      exit={{ y: "-300px", opacity: 0 }}
      layout
    >
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#333"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        variants={variants}
        initial="initiall"
        animate="animatee"
        whileHover="hoverr"
        onClick={handleRemove}
      >
        <motion.path d="M 18 6 L 6 18" variants={variants} />
        <motion.path d="M 6 6 L 18 18" variants={variants} />
      </motion.svg>
      <img src={card.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Cool Image</h5>
      </div>
    </motion.div>
  );
};

export default Card;
