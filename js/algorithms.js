
/////////////////////////////////////

// Global Variables
const slow = 50;
const normal = 20;
const fast = 5;

/////////////////////////////////////

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function getSpeed() {
    return document.getElementById("speedSlider").value;
}

function beginVisual() {
    var algoSelect = document.getElementById("algo-select");
    var selection = algoSelect.value;

    switch (selection) {
        case 'default':
            alert("Make sure to choose an algorithm first!");
            break;

        case 'selectionSort':
            selectionSort();
            break;

        case 'bubbleSort':
            bubbleSort();
            break;
        case 'insertionSort':
            insertionSort();
            break;
        case 'mergeSort':
            mergeSort();
            break;
        case 'quickSort':
            quickSort(0, parseInt(document.querySelector("#main-container").children.length) - 1);
            break;
    }
}

/////////////////////////////////////////////////////////////////////

async function selectionSort() {
    $("#algo-select").css("opacity", "0.3");
    $("#algo-select").addClass("disabled");
    $("#newArray").css("opacity", "0.3");
    $("#newArray").addClass("disabled");
    $("#begin").addClass("disabled");

    const children = document.querySelector("#main-container").children;
    var speed = getSpeed();

    for (let i = 0; i < array.length; i++) {
        let minIndex = i;

        children[i].style.backgroundColor = "#EB455F";  // Index we're focusing on
        await sleep(speed);

        for (let j = i + 1; j < array.length; j++) {
            children[j].style.backgroundColor = "#ADA2FF";  // What we're comparing to

            if (array[j] < array[minIndex]) {
                minIndex = j;
                children[j].style.backgroundColor = "#0081C9";  // A condition is met
            }
        }

        if (minIndex !== i) {
            [array[i], array[minIndex]] = [array[minIndex], array[i]];
        }

        children[i].style.backgroundColor = "black";
        children[i].style.height = String(array[i]) + "px";
        children[minIndex].style.height = String(array[minIndex]) + "px";
    }

    await sleep(50);
    for (var i = 0; i < children.length; i++) {
        children[i].style.backgroundColor = "green";
        await sleep(10);
    }

    $("#begin").css("opacity", "0.3");
    $("#begin").addClass("disabled");
    $("#newArray").css("opacity", "1");
    $("#newArray").removeClass("disabled");
}

async function bubbleSort() {
    $("#algo-select").css("opacity", "0.3");
    $("#algo-select").addClass("disabled");
    $("#newArray").css("opacity", "0.3");
    $("#newArray").addClass("disabled");
    $("#begin").addClass("disabled");

    const children = document.querySelector("#main-container").children;
    var speed = getSpeed();

    let swapped;
    do {
        swapped = false;
        for (let i = 0; i < array.length; i++) {
            children[i].style.backgroundColor = "#EB455F"; // Index

            if (array[i + 1]) {
                children[i + 1].style.backgroundColor = "#ADA2FF"; // What we're comparing with
            }
            await sleep(speed);

            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]];
                swapped = true;

                children[i + 1].style.backgroundColor = "#0081C9";    // Condition is met
                await sleep(speed);

                children[i].style.height = String(array[i]) + "px";
                children[i + 1].style.height = String(array[i + 1]) + "px";
            }

            children[i].style.backgroundColor = "black";
        }
    } while (swapped);

    await sleep(50);
    for (var i = 0; i < children.length; i++) {
        children[i].style.backgroundColor = "green";
        await sleep(10);
    }

    $("#begin").css("opacity", "0.3");
    $("#begin").addClass("disabled");
    $("#newArray").css("opacity", "1");
    $("#newArray").removeClass("disabled");
}

