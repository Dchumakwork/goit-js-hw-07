const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const elementsArr = ingredients.map((ingredient) => {
  const element = document.createElement("li");
  element.textContent = ingredient;
  element.classList.add("item");
  return element;
});

const listRef = document.getElementById("ingredients");
listRef.append(...elementsArr);
