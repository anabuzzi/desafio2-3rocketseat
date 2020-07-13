const modalOverlay = document.querySelector('.modal-overlay')
// documento - elemento da DOM
const card1 = document.querySelector('.card1')
const card2 = document.querySelector('.card2')
const card3 = document.querySelector('.card3')



card1.addEventListener("click", function (){
        modalOverlay.querySelector("iframe").src = "https://rocketseat.com.br/starter"
        modalOverlay.classList.add('active') 
        modalOverlay.classList.add('maximize')})

card2.addEventListener("click", function (){
        modalOverlay.querySelector("iframe").src = "https://rocketseat.com.br/launchbase"
        modalOverlay.classList.add('active')
        modalOverlay.classList.add('maximize') })


card3.addEventListener("click", function (){
        modalOverlay.querySelector("iframe").src = "https://rocketseat.com.br/gostack"
        modalOverlay.classList.add('active')
        modalOverlay.classList.add('maximize') })


// for (let card of cards) {
//     card.addEventListener("click", function () {
//       const videoId = card.getAttribute("id")
//       modalOverlay.classList.add('active')     
//       modalOverlay.querySelector("iframe").src = `https://rocketseat.com.br/${videoId}`
      
//     })
//   }


  document.querySelector('.maximize-modal').addEventListener ("click", function() {
        modalOverlay.classList.add('maximize')
        console.log("executou")
  }) 

  document.querySelector('.minimize-modal').addEventListener ("click", function() {
        modalOverlay.classList.remove('maximize')
        console.log("executou")
  }) 

  document.querySelector('.close-modal').addEventListener ("click", function() {    
    modalOverlay.classList.remove("active")
//     // modalOverlay.querySelector("iframe").src = ""
})