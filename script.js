let items = document.querySelectorAll('.item')
let prev = document.getElementById('prev')
let next = document.getElementById('next')

console.log(items)
let itemsL = items.length
activy = 0
console.log(itemsL)

next.onclick = () => {
  items[activy].classList.remove('activy')

  if(activy >= itemsL -1){
    activy = 0

  }  else {
    activy++
  }

items[activy].classList.add('activy')
}

prev.onclick = () => {
  items[activy].classList.remove('activy')

  if(activy == 0){
    activy = itemsL - 1

  }  else {
    activy--
  }

items[activy].classList.add('activy')
}

