let logging = document.getElementById("input-btn");
let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
let tabBtn = document.getElementById("tab-btn")

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

logging.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = ""; // THIS WAS DONE TO CLEAR THE INPUT FIELD

  localStorage.setItem("myLeads", JSON.stringify(myLeads)); //convert the array  to  a string
  // FETCH THE DATA FROM LOCAL STORAGE AND SAVE IN A VARIABLE

  renderLeads();
});

/// SET myLeads TO ITS VALUE AND CALL RENDERLEADS
// TO AVOID OUR DATA FROM DISSAPEARING AFTER REFRESHING

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage;
  renderLeads();
}

function renderLeads() {
  let listItems = "";

  for (let index = 0; index < myLeads.length; index++) {
    listItems += "<li>" + myLeads[index] + "</li>";
  }

  ulEl.innerHTML = listItems;
}

       // DELETE BUTTON

let deleteBtn = document.getElementById("delete-btn")

deleteBtn.addEventListener("dblclick",function (){
  localStorage.clear()
  myLeads = []
  renderLeads()
})

////////TAB BUTTON
const tabs = [
  {url: "https://www.linkedin.com/in/per-harald-borgen/"}
]

tabBtn.addEventListener ("click", function (){
  chrome.tabs.query({active:true , currentWindow:true }, function (tabs){
  myLeads.push(tabs[0].url)
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  renderLeads();


})


})




//refactoring codes
function getFirst(gty){
return gty [1]
}
let gty = getFirst([12, 7, 8]) 

console.log(gty)

//setting the stage

let player = "per"
let opponent = "Nick"
let game = "AmazingFighter"
const points = 0
const hasWon = false



//playing the game
points+=100
hasWon = true


//announcing the winner
if (hasWon){
  console.log(player + " got" + points + 
  " points and won the" +game + "game" )
}else{
  console.log("The winner is" + opponent + "!" 
  + player + "lost the game")
}















