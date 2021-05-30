
// Global Variables
const array = [];

function resetArray() {
    $('#main-container').empty();
    array.length = 0;
}

function showArray(arr) {
    const container = document.getElementById("main-container");

    for (var i = 0; i < 88; i++) {
        var barHeight = String(arr[i]) + "px";
        var newElement = document.createElement("div");
        newElement.className = "array-bar";
        newElement.style.height = barHeight;
        container.appendChild(newElement);
    }
}

function generateNewArray() {
    $("#begin").css("opacity", "1");
    $("#begin").removeClass("disabled");
    $("#algo-select").css("opacity", "1");
    $("#algo-select").removeClass("disabled");

    resetArray();

    for (var i = 0; i < 88; i++) {
        array.push(Math.floor(Math.random() * 520) + 50);
    }

    showArray(array); 
}

function is_array_sorted(arr) {
  for(var i=0; i < arr.length-1; i++) {
    if(arr[i] > arr[i+1]) {
       return false;
    }
  }
  return true;
}

function redirectGithub() {
    window.open("https://github.com/amazurek10");
}

/////////////////////////////////////////////////////

generateNewArray();
