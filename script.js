var cardNum = 0

var events = ["Heredity", "Codebusters", "Disease Detectives", "Circuit Lab", "Rocks & Minerals"]

var descriptions = ["Learn about the genes!", "Can you crack the codes?", "Investigate outbreaks", "Learn the basics of circuitry", "They rock."]

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
