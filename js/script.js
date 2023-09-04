
const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn-1');
const btn2 = document.getElementById('btn-2');
const reponse = document.querySelector('p');

questionContainer.style.borderRadius = "150px";

questionContainer.addEventListener('click', () => {
    questionContainer.classList.toggle("question-clicked");
});

btn1.addEventListener('click', () => {
    reponse.classList.add('show-reponse');
    reponse.style.background = "green";
});

btn2.addEventListener('click', () => {
    reponse.classList.add('show-reponse');
    reponse.style.background = "red";
});

// ------------------------------------------------------------

// Mouse Events

const mousemove = document.querySelector('.mousemove');

window.addEventListener('mousemove', (e) => {
    mousemove.style.left = e.pageX + "px";
    mousemove.style.top = e.pageY + "px";
});

window.addEventListener("mousedown", () => {
    mousemove.style.transform = "scale(2) translate(-25%, -50%)";
});

window.addEventListener("mouseup", () => {
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
    mousemove.style.border = "2px solid teal";
});

questionContainer.addEventListener('mouseenter', () => {
    questionContainer.style.background = "rgba(0,0,0,0.6)";
});

questionContainer.addEventListener('mouseout', () => {
    questionContainer.style.background = "pink";
});

reponse.addEventListener('mouseover', () => {
    reponse.style.transform = "rotate(2deg)";
});

// ------------------------------------------------------------

// KeyPress Event

const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById('key');


document.addEventListener('keypress', (e) => {
    key.textContent = e.key;

    if(e.key === "j") {
        keypressContainer.style.background = "pink";
    }
    else if(e.key === "h") {
        keypressContainer.style.background = "teal";
    }
    else {
        keypressContainer.style.background = "red";
    }
});


// ------------------------------------------------------------

// Scroll Event


const nav = document.querySelector('nav');

window.addEventListener('scroll', (e) => {
    console.log(window.scrollY);

    if(window.scrollY > 120) {
        nav.style.top = 0;
    } else {
        nav.style.top = "-50px";
    }
});

// ------------------------------------------------------------

// Form Events

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener('input', (e) => {
    pseudo = e.target.value;
    // console.log(pseudo);
});

select.addEventListener('input', (e) => {
    language = e.target.value;
});

form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(cgv.checked);

    if (cgv.checked) {
        document.querySelector('form > div').innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Langage préféré : ${language}</h4>
        `;
    } else {
        alert('Veuillez accepter les CGV')
    }
});

// ------------------------------------------------------------

// Load Event

window.addEventListener("load", () => {
    console.log("Document Chargé !");
});

// ------------------------------------------------------------

// ForEach

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
    box.addEventListener("click", (e) => {
        e.target.style.transform = "scale(0.7)";
    });
});

// Bubbling => fin (de base l'eventlistener est paramétré en mode Bubbling)

 document.body.addEventListener("click", () => {
     console.log("click 1 !");
 }, false);

// Usercapture (Il se lance avant le Bubbling)

 document.body.addEventListener("click", () => {
    console.log("click 2 !");
 }, true);



// https://gomakethings.com/what-is-that-third-argument-on-the-vanilla-js-addeventlistener-method-and-when-do-you-need-it/


// ------------------------------------------------------------

// Stop Propagation

questionContainer.addEventListener('click', (e)=> {
    alert("Test !");
    e.stopPropagation();
});

// RemoveEventListener