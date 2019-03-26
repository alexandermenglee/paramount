// Typewriting effect
function typeWriter() {
  var i = 0,
  txt = 'Healthcare at your doorstep',
  speed = 40,
  typed = document.getElementById('typewriter');

  (function addChar() {
    if (i < txt.length) {
      typed.innerHTML += txt.charAt(i);
      i++;
      console.log(i);
      setTimeout(addChar, speed);
    }
  })();
} 

document.onload = typeWriter();