function QuestionCard({question, currentIndex, totalQuestions, selectedAnswer, onSelect, onNext,timer}){
    function getOptionClass(item){
        if(selectedAnswer === null) return "bg-gray-700"
        if(item === question.answer) return "bg-green-600"
        if(item === selectedAnswer) return "bg-red-600"
        return "bg-gray-700"
    }
    return(
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="bg-gray-800 p-10 rounded-2xl w-full max-w-xl">
                <p className="text-purple-400 mb-4">Question {currentIndex + 1} of {totalQuestions}</p>
                <p className="text-yellow-400 text-2xl font-bold">{timer}s</p>
                <h2 className="text-2xl font-bold text-white mb-8">{question.question}</h2>
                <div className="flex flex-col gap-4">
                {
                   question.options.map((item,index)=>(
                    <button 
                        key={item}
                        onClick={() => onSelect(item)}
                        className={`${getOptionClass(item)} text-white py-3 px-6 rounded-xl text-left`}>
                        {item}
                    </button>
                   ))
                }
                </div>
                <button 
                    onClick={onNext}
                    className="mt-8 bg-purple-600 text-white px-8 py-3 rounded-xl hover:bg-purple-700 w-full">
                    Next
                </button>
            </div>
        </div> 
    )
}
export default QuestionCard;