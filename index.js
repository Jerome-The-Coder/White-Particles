const body = document.body;

body.addEventListener("mousemove", (e) => {
  e.preventDefault();
  const span = document.createElement("span");
  const size = Math.random() * 50;
  const x = e.offsetX;
  const y = e.offsetY;
  span.style.height = `${size}px`;
  span.style.width = `${size}px`;
  span.style.left = `${x}px`;
  span.style.top = `${y}px`;
  body.appendChild(span);
  setTimeout(() => {
    span.remove();
  }, 3000);
});
