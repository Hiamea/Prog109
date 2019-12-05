window.onload = () => {
    const feetToInchesAction = 
        document.getElementById('feetToInchesAction');

    feetToInchesAction.onclick = () => {
        const feetToInchesInput = document.getElementById('feetToInchesInput');
        const feetToInchesDisplay = document.getElementById('feetToInchesDisplay');

        feetToInchesDisplay.textContent = feetToInches(feetToInchesInput.value);
    };


const feetToInches = (feet) => {
    return feet * 12;
};
};


const milesToFeetAction = 
document.getElementById('milesToFeetAction');

milesToFeetAction.onclick = () => {
const milesToFeetInput = document.getElementById('milesToFeetInput');
const milesToFeetDisplay = document.getElementById('milesToFeetDisplay');

feetToInchesDisplay.textContent = milesToFeet(milesToFeetInput.value);
};
}

const milesToFeet = (miles) => {
    return miles * 1;
}


const areaOfTriangleAction = 
        document.getElementById('fareaOfTriangleAction');

    areaOfTriangleAction.onclick = () => {
        const areaOfTriangleInput = document.getElementById('areaOfTriangleInput');
        const areaOfTriangleDisplay = document.getElementById('areaOfTriangleDisplay');

        areaOfTriangleDisplay.textContent = areaOfTriangle(areaOfTriangleInput.value);
    };



const areaOfTriangle = (base, Height) => {
    return base * Height / 2;
}







const areaOfCircleAction = 
        document.getElementById('areaOfCircleAction');

        areaOfCircleAction.onclick = () => {
        const areaOfCircleInput = document.getElementById('fareaOfCircleInput');
        const fareaOfCirclesDisplay = document.getElementById('areaOfCircleDisplay');

        areaOfCircleDisplay.textContent = areaOfCircle(areaOfCircleInput.value);
    };







const  areaOfCircle = ( MathPI , radius) => {
    return MathPI * radius ;
}