                
window.onload = () => {
    // All code goes in here.
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');


    functionCallsAction.onclick = function () {
        simpleFunction();
    }


function simpleFunction() {
    console.log("functions should consist of ststments designed to perform a single task.");
    simpleFunctionDisplay.textContent = "simple";
}



function functionParameters(value){
    console.log(value);
}


function functionReturn(addResult) {
    
    return "The add function returned " + addResult;   
}

function add(a, b) {
    const addResult = a + b;
    console.log('Inside add' , addResult);
    return addResult;
}


