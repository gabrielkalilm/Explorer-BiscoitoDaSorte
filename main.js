//variáveis
const luckMessagesList = [
'Acredite no poder dos seus sonhos. Eles são as estrelas que guiam sua jornada rumo ao sucesso.',
'A paciência é a chave que abre todas as portas. Mantenha-se firme e as oportunidades virão ao seu encontro.',
'Seja como o bambu: flexível, resistente e sempre crescendo. Encontre força na sua capacidade de adaptação.',
'O sorriso é seu melhor acessório. Use-o com frequência e ilumine o mundo ao seu redor.',
'Não tema os desafios, pois são eles que revelam sua verdadeira força interior. Encare-os com coragem e determinação.',
'O amor é a linguagem universal que conecta corações e transforma vidas. Cultive-o em todas as suas interações.',
'As melhores coisas da vida muitas vezes estão escondidas nas pequenas e simples alegrias do dia a dia. Valorize cada momento.',
'Confie no universo e no seu poder de conspirar a seu favor. Esteja aberto para receber as bênçãos que estão a caminho.',
'Lembre-se: cada novo dia é uma página em branco esperando para ser preenchida com histórias de sucesso e felicidade. Escreva sua própria jornada.', 
'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.'
]

const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const luckCookie = document.querySelector("#luckCookie")
const btnReset = document.querySelector("#btnReset")
const luckMessage = document.querySelector("#luckMessage")

//funções

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function openCookie () {
  let randomNumber = Math.floor(Math.random() * Number(luckMessagesList.length))
  luckMessage.textContent = luckMessagesList[randomNumber]
  toggleScreen()
}

function openCookieEnter (e) {
  if(e.key == '1' && screen2.classList.contains('hide')) {
    let randomNumber = Math.round(Math.random() * Number(luckMessagesList.length))
   luckMessage.textContent = luckMessagesList[randomNumber]
   toggleScreen()
  }
}

function pressBtnReset (e) {
  e.preventDefault()
  toggleScreen()
  luckMessage.value = ""
}

function pressBtnResetEnter (e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
  toggleScreen()
  luckMessage.value = ""
  }
}



// eventos
luckCookie.addEventListener('click', openCookie)
btnReset.addEventListener('click', pressBtnReset)
document.addEventListener('keypress', pressBtnResetEnter)
document.addEventListener('keypress', openCookieEnter)



