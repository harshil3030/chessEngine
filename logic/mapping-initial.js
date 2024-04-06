//creating array of columns so we can give id to  all squares
const ArrayofCols = document.querySelectorAll(".col");
const nameOfCols = ["a", "b", "c", "d", "e", "f", "g", "h"];

//setAttribute and giving id to all squares from a1 to h8
let colnumber = 0;
for (const i of ArrayofCols) {
  let counter = 1;
  for (const el of i.children) {
    el.setAttribute("id", nameOfCols[colnumber] + counter);
    counter++;
  }
  colnumber++;
}
