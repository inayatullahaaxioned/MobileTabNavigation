/* Author: 
Inayatullah
*/

const image = document.querySelector(".image img"),
  buttons = document.querySelectorAll('li'),
  imageList = ['assets/images/Home.jpg', 'assets/images/work.jpg',
    'assets/images/blog.jpg', 'assets/images/aboutus.jpg'];

buttons.forEach(function (btn, index) {
  btn.index = index;
  btn.addEventListener('click', changeImage)
})

function changeImage() {
  image.src = imageList[this.index];
}






















