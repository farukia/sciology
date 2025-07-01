var cardNum = 0;
var diseaseTerms = ["Disease", "Latent infection", "Incubation period", "Latent period", "Asymptomatic", "Susceptibility", "Virulence", "Endemic", "Outbreak", "Epidemic", "Pandemic", "Vector", "Fomite", "Zoonosis", "Infectious dose", "Period of communicability", "Contamination", "Infection", "Infectivity", "Pathogenicity", "Virulence", "Incidence", "Prevalence"];
var diseaseDescriptions = ["Infection that results in signs (objective) and symptoms (subjective)", "An infection where the agent is continuously present, but can remain dormant before reactivation.", "Time in between when a person comes into contact with an agent of disease and when they first show symptoms or signs of disease.", "Time in between when a person comes into contact with a pathogen and when they become infected.", "Displays no signs or symptoms, but is infected and can carry the disease", "To what extent a member of a population is able to resist infection", "The property of causing *severe* disease.", "Disease or condition present among a population at all times (e.g. influenza)", "More cases of a particular disease than expected in a given area or among a specialized group of people over a particular period of time.", "Large numbers of people over a wide geographic area affected (polio)", "An epidemic occurring over a very wide area (several countries or continents) and usually affecting a large proportion of the population. (e.g. COVID-19)", "An animate intermediary in the indirect transmission of an agent that carries the agent from a reservoir to a susceptible host (e.g. mosquitoes)", "A physical object that serves to transmit an infectious agent from person to person (e.g. doorknob).", "An infectious disease that is transmissible from animals to humans (e.g. rabies).", "The amount of pathogen (measured in number of microorganisms) required to cause an infection in the host.", "The period when you are infectious and can spread your germs to an uninfected person", "When a potentially infectious agent exists in the host but has not yet invaded the tissues of the host.", "When the infectious agent begins its invasion of the host tissue and its rapid multiplication.", "Refers to the proportion of exposed persons who become infected.", "Refers to the proportion of infected persons who develop clinical disease.", "Refers to the proportion of persons with clinical disease who become severely ill or die.", "Probability of the occurrence of a medical condition in a population.", "The proportion of a population affected by a medical condition."];

var entomologyTerms = ["Diptera", "Hymenoptera", "Coleoptera", "Lepidoptera", "Morphogenesis", "Apolysis", "Ecdysis"];
var entomologyDescriptions = ["Only one pair of functional wings, second pair of wings modified into halteres", "Forewings usually larger than hind wings, hooked together by hamuli", "Forewings modified into elytra, which serve as protective covers for hind wings", "Two large pairs of wings; Hooked together by a frenulum", "All changes that involve growth, molting, and maturation", "Separation of old exoskeleton from epidermis", "Shedding the old exo- and epicuticle"];

var heredityTerms = [
  "Gene",
  "Allele",
  "Genotype",
  "Phenotype",
  "Dominant",
  "Recessive",
  "Homozygous",
  "Heterozygous",
  "Punnett square",
  "Mendel's laws",
  "Mutation",
  "Chromosome",
  "DNA",
  "RNA",
  "Transcription",
  "Translation",
  "Genetic linkage",
  "Crossing over",
  "Autosome",
  "Sex chromosome",
  "Pedigree",
  "Codominance",
  "Incomplete dominance",
  "Polygenic trait",
  "Epigenetics"
];

var heredityDescriptions = [
  "Unit of heredity made up of DNA that codes for a trait.",
  "Different forms of a gene.",
  "Genetic makeup of an organism.",
  "Observable characteristics of an organism.",
  "Allele that masks the expression of another allele.",
  "Allele that is masked by a dominant allele.",
  "Having two identical alleles for a trait.",
  "Having two different alleles for a trait.",
  "Diagram used to predict genotype and phenotype ratios.",
  "Principles of inheritance established by Gregor Mendel.",
  "Change in DNA sequence that can affect traits.",
  "Structure that carries genetic information.",
  "Molecule that stores genetic information.",
  "Molecule that helps translate genetic information into proteins.",
  "Process of copying DNA to RNA.",
  "Process of making proteins from RNA instructions.",
  "Genes located close together on the same chromosome tend to be inherited together.",
  "Exchange of genetic material between homologous chromosomes.",
  "Chromosomes not involved in determining sex.",
  "Chromosomes that determine biological sex (X and Y).",
  "Chart showing inheritance of traits through generations.",
  "Both alleles are fully expressed in the phenotype.",
  "Intermediate phenotype when neither allele is completely dominant.",
  "Trait controlled by multiple genes.",
  "Regulation of gene expression without changing DNA sequence."
];

