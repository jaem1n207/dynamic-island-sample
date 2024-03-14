import type { Dispatch, SetStateAction } from "react";

import "./dynamic-island.scss";

type DynamicIslandProps = {
  mode?: DynamicIslandMode;
  before?: DynamicIslandMode;
  setMode: Dispatch<SetStateAction<DynamicIslandMode>>;
  previousMode: DynamicIslandMode;
};

const DynamicIsland = ({
  mode = "default",
  before = "expanded",
  setMode,
  previousMode,
}: DynamicIslandProps) => {
  return (
    <div
      onClick={() =>
        setMode((prev) => {
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
      className={`dynamic-island dynamic-island--${mode}`}
    >
      {mode}
    </div>
  );
};

export default DynamicIsland;
