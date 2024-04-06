
// import * as addColor from './add-color.js';
// import {doColor} from 'logic/add-color.js'
import { doColor } from "./add-color.js";

const Allsquare = document.querySelectorAll(".square");
let ArrayOfWhitePawn = [];
for(let i of Allsquare) {
    let possibleMoves = [];
    let arrayOfIdToBeColored = [i.getAttribute("id")];
    i.addEventListener("click", () => {
        let className = i.getAttribute("class");
        if (className.includes("white-pawn")) {
            let currentId = i.getAttribute("id");
            for (let x = 1; x <= 2; x++) {
                if (parseInt(currentId[1] - x) >= 1) 
                possibleMoves.push(currentId[0] + (parseInt(currentId[1]) - x));
            }
            console.log(possibleMoves);
            arrayOfIdToBeColored.push(...possibleMoves);
            console.log(arrayOfIdToBeColored);
        }
        doColor(arrayOfIdToBeColored);
        possibleMoves = [];
        arrayOfIdToBeColored = [i.getAttribute("id")];
    });
    
}