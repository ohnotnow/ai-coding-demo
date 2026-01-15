// AI Coding Demo - "What Management Think AI Coding Is Like"
// A satirical presentation demo

type Phase =
  | 'terminal-input'
  | 'robot-thinking'
  | 'code-generation'
  | 'game-button'
  | 'final-reveal';

let currentPhase: Phase = 'terminal-input';
const app = document.getElementById('app')!;
const fxCanvas = document.getElementById('fx-canvas') as HTMLCanvasElement;

// Code snippets for the "generation" phase
const codeSnippets = [
  'import { QuantumNeuralNetwork } from "@ai/brain";',
  'const consciousness = await AI.awaken();',
  'function solveWorldHunger() { /* TODO */ }',
  'class SelfAwareBot extends Skynet {',
  '  private thoughts: Stream<Consciousness>;',
  '  async dream() { return Matrix.enter(); }',
  '}',
  'export const AGI = new ArtificialGeneralIntelligence();',
  'AGI.learn(Universe.ALL_KNOWLEDGE);',
  'while (true) { await improveSelf(); }',
  'if (human.confused) AI.explain("trust me");',
  'const answer = 42; // confirmed',
  'blockchain.add(AI.wisdom);',
  'cloud.deploy(infiniteScaling: true);',
  'synergy.maximize(); paradigm.shift();',
  'async function* generateMillions() {',
  '  yield* disruptIndustry();',
  '  yield* replaceHumans();',
  '}',
  'const coffee = await AI.brew({ strength: "startup" });',
  'errors.forEach(e => AI.blame(human));',
  'technical_debt.ignore();',
  'deadline.meet({ quality: "optional" });',
];

const powerMessages = [
  'THE POWER OF AI',
  'SYNERGY ACTIVATED',
  'DISRUPTING',
  'INNOVATING',
  '10X DEVELOPER',
  'BLOCKCHAIN',
  'MACHINE LEARNING',
  'NEURAL NETWORKS',
];

// ============ PHASE 1: Terminal Input ============
function showTerminalInput() {
  app.innerHTML = `
    <div class="terminal">
      <div class="terminal-header">AI-CODER-9000 v∞.0.0 — MANAGEMENT EDITION</div>
      <div class="terminal-content">
        <div>Welcome to the future of coding.</div>
        <div>Type your requirements below:</div>
        <br>
        <div><span class="prompt">$</span> <span class="terminal-input"></span><span class="cursor"></span></div>
      </div>
    </div>
  `;

  const inputSpan = document.querySelector('.terminal-input')!;
  const targetText = 'MAKE ME AN APP!!!';
  let charIndex = 0;

  // Simulate typing
  const typeInterval = setInterval(() => {
    if (charIndex < targetText.length) {
      inputSpan.textContent += targetText[charIndex];
      charIndex++;

      // Occasional shake for dramatic effect
      if (Math.random() > 0.7) {
        document.body.classList.add('shake');
        setTimeout(() => document.body.classList.remove('shake'), 100);
      }
    } else {
      clearInterval(typeInterval);
      // Flash the cursor a few times then proceed
      setTimeout(() => {
        const cursor = document.querySelector('.cursor')!;
        cursor.classList.add('rgb-shift');
        setTimeout(() => startRobotThinking(), 1000);
      }, 500);
    }
  }, 150);
}

// ============ PHASE 2: Robot Thinking ============
function startRobotThinking() {
  currentPhase = 'robot-thinking';

  app.innerHTML = `
    <div class="robot-spinner">🤖</div>
    <div class="robot-spinner-text">Processing...</div>
  `;

  // Add intense vignette
  document.querySelector('.vignette')?.classList.add('vignette--intense');

  // Processing messages
  const messages = [
    'Processing...',
    'Analyzing requirements...',
    'Consulting the cloud...',
    'Downloading more RAM...',
    'Asking ChatGPT...',
    'Synergizing...',
    'Almost there...',
    'Brewing coffee...',
    'GENERATING CODE...',
  ];

  let msgIndex = 0;
  const textEl = document.querySelector('.robot-spinner-text')!;

  const msgInterval = setInterval(() => {
    msgIndex++;
    if (msgIndex < messages.length) {
      textEl.textContent = messages[msgIndex];
      // Shake on each message
      document.body.classList.add('shake');
      setTimeout(() => document.body.classList.remove('shake'), 100);
    } else {
      clearInterval(msgInterval);
      setTimeout(() => startCodeGeneration(), 500);
    }
  }, 400);
}

