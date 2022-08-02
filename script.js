const divCor1 = document.getElementsByClassName('color')[0];
const divCor2 = document.getElementsByClassName('color')[1];
const divCor3 = document.getElementsByClassName('color')[2];
const divCor4 = document.getElementsByClassName('color')[3];
divCor1.style.backgroundColor = 'black';
divCor2.style.backgroundColor = 'red';
divCor3.style.backgroundColor = 'yellow';
divCor4.style.backgroundColor = 'blue';

function criaASection() {
  const criaSection = document.createElement('section');
  criaSection.id = 'pixel-board';
  criaSection.style.width = '226px';
  criaSection.style.height = '210px';
  document.body.appendChild(criaSection);
  function criasAsDivs() {
    for (let index = 0; index < 25; index += 1) {
      const criaDiv = document.createElement('div');
      criaDiv.className = 'pixel';
      criaDiv.style.width = '40px';
      criaSection.appendChild(criaDiv);
    }
  }
  criasAsDivs();
}
criaASection();
