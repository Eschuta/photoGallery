function upDate(previewPic) {
  console.log("Image alt:", previewPic.alt);
  console.log("Image source:", previewPic.src);

  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
  imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
  const imageDiv = document.getElementById("image");
  imageDiv.style.backgroundImage = "";
  imageDiv.innerHTML = "Hover over an image below to display here.";
}

// Add event listeners for focus and blur
document.querySelectorAll('.preview').forEach(image => {
  image.addEventListener('focus', function() {
    console.log(`${image.alt} has gained focus!`);
  });

  image.addEventListener('blur', function() {
    console.log(`${image.alt} has lost focus!`);
  });
});

window.addEventListener('load', function() {
  console.log("Page has fully loaded!");
  addTabindexToImages();
});

function addTabindexToImages() {
  const images = document.querySelectorAll('.preview');
  console.log("Adding tabindex attributes to images.");

  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute('tabindex', '0');
    console.log(`Tabindex set for ${images[i].alt}: ${images[i].tabIndex}`);
  }
} 
