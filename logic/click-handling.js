//we have to add elevent listener on click and make style background color yellow and remove background color(style) of rest element

const arrayofSquare = document.getElementsByClassName("square");
const triggerColor = [];
for (const ele of arrayofSquare) {
  ele.addEventListener("click", () => {
    const attribute = ele.getAttribute("id");
    const innerHtml = document.getElementById(attribute).innerHTML;
    if (innerHtml.includes("black") || innerHtml.includes("white")) {
      for (let i = 0; i < triggerColor.length; i++) {
        triggerColor[i].removeAttribute("style");
        triggerColor.length = 0;
      }
      document.getElementById(attribute).style.backgroundColor = "yellow";
      triggerColor.push(ele);
    }
  });
}
