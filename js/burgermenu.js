const toggleBtn = document.querySelector('.burger__menu--toggle-btn')
const toggleicon = document.querySelector('.toggle-btn--icon')
const menuAside = document.querySelector('.burger__menu--aside')

toggleBtn.onclick = function(){
    menuAside.classList.toggle('open')

}
