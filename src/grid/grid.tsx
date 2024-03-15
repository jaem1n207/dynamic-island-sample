type GridProps = {
  rows: number;
  columns: number;
  children: React.ReactNode;
};

function Grid({ rows, columns, children }: GridProps) {
  return (
    <div className="grid" style={{ "--rows": rows, "--columns": columns }}>
      <div className="grid-guides">
        {Array.from({ length: rows * columns }, (_, index) => {
          const x = (index % columns) + 1;
          const y = Math.floor(index / columns) + 1;

          return (
            <div
              key={index}
              className="grid-guide"
              style={{ "--x": x, "--y": y }}
            />
          );
        })}
        {children}
      </div>
    </div>
  );
}

type CellProps = {
  row: number | string;
  column: number | string;
  children: React.ReactNode;
};

function Cell({ row, column, children }: CellProps) {
  return (
    <div
      className="grid-cell"
      style={{
        gridRow: row,
        gridColumn: column,
        fontWeight: 800,
        fontSize: "1.5rem",
      }}
    >
      {children}
    </div>
  );
}

Grid.Cell = Cell;

export default Grid;
