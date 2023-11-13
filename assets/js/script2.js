const receivedData = sessionStorage.getItem('myData');
const score = document.getElementById('score');

score.textContent = receivedData;