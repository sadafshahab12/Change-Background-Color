function changeClr() {
  let bgClr = `rgb(${Math.floor(Math.random() * 255) + 1} ,${
    Math.floor(Math.random() * 255) + 1
  } ,${Math.floor(Math.random() * 255) + 1})`;
  document.body.style.backgroundColor = bgClr;

  //   ----textClr---
  let textClr = `rgb(${Math.floor(Math.random() * 255) + 1} ,${
    Math.floor(Math.random() * 255) + 1
  } ,${Math.floor(Math.random() * 255) + 1})`;

  let heading = document.getElementById("heading");
  heading.style.color = textClr;
}
