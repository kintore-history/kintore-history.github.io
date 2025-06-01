const columns = ["日付", "種目名", "重量(kg)", "回数", "セット数", "メモ"];

const grid = new gridjs.Grid({
  columns: columns.map(col => ({ name: col, editor: true })),
  data: [],
  pagination: false,
  sort: false,
  search: false,
  resizable: true,
  className: {
    table: "grid-table"
  }
}).render(document.getElementById("grid"));

function exportJSON() {
  grid.config.store.getData().then(data => {
    const records = data.map(row => ({
      date: row[0],
      name: row[1],
      weight: parseFloat(row[2]) || 0,
      reps: parseInt(row[3]) || 0,
      sets: parseInt(row[4]) || 0,
      note: row[5] || ""
    }));

    const blob = new Blob([JSON.stringify({ records }, null, 2)], { type: "application/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "training-log.json";
    link.click();
  });
}
