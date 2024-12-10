function about() {
  window.location.href = "about.html";
}
window.about = about;

function blogs() {
  window.location.href = "blogs.html";
}
window.blogs = blogs;

function backHome() {
  window.location.href = "index.html";
}
window.backHome = backHome;

var counter = 1;
function displayNextImage() {
  var image = document.getElementById("welcomeKale");
  image.src = "images/slide-" + counter + ".JPEG";
  counter = counter + 1;

  if (counter == 6) {
    counter = 1;
  }

}
setInterval(displayNextImage, 3000);

displayNextImage();