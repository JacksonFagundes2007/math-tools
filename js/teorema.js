click()


// to know more
function click() {
    let btn = document.querySelector('.clickFirst')

    btn.addEventListener('click', function() {
        window.open('https://docs.google.com/document/d/1zTZ32AupOZ0O6F_ZVY78UOIR1KeIo32RWNZLe84YS4c/edit?usp=sharing');
    })
}



let btn = document.getElementById('btn')
let text = document.getElementById('text')
let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')



btn.addEventListener('click', function() {
    let p = (input1.value * input1.value) + (input2.value * input2.value)
    text.innerHTML = `A hipotenusa é ${Math.round(Math.sqrt(p))}`
})