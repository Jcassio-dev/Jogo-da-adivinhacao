let randomNumber = Math.floor(Math.random() * 10)
let tentativas = 1;

const screen1 = document.querySelector('.screen1')
let paragraph = screen1.querySelector('p')

const screen2 = document.querySelector('.screen2')

const btnTry= document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

const boxDica = document.querySelector('#dica')
const dica = document.querySelector('span')

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
    let inputNumberValue = Number(inputNumber.value)
    if(inputNumberValue == randomNumber){
     ToggleScreen();
    
     screen2.querySelector('h2').innerText = `Acertou em ${tentativas} ${tentativas > 1 ? 'tentativas' : 'tentativa'}!`
    
}
    if(boxDica.checked){
        paragraph.style.marginBottom = 2.4 +'rem'
        let spantext = inputNumberValue > randomNumber ? `${inputNumberValue} é maior que o número aleatório` : `${inputNumberValue} é menor que o número aleatório`
       dica.innerText = `${spantext}`
    }else{
        paragraph.style.marginBottom= 4.8+ 'rem'
        dica.innerText = ''
    }

inputNumber.value = ''
tentativas++


}

function HandleResetClick(){
    ToggleScreen()
    dica.innerText = ''

    paragraph.style.marginBottom= 4.8+'rem'

    randomNumber = Math.floor(Math.random() * 10)
    tentativas = 1
}



function ToggleScreen(){
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}