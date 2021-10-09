let output = document.getElementById("Output");
let recentGuess = document.getElementById("recent");
let playAgainBtn = document.getElementById("playAgain");
var people;
var mypeop;

let birthdays = [];
var names = [{"Albin" : "February 19 is Albin's Birthday", "James" : "March 30 is James' Birthday", "Ben" : "March 17 is Ben's Birthday", "Bokai":"January 15 is Bokai's Birthday", "Calous":"October 9 is Calous' Birthday", "Rudeen":"July 15 is Rudeen's Birthday", "Blessing":"April 5 is Blessing's Birthday"}];
function get_num(max){
return Math.floor(Math.random() * max);

}
// get_num(6);

var numAns = get_num(6);
console.log(numAns);

function valid(){
      
names.forEach(members => people = members);
mypeop = Object.entries(people);
console.log(mypeop);

   for(var i = 0; i < mypeop.length; i++){
        if(mypeop.indexOf(mypeop[i]) === get_num(6))
        {
            output.innerHTML = mypeop[i][1];
            
            // previous results 
            birthdays.push(mypeop[i][0])
            console.log(birthdays);
        }

   }
recentGuess.innerHTML = birthdays;
}
