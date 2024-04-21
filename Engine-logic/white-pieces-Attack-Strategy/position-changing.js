let PreviousIds = [];

export function changePosition(arrayOfId, initialPosition) {
  console.log("changePositionCalled");

  // Remove event listeners from previous elements
  for (const id of PreviousIds) {
      let prevElement = document.getElementById(id);
      prevElement.removeEventListener("click", handleClick);
      console.log("Event listener removed from", id);
  }

  // Clear PreviousIds array
  PreviousIds = [];

  // Add event listeners to new elements
  for (const id of arrayOfId) {
      let element = document.getElementById(id);
      element.addEventListener("click", handleClick);
      console.log("Event listener added to", id);
      PreviousIds.push(id); // Store ID in PreviousIds array
  }

  function handleClick() {
      let initialElement = document.getElementById(initialPosition);
      let destinationElement = this; // Using 'this' to reference the clicked element
      const HTMLcontent = initialElement.innerHTML;
      initialElement.innerHTML = "";
      destinationElement.innerHTML = HTMLcontent;

      let className = initialElement.classList[1];
      console.log(className);
      initialElement.classList.remove(className);
      destinationElement.classList.add(className);

      initialPosition = destinationElement.id; // Update initialPosition with the ID of the clicked element
  }
}



// export function changePosition(arrayOfId, initialPosition) {
  
//    console.log("changePositionCalled");
//    while (PreviousIds.length > 0) {
//       let ele = document.getElementById(PreviousIds[PreviousIds.length - 1]);
//       ele.onclick = null;
//       console.log("possition cancelled" + PreviousIds[PreviousIds.length - 1]);
//       PreviousIds.pop();
//    }
  
//   PreviousIds.push(...arrayOfId);

//     for (const i of arrayOfId) {
//       let ele = document.getElementById(i);
//       console.log("things are setted at position ", i);
//       ele.addEventListener("click", () => {
//         /***
//          * remove the className from initialPossition
//          * add className to the destinationPossition
//          * change In the innerHTML
//          * remove innerHTML in initialPossition
//          * add innerHTML in destinationPossition
//          */
//         console.log("ini", initialPosition);
        
        
//         let initialElement = document.getElementById(initialPosition);
//         let destinationElement = ele;
//         const HTMLcontent = initialElement.innerHTML;
//         initialElement.innerHTML = "";
//         destinationElement.innerHTML = HTMLcontent;
        
//          let className = initialElement.classList[1];
//          console.log(className);
//           initialElement.classList.remove(className);
//           destinationElement.classList.add(className);

//           initialPosition = i;
//       });
//   }
  
//   arrayOfId = [];
  // initialPosition = null;
// }
