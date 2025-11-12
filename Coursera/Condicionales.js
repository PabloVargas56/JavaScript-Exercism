var edad = 10;

if (edad >= 65){
    console.log("Obtienes tus ingresos de tu pension")
} else if (edad < 65 && edad >= 18){
    console.log("Recibes un subsidio")
} else {console.log ("El valor de la variable no es numerico.")}

var day = "Monday"
var message // Declaracion de variable

switch (day){
    case "Monday":
        message = "Start of the week"
        break;
    case "Tuesday":
        message = "Drive to Switzerland"
        break;
    default:
        message = "There is no such day"
}

console.log(message)