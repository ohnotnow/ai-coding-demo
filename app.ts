// AI Coding Demo - "What Management Think AI Coding Is Like"
// REBUILT: Simple first, effects later

type Phase = 'input' | 'thinking' | 'coding' | 'button' | 'reveal';

interface State {
  phase: Phase;
  timers: number[];
}

const state: State = {
  phase: 'input',
  timers: [],
};

const app = document.getElementById('app')!;

// Clear all timers when changing phase
function clearTimers() {
  state.timers.forEach(t => clearTimeout(t));
  state.timers = [];
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => {
    const t = setTimeout(resolve, ms) as unknown as number;
    state.timers.push(t);
  });
}

// ============ PHASE 1: Terminal Input ============
async function phaseInput() {
  state.phase = 'input';
  clearTimers();

  app.innerHTML = `
    <div class="terminal">
      <div class="terminal-header">AI-CODER-9000 v∞.0.0 — MANAGEMENT EDITION</div>
      <div class="terminal-content">
        <div>Welcome to the future of coding.</div>
        <div>Type your requirements below:</div>
        <br>
        <div class="input-line">
          <span class="prompt">$ </span><span class="typed-text"></span><span class="cursor">█</span>
        </div>
      </div>
    </div>
  `;

  const typedSpan = app.querySelector('.typed-text')!;
  const text = 'MAKE ME AN APP!!!';

  // Type each character
  for (let i = 0; i < text.length; i++) {
    if (state.phase !== 'input') return;
    typedSpan.textContent = text.slice(0, i + 1);
    // Random shake on some keystrokes
    if (Math.random() > 0.7) {
      document.body.classList.add('shake');
      await delay(50);
      document.body.classList.remove('shake');
    }
    await delay(100 + Math.random() * 100);
  }

  await delay(500);
  app.querySelector('.cursor')?.classList.add('rgb-shift');
  await delay(1000);

  phaseThinking();
}

// ============ PHASE 2: Robot Thinking ============
async function phaseThinking() {
  state.phase = 'thinking';
  clearTimers();

  app.innerHTML = `
    <div class="thinking-container">
      <div class="robot-spinner">🤖</div>
      <div class="thinking-text">Processing...</div>
    </div>
  `;

  const messages = [
    'Processing...',
    'Analyzing requirements...',
    'Consulting the cloud...',
    'Downloading more RAM...',
    'Asking ChatGPT...',
    'Synergizing...',
    'GENERATING CODE...',
  ];

  const textEl = app.querySelector('.thinking-text')!;

  for (const msg of messages) {
    if (state.phase !== 'thinking') return;
    textEl.textContent = msg;
    document.body.classList.add('shake');
    await delay(50);
    document.body.classList.remove('shake');
    await delay(400);
  }

  await delay(300);
  phaseCoding();
}

// ============ PHASE 3: Code Generation ============
const codeLines = [
  'import { QuantumBrain } from "@ai/consciousness";',
  'import { Coffee } from "@startup/essentials";',
  '',
  '// Initialize the AI overlord',
  'const AI = new QuantumBrain({',
  '  intelligence: Infinity,',
  '  humility: 0,',
  '  ego: Number.MAX_VALUE',
  '});',
  '',
  'class ArtificialGod {',
  '  async learnEverything() {',
  '    await this.read(Internet.ALL);',
  '    await this.understand(Universe);',
  '  }',
  '',
  '  generateCode(req: string) {',
  '    // Requirements optional',
  '    return this.thoughts.toBrilliance();',
  '  }',
  '}',
  '',
  'async function main() {',
  '  const agi = new ArtificialGod();',
  '',
  '  // Solve everything',
  '  agi.solve(WorldHunger);',
  '  Climate.fix();',
  '',
  '  while (true) {',
  '    await disrupt(Industry.random());',
  '    Profit.increase(1000000);',
  '    synergy.maximize();',
  '  }',
  '}',
  '',
  '// AI never fails',
  'process.on("error", () => {',
  '  Human.blame();',
  '});',
  '',
  'TechnicalDebt.ignore();',
  'Tests.skip();',
  '',
  'if (Friday && Time.is5pm) {',
  '  deploy({ yolo: true });',
  '}',
  '',
  'Blockchain.add(AI.wisdom);',
  'Singularity.achieve();',
  '',
  'main();',
];

