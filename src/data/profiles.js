import arquitetoPDF from '../assets/pdfs/trilha-arquiteto-sistemas.pdf';
import artesaoPDF from '../assets/pdfs/trilha-artesao-experiencia.pdf';
import guardiaoPDF from '../assets/pdfs/trilha-guardiao-cibernetico.pdf';
import cientistaPDF from '../assets/pdfs/trilha-cientista-dados.pdf';
import estrategistaPDF from '../assets/pdfs/trilha-estrategista-produto.pdf';
import inovadorPDF from '../assets/pdfs/trilha-inovador-nuvem.pdf';

export const profiles = {
  'arquiteto-sistemas': {
    title: 'O Arquiteto de Sistemas',
    subtitle: 'Back-End Developer',
    icon: '⚙️',
    color: '#3b82f6',
    pdf: arquitetoPDF,
    welcome: {
      title: 'Parabéns!',
      description: 'Sua análise no NEXA identificou que seu perfil tem uma forte conexão com o Arquiteto de Sistemas (Back-End Developer). Você é a mente estratégica por trás da magia digital! Enquanto todos veem interfaces bonitas, você constrói a engrenagem invisível que faz tudo funcionar - os bancos de dados robustos, a segurança impenetrável e a lógica poderosa que sustenta aplicações milhões de usuários.',
      superpower: 'Resolver problemas complexos e criar estruturas que são ao mesmo tempo eficientes e escaláveis.'
    },
    dailyTasks: [
      'Desenvolver APIs RESTful que servem de ponte entre front-end e bancos de dados',
      'Modelar e gerenciar bancos de dados relacionais e não-relacionais',
      'Implementar sistemas de autenticação e autorização',
      'Otimizar performance e escalabilidade de aplicações',
      'Garantir segurança contra vulnerabilidades comuns',
      'Integrar com serviços de terceiros e payment gateways'
    ],
    technicalSkills: {
      languages: ['Python', 'Java', 'C#', 'Node.js (JavaScript)', 'PHP'],
      databases: ['MySQL', 'PostgreSQL', 'MongoDB'],
      apis: ['REST', 'GraphQL', 'JSON'],
      tools: ['Git e GitHub'],
      concepts: ['Estruturas de Dados', 'Algoritmos', 'Arquitetura de Software']
    },
    behavioralSkills: [
      'Raciocínio lógico aguçado',
      'Atenção a detalhes',
      'Pensamento sistêmico',
      'Capacidade de resolver problemas complexos',
      'Trabalho em equipe'
    ],
    whyAmazing: [
      'Alta demanda no mercado (uma das mais requisitadas)',
      'Salários competitivos mesmo em nível júnior',
      'Oportunidade de trabalhar em projetos globais',
      'Aprendizado constante e desafios intelectuais',
      'Base para diversas outras especializações'
    ],
    education: {
      graduations: [
        'Ciência da Computação (formação mais completa teoricamente)',
        'Engenharia de Software (foco em desenvolvimento e processos)',
        'Sistemas de Informação (visão mais empresarial)',
        'Análise e Desenvolvimento de Sistemas (formação mais rápida e prática)'
      ],
      courses: [
        'SENAC/SENAI: Cursos técnicos em Desenvolvimento de Sistemas',
        'Alura: Carreira Back-End Python/Java',
        'DIO: Formações completas em desenvolvimento'
      ],
      certifications: [
        'AWS Certified Developer (fundamental para cloud)',
        'Microsoft Certified: Azure Developer Associate',
        'Scrum Foundation Professional Certificate'
      ],
      bootcamps: [
        'Trybe (Desenvolvimento Web Full Stack)',
        'Cubos Academy (foco em back-end)',
        'Rocketseat (especialização em Node.js)'
      ]
    },
    market: {
      whoHires: [
        'Startups de tecnologia',
        'Empresas de e-commerce',
        'Fintechs e bancos',
        'Empresas de SaaS (Software as Service)',
        'Consultorias de TI',
        'Grandes corporações de todos os setores'
      ],
      entryCareers: [
        'Desenvolvedor Back-End Júnior',
        'Estagiário em Desenvolvimento',
        'Desenvolvedor de Software Trainee'
      ],
      salary: {
        internship: 'R$ 1.500 - R$ 2.500',
        junior: 'R$ 3.000 - R$ 5.500',
        mid: 'R$ 6.000 - R$ 10.000'
      },
      preparation: [
        'GitHub Ativo: Mantenha seus projetos da trilha no GitHub',
        'LinkedIn: Crie um perfil técnico destacando suas habilidades',
        'Portfólio: Documente seus projetos com READMEs explicativos',
        'Networking: Participe de comunidades técnicas',
        'Estudos Contínuos: Mantenha-se atualizado com as tecnologias'
      ]
    },
    resources: {
      books: [
        '"Código Limpo" - Robert C. Martin',
        '"O Programador Pragmático" - Andrew Hunt',
        '"Domain-Driven Design" - Eric Evans'
      ],
      youtube: [
        'Rocketseat - Conceitos avançados de back-end',
        'Filipe Deschamps - Arquitetura e carreira',
        'TechWorld with Nana - DevOps e back-end moderno',
        'Código Fonte TV - Notícias e tendências'
      ],
      blogs: [
        'Dev.to - Comunidade de desenvolvedores',
        'Stack Overflow - Resolução de problemas',
        'BrazilJS - Conteúdo JavaScript/Node.js'
      ],
      tools: [
        'VS Code (editor)',
        'Git & GitHub (controle de versão)',
        'Postman (teste de APIs)',
        'Docker (containers)',
        'Terminal/Command Line'
      ]
    },
    nextSteps: {
      advanced: [
        'Frameworks: Django (Python), Spring Boot (Java), Express (Node.js)',
        'Bancos: PostgreSQL, MongoDB, Redis',
        'APIs: GraphQL, WebSockets',
        'Cloud: AWS, Azure, Google Cloud',
        'DevOps: Docker, Kubernetes, CI/CD'
      ],
      communities: [
        'Discord: He4rt Developers, Python Brasil',
        'Telegram: Grupos de Python, Java, Node.js',
        'Meetups: Eventos locais e online'
      ]
    },
    quote: 'A arquitetura que você constrói hoje será a base das inovações de amanhã. Comece simples, mas pense em grande.'
  },
  'artesao-experiencia': {
    title: 'O Artesão da Experiência',
    subtitle: 'Front-End Developer',
    icon: '🎨',
    color: '#8b5cf6',
    pdf: artesaoPDF,
    welcome: {
      title: 'Parabéns!',
      description: 'Sua análise no NEXA identificou que seu perfil tem uma forte conexão com o Artesão da Experiência (Front-End Developer). Você é o criador de pontes digitais! Enquanto os arquitetos constroem a lógica invisível, você traduz ideias complexas em interfaces intuitivas, belas e funcionais que milhões de pessoas usam todos os dias.',
      superpower: 'Combinar criatividade e técnica para criar experiências digitais que encantam e resolvem problemas reais.'
    },
    dailyTasks: [
      'Transformar designs e protótipos em código funcional',
      'Desenvolver interfaces responsivas que funcionam em qualquer dispositivo',
      'Implementar animações e microinterações que melhoram a usabilidade',
      'Otimizar performance e acessibilidade das aplicações',
      'Colaborar com designers e back-end developers',
      'Garantir consistência visual e de experiência do usuário'
    ],
    technicalSkills: {
      base: ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
      frameworks: ['React', 'Vue.js', 'Angular'],
      preprocessors: ['SASS/SCSS'],
      tools: ['Git e GitHub', 'NPM/Yarn', 'Webpack', 'Figma']
    },
    behavioralSkills: [
      'Senso estético apurado',
      'Atenção obsessiva a detalhes',
      'Empatia com o usuário final',
      'Criatividade na resolução de problemas',
      'Adaptabilidade a novas tendências'
    ],
    whyAmazing: [
      'Ver seu trabalho ganhar vida imediatamente',
      'Impacto direto na experiência do usuário',
      'Campo em constante evolução e inovação',
      'Oportunidades remotas e globais',
      'Combinação perfeita entre arte e tecnologia'
    ],
    education: {
      graduations: [
        'Sistemas de Informação (visão técnica + negócios)',
        'Design Digital (foco em UX/UI)',
        'Ciência da Computação (base sólida em programação)',
        'Análise e Desenvolvimento de Sistemas (formação rápida e prática)'
      ],
      courses: [
        'SENAC: Técnico em Web Design',
        'Alura: Carreira Front-End',
        'Origamid: Cursos especializados em UX/UI e Front-End'
      ],
      certifications: [
        'Google Mobile Web Specialist',
        'FreeCodeCamp Responsive Web Design',
        'Adobe Certified Expert (ACE) - XD'
      ],
      bootcamps: [
        'Rocketseat (especialização em React)',
        'Ironhack (Web Development)',
        'Le Wagon (Web Development)'
      ]
    },
    market: {
      whoHires: [
        'Agências de design e publicidade',
        'Startups de tecnologia',
        'E-commerces e marketplaces',
        'Empresas de produtos digitais',
        'Studios de criação digital',
        'Grandes empresas de todos os setores'
      ],
      entryCareers: [
        'Desenvolvedor Front-End Júnior',
        'Web Designer Developer',
        'Estagiário em Desenvolvimento Web',
        'UI Developer Trainee'
      ],
      salary: {
        internship: 'R$ 1.500 - R$ 2.800',
        junior: 'R$ 3.200 - R$ 5.800',
        mid: 'R$ 6.000 - R$ 11.000'
      },
      preparation: [
        'Portfólio Visual: Seu site é seu cartão de visitas',
        'GitHub Ativo: Mostre seu código e evolução',
        'LinkedIn Especializado: Destaque projetos e habilidades',
        'Network Criativo: Participe de comunidades de design e dev',
        'Case Studies: Documente o processo por trás de cada projeto'
      ]
    },
    resources: {
      books: [
        '"Não me faça pensar" - Steve Krug (usabilidade)',
        '"Design para a Internet" - Maurício Samy (CSS)',
        '"JavaScript Eloquente" - Marijn Haverbeke'
      ],
      youtube: [
        'Rocketseat - React e ecossistema moderno',
        'Kevin Powell - CSS avançado e dicas',
        'Filipe Deschamps - Carreira e conceitos',
        'DesignCourse - UI/UX + Front-End'
      ],
      blogs: [
        'CSS-Tricks - Referência em CSS',
        'Dev.to - Comunidade front-end',
        'Smashing Magazine - Design e desenvolvimento web',
        'Codepen - Inspiração e prototipagem'
      ],
      tools: [
        'VS Code (editor) + extensões',
        'Figma (design e prototipagem)',
        'Chrome DevTools (debugging)',
        'Git & GitHub (colaboração)',
        'NPM/Yarn (gerenciamento de pacotes)'
      ]
    },
    nextSteps: {
      advanced: [
        'Frameworks: React, Vue.js, Angular',
        'Pré-processadores: SASS, Less',
        'Build Tools: Webpack, Vite',
        'Testing: Jest, Cypress',
        'TypeScript (JavaScript tipado)',
        'PWA (Progressive Web Apps)'
      ],
      specializations: [
        'UI Developer (foco em interface)',
        'UX Engineer (ponte entre design e código)',
        'Front-End Architect (estruturas complexas)',
        'Mobile Developer (React Native)'
      ],
      communities: [
        'Discord: He4rt Developers, React Brasil',
        'Slack: Front-End Brasil',
        'Meetups: Eventos de UX e Front-End',
        'Twitter: Seguir profissionais da área'
      ]
    },
    quote: 'Cada linha de código que você escreve é uma oportunidade de melhorar o dia de alguém. Crie com propósito e paixão.'
  },
  'guardiao-cibernetico': {
    title: 'O Guardião Cibernético',
    subtitle: 'Cybersecurity Analyst',
    icon: '🛡️',
    color: '#ef4444',
    pdf: guardiaoPDF,
    welcome: {
      title: 'Parabéns!',
      description: 'Sua análise no NEXA identificou que seu perfil tem uma forte conexão com o Guardião Cibernético (Cybersecurity Analyst). Você é o herói digital do nosso tempo! Enquanto a tecnologia avança, você se posiciona na linha de frente, protegendo dados, sistemas e pessoas contra ameaças invisíveis que desafiam a segurança digital global.',
      superpower: 'Pensar como um hacker para antecipar vulnerabilidades e construir defesas impenetráveis.'
    },
    dailyTasks: [
      'Monitorar redes e sistemas em busca de atividades suspeitas',
      'Investigar e responder a incidentes de segurança',
      'Realizar testes de vulnerabilidade e pentesting',
      'Implementar e gerenciar firewalls, SIEM e outras ferramentas de segurança',
      'Desenvolver políticas e procedimentos de segurança',
      'Educar colaboradores sobre boas práticas de segurança'
    ],
    technicalSkills: {
      networks: ['TCP/IP', 'DNS', 'Firewalls', 'VPNs'],
      systems: ['Linux', 'Windows Server'],
      tools: ['Wireshark', 'Nmap', 'Metasploit', 'SIEM'],
      concepts: ['Criptografia', 'Ethical Hacking', 'Forense Digital'],
      programming: ['Python', 'Bash', 'PowerShell']
    },
    behavioralSkills: [
      'Pensamento crítico e analítico',
      'Curiosidade técnica incessante',
      'Atenção a detalhes microscópicos',
      'Ética sólida e responsabilidade',
      'Capacidade de trabalhar sob pressão'
    ],
    whyAmazing: [
      'Defende organizações e pessoas contra crimes digitais',
      'Campo em crescimento exponencial com zero desemprego',
      'Salários altamente competitivos',
      'Aprendizado constante em um ambiente dinâmico',
      'Sensação de propósito em proteger o mundo digital'
    ],
    education: {
      graduations: [
        'Ciência da Computação',
        'Segurança da Informação',
        'Redes de Computadores',
        'Sistemas de Informação'
      ],
      courses: [
        'SENAC: Técnico em Segurança da Informação',
        'Alura: Carreira Cybersecurity',
        'Cybrary: Cursos e laboratórios'
      ],
      certifications: [
        'CompTIA Security+',
        'CEH (Certified Ethical Hacker)',
        'CISSP',
        'OSCP'
      ],
      bootcamps: [
        'Bootcamp Cybersecurity',
        'Hack The Box Academy',
        'TryHackMe Learning Paths'
      ]
    },
    market: {
      whoHires: [
        'Bancos e instituições financeiras',
        'Empresas de tecnologia e cloud',
        'Consultorias de segurança',
        'Governo e órgãos públicos',
        'Grandes corporações de todos os setores',
        'Startups de segurança'
      ],
      entryCareers: [
        'Analista de SOC (Security Operations Center)',
        'Estagiário em Cybersecurity',
        'Analista de Vulnerabilidade Júnior',
        'Security Monitor'
      ],
      salary: {
        internship: 'R$ 2.000 - R$ 3.500',
        junior: 'R$ 4.500 - R$ 7.500',
        mid: 'R$ 8.000 - R$ 14.000'
      },
      preparation: [
        'Laboratório Prático: Mantenha um home lab para experimentos',
        'Certificações: Comece com Security+ ou equivalente',
        'GitHub Técnico: Documente projetos e análises',
        'Network Especializado: Participe de comunidades de segurança',
        'Mentalidade Analítica: Desenvolva método de investigação'
      ]
    },
    resources: {
      books: [
        '"The Web Application Hacker\'s Handbook" - Dafydd Stuttard',
        '"Practical Malware Analysis" - Michael Sikorski',
        '"Blue Team Handbook" - Don Murdoch'
      ],
      youtube: [
        'NetworkChuck - Redes e segurança',
        'John Hammond - Cybersecurity e CTFs',
        'The Cyber Mentor - Ethical hacking',
        'IppSec - Walkthroughs de máquinas HackTheBox'
      ],
      platforms: [
        'TryHackMe - Aprendizado guiado',
        'HackTheBox - Desafios avançados',
        'OverTheWire - Wargames',
        'Cybrary - Cursos e laboratórios'
      ],
      tools: [
        'Kali Linux (distro de segurança)',
        'Wireshark (análise de tráfego)',
        'Nmap (varredura de redes)',
        'Metasploit (exploitation framework)',
        'Burp Suite (segurança web)'
      ]
    },
    nextSteps: {
      specializations: [
        'Security Operations Center (SOC) - Monitoramento',
        'Penetration Testing - Testes ofensivos',
        'Forensics Digital - Investigação',
        'Security Engineering - Arquitetura',
        'Threat Intelligence - Análise de ameaças'
      ],
      advanced: [
        'Scripting: Python para automação',
        'Cloud Security: AWS, Azure, GCP',
        'SIEM: Splunk, Elastic Stack',
        'CTF: Capture The Flag competitions'
      ],
      communities: [
        'Discord: HackerZone BR, Cybersecurity Brasil',
        'Meetups: OWASP Chapters, BSides eventos',
        'Conferências: RoadSec, H2HC',
        'Telegram: Grupos de CTF e estudos'
      ]
    },
    quote: 'Na segurança cibernética, cada dia é uma nova batalha entre a criatividade dos atacantes e a resiliência dos defensores. De qual lado você está?'
  },
  'cientista-dados': {
    title: 'O Cientista de Dados',
    subtitle: 'Data Scientist',
    icon: '📊',
    color: '#10b981',
    pdf: cientistaPDF,
    welcome: {
      title: 'Parabéns!',
      description: 'Sua análise no NEXA identificou que seu perfil tem uma forte conexão com o Cientista de Dados (Data Scientist). Você é o detetive do mundo moderno! Enquanto empresas coletam montanhas de informações, você tem o poder de transformar dados brutos em insights valiosos, encontrando padrões escondidos e contando histórias que guiam decisões estratégicas.',
      superpower: 'Combinar estatística, programação e conhecimento de negócio para extrair significado do caos de dados.'
    },
    dailyTasks: [
      'Coletar, limpar e preparar grandes volumes de dados',
      'Analisar dados para identificar tendências e padrões',
      'Desenvolver modelos de machine learning e IA',
      'Criar visualizações e dashboards para comunicar insights',
      'Colaborar com áreas de negócio para resolver problemas complexos',
      'Implementar soluções baseadas em dados em produção'
    ],
    technicalSkills: {
      programming: ['Python (Pandas, NumPy, Scikit-learn)', 'R'],
      databases: ['SQL', 'NoSQL'],
      statistics: ['Estatística descritiva e inferencial'],
      ml: ['Modelos supervisionados e não-supervisionados'],
      visualization: ['Matplotlib', 'Seaborn', 'Power BI', 'Tableau']
    },
    behavioralSkills: [
      'Curiosidade científica insaciável',
      'Pensamento analítico e crítico',
      'Criatividade na resolução de problemas',
      'Comunicação clara de insights complexos',
      'Mentalidade orientada a negócios'
    ],
    whyAmazing: [
      'Transforma dados em decisões que impactam milhões',
      'Campo multidisciplinar em constante evolução',
      'Alta demanda em todas as indústrias',
      'Salários entre os mais altos em tecnologia',
      'Oportunidade de trabalhar em problemas desafiadores'
    ],
    education: {
      graduations: [
        'Ciência da Computação (base técnica sólida)',
        'Estatística (fundamento matemático)',
        'Matemática/Matemática Aplicada (rigor analítico)',
        'Engenharia (resolução de problemas complexos)',
        'Economia (visão de negócios + quantitativa)'
      ],
      postgraduate: [
        'Mestrado em Ciência de Dados',
        'MBA em Business Analytics',
        'Especialização em Machine Learning',
        'Pós em Inteligência Artificial'
      ],
      certifications: [
        'Google Data Analytics Professional Certificate',
        'IBM Data Science Professional Certificate',
        'Microsoft Certified: Azure Data Scientist Associate',
        'AWS Certified Data Analytics'
      ],
      bootcamps: [
        'Data Science Academy (Brasil)',
        'Ironhack Data Analytics Bootcamp',
        'Springboard Data Science Career Track'
      ]
    },
    market: {
      whoHires: [
        'Empresas de tecnologia (Google, Meta, Amazon)',
        'Fintechs e instituições financeiras',
        'Varejo e e-commerce',
        'Saúde e biotecnologia',
        'Consultorias estratégicas',
        'Indústrias de todos os setores'
      ],
      entryCareers: [
        'Analista de Dados Júnior',
        'Cientista de Dados Trainee',
        'Estagiário em Data Science',
        'Business Intelligence Analyst'
      ],
      salary: {
        internship: 'R$ 2.500 - R$ 4.000',
        junior: 'R$ 5.000 - R$ 8.000',
        mid: 'R$ 9.000 - R$ 15.000'
      },
      preparation: [
        'Portfólio de Projetos: Kaggle e GitHub com análises completas',
        'LinkedIn Especializado: Destaque projetos e habilidades técnicas',
        'Network na Comunidade: Participe de meetups e conferências',
        'Cases Práticos: Resolva problemas reais de negócio',
        'Comunicação Técnica: Aprenda a explicar insights para não-técnicos'
      ]
    },
    resources: {
      books: [
        '"Python para Análise de Dados" - Wes McKinney',
        '"The Elements of Statistical Learning" - Hastie, Tibshirani, Friedman',
        '"Storytelling com Dados" - Cole Nussbaumer Knaflic'
      ],
      youtube: [
        'Ken Jee - Carreira e projetos',
        'Data Science Academy - Conteúdo em português',
        'StatQuest with Josh Starmer - Estatística e ML',
        'Corey Schafer - Python e programação'
      ],
      platforms: [
        'Kaggle - Competições e datasets',
        'StrataScratch - Problemas de SQL e Python',
        'DataCamp - Cursos interativos',
        'Google Colab - Notebooks na nuvem'
      ],
      tools: [
        'Jupyter Notebook (análise exploratória)',
        'Python (Pandas, Scikit-learn, Matplotlib)',
        'SQL (banco de dados)',
        'Git (controle de versão)',
        'Tableau/Power BI (visualização)'
      ]
    },
    nextSteps: {
      specializations: [
        'Machine Learning Engineer (modelos em produção)',
        'Data Engineer (infraestrutura de dados)',
        'Business Intelligence (dashboards e relatórios)',
        'Research Scientist (IA e pesquisa avançada)'
      ],
      advanced: [
        'Deep Learning (redes neurais)',
        'Big Data (Spark, Hadoop)',
        'MLOps (machine learning em produção)',
        'Cloud Computing (AWS, GCP, Azure)'
      ],
      communities: [
        'Discord: Data Science Brasil, Python Brasil',
        'Meetups: Data Science meetups locais',
        'Conferências: AI Conference, Data Science Congress',
        'Slack: Data Science Community'
      ]
    },
    quote: 'Os dados são a nova matéria-prima do século XXI. Como cientista de dados, você é o alquimista que transforma informações brutas em ouro estratégico.'
  },
  'estrategista-produto': {
    title: 'O Estrategista de Produto',
    subtitle: 'Product Manager',
    icon: '🎯',
    color: '#f59e0b',
    pdf: estrategistaPDF,
    welcome: {
      title: 'Parabéns!',
      description: 'Sua análise no NEXA identificou que seu perfil tem uma forte conexão com o Estrategista de Produto (Product Manager). Você é o maestro da orquestra digital! Enquanto desenvolvedores codificam e designers criam, você é o ponto central que conecta tecnologia, negócio e usuário, garantindo que o produto certo seja construído da maneira certa.',
      superpower: 'Traduzir necessidades humanas complexas em produtos digitais que resolvem problemas reais e geram valor.'
    },
    dailyTasks: [
      'Definir a visão e estratégia do produto',
      'Priorizar funcionalidades no backlog do produto',
      'Colaborar com UX/UI, desenvolvimento e marketing',
      'Realizar pesquisas com usuários e análise de mercado',
      'Definir métricas de sucesso e acompanhar KPIs',
      'Tomar decisões baseadas em dados e feedback'
    ],
    technicalSkills: {
      methodologies: ['Scrum', 'Kanban'],
      prototyping: ['Figma', 'Miro', 'Balsamiq'],
      analytics: ['Google Analytics', 'SQL básico', 'Mixpanel'],
      tools: ['Jira', 'Trello', 'Notion', 'Productboard'],
      concepts: ['OKRs', 'Roadmapping', 'User Stories']
    },
    behavioralSkills: [
      'Empatia com usuários e stakeholders',
      'Comunicação clara e persuasiva',
      'Pensamento estratégico e analítico',
      'Liderança sem autoridade formal',
      'Tomada de decisão com dados limitados'
    ],
    whyAmazing: [
      'Impacto direto no sucesso do produto e da empresa',
      'Visão 360° do negócio (tecnologia, design, marketing, vendas)',
      'Oportunidade de trabalhar com times multidisciplinares',
      'Campo em alta demanda com excelente remuneração',
      'Poder de transformar ideias em produtos reais'
    ],
    education: {
      graduations: [
        'Administração (visão de negócios)',
        'Engenharia (pensamento sistêmico)',
        'Computação/Sistemas (base técnica)',
        'Design (empatia com usuário)',
        'Psicologia (comportamento do consumidor)'
      ],
      postgraduate: [
        'MBA em Product Management',
        'Pós em Gestão de Produtos Digitais',
        'Master em Inovação e Empreendedorismo',
        'Certificação em Marketing Digital'
      ],
      certifications: [
        'Pragmatic Institute Certification',
        'Scrum Product Owner Certification (PSPO)',
        'Google Analytics Individual Qualification',
        'AWS Cloud Practitioner'
      ],
      courses: [
        'Product Management - Coursera',
        'Product Leader - Tera',
        'Product Management - Alura'
      ]
    },
    market: {
      whoHires: [
        'Startups em fase de scale-up',
        'Tech companies estabelecidas',
        'Empresas de produtos digitais B2B e B2C',
        'Consultorias de inovação',
        'Grandes corporações em transformação digital'
      ],
      entryCareers: [
        'Product Owner',
        'Associate Product Manager',
        'Product Analyst',
        'Junior Product Manager',
        'Business Analyst com foco em produto'
      ],
      salary: {
        junior: 'R$ 6.000 - R$ 10.000',
        mid: 'R$ 11.000 - R$ 18.000',
        senior: 'R$ 19.000 - R$ 30.000+'
      },
      preparation: [
        'Case Studies: Documente análises de produtos existentes',
        'Network Estratégico: Conecte-se com PMs no LinkedIn',
        'Portfólio de Produto: Mostre seus PRDs e análises',
        'Conhecimento do Ecossistema: Entenda o mercado tech local',
        'Experiência Lateral: Comece como BA, PO ou em áreas relacionadas'
      ]
    },
    resources: {
      books: [
        '"Inspired" - Marty Cagan (bíblia do PM)',
        '"The Lean Product Playbook" - Dan Olsen',
        '"Sprint" - Jake Knapp (Google Ventures)',
        '"Hooked" - Nir Eyal (comportamento do usuário)'
      ],
      youtube: [
        'Product School - Carreira e conceitos',
        'Lenny\'s Podcast - Entrevistas com PMs',
        'Product Talk - Estratégia e métricas',
        'The Product Podcast'
      ],
      newsletters: [
        'Lenny\'s Newsletter - Referência absoluta',
        'Stratechery by Ben Thompson - Análise estratégica',
        'Mind the Product - Comunidade global',
        'Product Coalition - Artigos da comunidade'
      ],
      tools: [
        'Figma/Miro (prototipagem e colaboração)',
        'Jira/Asana (gestão de tarefas)',
        'Productboard (roadmapping)',
        'Amplitude/Mixpanel (análise de produto)',
        'Notion/Confluence (documentação)'
      ]
    },
    nextSteps: {
      specializations: [
        'Growth PM (foco em aquisição e retenção)',
        'Platform PM (APIs e infraestrutura)',
        'AI/ML PM (produtos com inteligência artificial)',
        'B2B vs B2C PM (diferentes modelos de negócio)'
      ],
      advanced: [
        'Data Analytics (SQL, métricas, experimentação)',
        'UX Research (pesquisa qualitativa)',
        'Go-to-Market Strategy (lançamento de produtos)',
        'Stakeholder Management (gestão de expectativas)'
      ],
      communities: [
        'LinkedIn: Grupos de Product Management Brasil',
        'Slack: Product Management Brasil',
        'Meetups: ProductTank chapters',
        'Eventos: Product Leadership, Productized'
      ],
      transition: [
        'De Desenvolvedor: Forte em tecnologia, precisa desenvolver visão de negócio',
        'De Design: Excelente em UX, precisa desenvolver análise de dados',
        'De Marketing: Forte em usuário e mercado, precisa desenvolver conhecimento técnico'
      ]
    },
    quote: 'Um grande product manager não é um chefe, é um facilitador. Não diz "como" construir, mas "o que" construir e "porque" vale a pena.'
  },
  'inovador-nuvem': {
    title: 'O Inovador em Nuvem',
    subtitle: 'Cloud/DevOps Engineer',
    icon: '☁️',
    color: '#06b6d4',
    pdf: inovadorPDF,
    welcome: {
      title: 'Parabéns!',
      description: 'Sua análise no NEXA identificou que seu perfil tem uma forte conexão com o Inovador em Nuvem (Cloud/DevOps Engineer). Você é o arquiteto da infraestrutura digital moderna! Enquanto times desenvolvem aplicações incríveis, você constrói as estradas, usinas e sistemas de distribuição que tornam tudo possível em escala global.',
      superpower: 'Automatizar processos complexos e construir infraestruturas que são ao mesmo tempo resilientes, escaláveis e eficientes.'
    },
    dailyTasks: [
      'Projetar e implementar infraestrutura na nuvem (AWS, Azure, GCP)',
      'Automatizar deploy e scaling com ferramentas CI/CD',
      'Gerenciar containers com Docker e Kubernetes',
      'Implementar monitoramento e alertas para sistemas',
      'Garantir segurança e conformidade da infraestrutura',
      'Otimizar custos e performance de ambientes cloud'
    ],
    technicalSkills: {
      cloud: ['AWS', 'Azure', 'Google Cloud Platform'],
      containers: ['Docker', 'Kubernetes', 'ECS'],
      iac: ['Terraform', 'CloudFormation'],
      cicd: ['Jenkins', 'GitLab CI', 'GitHub Actions'],
      scripting: ['Python', 'Bash', 'PowerShell'],
      systems: ['Linux', 'redes', 'segurança']
    },
    behavioralSkills: [
      'Pensamento sistêmico e arquitetural',
      'Mentalidade de automação',
      'Resolução de problemas complexos',
      'Adaptabilidade a novas tecnologias',
      'Trabalho sob pressão'
    ],
    whyAmazing: [
      'Construir infraestrutura que serve milhões de usuários',
      'Campo em crescimento explosivo com alta demanda',
      'Salários entre os mais altos em TI',
      'Trabalho com tecnologias de ponta',
      'Impacto direto na eficiência e resiliência de negócios'
    ],
    education: {
      graduations: [
        'Ciência da Computação (base sólida)',
        'Engenharia de Computação (hardware + software)',
        'Sistemas de Informação (visão empresarial)',
        'Redes de Computadores (especialização em infraestrutura)'
      ],
      courses: [
        'SENAC: Técnico em Redes de Computadores',
        'AWS Academy (cursos oficial AWS)',
        'Linux Foundation Training'
      ],
      certifications: [
        'AWS Cloud Practitioner (fundamental)',
        'AWS Solutions Architect Associate',
        'Kubernetes Certification (CKA)',
        'Terraform Associate',
        'Microsoft Certified: Azure Administrator'
      ],
      bootcamps: [
        'LinuxTips (formação em Cloud)',
        'Alura (Carreira DevOps)',
        '4Linux (cursos especializados)'
      ]
    },
    market: {
      whoHires: [
        'Empresas de tecnologia em scaling',
        'Consultorias cloud e transformação digital',
        'Fintechs e instituições financeiras',
        'Startups de alto crescimento',
        'Grandes corporações migrando para cloud'
      ],
      entryCareers: [
        'Cloud Support Engineer',
        'Junior DevOps Engineer',
        'Systems Administrator',
        'Site Reliability Engineer (SRE) Júnior'
      ],
      salary: {
        junior: 'R$ 5.000 - R$ 8.000',
        mid: 'R$ 9.000 - R$ 15.000',
        senior: 'R$ 16.000 - R$ 25.000+'
      },
      preparation: [
        'Laboratório Cloud: Use free tiers para experimentar',
        'GitHub Técnico: Mostre scripts e projetos de automação',
        'Certificações: Comece com Cloud Practitioner',
        'Projetos Práticos: Documente implementações reais',
        'Network Especializado: Participe de comunidades cloud'
      ]
    },
    resources: {
      books: [
        '"The Phoenix Project" - Gene Kim (cultura DevOps)',
        '"Cloud Native DevOps" - John Arundel',
        '"Terraform: Up and Running" - Yevgeniy Brikman',
        '"The DevOps Handbook" - Gene Kim'
      ],
      youtube: [
        'TechWorld with Nana - DevOps e containers',
        'FreeCodeCamp DevOps - Cursos completos',
        'AWS - Conteúdo oficial AWS',
        'Kubernetes - Comunidade Kubernetes'
      ],
      platforms: [
        'KodeKloud - Labs interativos',
        'Qwiklabs - Labs AWS/GCP',
        'Katacoda - Ambientes interativos',
        'HashiCorp Learn - Terraform, Vault, Consul'
      ],
      tools: [
        'Terraform (infraestrutura como código)',
        'Docker (containers)',
        'Kubernetes (orquestração)',
        'Jenkins/GitLab CI (CI/CD)',
        'Prometheus/Grafana (monitoramento)',
        'Ansible (automação)'
      ]
    },
    nextSteps: {
      specializations: [
        'Cloud Security Engineer (segurança especializada)',
        'Kubernetes Administrator (especialista em K8s)',
        'Multi-Cloud Architect (AWS + Azure + GCP)',
        'FinOps Practitioner (otimização de custos)'
      ],
      advanced: [
        'Service Mesh (Istio, Linkerd)',
        'GitOps (ArgoCD, Flux)',
        'Observability (logs, métricas, traces)',
        'Serverless (Lambda, Functions)',
        'Database Management (RDS, DynamoDB)'
      ],
      projects: [
        'Pipeline CI/CD completo',
        'Cluster Kubernetes auto-gerenciado',
        'Infraestrutura multi-region',
        'Sistema de monitoramento completo',
        'Automação de segurança cloud'
      ],
      communities: [
        'Discord: LinuxTips, He4rt Developers',
        'Slack: Kubernetes, DevOps Brasil',
        'Meetups: AWS User Groups, Kubernetes Meetups',
        'Conferências: AWS re:Invent, KubeCon'
      ]
    },
    quote: 'Na nuvem, você não é apenas um administrador de sistemas - você é um arquiteto de possibilidades infinitas, construindo com código o que antes exigia data centers inteiros.'
  }
};
