import StartScreen from "./components/StartScreen/StartScreen";
import useQuiz from "./hooks/useQuiz";
import QuestionCard from "./components/QuestionCard/QuestionCard";
import ResultScreen from "./components/ResultScreen/ResultScreen"
function App() {
  const quiz = useQuiz();
  return (
    <div>{
      quiz.screen === "start" && (

        <StartScreen onStart={quiz.startQuiz}
         />
      )}
      {
        quiz.screen === "quiz" && (
          <QuestionCard
          question = {quiz.currentQuestion}
          currentIndex = {quiz.currentIndex}
          totalQuestions = {quiz.totalQuestions}
          selectedAnswer = {quiz.selectedAnswer}
          onSelect = {quiz.selectAnswer}
          onNext={quiz.nextQuestion}
          />
        )
      }
      {
        quiz.screen === "result" && (
          <ResultScreen score={quiz.score}
          totalQuestions = {quiz.totalQuestion}
          onRestart = {quiz.restartQuiz}/>
        )
      }
    </div>
  );
}
export default App;
