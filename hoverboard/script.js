const boxs = document.querySelectorAll('.box')

boxs.forEach(box => {
    box.addEventListener('mouseover', () => setColor(box))
    box.addEventListener('mouseout', ()=> removeColor(box))
})
function setColor(element) {
    const color = generateColor()
    element.style.background = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
 }
 
 function removeColor(element) {
    element.style.background = '#1d1d1d'
    element.style.boxShadow = '0 0 2px #000'
 }
 
const generateColor = () => {
    let a = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,'A', 'B', 'C', 'D', 'E', 'F']
    let hex = '#'
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * a.length)
        hex += a[index]
    }
    return hex
}