                
window.onload = () => {
    // All code goes in here.
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');


function simpleFunction() {
    console.log("functions should consist of ststments designed to perform a single task.");
    simpleFunctionDisplay.textContent = "simple";
}

simpleFunction();

}
function functionParameters(value){
    console.log(value);
}


function functionParameters(){
    return "Many functions return values.";
   
}

function add(a, b) {
    return a + b;
}


functionParameters("Many functions take parameters.");


const returnValue = functionReturn();
console.log (returnValue);

const result = add(2, 3);
console.log(result);
