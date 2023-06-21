let images = document.querySelectorAll('img');
    images.forEach(image => {    
        image.addEventListener=('mouseenter', changeImage);
        image.addEventListener=('mouseleave', changeImage);
    });

function changeImage() {
    console.log(this)
}