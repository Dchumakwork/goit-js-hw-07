function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxesRef = document.getElementById("boxes");
const createBtnRef = document.querySelector("button[data-create]");
const destrBtnRef = document.querySelector("button[data-destroy]");
const inputRef = document.querySelector("input");

createBtnRef.addEventListener("click", createBoxes);

function createBoxes(amount) {
  let divArr = [];
  let divSize = { height: 30, width: 30 };
  for (let i = 1; i <= inputRef.value; i++) {
    const div = document.createElement("div");
    div.style.height = `${divSize.height}px`;
    div.style.width = `${divSize.width}px`;
    div.style.backgroundColor = getRandomHexColor();
    divSize.height += 10;
    divSize.width += 10;
    divArr.push(div);
  }
  // const markDiv = divArr.join(" ");
  // boxesRef.insertAdjacentHTML("afterbegin", markDiv);
  boxesRef.prepend(...divArr);
  return;
}

destrBtnRef.addEventListener("click", destroyBoxes);

function destroyBoxes () {
  boxesRef.innerHTML = "";
}