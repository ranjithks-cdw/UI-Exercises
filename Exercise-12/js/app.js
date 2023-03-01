// Cirlce
let circleObject = {
    shapeName: "Circle",
    shapeIdName: "circle",
    inputParameters: ["Radius"],
    parts: ["radius","perimeter","area"],
    formula: {
        radius: "r",
        perimeter : "2πr",
        area: "πr²"
    },
    calculatedValues: function(partValues) {
        tempRadius = partValues[0]
        return {
            radius: tempRadius+" cm",
            perimeter: (2*Math.PI*tempRadius).toFixed(2)+" cm",
            area: (Math.PI*tempRadius*tempRadius).toFixed(2)+" sq cm",
        }
    }
};

// Triangle
let equilateralTriangleObject = {
    shapeName: "Equilateral Triangle",
    shapeIdName: "triangle",
    inputParameters: ["Side"],
    parts: ["side","perimeter","area"],
    formula: {
        side: "s",
        perimeter : "3*s",
        area: "0.433*s*s"
    },
    calculatedValues: function(partValues) {
        tempSide = partValues[0]
        return {
            side: tempSide+" cm",
            perimeter: (3*tempSide).toFixed(2)+" cm",
            area: (0.433*tempSide*tempSide)+" sq cm",
        }
    }
};

// Square
let squareObject = {
    shapeName: "Square",
    shapeIdName: "square",
    inputParameters: ["Side"],
    parts: ["side","perimeter","area"],
    formula: {
        side: "s",
        perimeter : "4*s",
        area: "s*s"
    },
    calculatedValues: function(partValues) {
        tempSide = partValues
        return {
            side: tempSide+" cm",
            perimeter: (4*tempSide).toFixed(2)+" cm",
            area: (tempSide*tempSide).toFixed(2)+" sq cm",
        }
    }
};

// Shapes
const Shapes = {circle:circleObject, triangle:equilateralTriangleObject, square:squareObject};
renderSection1(); //Loads on start

/*
    Render Functions
*/
// Section 1 Render Function
function renderSection1() {
    // Content Box
    let contentBoxDOM = document.getElementById('content-box');

    // Section Conents
    let sectionContentsDOM = Object.assign(document.createElement("div"),{
        className: "flex section-1",
        id: "section-1"
    });

    // Creating Section Title
    let sectionTitleDOM = Object.assign(document.createElement("h3"),{
        className: "step-description",
        textContent: "1. Choose a Shape"
    });

    // Creating Shapes Container
    let availableShapesDOM = Object.assign(document.createElement("div"),{
        className: "shapes flex"
    })

    // Creating shapes and appending to the shapes container
    for(let index in Shapes) {
        let displayShapeDOM = Object.assign(document.createElement("div"),{
            id: Shapes[index].shapeIdName,
            className: "shapeDisplay"
        });
        availableShapesDOM.appendChild(displayShapeDOM);
    }

    // Next Button
    let nextButtonDOM = Object.assign(document.createElement("button"),{
        className: "button",
        id: "next-button",
        textContent: "NEXT",
    });
    nextButtonDOM.addEventListener("click",gotoSection2);

    // Appending Created elements to Section Contents
    sectionContentsDOM.appendChild(sectionTitleDOM);
    sectionContentsDOM.appendChild(availableShapesDOM);
    sectionContentsDOM.appendChild(nextButtonDOM);

    // Appending Section contents to Content Box
    contentBoxDOM.appendChild(sectionContentsDOM);

    // Event Listener for Shapes
    let displayShapeDOM = document.getElementsByClassName("shapeDisplay");
    Array.from(displayShapeDOM).forEach(function(element) {
        element.addEventListener('click',selectingShapeEvent);
    });

    showSelectedShape();    
}

// Section 2 Render Function
function renderSection2() {
    // Selected shape
    let selectedShape = localStorage.getItem("shape");
    let inputParameters = getInputParameters(Shapes[selectedShape]);

    // Content Box
    let contentBoxDOM = document.getElementById('content-box');

    // Creating Section Conents
    let sectionContentsDOM = Object.assign(document.createElement("div"),{
        className: "flex section-2",
        id: "section-2"
    });

    // Creating Section Title
    let sectionTitleDOM = Object.assign(document.createElement("h3"),{
        className: "step-description",
        textContent: "2. Enter "+ getInputParametersString(inputParameters)
    });

    // Creating Input Boxes
    const inputBoxes = [];
    for(let inputParameter of inputParameters) {
        let inputBoxDOM = Object.assign(document.createElement("input"),{
            type: "number",
            name: inputParameter.toLowerCase(),
            className: "inputBox"
        });
        inputBoxes.push(inputBoxDOM);
    }

    // Calculate Button
    let calculateButtonDOM = Object.assign(document.createElement("button"),{
        className: "button",
        id: "calculate-button",
        textContent: "CALCULATE"
    });
    calculateButtonDOM.addEventListener("click",calculateEvent);

    // Appending Created elements to Section Contents
    sectionContentsDOM.appendChild(sectionTitleDOM);
    for(let inputBox of inputBoxes)
        sectionContentsDOM.appendChild(inputBox);
    sectionContentsDOM.appendChild(calculateButtonDOM);

    // Appending Section contents to Content Box
    contentBoxDOM.appendChild(sectionContentsDOM);
}

