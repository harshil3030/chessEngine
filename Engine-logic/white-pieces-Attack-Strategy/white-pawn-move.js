// import * as addColor from './add-color.js';
// import {doColor} from 'logic/add-color.js'
import { doColor } from "../add-color.js";
import { doColorOnAttack } from "../add-color.js";
import { changePosition } from "./position-changing.js";

const Allsquare = document.querySelectorAll(".square");
let ArrayOfWhitePawn = [];
for (let i of Allsquare) {
  let possibleMoves = [];
  let arrayOfIdToBeColored = [i.getAttribute("id")];
  let attackMoves = [];

  i.addEventListener("click", () => {
    let className = i.getAttribute("class");
    let currentId;
    if (className.includes("white-pawn")) {
      currentId = i.getAttribute("id");

      for (let x = 1; x <= 2; x++) {
        if ((x === 1 || currentId[1] === "7")) {
          if (parseInt(currentId[1] - x) >= 1) {
            let eleAbove = document.getElementById(currentId[0] + (parseInt(currentId[1]) - x));
            if (eleAbove.innerHTML.includes("black") || eleAbove.innerHTML.includes("white")) continue;  
            possibleMoves.push(currentId[0] + (parseInt(currentId[1]) - x));       
          }
        }
      }

      //Attack-dimentions
      let leftCorner = currentId[0].charCodeAt(0) - 1;
      leftCorner = String.fromCharCode(leftCorner);
      leftCorner += parseInt(currentId[1]) - 1;
      let rightCorner = currentId[0].charCodeAt(0) + 1;
      rightCorner = String.fromCharCode(rightCorner);
      rightCorner += parseInt(currentId[1]) - 1;
      
      let leftCornerPiece;
      let rightCornerPiece;
      if (leftCorner[0] >= "a" && leftCorner[1] >= "1") {
        leftCornerPiece = document.getElementById(leftCorner);
      }
      if (rightCorner[0] <= "h" && rightCorner[1] >= "1") {
        rightCornerPiece = document.getElementById(rightCorner);
      }

      if (leftCornerPiece) {
        if (leftCornerPiece.innerHTML.includes("black")) {
          attackMoves.push(leftCorner);
        }
      }

      if (rightCornerPiece) {
        if (rightCornerPiece.innerHTML.includes("black")) {
          attackMoves.push(rightCorner);
        }
      }
      console.log(attackMoves);
      arrayOfIdToBeColored.push(...possibleMoves);
    }
    doColor(arrayOfIdToBeColored);
    doColorOnAttack(attackMoves, i.getAttribute("id"));
    
    attackMoves = [];
    possibleMoves = [];
    arrayOfIdToBeColored = [i.getAttribute("id")];
  });
}