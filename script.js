// 1 função que cria o titulo H1.
function createTitle() {
  const createH1 = document.createElement('h1');
  createH1.innerHTML = 'Paleta de Cores.';
  createH1.id = 'title';
  document.body.appendChild(createH1);
}
createTitle();

// 2 função que adiciona a paleta de cores.
function addCollorPalette() {
  const createSection = document.createElement('section');
  createSection.id = 'color-palette';
  document.body.appendChild(createSection);
}
addCollorPalette();

// 3 função que adiciona cores a paleta de cores.
function addColors() {
  const mainDiv = document.querySelector('#color-palette');
  for (let i = 0; i < 4; i += 1) {
    const divs = document.createElement('div');
    mainDiv.appendChild(divs);
    divs.className = 'color';
    divs.style.border = '1px solid black';
    if (i === 0) {
      divs.id = 'black';
      divs.classList = 'color selected';
    }
  }
}
addColors();

// 4 função que adiciona as cores selecionaveis a paleta de cores.
function selectedColors() {
  const blackColor = document.querySelector('#black');
  blackColor.style.backgroundColor = 'black';
  const chartreuse = document.getElementsByTagName('div')[1];
  chartreuse.style.backgroundColor = 'chartreuse';
  const magenta = document.getElementsByTagName('div')[2];
  magenta.style.backgroundColor = 'magenta';
  const cyan = document.getElementsByTagName('div')[3];
  cyan.style.backgroundColor = 'cyan';
}
selectedColors();

// 5 função que cria quadro de pixels (com outra função que cria os quadrados do pixel)
function createPixelSquares() {
  const frame = document.createElement('section');
  frame.id = 'pixel-board';
  frame.style.width = '210px';
  frame.style.height = '210px';
  document.body.appendChild(frame);
  function pixelSquares() {
    for (let index = 0; index < 25; index += 1) {
      const squares = document.createElement('div');
      squares.className = 'pixel';
      squares.style.width = '40px';
      frame.appendChild(squares);
      squares.style.backgroundColor = 'white';
    }
  }
  pixelSquares();
}
createPixelSquares();

const colorsPalette = document.getElementById('color-palette');
// 6 funçao que muda as cores.
function changeColors(color) {
  const selectedColor = document.querySelector('.selected');
  selectedColor.className += 'selected';
  color.target.classList.add('selected');
}
colorsPalette.addEventListener('click', changeColors);

// 7 função que cria botão que muda as cores.
const firstPixelSquares = document.getElementById('pixel-board');
function squareColor(selectedColor) {
  const chosenColor = document.querySelector('.selected');
  if (selectedColor.target.className === 'pixel') {
    selectedColor.target.style.backgroundColor = chosenColor.style.backgroundColor;
  }
}
firstPixelSquares.addEventListener('click', squareColor);

// 8 função que cria um botão de limpar.
function CleanButton() {
  const mainCleanDiv = document.createElement('div');
  mainCleanDiv.className = 'div-Do-Limpa';
  const CleanButtonDOM = document.createElement('button');
  CleanButtonDOM.id = 'clear-board';
  CleanButtonDOM.innerText = 'Limpar';
  mainCleanDiv.appendChild(CleanButtonDOM);
  firstPixelSquares.before(mainCleanDiv);
}
CleanButton();
const cleaner = document.getElementById('clear-board');

// 9 função que transforma o texto colorido em branco a partir do botão de limpar
function cleanPixels() {
  const littleSquares = document.getElementsByClassName('pixel');
  for (let i2 = 0; i2 < littleSquares.length; i2 += 1) {
    littleSquares[i2].style.backgroundColor = 'white';
  }
}
cleaner.addEventListener('click', cleanPixels);
