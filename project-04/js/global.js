console.log("is our script file working?");

var one = [
  "Glorius hillside", "A warm evening", "Nocturnal mountain", "Winter is coming", "Blossoms of nature", "All sleep close at hand", "Nature grows gladly", "Judgment in my mind", "Erasing summer", "Repeating strangers", "Trees sway swift and just", "Beauty in autumn", "Years pass lonely now", "Children laugh at dusk", "Boats sailing in light", "Blossoms of the lake", "Moments of wonder", "Blossoms of winter",  "Murmurs in the past", "Stories another", "Shining on the ice"
]

var two = [
  "A few, yellow goldfish sings", "Turn away as time returns", "Final straw outside my grasp", "Little griefs towards love's grace", "Harmonies of summer's night", "Fragrant scents outside my grasp", "Last moment within this fall", "Mingled worlds for spirits loved", "Gift of life in front of joy", "Singing bird awoken now", "Brewing storms of memories", "Sweet chorus still in my arms", "Autumn rain resigned to fate", "Melting snow now understands", "Final rest within this fall", "Quiet noise lost in the rain", "Frozen time lures you in close", "Hidden smile answers to none", "Now you go of love long lost", "Ecstasy of hope and bliss", "Wait for me before spring falls", "Quiet noise in tranquil minds",  "Friend of all overcome with joy",  "Setting sun beckons me close", "Nothing left across the seas",  "Sweetest taste of memories", "Tranquil peace as echoes pass"
]

var three = [
  "Whilst watching the leaf", "because of the leaf", "Bird flies wild and fierce", "Pursuit in the rain", "Silence of wonder", "Winds howling at day", "Knife cuts without fear", "Echoes in the fields", "Death takes all alone", "Healing of today", "Ending sweet embrace", "Flourish in my mind", "Fog shrouds disturbed", "Dreaming of futures", "Grass sways to the sky", "Days pass in shadows", "Trees sway in still peace", "River flows sudden", "Spring swells across land", "Slumber of a star"

]

/* function lineOne(){
  var randomNumber  = Math.floor(Math.random() * (one.length));
  document.getElementById("oneDisplay").innerHTML = one[randomNumber];
};

function lineTwo(){
  var randomNumber  = Math.floor(Math.random() * (two.length));
  document.getElementById("twoDisplay").innerHTML = two[randomNumber];
};

function lineThree(){
  var randomNumber  = Math.floor(Math.random() * (three.length));
  document.getElementById("threeDisplay").innerHTML = three[randomNumber];
}; */

function lineOne(){
  var randomNumber  = Math.floor(Math.random() * (one.length));
  document.getElementById("haiku").innerHTML += "<br />" + one[randomNumber] ;
};

function lineTwo(){
  var randomNumber  = Math.floor(Math.random() * (two.length));
  document.getElementById("haiku").innerHTML += "<br />" + two[randomNumber];
};

function lineThree(){
  var randomNumber  = Math.floor(Math.random() * (three.length));
  document.getElementById("haiku").innerHTML += "<br />" + three[randomNumber] + "<br />";
};




function updateScroll(){
  var haikuScroll = document.getElementById("haiku");
  element.scrollTop = element.scrollHeight;
}


const textarea = document.querySelector("textarea");

textarea.addEventListener("input", event => {
    const target = event.currentTarget;
    const maxLength = target.getAttribute("maxlength");

    const currentLength = target.value.length;

    if (currentLength == 5) {
/*       document.getElementById('type').value = ''; */
      document.getElementById("oneButton").onclick();
    }

    if (currentLength == 10) {
      document.getElementById("twoButton").onclick();
    }

    if (currentLength == 15) {
      document.getElementById("threeButton").onclick();
      document.getElementById('type').value = '';
    }
console.log(currentLength);
setInterval(updateScroll,1000);
    }

);

