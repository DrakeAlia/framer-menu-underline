import React from "react";
import { useState } from "react";
// import motion and AnimateSharedLayout*(v5 removes AnimateSharedLayout)
import { motion } from "framer-motion";
import { screens } from "./data";

export default function App() {
  const [selected, setSelected] = useState(0);

  return (
    // add transition prop with object of duration
    <motion.ul layout transition={{ duration: 0.5 }}>
      <ol>
        {/* add motion to li */}
        {screens.map(({ title, color }, i) => (
          <motion.li
            key={i}
            className={`title ${i === selected && "selected"}`}
            style={{ color: i === selected ? color : "#333" }}
            onClick={() => setSelected(i)}
            // add animate prop
            animate
          >
            {i === selected && (
              <motion.div
                className="underline"
                // add layoutId prop with the string of underline
                layoutId="underline"
                style={{ backgroundColor: color }}
              />
            )}
            {title}
          </motion.li>
        ))}
      </ol>
    </motion.ul>
  );
}
