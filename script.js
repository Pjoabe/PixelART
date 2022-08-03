// 1 função que cria o titulo H1.
function criaTitulo() {
  const criaH1 = document.createElement('h1');
  criaH1.innerHTML = 'Paleta de Cores.';
  criaH1.id = 'title';
  document.body.appendChild(criaH1);
}
criaTitulo();
// 2 função que adiciona a paleta de cores.
function adicionaPaletaDeCores() {
  const criaSection = document.createElement('section');
  criaSection.id = 'color-palette';
  document.body.appendChild(criaSection);
}
adicionaPaletaDeCores();
// 3 função que adiciona cores a paleta de cores.
function adicionaAsCores() {
  const maeDasDivs = document.querySelector('#color-palette');
  for (let i = 0; i < 4; i += 1) {
    const criaDivs = document.createElement('div');
    maeDasDivs.appendChild(criaDivs);
    criaDivs.className = 'color';
    criaDivs.style.border = '1px solid black';
    if (i === 0) {
      criaDivs.id = 'black';
      criaDivs.classList = 'color selected';
    }
  }
}
adicionaAsCores();
// 4 função que adiciona as cores selecionaveis a paleta de cores.
function coresSelecionaveis() {
  const preto = document.querySelector('#black');
  preto.style.backgroundColor = 'black';
  const amarelo = document.getElementsByTagName('div')[1];
  amarelo.style.backgroundColor = 'yellow';
  const red = document.getElementsByTagName('div')[2];
  red.style.backgroundColor = 'red';
  const green = document.getElementsByTagName('div')[3];
  green.style.backgroundColor = 'green';
}
coresSelecionaveis();
// 5 função que cria quadro de pixels (com outra função que cria os quadrados do pixel)
function criaQuadradosDePixels() {
  const quadro = document.createElement('section');
  quadro.id = 'pixel-board';
  quadro.style.width = '210px';
  quadro.style.height = '210px';
  document.body.appendChild(quadro);
  function quadradosDePixel() {
    for (let indice = 0; indice < 25; indice += 1) {
      const quadrados = document.createElement('div');
      quadrados.className = 'pixel';
      quadrados.style.width = '40px';
      quadro.appendChild(quadrados);
      quadrados.style.backgroundColor = 'white';
    }
  }
  quadradosDePixel();
}
criaQuadradosDePixels();

const paletaDeCores = document.getElementById('color-palette');

// 6 funçao que muda as cores.
function mudaCores(cor) {
  const corSelecionada = document.querySelector('.selected');
  corSelecionada.className += 'selected';
  cor.target.classList.add('selected');
}
paletaDeCores.addEventListener('click', mudaCores);

// 7 função que cria botão que muda as cores.
const quadradoDePIxels1 = document.getElementById('pixel-board');
function corDoQuadrado(corClicada) {
  const corEscolhida = document.querySelector('.selected');
  if (corClicada.target.className === 'pixel') {
    corClicada.target.style.backgroundColor = corEscolhida.style.backgroundColor;
  }
}
quadradoDePIxels1.addEventListener('click', corDoQuadrado);
// 8 função que cria um botão de limpar.
function criaUmBotaoDeLimpar() {
  const divMaeDoBotaoDeLimpar = document.createElement('div');
  divMaeDoBotaoDeLimpar.className = 'div-Do-Limpa';
  const botaoDeLimpar = document.createElement('button');
  botaoDeLimpar.id = 'clear-board';
  botaoDeLimpar.innerText = 'Limpar';
  divMaeDoBotaoDeLimpar.appendChild(botaoDeLimpar);
  quadradoDePIxels1.before(divMaeDoBotaoDeLimpar);
}
criaUmBotaoDeLimpar();

const botaoQueLimpa = document.getElementById('clear-board');
// 9 função que transforma o texto colorido em branco a partir do botão de limpar
function fazALimpa() {
  const quadradinhos = document.getElementsByClassName('pixel');
  for (let i2 = 0; i2 < quadradinhos.length; i2 += 1) {
    quadradinhos[i2].style.backgroundColor = 'white';
  }
}
botaoQueLimpa.addEventListener('click', fazALimpa);
