
//Animação de Órbita
const sun = document.querySelector('.sun');
const mercury = document.querySelector('.mercury');
const venus = document.querySelector('.venus');
const earth = document.querySelector('.earth');
const moon = document.querySelector('.moon');
const mars = document.querySelector('.mars');
const jupiter = document.querySelector('.jupiter');
const saturn = document.querySelector('.saturn');
const uranus = document.querySelector('.uranus');
const neptune = document.querySelector('.neptune');

let sunRotation = 0;
let mercuryRotation = 0;
let venusRotation = 0;
let earthRotation = 0;
let moonRotation = 0;
let marsRotation = 0;
let jupiterRotation = 0;
let saturnRotation = 0;
let uranusRotation = 0;
let neptuneRotation = 0;

const orbitSpeed = 1; // velocidade base

function animate() {
    sunRotation += orbitSpeed * 0.5;
    mercuryRotation += orbitSpeed * 1.2;
    venusRotation += orbitSpeed * 0.8;
    earthRotation += orbitSpeed * 0.6;
    moonRotation += orbitSpeed * 3;
    marsRotation += orbitSpeed * 0.5;
    jupiterRotation += orbitSpeed * 0.4;
    saturnRotation += orbitSpeed * 0.3;
    uranusRotation += orbitSpeed * 0.2;
    neptuneRotation += orbitSpeed * 0.15;

    sun.style.transform = `rotate(${sunRotation}deg)`;
    mercury.style.transform = `rotate(${mercuryRotation}deg)`;
    venus.style.transform = `rotate(${venusRotation}deg)`;
    earth.style.transform = `rotate(${earthRotation}deg)`;
    moon.style.transform = `rotate(${moonRotation}deg)`;
    mars.style.transform = `rotate(${marsRotation}deg)`;
    jupiter.style.transform = `rotate(${jupiterRotation}deg)`;
    saturn.style.transform = `rotate(${saturnRotation}deg)`;
    uranus.style.transform = `rotate(${uranusRotation}deg)`;
    neptune.style.transform = `rotate(${neptuneRotation}deg)`;

    requestAnimationFrame(animate);
}

document.addEventListener('DOMContentLoaded', () => {
  const nome = localStorage.getItem('usuarioNome');
  const userElement = document.querySelector('.user');

  if (nome && userElement) {
    userElement.textContent = nome;
  } else {
    userElement.textContent = 'Visitante'; // fallback
  }
});

animate()