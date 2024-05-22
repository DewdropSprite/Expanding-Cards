console.log("hello world");

const photos = document.querySelectorAll(".photo");

console.log(photos);
console.log(photos[2])

photos.forEach((photo) => {
  photo.addEventListener("click", () => {
    console.log("photo clicked!");
    removeActiveClass();
    photo.classList.add('active')
  });
});

function removeActiveClass() {
    photos.forEach((photo) => {
        photo.classList.remove('active')
    })
}
