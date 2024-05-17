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
const wrapper = document.querySelector ('.products-mobile-first')
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