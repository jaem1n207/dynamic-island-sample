import { useState } from "react";

import DynamicIsland from "./dynamic-island/dynamic-island";
import "./grid.scss";
import Grid from "./grid/grid";
import { usePrevious } from "./hooks/use-previous";
import "./playground.scss";

function Playground() {
  const [mode, setMode] = useState<DynamicIslandMode>("default");
  const previousMode = usePrevious<DynamicIslandMode>(mode);

  return (
    <div className="playground">
      <div>
        <Grid rows={5} columns={4}>
          <Grid.Cell row="auto" column={1}>
            Dynamic
          </Grid.Cell>
          <Grid.Cell row="auto" column={4}>
            Island
          </Grid.Cell>
          <Grid.Cell row={2} column={1}>
            Are
          </Grid.Cell>
          <Grid.Cell row={3} column={2}>
            you
          </Grid.Cell>
          <Grid.Cell row={4} column={3}>
            ready
          </Grid.Cell>
          <Grid.Cell row={5} column={4}>
            ?
          </Grid.Cell>
        </Grid>
      </div>
      <h1 className="title">Dynamic Island Sample</h1>
      <DynamicIsland
        mode={mode}
        before={previousMode}
        setMode={setMode}
        previousMode={previousMode}
      />
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
