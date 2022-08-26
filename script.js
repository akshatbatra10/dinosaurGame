const dino = document.getElementById("dino");

const jump = () => {
  dino.classList.add("jump");
};

document.addEventListener("keydown", (e) => {
  jump();
});
