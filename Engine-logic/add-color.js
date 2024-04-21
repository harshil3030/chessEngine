import { changePosition } from "./white-pieces-Attack-Strategy/position-changing.js";

let arrayOfIdAlreadyColored = [];
export function doColor(arrayOfId) {
    while(arrayOfIdAlreadyColored.length > 0) {
        const ele = document.getElementById(arrayOfIdAlreadyColored[arrayOfIdAlreadyColored.length - 1]);
        ele.removeAttribute('style');
        arrayOfIdAlreadyColored.pop();
    }
    
    arrayOfIdAlreadyColored.push(...arrayOfId);
    let firstElement = document.getElementById(arrayOfIdAlreadyColored[0]);
    if(firstElement.innerHTML.includes('white') || firstElement.innerHTML.includes('black')) {
        for (const i of arrayOfIdAlreadyColored) {
            const ele = document.getElementById(i);
                ele.style.backgroundColor = 'yellow';
                ele.style.boxShadow = '0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black';
        }
    }
    console.log(arrayOfId);
    if (arrayOfId.length > 1) {
        changePosition(arrayOfId.slice(1,arrayOfId.length), arrayOfId[0]);
    }
};

let arrayOfIdAlreadyColoredForAttack = [];
export function doColorOnAttack(arrayOfId, initialPosition) {
    while(arrayOfIdAlreadyColoredForAttack.length > 0) {
        const ele = document.getElementById(arrayOfIdAlreadyColoredForAttack[arrayOfIdAlreadyColoredForAttack.length - 1]);
        ele.removeAttribute('style');
        arrayOfIdAlreadyColored.pop();
    }

    if (arrayOfId.length > 0) {
        arrayOfIdAlreadyColoredForAttack.push(...arrayOfId);
        for (const i of arrayOfIdAlreadyColoredForAttack) {
            const ele = document.getElementById(i);
            ele.style.backgroundColor = 'red';
            ele.style.boxShadow = '0 0 3px black, 0 0 3px black, 0 0 3px black, 0 0 3px black';
        }
        console.log(initialPosition);
        console.log(arrayOfId);
        changePosition(arrayOfId, initialPosition);
    }
};