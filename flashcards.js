var cardNum = 0

var diseaseTerms = ["Disease", "Latent infection", "Incubation period", "Latent period", "Asymptomatic", "Susceptibility", "Virulence", "Endemic", "Outbreak", "Epidemic", "Pandemic", "Vector", "Fomite", "Zoonosis", "Infectious dose", "Period of communicability", "Contamination", "Infection", "Infectivity", "Pathogenicity", "Virulence", "Incidence", "Prevalence"]

var diseaseDescriptions = ["Infection that results in signs (objective) and symptoms (subjective)","An infection where the agent is continuously present, but can remain dormant before reactivation.", "Time in between when a person comes into contact with an agent of disease and when they first show symptoms or signs of disease.", "Time in between when a person comes into contact with a pathogen and when they become infected.", "Displays no signs or symptoms, but is infected and can carry the disease", "To what extent a member of a population is able to resist infection", "The property of causing *severe* disease.", "disease or condition present among a population at all times (e.g. influenza)", "more cases of a particular disease than expected in a given area or among a specialized group of people over a particular period of time (cluster of people got food poisoning after eating at the same place).", "large numbers of people over a wide geographic area affected (polio)", "An epidemic occurring over a very wide area (several countries or continents) and usually affecting a large proportion of the population. (e.g. COVID-19)", "An animate intermediary in the indirect transmission of an agent that carries the agent from a reservoir to a susceptible host (e.g. mosquitoes)", "A physical object that serves to transmit an infectious agent from person to person (e.g. doorknob).", "An infectious disease that is transmissible from animals to humans (e.g. rabies).", "The amount of pathogen (measured in number of microorganisms) required to cause an infection in the host. Usually it varies according to the pathogenic agent and the consumer's age and overall health.", "The period when you are infectious and can spread your germs (whether bacteria, viruses, or parasites) to an uninfected person", "When a potentially infectious agent exists in the host but has not yet in invaded the tissues of the host. The microbe may be destroyed by the body defenses or it may become part of the normal flora.", "When the infectious agent begins its invasion of the host tissue and its rapid multiplication. The infection may be localized or it may spread to alternative sites as deeper organs or tissues becoming systemic", "Refers to the proportion of exposed persons who become infected.", "Refers to the proportion of infected persons who develop clinical disease.", "Refers to the proportion of persons with clinical disease who become severely ill or die.", "Probability of the occurrence of a medical condition in a population.", "The proportion of a population  affected by a medical condition."]

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
