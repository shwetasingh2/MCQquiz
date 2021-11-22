const quizques = [
    {
        question : "Q1: What is the full form of HTML? ",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hypertext Makeup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question : "Q2: What is the full form of CSS? ",
        a: "Cascading Style Sheet",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheets",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question : "Q3: What is the full form of HTTP? ",
        a: "HyperText Transfer Product",
        b: "HyperText Test Protocol",
        c: "Hey Transfer Product",
        d: "HyperText Transfer Protocol",
        ans: "ans4"
    },
    {
        question : "Q4: What is the full form of JS? ",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JavaScripting",
        ans: "ans1"
    },
    {
        question : "Q5: What is the full form of JDk? ",
        a: "Java Deploy Kit",
        b: "Java Development Kit",
        c: "Java Developmentenivorment Kit",
        d: "JS Development Kit",
        ans: "ans2"
    },
    {
        question : "Q6: Inside which HTML element do we put the JavaScript?",
        a: "<script>",
        b: "<javascript>",
        c: "<scripting>",
        d: "<js>",
        ans: "ans1"
    },
    {
        question : "Q7: Where is the correct place to insert a JavaScript? ",
        a: "The <body> section",
        b: "The <head> section ",
        c: "Both a and b",
        d: "None of the above",
        ans: "ans3"
    },
    {
        question : "Q8: What is the correct syntax for referring to an external script called xxx.js? ",
        a: "<script href = xxx.js>",
        b: "<script src = xxx.js>",
        c: "<script name = xxx.js>",
        d: "<script url = xxx.js>",
        ans: "ans2"
    },
    {
        question : "Q9: Wow do you write Hello World in an alert box?",
        a: "alertBox(Hello World)",
        b: "msgBox(Hello World)",
        c: "msg(Hello World)",
        d: "alert(Hello World)",
        ans: "ans4"
    },
    {
        question : "Q10: How do you create a function in JavaScript? ",
        a: "function:myFunction()",
        b: "function = myFunction()",
        c: "function myFunction()",
        d: "None of the above",
        ans: "ans3"
    }
];


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {

    const quetsionList = quizques[questionCount];

    question.innerText = quetsionList.question;
    
    option1.innerText = quetsionList.a;
    option2.innerText = quetsionList.b;
    option3.innerText = quetsionList.c;
    option4.innerText = quetsionList.d;

}

loadQuestion();

const getCheckAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
};


const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false );
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);


    if(checkedAnswer === quizques[questionCount].ans){
        score++;
    };
    questionCount++;

    deselectAll();

    if(questionCount < quizques.length){
        loadQuestion();
    }
    else{
        showScore.innerHTML = `
        <h3> You scored ${score}/${quizques.length} </h3>
        <button class = "btn" onclick = "location.reload()">Play Again</button>
        `;

        showScore.classList.remove('scoreArea');
    }
});