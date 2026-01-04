
import React, { useState } from 'react';
import { quizQuestions } from '../../data';

const Quiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionSelect = (idx: number) => {
    if (isAnswered) return;
    setSelectedOption(idx);
    setIsAnswered(true);
    if (idx === quizQuestions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    const nextQ = currentQuestion + 1;
    if (nextQ < quizQuestions.length) {
      setCurrentQuestion(nextQ);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  if (showResult) {
    return (
      <div className="max-w-xl mx-auto text-center py-20 bg-white p-12 rounded-[3rem] shadow-2xl border border-amber-100">
        <div className="text-6xl mb-6">🎯</div>
        <h2 className="text-4xl font-bold mb-4">Ujian Selesai!</h2>
        <p className="text-xl text-slate-600 mb-8">Anda berjaya menjawab <strong>{score}</strong> daripada {quizQuestions.length} soalan.</p>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={resetQuiz}
            className="bg-amber-600 text-white px-8 py-3 rounded-full font-bold shadow-lg"
          >
            Cuba Lagi
          </button>
        </div>
      </div>
    );
  }

  const q = quizQuestions[currentQuestion];

  return (
    <div className="max-w-2xl mx-auto py-12 animate-in fade-in zoom-in duration-500">
      <div className="mb-10 flex justify-between items-center text-sm font-bold text-amber-600 bg-amber-50 px-6 py-2 rounded-full">
        <span>SOALAN {currentQuestion + 1} DARI {quizQuestions.length}</span>
        <span>SKOR: {score}</span>
      </div>

      <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-slate-100 mb-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-10 leading-snug">
          {q.question}
        </h3>

        <div className="space-y-4">
          {q.options.map((option, idx) => {
            let bgColor = 'bg-slate-50 border-slate-200';
            if (isAnswered) {
              if (idx === q.correctAnswer) bgColor = 'bg-green-100 border-green-500 text-green-900';
              else if (selectedOption === idx) bgColor = 'bg-red-100 border-red-500 text-red-900';
              else bgColor = 'bg-slate-50 border-slate-200 opacity-50';
            } else if (selectedOption === idx) {
              bgColor = 'bg-amber-100 border-amber-500';
            }

            return (
              <button
                key={idx}
                onClick={() => handleOptionSelect(idx)}
                className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-200 font-medium ${bgColor} hover:border-amber-400 group flex items-center gap-4`}
              >
                <span className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center font-bold text-slate-400 group-hover:text-amber-500">
                  {String.fromCharCode(65 + idx)}
                </span>
                {option}
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="mt-8 p-6 bg-slate-50 rounded-2xl animate-in slide-in-from-top-4 duration-300">
            <h4 className="font-bold text-amber-900 mb-2">Penjelasan:</h4>
            <p className="text-sm text-slate-600 italic leading-relaxed">{q.explanation}</p>
            <button 
              onClick={handleNext}
              className="mt-6 w-full bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors"
            >
              {currentQuestion + 1 === quizQuestions.length ? 'Lihat Keputusan' : 'Soalan Seterusnya'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