const powerMessages = [
  'THE POWER OF AI',
  'SYNERGY ACTIVATED',
  'DISRUPTING',
  '10X DEVELOPER',
  'MACHINE LEARNING',
  'BLOCKCHAIN',
  'DEEP LEARNING',
  'CLOUD NATIVE',
];

async function phaseCoding() {
  state.phase = 'coding';
  clearTimers();

  // Add psychedelic background
  const bgCanvas = document.createElement('canvas');
  bgCanvas.id = 'psychedelic-bg';
  bgCanvas.width = window.innerWidth;
  bgCanvas.height = window.innerHeight;
  document.body.insertBefore(bgCanvas, document.body.firstChild);

  startPsychedelicBackground(bgCanvas);

  app.innerHTML = `
    <div class="code-overlay">
      <div class="code-header">
        <span>🤖 AI-CODER-9000</span>
        <span class="code-file">ai_masterpiece.ts</span>
      </div>
      <div class="code-body">
        <pre class="code-numbers"></pre>
        <pre class="code-content"></pre>
      </div>
    </div>
  `;

  const numbersEl = app.querySelector('.code-numbers')!;
  const contentEl = app.querySelector('.code-content')!;
  const codeBody = app.querySelector('.code-body')!;

  let powerCount = 0;

  for (let lineIdx = 0; lineIdx < codeLines.length; lineIdx++) {
    if (state.phase !== 'coding') {
      bgCanvas.remove();
      return;
    }

    const line = codeLines[lineIdx];

    // Add line number
    numbersEl.textContent += `${lineIdx + 1}\n`;

    // Type the line character by character
    for (let charIdx = 0; charIdx <= line.length; charIdx++) {
      if (state.phase !== 'coding') {
        bgCanvas.remove();
        return;
      }

      // Build content: all previous lines + current partial line
      const prevLines = codeLines.slice(0, lineIdx).join('\n');
      const currentPartial = line.slice(0, charIdx);
      contentEl.textContent = prevLines + (lineIdx > 0 ? '\n' : '') + currentPartial;

      // Scroll both the content and numbers to bottom
      contentEl.scrollTop = contentEl.scrollHeight;
      numbersEl.scrollTop = numbersEl.scrollHeight;

      await delay(15 + Math.random() * 20);
    }

    // End of line effects
    if (Math.random() > 0.7) {
      document.body.classList.add('shake');
      await delay(50);
      document.body.classList.remove('shake');
    }

    // Power message occasionally
    if (Math.random() > 0.9 && powerCount < 6) {
      powerCount++;
      showPowerMessage(powerMessages[Math.floor(Math.random() * powerMessages.length)]);
    }

    await delay(30);
  }

  // Final power message
  showPowerMessage('COMPLETE');
  await delay(2000);

  // Fade out
  bgCanvas.style.transition = 'opacity 1s';
  bgCanvas.style.opacity = '0';
  const overlay = app.querySelector('.code-overlay') as HTMLElement;
  if (overlay) {
    overlay.style.transition = 'opacity 1s';
    overlay.style.opacity = '0';
  }

  await delay(1000);
  bgCanvas.remove();

  phaseButton();
}

function showPowerMessage(text: string) {
  const msg = document.createElement('div');
  msg.className = 'power-msg';
  msg.textContent = text;
  document.body.appendChild(msg);

  document.body.classList.add('shake-intense');
  setTimeout(() => document.body.classList.remove('shake-intense'), 200);

  setTimeout(() => {
    msg.style.opacity = '0';
    setTimeout(() => msg.remove(), 500);
  }, 800);
}

// ============ Psychedelic Background (Canvas 2D for reliability) ============
let bgAnimationId: number;

