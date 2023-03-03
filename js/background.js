const imges = ["0.jpg", "1.jpg", "2.jpg"];
const IMG_CLASSNAME = "img";
const chosenImage = imges[Math.floor(Math.random() * imges.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add(IMG_CLASSNAME);
document.body.appendChild(bgImage);
