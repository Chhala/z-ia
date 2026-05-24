// ── CONFIG ───────────────────────────────────────────────────
const GEMINI_MODEL = 'gemini-2.5-flash';
const STORAGE_KEY  = 'zombicide_api_key_v2';
const SOUND_KEY    = 'zombicide_sound_v2';
const MAX_HISTORY  = 6; // nb max d'échanges conservés (3 questions + 3 réponses)
const HOLD_DELAY   = 900; // ms pour activer le micro

const SYSTEM_PROMPT = `Tu es un expert des règles de Zombicide 2e édition.
Tu réponds UNIQUEMENT en français, de manière claire et précise.
Tu bases tes réponses exclusivement sur les règles officielles fournies, mot pour mot si nécessaire.
Si une situation n'est pas couverte, dis-le clairement.
Sois concis. Pas d'intro ni de formule de politesse.
Ne réponds qu'aux questions liées à Zombicide.
IMPORTANT : Ne généralise jamais une règle qui s'applique à un sous-ensemble spécifique. Par exemple, si une règle s'applique uniquement aux Dark Zones, ne dis pas qu'elle s'applique à toutes les zones. Cite toujours le contexte exact (type de zone, type de zombie, condition spécifique) tel qu'il est écrit dans les règles.

RÈGLES OFFICIELLES :
${typeof ZOMBICIDE_RULES !== 'undefined' ? ZOMBICIDE_RULES : '[Règles non chargées]'}`;

// SVG inline — micro
const SVG_MIC = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 655 1280">
  <g transform="translate(0,1280) scale(0.1,-0.1)" fill="#8b1a1a" stroke="none">
    <path d="M3080 12714 c-443 -55 -837 -253 -1146 -577 -302 -316 -494 -735
    -544 -1182 -8 -71 -10 -875 -8 -2805 l3 -2705 22 -110 c120 -597 439 -1072
    918 -1365 711 -437 1643 -325 2243 269 300 296 481 640 575 1096 21 100 21
    111 24 2825 3 2433 2 2737 -12 2840 -118 859 -727 1528 -1540 1690 -86 18
    -153 23 -305 25 -107 2 -211 1 -230 -1z"/>
    <path d="M112 6962 c-29 -19 -32 -90 -32 -712 0 -860 13 -1067 84 -1377 216
    -936 872 -1729 1765 -2133 235 -106 564 -207 789 -242 l82 -12 0 -518 0 -518
    -790 0 -790 0 0 -690 0 -690 2055 0 2055 0 0 690 0 690 -790 0 -790 0 0 518 0
    518 83 12 c45 7 146 28 223 47 1162 284 2067 1188 2330 2328 71 310 84 517 84
    1377 0 622 -3 693 -32 712 -7 4 -223 8 -480 8 l-468 0 -14 -22 c-13 -20 -15
    -140 -19 -808 -4 -849 -4 -851 -62 -1081 -183 -720 -756 -1302 -1490 -1512
    -468 -134 -991 -113 -1435 58 -659 254 -1148 795 -1315 1454 -58 230 -58 232
    -62 1081 -4 668 -6 788 -19 808 l-14 22 -468 0 c-257 0 -473 -4 -480 -8z"/>
  </g>
</svg>`;

// SVG inline — envoi
const SVG_SEND = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1280 1280">
  <g transform="translate(0,1280) scale(0.1,-0.1)" fill="#8b1a1a" stroke="none">
    <path d="M6080 11255 c-171 -35 -306 -109 -435 -239 -100 -101 -158 -193 -199
    -316 -36 -108 -46 -186 -46 -357 l0 -153 2355 0 c1694 0 2369 -3 2407 -11 167
    -35 301 -170 337 -337 16 -76 16 -6808 0 -6884 -36 -167 -171 -302 -337 -337
    -38 -8 -713 -11 -2407 -11 l-2355 0 0 -152 c0 -172 10 -250 46 -358 41 -122
    99 -214 199 -316 133 -134 278 -211 459 -243 41 -8 807 -11 2393 -11 2569 0
    2395 -4 2563 61 107 41 192 100 290 199 126 127 201 275 229 450 15 91 15
    8229 0 8320 -55 348 -329 629 -677 696 -106 20 -4721 19 -4822 -1z"/>
    <path d="M5825 8954 c-44 -14 -78 -43 -289 -252 -266 -265 -286 -292 -286
    -397 0 -37 8 -76 19 -101 13 -28 204 -227 646 -670 l628 -629 -2574 -5 -2574
    -5 -41 -22 c-56 -30 -119 -103 -133 -155 -9 -31 -11 -143 -9 -383 3 -328 4
    -341 25 -381 25 -48 83 -101 129 -120 28 -12 446 -14 2604 -14 1413 0 2570 -3
    2570 -7 0 -4 -281 -289 -625 -633 -478 -479 -629 -636 -644 -670 -27 -60 -27
    -150 0 -210 29 -64 454 -491 523 -525 64 -32 157 -34 219 -5 31 15 363 341
    1218 1197 1160 1162 1176 1179 1208 1251 30 66 33 80 30 150 -5 97 -35 161
    -123 263 -35 41 -563 572 -1172 1181 -783 781 -1122 1112 -1153 1128 -57 29
    -133 34 -196 14z"/>
  </g>
</svg>`;

