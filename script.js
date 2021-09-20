
function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }
const addElement = (event) => { 
    event.preventDefault() //prevent to submit
    const inputValue = event.target.elements[0].value //get value from input
    const selectInput = event.target.elements[1].value // get value from input select
    event.target.elements[0].value = '' //clear input after submit
    let convertedValue = 0 //change binary to decimal

    if(!isNumeric(inputValue)){ //check if have string
        return
    }
    if(selectInput == 'Binario para Decimal'){ //check options of conversion
        convertedValue = parseInt(inputValue,2)
    }else if(selectInput == 'Decimal para Binario'){
        convertedValue = (+inputValue).toString(2)
    }
    let element = document.getElementById("anchor") //get div to put decimal value

    element.innerHTML = '' //clear div before put new value
    element.innerHTML = convertedValue //put new value(decimal)

    document.getElementById("anchor").appendChild(element.firstChild) //put value with first child
    document.getElementById("note").style.display="block" //display text with value
}


const form = document.getElementById("form-bin") //get form by id
form.addEventListener('submit',addElement) //add listener event on form