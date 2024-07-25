var cardNum = 0

var diseaseTerms = ["Disease", "Latent infection", "Incubation period", "Latent period", "Asymptomatic", "Susceptibility", "Virulence"]

var diseaseDescriptions = ["Infection that results in signs (objective) and symptoms (subjective)","An infection where the agent is continuously present, but can remain dormant before reactivation.", "Time in between when a person comes into contact with an agent of disease and when they first show symptoms or signs of disease.", "Time in between when a person comes into contact with a pathogen and when they become infected.", "Displays no signs or symptoms, but is infected and can carry the disease", "To what extent a member of a population is able to resist infection", "The property of causing *severe* disease."]

var entomologyTerms = ["Diptera", "Hymenoptera", "Coleoptera", "Lepidoptera", "Morphogenesis", "Apolysis", "Ecdysis"]

var entomologyDescriptions = ["Only one pair of functional wings, second pair of wings modified into halteres","Forewings usually lager than hind wings, hooked together by hamuli", "Forewings modified into elytra, which serve as protective covers for hind wings", "Two large pairs of wings; Hooked together by a frenulum", "All changes that involve growth, molting, and maturation", "Separation of old exoskeleton from epidermis", "Shedding the old exo- and epicuticle"]

var APTerms = ["Osteoblasts", "Osteocytes"]

var APDescriptions = ["Bone forming cells. They can be found in areas of high metabolism within the bone."]

var card = document.getElementById('card')

var flipnum = 0

var term = ""
var desc = ""

function setAP() {
  term = "APTerms"
  desc = "APDescriptions"
  flipnum = 0
  cardNum = 0
  document.getElementById("events-title").innerHTML = this[term][0]
  document.getElementById("events-content").style.display = "none"
  document.getElementById("events-title").style.display = "grid"
  document.getElementById("flashcard-title").innerHTML = "Anatomy & Physiology"
}

function setDisease() {
  term = "diseaseTerms"
  desc = "diseaseDescriptions"
  flipnum = 0
  cardNum = 0
  document.getElementById("events-title").innerHTML = this[term][0]
  document.getElementById("events-content").style.display = "none"
  document.getElementById("events-title").style.display = "grid"
  document.getElementById("flashcard-title").innerHTML = "Disease Detectives"
}

function setEntomology() {
  term = "entomologyTerms"
  desc = "entomologyDescriptions"
  flipnum = 0
  cardNum = 0
  document.getElementById("events-title").innerHTML = this[term][0]
  document.getElementById("events-content").style.display = "none"
  document.getElementById("events-title").style.display = "grid"
  document.getElementById("flashcard-title").innerHTML = "Entomology"
}

function setMicrobe() {
  term = "microbeTerms"
  desc = "microbeDescriptions"
  flipnum = 0
  cardNum = 0
  document.getElementById("events-title").innerHTML = this[term][0]
  document.getElementById("events-content").style.display = "none"
  document.getElementById("events-title").style.display = "grid"
  document.getElementById("flashcard-title").innerHTML = "Microbe Mission"
}

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
  flipnum = 0
  document.getElementById("events-title").style.display = "grid"
  document.getElementById("events-title").innerHTML = this[term][cardNum%(this[term].length)]
    document.getElementById("events-content").style.display = "none"

}

function prevCard() {
  flipnum = 1
  if (cardNum == 0) {
    cardNum = this[term].length
  } else {
    cardNum = cardNum - 1
  }
  document.getElementById("events-title").style.display = "grid"
  document.getElementById("events-title").innerHTML = this[term][cardNum%(this[term].length)]
    document.getElementById("events-content").style.display = "none"

}

function flip() {
  flipnum = flipnum + 1
  if (flipnum % 2 == 1) {
    document.getElementById("events-content").style.display = "grid"
  document.getElementById("events-content").innerHTML = this[desc][cardNum%(this[desc].length)]
    document.getElementById("events-title").style.display = "none"
    var myDiv = document.getElementById('events-content');
    myDiv.scrollTop = 0;
  } else {
      document.getElementById("events-content").style.display = "none"
      document.getElementById("events-title").style.display = "grid"
    document.getElementById("events-title").innerHTML = this[term][cardNum%(this[term].length)]
  }
}
