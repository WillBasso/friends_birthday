import { motion } from "framer-motion";

const random = (min, max) => Math.random() * (max - min) + min;

const Confetti = ({ count = 20 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <motion.span
          key={index}
          initial={{
            x: 200,
            y: 200,
            opacity: 1,
            scale: 1,
          }}
          animate={{
            x: random(-1080, 1080),
            y: random(-1920, 1920),
            rotate: random(0, 360),
            scale: random(1, 15),
            opacity: 0,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          style={{
            position: "absolute",
            width: 10,
            height: 10,
            backgroundColor: `hsl(${random(0, 360)}, 80%, 60%)`,
            borderRadius: "4px",
            zIndex: 2,
          }}
        />
      ))}
    </>
  );
};

export default Confetti;
