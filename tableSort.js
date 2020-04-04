
    let getSortPiece = document.getElementById("asc-desc-order");

let tableEle = document.getElementById("tabledata");
rows = tableEle.rows;
function sortTable(n) {
  let switching,
    i,
    x,
    y,
    doSwap,
    dir,
    swapcount = 0;

  switching = true;

  dir = "asc";

  while (switching) {
    switching = false;

    for (i = 1; i < rows.length - 2; i++) {
      doSwap = false;

      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      if (dir == "asc") {
        getSortPiece.classList.add("up");
        getSortPiece.classList.remove("down");
        if (x.innerHTML > y.innerHTML) {
          doSwap = true;
          break;
        }
      } else if (dir == "desc") {
        getSortPiece.classList.remove("up");
        getSortPiece.classList.add("down");
        if (x.innerHTML < y.innerHTML) {
          doSwap = true;
          break;
        }
      }
    }
    if (doSwap) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;

      swapcount++;
    } else {
      if (swapcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
// document.getElementById("loadmore").addEventListener("click",loadmore);
function loadmore() {
  const randomNumGen = Math.random().toFixed(3);
  const random_gen = (Math.random() * Math.floor(4)).toFixed() + 500;
  const RandomTxtMergeWithNum = randomNumGen;
  const appendrow = tableEle.insertRow(tableEle.rows.length - 1);
  const cell1 = appendrow.insertCell(0);
  const cell2 = appendrow.insertCell(1);
  cell1.innerHTML =
    "IRA" + "-" + (Math.random() * Math.floor(4)).toFixed() + 5000;
  cell2.innerHTML =
    "<p>" +
    " " +
    "$" +
    random_gen +
    "</p>" +
    "   " +
    "<p>" +
    "-" +
    randomNumGen +
    "%" +
    "  " +
    "/" +
    "$" +
    random_gen +
    "</p>";
}


