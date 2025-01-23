// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");



var lyricsData = [
  { text: "Yo me pierdo en tu mirada cada vez", time: 17 },
  { text: "Cuando tú me miras con tus ojitos de miel", time: 20 },
  { text: "En verdad, me tienes bien hipnotizado", time: 24 },
  { text: "Quiero sentir tu presencia a cada rato", time: 28 },
  { text: "Te pido que me abraces fuertemente", time: 33 },
  { text: "Solo tú y yo hasta el final, a la muerte", time: 37 },
  { text: "Tus caricias me quitan lo estresado", time: 41 },
  { text: "Solo tú me entiendes, por eso yo a ti te amo", time: 46 },
  { text: "Y cuando me besas, eso sí me hace sentir", time: 49 },
  { text: "Quе puedo bajarte las estrellas", time: 55 },
  { text: "Y de una vez también bajarte toda la Luna", time: 60 },
  { text: "No aguanto estar un día sin tu carita", time: 67 },
  { text: "Bien obsesionado estoy, sin duda", time: 72 },
  { text: "Bebé, quiero compartir toda una vida entera", time: 77 },
  
  { text: "Yo disfruto cada momento contigo", time: 117 },
  { text: "Sea poca cosa, solo que sea contigo", time: 122 },
  { text: "Iluminas todos mis sextos sentidos", time: 126 },
  { text: "No me importa lo de afuera, por dentro es motivo", time: 120 },
  { text: "Para seguir amándote siempre, mi vida", time: 134 },
  { text: "No soltaré tus lindas manitas", time: 140 },
  { text: "Todos nuestros momentos quedarán en mi alma", time: 144 },
  { text: "Si un día te sientes que ya no te quiero más", time: 151 },
  { text: "Te aseguraré, nadie compara", time: 157},
  { text: "Tus besos, tus caricias, mucho menos tu mirar", time: 161 }
];

function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    
    if (lyrics.innerHTML !== currentLine.text) {
      lyrics.innerHTML = currentLine.text;
      // Aparece la letra suavemente
      lyrics.style.opacity = 1;
    }
  } else {
        lyrics.style.opacity = 0;
  }
}


setInterval(updateLyrics, 100);

function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; 
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); 
}


setTimeout(ocultarTitulo, 216000);