// Section 3 Render Function
function renderSection3(partsValue) {
    // Selected shape
    let selectedShape = Shapes[localStorage.getItem("shape")];

    // Content Box
    let contentBoxDOM = document.getElementById('content-box');

    // Creating Section Contents
    let sectionContentsDOM = Object.assign(document.createElement("div"),{
        className: "flex section-3",
        id: "section-3"
    });

    // Display Shape
    let displayShapeDOM = Object.assign(document.createElement("div"),{
        id: selectedShape.shapeIdName
    });

    // Shape Details
    let shapeDetailsDOM = Object.assign(document.createElement("div"),{
        className: "flex shape-details"
    });

    // Shape Name
    let shapeNameDOM = Object.assign(document.createElement("h3"),{
        id: "shape-name",
        textContent: selectedShape.shapeName
    });

    // Calculations
    let calculationsDOM = Object.assign(document.createElement("div"), {
        className: "flex calculations"
    });

    // Parts
    const partContents = [];
    for(let part of selectedShape.parts) {
        // Part Container
        let partContainerDOM = Object.assign(document.createElement("div"), {
            className: "flex-row "+ part,
        });

        // Part Contents
        let partNameDOM = Object.assign(document.createElement("div"),{
            className: "parameter",
            textContent: part.toUpperCase()
        });
        let formulaDOM = Object.assign(document.createElement("div"),{
            className: "formula",
            textContent: selectedShape.formula[part]
        });
        let cValues = selectedShape.calculatedValues(partsValue);
        let calculatedValueDOM = Object.assign(document.createElement("div"),{
            className: "calculated-value",
            textContent: cValues[part]
        });

        // Adding contents to Part Container
        partContainerDOM.appendChild(partNameDOM);
        partContainerDOM.appendChild(formulaDOM);
        partContainerDOM.appendChild(calculatedValueDOM);

        // Pushing all the parts to array
        partContents.push(partContainerDOM);
    }

    // Adding Part Contents to Calculations
    for(let partContent of partContents)
        calculationsDOM.appendChild(partContent);

    // Adding elements to shape details
    shapeDetailsDOM.appendChild(shapeNameDOM);
    shapeDetailsDOM.appendChild(calculationsDOM);

    // Calculate Button
    let calculateButtonDOM = Object.assign(document.createElement("button"),{
        className: "button",
        id: "start-again-button",
        textContent: "START AGAIN"
    });
    calculateButtonDOM.addEventListener("click",startAgainEvent);

    // Appending Created elements to Section Contents
    sectionContentsDOM.appendChild(displayShapeDOM);
    sectionContentsDOM.appendChild(shapeDetailsDOM);
    sectionContentsDOM.appendChild(calculateButtonDOM);

    // Appending Section contents to Content Box
    contentBoxDOM.appendChild(sectionContentsDOM);
}

/*
    Helper Functions
*/
// Get Input Parameters
function getInputParameters(shape) {
    const inputParameters = [];
    for(let i=0;i<shape.inputParameters.length;i++)
        inputParameters.push(shape.inputParameters[i]);
    return inputParameters;
}

// Input Parameters as String
function getInputParametersString(parameters) {
    let inputParametersString = parameters[0];
    // Concatenate upto penultimate parameters
    for(let i=1;i<parameters.length-1;i++)
        inputParametersString = inputParametersString +" , "+ parameters[i];
    
    // Concatenate last parameter
    if(parameters.length>1)
        inputParametersString = inputParametersString +" and "+ parameters[parameters.length-1];
    return inputParametersString;
}

// Parsing Input
function parsedInput(inputValue) {
    let parsedValue = Number(parseFloat(inputValue).toFixed(2));
    return parsedValue;
}

// Remove already selected shapes
function removeAlreadySelected() {
    let alreadySelectedShape = localStorage.getItem("shape");
    let selectedShapeDOM = document.getElementById(alreadySelectedShape);
    if(selectedShapeDOM==null)
        return;
    // Remove Children Elements
    if (selectedShapeDOM.hasChildNodes()) {
        selectedShapeDOM.removeChild(selectedShapeDOM.children[0]);
    }
}

// Show Selected shape
function showSelectedShape() {
    let selectedShape = localStorage.getItem("shape");
    console.log(selectedShape);
    if(selectedShape in Shapes) {
        // Show Tick Icon
        let selectedShapeDOM = document.getElementById(selectedShape);
        let tickSymbol = Object.assign(document.createElement("i"),{
            className: "fa-solid fa-check",
        });
        selectedShapeDOM.appendChild(tickSymbol);

        // Display Next Button
        let nextButton = document.getElementById("next-button");
        nextButton.style.visibility =  "visible";
    }
    else {
        let nextButton = document.getElementById("next-button");
        nextButton.style.visibility =  "hidden";
    }
}

/*
    Event Handlers
*/
// Select Shape Event Listener
function selectingShapeEvent(event) {
    removeAlreadySelected();
    let selectedShape = event.target.id;
    localStorage.setItem("shape",selectedShape);
    showSelectedShape();
}

// Next Button Event Listener
function gotoSection2() {
    let section1 = document.getElementById("section-1");
    section1.remove();
    renderSection2();
}

// Calculate Event Listener
function calculateEvent() {
    let inputBoxes = document.getElementsByClassName("inputBox");
    const partsValue = [];
    let canMoveNextSection = true;
    for(let ipBox of inputBoxes)
        partsValue.push(parsedInput(ipBox.value));
    for(let partValue of partsValue) {
        if(isNaN(partValue)) {
            console.log(typeof(partValue));
            partsValue.splice(0,partsValue.length);
            alert("Please Enter Valid Number");
            canMoveNextSection = false;
            break;
        }
    }
    if(canMoveNextSection) {
        let section2 = document.getElementById("section-2");
        section2.remove();
        renderSection3(partsValue);
    }
    else
        renderSection2();
}

// Start Again Event Listener
function startAgainEvent() {
    let section3 = document.getElementById("section-3");
    section3.remove();
    localStorage.clear();
    renderSection1();
}