// Typewriting effect
let i = 0,
  txt = 'Caring for you at the comfort of your own home.',
  speed = 40;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById('typewriter').innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
