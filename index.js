let logging = document.getElementById("input-btn");
let myLeads = [];
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

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




function greetUser(greeting){
  
}




/// json javascript object notation

//STORAGE PRACTICE

let practice = ["leting go"];
practice = JSON.stringify(practice); // CONVERT TO STRING

console.log(typeof practice); // TYPEOF TELLS THE BROWSER TO TELL YOU WHAT TYPE OF DATA WAS PARSED

//TRUTHY OR FALSY TRICK CHECK

console.log(Boolean("")); //FALSE
console.log(Boolean("0")); /// TRUE
console.log(Boolean(100)); // TRUE
console.log(Boolean(null)); //FALSE
console.log(Boolean([0])); //TRUE
console.log(Boolean(-0)); // FALSE
