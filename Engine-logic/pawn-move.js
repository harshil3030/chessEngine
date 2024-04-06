// const ArrayofPawn = [];
// for (const i of nameOfCols) {
//   ArrayofPawn.push(document.getElementById(i + 2));
//   ArrayofPawn.push(document.getElementById(i + 7));
// }
// console.log(ArrayofPawn);
// for (const i of ArrayofPawn) {
//   i.addEventListener("click", () => {
//     const moves = [];
//     const idOfPawn = i.getAttribute("id");
//     console.log(idOfPawn);
//     for (let x = 1; x <= 2; x++) {
//       moves.push(
//         document.getElementById(
//           idOfPawn[0] + parseInt(parseInt(idOfPawn[1]) - x)
//         )
//       );
//     }
//     console.log(moves);
//   });
// }