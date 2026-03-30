function ResultScreen({score, totalQuestions,onRestart}){
    return(<>
    <div>
        <h1>Quiz Complete</h1>
        <p>you score {score} out of {totalQuestions}</p>
        <button onClick={onRestart}>Restart Quiz</button>
    </div>
    </>)
}
export default ResultScreen;