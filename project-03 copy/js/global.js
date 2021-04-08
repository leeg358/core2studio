

console.log("is our script file working?")

var Airtable = require("airtable");

var base = new Airtable({ apiKey: "keyNb14EWwLv4CwYS" }).base(
    "apphMeunl37OMmO3d"
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

        songContainer.addEventListener("click", function(event){
          songTitle.classList.toggle("active");
          songImage.classList.toggle("active");
        })

      var songTime = song.fields.Time;
        songTime.forEach(function(time) {
        songContainer.classList.add(time);
      });
        

      var filterSunrise = document.querySelector(".sunrise");
      filterSunrise.addEventListener("click", function() {
        if (songContainer.classList.contains("Sunrise")) {
            songContainer.style.display = "inline-block";
          } else {
            songContainer.style.display = "none";
          }
      });

      var filterEarlyMorning = document.querySelector('.early-morning');
      filterEarlyMorning.addEventListener("click", function(){

        if (songContainer.classList.contains("EarlyMorning")) {
          songContainer.style.display = "inline-block";
        } else {
          songContainer.style.display = "none";
        }
      });

        var filterMorning = document.querySelector('.morning');
        filterMorning.addEventListener("click", function(){

          if (songContainer.classList.contains("Morning")) {
            songContainer.style.display = "inline-block";
          } else {
            songContainer.style.display = "none";
          }
        });

       var filterAfternoon = document.querySelector('.afternoon');
        filterAfternoon.addEventListener("click", function(){

          if (songContainer.classList.contains("Afternoon")) {
            songContainer.style.display = "inline-block";
          } else {
            songContainer.style.display = "none";
          }
        });
        
        var filterSunset = document.querySelector('.sunset');
        filterSunset.addEventListener("click", function(){

          if (songContainer.classList.contains("Sunset")) {
            songContainer.style.display = "inline-block";
          } else {
            songContainer.style.display = "none";
          }
        });
        
        var filterNight = document.querySelector('.night');
        filterNight.addEventListener("click", function(){

          if (songContainer.classList.contains("Night")) {
            songContainer.style.display = "inline-block";
          } else {
            songContainer.style.display = "none";
          }
        }); 

        var filterReset = document.querySelector(".reset");
        filterReset.addEventListener("click", function() {
          songContainer.style.display = "inline-block";
        });


    });
  }