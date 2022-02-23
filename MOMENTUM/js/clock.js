const $h1 = document.querySelector('#h1ForClock')
const $h2 = document.querySelector('#h2ForClock')

function getClock(){
    const dateAndTime = new Date()

    const hours = String(dateAndTime.getHours()).padStart(2,"0")
    const minutes = String(dateAndTime.getMinutes()).padStart(2,"0")
    const seconds = String(dateAndTime.getSeconds()).padStart(2,"0")

    $h2.innerText = `${hours}:${minutes}:${seconds}`
}

getClock();
setInterval(getClock, 1000);