window.addEventListener('load', e => {
  const dots = document.getElementById('dots')
  const getRandomInt = () => {
  return Math.random() * (98 - 0) + 0;
}

  setInterval(() => {
    for (i = 0; i < 25; i++) {
      const dot = document.createElement('div')
      dot.className = 'dot'
      dot.style.transform = `translate(${getRandomInt()}vw, ${getRandomInt()}vh)`
      dots.appendChild(dot)
    }
  }, 750)
})

window.addEventListener('mousemove', e => {

  const square1 = document.getElementById('square1')
  const square2 = document.getElementById('square2')
  const square3 = document.getElementById('square3')
  const square4 = document.getElementById('square4')
  const square5 = document.getElementById('square5')
  const square6 = document.getElementById('square6')

  const x = e.clientX / 2.5 + 15
  const y = e.clientY / 2.5 + 15
  const both = (e.clientY + e.clientX) / 3

  const generateSquareMove = (element, coord) => {
    element.style.backgroundColor = `${coord[0]}`
    element.style.transform = `rotate(${coord[1]}deg)`
    element.style.top = `${coord[2]}%`
    element.style.right = `${coord[3]}%`
    element.style.bottom = `${coord[4]}%`
    element.style.left = `${coord[5]}%`
  }

  const squareAttrs = [
    {
      name: square1,
      coord: [ '#77192A', x, y / 5, '', '', x / 7 ]
    },
    {
      name: square2,
      coord: [ 'silver', both * 2, '', x / 10, y / 10, '' ]
    },
    {
      name: square3,
      coord: [ '#77192A', both * 6, '', x / 5, y / 7, '' ]
    },
    {
      name: square4,
      coord: [ 'silver', x * 6, '', y / 5, both / 7, '' ]
    },
    {
      name: square5,
      coord: [ 'silver', x * 2, y / 5, x / 6, y / 5, '' ]
    },
    {
      name: square6,
      coord: [ '#77192A', x * 3, y / 3, '', '', x / 5 ]
    }
  ]

  squareAttrs.map(element => generateSquareMove(element.name, element.coord))

  let count = -1
  document.addEventListener('click', e => {
    count++
    squareAttrs[count].name.style.display = 'flex'
  })
})


