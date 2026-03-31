function ResultScreen({score, totalQuestions, onRestart}){
    const percentage = (score / totalQuestions) * 100
    
    return(
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="bg-gray-800 p-10 rounded-2xl text-center w-full max-w-xl">
            <h1 className="text-4xl font-bold text-white mb-4">Quiz Complete!</h1>
            <p className="text-gray-400 mb-2">You scored</p>
            <p className="text-6xl font-bold text-purple-400 mb-2">{score}/{totalQuestions}</p>
            <p className="text-2xl text-green-400 mb-8">{percentage}%</p>
            <button 
                onClick={onRestart}
                className="bg-purple-600 text-white px-8 py-3 rounded-xl hover:bg-purple-700 w-full">
                Restart Quiz
            </button>
        </div>
    </div>
    )
}
export default ResultScreen;