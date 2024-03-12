import { motion } from "framer-motion";
import type { Dispatch, SetStateAction } from "react";

import "./dynamic-island.scss";

type DynamicIslandProps = {
  mode?: DynamicIslandMode;
  before?: DynamicIslandMode;
  onClick: Dispatch<SetStateAction<DynamicIslandMode>>;
};

const DynamicIsland = ({
  mode = "default",
  before = "expanded",
  onClick,
}: DynamicIslandProps) => {
  return (
    <motion.div
      onClick={() =>
        onClick((prev) => {
          switch (prev) {
            case "default":
              return "minimal";
            case "minimal":
              return "compact";
            case "compact":
              return "expanded";
            case "expanded":
              return "default";
            default:
              return "default";
          }
        })
      }
      id="dynamic-island"
      initial={{
        opacity: mode === before ? 1 : 0,
        scale: mode === before ? 1 : 0.9,
      }}
      animate={{
        opacity: mode === before ? 0 : 1,
        scale: mode === before ? 0.9 : 1,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 30,
        },
      }}
      exit={{ opacity: 0, filter: "blur(10px)", scale: 0 }}
      style={{ willChange: "opacity, scale" }}
      className={`dynamic-island dynamic-island--${mode}`}
    >
      {mode}
    </motion.div>
  );
};

export default DynamicIsland;
