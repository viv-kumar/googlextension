function downloadTableAsCSV(tableId, filename) {
  const table = document.getElementById(tableId);
  const rows = table.querySelectorAll("tr");
  const csv = [];

  for (let i = 0; i < rows.length; i++) {
    const cells = rows[i].querySelectorAll("td, th");
    const row = [];

    for (let j = 0; j < cells.length; j++) {
      row.push(cells[j].textContent.trim());
    }

    csv.push(row.join(","));
  }

  const csvData = "data:text/csv;charset=utf-8," + csv.join("\n");
  const link = document.createElement("a");
  link.setAttribute("href", encodeURI(csvData));
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
window.addEventListener("load",()=>{
    downloadTableAsCSV("myTable", "data.csv");
})
