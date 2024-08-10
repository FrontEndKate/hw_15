const text1 = document.getElementById('text');
const text2 = document.getElementById('text2');

document.getElementById('btnSize15').addEventListener('click', function() {
    changeFontSize(text1, '15px');});

document.getElementById('btnSize25').addEventListener('click', function() {
    changeFontSize(text1,'25px');});

document.getElementById('btnSize35').addEventListener('click', function() {
    changeFontSize(text1,'35px');});

document.getElementById('btnColorRed').addEventListener('click', function() {
    changeFontColor(text1,'red');});

document.getElementById('btnColorGreen').addEventListener('click', function() {
    changeFontColor(text1, 'green');});

document.getElementById('btnColorBlue').addEventListener('click', function() {
    changeFontColor(text1,'blue');});

document.getElementById('btnSetSize').addEventListener('click', function() {
    const size = document.getElementById('inputSize').value;
    changeFontSize(text2, size);});

document.getElementById('btnSetColor').addEventListener('click', function() {
    const color = document.getElementById('inputColor').value;
    changeFontColor(text2 ,color);});

function changeFontSize(obj, size) {
    obj.style.fontSize = size;
}

function changeFontColor(obj, color) {
    obj.style.color = color;
}
