import { useEffect, useState } from 'react';

import { Brain, CheckCircle, XCircle, Award } from 'lucide-react';
import { quizzes as quizzesData } from '../data/quizzes';
import { quiz_questoes as questoesData } from '../data/quiz_questoes';

interface Quiz {
  id: string;
  titulo: string;
  descricao: string;
}

interface Questao {
  id: string;
  questao: string;
  opcoes: string[];
  resposta_correta: number;
  ordem: number;
}

export default function Quizzes() {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedQuiz, setSelectedQuiz] = useState<Quiz | null>(null);
  const [questoes, setQuestoes] = useState<Questao[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    loadQuizzes();
  }, []);

  function loadQuizzes() {
    setLoading(true);
    const ativos = quizzesData.filter((q) => q.ativo);
    setQuizzes(ativos);
    setLoading(false);
  }

  function startQuiz(quiz: Quiz) {
    setSelectedQuiz(quiz);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);

    const relacionadas = questoesData
      .filter((q) => q.quiz_id === quiz.id)
      .sort((a, b) => a.ordem - b.ordem);
    setQuestoes(relacionadas);
  }

  function handleAnswer(answerIndex: number) {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  }

  function nextQuestion() {
    if (currentQuestion < questoes.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  }

  function calculateScore() {
    let correct = 0;
    questoes.forEach((questao, index) => {
      if (selectedAnswers[index] === questao.resposta_correta) {
        correct++;
      }
    });
    return correct;
  }

  function resetQuiz() {
    setSelectedQuiz(null);
    setQuestoes([]);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
  }

  if (selectedQuiz && questoes.length > 0) {
    if (showResults) {
      const score = calculateScore();
      const percentage = (score / questoes.length) * 100;

      return (
        <div className="min-h-screen bg-gray-50 py-12">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="text-center">
                <Award className="w-20 h-20 mx-auto text-[#1f5014] mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Quiz Concluído!
                </h2>
                <div className="bg-green-50 rounded-lg p-6 mb-6">
                  <p className="text-5xl font-bold text-[#1f5014] mb-2">
                    {score}/{questoes.length}
                  </p>
                  <p className="text-gray-700">
                    Você acertou {percentage.toFixed(0)}% das questões
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  {questoes.map((questao, index) => {
                    const isCorrect = selectedAnswers[index] === questao.resposta_correta;
                    return (
                      <div
                        key={questao.id}
                        className={`p-4 rounded-lg border-2 ${
                          isCorrect
                            ? 'border-green-500 bg-green-50'
                            : 'border-red-500 bg-red-50'
                        }`}
                      >
                        <div className="flex items-start">
                          {isCorrect ? (
                            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                          ) : (
                            <XCircle className="w-5 h-5 text-red-600 mt-0.5 mr-2 flex-shrink-0" />
                          )}
                          <div className="flex-1 text-left">
                            <p className="font-medium text-gray-900 mb-1">
                              {index + 1}. {questao.questao}
                            </p>
                            {!isCorrect && (
                              <p className="text-sm text-gray-700">
                                Resposta correta: {questao.opcoes[questao.resposta_correta]}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <button
                  onClick={resetQuiz}
                  className="bg-[#1f5014] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2d7a1f] transition-colors"
                >
                  Fazer Outro Quiz
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    const questao = questoes[currentQuestion];

    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-900">{selectedQuiz.titulo}</h2>
                <span className="text-sm text-gray-600">
                  Questão {currentQuestion + 1} de {questoes.length}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-[#1f5014] h-2 rounded-full transition-all"
                  style={{ width: `${((currentQuestion + 1) / questoes.length) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">{questao.questao}</h3>
              <div className="space-y-3">
                {questao.opcoes.map((opcao, index) => (
                  <button
                    key={index}
                    onClick={() => handleAnswer(index)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      selectedAnswers[currentQuestion] === index
                        ? 'border-[#1f5014] bg-green-50'
                        : 'border-gray-200 hover:border-[#1f5014] hover:bg-gray-50'
                    }`}
                  >
                    <span className="font-medium">{String.fromCharCode(65 + index)}.</span>{' '}
                    {opcao}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <button
                onClick={resetQuiz}
                className="text-gray-600 font-semibold hover:text-gray-900 transition-colors"
              >
                Cancelar
              </button>
              <button
                onClick={nextQuestion}
                disabled={selectedAnswers[currentQuestion] === undefined}
                className="bg-[#1f5014] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2d7a1f] transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
              >
                {currentQuestion === questoes.length - 1 ? 'Finalizar' : 'Próxima'}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-[#1f5014] text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center mb-4">
            <Brain className="w-12 h-12" />
          </div>
          <h1 className="text-4xl font-bold text-center mb-4">Quizzes Bíblicos</h1>
          <p className="text-center text-green-100 max-w-2xl mx-auto">
            Teste seus conhecimentos bíblicos de forma interativa e divertida. Aprenda mais sobre
            a Palavra de Deus enquanto se desafia!
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#1f5014]"></div>
            <p className="mt-4 text-gray-600">Carregando quizzes...</p>
          </div>
        ) : quizzes.length === 0 ? (
          <div className="text-center py-12">
            <Brain className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <p className="text-gray-600">Nenhum quiz disponível no momento.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quizzes.map((quiz) => (
              <div
                key={quiz.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-[#1f5014] to-[#2d7a1f] p-6">
                  <Brain className="w-12 h-12 text-white mb-3" />
                  <h3 className="text-xl font-bold text-white mb-2">{quiz.titulo}</h3>
                </div>
                <div className="p-6">
                  <p className="text-gray-700 mb-6">{quiz.descricao}</p>
                  <button
                    onClick={() => startQuiz(quiz)}
                    className="w-full bg-[#1f5014] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d7a1f] transition-colors"
                  >
                    Iniciar Quiz
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
