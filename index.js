const closeBtn = document.querySelector('#closebtn')
const openBtn = document.querySelector('#menubtn')
const navbar = document.querySelector('.navbar-list')
openBtn.addEventListener('click' ,  ()=>{
    navbar.style = 'display: block'
    console.log('Working')
})
closeBtn.addEventListener('click' , ()=>{
    navbar.style = 'display: none'
    console.log('Working')
})