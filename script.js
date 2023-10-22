fetch("https://randomuser.me/api/?results=30")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
    let tableData = "";
    data.results.map((result) => {
      tableData += `
        <tr>
          <td>${result.name.first}</td>
          <td>${result.location.city}</td>
        </tr>`;
    });
    document.getElementById("table_data").innerHTML = tableData;
  })
  .catch((err) => {
    console.error(err);
  });
