import React from "react";
import { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import { screens } from "./data";

export default function App() {
  const [selected, setSelected] = useState(0);

  return (
    <AnimateSharedLayout transition={{ duration: 0.5 }}>
      <ol>
        {screens.map(({ title, color }, i) => (
          <motion.li
            key={i}
            className={`title ${i === selected && "selected"}`}
            style={{ color: i === selected ? color : "#333" }}
            onClick={() => setSelected(i)}
            animate
          >
            {i === selected && (
              <motion.div
                className="underline"
                layoutId="underline"
                style={{ backgroundColor: color }}
              />
            )}
            {title}
          </motion.li>
        ))}
      </ol>
    </AnimateSharedLayout>
  );
}
