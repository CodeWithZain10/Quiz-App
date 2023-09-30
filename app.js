let questions = [
  {
    que: "which of the following is a markup language",
    a: "HTML",
    b: "CSS",
    c: "JavaScript",
    d: "PHP",
    correct: "a",
  },
  {
    que: "what year was javascript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
  {
    que: "what does CSS stands for?",
    a: "Hypertext Markup Language",
    b: "Jason Object Notation",
    c: "Cascading Style Sheet",
    d: "Hyertext Preprocessor",
    correct: "c",
  },
];


let index = 0;
let queBox = document.getElementById('queBox');
let optionInputs = document.querySelectorAll('.options');
let total = questions.length;
let right = 0;
let wrong = 0;

let loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset()
    let data = questions[index]
    queBox.innerHTML = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
}

let submitQuiz = () => {
    let data = questions[index]
    let ans = getAnswer()
    if(ans === data.correct){
        right++
    } else {
        wrong++
    }
    index++
    loadQuestion()
}

let getAnswer = () => {
    let answer;
    optionInputs.forEach((input)=>{
        if(input.checked){
            answer = input.value
        }
    })
    return answer
}

let reset = () => {
    optionInputs.forEach((input)=>{
        input.checked = false
    })
}

let endQuiz = () => {
    document.getElementById('box').innerHTML = `
    <div style = "text-align : center">
    <h3>Thanks For Playing The Quiz</h3>
    <h3>${right} / ${total} are correct</h3>
    </div>
    `
}


loadQuestion()