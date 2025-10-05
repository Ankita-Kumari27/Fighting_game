let SUPERHERO_TOKEN = '425238a4e853c7b1fde86196b66d1544'
const baseUrl = `https://superheroapi.com/api.php/${SUPERHERO_TOKEN}`

//GETTINH HERO IMAGE AFTER SEARCHING THE DESIRED NAME
 const getSearchSuperHero = (name) => {
    console.log(searchInput.value)
    fetch(`${baseUrl}/search/${name}`)
    .then (response => response.json())
    .then (json =>{
            const hero = json.results[0]
             showHeroInfo(hero)
        })
 }
 const searchButton = document.getElementById('searchButton')
 searchButton.onclick = () => getSearchSuperHero(searchInput.value)
const searchInput = document.getElementById('searchInput')






//GETTING RANDOM HERO IMAGE AFTER CLICKING THE BUTTON
const heroImage = document.getElementById('heroImage')
const getRandomSuperHero = (id) => {
    fetch(`${baseUrl}/${id}`)
    .then (response => response.json())
    .then (json =>{
        console.log(json.powerstats)
        showHeroInfo(json)
    })
}
const statToEmoji = {
    intelligence : '🧠',
    strength :'💪',
    speed : '⚡',
   durability: '🏋️',
    power : '📊',
    combat : '⚔️'
}
const showHeroInfo = (character ) => {
    const name = `<h2>${character.name}</h2>`
  const img =  ` <img src="${character.image.url}" height=200 width=200 />`
const stat =  Object.keys(character.powerstats).map(stat =>{
      return `<p>${statToEmoji[stat]} ${stat.toUpperCase()} : ${character.powerstats[stat]}</p>`
   }).join('')
   heroImage.innerHTML = `${name} ${img} ${stat} `
   
}


let hero = document.getElementById('hero')
const randomHero = () => {
      const numHero = 731
     return Math.floor(Math.random()*numHero) +1
}
hero.onclick = () => getRandomSuperHero(randomHero())


