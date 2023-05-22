

const openVideoBtn = document.querySelector('#open_video_button')
const videoWindowcontainer = document.querySelector('#video_trailer_container')
const closeIcon = document.querySelector('#close_video')
const videoWindow = document.querySelector('#video_Window')

openVideoBtn.addEventListener('click', function playVideo() {
  videoWindowcontainer.classList.toggle("active")
})

closeIcon.addEventListener('click', function boo() {
  videoWindowcontainer.classList.remove(("active"))
  videoWindow.pause()
  videoWindow.load()
})


function playVideo() {
    let i=0
    i++
  }

playVideo()

const sliderLine = document.querySelector('.slider');
const next = document.querySelector('.right-arrow')
const prev = document.querySelector('.left-arrow')

let images = [
  'url(Photos/image1.png)',
  'url(Photos/image2.png)',
  'url(Photos/image3.png)',
  'url(Photos/image4.png)',
]

let current = 0  //current image index
function showSlide(slideIndex) {
  sliderLine.style.backgroundImage = images[slideIndex]
}

function shownext() {
  current = (current + 1) % images.length;
  showSlide(current);
}

function showprev() {
  current = (current - 1 + images.length) % images.length;
  showSlide(current)
}

next.addEventListener('click', shownext)
prev.addEventListener('click', showprev)
