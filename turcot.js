document.addEventListener( "DOMContentLoaded", function () {
  var pop = Popcorn( "#video" );

  /* turcot */
  pop.googlemap({
    start: 51,
    end: 57,
    type: "STAMEN-TONER",
    target: "google",
    lat: 45.467777,
    lng: -73.599472,
    zoom: "15",
    heading: "0",
    pitch: "1"
  });
  pop.footnote({
    start: 51,
    end: 57,
    target: "titles",
    text: "<h2><span>Turcot Interchange</span></h2>"
  });
  /* springfield */
  pop.googlemap({
    start: 23,
    end: 29,
    type: "STAMEN-TONER",
    target: "google",
    lat: 38.79062,
    lng: -77.173505,
    zoom: "16",
    heading: "0",
    pitch: "1"
  });
  pop.footnote({
    start: 23,
    end: 29,
    target: "titles",
    text: "<h2><span>Springfield Highway</span></h2>"
  });
  /* houston */
  pop.googlemap({
    start: 30,
    end: 36,
    type: "STAMEN-TONER",
    target: "google",
    lat: 29.76004,
    lng: -95.37405,
    zoom: "16",
    heading: "0",
    pitch: "1"
  });
  pop.footnote({
    start: 30,
    end: 36,
    target: "titles",
    text: "<h2><span>Interstate 10 Highway Interchange Houston</span></h2>"
  });
  /* japan */
  pop.googlemap({
    start: 37,
    end: 43,
    type: "STAMEN-TONER",
    target: "google",
    lat: 35.678293,
    lng: 139.736769,
    zoom: "16",
    heading: "0",
    pitch: "1"
  });
  pop.footnote({
    start: 37,
    end: 43,
    target: "titles",
    text: "<h2><span>Hakozaki Junction,  Tokyo, Japan</span></h2>"
  });
  pop.d3({
    start: 93,
    end: 103,
    target: "d3"
  });
  pop.googlemap({
    start: 93,
    end: 103,
    type: "ROADMAP",
    target: "sxs",
    lat: 45.463442,
    lng: -73.617067,
    zoom: "12",
    heading: "0",
    pitch: "1",
    kml: "http://mjschranz.github.com/turcot/turcot.kml"
  });
  /* Subtitles */
  pop.subtitle({
    "start": 124.74,
    "end": 126.73,
    "text": "I do not want to move"
  });
  pop.subtitle({
    "start": 127.76,
    "end": 131.64,
    "text": "Because I am not going to get a house like the one I have now"
  });
  pop.subtitle({
    "start": 131.8,
    "end": 136.85,
    "text": "with a garden like the one I have in the back and with an entry like this"
  });
  pop.subtitle({
    "start": 136.89,
    "end": 141.69,
    "text": "Where do you think they are going to send me? I am 71 years old"
  });
  pop.subtitle({
    "start": 142.73,
    "end": 145.63,
    "text": "I am going to be send to a cheap nursing home"
  });
  pop.subtitle({
    "start": 220.3,
    "end": 228.81,
    "text": "Reducing the volume of transport allows the reconstruction of a less invasive smaller infrastructure"
  });
  pop.subtitle({
    "start": 228.82,
    "end": 233.96,
    "text": "The number of access roads will change gradually one at a time",
    
  });
  pop.subtitle({
    "start": 234.01,
    "end": 240.3,
    "text": "By redirecting the access roads we reduce the impact in residential areas"
  });
  pop.subtitle({
    "start": 241,
    "end": 245,
    "text": "I can't imagine that there are going to be people losing their homes on May 2012"
  });
  pop.subtitle({
    "start": 245,
    "end": 250,
    "text": "I don't know if we are going to win on other areas, but at least we should stop this."
  });
  pop.play();

}, false );