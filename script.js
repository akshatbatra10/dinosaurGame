const dino = document.getElementById("dino");

const jump = () => {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
    setTimeout(() => {
      dino.classList.remove("jump");
    }, 300);
  }
};

document.addEventListener("keydown", (e) => {
  jump();
});