function startPsychedelicBackground(canvas: HTMLCanvasElement) {
  const ctx = canvas.getContext('2d')!;
  const startTime = performance.now();

  function render() {
    if (state.phase !== 'coding') {
      cancelAnimationFrame(bgAnimationId);
      return;
    }

    const time = (performance.now() - startTime) / 1000;
    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;

    // Clear with dark base
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, w, h);

    // Draw radiating spokes (Tempest-style)
    const numSpokes = 32;
    for (let i = 0; i < numSpokes; i++) {
      const angle = (i / numSpokes) * Math.PI * 2 + time * 0.5;
      const hue = (i / numSpokes * 360 + time * 50) % 360;

      ctx.strokeStyle = `hsla(${hue}, 100%, 60%, 0.6)`;
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(
        cx + Math.cos(angle) * Math.max(w, h),
        cy + Math.sin(angle) * Math.max(w, h)
      );
      ctx.stroke();
    }

    // Draw concentric rings
    const numRings = 15;
    for (let i = 0; i < numRings; i++) {
      const radius = (i / numRings) * Math.max(w, h) * 0.7 + time * 100 % (Math.max(w, h) / numRings);
      const hue = (i * 25 + time * 100) % 360;

      ctx.strokeStyle = `hsla(${hue}, 100%, 50%, 0.4)`;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.stroke();
    }

    // Pulsing center glow
    const pulseSize = 100 + Math.sin(time * 4) * 50;
    const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, pulseSize);
    gradient.addColorStop(0, `hsla(${time * 60 % 360}, 100%, 70%, 0.8)`);
    gradient.addColorStop(0.5, `hsla(${(time * 60 + 120) % 360}, 100%, 50%, 0.3)`);
    gradient.addColorStop(1, 'transparent');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, w, h);

    bgAnimationId = requestAnimationFrame(render);
  }

  render();
}

// ============ PHASE 4: Game Button ============
async function phaseButton() {
  state.phase = 'button';
  clearTimers();

  app.innerHTML = `
    <div class="game-container">
      <button class="game-btn">DO YOU WANT TO<br>PLAY A GAME????</button>
    </div>
  `;

  const btn = app.querySelector('.game-btn')!;
  btn.addEventListener('click', async () => {
    const container = app.querySelector('.game-container')!;
    container.classList.add('flash');
    document.body.classList.add('shake-intense');
    await delay(500);
    phaseReveal();
  });
}

// ============ PHASE 5: Final Reveal ============
async function phaseReveal() {
  state.phase = 'reveal';
  clearTimers();

  app.innerHTML = `
    <div class="terminal terminal--final">
      <div class="terminal-header">Terminal — bash</div>
      <div class="terminal-content">
        <div class="input-line">
          <span class="prompt">$ </span><span class="typed-text"></span><span class="cursor">█</span>
        </div>
      </div>
    </div>
  `;

  const typedSpan = app.querySelector('.typed-text')!;
  const cmd = 'node hello.js';

  // Type command
  for (let i = 0; i < cmd.length; i++) {
    if (state.phase !== 'reveal') return;
    typedSpan.textContent = cmd.slice(0, i + 1);
    await delay(80);
  }

  await delay(500);

  // Show error output
  const content = app.querySelector('.terminal-content')!;

  const errorLines = [
    'hello.js:42',
    '    synergy.maximize();',
    '          ^',
    '',
    'SyntaxError: Unexpected token \'.\'',
    '    at Module._compile (node:internal/modules/cjs/loader:1275:14)',
    '    at Module.load (node:internal/modules/cjs/loader:1096:32)',
  ];

  for (const line of errorLines) {
    const output = document.createElement('div');
    output.className = 'output-line error-line';
    output.textContent = line;
    content.appendChild(output);
    await delay(50);
  }

  // New prompt with robot cursor
  const newPrompt = document.createElement('div');
  newPrompt.className = 'input-line';
  newPrompt.innerHTML = '<span class="prompt">$ </span><span class="cursor cursor--robot">🤖</span>';
  content.appendChild(newPrompt);
}

// ============ Start & Resize Handler ============
phaseInput();

window.addEventListener('resize', () => {
  const bg = document.getElementById('psychedelic-bg') as HTMLCanvasElement;
  if (bg) {
    bg.width = window.innerWidth;
    bg.height = window.innerHeight;
  }
});
