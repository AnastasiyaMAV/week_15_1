function plus() {
    let firstNumber = Number(document.getElementById('number1').value);
    let secondNumber = Number(document.getElementById('number2').value);
    
    resultNumber = firstNumber + secondNumber;
    document.getElementById('result').innerHTML = resultNumber;
}

function minus() {
    let firstNumber = Number(document.getElementById('number1').value);
    let secondNumber = Number(document.getElementById('number2').value);
    
    resultNumber = firstNumber - secondNumber;    
    document.getElementById('result').innerHTML = resultNumber;
}

function divide() {
    let firstNumber = Number(document.getElementById('number1').value);
    let secondNumber = Number(document.getElementById('number2').value);
    
    //if(secondNumber != 0){
    if(secondNumber){        
        resultNumber = firstNumber / secondNumber;
    } else {
        resultNumber = 'Деление на ноль невозможно';
    }

    document.getElementById('result').innerHTML = resultNumber;
}

function multiply() {
    let firstNumber = Number(document.getElementById('number1').value);
    let secondNumber = Number(document.getElementById('number2').value);
    
    resultNumber = firstNumber * secondNumber;    
    document.getElementById('result').innerHTML = resultNumber;
}