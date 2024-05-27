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
let slides = document.querySelectorAll('.productSlider__LightbulbsSlideItem')
let prevButton = document.querySelector('.left')
let nextButton = document.querySelector('.right')

let currentPosition = 0
let currentMargin = 0
let slidesPerPage = 0
let slidesCount = slides.length - slidesPerPage
let containerWidth = container.offsetWidth
let slideWidth = slides[0].offsetWidth

setParams(containerWidth)

let prevKeyActive = false
let nextKeyActive = true

function throttle(func, limit) {
	let lastFunc
	let lastRan
	return function () {
		const context = this
		const args = arguments
		if (!lastRan) {
			func.apply(context, args)
			lastRan = Date.now()
		} else {
			clearTimeout(lastFunc)
			lastFunc = setTimeout(function () {
				if (Date.now() - lastRan >= limit) {
					func.apply(context, args)
					lastRan = Date.now()
				}
			}, limit - (Date.now() - lastRan))
		}
	}
}

function checkWidth() {
	containerWidth = container.offsetWidth
	slideWidth = slides[0].offsetWidth
	setParams(containerWidth)
}

const throttledCheckWidth = throttle(checkWidth, 1000)
window.addEventListener('resize', throttledCheckWidth)

function setParams(w) {
	slidesPerPage = Math.floor(w / slideWidth)
	slidesCount = slides.length - slidesPerPage
	if (currentPosition > slidesCount) {
		currentPosition -= slidesPerPage
	}
	currentMargin = -currentPosition * (100 / slidesPerPage)
	slider.style.marginLeft = currentMargin + '%'
	updateButtons()
}

function slideRight() {
	if (currentPosition < slidesCount) {
		slider.style.marginLeft = currentMargin - 100 / slidesPerPage + '%'
		currentMargin -= 100 / slidesPerPage
		currentPosition++
		updateButtons()
	}
}

function slideLeft() {
	if (currentPosition > 0) {
		slider.style.marginLeft = currentMargin + 100 / slidesPerPage + '%'
		currentMargin += 100 / slidesPerPage
		currentPosition--
		updateButtons()
	}
}

function updateButtons() {
	if (currentPosition > 0) {
		prevButton.classList.remove('inactive')
	} else {
		prevButton.classList.add('inactive')
	}
	if (currentPosition < slidesCount) {
		nextButton.classList.remove('inactive')
	} else {
		nextButton.classList.add('inactive')
	}
}

prevButton.addEventListener('click', slideLeft)
nextButton.addEventListener('click', slideRight)

setParams(containerWidth)