var APTerms = [
  // Skeletal
  "Osteoblasts",
  "Osteocytes",
  // Nervous
  "Neuron",
  "Synapse",
  "CNS",
  "PNS",
  "Myelin sheath",
  "Action potential",
  // Special Senses
  "Photoreceptors",
  "Cochlea",
  "Olfactory bulb",
  "Taste buds",
  "Vestibular system",
  // Endocrine
  "Hormone",
  "Pituitary gland",
  "Thyroid gland",
  "Adrenal glands",
  "Insulin"
];

var APDescriptions = [
  // Skeletal
  "Bone forming cells. They can be found in areas of high metabolism within the bone.",
  "Mature bone cells derived from osteoblasts; they maintain the bone matrix.",
  // Nervous
  "Basic unit of the nervous system; transmits electrical impulses.",
  "Junction between two neurons or a neuron and a target cell where neurotransmitters are released.",
  "Central Nervous System; includes the brain and spinal cord.",
  "Peripheral Nervous System; includes all nerves outside the brain and spinal cord.",
  "Insulating layer around neurons that speeds up signal transmission.",
  "Rapid change in membrane potential that travels along the neuron.",
  // Special Senses
  "Light-sensitive cells in the retina (rods and cones).",
  "Spiral-shaped organ in the inner ear responsible for hearing.",
  "Neural structure involved in the sense of smell.",
  "Sensory organs on the tongue that detect taste.",
  "Part of the inner ear involved in balance and spatial orientation.",
  // Endocrine
  "Chemical messenger secreted by endocrine glands that affects distant cells.",
  "Master gland that controls other endocrine glands and regulates growth, metabolism, and reproduction.",
  "Produces hormones that regulate metabolism, such as thyroxine.",
  "Produce hormones like adrenaline and cortisol in response to stress.",
  "Hormone produced by the pancreas that regulates blood glucose levels."
];

var microbeTerms = ["Bacteria", "Virus"];
var microbeDescriptions = ["Single-celled prokaryotic organisms that can be beneficial or pathogenic.", "A tiny infectious agent that replicates only inside the living cells of organisms."];

var term = [];
var desc = [];
var flipnum = 0;

function resetDeck() {
    flipnum = 0;
    cardNum = 0;
    document.getElementById("term").innerHTML = term[0];
    document.getElementById("description").style.display = "none";
    document.getElementById("term").style.display = "grid";
}

function setAP() {
    term = APTerms;
    desc = APDescriptions;
    resetDeck();
    
 
}

function setDisease() {
    term = diseaseTerms;
    desc = diseaseDescriptions;
    resetDeck();

}

function setEntomology() {
    term = entomologyTerms;
    desc = entomologyDescriptions;
    resetDeck();

}

function setMicrobe() {
    term = microbeTerms;
    desc = microbeDescriptions;
    resetDeck();

}

function setHeredity() {
    term = heredityTerms;
    desc = heredityDescriptions;
    resetDeck();
}

function nextCard() {
    cardNum = (cardNum + 1) % term.length;
    flipnum = 0;
    document.getElementById("term").style.display = "grid";
    document.getElementById("term").innerHTML = term[cardNum];
    document.getElementById("description").style.display = "none";
    console.log("Next card:", cardNum);
}

function prevCard() {
    cardNum = (cardNum - 1 + term.length) % term.length;
    flipnum = 0;
    document.getElementById("term").style.display = "grid";
    document.getElementById("term").innerHTML = term[cardNum];
    document.getElementById("description").style.display = "none";
    console.log("Previous card:", cardNum);
}

function flip() {
    flipnum++;
    if (flipnum % 2 == 1) {
        document.getElementById("description").style.display = "grid";
        document.getElementById("description").innerHTML = desc[cardNum];
        document.getElementById("term").style.display = "none";
        document.getElementById("description").scrollTop = 0;
    } else {
        document.getElementById("description").style.display = "none";
        document.getElementById("term").style.display = "grid";
        document.getElementById("term").innerHTML = term[cardNum];
    }
}

function myFunction() {
    var x = document.getElementById("myNavbar");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}
