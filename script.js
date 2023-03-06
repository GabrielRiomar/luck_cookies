const home = document.querySelector('.home')
const sorte = document.querySelector('.sorte')
document.addEventListener('keydown', function (e) {
  if (e.key == 'Enter' && sorte.classList.contains('hide')) {
    clickTryLuck()
  } else if (e.key == 'Enter' && home.classList.contains('hide')) {
    clickTryLuck()
  }
})

function clickTryLuck(event) {
  let randomNumber = Math.round(Math.random() * 7)

  switch (randomNumber) {
    case 0:
      sorte.querySelector('p').innerText =
        'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.'
      break
    case 1:
      sorte.querySelector('p').innerText =
        'Amizade e Amor são coisas que se unem num piscar de olhos.'
      break
    case 2:
      sorte.querySelector('p').innerText =
        'A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.'
      break
    case 3:
      sorte.querySelector('p').innerText =
        'A maior barreira para o sucesso é o medo do fracasso.'
      break
    case 5:
      sorte.querySelector('p').innerText =
        'Motivação não é sinónimo de transformação, mas um passo em sua direção.'
      break
    case 6:
      sorte.querySelector('p').innerText =
        'Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.'
      break
    case 7:
      sorte.querySelector('p').innerText =
        'O que empobrece o ser humano, não é a falta de dinheiro, mais sim, a falta de fé,motivação e criatividade.'
      break
    default:
      break
  }
  toggleScreen()
}

function clickTryAgain(event) {
  toggleScreen()
}

function toggleScreen() {
  home.classList.toggle('hide')
  sorte.classList.toggle('hide')
}

const btnLuck = document.querySelector('#btnLuck')
const btnTryAgain = document.querySelector('#btnTryAgain')

btnLuck.addEventListener('click', clickTryLuck)
btnTryAgain.addEventListener('click', clickTryAgain)
