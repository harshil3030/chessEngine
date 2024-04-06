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

//ohk so, given the ids from a1-a8 to h1-h8 now it's time to provide class which indicates which of the element of chess standing where with color-name formate

for (let i = 0; i < nameOfCols.length; i++) {
  let ele = document.getElementById(nameOfCols[i] + 2);
  ele.classList.add("black-pawn");
}
for (let i = 0; i < nameOfCols.length; i++) {
  let ele = document.getElementById(nameOfCols[i] + 7);
  ele.classList.add("white-pawn");
}

let blackRock1 = document.getElementById("a1");
let blackRock2 = document.getElementById("h1");
let blackKnight1 = document.getElementById("b1");
let blackKnight2 = document.getElementById("g1");
let blackBishop1 = document.getElementById("c1");
let blackBishop2 = document.getElementById("f1");
let blackQueen = document.getElementById("d1");
let blackKing = document.getElementById("e1");

blackRock1.classList.add("black-rock");
blackRock2.classList.add("black-rock");
blackKnight1.classList.add("black-knight");
blackKnight2.classList.add("black-knight");
blackBishop1.classList.add("black-bishop");
blackBishop2.classList.add("black-bishop");
blackQueen.classList.add("black-queen");
blackKing.classList.add("black-king");

let whiteRock1 = document.getElementById("a8");
let whiteRock2 = document.getElementById("h8");
let whiteKnight1 = document.getElementById("b8");
let whiteKnight2 = document.getElementById("g8");
let whiteBishop1 = document.getElementById("c8");
let whiteBishop2 = document.getElementById("f8");
let whiteQueen = document.getElementById("d8");
let whiteKing = document.getElementById("e8");

whiteRock1.classList.add("white-rock");
whiteRock2.classList.add("white-rock");
whiteKnight1.classList.add("white-knight");
whiteKnight2.classList.add("white-knight");
whiteBishop1.classList.add("white-bishop");
whiteBishop2.classList.add("white-bishop");
whiteQueen.classList.add("white-queen");
whiteKing.classList.add("white-king");
