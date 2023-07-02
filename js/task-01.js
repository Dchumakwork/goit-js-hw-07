const listArr = document.querySelectorAll(".item");
console.log(`Number of categories: ${listArr.length}`);

listArr.forEach((element) => {
  const titleRef = element.querySelector("h2");
  console.log(`Category: ${titleRef.textContent}`);
  const innListArr = element.querySelectorAll("li");
  console.log(`Elements: ${innListArr.length}`);
  return;
});
