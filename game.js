const PHRASES = {
  en: {
    name: 'Inglês',
    easy: [
      { text: 'Hello, how are you?', answer: 'olá, como você está' },
      { text: 'The cat is sleeping.', answer: 'o gato está dormindo' },
      { text: 'I love pizza.', answer: 'eu amo pizza' },
      { text: 'Today is sunny.', answer: 'hoje está ensolarado' },
      { text: 'Where is the bathroom?', answer: 'onde fica o banheiro' }
    ],
    normal: [
      { text: 'The quick brown fox jumps over the lazy dog.', answer: 'a rápida raposa marrom pula sobre o cachorro preguiçoso' },
      { text: 'Time flies when you are having fun.', answer: 'o tempo voa quando você está se divertindo' },
      { text: 'Every cloud has a silver lining.', answer: 'toda nuvem tem um lado bom' },
      { text: 'Better late than never.', answer: 'antes tarde do que nunca' },
      { text: 'Actions speak louder than words.', answer: 'as ações falam mais alto que as palavras' }
    ],
    hard: [
      { text: 'The intricacies of quantum mechanics baffle even seasoned physicists.', answer: 'as complexidades da mecânica quântica confundem até físicos experientes' },
      { text: 'A procrastinator is someone who postpones the inevitable.', answer: 'um procrastinador é alguém que adia o inevitável' },
      { text: 'Serendipity often leads to the most profound discoveries.', answer: 'a serendipidade frequentemente leva às descobertas mais profundas' }
    ]
  },
  es: {
    name: 'Espanhol',
    easy: [
      { text: 'Hola, ¿cómo estás?', answer: 'olá, como você está' },
      { text: 'El gato duerme mucho.', answer: 'o gato dorme muito' },
      { text: 'Me gusta el chocolate.', answer: 'eu gosto de chocolate' }
    ],
    normal: [
      { text: 'No hay mal que por bien no venga.', answer: 'não há mal que não traga algum bem' },
      { text: 'Más vale tarde que nunca.', answer: 'antes tarde do que nunca' },
      { text: 'En boca cerrada no entran moscas.', answer: 'em boca fechada não entra mosca' }
    ],
    hard: [
      { text: 'La perseverance es la clave del éxito duradero.', answer: 'a perseverança é a chave do sucesso duradouro' },
      { text: 'Un viaje de mil millas comienza con un solo paso.', answer: 'uma jornada de mil milhas começa com um único passo' }
    ]
  },
  fr: {
    name: 'Francês',
    easy: [
      { text: 'Bonjour, comment ça va?', answer: 'olá, como vai' },
      { text: 'Je mange une pomme.', answer: 'eu como uma maçã' }
    ],
    normal: [
      { text: 'Petit à petit, l\'oiseau fait son nid.', answer: 'pouco a pouco o pássaro faz seu ninho' },
      { text: 'Qui vivra verra.', answer: 'quem viver verá' }
    ],
    hard: [
      { text: 'La vie est une fleur dont l\'amour est le miel.', answer: 'a vida é uma flor do qual o amor é o mel' }
    ]
  },
  de: {
    name: 'Alemão',
    easy: [
      { text: 'Guten Morgen.', answer: 'bom dia' },
      { text: 'Ich liebe dich.', answer: 'eu te amo' }
    ],
    normal: [
      { text: 'Übung macht den Meister.', answer: 'a prática leva à perfeição' },
      { text: 'Aller Anfang ist schwer.', answer: 'todo começo é difícil' }
    ],
    hard: [
      { text: 'Die Zeit heilt alle Wunden.', answer: 'o tempo cura todas as feridas' }
    ]
  },
  it: {
    name: 'Italiano',
    easy: [
      { text: 'Ciao, come stai?', answer: 'olá, como você está' },
      { text: 'Il caffè è caldo.', answer: 'o café está quente' }
    ],
    normal: [
      { text: 'Chi dorme non piglia pesci.', answer: 'quem dorme não pega peixes' },
      { text: 'La vita è bella.', answer: 'a vida é bela' }
    ],
    hard: [
      { text: 'L\'appetito viene mangiando.', answer: 'o apetite vem comendo' }
    ]
  },
  ja: {
    name: 'Japonês',
    easy: [
      { text: 'こんにちは', answer: 'olá' },
      { text: 'ありがとう', answer: 'obrigado' }
    ],
    normal: [
      { text: '桜が咲いています。', answer: 'as cerejeiras estão floridas' },
      { text: '猫が魚を食べました。', answer: 'o gato comeu o peixe' }
    ],
    hard: [
      { text: '七転び八起き', answer: 'cair sete vezes e levantar oito' }
    ]
  },
  ko: {
    name: 'Coreano',
    easy: [
      { text: '안녕하세요', answer: 'olá' },
      { text: '감사합니다', answer: 'obrigado' }
    ],
    normal: [
      { text: '오늘 날씨가 좋아요.', answer: 'o tempo está bom hoje' },
      { text: '저는 커피를 좋아해요.', answer: 'eu gosto de café' }
    ],
    hard: [
      { text: '시작이 반이다.', answer: 'começar é a metade do caminho' }
    ]
  },
  zh: {
    name: 'Chinês',
    easy: [
      { text: '你好', answer: 'olá' },
      { text: '谢谢', answer: 'obrigado' }
    ],
    normal: [
      { text: '今天天气很好。', answer: 'o tempo está muito bom hoje' },
      { text: '我喜欢吃面条。', answer: 'eu gosto de comer macarrão' }
    ],
    hard: [
      { text: '千里之行，始于足下。', answer: 'uma jornada de mil milhas começa com um único passo' }
    ]
  }
};

