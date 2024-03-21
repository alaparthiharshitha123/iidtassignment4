
function changeColor() {
  const colorBox = document.getElementById('colorBox');
  const colorDisplay = document.getElementById('colorDisplay');
  const randomColor = generateRandomColor();
  
  colorBox.style.backgroundColor = randomColor;
  colorDisplay.style.backgroundColor = randomColor;
}

function generateRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
