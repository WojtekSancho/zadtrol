let plus = document.querySelector('.plus'),
	minus = document.querySelector('.minus'),
	num = document.querySelector('.num')
let a = 1
plus.addEventListener('click', () => {
	a++
	a = a < 10 ? '0' + a : a
	num.innerText = a
	console.log(a)
})

minus.addEventListener('click', () => {
	if (a > 1) {
		a--
		a = a < 10 ? '0' + a : a
		num.innerText = a
	}
})

let container = document.querySelector('#productSlider__Container')
let slider = document.querySelector('#productSlider__LightbulbsSlider')
let slides = document.querySelectorAll('.productSlider__LightbulbsSlideItem').length
let buttons = document.querySelector('.lightbulbs__Btn')

let currentPosition = 0
let currentMargin = 0
let slidesPerPage = 0
let slidesCount = slides - slidesPerPage
let containerWidth = container.offsetWidth
setParams(containerWidth);
let prevKeyActive = false
let nextKeyActive = true

window.addEventListener('resize', checkWidth)

function checkWidth() {
	containerWidth = container.offsetWidth
	setParams(containerWidth)
}

function setParams(w) {
	if (w < 551) {
		slidesPerPage = 1
	} else {
		if (w < 901) {
			slidesPerPage = 2
		} else {
			if (w < 1101) {
				slidesPerPage = 3
			} else {
				slidesPerPage = 5
			}
		}
	}
	slidesCount = slides - slidesPerPage
	if (currentPosition > slidesCount) {
		currentPosition -= slidesPerPage
	}
	currentMargin = -currentPosition * (100 / slidesPerPage)
	slider.style.marginLeft = currentMargin + '%'
	if (currentPosition > 0) {
		buttons[0].classList.remove('inactive')
	}
	if (currentPosition < slidesCount) {
		buttons[1].classList.remove('inactive')
	}
	if (currentPosition >= slidesCount) {
		buttons[1].classList.add('inactive')
	}
}

setParams()

function slideRight() {
	if (currentPosition != slidesCount) {
		slider.style.marginLeft = currentMargin - 100 / slidesPerPage + '%'
		currentMargin -= 100 / slidesPerPage
		currentPosition++
	}
	if (currentPosition == slidesCount) {
		buttons[1].classList.add('inactive')
	}
	if (currentPosition > 0) {
		buttons[0].classList.remove('inactive')
	}
}

function slideLeft() {
	if (currentPosition != 0) {
		slider.style.marginLeft = currentMargin + 100 / slidesPerPage + '%'
		currentMargin += 100 / slidesPerPage
		currentPosition--
	}
	if (currentPosition === 0) {
		buttons[0].classList.add('inactive')
	}
	if (currentPosition < slidesCount) {
		buttons[1].classList.remove('inactive')
	}
}


const wrapper = document.querySelector ('.Laptop__LightbulbsProducts')
let pressed = false
let startX = 0
wrapper.addEventListener('mousedown', function(e){
    pressed = true
    startX = e.clientX
    this.style.cursor = "grabbing"
})

wrapper.addEventListener('mouseleave', function(e){
    pressed = false
})

window.addEventListener('mouseup', function(e){
    pressed = false
    wrapper.style.cursor = "grab"
})

wrapper.addEventListener('mousemove', function(e){
    if(!pressed) {
        return
    }
    this.scrollLeft += startX - e.clientX
})

const wrappy = document.querySelector ('.Mobile__LightbulbsProducts')
let press = false
let startY = 0
wrappy.addEventListener('mousedown', function(e){
    press = true
    startY = e.clientX
    this.style.cursor = "grabbing"
})

wrappy.addEventListener('mouseleave', function(e){
    press = false
})

window.addEventListener('mouseup', function(e){
    press = false
    wrapper.style.cursor = "grab"
})

wrappy.addEventListener('mousemove', function(e){
    if(!press) {
        return
    }
    this.scrollLeft += startY - e.clientX
})