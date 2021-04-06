// Drop down menu for time of day 
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
    optionsContainer.classList.toggle("active");
});

optionsList.forEach( o => {
    o.addEventListener("click", () =>{
        selected.innerHTML = o.querySelector("label").innerHTML;
        optionsContainer.classList.remove("active");  
    });
});

// airtable

console.log("is our script file working?")

var Airtable = require("airtable");

var base = new Airtable({ apiKey: "keyNb14EWwLv4CwYS" }).base(
    "appbzNTf3bpPlY5WV"
  );

base("chill songs").select({}).eachPage(gotPageOfSongs, gotAllSongs);

const songs = []

function gotPageOfSongs(records, fetchNextPage) {
    console.log("gotPageOfSongs()");
    songs.push(...records);
    fetchNextPage();
  }

  function gotAllSongs(err){
      console.log("gotAllSongs()");
  

  consoleLogSongs();
    showSongs();
  }

function consoleLogSongs(){
    console.log("consoleLogSongs()");
    songs.forEach((song)=>{
        console.log("Song:", song);     
});
}

function showSongs(){
    console.log("showSongs()");
    songs.forEach((song)=>{
        
        var songContainer = document.createElement("div");
        songContainer.classList.add("song-container");
        document.querySelector(".container").append(songContainer);

        var songTitle = document.createElement("h2");
        songTitle.classList.add("song-title");
        songTitle.innerText = song.fields.Title;
        songContainer.append(songTitle);

        var songImage = document.createElement("img");
        songImage.classList.add("song-image");
        songImage.src = song.fields.Image[0].url;
        songContainer.append(songImage);
    })
}

songContainer.addEventListener("click",function(){
   songTitle.classList.toggle("active");
    songImage.classList.toggle("active");
})

var songTime = song.fields.Time;
songContainer.classList.add(songTime);

var filterSunrise = document.querySelector('#sunrise');
filterSunrise.addEventListener("click", function(){
    if (songContainer.classList.contains("Sunrise")){
        songContainer.style.display="block";
    } 
    else{
        songContainer.style.display="none";
    }
})
;