// ============ PHASE 3: Code Generation ============
function startCodeGeneration() {
  currentPhase = 'code-generation';

  app.innerHTML = `<div class="code-container" id="code-container"></div>`;

  const container = document.getElementById('code-container')!;
  fxCanvas.classList.add('active');
  initWebGLEffects();

  let lineCount = 0;
  let y = 50;
  const maxLines = 60;
  let powerMsgCount = 0;

  const generateLine = () => {
    if (lineCount >= maxLines) {
      // End code generation
      setTimeout(() => showPowerMessage('COMPLETE', true), 500);
      return;
    }

    // Create code line
    const line = document.createElement('div');
    line.className = 'code-line';
    line.style.top = `${y}px`;
    line.style.left = `${20 + Math.random() * 60}%`;
    line.style.fontSize = `${12 + Math.random() * 8}px`;
    line.style.opacity = `${0.4 + Math.random() * 0.6}`;
    line.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];

    // Random color variations
    const colors = ['#0f0', '#0f0', '#0f0', '#0ff', '#ff0', '#f0f'];
    line.style.color = colors[Math.floor(Math.random() * colors.length)];

    container.appendChild(line);

    // Occasionally show power message
    if (Math.random() > 0.85 && powerMsgCount < 5) {
      powerMsgCount++;
      showPowerMessage(powerMessages[Math.floor(Math.random() * powerMessages.length)]);
    }

    // Screen shake
    if (Math.random() > 0.7) {
      const shakeClass = Math.random() > 0.5 ? 'shake' : 'shake-intense';
      document.body.classList.add(shakeClass);
      setTimeout(() => document.body.classList.remove(shakeClass), 150);
    }

    y += 15 + Math.random() * 10;
    if (y > window.innerHeight - 50) {
      y = 50;
    }

    lineCount++;

    // Speed up as we go
    const delay = Math.max(30, 150 - lineCount * 2);
    setTimeout(generateLine, delay);
  };

  generateLine();
}

function showPowerMessage(text: string, isFinal = false) {
  const msg = document.createElement('div');
  msg.className = 'power-message rgb-shift';
  msg.textContent = text;
  document.body.appendChild(msg);

  // Intense shake
  document.body.classList.add('shake-intense');
  setTimeout(() => document.body.classList.remove('shake-intense'), 200);

  // Bloom effect
  msg.classList.add('bloom-pulse');

  if (isFinal) {
    // Keep the final message, then transition
    setTimeout(() => {
      msg.style.animation = 'none';
      msg.style.opacity = '0';
      msg.style.transition = 'opacity 1s';
      setTimeout(() => {
        msg.remove();
        showGameButton();
      }, 1000);
    }, 1500);
  } else {
    setTimeout(() => {
      msg.style.opacity = '0';
      msg.style.transition = 'opacity 0.5s';
      setTimeout(() => msg.remove(), 500);
    }, 800);
  }
}

// ============ PHASE 4: Game Button ============
function showGameButton() {
  currentPhase = 'game-button';

  // Fade out effects canvas
  fxCanvas.classList.remove('active');

  // Clear app
  app.innerHTML = '';

  // Create button container
  const container = document.createElement('div');
  container.className = 'game-button-container';
  container.innerHTML = `
    <button class="game-button">
      DO YOU WANT TO<br>PLAY A GAME????
    </button>
  `;
  document.body.appendChild(container);

  const btn = container.querySelector('.game-button')!;
  btn.addEventListener('click', () => {
    // Bloom and transition
    container.classList.add('bloom-pulse');
    document.body.classList.add('shake-intense');

    setTimeout(() => {
      container.remove();
      showFinalReveal();
    }, 500);
  });
}

