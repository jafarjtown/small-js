const body = document.querySelector('.body')
const hexValues = ['A', 'B', 'C', 'D', 'E', 'F', 1, 2, 3, 4, 5, 6]

function DrawCircle(x, color,left, top){
    let div = document.createElement('div')
    div.style.width = x + 'px'
    div.style.height = x + 'px'
    div.style.left = left + "px"
    div.style.top = top + "px"
    div.style.backgroundColor = color
    div.classList.add('circle')
    body.appendChild(div)
    setTimeout(()=> body.removeChild(div), 10000)
}

function Draw(){
    let hexName = '#'
    for (let i = 0; i < 6; i++) hexName += hexValues[Math.floor(Math.random() * hexValues.length)]
    let size = Math.floor(Math.random() * 100)
    let left = Math.floor(Math.random() * body.clientWidth - 10)
    let top = Math.floor(Math.random() * body.clientHeight - 10)
    
    DrawCircle(size, hexName, left, top)
}


setInterval(() => {
    Draw()
    Draw()
    Draw()
}, 500)