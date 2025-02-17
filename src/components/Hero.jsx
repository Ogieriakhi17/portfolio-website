import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";


import portVideo from "../assets/portvideo.mp4";

const Hero = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(100);
  const toRotate = [
    "Comp Sci Student (a blessing and a curse)",
    "Keyboard warrior (literally, I write code)",
    "Dreaming of a bug-free day",
    "Currently debugging life",
    "Certified StackOverflow lurker",
    "‘Hello World’ enthusiast",
    "Ctrl + C, Ctrl + V magician 🪄",
    "Future billionaire (trust me...)",
    "🦅🦅🦅",
    "I do my own stunts (in code)",
    "Avid Fortnite player",
    "AI whisperer in training",
    "Adding this to my GitHub readme",
    "Pro gamer in my dreams",
    "Full-time tiktok watcher, part-time coder",
    "Comedian (my true passion)",
    "Cinnamon roll addict + coder = chaos",
    "404: Witty comment not found",
    "Meme curator and compiler",
    "Hacker vibes, but legally",
    "GO COUGSSSSS",
    "Lord of the Loops 🔁",
    "Code so clean, it’s sparkling ✨",
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

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={portVideo}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hello, I'm <span className="text-gray-300">Osaze</span>
        </motion.h1>
        <span
            className="typing text-secondary"
            style={{ fontSize: "clamp(16px, 4.3vw, 32px)" }}
          >
            {text.split("").map((char, index) => (
              <span key={index} style={{ color: "white" }}>
                {char}
              </span>
            ))}
          </span>

        <motion.div
          className="flex justify-center gap-4 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
