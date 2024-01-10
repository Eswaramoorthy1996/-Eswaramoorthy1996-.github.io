let navbar = document.querySelector('.header .flex .navbar')

document.querySelector(' #menu-btn').onclick = () => {
    navbar.classList.toggle('active')
}

window.onscroll= () =>{
    navbar.classList.toggle('active')
}

document.querySelectorAll('input[type="number"]').formEach(inputNumber =>{
    inputNumber.oninput =() =>{
        if(inputNumber.value.length>inputNumber.maxLength) inputNumber.value =inputNumber.value.slice(0,inputNumber.maxLength)
    }
})