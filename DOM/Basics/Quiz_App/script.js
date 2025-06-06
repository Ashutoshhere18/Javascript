let mcqlist= [
    {
      "question": "What is generally considered a key trait of human nature?",
      "options": ["Aggression", "Empathy", "Greed", "Jealousy"]
    },
    {
      "question": "Which philosopher believed humans are inherently good?",
      "options": ["Thomas Hobbes", "Jean-Jacques Rousseau", "Niccolò Machiavelli", "Sigmund Freud"]
    },
    {
      "question": "Which term best describes the human tendency to live in communities?",
      "options": ["Isolation", "Nomadism", "Social nature", "Egoism"]
    },
    {
      "question": "What emotion is considered a core part of human nature?",
      "options": ["Joy", "Apathy", "Disgust", "Confusion"]
    },
    {
      "question": "According to Freud, what are the three parts of the human psyche?",
      "options": ["Mind, Body, Spirit", "Id, Ego, Superego", "Heart, Brain, Soul", "Desire, Reason, Passion"]
    },
    {
      "question": "Which of the following is a common human moral value?",
      "options": ["Deceit", "Justice", "Pride", "Vanity"]
    },
    {
      "question": "Which behavior supports the idea that humans are cooperative by nature?",
      "options": ["Competition", "War", "Charity", "Isolation"]
    },
    {
      "question": "Which field of study focuses on human behavior and mental processes?",
      "options": ["Sociology", "Biology", "Psychology", "Anthropology"]
    },
    {
      "question": "Which concept refers to humans' ability to distinguish right from wrong?",
      "options": ["Morality", "Instinct", "Impulse", "Curiosity"]
    },
    {
      "question": "Which philosopher believed humans are naturally selfish and require a strong government?",
      "options": ["John Locke", "Aristotle", "Thomas Hobbes", "Socrates"]
    }
  ];
  let anslist = [
    "Empathy",
    "Jean-Jacques Rousseau",
    "Social nature",
    "Joy",
    "Id, Ego, Superego",
    "Justice",
    "Charity",
    "Psychology",
    "Morality",
    "Thomas Hobbes"
  ];


  const question=document.querySelector("#question");
  const optionslist=document.querySelectorAll(".option");
  const optBtn=document.querySelectorAll(".form-check-input");
  const btn=document.querySelector("#btn");
  const score=document.querySelector("#score");
  const clearBtn=document.querySelector("#clearbtn");
  let Currentindex=0;
  let count=0;
  function displayQuestion(index){
   question.textContent="Q"+(index+1)+"."+mcqlist[index].question;
   optionslist.forEach((option,i)=>{
    option.textContent=mcqlist[index].options[i];
   })
  }
let userAns=[];
  function checkquestion(index){
     optBtn.forEach((option,i)=>{
      if(option.checked){
        userAns.push(mcqlist[index].options[i]);
      }
   })
  }

 function CountScore(){
    for(let i=0;i<anslist.length;i++){
      if(userAns[i]==anslist[i]){
        count++;
      }
    }
      score.textContent="Score :"+ count+ "/10";
 }

btn.addEventListener('click',()=>{

  if(Currentindex<=mcqlist.length){
    checkquestion(Currentindex);
    Currentindex++;
  if(Currentindex<mcqlist.length){
  displayQuestion(Currentindex);
  }
    }

   if(Currentindex==mcqlist.length){
    CountScore();
       Currentindex++;
   }
 
})
displayQuestion(Currentindex);









