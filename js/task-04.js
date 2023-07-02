function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const boxesRef = document.getElementById('boxes');
const createBtnRef = document.querySelector('button[data-create]');
const destrBtnRef = document.querySelector('button[data-destroy]');

createBtnRef.addEventListener('click', createBoxes);

function createBoxes(amount) {
  let divArr = [];
  let diveSize = {height: 30, weight: 30}
  for (let i = 1; i <= amount; i++) {
    const div = document.createElement('div');
    div.style.height=`${diveSize.height} px`;
    div.style.weight=`${diveSize.weight} px`;
    div.style.color=getRandomHexColor;
    diveSize.height+=10;
    diveSize.weight+=10;
    divArr.push(div);
  }
  const markDiv = divArr.join("");
  boxesRef.insertAdjacentHTML("afterbegin", markDiv);

  return;
}
