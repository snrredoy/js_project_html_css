const bodyElement = document.querySelector("body");
bodyElement.addEventListener("mousemove", (event) => {
  const x = event.offsetX;
  const y = event.offsetY;

  const spanElement = document.createElement("span");
  const iElement = document.createElement("i");

  iElement.style.left = x - 10 + "px";
  iElement.style.top = y - 10 + "px";
  bodyElement.appendChild(iElement);

  spanElement.style.left = x + "px";
  spanElement.style.top = y + "px";
  bodyElement.appendChild(spanElement);

  const randomNumber = Math.random() * 100;
  spanElement.style.height = randomNumber + "px";
  spanElement.style.width = randomNumber + "px";

  iElement.style.height = randomNumber - 10 + "px";
  iElement.style.width = randomNumber - 10 + "px";

  setTimeout(() => {
    spanElement.remove();
    iElement.remove();
  }, 8000);
});