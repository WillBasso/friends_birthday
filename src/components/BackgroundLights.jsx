import { motion } from "framer-motion";

export default function BackgroundLights() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Rosa */}
      <motion.div
        className="absolute w-100 h-100 bg-pink-300/40 rounded-full blur-3xl"
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -100, 80, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "10%", left: "5%" }}
      />

      {/* Azul */}
      <motion.div
        className="absolute w-112.5 h-112.5 bg-blue-300/40 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 120, 0],
          y: [0, 120, -100, 0],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ top: "40%", right: "5%" }}
      />

      {/* Cinza */}
      <motion.div
        className="absolute w-125 h-125 bg-gray-300/30 rounded-full blur-3xl"
        animate={{
          x: [0, 80, -120, 0],
          y: [0, 100, -80, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ bottom: "5%", left: "30%" }}
      />
    </div>
  );
}
