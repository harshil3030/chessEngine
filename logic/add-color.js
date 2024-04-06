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
};