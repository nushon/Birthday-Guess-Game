let output = document.getElementById("Output");

var birthdays = [];
var names =["February 19th is Albin's Birthday", "May 3rd is James Birthday", "Apirl 0 is Blessing's Birthday", "October 9th is Carlos's Birthday", "July 11th is Rudeen's Birthday", "March 13th is Ben's Birthday"];
function get_num(max){
return Math.floor(Math.random() * max);

}
get_num(6);

var numAns = get_num(6);
console.log(numAns);

function valid(){
for(var i = 0; i < names.length; i++)
{
    if(names.indexOf(names[i]) === numAns)
    {
        output.innerHTML = names[i];
        birthdays.push(names[i])
        console.log(birthdays);
    }

}

}
