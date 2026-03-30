function StartScreen({ onStart }){
    return(
        <>
        <div>
            <h1>Quiz Arerna</h1>
            <p>quiz for Sofware engineers</p>
            <button onClick={onStart}>Start Quiz</button>
        </div>
        </>
    )
}
export default StartScreen;