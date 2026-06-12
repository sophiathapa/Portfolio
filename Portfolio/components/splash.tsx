"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const greetings = [
  "नमस्ते", "Hello", "Hola", "Bonjour", "Ciao",
  "Hallo", "Olá", "你好", "こんにちは",
];

const INTERVAL = 300;
const HOLD = 300;
const START_DELAY = 1000;
const EXIT_START = greetings.length * INTERVAL + HOLD;
const DONE = EXIT_START + 600;

export default function SplashScreen({ onComplete }: { onComplete: () => void }) {
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);
  const [out, setOut] = useState(false);

  useEffect(() => {
    const start = setTimeout(() => {
        setStarted(true);
    }, START_DELAY);

    return () => clearTimeout(start)
    }, []);

  useEffect(() => {
        if (!started) return ;
        const interval = setInterval(() => {
          setIndex((prev) => {
            if (prev >= greetings.length - 1) { clearInterval(interval); return prev; }
            return prev + 1;
          });
        }, INTERVAL);   

    const t1 = setTimeout(() => setOut(true), EXIT_START + START_DELAY);
    const t2 = setTimeout(onComplete, DONE + START_DELAY);
    return () => { clearInterval(interval); clearTimeout(t1); clearTimeout(t2); };
  }, [started]);



  return (
    <>
      <AnimatePresence>
        {!out && (
          <motion.div
            key="splash"
            exit={{ opacity: 0}}
            transition={{duration: EXIT_START }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "#48CAE4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AnimatePresence mode="wait">
                {started && (
                    <motion.h1
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0}}
                        transition={{ duration:0.1}}
                        className="text-black text-5xl font-semi-bold"
                    >
                        • {greetings[index]}
                    </motion.h1>
                )}

            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}