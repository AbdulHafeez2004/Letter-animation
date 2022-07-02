function createParagraph(text, className) {
  let p = document.createElement("p");
  p.innerText = text;
  if (className) {
    p.classList.add(className);
  }
  return p;
}
window.addEventListener("keypress", function (e) {
  let oldP = document.querySelector(".letter");
  if (oldP !== null) {
    oldP.parentElement.removeChild(oldP);
  }
  let p = createParagraph(e.key, "letter");
  document.body.append(p);
});