async function insertionSort() {
    $("#algo-select").css("opacity", "0.3");
    $("#algo-select").addClass("disabled");
    $("#newArray").css("opacity", "0.3");
    $("#newArray").addClass("disabled");
    $("#begin").addClass("disabled");

    const children = document.querySelector("#main-container").children;
    var speed = getSpeed();
    var counter;

    let i, key, j;
    for (i = 1; i < array.length; i++) {
        await sleep(speed);
        counter = 0;

        children[i].style.backgroundColor = "yellow";
        await sleep(80);

        while (counter != i) {
            children[counter].style.backgroundColor = "green";
            counter++;
            await sleep(speed - 20);
        }

        key = array[i];
        j = i - 1;

        while (j >= 0 && array[j] > key) {
            array[j + 1] = array[j];
            j = j - 1;
        }

        array[j + 1] = key;

        $('#main-container').empty();
        showArray(array);
    }

    await sleep(50);
    for (var k = 0; k < children.length; k++) {
        children[k].style.backgroundColor = "green";
    } 

    $("#begin").css("opacity", "0.3");
    $("#begin").addClass("disabled");
    $("#newArray").css("opacity", "1");
    $("#newArray").removeClass("disabled");
}

async function mergeSort() {
    $("#algo-select").css("opacity", "0.3");
    $("#algo-select").addClass("disabled");
    $("#newArray").css("opacity", "0.3");
    $("#newArray").addClass("disabled");
    $("#begin").addClass("disabled");

    const children = document.querySelector("#main-container").children;
    var speed = getSpeed();
    var counter = 0;
    
    var sorted = array.slice(),
        n = sorted.length,
        buffer = new Array(n);

    for (var size = 1; size < n; size *= 2) {

        children[size].style.backgroundColor = "yellow";   // Beginning of each block we will search
        await sleep(speed);

        for (var leftStart = 0; leftStart < n; leftStart += 2 * size) {
            await sleep(speed);
            counter = 0;

            var left = leftStart,
            right = Math.min(left + size, n),
            leftLimit = right,
            rightLimit = Math.min(right + size, n),
            i = left;

            while (left < leftLimit && right < rightLimit) 
            {
    
                if (sorted[left] <= sorted[right]) {
                    buffer[i++] = sorted[left++];
                } else {
                    buffer[i++] = sorted[right++];
                }

            }

            while (left < leftLimit) {
                buffer[i++] = sorted[left++];
            }

            while (right < rightLimit) {
                buffer[i++] = sorted[right++];
            }

            while (counter < size) {
                children[counter].style.backgroundColor = "green";   // Beginning of each block we will search
                counter++;
                await sleep(speed);
            }

        } 

        var temp = sorted,
        sorted = buffer,
        buffer = temp;

        $('#main-container').empty();
        showArray(sorted);
    }

    await sleep(100);
    for (var i = 0; i < children.length; i++) {
        children[i].style.backgroundColor = "green";
    } 

    $("#begin").css("opacity", "0.3");
    $("#begin").addClass("disabled");
    $("#newArray").css("opacity", "1");
    $("#newArray").removeClass("disabled");

    return sorted;
}

function partition(low, high) {
    var pivot = array[high];
    var i = (low - 1);

    for (var j = low; j < high; j++) {
        if (array[j] <= pivot) {
            i++;

            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    var temp = array[i + 1];
    array[i + 1] = array[high];
    array[high] = temp;

    return (i + 1);
}

async function quickSort(low, high) {
    $("#algo-select").css("opacity", "0.3");
    $("#algo-select").addClass("disabled");
    $("#newArray").css("opacity", "0.3");
    $("#newArray").addClass("disabled");
    $("#begin").addClass("disabled");

    const children = document.querySelector("#main-container").children;
    var speed = getSpeed();
    await sleep(parseInt(speed) + 100);

    if (low < high) {
        var pivot = partition(low, high);

        children[low].style.backgroundColor = "yellow"; // Lower bounds
        children[high].style.backgroundColor = "red";   // Higher bounds
        children[pivot].style.backgroundColor = "green"; // What we're comparing
        await sleep(parseInt(speed) + 200);


        $('#main-container').empty();
        showArray(array);
        await sleep(parseInt(speed) + 200);

        await quickSort(low, pivot - 1);
        await quickSort(pivot + 1, high);
    }

    $("#begin").css("opacity", "0.3");
    $("#begin").addClass("disabled");
    $("#newArray").css("opacity", "1");
    $("#newArray").removeClass("disabled");

    if (is_array_sorted(array)) {
        await sleep(50);
        for (var i = 0; i < children.length; i++) {
            children[i].style.backgroundColor = "green";
        } 

        return true;
    }
}

