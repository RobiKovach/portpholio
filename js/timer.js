const timer = document.querySelector('.timer__time');
const deadline = '31 march 2022'

let interval


const updateTimer = () => {
    const date = new Date().getTime()
    const dateDeadline = new Date(deadline).getTime()
    const dateRemaining = (dateDeadline - date) / 1000

    const day = Math.floor(dateRemaining / 60 / 60 / 24)
    const hours = Math.floor((dateRemaining / 60 / 60) % 24)
    const minutes = Math.floor((dateRemaining / 60) % 60)
    const seconds = Math.floor(dateRemaining % 60)

    const fDay = day < 10 ? '0' + day : day
    const fHours = hours < 10 ? '0' + hours : hours
    const fMinutes = minutes < 10 ? '0' + minutes : minutes
    const fSeconds = seconds < 10 ? '0' + seconds : seconds

    timer.textContent = `${fDay} дней ${fHours}:${fMinutes}:${fSeconds}`
    if(dateRemaining <= 0){
        clearInterval(interval)
        timer.textContent = `00:00:00`
    }
}

updateTimer()
interval = setInterval(updateTimer, 500)




