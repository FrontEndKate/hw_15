const addButton = document.getElementById('add');
const subButton = document.getElementById('sub');
const multiButton = document.getElementById('multi');
const divButton = document.getElementById('div');
const result1 = document.getElementById('result1');
const result2 = document.getElementById('result2');
const result3 = document.getElementById('result3');
const result4 = document.getElementById('result4');

addButton.addEventListener('click', function() {
    const input1 = document.getElementById('num1').value;
    const input2 = document.getElementById('num2').value;
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);
    let result;
    if (!isNaN(num1) && !isNaN(num2)) {
        result = num1 + num2;
    } else {
        result = input1 + input2;
    }
    result1.textContent = `Result: ${result}`;
});

subButton.addEventListener('click', function() {
    const num3 = parseFloat(document.getElementById('num3').value);
    const num4 = parseFloat(document.getElementById('num4').value);
    result2.textContent = `Result: ${num3 - num4}`;
});

multiButton.addEventListener('click', function() {
    const num5 = parseFloat(document.getElementById('num5').value);
    const num6 = parseFloat(document.getElementById('num6').value);
    result3.textContent = `Result: ${num5 * num6}`;
});

divButton.addEventListener('click', function() {
    const num7 = parseFloat(document.getElementById('num7').value);
    const num8 = parseFloat(document.getElementById('num8').value);
    if (num8 !== 0) {
        result4.textContent = `Result: ${num7 / num8}`;
    } else {
        result4.textContent = 'Error: Division by zero';
    }
});
