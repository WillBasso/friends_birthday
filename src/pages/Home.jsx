import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Confetti from "../components/Confetti";
import BackgroundLights from "../components/BackgroundLights";
import meme1 from "../assets/meme-1.webp";
import meme2 from "../assets/meme-2.webp";
import present from "../assets/svg_gift.svg";

const Home = () => {
  const navigate = useNavigate();
  const [jokeBtnClicked, setJokeBtnClicked] = useState(false);
  const [openingGift, setOpeningGift] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <BackgroundLights />
      <div className="min-h-screen flex justify-center px-4 py-2.5">
        <div className="w-full max-w-6xl h-full">
          <div className="p-0.5 rounded-2xl bg-linear-to-r from-pink-300 via-blue-300 to-gray-300 h-full">
            <div className="rounded-2xl bg-white/80 backdrop-blur-sm h-full p-6 md:p-10 flex flex-col">
              <div className="flex flex-col items-center text-center gap-2">
                <h1 className="text-3xl font-script">By Willian Basso</h1>
                <h2 className="text-lg">
                  Vou tentar não escrever muito... hihi{" "}
                  <motion.span
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 1.1,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    style={{ display: "inline-block" }}
                  >
                    🤭
                  </motion.span>
                </h2>
                <div className="text-sm opacity-70">2026</div>
              </div>
              <div className="paragraph flex flex-col gap-6">
                <p>
                  Eu sei que hoje é seu aniversario e eu não sou de ficar
                  publicando stories, sendo que posso desejar o parabéns no "PV"
                  ou pessoalmente(odio desse sistema capitalista e
                  instagramável, que eu caio sempre 😖).
                </p>
                <p>
                  E eu sou pobre, então usei minhas grandes habilidades 😎 para
                  escrever esse site, e tem copyrights de acordo com vozes da
                  minha cabeça.
                </p>
                <p>
                  Seu presente 🎁 ta no botão, pode clicar nele! se sabe né?
                </p>
              </div>
              {!jokeBtnClicked ? (
                <button
                  onClick={() => setJokeBtnClicked(true)}
                  className="btnhover"
                >
                  🤔 👉 Não Clica aqui
                </button>
              ) : (
                <div className="flex flex-col items-center gap-2">
                  <div className="flex justify-center">
                    <img
                      src={meme1}
                      alt="Meme de aniversario 1"
                      width="50%"
                    />
                    <img
                      src={meme2}
                      alt="Meme de aniversario 2"
                      width="50%"
                    />
                  </div>
                  <p className="font-semibold">
                    Brincadeiras a parte, seu real presente esta no pacote
                    abaixo!{" "}
                  </p>
                  <div style={{ position: "relative" }} className="w-fit h-fit">
                    {openingGift && <Confetti count={50} />}

                    <motion.div
                      animate={
                        openingGift
                          ? {
                              scale: 20,
                              rotate: 90,
                              filter: "blur(4px)",
                              opacity: 0.8,
                            }
                          : { scale: [1, 1.05, 1] }
                      }
                      transition={
                        openingGift
                          ? { duration: 0.9, ease: "easeInOut" }
                          : { duration: 1.5, repeat: Infinity }
                      }
                      whileHover={
                        !openingGift ? { scale: 1.15, rotate: 3 } : {}
                      }
                      whileTap={!openingGift ? { scale: 0.95 } : {}}
                      onClick={() => {
                        if (openingGift) return;

                        setOpeningGift(true);

                        setTimeout(() => {
                          window.scrollTo(0, 0);
                          navigate("/gift");
                        }, 200);
                      }}
                      style={{
                        cursor: "pointer",
                        display: "inline-block",
                        position: "relative",
                        zIndex: 1,
                        transformOrigin: "center center",
                      }}
                    >
                      <img
                        src={present}
                        alt="Uma caixa de presente amarelo"
                        width="100%"
                      />
                    </motion.div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