const MODE_TIME = { easy: 60, normal: 60, hard: 60 };
const MODE_MULT = { easy: 10, normal: 15, hard: 25 };

let state = {
  mode: 'normal',
  langs: ['en', 'es'],
  score: 0,
  time: 60,
  streak: 0,
  bestStreak: 0,
  correct: 0,
  wrong: 0,
  currentPhrase: null,
  timerId: null,
  playing: false
};

const screens = {
  menu: document.getElementById('menu'),
  game: document.getElementById('game'),
  result: document.getElementById('result')
};

function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

function normalize(str) {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function getRandomPhrase() {
  const lang = state.langs[Math.floor(Math.random() * state.langs.length)];
  const pool = PHRASES[lang][state.mode];
  const item = pool[Math.floor(Math.random() * pool.length)];
  return { ...item, lang: PHRASES[lang].name };
}

function renderPhrase() {
  state.currentPhrase = getRandomPhrase();
  document.getElementById('phrase-lang').textContent = state.currentPhrase.lang;
  document.getElementById('phrase').textContent = state.currentPhrase.text;
  document.getElementById('answer').value = '';
  document.getElementById('feedback').textContent = '';
  document.getElementById('answer').focus();
}

function checkAnswer() {
  const input = document.getElementById('answer').value;
  if (!input.trim()) return;

  const userNorm = normalize(input);
  const answers = state.currentPhrase.answer.split('/').map(a => normalize(a));
  const correct = answers.some(a => userNorm.includes(a) || a.includes(userNorm));

  const fb = document.getElementById('feedback');
  if (correct) {
    const timeBonus = Math.max(1, Math.floor(state.time / 10));
    const points = MODE_MULT[state.mode] + (state.streak * 2) + timeBonus;
    state.score += points;
    state.streak++;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    state.correct++;
    fb.textContent = `✅ Correto! +${points} pts`;
    fb.className = 'feedback correct';
  } else {
    state.streak = 0;
    state.wrong++;
    fb.textContent = `❌ Errado. Resposta: ${state.currentPhrase.answer}`;
    fb.className = 'feedback wrong';
  }

  updateHUD();
  setTimeout(renderPhrase, correct ? 300 : 1200);
}

function updateHUD() {
  document.getElementById('score').textContent = state.score;
  document.getElementById('time').textContent = state.time;
  document.getElementById('streak').textContent = state.streak;
}

function startGame() {
  const select = document.getElementById('lang-select');
  state.langs = Array.from(select.selectedOptions).map(o => o.value);
  if (state.langs.length === 0) {
    alert('Selecione pelo menos um idioma.');
    return;
  }

  state.score = 0;
  state.time = MODE_TIME[state.mode];
  state.streak = 0;
  state.bestStreak = 0;
  state.correct = 0;
  state.wrong = 0;
  state.playing = true;

  updateHUD();
  showScreen('game');
  renderPhrase();

  state.timerId = setInterval(() => {
    state.time--;
    updateHUD();
    if (state.time <= 0) endGame();
  }, 1000);
}

function endGame() {
  clearInterval(state.timerId);
  state.playing = false;

  const best = parseInt(localStorage.getItem('polyglot-best') || '0');
  if (state.score > best) {
    localStorage.setItem('polyglot-best', state.score);
  }

  document.getElementById('final-score').textContent = state.score;
  document.getElementById('correct-count').textContent = state.correct;
  document.getElementById('wrong-count').textContent = state.wrong;
  document.getElementById('best-streak').textContent = state.bestStreak;

  showScreen('result');
}

function loadBestScore() {
  const best = localStorage.getItem('polyglot-best') || '0';
  document.getElementById('best-score').textContent = `${best} pts`;
}

function skipPhrase() {
  state.time = Math.max(0, state.time - 5);
  state.streak = 0;
  updateHUD();
  renderPhrase();
}

// Eventos
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    state.mode = btn.dataset.mode;
    startGame();
  });
});

document.getElementById('answer').addEventListener('keydown', e => {
  if (e.key === 'Enter') checkAnswer();
});

document.getElementById('skip-btn').addEventListener('click', skipPhrase);
document.getElementById('restart-btn').addEventListener('click', startGame);
document.getElementById('menu-btn').addEventListener('click', () => {
  loadBestScore();
  showScreen('menu');
});

document.getElementById('donate-btn').addEventListener('click', () => {
  alert('Apoio via PIX em breve! Coloque sua chave PIX no código.');
});

loadBestScore();
showScreen('menu');
