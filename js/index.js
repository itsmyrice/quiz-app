console.clear()


// Card and Bookmarks Functionality (index.html)


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

// Bookmarks


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



// -----------------------------------
// Card and Bookmarks Functionality (bookmarks.html)

const button4 = document.querySelector('[data-js="card-button4"]');
const answer4 = document.querySelector('[data-js="answer-hide4"]');
const show4 = document.querySelector('[data-js="show-answer4"]');

button4.addEventListener("click", () => {
    if (show4.textContent === "Show Answer") {
        show4.textContent = "Hide Answer";
        answer4.classList.remove("answer__hide4");
    }    
    else {
        show4.textContent = "Show Answer";
        answer4.classList.add("answer__hide4");
    }; 
});

const button5 = document.querySelector('[data-js="card-button5"]');
const answer5 = document.querySelector('[data-js="answer-hide5"]');
const show5 = document.querySelector('[data-js="show-answer5"]');

button5.addEventListener("click", () => {
    if (show5.textContent === "Show Answer") {
        show5.textContent = "Hide Answer";
        answer5.classList.remove("answer__hide5");
    }    
    else {
        show5.textContent = "Show Answer";
        answer5.classList.add("answer__hide5");
    }; 
});

const button6 = document.querySelector('[data-js="card-button6"]');
const answer6 = document.querySelector('[data-js="answer-hide6"]');
const show6 = document.querySelector('[data-js="show-answer6"]');

button6.addEventListener("click", () => {
    if (show6.textContent === "Show Answer") {
        show6.textContent = "Hide Answer";
        answer6.classList.remove("answer__hide6");
    }    
    else {
        show6.textContent = "Show Answer";
        answer6.classList.add("answer__hide6");
    }; 
});

// Bookmarks

const svgB4 = document.querySelector('[data-js="svg-bookmark4"]')
svgB4.addEventListener("click", () => {
    svgB4.classList.toggle("toggle__color")
});

const svgB5 = document.querySelector('[data-js="svg-bookmark5"]')
svgB5.addEventListener("click", () => {
    svgB5.classList.toggle("toggle__color")
});

const svgB6 = document.querySelector('[data-js="svg-bookmark6"]')
svgB6.addEventListener("click", () => {
    svgB6.classList.toggle("toggle__color")
});



// -----------------------------------
// Create a new card (form.html)

const form = document.querySelector('[data-js="form"]');
const questionForm = document.querySelector('[data-js="your-question"]');
const answerForm = document.querySelector('[data-js="your-answer"]');
const tagForm = document.querySelector('[data-js="your-tag"]');
const buttonForm = document.querySelector('[data-js="button-form"]');
const card1 = document.querySelector('[data-js="card-1"]');
const cardData = [];

// function showNewCard(newCard) {
//     card1.innerText = newCard;
// }
// buttonForm.addEventListener("submit", (e) => {
//     event.preventDefault();
// showNewCard("questionForm", "answerForm", "tagForm");
// });

// ------

form.addEventListener("submit", (event) => {
event.preventDefault();

// const newForm = document.createElement("section");
// newForm.innerText = questionF, answerF, tagF;
// newForm.classList.add("form__card");
// card1.append(form);

const questionF = questionForm.value;
const answerF = answerForm.value;
const tagF = tagForm.value;

cardData.push({ question: questionF, answer: answerF, tags: tagF });

const newCard = document.createElement("section");
const questionCard = document.createElement("h2");
const answerCard = document.createElement("p");
const tagCard = document.createElement("p");
const answerButton = document.createElement("button");

questionCard.innerText = questionFvalue;
answerCard.innerText = answerF.value;
tagCard.innerText = tagF.value;
tagCard.classList.add("tag");
answerF.style.display = "none";

answerButton.innerText = "Show Answer";

newCard.appendChild(questionCard);
newCard.appendChild(answerCard);
newCard.appendChild(tagCard);
newCard.appendChild(answerButton);

newCard.classList.add("card");

answerButton.addEventListener('click', () => {
    answerButton.style.display = answerButton.style.display === 'none' ? 'block' : 'none';
});

card1.appendChild(card);
});

// questionForm.value = "";
// answerForm.value = "";
// tagForm.value = "";

