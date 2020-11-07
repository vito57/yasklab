import React from "react";
import { motion } from "framer-motion";
export default function App() {
  return (
    <div className="App">
      <motion.img
        className="logo"
        //initial={false }
        //animate={{ y: 100}}

        animate={{ y: [10, -15, 10] }}
        transition={{ duration: 5, ease: "easeInOut", repeat: Infinity }}
        src="https://cdn.dribbble.com/users/532710/avatars/normal/b86bdce1602eb0d2711572beb6b22301.png?1596703248"
        alt="Yask"
      />
    </div>
  );
}
