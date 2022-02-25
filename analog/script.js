const hourHand = document.querySelector('.hourHand')
const secondsHand = document.querySelector('.secondHand')
const minuteHand = document.querySelector('.minuteHand')
const digital = document.querySelector('.digitalClock')

function ShowClock(){
    const date = new Date()

    const hour = date.getHours()
    const minute = date.getMinutes()
    const seconds = date.getSeconds()

    let hourRotation = hour * 12
    let minuteRotation = minute * 6
    let secondsRotation = seconds * 6

    hourHand.style.transform = `rotateZ(${hourRotation + minuteRotation / 12}deg)`
    minuteHand.style.transform = `rotateZ(${minuteRotation + secondsRotation / 60}deg)`
    secondsHand.style.transform = `rotateZ(${secondsRotation}deg)`

    digital.textContent = `${hour % 12 < 10 ? "0" : ""}${hour % 12}:${minute < 10 ? "0" : ""}${minute} ${
		hour < 12 ? "AM" : "PM"}`
}
ShowClock()
setInterval(ShowClock, 1000)