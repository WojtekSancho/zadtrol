const toggleBtn = document.querySelector('.burger__menu--toggle-btn')
const toggleicon = document.querySelector('.toggle-btn--icon')
const menuAside = document.querySelector('.burger__menu--aside')

toggleBtn.onclick = function(){
    menuAside.classList.toggle('open')
    toggleBtn.classList.toggle('open')
    const isOpen = toggleBtn.classList.contains('open')

    if (isOpen) {
    document.querySelector('.open').innerHTML = '<img class="toggle-btn--icon" src="./images/xmark-solid.svg" alt="🍔">';
    } else {
    document.querySelector('.burger__menu--toggle-btn').innerHTML = '<img class="toggle-btn--icon" src="./images/burger.png" alt="🍔">';
    }
}   
