
//document.getElementById("count-el").innerText = 5;

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el");

console.log(countEl)

let count = 0;

function increment(){


    console.log("the button was clicked")
    count += 1
    countEl.textContent = count;

}

function save(){

let countStr = count + " - "

saveEl.textContent += countStr;
countEl.textContent = 0;
count = 0;

    console.log("the button was clicked")
    

}
