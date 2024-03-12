import { useState } from "react";

import DynamicIsland from "./dynamic-island/dynamic-island";
import "./playground.scss";
import { usePrevious } from "./hooks/use-previous";

function Playground() {
  const [mode, setMode] = useState<DynamicIslandMode>("default");
  const previousMode = usePrevious(mode);

  return (
    <div className="playground">
      <h1 className="title">Dynamic Island Sample</h1>
      <DynamicIsland mode={mode} before={previousMode} onClick={setMode} />
      <div className="controls">
        <button onClick={() => setMode("default")}>Default</button>
        <button onClick={() => setMode("minimal")}>Minimal</button>
        <button onClick={() => setMode("compact")}>Compact</button>
        <button onClick={() => setMode("expanded")}>Expanded</button>
      </div>
    </div>
  );
}

export default Playground;
