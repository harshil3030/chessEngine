export function changePosition(arrayOfId, initialPosition) {
   for (const i of arrayOfId) {
        let ele = document.getElementById(i);
        ele.onclick = null;
   }
  
    for (const i of arrayOfId) {
    let ele = document.getElementById(i);
    ele.onclick = () => {
      /***
       * remove the className from initialPossition
       * add className to the destinationPossition
       * change In the innerHTML
       * remove innerHTML in initialPossition
       * add innerHTML in destinationPossition
       */

      let initialElement = document.getElementById(initialPosition);
      let destinationElement = ele;
      const HTMLcontent = initialElement.innerHTML;
      initialElement.innerHTML = "";
      destinationElement.innerHTML = HTMLcontent;
      let className = initialElement.classList[1];
      console.log(className);
      initialElement.classList.remove(className);
      destinationElement.classList.add(className);

      initialPosition = i;
    };
  }
  
//   arrayOfId = [];
  // initialPosition = null;
  console.log("changePositionCalled");
}
