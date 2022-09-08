let randomNumber = Math.floor(Math.random() * 10)

console.log(randomNumber)
let tentativas = 1;
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnTry= document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

btnTry.addEventListener('click', HandleTryClick)
btnReset.addEventListener('click', HandleResetClick)
document.addEventListener('keydown', function EnterPress(e){
    if(e.key == 'Enter' && screen1.classList.contains('hide')){
        HandleResetClick()
    }
})


function HandleTryClick(event){
    event.preventDefault()


    let inputNumber = document.querySelector('#inputNumber')

    if(Number(inputNumber.value) == randomNumber){
     ToggleScreen();
    
     screen2.querySelector('h2').innerText = `Acertou em ${tentativas} ${tentativas > 1 ? 'tentativas' : 'tentativa'}`
    
}

inputNumber.value = ''
tentativas++


}

function HandleResetClick(){
    ToggleScreen()
    randomNumber = Math.floor(Math.random() * 10)
    tentativas = 1
}



function ToggleScreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}