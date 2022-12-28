var questions = [
    {
      Question: "MS word is software of __",
      CorrectAns: "Microsoft",
      Options: ["Apple", "Android", "Google", "Microsoft"],
    },
    {
      Question: "Which is the word processing software?",
      CorrectAns: "MS word 2007",
      Options: ["Avast", "MS word 2007", "Google Chrome ", "Mozilla Firefox"],
    },
    {
      Question: "MS Word is __ software.    ",
      CorrectAns: "Word processing",
      Options: [
        "Web browser",
        "Word processing",
        "Operating system",
        "Antivirus",
      ],
    },
    {
      Question: "The valid format of MS Word is __",
      CorrectAns: ".doc",
      Options: [".exe", ".doc", ".png", " .jpeg"],
    },
    {
      Question: "What program is used in MS-Word to check the spelling?",
      CorrectAns: "Spelling & Grammar",
      Options: ["Research", "Word Count", "Set language", "Spelling & Grammar"],
    },
    {
      Question: "A word gets selected by clicking it",
      CorrectAns: "Twice",
      Options: [" Once", "Twice", "Three times", "Four times"],
    },
    {
      Question: "The center the selected text, the shortcut key is",
      CorrectAns: "Ctrl + E",
      Options: ["Ctrl + C", "Ctrl + E", " Ctrl + U", "Ctrl + O"],
    },
    {
      Question: "Which option is not available in Microsoft office button?",
      CorrectAns: "Bold",
      Options: ["Bold", "New", "Save", "Open"],
    },
    {
      Question:
        "___ is the change the way text warps around the selected object.",
      CorrectAns: "Text wrapping",
      Options: ["Text wrapping", "Indent", "Clipart", " Line spacing"],
    },
    {
      Question: "A major step before taking print of the document is",
      CorrectAns: "Both b and c",
      Options: [
        "To save the document",
        "To set paper setting",
        "To see print preview of the document",
        "Both b and c",
      ],
    },
  ];
var questionsNum = document.getElementById("questionsNum");
var question = document.getElementById("Question");
var ansParent = document.getElementById("ansParent");
var showMarks = document.getElementById("showMarks");
var showPercentage = document.getElementById("showPercentage");
var displayQuestion = document.getElementById("displayQuestion");
var indexNum = 0;
var marks = 0; 


function renderQuestion(){
    var currentQue = questions[indexNum];

    questionsNum.innerHTML =
    "Question #" + (indexNum + 1) + "/" + questions.length;
    question.innerHTML = currentQue.Question;
    ansParent.innerHTML = "";

    for(var i = 0; i < currentQue.Options.length; i++){
     ansParent.innerHTML += `<div class="col-md-6 py-2"><button onclick="checkQues('${currentQue.Options[i]}' , '${currentQue.CorrectAns}')" class="btn btn-primary w-100 rounded">${currentQue.Options[i]}</button></div>`;
    }
}
renderQuestion();
function nextQuestion(){
    indexNum++;
    renderQuestion();
}
function checkQues(a,b){
    if(a==b){
        marks++;
        showMarks.innerHTML = marks;
        showPercentage.innerHTML = (marks / questions.length)*100;
    }
    if(indexNum + 1 == questions.length){
        displayQuestion.style.display = "none";
    }else{
    nextQuestion();
    }
}