import { Link, useParams } from 'react-router-dom';
import { profiles } from '../data/profiles';

export default function PerfilPage() {
  const { id } = useParams();
  const profile = profiles[id];

  // Safe data access functions
  const safeMap = (array, fallback = []) => {
    return Array.isArray(array) ? array : fallback;
  };

  const safeObjectEntries = (obj, fallback = []) => {
    return obj && typeof obj === 'object' ? Object.entries(obj) : fallback;
  };

  const safeGet = (obj, path, fallback = '') => {
    try {
      return path.split('.').reduce((current, key) => current?.[key], obj) || fallback;
    } catch {
      return fallback;
    }
  };

  if (!profile) {
    return (
      <div className="profile-page">
        <div className="container" style={{ textAlign: 'center', padding: '100px 20px' }}>
          <h1>Perfil não encontrado</h1>
          <p>O perfil que você está procurando não existe.</p>
          <Link to="/">
            <button className="btn-primary" style={{ marginTop: '20px' }}>
              Voltar ao início
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    
    <div className="profile-page">
      <div className="profile-background">
        <div className="grid-overlay"></div>
        <div className="gradient-orb" style={{ background: profile.color || '#3b82f6' }}></div>
      </div>

      <div className="container">
        <Link to="/" className="back-link">
          ← Voltar ao início
        </Link>

        <div className="result-header">
          <div className="result-badge">Seu Resultado</div>
          <div className="profile-icon-large" style={{ background: profile.color || '#3b82f6' }}>
            {profile.icon || '⚙️'}
          </div>
          <h1 className="profile-title">{profile.title || 'Perfil Profissional'}</h1>
          <p className="profile-subtitle">{profile.subtitle || 'Desenvolvedor'}</p>
          
          <div className="welcome-section">
            <h2>{safeGet(profile, 'welcome.title', 'Parabéns!')}</h2>
            <p className="welcome-description">{safeGet(profile, 'welcome.description', 'Seu perfil foi identificado com sucesso.')}</p>
            <div className="superpower-box" style={{ borderColor: profile.color || '#3b82f6' }}>
              <strong>Seu superpoder:</strong> {safeGet(profile, 'welcome.superpower', 'Habilidade única em resolver problemas complexos.')}
            </div>
          </div>
        </div>

        <section className="profile-section">
          <h2 className="section-title">Este é o Seu Mundo</h2>
          
          <div className="content-card">
            <h3>O que você vai fazer no dia a dia:</h3>
            <ul className="tasks-list">
              {safeMap(profile.dailyTasks).map((task, index) => (
                <li key={index}><span className="bullet">•</span>{task}</li>
              ))}
            </ul>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-lg-6">
              <div className="content-card">
                <h3>Habilidades Técnicas Essenciais</h3>
                <div className="skills-breakdown">
                  {safeObjectEntries(profile.technicalSkills).map(([category, skills]) => (
                    <div key={category} className="skill-category">
                      <strong className="skill-category-title">
                        {category.charAt(0).toUpperCase() + category.slice(1)}:
                      </strong>
                      <p>
                        {Array.isArray(skills) 
                          ? skills.join(', ') 
                          : typeof skills === 'string' 
                            ? skills 
                            : JSON.stringify(skills)
                        }
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="content-card">
                <h3>Habilidades Comportamentais</h3>
                <ul className="characteristics-list">
                  {safeMap(profile.behavioralSkills).map((skill, index) => (
                    <li key={index}>
                      <span className="check-icon" style={{ color: profile.color || '#3b82f6' }}>✓</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="content-card mt-4">
            <h3>Por que essa área é incrível?</h3>
            <ul className="amazing-list">
              {safeMap(profile.whyAmazing).map((reason, index) => (
                <li key={index}><span className="star-icon">⭐</span>{reason}</li>
              ))}
            </ul>
          </div>
        </section>

<section className="profile-section cta-download">
  <h2 className="section-title">Sua Trilha de Imersão Básica (4 Semanas)</h2>
  <p>Baixe o guia completo com a trilha detalhada de estudos para os próximos 30 dias</p>
  
  {/* Botão de Download do PDF CORRIGIDO */}
  <a 
    href={profile.pdf} 
    download={`trilha-${id}.pdf`}
    className="btn-download" 
    style={{ 
      background: profile.color || '#3b82f6',
      textDecoration: 'none',
      display: 'inline-block'
    }}
    onClick={(e) => {
      // Verificar se o PDF existe
      if (!profile.pdf || profile.pdf === '#') {
        e.preventDefault();
        alert(`A trilha para ${profile.title} estará disponível em breve!`);
        return;
      }
      
      // Tracking opcional
      console.log(`Download iniciado: ${profile.title}`);
      console.log(`PDF: ${profile.pdf}`);
    }}
  >
    📥 Baixar Trilha Completa (PDF)
  </a>
  
  {/* Mensagem se PDF não estiver disponível */}
  {(!profile.pdf || profile.pdf === '#') && (
    <div style={{ 
      marginTop: '10px', 
      color: '#666', 
      fontSize: '0.9rem',
      fontStyle: 'italic'
    }}>
      ⏳ A trilha para {profile.title} estará disponível em breve!
    </div>
  )}
</section> 

        <section className="profile-section">
          <h2 className="section-title">Navegando pela Educação Formal</h2>
          
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="content-card">
                <h3>Graduações Recomendadas</h3>
                <ul className="education-list">
                  {safeMap(safeGet(profile, 'education.graduations')).map((grad, index) => (
                    <li key={index}>{grad}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="content-card">
                <h3>Certificações de Mercado</h3>
                <ul className="education-list">
                  {safeMap(safeGet(profile, 'education.certifications')).map((cert, index) => (
                    <li key={index}>{cert}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="content-card">
                <h3>Cursos Técnicos & Profissionalizantes</h3>
                <ul className="education-list">
                  {safeMap(safeGet(profile, 'education.courses')).map((course, index) => (
                    <li key={index}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="content-card">
                <h3>Bootcamps Intensivos</h3>
                <ul className="education-list">
                  {safeMap(safeGet(profile, 'education.bootcamps')).map((bootcamp, index) => (
                    <li key={index}>{bootcamp}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="profile-section">
          <h2 className="section-title">O Mercado e a Carreira</h2>
          
          <div className="content-card">
            <h3>Quem contrata profissionais dessa área:</h3>
            <div className="companies-grid">
              {safeMap(safeGet(profile, 'market.whoHires')).map((company, index) => (
                <div key={index} className="company-tag" style={{ borderColor: profile.color || '#3b82f6' }}>
                  {company}
                </div>
              ))}
            </div>
          </div>

          <div className="row g-4 mt-4">
            <div className="col-lg-4">
              <div className="content-card salary-card">
                <h3>Cargos de Entrada</h3>
                <ul className="career-list">
                  {safeMap(safeGet(profile, 'market.entryCareers')).map((career, index) => (
                    <li key={index}>{career}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-8">
              <div className="content-card salary-card">
                <h3>Faixa Salarial de Entrada (Brasil 2024)</h3>
                <div className="salary-ranges">
                  {safeObjectEntries(safeGet(profile, 'market.salary', {})).map(([level, range]) => (
                    <div key={level} className="salary-item">
                      <span className="salary-level">
                        {level === 'internship' ? 'Estágio' : 
                         level === 'junior' ? 'Júnior' : 
                         level === 'mid' ? 'Pleno (2-4 anos)' : 
                         level === 'senior' ? 'Sênior' : level}
                      </span>
                      <span className="salary-range" style={{ color: profile.color || '#3b82f6' }}>
                        {range}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="content-card mt-4">
            <h3>Como se preparar para a primeira vaga:</h3>
            <ol className="preparation-list">
              {safeMap(safeGet(profile, 'market.preparation')).map((prep, index) => (
                <li key={index}>{prep}</li>
              ))}
            </ol>
          </div>
        </section>

        <section className="profile-section">
          <h2 className="section-title">Recursos NEXA Recomendados</h2>
          
          <div className="row g-4">
            <div className="col-lg-6">
              <div className="content-card">
                <h3>📚 Livros Fundamentais</h3>
                <ul className="resources-list">
                  {safeMap(safeGet(profile, 'resources.books')).map((book, index) => (
                    <li key={index}>{book}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="content-card">
                <h3>🎥 Canais do YouTube</h3>
                <ul className="resources-list">
                  {safeMap(safeGet(profile, 'resources.youtube')).map((channel, index) => (
                    <li key={index}>{channel}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="content-card">
                <h3>🌐 Blogs e Fóruns</h3>
                <ul className="resources-list">
                  {safeMap(
                    safeGet(profile, 'resources.blogs') || 
                    safeGet(profile, 'resources.platforms') || 
                    safeGet(profile, 'resources.newsletters')
                  ).map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="content-card">
                <h3>🛠️ Ferramentas Essenciais</h3>
                <ul className="resources-list">
                  {safeMap(safeGet(profile, 'resources.tools')).map((tool, index) => (
                    <li key={index}>{tool}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="profile-section">
          <h2 className="section-title">Próximos Passos na Sua Jornada</h2>
          
          <div className="content-card">
            <h3>Após dominar o básico, explore:</h3>
            <ul className="next-steps-list">
              {safeMap(safeGet(profile, 'nextSteps.advanced')).map((step, index) => (
                <li key={index}><span className="arrow-icon">→</span>{step}</li>
              ))}
            </ul>
          </div>

          {safeGet(profile, 'nextSteps.specializations') && (
            <div className="content-card mt-4">
              <h3>Especializações Possíveis:</h3>
              <div className="specializations-grid">
                {safeMap(safeGet(profile, 'nextSteps.specializations')).map((spec, index) => (
                  <div key={index} className="specialization-card" style={{ borderLeftColor: profile.color || '#3b82f6' }}>
                    {spec}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="content-card mt-4">
            <h3>Comunidades para se conectar:</h3>
            <ul className="communities-list">
              {safeMap(safeGet(profile, 'nextSteps.communities')).map((community, index) => (
                <li key={index}><span className="community-icon">👥</span>{community}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="quote-section" style={{ borderColor: profile.color || '#3b82f6' }}>
          
          <p className="quote-text">{profile.quote || 'Sua jornada na tecnologia começa aqui. Aproveite cada passo!'}</p>
          <div className="quote-author">Equipe NEXA</div>
          <div className="quote-contact">www.nexatech.com | contato@nexatech.com</div>
        </section>

        <div className="cta-section">
          <h2>Pronto para começar sua jornada?</h2>
          <p>Compartilhe seu resultado e inspire outras pessoas a descobrirem seus perfis!</p>
          <div className="share-buttons">
            <button className="btn-share" style={{ background: profile.color || '#3b82f6' }}>
              Compartilhar no LinkedIn
            </button>
            <button className="btn-share" style={{ background: profile.color || '#3b82f6' }}>
              Compartilhar no Twitter
            </button>
            <Link to="/questionario">
              <button className="btn-share btn-secondary">
                Refazer o Teste
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
