console.log("view file")
var month = document.querySelector("#monthYear")
console.log(month)
// addEvent("day one")
// month.innerHTML = "October"
 var monthsList = {months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]}
// var events = [
//     {
//         title: "Event One",
//         date: "December 1st",
//         time: " 12:00"
//     }]
// function addEvent(title1, date1, time1) {
//     event = {
//         title: title1,
//         date: date1,
//         time: time1
//     }
//     events.add(event)
//     console.log(events)
//     updateEvents()
// }
// function updateEvents() {

// }
// function updateMonth() {

// }
var prevBtn = document.querySelector("#prevBtn")
var nxtBtn = document.querySelector("#nxtBtn")
console.log(prevBtn); 
console.log(nxtBtn); 
// inputButton.onclick = function() {
//   addNewItem(inputTitle.value, inputDescription.value);
//   inputTitle.value = ""
//   inputDescription.value = ""
// };
// columnButton.onclick = function() {
//   addNewColumn(columnTitle.value); 
//   columnTitle.value = ""
  
// }; 
prevBtn.addEventListener("onClick", )
prevBtn.onClick = function(){
    console.log("hello"); 
    modifyMonths()
}
nxtBtn.onClick = function(){
    modifyMonths()
}
function modifyMonths(){
        console.log("entered modify"); 
        const monthsRef = firebase.database().ref();
        monthsRef.on('value', (snapshot) => {
        const months = snapshot.val();
        console.log(months); 

})
}