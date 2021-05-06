console.log("is our script file working?");

var Airtable = require("airtable");

var base = new Airtable({ apiKey: "keyNb14EWwLv4CwYS" }).base(
  "apphMeunl37OMmO3d"
);

base("chill songs").select({}).eachPage(gotPageOfSongs, gotAllSongs);

const songs = [];

function gotPageOfSongs(records, fetchNextPage) {
  console.log("gotPageOfSongs()");
  songs.push(...records);
  fetchNextPage();
}

function gotAllSongs(err) {
  console.log("gotAllSongs()");

  // consoleLogSongs();
  showSongs();
  addButtonListeners();
}

function consoleLogSongs() {
  console.log("consoleLogSongs()");
  songs.forEach((song) => {
    console.log("Song:", song);
  });
}

let timeOfDay = "song-container";
let weather = "song-container";

function setTimeOfDay(newTimeOfDay) {
  // remember the new time
  timeOfDay = newTimeOfDay;

  filterSongs();
}

function setWeather(newWeather) {
  weather = newWeather;
  filterSongs();
}

function filterSongs() {
  console.log("filter songs", timeOfDay, weather);

//background video MORNINGSUNNY
  if ( timeOfDay == "EarlyMorning" && weather == "Sunny" ||  timeOfDay == "EarlyMorning" && weather == "ClearSkies" || timeOfDay == "Morning" && weather == "ClearSkies" || timeOfDay == "Morning" && weather == "Sunny"){
    document.getElementById("morningsunny-video").style.display="block";
  } else{
    document.getElementById("morningsunny-video").style.display="none";
  }

//background video MORNINGCLOUDY
if (timeOfDay == "EarlyMorning" && weather == "Rainy" || timeOfDay == "Morning" && weather == "PartiallyCloudy" ||  timeOfDay == "EarlyMorning" && weather == "PartiallyCloudy"){
  document.getElementById("morningcloudy-video").style.display="block";
} else{
  document.getElementById("morningcloudy-video").style.display="none";
}

//background video NIGHT
if (timeOfDay == "Night" && weather == "Sunny" || timeOfDay == "Night" && weather == "ClearSkies" || timeOfDay == "Night" && weather == "Cloudy" || timeOfDay == "Night" && weather == "Rainy" || timeOfDay == "Night" && weather == "PartiallyCloudy"){
  document.getElementById("night-video").style.display="block";
} else{
  document.getElementById("night-video").style.display="none";
}

//background video RAINY
if (timeOfDay == "Afternoon" && weather == "Rainy" || timeOfDay == "Morning" && weather == "Rainy" || timeOfDay == "Sunrise" && weather == "Rainy" || timeOfDay == "Sunset" && weather == "Rainy"){
  document.getElementById("rainy-video").style.display="block";
} else{
  document.getElementById("rainy-video").style.display="none";
}

//background video CLEAR SUNSET
if (timeOfDay == "Sunset" && weather == "ClearSkies" || timeOfDay == "Sunset" && weather == "Sunny" || timeOfDay == "Sunrise" && weather == "Sunny" || timeOfDay == "Sunrise" && weather == "ClearSkies"){
  document.getElementById("clearsunset-video").style.display="block";
} else{
  document.getElementById("clearsunset-video").style.display="none";
}

//background video CLOUDY SUNSET
if (timeOfDay == "Sunrise" && weather == "PartiallyCloudy" || timeOfDay == "Sunrise" && weather == "Cloudy" || timeOfDay == "Sunset" && weather == "PartiallyCloudy" || timeOfDay == "Sunset" && weather == "Cloudy"){
  document.getElementById("cloudysunset-video").style.display="block";
} else{
  document.getElementById("cloudysunset-video").style.display="none";
}

//background video AFTERNOON CLEAR
if (timeOfDay == "Afternoon" && weather == "ClearSkies"){
  document.getElementById("afternoonclear-video").style.display="block";
} else{
  document.getElementById("afternoonclear-video").style.display="none";
}
//background video AFTERNOON SUNNY
if (timeOfDay == "Afternoon" && weather == "Sunny"){
  document.getElementById("afternoonsunny-video").style.display="block";
} else{
  document.getElementById("afternoonsunny-video").style.display="none";
}
//background video CLOUDY
if (timeOfDay == "EarlyMorning" && weather == "Cloudy" || timeOfDay == "Morning" && weather == "Cloudy" || timeOfDay == "Afternoon" && weather == "PartiallyCloudy" || timeOfDay == "Afternoon" && weather == "Cloudy"){
  document.getElementById("cloudy-video").style.display="block";
} else{
  document.getElementById("cloudy-video").style.display="none";
}



  // hide all the songs
  const songContainers = document.querySelectorAll(".song-container");
  for (s of songContainers) {
    s.style.display = "none";
  }

  // show all the songs if time and weather match
  const filteredContainers = document.querySelectorAll(
    "." + timeOfDay + "." + weather
  );
  console.log(filteredContainers);
  for (s of filteredContainers) {
    s.style.display = "block";
  }
}

