var cardNum = 0

var events = ["Entomology", "Codebusters", "Disease Detectives", "Anatomy & Physiology", "Microbe Mission", "Optics", "Fossils"]

var descriptions = ["Learn about the creepy crawly bugs", "Crack codes like a spy", "What things make you sick?", "Learn about the human body", "Microscopic tiny things you can't see", "This is how you see", "Prehistoric organisms - like dinosaurs"]

var card = document.getElementById('card')

function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

function nextCard() {
  cardNum = cardNum + 1
  document.getElementById("events-title").innerHTML = events[cardNum%(events.length)]
  document.getElementById("events-content").innerHTML = descriptions[cardNum%(events.length)]
}

function prevCard() {
  if (cardNum == 0) {
    cardNum = events.length
  } else {
    cardNum = cardNum - 1
  }
  document.getElementById("events-title").innerHTML = events[cardNum%(events.length)]
  document.getElementById("events-content").innerHTML = descriptions[cardNum%(events.length)]
}
