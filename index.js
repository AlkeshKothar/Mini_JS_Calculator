// lets grab all buttons action we need
let display = document.querySelector('.display').value
let b9 = document.querySelector('.a9')
let b8 = document.querySelector('.a8')
let b7 = document.querySelector('.a7')
let b6 = document.querySelector('.a6')
let b5 = document.querySelector('.a5')
let b4 = document.querySelector('.a4')
let b3 = document.querySelector('.a3')
let b2 = document.querySelector('.a2')
let b1 = document.querySelector('.a1')
let b0 = document.querySelector('.a0')
let bp = document.querySelector('.ap')
let bm = document.querySelector('.am')
let bd = document.querySelector('.ad')
let bmul = document.querySelector('.amul')
let bclear = document.querySelector('.clear')
let bcal = document.querySelector('.acal')

// for each button, we create a event
b9.addEventListener('click', function() {
    let x = document.querySelector('.display').value
    let y = 9
    document.querySelector('.display').value = x + y
})

b8.addEventListener('click', function() {
    let x = document.querySelector('.display').value
    let y = 8
    document.querySelector('.display').value = x + y
})

b7.addEventListener('click', function() {
    let x = document.querySelector('.display').value
    let y = 7
    document.querySelector('.display').value = x + y
})

b6.addEventListener('click', function() {
    let x = document.querySelector('.display').value
    let y = 6
    document.querySelector('.display').value = x + y
})

b5.addEventListener('click', function() {
    let x = document.querySelector('.display').value
    let y = 5
    document.querySelector('.display').value = x + y
})

b4.addEventListener('click', function() {
    let x = document.querySelector('.display').value
    let y = 4
    document.querySelector('.display').value = x + y
})

b3.addEventListener('click', function() {
    let x = document.querySelector('.display').value
    let y = 3
    document.querySelector('.display').value = x + y
})

b2.addEventListener('click', function() {
    let x = document.querySelector('.display').value
    let y = 2
    document.querySelector('.display').value = x + y
})

b1.addEventListener('click', function() {
    let x = document.querySelector('.display').value
    let y = 1
    document.querySelector('.display').value = x + y
})
b0.addEventListener('click', function() {
    let x = document.querySelector('.display').value
    let y = 0
    document.querySelector('.display').value = x + y
})

bp.addEventListener('click', function() {
    let x = document.querySelector('.display').value
    let y = `+`
    document.querySelector('.display').value = x + y
})
bm.addEventListener('click', function() {
    let x = document.querySelector('.display').value
    let y = `-`
    document.querySelector('.display').value = x + y
})
bd.addEventListener('click', function() {
    let x = document.querySelector('.display').value
    let y = `/`
    document.querySelector('.display').value = x + y
})

bmul.addEventListener('click', function() {
    let x = document.querySelector('.display').value
    let y = `*`
    document.querySelector('.display').value = x + y
})

// allows us to calculate using eval funtion and create with set the dispaly to none

bclear.addEventListener('click', function() {
    document.querySelector('.display').value = ""
})

bcal.addEventListener("click", function() {
    let x = document.querySelector('.display').value
    let y = eval(x)
    document.querySelector('.display').value = y
})