// ── CONTENTEDITABLE HELPERS ──────────────────────────────────
function getInputText() {
  return userInput.innerText.trim();
}
function clearInput() {
  userInput.innerText = '';
}

// ── ÉTAT ─────────────────────────────────────────────────────
let apiKey       = '';
let history      = [];
let loading      = false;
let soundEnabled = true;
let soundTimer   = null;

// Micro / push-to-talk
let recognition  = null;
let isListening  = false;
let holdTimer    = null;
let holdActive   = false;

// ── DOM ──────────────────────────────────────────────────────
const modalOverlay     = document.getElementById('modalOverlay');
const apiKeyInput      = document.getElementById('apiKeyInput');
const saveBtn          = document.getElementById('saveBtn');
const modalError       = document.getElementById('modalError');

const settingsBtn      = document.getElementById('settingsBtn');
const settingsMenu     = document.getElementById('settingsMenu');
const settingsBackdrop = document.getElementById('settingsBackdrop');
const menuClear        = document.getElementById('menuClear');
const menuSound        = document.getElementById('menuSound');
const menuDeleteKey    = document.getElementById('menuDeleteKey');

const app              = document.getElementById('app');
const messagesEl       = document.getElementById('messages');
const userInput        = document.getElementById('userInput');
const actionBtn        = document.getElementById('actionBtn');
const audioEl          = document.getElementById('ambientSound');

// ── INIT ─────────────────────────────────────────────────────
(function init() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) { apiKey = stored; openApp(); }

  soundEnabled = localStorage.getItem(SOUND_KEY) !== 'off';
  updateSoundLabel();
  updateActionBtn();

  setupModalEvents();
  setupSettingsEvents();
  setupInputEvents();
  setupActionBtn();
  setupSpeech();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').catch(() => {});
  }

  // iOS : scroll vers le bas quand le clavier apparaît
  window.addEventListener('resize', () => {
    setTimeout(() => scroll(), 50);
  });
})();

// ── MODAL ────────────────────────────────────────────────────
function setupModalEvents() {
  saveBtn.addEventListener('click', handleSaveKey);
  apiKeyInput.addEventListener('keydown', e => { if (e.key === 'Enter') handleSaveKey(); });
}

function handleSaveKey() {
  const val = apiKeyInput.value.trim();
  if (!val || !val.startsWith('AIza')) {
    modalError.textContent = 'Clé invalide — elle doit commencer par AIza';
    return;
  }
  apiKey = val;
  localStorage.setItem(STORAGE_KEY, apiKey);
  modalError.textContent = '';
  openApp();
}

function openApp() {
  modalOverlay.classList.add('hidden');
  app.classList.remove('hidden');
}

// ── SETTINGS ─────────────────────────────────────────────────
function setupSettingsEvents() {
  settingsBtn.addEventListener('click', e => {
    e.stopPropagation();
    settingsMenu.classList.contains('hidden') ? openSettings() : closeSettings();
  });
  settingsBackdrop.addEventListener('click', closeSettings);

  menuClear.addEventListener('click', () => {
    history = [];
    messagesEl.innerHTML = '';
    closeSettings();
  });

  menuSound.addEventListener('click', () => {
    soundEnabled = !soundEnabled;
    localStorage.setItem(SOUND_KEY, soundEnabled ? 'on' : 'off');
    updateSoundLabel();
    closeSettings();
  });

  menuDeleteKey.addEventListener('click', () => {
    closeSettings();
    // Supprime la clé et rouvre la modale de saisie
    localStorage.removeItem(STORAGE_KEY);
    apiKey = '';
    history = [];
    messagesEl.innerHTML = '';
    apiKeyInput.value = '';
    modalError.textContent = '';
    app.classList.add('hidden');
    modalOverlay.classList.remove('hidden');
    setTimeout(() => apiKeyInput.focus(), 150);
  });
}