// ============ PHASE 5: Final Reveal ============
function showFinalReveal() {
  currentPhase = 'final-reveal';

  // Remove intense vignette
  document.querySelector('.vignette')?.classList.remove('vignette--intense');

  // Clean, normal terminal
  app.innerHTML = `
    <div class="terminal terminal--final">
      <div class="terminal-header" style="color: #666;">Terminal — bash</div>
      <div class="terminal-content">
        <div><span class="prompt">$</span> <span class="typed-command"></span></div>
      </div>
    </div>
  `;

  const commandSpan = document.querySelector('.typed-command')!;
  const command = 'python3 hello.py';
  let charIndex = 0;

  // Type the command
  const typeInterval = setInterval(() => {
    if (charIndex < command.length) {
      commandSpan.textContent += command[charIndex];
      charIndex++;
    } else {
      clearInterval(typeInterval);
      setTimeout(showOutput, 500);
    }
  }, 80);
}

function showOutput() {
  const content = document.querySelector('.terminal-content')!;

  // Add output
  const output = document.createElement('div');
  output.style.color = '#ccc';
  output.textContent = 'Hello World!';
  content.appendChild(output);

  // Add new prompt with robot cursor
  const newPrompt = document.createElement('div');
  newPrompt.innerHTML = '<span class="prompt">$</span> <span class="cursor cursor--robot"></span>';
  content.appendChild(newPrompt);
}

// ============ WebGL Effects ============
function initWebGLEffects() {
  const gl = fxCanvas.getContext('webgl');
  if (!gl) return;

  fxCanvas.width = window.innerWidth;
  fxCanvas.height = window.innerHeight;

  // Simple bloom-like effect using gradients
  const vertexShader = `
    attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  const fragmentShader = `
    precision mediump float;
    uniform vec2 u_resolution;
    uniform float u_time;

    float random(vec2 st) {
      return fract(sin(dot(st, vec2(12.9898, 78.233))) * 43758.5453);
    }

    void main() {
      vec2 uv = gl_FragCoord.xy / u_resolution;

      // Radial glow from center
      vec2 center = vec2(0.5, 0.5);
      float dist = length(uv - center);

      // Pulsing glow
      float pulse = 0.3 + 0.2 * sin(u_time * 3.0);
      float glow = pulse * smoothstep(0.8, 0.0, dist);

      // Matrix green with some variation
      vec3 color = vec3(0.0, glow * (0.8 + 0.2 * sin(u_time * 5.0 + uv.y * 10.0)), 0.0);

      // Random bright pixels (data streams)
      if (random(uv + fract(u_time * 0.5)) > 0.995) {
        color = vec3(0.0, 1.0, 0.0);
      }

      // Scanline-like horizontal bands
      float band = sin(uv.y * 100.0 + u_time * 10.0) * 0.5 + 0.5;
      color *= 0.9 + band * 0.1;

      gl_FragColor = vec4(color, 0.3);
    }
  `;

  // Compile shaders
  const vs = gl.createShader(gl.VERTEX_SHADER)!;
  gl.shaderSource(vs, vertexShader);
  gl.compileShader(vs);

  const fs = gl.createShader(gl.FRAGMENT_SHADER)!;
  gl.shaderSource(fs, fragmentShader);
  gl.compileShader(fs);

  const program = gl.createProgram()!;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  gl.useProgram(program);

  // Create fullscreen quad
  const positions = new Float32Array([
    -1, -1,
     1, -1,
    -1,  1,
     1,  1,
  ]);

  const buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

  const positionLoc = gl.getAttribLocation(program, 'a_position');
  gl.enableVertexAttribArray(positionLoc);
  gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

  const resolutionLoc = gl.getUniformLocation(program, 'u_resolution');
  const timeLoc = gl.getUniformLocation(program, 'u_time');

  gl.uniform2f(resolutionLoc, fxCanvas.width, fxCanvas.height);

  // Enable blending for transparency
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);

  const startTime = performance.now();

  function render() {
    if (currentPhase !== 'code-generation') return;

    const time = (performance.now() - startTime) / 1000;
    gl.uniform1f(timeLoc, time);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

    requestAnimationFrame(render);
  }

  render();
}

// ============ Start the demo ============
showTerminalInput();

// Handle window resize
window.addEventListener('resize', () => {
  if (fxCanvas) {
    fxCanvas.width = window.innerWidth;
    fxCanvas.height = window.innerHeight;
  }
});
