console.clear()

// Card Functionality
const button1 = document.querySelector('[data-js="card-button1"]');
console.log(button1);
const answer1 = document.querySelector('[data-js="answer-hide1"]');
console.log(answer1);
const show1 = document.querySelector('[data-js="show-answer1"]');

button1.addEventListener("click", () => {
    if (show1.textContent === "Show Answer") {
        show1.textContent = "Hide Answer";
        answer1.classList.remove("answer__hide1");
    }    
    else {
        show1.textContent = "Show Answer";
        answer1.classList.add("answer__hide1");
    }; 
});


const button2 = document.querySelector('[data-js="card-button2"]');
console.log(button2);
const answer2 = document.querySelector('[data-js="answer-hide2"]');
console.log(answer2);
const show2 = document.querySelector('[data-js="show-answer2"]');

button2.addEventListener("click", () => {
    if (show2.textContent === "Show Answer") {
        show2.textContent = "Hide Answer";
        answer2.classList.remove("answer__hide2");
    }    
    else {
        show2.textContent = "Show Answer";
        answer2.classList.add("answer__hide2");
    }; 
});


const button3 = document.querySelector('[data-js="card-button3"]');
console.log(button3);
const answer3 = document.querySelector('[data-js="answer-hide3"]');
console.log(answer3);
const show3 = document.querySelector('[data-js="show-answer3"]');

button3.addEventListener("click", () => {
    if (show3.textContent === "Show Answer") {
        show3.textContent = "Hide Answer";
        answer3.classList.remove("answer__hide3");
    }    
    else {
        show3.textContent = "Show Answer";
        answer3.classList.add("answer__hide3");
    }; 
});

// Bookmark Functionality

const svgB1 = document.querySelector('[data-js="svg-bookmark1"]')
svgB1.addEventListener("click", () => {
    svgB1.classList.toggle("toggle__color")
});

const svgB2 = document.querySelector('[data-js="svg-bookmark2"]')
svgB2.addEventListener("click", () => {
    svgB2.classList.toggle("toggle__color")
});

const svgB3 = document.querySelector('[data-js="svg-bookmark3"]')
svgB3.addEventListener("click", () => {
    svgB3.classList.toggle("toggle__color")
});

// Form Card

