function StartScreen({ onStart }){
    return(
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
  <div className="bg-gray-800 p-10 rounded-2xl text-center">
    <h1 className="text-4xl font-bold text-white mb-4">Quiz Arena</h1>
    <p className="text-gray-400 mb-8">Quiz for Software Engineers</p>
    <button 
      onClick={onStart}
      className="bg-purple-600 text-white px-8 py-3 rounded-xl hover:bg-purple-700">
      Start Quiz
    </button>
  </div>
</div>
    )
}
export default StartScreen;