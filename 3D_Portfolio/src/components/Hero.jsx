import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import React, { useState, useEffect } from "react";

const generateBlueShades = (length) => {
  const shades = [];
  const maxShades = 100; // Prevent excessive shades
  const actualLength = Math.min(length, maxShades);
  for (let i = 0; i < actualLength; i++) {
    const blue = 240 - Math.floor((240 / actualLength) * i);  // Fade from bright blue to lighter baby blue
    const green = 207 - Math.floor((207 / actualLength) * i); // Fade from green to light green
    shades.push(`rgb(137, ${green}, ${blue})`);
  }
  return shades;

};

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100);
  const toRotate = [
    "Comp Sci Student (unfortunately)",
    "Avid fortnite player",
    "",
    "Comedian (my true passion)",
    "Botanical Garden",
    "High XP individual",
    "Affa this website mad now??",
    "🦅🦅🦅",
    "🤫🧏‍♂️",
  ];
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(100);
    }
  };

  const shadesOfBlue = generateBlueShades(text.length);

  return (
    <section className="relative w-full mx-auto bg-primary min-h-screen flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-start gap-5">
        <div>
          <h1 className="text-4xl md:text-6xl lg:text-8xl text-secondary font-bold">
            Yooo!!, I'm <span className="text-secondary font-bold">Osaze</span>
          </h1>
          <span
            className="typing text-secondary"
            style={{ fontSize: "clamp(16px, 4.3vw, 32px)" }}
          >
            {text.split("").map((char, index) => (
              <span key={index} style={{ color: shadesOfBlue[index] }}>
                {char}
              </span>
            ))}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;