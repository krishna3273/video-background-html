const menu_toggle=document.querySelector('.toggle')
const showcase=document.querySelector('.showcase')

menu_toggle.addEventListener('click',()=>{
    menu_toggle.classList.toggle('active')
    showcase.classList.toggle('active')
})
