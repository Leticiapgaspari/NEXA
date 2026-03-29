export function calcularPerfil(answers) {
  // Contagem de respostas
  const count = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };
  answers.forEach(answer => {
    if (count[answer] !== undefined) {
      count[answer]++;
    }
  });

  // Encontrar o perfil com maior contagem
  const maxCount = Math.max(...Object.values(count));
  const topProfiles = Object.keys(count).filter(key => count[key] === maxCount);

  // Lógica de desempate usando perguntas decisivas (2, 5, 10)
  let resultProfile;
  if (topProfiles.length === 1) {
    resultProfile = topProfiles[0];
  } else {
    // Usar perguntas decisivas (índices 1, 4, 9)
    const decisiveAnswers = [answers[1], answers[4], answers[9]].filter(a => topProfiles.includes(a));
    resultProfile = decisiveAnswers[0] || topProfiles[0];
  }

  // Mapear para IDs de perfil
  const profileMap = {
    'A': 'arquiteto-sistemas',
    'B': 'artesao-experiencia',
    'C': 'guardiao-cibernetico',
    'D': 'cientista-dados',
    'E': 'estrategista-produto',
    'F': 'inovador-nuvem'
  };

  // Identificar perfis secundários (mais de 20% das respostas)
  const secondaryProfiles = Object.keys(count)
    .filter(key => key !== resultProfile && count[key] >= 2)
    .map(key => profileMap[key]);

  return {
    profileId: profileMap[resultProfile],
    mainProfile: resultProfile,
    scores: count,
    secondaryProfiles
  };
}