//change color of selected time of day button
var dayButton = document.getElementsByClassName("day-button");
function dayButtonColor() {
  for (var i = 0; i < dayButton.length; i++) {
    dayButton[i].classList.remove("clicked");
  }
  this.classList.add("clicked");
}
for (var i = 0; i < dayButton.length; i++) {
  dayButton[i].addEventListener("click", dayButtonColor, false);
}

//change color of selected weather buttton
var weatherButton = document.getElementsByClassName("weather-button");
function weatherButtonColor() {
  for (var i = 0; i < weatherButton.length; i++) {
    weatherButton[i].classList.remove("clicked");
  }
  this.classList.add("clicked");
}
for (var i = 0; i < weatherButton.length; i++) {
  weatherButton[i].addEventListener("click", weatherButtonColor, false);
}

function addButtonListeners() {
  var filterSunrise = document.querySelector(".sunrise");
  filterSunrise.addEventListener("click", () => setTimeOfDay("Sunrise"));

  var filterEarlyMorning = document.querySelector(".early-morning");
  filterEarlyMorning.addEventListener("click", () =>
    setTimeOfDay("EarlyMorning")
  );

  var filterMorning = document.querySelector(".morning");
  filterMorning.addEventListener("click", () => setTimeOfDay("Morning"));

  var filterAfternoon = document.querySelector(".afternoon");
  filterAfternoon.addEventListener("click", () => setTimeOfDay("Afternoon"));

  var filterSunset = document.querySelector(".sunset");
  filterSunset.addEventListener("click", () => setTimeOfDay("Sunset"));

  var filterNight = document.querySelector(".night");
  filterNight.addEventListener("click", () => setTimeOfDay("Night"));

  var filterReset = document.querySelector(".reset");
  filterReset.addEventListener("click", () => setTimeOfDay("song-container"));

  var filterPartiallyCloudy = document.querySelector(".sunny");
  filterPartiallyCloudy.addEventListener("click", () => setWeather("Sunny"));

  var filterPartiallyCloudy = document.querySelector(".partially-cloudy");
  filterPartiallyCloudy.addEventListener("click", () =>
    setWeather("PartiallyCloudy")
  );

  var filterCloudy = document.querySelector(".cloudy");
  filterCloudy.addEventListener("click", () => setWeather("Cloudy"));

  var filterRainy = document.querySelector(".rainy");
  filterRainy.addEventListener("click", () => setWeather("Rainy"));

  var filterClearSkies = document.querySelector(".clear-skies");
  filterClearSkies.addEventListener("click", () => setWeather("ClearSkies"));
}



function showSongs() {
  console.log("showSongs()");
  songs.forEach((song) => {
    var songContainer = document.createElement("div");
    songContainer.classList.add("song-container");
    document.querySelector(".container").append(songContainer);

    var songInfo = document.createElement("div");
    songInfo.classList.add("song-info");
    document.querySelector(".info").append(songInfo);

    var songTitle = document.createElement("h2");
    songTitle.classList.add("song-title");
    songTitle.innerText = song.fields.Title;
    songContainer.append(songTitle);

    var songImage = document.createElement("img");
    songImage.classList.add("song-image");
    songImage.src = song.fields.Image[0].url;
    songInfo.append(songImage);

  

    var songSpotify = document.createElement("IFRAME");
    songSpotify.setAttribute("src", song.fields.Spotify);
    songSpotify.classList.add("song-spotify");
    songSpotify.innerHTML = "Listen to it on Spotify!";
    songInfo.append(songSpotify);;
    
  var songTitleInfo = document.createElement("h3");
    songTitleInfo.classList.add("song-title-info");
    songTitleInfo.innerText = song.fields.TitleTwo;
    songInfo.append(songTitleInfo);

    var songArtist = document.createElement("h3");
    songArtist.classList.add("song-artist");
    songArtist.innerText = song.fields.Artist;
    songInfo.append(songArtist);

    var songLink = document.createElement("a");
    songLink.setAttribute("href", song.fields.Song);
    songLink.classList.add("song-link");
    songLink.innerHTML = "Listen to it on Spotify <b>↗<b>";
    songInfo.append(songLink);


    songContainer.addEventListener("click", function (event) {
      document
        .querySelectorAll(".active")
        .forEach((song) => song.classList.remove("active"));

      songContainer.classList.toggle("active");
      songImage.classList.toggle("active");
      songLink.classList.toggle("active");
      songArtist.classList.toggle("active");
      songTitleInfo.classList.toggle("active");
      songSpotify.classList.toggle("active");

    });

    var songTime = song.fields.Time;
    songTime.forEach(function (time) {
      songContainer.classList.add(time);
    });

    var songWeather = song.fields.Weather;
    songWeather.forEach(function (weather) {
      songContainer.classList.add(weather);
    });

  });



}
