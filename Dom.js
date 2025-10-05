//DOCUMENT OBJECT MODEL
 
// let title = document.getElementById('title')
// console.log(title)
// console.log(title.innerText)
// title.innerText = 'Ankita'
// console.log(title.innerText)
// title.innerHTML = '<p>helloo</p>'
// title.style.color = 'red'
// title.style.backgroundColor = 'yellow'


// let redDiv = document.getElementById('red')
// let yellowDiv = document.getElementById('yellow')
// let greenDiv = document.getElementById('green')

let squares = document.querySelectorAll('.colorButton')
console.log(squares)

let timesClicked = {'red' :0 , 'yellow' : 0  , 'green' : 0}
squares.forEach(square =>{
    square.onclick = () => {
         timesClicked[square.value]  += 1
     square.innerText = timesClicked[square.value]
        // console.log(square.value)
    }
})
function clear(){
    squares.forEach(square => {
        square.innerText=''
})
}

let end = document.getElementById('end')
end.onclick = () => clear()