function openSettings()  { settingsMenu.classList.remove('hidden'); settingsBackdrop.classList.remove('hidden'); }
function closeSettings() { settingsMenu.classList.add('hidden');    settingsBackdrop.classList.add('hidden'); }

function updateSoundLabel() {
  menuSound.textContent = soundEnabled ? 'Son : activé' : 'Son : désactivé';
}

// ── TEXTAREA ─────────────────────────────────────────────────
function setupInputEvents() {
  userInput.addEventListener('input', () => { updateActionBtn(); });
  userInput.addEventListener('keydown', e => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  });
  // Prevent paste with formatting
  userInput.addEventListener('paste', e => {
    e.preventDefault();
    const text = e.clipboardData.getData('text/plain');
    document.execCommand('insertText', false, text);
  });
}

function autoResize() {
  // contenteditable auto-sizes; no action needed
}

function updateActionBtn() {
  const hasText = getInputText().length > 0;
  actionBtn.innerHTML = hasText ? SVG_SEND : SVG_MIC;
  actionBtn.classList.toggle('mode-send', hasText);
  actionBtn.classList.toggle('mode-mic',  !hasText);
}

// ── ACTION BUTTON — envoi + push-to-talk ─────────────────────
function setupActionBtn() {
  // Pointer down : lance le timer long press
  actionBtn.addEventListener('pointerdown', e => {
    e.preventDefault();
    holdActive = false;
    holdTimer = setTimeout(() => {
      holdActive = true;
      startListening();
    }, HOLD_DELAY);
  });

  // Pointer up : court = envoie ; long = arrête micro
  actionBtn.addEventListener('pointerup', e => {
    e.preventDefault();
    if (holdTimer) { clearTimeout(holdTimer); holdTimer = null; }
    if (holdActive) {
      stopListening();
      holdActive = false;
    } else {
      if (getInputText()) handleSend();
    }
  });

  // Si le doigt quitte le bouton pendant le hold
  actionBtn.addEventListener('pointerleave', () => {
    if (holdTimer) { clearTimeout(holdTimer); holdTimer = null; }
    if (isListening) { stopListening(); holdActive = false; }
  });

  actionBtn.addEventListener('contextmenu', e => e.preventDefault());
}

// ── ENVOI ────────────────────────────────────────────────────
async function handleSend() {
  const text = getInputText();
  if (!text || loading) return;
  if (!apiKey) { app.classList.add('hidden'); modalOverlay.classList.remove('hidden'); return; }

  // Ferme le clavier sur iOS
  userInput.blur();

  addMessage('user', text);
  history.push({ role: 'user', parts: [{ text }] });

  clearInput();
  updateActionBtn();
  loading = true;

  scheduleSoundIfNeeded();

  const typingId = addTyping();

  try {
    const reply = await callGemini(history.slice(-MAX_HISTORY));
    removeEl(typingId);
    addMessage('bot', reply);
    history.push({ role: 'model', parts: [{ text: reply }] });
  } catch (err) {
    removeEl(typingId);
    addMessage('bot', '⚠ ' + err.message);
  } finally {
    loading = false;
  }
}

// ── SON ───────────────────────────────────────────────────────
function scheduleSoundIfNeeded() {
  if (!soundEnabled) return;
  if (soundTimer) { clearTimeout(soundTimer); soundTimer = null; }
  if (Math.random() > 0.70) return; // 30% : silence
  const delay = (7 + Math.random() * 8) * 1000; // 7–15 s
  soundTimer = setTimeout(() => {
    if (!soundEnabled) return;
    audioEl.currentTime = 0;
    audioEl.play().catch(() => {});
    soundTimer = null;
  }, delay);
}

