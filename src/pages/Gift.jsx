import { useState } from "react";
import { motion } from "framer-motion";
import BackgroundLights from "../components/BackgroundLights";
import friends from "../assets/edicaoboa.png";

const Gift = () => {
  const [reviewBtn, setReviewBtn] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.01, filter: "blur(6px)" }}
      animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, scale: 0.01 }}
      transition={{
        duration: 0.2,
        ease: "easeOut",
      }}
      style={{ transformOrigin: "center center" }}
    >
      <BackgroundLights/>
      <div className="min-h-screen flex justify-center px-4 py-2.5">
        <div className="w-full max-w-6xl h-full">
          <div className="p-0.5 rounded-2xl bg-linear-to-r from-pink-300 via-blue-300 to-gray-300 h-full">
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm h-full p-6 md:p-10 flex flex-col">
              <h1 className="text-5xl font-script text-center py-1.5">
                to Patrick
              </h1>

              <p className="text-2xl font-script text-center py-1.5">
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ display: "inline-block" }}
                >
                  🎊
                </motion.span>{" "}
                Feliz Aniversário!{" "}
                <motion.span
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ display: "inline-block" }}
                >
                  🎉
                </motion.span>
              </p>
              <div className="paragraph flex flex-col gap-6 py-1.5">
                <p>
                  Por essa palavras eu venho espressar minha mais sincera e
                  verdadeira forma de te agradecer por ser meu grande amigo(Meu
                  BFF kkkk) e melhor chefe de trabalho que tive! Mas como meu
                  amigo sempre!😍{" "}
                </p>

                <p>
                  Por isso venho te desejar meus parabens,🎂 feliz aniversario e
                  claro te desejar sempre tudo de bom e do melhor que esse
                  mundo/vida(doida e estranha) pode oferecer e obvio em
                  abundacia saude💯, amor💖, alegria🍻, felicidade🌈 e
                  sucesso📈.
                </p>

                <p>
                  Como não tinha fotinha nossa junto eu pedi pra IA gerar essa,
                  não me julge, mas tomara que um dia nos tiremos fotos dos
                  nossos roles de moto! 🏍️
                </p>
              </div>
              <div>
                <h2 className="text-center font-bold text-2xl py-1.5">
                  <span
                    style={{ position: "relative", display: "inline-block" }}
                  >
                    Feliz Niver{" "}
                    <motion.span
                      animate={{
                        rotate: [0, 30, 30, 0],
                        y: [0, -10, -10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                      style={{
                        display: "inline-block",
                        transformOrigin: "bottom center",
                      }}
                    >
                      🏍️
                    </motion.span>
                    !!
                    <motion.span
                      animate={{ x: ["-75%", "150%"] }}
                      transition={{
                        duration: 0.9,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      style={{
                        position: "absolute",
                        bottom: -4,
                        left: 0,
                        width: "50%",
                        height: 3,
                        backgroundColor: "#023f33",
                        borderRadius: 2,
                      }}
                    />
                  </span>
                </h2>
                <img
                  src={friends}
                  alt="placeholder"
                  className="m-auto"
                />
              </div>
              <div className="py-1.5 mt-5">
                <p className="font-extralight">
                  Avalie abaixo o que achou do presente:
                </p>
                <button
                  onClick={() => setReviewBtn(true)}
                  className="btn-review"
                >
                  Esperava mais!
                </button>
                <button
                  onClick={() => setReviewBtn(true)}
                  className="btn-review"
                >
                  Achei que era uma Africa Twin
                </button>
                <button
                  onClick={() => setReviewBtn(true)}
                  className="btn-review"
                >
                  Sashay, away
                </button>
                {reviewBtn && (
                  <p className="py-1.5 font-extralight">
                    Infelizmente avalição não esta disponivel por falta de 💸
                    acuê 💸!
                  </p>
                )}
              </div>
              <p>
                Mas se leu até aqui tire um print da tela com a foto e me mande
                para eu guardar de recordação! 📷
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Gift;
