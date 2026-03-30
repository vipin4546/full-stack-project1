function QuestionCard({question, currentIndex, totalQuestions, onNext}){
    return(
        <div>
            <p>Question {currentIndex + 1} of {totalQuestions}</p>
            <h2>{question.question}</h2>
            {
               question.options.map((item,index)=>(
                <button key={item}>{item}</button>
               ))
            }
            <button onClick={onNext}>Next</button>
        </div>
    )
}
export default QuestionCard;