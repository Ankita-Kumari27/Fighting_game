let playDiv = document.getElementById('play')
console.log(playDiv)

// playDiv.onclick = () => {
//     console.log('hello hello')
// }

// playDiv.addEventListener('click',function(){
//     console.log("Ankita ")
// })

document.addEventListener('keydown',function(e){
    if(e.key=='q'){
     document.getElementById('punch').play()
    }
    else{
        console.log('not q')
        document.getElementById('fast').play()
    }
  
})