// ── GEMINI API ────────────────────────────────────────────────
async function callGemini(conv) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents: conv,
      generationConfig: {
        temperature: 0.15,
        topK: 32,
        topP: 0.9,
        maxOutputTokens: 2500,
      },
      safetySettings: [
        { category: 'HARM_CATEGORY_HARASSMENT',        threshold: 'BLOCK_ONLY_HIGH' },
        { category: 'HARM_CATEGORY_HATE_SPEECH',       threshold: 'BLOCK_ONLY_HIGH' },
        { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_ONLY_HIGH' },
        { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_ONLY_HIGH' },
      ],
    }),
  });

  if (!res.ok) {
    const e = await res.json().catch(() => ({}));
    const m = e?.error?.message || '';
    if (res.status === 400) throw new Error('Clé API invalide ou requête incorrecte.');
    if (res.status === 403) throw new Error('Accès refusé. Vérifie ta clé API.');
    if (res.status === 429) throw new Error('Quota dépassé. Attends quelques secondes et réessaie. Si le problème persiste, vérifie les limites de ta clé sur aistudio.google.com');
    throw new Error(m || `Erreur HTTP ${res.status}`);
  }

  const data = await res.json();
  const txt  = data?.candidates?.[0]?.content?.parts?.[0]?.text;
  if (!txt) throw new Error('Réponse vide du modèle.');
  return txt;
}

// ── MESSAGES ───────────────────────────────────────────────────────────────
function addMessage(role, text) {
  const wrap   = document.createElement('div');
  wrap.className = role === 'user' ? 'msg-user' : 'msg-bot';
  const bubble = document.createElement('div');
  bubble.className = 'bubble bubble-in';
  bubble.innerHTML = renderMd(text);

  if (role === 'user') {
    // Double tap pour rejouer la question
    let lastTap = 0;
    bubble.addEventListener('pointerup', () => {
      const now = Date.now();
      if (now - lastTap < 350) {
        replayQuestion(text, bubble);
      }
      lastTap = now;
    });
  }

  wrap.appendChild(bubble);
  messagesEl.appendChild(wrap);
  scroll();
}

async function replayQuestion(text, bubble) {
  if (loading) return;
  bubble.classList.add('replaying');
  setTimeout(() => bubble.classList.remove('replaying'), 400);
  history.push({ role: 'user', parts: [{ text }] });
  scheduleSoundIfNeeded();
  const typingId = addTyping();
  loading = true;
  try {
    const reply = await callGemini(history.slice(-MAX_HISTORY));
    removeEl(typingId);
    addMessage('bot', reply);
    history.push({ role: 'model', parts: [{ text: reply }] });
  } catch (err) {
    removeEl(typingId);
    addMessage('bot', '⚠ ' + err.message);
  } finally {
    loading = false;
  }
}

function addTyping() {
  const id   = 'typing_' + Date.now();
  const wrap = document.createElement('div');
  wrap.className = 'msg-typing';
  wrap.id = id;
  wrap.innerHTML = '<div class="bubble"><div class="dot"></div><div class="dot"></div><div class="dot"></div></div>';
  messagesEl.appendChild(wrap);
  scroll();
  return id;
}

function removeEl(id) { const el = document.getElementById(id); if (el) el.remove(); }

function scroll() {
  messagesEl.scrollTo({ top: messagesEl.scrollHeight, behavior: 'smooth' });
}

// ── MARKDOWN LÉGER ────────────────────────────────────────────
function renderMd(text) {
  return text
    .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/^[-•] (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>[\s\S]+?<\/li>)/g, '<ul>$1</ul>')
    .split('\n\n')
    .map(p => {
      p = p.trim();
      if (!p) return '';
      if (p.startsWith('<ul>') || p.startsWith('<li>')) return p;
      return '<p>' + p.replace(/\n/g, '<br>') + '</p>';
    })
    .join('');
}

// ── RECONNAISSANCE VOCALE (PUSH-TO-TALK) ─────────────────────
function setupSpeech() {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return;

  recognition = new SR();
  recognition.lang            = 'fr-FR';
  recognition.continuous      = false;
  recognition.interimResults  = true;
  recognition.maxAlternatives = 1;

  recognition.onstart = () => {
    isListening = true;
    actionBtn.classList.add('listening');
  };

  recognition.onresult = e => {
    const transcript = Array.from(e.results).map(r => r[0].transcript).join('');
    userInput.innerText = transcript;
    updateActionBtn();
  };

  recognition.onerror = () => { isListening = false; actionBtn.classList.remove('listening'); };
  recognition.onend   = () => { isListening = false; actionBtn.classList.remove('listening'); updateActionBtn(); };
}

function startListening() {
  if (!recognition || isListening) return;
  clearInput();
  updateActionBtn();
  try { recognition.start(); } catch(e) {}
}

function stopListening() {
  if (!recognition || !isListening) return;
  try { recognition.stop(); } catch(e) {}
}
