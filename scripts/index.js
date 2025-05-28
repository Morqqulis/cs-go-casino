'use strict'

// Находим элементы на странице
const wheel = document.querySelector('.wheel__cards')
const cards = document.querySelectorAll('.wheel__card')
const spinButton = document.querySelector('.wheel__btn')
const dialog = document.querySelector('.wheel__result')
const closeButton = dialog.querySelector('.wheel__btn')
const dialogImg = dialog.querySelector('.wheel__result-item img')
const dialogName = dialog.querySelector('.wheel__result-item h3')

// Звуки
const spinSound = new Audio('./assets/sounds/spin.mp3')
const winSound = new Audio('./assets/sounds/win.mp3')

// Основная функция вращения колеса
const spinWheel = () => {
	// Сбросим анимацию
	removeProps()
	// Запускаем вращение на следующем кадре
	requestAnimationFrame(() => {
		spinSound.play()

		const index = Math.floor(Math.random() * cards.length)
		const angle = 6 * 360 - index * 60

		wheel.classList.add('spin')
		wheel.style.transform = `rotateY(${angle}deg)`
		setTimeout(() => {
			cards[index].classList.add('wheel__card--win')
			spinButton.disabled = false
			showWinModal(cards[index])
		}, 8000)
	})
}

function removeProps() {
	spinButton.disabled = true
	wheel.classList.remove('spin')
	wheel.style.transform = 'rotateY(0deg)'
}

// Функция для показа результата в модальном окне
function showWinModal(el) {
	dialogImg.src = el.querySelector('img').src
	dialogName.textContent = el.querySelector('h3').textContent
	winSound.play()
	dialog.classList.add('active')
}

// Обработчики событий
spinButton.addEventListener('click', spinWheel)
closeButton.addEventListener('click', () => dialog.classList.remove('active'))
