import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { calcularPerfil } from '../utils/calcularPerfil';
import { questions } from '../data/questions';
import logo from '../assets/img/logo-nexa-transparente.png';

export default function QuestionarioPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleSelectOption = (option) => {
    setSelectedOption(option);
  };

  const handleNext = () => {
    if (selectedOption) {
      const newAnswers = { ...answers, [currentQuestion]: selectedOption };
      setAnswers(newAnswers);
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(newAnswers[currentQuestion + 1] || null);
      } else {
        const result = calcularPerfil(Object.values(newAnswers));
        navigate(`/perfil/${result.profileId}`);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[currentQuestion - 1] || null);
    }
  };

  const question = questions[currentQuestion];

  return (
    <div className="quiz-page">
      <div className="quiz-background">
        <div className="grid-overlay"></div>
      </div>

      <div className="quiz-header">
        <Link to="/" className="back-button">
          ← Voltar
        </Link>
        <div className="logo">
                      <img src={logo} alt="NEXA" className="logo-image" />             
                      <span className="logo-dot"></span>
                    </div>
      </div>

      <div className="quiz-container">
        <div className="progress-section">
          <div className="progress-info">
            <span className="progress-text">Pergunta {currentQuestion + 1} de {questions.length}</span>
            <span className="progress-percentage">{Math.round(progress)}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="question-card">
          <h2 className="question-text">{question.text}</h2>

          <div className="options-grid">
            {Object.entries(question.options).map(([key, value]) => (
              <button
                key={key}
                className={`option-button ${selectedOption === key ? 'selected' : ''}`}
                onClick={() => handleSelectOption(key)}
              >
                <span className="option-letter">{key}</span>
                <span className="option-text">{value}</span>
                <div className="option-check">✓</div>
              </button>
            ))}
          </div>
        </div>

        <div className="navigation-buttons">
          <button
            className="btn-nav btn-previous"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            ← Anterior
          </button>
          
          <button
            className="btn-nav btn-next"
            onClick={handleNext}
            disabled={!selectedOption}
          >
            {currentQuestion === questions.length - 1 ? 'Ver Resultado' : 'Próxima'} →
          </button>
        </div>
      </div>
    </div>
  );
}
