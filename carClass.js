/*
class car {
    constructor(name,color,max_speed ){
        this.name = name
        this.color = color
        this.max_speed = max_speed
        this.current_speed = 0 
    }
    drive (speed){
        
        this.current_speed +=speed
        console.log(`speeding to ${this.current_speed}km//h`)
    }
    break(){
        console.log("break it dude")
        this.current_speed -= 10
    }
    zeroToSixty(){
        setTimeout(() => {console.log('that waaaa fassst🚓🚓')
           
           console.log(this.current_speed)
        },3000)
    }
    stop(){
        setTimeout(() => {
            console.log('down to zero❌❌❌')
            this.current_speed= 0 ;
            console.log(this.current_speed)
        },6000)
    }
}

const  ferrari = new car('thar','black',300)
console.log(ferrari)
ferrari.break()
console.log(ferrari.current_speed)
 ferrari.drive()
console.log(ferrari.current_speed)
ferrari.break()
console.log(ferrari.current_speed)
ferrari.zeroToSixty()
console.log(ferrari.current_speed)
console.log(ferrari.current_speed)


STOP FUNCTION
ferrari.drive()
ferrari.drive()
ferrari.drive()
ferrari.drive()
ferrari.drive()
console.log(ferrari.current_speed)
ferrari.stop()


const porshe = new car ('porshe','yellow',300)
console.log(porshe)
const nums = [1,2,3,4,5]
nums.forEach(_ => porshe.drive(20))
porshe.zeroToSixty()
porshe.stop() */


Array.prototype.len = function () {
 return this.length   
}
const fruit =  ['🍌','🍉','🍍','🍇','🍈']
console.log(fruit.len())



Array.prototype.push = function(item){
     this[this.length] =  item
     return this
}
console.log(fruit.push('🌟'))
fruit.push('Ankita')
console.log(fruit)
