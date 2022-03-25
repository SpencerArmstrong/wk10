function nameask() {
    var name = prompt (` wat is ur name`)
    return name
} //10

var temperature;
var n = nameask();
var g = greeting();
var far = tempfmath();
var cel = tempcmath();

function greeting(a) {

     temperature = prompt(`${name}  what do you want to convert?(c for celsius to fahrenhiet, f for fahrenheit to celsius.)`)
     
    return a
} //20

var c;

function tempfq(b) {
    if (temperature == "f") {
        do{
            c = prompt("Please enter your celsius degrees: ");
        }while(isNaN(c) == true);
        return b;
    }
}
function tempfmath() {
    if (isNaN(c) == false){
        var celconvert = ((c * 9) / 5) + 32;
        console.log(celconvert);
        alert(name + ", " + c + "C is " + celconvert + "F")
    } else{
        alert(`${c} is not a number`)
        return celconvert;
    }
}

function tempcmath() {
     if (temperature == "c") {
        do{
            var f = prompt("Please enter your tempurature in fahrenheit: ");
        }while(isNaN(f) == true)
        if (isNaN(f) == false){
            var fahrconvert = (((f - 32) * 5) / 9);
            console.log(fahrconvert);
            alert(name + ", " + f + "F is " + fahrconvert + "C")
        }else{
            alert(`${f} is not a number`)
            return fahrconvert;
        }
     }
}


greeting();


