var cardNum = 0

var events = ["Entomology", "Codebusters", "Disease Detectives", "Anatomy & Physiology", "Microbe Mission", "Optics", "Fossils"]

var descriptions = ["Bugs - mysteries of the insect world", "Crack the codes under a time limit?", "Investigate outbreaks", "Explore the body's wonders", "Microscopic tiny things you can't see", "It's all light, lenses, and rainbows", "Prehistoric organisms - like dinosaurs"]

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
