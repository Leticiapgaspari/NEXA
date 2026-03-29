import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/img/logo-nexa-transparente.png';

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const profiles = [
    {
      icon: "⚙️",
      title: "Arquiteto de Sistemas",
      description: "Back-end Developer - cria a lógica por trás das aplicações",
      color: "#3b82f6"
    },
    {
      icon: "🎨",
      title: "Artesão da Experiência",
      description: "Front-end Developer - desenvolve interfaces bonitas e funcionais",
      color: "#8b5cf6"
    },
    {
      icon: "🛡️",
      title: "Guardião Cibernético",
      description: "Cybersecurity Analyst - protege sistemas e dados",
      color: "#ef4444"
    },
    {
      icon: "📊",
      title: "Cientista de Dados",
      description: "Data Scientist - extrai insights de grandes volumes de dados",
      color: "#10b981"
    },
    {
      icon: "🎯",
      title: "Estrategista de Produto",
      description: "Product Manager - lidera o desenvolvimento de produtos digitais",
      color: "#f59e0b"
    },
    {
      icon: "☁️",
      title: "Inovador em Nuvem",
      description: "Cloud/DevOps Engineer - constrói infraestrutura escalável",
      color: "#06b6d4"
    }
  ];

  return (
    <div className="landing-page">
      {/* HEADER */}
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container-fluid px-4">
          <div className="navbar-content">
            <div className="logo">
              <img src={logo} alt="NEXA" className="logo-image" />             
              <span className="logo-dot"></span>
            </div>
            
            <nav className="nav-menu d-none d-lg-flex">
              <a href="#home" className="nav-link">Home</a>
              <a href="#como-funciona" className="nav-link">Como Funciona</a>
              <a href="#perfis" className="nav-link">Perfis</a>
              <a href="#contato" className="nav-link">Contato</a>
            </nav>

            <Link to="/questionario">
              <button className="btn-cta">Começar Agora</button>
            </Link>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-background">
          <div className="grid-overlay"></div>
          <div className="gradient-orb orb-1"></div>
          <div className="gradient-orb orb-2"></div>
        </div>
        
        <div className="container">
          <div className="row align-items-center min-vh-100">
            <div className="col-lg-6">
              <div className="hero-content">
                <div className="badge-new">Novo teste inteligente</div>
                <h1 className="hero-title">
                  Descubra sua carreira em <span className="highlight">tecnologia</span>
                </h1>
                <p className="hero-subtitle">
                  O NEXA identifica seu perfil tech ideal através de um teste inteligente e te guia para o sucesso na área certa
                </p>
                
                <div className="cta-buttons">
                  <Link to="/questionario">
                    <button className="btn-primary-large">
                      Fazer Teste Gratuito
                      <span className="arrow">→</span>
                    </button>
                  </Link>
                  <button className="btn-secondary-large">
                    Ver Demonstração
                    <span className="play-icon">▶</span>
                  </button>
                </div>

                <div className="stats">
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <div className="stat-number">95%</div>
                    <div className="stat-label">Precisão nos resultados</div>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat-item">
                    <div className="stat-number">10min</div>
                    <div className="stat-label">Duração do teste</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 d-none d-lg-block">
              <div className="hero-visual">
                <div className="floating-card card-1">
                  <div className="card-icon">⚙️</div>
                  <div className="card-text">Backend</div>
                </div>
                <div className="floating-card card-2">
                  <div className="card-icon">🎨</div>
                  <div className="card-text">Frontend</div>
                </div>
                <div className="floating-card card-3">
                  <div className="card-icon">🛡️</div>
                  <div className="card-text">Security</div>
                </div>
                <div className="floating-card card-4">
                  <div className="card-icon">📊</div>
                  <div className="card-text">Data Science</div>
                </div>
                <div className="central-circle">
                  <div className="pulse-ring"></div>
                  <div className="pulse-ring ring-2"></div>
                  <span className="central-text">NEXA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="how-it-works" id="como-funciona">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Como o NEXA funciona</h2>
            <p className="section-subtitle">Três passos simples para descobrir seu futuro em tech</p>
          </div>

          <div className="steps-container">
            <div className="step-item">
              <div className="step-number">01</div>
              <div className="step-content">
                <h3>Teste Personalizado</h3>
                <p>Responda 10 perguntas simples sobre sua personalidade e interesses profissionais</p>
              </div>
              <div className="step-icon">📝</div>
            </div>

            <div className="step-connector"></div>

            <div className="step-item">
              <div className="step-number">02</div>
              <div className="step-content">
                <h3>Análise Inteligente</h3>
                <p>Nossa tecnologia identifica entre 6 perfis tech qual combina perfeitamente com você</p>
              </div>
              <div className="step-icon">🧠</div>
            </div>

            <div className="step-connector"></div>

            <div className="step-item">
              <div className="step-number">03</div>
              <div className="step-content">
                <h3>Guia Completo</h3>
                <p>Receba um PDF personalizado com trilha de estudos e oportunidades de carreira</p>
              </div>
              <div className="step-icon">📚</div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFIS DISPONÍVEIS */}
      <section className="profiles" id="perfis">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Conheça os perfis que você pode descobrir</h2>
            <p className="section-subtitle">Seis carreiras promissoras em tecnologia esperando por você</p>
          </div>

          <div className="row g-4">
            {profiles.map((profile, index) => (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="profile-card" style={{'--profile-color': profile.color}}>
                  <div className="profile-icon-wrapper">
                    <span className="profile-icon">{profile.icon}</span>
                  </div>
                  <h4 className="profile-title">{profile.title}</h4>
                  <p className="profile-description">{profile.description}</p>
                  <div className="profile-shine"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final-cta">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Pronto para descobrir seu futuro em tecnologia?</h2>
            <p className="cta-subtitle">Junte-se a milhares de pessoas que encontraram sua carreira ideal com o NEXA</p>
            
            <Link to="/questionario">
              <button className="btn-cta-large">
                Começar Agora - É Gratuito!
                <span className="sparkle">✨</span>
              </button>
            </Link>

            <div className="guarantee-badges">
              <div className="badge-item">
                <span className="badge-icon">✓</span>
                <span>100% gratuito</span>
              </div>
              <div className="badge-item">
                <span className="badge-icon">✓</span>
                <span>Resultado imediato</span>
              </div>
              <div className="badge-item">
                <span className="badge-icon">✓</span>
                <span>Sem cadastro necessário</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer" id="contato">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <div className="footer-brand">
                <div className="logo">
                  <img src={logo} alt="NEXA" className="logo-image-footer" />
                  <span className="logo-dot"></span>
                </div>
                <p className="footer-description">
                  Sua plataforma de descoberta de carreiras em tecnologia
                </p>
              </div>
            </div>

            <div className="col-md-4 mb-4 mb-md-0">
              <h6 className="footer-title">Links Rápidos</h6>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#como-funciona">Como Funciona</a></li>
                <li><a href="#perfis">Perfis</a></li>
                <li><Link to="/questionario">Fazer Teste</Link></li>
              </ul>
            </div>

            <div className="col-md-4">
              <h6 className="footer-title">Contato</h6>
              <p className="footer-contact">contato@nexatech.com</p>
              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">GitHub</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 NEXA. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
