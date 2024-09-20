// Определям действующие элемениы на странице
const year = document.querySelector("#year")
const days = document.querySelector('#days')
const hours = document.querySelector('#hours')
const minutes = document.querySelector('#minutes')
const seconds = document.querySelector('#seconds')

// Делаем расчеты
const currentYer = new Date().getFullYear()
const nexYer = new Date(`January 01 ${currentYer + 1} 00:00:00`)

// Устанавливаем год на задний фон
year.innerText = currentYer + 1 

// Функция определения времени
function updateCounter () {
  const currentTime = new Date()
  const diff = nexYer - currentTime

  // Перевод в секунды / минуты / часы / дни
  const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24)
  const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24
  const minutesLeft = Math.floor(diff / 1000 / 60) % 60
  const secondsLeft = Math.floor(diff / 1000) % 60

  days.innerText = daysLeft
  hours.innerText = hoursLeft
  minutes.innerText = minutesLeft
  seconds.innerText = secondsLeft
}

updateCounter()

// Запускаем расчет 1 раз в секунду (каждую секунду)
setInterval(updateCounter, 1000)