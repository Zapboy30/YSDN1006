//

var myVar = setInterval(function(){ myTimer() }, 1000);

function myTimer() {
  var d = new Date();
  var s = d.getSeconds();
  var deadline = 59;
  var t = deadline - s;
  document.getElementById("demo").innerHTML = 'New word in ' + t + ' seconds';

}


function randomWord(callback) {
    var baseUrl = "https://api.wordnik.com/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=1000&minDictionaryCount=4&api_key=";
    var apiKey = "1380d58b8b5c33325130c0e8f340be6bc6fba6f7bb65bfc6f";
    var apiUrl = baseUrl + apiKey;

    //A promise is needed here, as without it the second API call would return before pronounceIt() can execute the callback, and we would get, well, nothing, instead of the actual word.
    return new Promise(function(resolve, reject) {
      $.ajax({
          type: "GET",
          url: apiUrl,
          dataType: "json",
          success: function(data) {
              $("#mot1").append(data.word);
              resolve();
          }
          });
      });

}
function pronounceIt() {
    var baseUrl = "https://api.wordnik.com/v4/word.json/"
    var apiKey = "1380d58b8b5c33325130c0e8f340be6bc6fba6f7bb65bfc6f";
    //var word = $("#mot1").text();
    var word = $("#mot1").text();
    var apiUrl = baseUrl + word + "/pronunciations?useCanonical=true&typeFormat=ahd&limit=1&api_key=" + apiKey;

    $.ajax({
        type: "GET",
        url: apiUrl,
        dataType: "json",
        success: function(data) {
            if (data.length > 0) {
              var input = data[0].raw;
              var output = "\\ <em>" + input.slice(1,-1) + "</em> \\ &nbsp;&nbsp;<strong>noun</strong>";
              $("#quoi1").append(output);
              console.log(input);
            }
        }
    });
}
function defineIt() {
    var baseUrl = "https://api.wordnik.com/v4/word.json/"
    var apiKey = "1380d58b8b5c33325130c0e8f340be6bc6fba6f7bb65bfc6f";
    var word = $("#mot1").text();
    //var word = "test";
    var apiUrl = baseUrl + word + "/definitions?limit=1&includeRelated=true&sourceDictionaries=all&useCanonical=false&includeTags=false&api_key=" + apiKey;

    $.ajax({
        type: "GET",
        url: apiUrl,
        dataType: "json",
        success: function(data) {
          $("#hein").append(data[0].text);
          resolve();
        }
    });
}

$(document).ready(function() {
  randomWord().then(pronounceIt).then(defineIt);
  var meVar = setInterval(function(){ meTime() }, 1000);

  function meTime() {
    var dat = new Date();
    var sec = dat.getSeconds();
    var deadLine = 59;
    var temp = deadLine - sec;
    if(temp <= 0){
      document.getElementById("mot1").innerHTML = '';
      document.getElementById("quoi1").innerHTML = '';
      document.getElementById("hein").innerHTML = "";
    randomWord().then(pronounceIt).then(defineIt);
  }

  }
});
