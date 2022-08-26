const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

const jump = () => {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
    setTimeout(() => {
      dino.classList.remove("jump");
    }, 300);
  }
};

const isAlive = setInterval(() => {
  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let cactusLeft = parseInt(
    window.getComputedStyle(cactus).getPropertyValue("left")
  );
  if (dinoTop >= 140 && cactusLeft < 50 && cactusLeft > 0) {
    alert("Game Over");
  }
}, 10);

document.addEventListener("keydown", (e) => {
  jump();
});
