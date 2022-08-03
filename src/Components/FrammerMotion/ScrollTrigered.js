import DataImage from "./../Data/DataImage";
import { motion } from "framer-motion";
const ScrollTrigered = () => {
  const cardVariants = {
    offScreen: {
      opacity: 0,
      x: 200
    },
    onScreen: {
      opacity: 1,
      x: 0
    }
  };
  return (
    <motion.div className="container">
      {DataImage.map((image, index) => (
        <motion.div
          className="containerCard"
          style={{ background: image.color }}
          key={index}
          initial="offScreen"
          whileInView="onScreen"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.img src={image.src} variants={cardVariants} />
        </motion.div>
      ))}
    </motion.div>
  );
};
export default ScrollTrigered;
