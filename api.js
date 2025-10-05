//https://dog.ceo/api/breeds/image/random
// .then - promises
//asynchronous programming


const dogImageDiv = document.getElementById('dogImage')
const dogButton = document.getElementById('dogButton')
const getNewDog = () =>{
fetch('https://dog.ceo/api/breeds/image/random')
.then(Response => Response.json()) 
.then(json => {
    console.log(json)
    dogImageDiv.innerHTML = `<img src='${json.message}' height = 300 width = 300/>`
})

}
//425238a4e853c7b1fde86196b66d1544
//https://superheroapi.com/api/access-token
dogButton.onclick = () =>  getNewDog()
 
  