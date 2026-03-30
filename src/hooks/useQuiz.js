import {useState} from "react"
import questions from "../data/questions"
function useQuiz(){
    const [screen,setScreen] = useState("start")
    const[question,setQuestion] = useState(0)
    const [score,setScore] = useState(0)
    const [answer,setAnswer] = useState(null)
    function startQuiz(){
        setScreen("quiz")
        setQuestion(0)
        setScore(0)
        setAnswer(null)
    }
    function selectAnswer(selectedOption){
        setAnswer(selectedOption)
        if(questions[question].answer === selectedOption){
            setScore(score+1)
        }

    }
    function nextQuestion(){
        if(question + 1<questions.length){
            setQuestion(question + 1)
            setAnswer(null)
        }
        else{
            setScreen("result")
        }
    }
    function restart(){
        setScreen("start")
        setQuestion(0)
        setScore(0)
        setAnswer(null)
    }
    return {
    screen,
    currentQuestion: questions[question], 
    currentIndex: question,               
    totalQuestions: questions.length,    
    score,
    selectedAnswer: answer,             
    startQuiz,
    selectAnswer,
    nextQuestion,
    restartQuiz: restart           
}
}
export default useQuiz