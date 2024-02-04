const image = document.getElementById("review");

let tabIndex = 0;

function checkClick() {
  tabIndex++;
  console.log(tabIndex % 7);
  let getImage = document.getElementById("image" + (tabIndex % 7));
  if (tabIndex % 7 != 0) {
    console.log(getImage.src);
    image.style.backgroundImage = "url(" + getImage.src + ")";
    image.innerText = getImage.alt;
  } else {
    image.style.backgroundImage = "url('')";
    image.innerText = "Hover over an image below to display here.";
  }
}

document.addEventListener("keydown", function (event) {
  checkClick();
});

for (let i = 1; i < 7; i++) {
  document
    .getElementById("image" + i)
    .addEventListener("mouseover", function (event) {
      console.log(event.target);
      console.log(event.target.src);
      image.style.backgroundImage = "url(" + event.target.src + ")";
      image.innerText = event.target.alt;
    });

  document
    .getElementById("image" + i)
    .addEventListener("mouseleave", function (event) {
      image.style.backgroundImage = "url('')";
      image.innerText = "Hover over an image below to display here.";
    });
}
