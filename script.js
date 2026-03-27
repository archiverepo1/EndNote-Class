// === ENDNOTE 2025 TRAINING SYSTEM ===
// Enhanced with ClickVisualizer for realistic app interaction guidance

const storageKey = "endnote2025TrainingProgress";

// === MODULE DATA ===
const modules = [
  {
    id: 1,
    title: "Getting started with EndNote",
    description: "Understand what EndNote is and create your first library.",
    practice: "Open EndNote 2025 and create a new library called MyResearch.enl.",
    takeaway: "A library is the main file where your references, groups, and attachments are managed.",
    steps: [
      {
        title: "What EndNote is used for",
        body: "EndNote helps a researcher collect references, organise them, store PDFs, and insert citations into a Word document while automatically building a bibliography.",
        listType: "ul",
        list: [
          "Store journal articles, books, and reports in one place",
          "Attach or link PDFs to references",
          "Insert citations in Microsoft Word",
          "Change referencing styles quickly"
        ],
        callout: "Think of EndNote as your personal reference library and citation assistant."
      },
      {
        title: "Create your first library",
        body: "A new user should begin by creating one library for a project, course, or thesis. This is usually the first practical action in EndNote training.",
        listType: "ol",
        list: [
          "Open EndNote 2025",
          "Choose Create a New Library",
          "Name the file MyResearch.enl",
          "Save it in an easy-to-find folder"
        ],
        callout: "Avoid scattering references across many tiny libraries unless you have a clear reason.",
        simulation: { type: "libraryCreate" }
      },
      {
        title: "Quick check",
        body: "Why is creating a library important before collecting references?",
        quiz: {
          question: "Choose the best answer:",
          correctIndex: 1,
          options: [
            "Because EndNote cannot open PDFs without it",
            "Because the library is the main container for references and organisation",
            "Because Word requires it before typing",
            "Because citation styles are stored outside EndNote"
          ],
          feedback: "Correct. The library is the central place where references and related files are managed.",
          retryHint: "Review the earlier explanation of what a library does, then try again."
        }
      }
    ]
  },
  {
    id: 2,
    title: "Adding references",
    description: "Learn the beginner ways to add material into a library.",
    practice: "Add one reference manually and then try importing one reference from an online database export file.",
    takeaway: "A user can add references manually, import them from databases, or capture metadata from PDFs.",
    steps: [
      {
        title: "Manual entry",
        body: "Manual entry is useful when a source is not easy to export or when you need to correct incomplete information.",
        listType: "ol",
        list: [
          "Go to References > New Reference",
          "Choose the correct reference type, such as Journal Article or Book",
          "Enter author, title, year, journal, volume, issue, and pages",
          "Save the record"
        ],
        callout: "Choosing the correct reference type matters because fields change depending on the source."
      },
      {
        title: "Import from a database",
        body: "Many databases allow you to export directly to EndNote or to an RIS file that EndNote can import.",
        listType: "ul",
        list: [
          "Search in a database such as Scopus, Web of Science, or EBSCOhost",
          "Use the export or save option",
          "Choose EndNote or RIS format where available",
          "Import the file into your EndNote library"
        ],
        callout: "Always check the imported reference for missing or messy metadata."
      },
      {
        title: "Quick check",
        body: "What should a beginner always do after importing a reference?",
        quiz: {
          question: "Choose the best answer:",
          correctIndex: 2,
          options: [
            "Delete the original export file immediately",
            "Move the reference into Trash to refresh it",
            "Review the metadata for accuracy and completeness",
            "Change the citation style first"
          ],
          feedback: "Correct. Imported data often needs checking, especially author names, capitalization, and missing fields.",
          retryHint: "Think about the most common issue after import: metadata quality."
        }
      }
    ]
  },
  {
    id: 3,
    title: "Organising your library",
    description: "Use groups, attachments, and searching to keep a library manageable.",
    practice: "Create a group called Literature Review and move at least two references into it.",
    takeaway: "Good organisation saves time when writing and retrieving sources later.",
    steps: [
      {
        title: "Create groups",
        body: "Groups help users separate sources by chapter, topic, assignment, or methodology.",
        listType: "ol",
        list: [
          "Right-click My Groups",
          "Choose Create Group",
          "Name the group clearly, such as Literature Review",
          "Drag references into the group"
        ],
        callout: "Groups do not duplicate references; they help organise the same library."
      },
      {
        title: "Attach PDFs and notes",
        body: "Attaching a PDF or adding notes makes EndNote more useful as a research workspace.",
        listType: "ul",
        list: [
          "Open a reference record",
          "Attach the PDF file if you have it",
          "Add research notes or keywords",
          "Use keywords consistently for easier searching"
        ],
        callout: "A consistent naming and keyword strategy becomes very helpful in larger projects."
      },
      {
        title: "Quick check",
        body: "What is the main value of groups in EndNote?",
        quiz: {
          question: "Choose the best answer:",
          correctIndex: 0,
          options: [
            "They organise references without needing separate libraries",
            "They permanently lock references from editing",
            "They change a journal article into a book",
            "They automatically publish your bibliography"
          ],
          feedback: "Correct. Groups are an organisational tool inside a single library.",
          retryHint: "Go back to the explanation about how groups behave inside one library."
        }
      }
    ]
  },
  {
    id: 4,
    title: "Citing while you write",
    description: "Understand the basic EndNote and Word connection.",
    practice: "Open Word, place the cursor in a sentence, and insert one citation using EndNote CWYW.",
    takeaway: "CWYW lets users insert citations and generate bibliographies directly in Word.",
    steps: [
      {
        title: "Open Word with the EndNote tab",
        body: "When EndNote is correctly installed, Word should include the EndNote tools used for Cite While You Write.",
        listType: "ul",
        list: [
          "Open Microsoft Word",
          "Locate the EndNote tab or ribbon tools",
          "Place the cursor where the citation should appear",
          "Use Insert Citation to search and add a source"
        ],
        callout: "If the tab is missing, that becomes a troubleshooting step, not a writing step.",
        simulation: { type: "wordCitation" }
      },
      {
        title: "Change citation style",
        body: "A user can switch between styles such as APA, Harvard, or Vancouver without rebuilding the references manually.",
        listType: "ol",
        list: [
          "Find the Style dropdown in the EndNote tools in Word",
          "Select the style required by your department or journal",
          "Allow Word and EndNote to reformat the in-text citations",
          "Check the bibliography for correct output"
        ],
        callout: "Always verify the final output, because software support does not replace academic checking."
      },
      {
        title: "Quick check",
        body: "What is the biggest advantage of Cite While You Write?",
        quiz: {
          question: "Choose the best answer:",
          correctIndex: 3,
          options: [
            "It removes the need for any proofreading",
            "It converts all PDFs into Word files",
            "It uploads the document to a publisher automatically",
            "It inserts citations and builds the bibliography as you write"
          ],
          feedback: "Correct. CWYW links writing and referencing, saving a lot of manual formatting time.",
          retryHint: "Look again at the step showing the Word and EndNote connection."
        }
      }
    ]
  },
  {
    id: 5,
    title: "Backup and next steps",
    description: "Finish with safe library practice and basic confidence checks.",
    practice: "Create a compressed library backup or copy your library folder to a safe location.",
    takeaway: "Backing up your EndNote library reduces the risk of losing references and attachments.",
    steps: [
      {
        title: "Understand what to back up",
        body: "An EndNote library usually includes the main library file and its associated data folder. Both matter.",
        listType: "ul",
        list: [
          "The .enl file is the main library file",
          "The .Data folder usually holds attachments and related data",
          "Both should be preserved together unless using a compressed library option",
          "Store backups in a secure and easy-to-find location"
        ],
        callout: "A backup is part of good research practice, not just technical housekeeping."
      },
      {
        title: "Where to go next",
        body: "After the basics, a learner can move into advanced workflows such as synchronisation, duplicate removal, annotations, full-text retrieval, and journal-specific styles.",
        listType: "ul",
        list: [
          "Learn how to find duplicates",
          "Explore sync if your environment supports it",
          "Practice editing citation output",
          "Build a department or faculty-specific training path later"
        ],
        callout: "Tip: As you progress, try applying each step using your own research topic or assignment."
      },
      {
        title: "Final quick check",
        body: "What is the safest beginner habit after building a useful library?",
        quiz: {
          question: "Choose the best answer:",
          correctIndex: 1,
          options: [
            "Delete older copies immediately without checking",
            "Back up the library and its data safely",
            "Rename every citation style",
            "Export every reference as a PDF"
          ],
          feedback: "Correct. Backups protect work and should be part of a normal routine.",
          retryHint: "Revisit the backup explanation and think about protecting both references and attachments."
        }
      }
    ]
  }
];

// === APPLICATION STATE ===
const state = {
  activeModule: 0,
  activeStep: 0,
  progress: JSON.parse(localStorage.getItem(storageKey) || "{}"),
  currentQuizPassed: false
};

// === DOM ELEMENT CACHE ===
const el = {
  welcomeScreen: document.getElementById("welcomeScreen"),
  moduleOverview: document.getElementById("moduleOverview"),
  trainingScreen: document.getElementById("trainingScreen"),
  completionScreen: document.getElementById("completionScreen"),
  moduleList: document.getElementById("moduleList"),
  overviewGrid: document.getElementById("overviewGrid"),
  progressPercent: document.getElementById("progressPercent"),
  progressFill: document.getElementById("progressFill"),
  progressText: document.getElementById("progressText"),
  moduleCounter: document.getElementById("moduleCounter"),
  stageEyebrow: document.getElementById("stageEyebrow"),
  stageTitle: document.getElementById("stageTitle"),
  stageDescription: document.getElementById("stageDescription"),
  stageStepCount: document.getElementById("stageStepCount"),
  stageStatus: document.getElementById("stageStatus"),
  stepCard: document.getElementById("stepCard"),
  moduleProgressLabel: document.getElementById("moduleProgressLabel"),
  moduleProgressFill: document.getElementById("moduleProgressFill"),
  moduleProgressText: document.getElementById("moduleProgressText"),
  practiceTask: document.getElementById("practiceTask"),
  keyTakeaway: document.getElementById("keyTakeaway"),
  prevStepBtn: document.getElementById("prevStepBtn"),
  nextStepBtn: document.getElementById("nextStepBtn"),
  resetProgressBtn: document.getElementById("resetProgressBtn"),
  jumpToCurrentBtn: document.getElementById("jumpToCurrentBtn"),
  startTutorialBtn: document.getElementById("startTutorialBtn"),
  viewModulesBtn: document.getElementById("viewModulesBtn"),
  beginFromOverviewBtn: document.getElementById("beginFromOverviewBtn"),
  restartTutorialBtn: document.getElementById("restartTutorialBtn"),
  reviewModulesBtn: document.getElementById("reviewModulesBtn"),
  ariaAnnouncer: document.getElementById("ariaAnnouncer")
};

// ============================================
// === CLICK VISUALIZER SYSTEM ===
// ============================================
class ClickVisualizer {
  constructor(container) {
    this.container = container;
    this.spotlight = null;
    this.cursor = null;
    this.arrow = null;
    this.ripples = [];
    this.activeDemo = false;
    this.init();
  }

  init() {
    if (!this.container) return;
    
    // Create visualization elements if they don't exist
    if (!this.container.querySelector('#click-spotlight')) {
      this.spotlight = document.createElement('div');
      this.spotlight.id = 'click-spotlight';
      this.spotlight.className = 'click-spotlight';
      this.container.appendChild(this.spotlight);
    } else {
      this.spotlight = this.container.querySelector('#click-spotlight');
    }

    if (!this.container.querySelector('#click-cursor')) {
      this.cursor = document.createElement('div');
      this.cursor.id = 'click-cursor';
      this.cursor.className = 'click-cursor';
      this.container.appendChild(this.cursor);
    } else {
      this.cursor = this.container.querySelector('#click-cursor');
    }

    if (!this.container.querySelector('#click-arrow')) {
      this.arrow = document.createElement('div');
      this.arrow.id = 'click-arrow';
      this.arrow.className = 'click-arrow';
      this.arrow.style.display = 'none';
      this.container.appendChild(this.arrow);
    } else {
      this.arrow = this.container.querySelector('#click-arrow');
    }
  }

  // Get element position relative to container
  getElementPosition(element) {
    if (!element || !this.container) return null;
    
    const rect = element.getBoundingClientRect();
    const containerRect = this.container.getBoundingClientRect();
    
    return {
      x: rect.left + rect.width/2 - containerRect.left + this.container.scrollLeft,
      y: rect.top + rect.height/2 - containerRect.top + this.container.scrollTop,
      width: rect.width,
      height: rect.height,
      left: rect.left - containerRect.left + this.container.scrollLeft,
      top: rect.top - containerRect.top + this.container.scrollTop
    };
  }

  // Show cursor at element position
  showCursorAt(element, animate = true) {
    if (!this.cursor || !element) return Promise.resolve();
    
    const pos = this.getElementPosition(element);
    if (!pos) return Promise.resolve();
    
    if (animate) {
      this.cursor.style.transition = 'left 0.4s ease, top 0.4s ease';
    } else {
      this.cursor.style.transition = 'none';
    }
    
    this.cursor.style.left = `${pos.x}px`;
    this.cursor.style.top = `${pos.y}px`;
    this.cursor.classList.add('visible');
    
    if (animate) {
      return new Promise(resolve => setTimeout(resolve, 400));
    }
    return Promise.resolve();
  }

  hideCursor() {
    if (this.cursor) {
      this.cursor.classList.remove('visible');
    }
  }

  // Create ripple effect at position
  createRipple(x, y, color = 'rgba(167, 25, 48, 0.3)') {
    if (!this.container) return;
    
    const ripple = document.createElement('div');
    ripple.className = 'click-ripple';
    ripple.style.left = `${x - 10}px`;
    ripple.style.top = `${y - 10}px`;
    ripple.style.width = '20px';
    ripple.style.height = '20px';
    ripple.style.background = color;
    
    this.container.appendChild(ripple);
    this.ripples.push(ripple);
    
    // Cleanup after animation
    setTimeout(() => {
      if (ripple.parentNode) {
        ripple.remove();
      }
      this.ripples = this.ripples.filter(r => r !== ripple);
    }, 600);
  }

  // Create ripple on element click
  createRippleOnElement(element, color = 'rgba(167, 25, 48, 0.3)') {
    const pos = this.getElementPosition(element);
    if (pos) {
      this.createRipple(pos.x, pos.y, color);
    }
  }

  // Spotlight a target element with dimming effect
  spotlightElement(element, message = '') {
    if (!this.spotlight || !element) return;
    
    const pos = this.getElementPosition(element);
    if (!pos) return;
    
    // Show spotlight with cutout effect
    this.spotlight.style.cssText = `
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.5);
      pointer-events: none;
      z-index: 90;
      opacity: 1;
      transition: opacity 0.3s ease;
      mask: radial-gradient(
        circle ${Math.max(pos.width, pos.height)/2 + 10}px at ${pos.x}px ${pos.y}px,
        transparent 0%,
        transparent ${Math.max(pos.width, pos.height)/2}px,
        black ${Math.max(pos.width, pos.height)/2 + 1}px
      );
      -webkit-mask: radial-gradient(
        circle ${Math.max(pos.width, pos.height)/2 + 10}px at ${pos.x}px ${pos.y}px,
        transparent 0%,
        transparent ${Math.max(pos.width, pos.height)/2}px,
        black ${Math.max(pos.width, pos.height)/2 + 1}px
      );
    `;
    
    // Show guidance arrow if message provided
    if (message && this.arrow) {
      this.arrow.innerHTML = `<span>👆 ${message}</span>`;
      this.arrow.style.left = `${pos.x}px`;
      this.arrow.style.top = `${pos.y - 50}px`;
      this.arrow.style.transform = 'translateX(-50%)';
      this.arrow.style.display = 'flex';
      this.arrow.classList.add('visible');
    }
  }

  clearSpotlight() {
    if (this.spotlight) {
      this.spotlight.style.opacity = '0';
      setTimeout(() => {
        this.spotlight.style.cssText = '';
      }, 300);
    }
    if (this.arrow) {
      this.arrow.style.display = 'none';
      this.arrow.classList.remove('visible');
    }
  }

  // Show tooltip near element
  showTooltip(element, text, duration = 3000) {
    if (!element || !text) return;
    
    let tooltip = element.querySelector('.click-tooltip');
    if (!tooltip) {
      tooltip = document.createElement('div');
      tooltip.className = 'click-tooltip';
      element.style.position = 'relative';
      element.appendChild(tooltip);
    }
    
    tooltip.textContent = text;
    tooltip.classList.add('visible');
    
    // Auto-hide
    setTimeout(() => {
      tooltip.classList.remove('visible');
    }, duration);
  }

  // Animate click sequence for demo mode
  async demoClickSequence(elements, messages = [], clickDelay = 1500) {
    if (this.activeDemo) return;
    this.activeDemo = true;
    
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i];
      const message = messages[i] || '';
      
      if (!element) continue;
      
      // Guide user with spotlight and cursor
      this.spotlightElement(element, message);
      await this.showCursorAt(element, true);
      
      // Wait for user attention
      await new Promise(resolve => setTimeout(resolve, clickDelay));
      
      // Simulate click with ripple
      const pos = this.getElementPosition(element);
      if (pos) {
        this.createRipple(pos.x, pos.y, 'rgba(34, 197, 94, 0.4)');
        element.click?.();
      }
      
      // Wait before next step
      await new Promise(resolve => setTimeout(resolve, 800));
      this.clearSpotlight();
      this.hideCursor();
    }
    
    this.activeDemo = false;
  }

  // Add demo button to simulation
  addDemoButton(simulationInstance) {
    if (!this.container) return;
    
    // Remove existing demo button if present
    const existingBtn = this.container.querySelector('.demo-toggle-btn');
    if (existingBtn) existingBtn.remove();
    
    const demoBtn = document.createElement('button');
    demoBtn.className = 'btn ghost demo-toggle-btn';
    demoBtn.innerHTML = '🎬 Watch Demo';
    demoBtn.style.cssText = 'position:absolute;top:10px;right:10px;z-index:100;font-size:12px;padding:6px 12px;';
    
    const simBox = this.container.closest('.simulation-box');
    if (simBox) {
      simBox.style.position = 'relative';
      simBox.appendChild(demoBtn);
    }
    
    demoBtn.addEventListener('click', async () => {
      demoBtn.disabled = true;
      demoBtn.textContent = '▶ Playing...';
      
      const sequence = simulationInstance.getDemoSequence?.();
      if (sequence) {
        const elements = sequence.map(s => 
          this.container.querySelector(`[data-sim-action="${s.action}"]`)
        ).filter(Boolean);
        const messages = sequence.map(s => s.hint || '');
        
        await this.demoClickSequence(elements, messages);
      }
      
      demoBtn.disabled = false;
      demoBtn.textContent = '🎬 Watch Demo';
    });
  }

  // Cleanup
  destroy() {
    this.ripples.forEach(ripple => ripple.remove());
    this.ripples = [];
    this.spotlight?.remove();
    this.cursor?.remove();
    this.arrow?.remove();
  }
}

// ============================================
// === SIMULATION ENGINE BASE CLASS ===
// ============================================
class SimulationEngine {
  constructor(container, config = {}) {
    this.container = container;
    this.config = config;
    this.state = {};
    this.hintsShown = new Set();
    this.onComplete = config.onComplete || (() => {});
    this.visualizer = null;
    this.init();
  }

  init() {
    this.output = this.container?.querySelector("#simOutputArea");
    this.log = this.container?.querySelector("#simLog");
    this.instruction = this.container?.querySelector("#simInstruction");
    this.buttons = [...(this.container?.querySelectorAll(".sim-action") || [])];
    
    // Initialize click visualizer
    const outputContainer = this.container?.querySelector(".sim-output");
    if (outputContainer) {
      this.visualizer = new ClickVisualizer(outputContainer);
    }
    
    this.setupEventListeners();
    this.renderInitialState();
    
    // Add demo button after a short delay
    setTimeout(() => {
      if (this.visualizer) {
        this.visualizer.addDemoButton(this);
      }
    }, 1000);
  }

  highlight(element, type = 'next') {
    if (!element) return;
    const styles = {
      next: { glow: '#667eea', bg: 'rgba(102, 126, 234, 0.1)' },
      success: { glow: '#22c55e', bg: 'rgba(34, 197, 94, 0.1)' },
      warning: { glow: '#f59e0b', bg: 'rgba(245, 158, 11, 0.1)' }
    };
    const style = styles[type];
    element.style.boxShadow = `0 0 0 3px ${style.glow}40, 0 0 20px ${style.glow}60`;
    element.style.background = style.bg;
  }

  clearHighlight(element) {
    if (!element) return;
    element.style.boxShadow = '';
    element.style.background = '';
  }

  createGuidanceArrow(target, message) {
    if (!target || !message || !this.visualizer) return null;
    // Visualizer handles this now
    return null;
  }

  addLogEntry(message, type = 'info') {
    if (!this.log) return;
    const item = document.createElement('li');
    item.className = `sim-log-entry status-${type}`;
    item.textContent = `• ${message}`;
    item.style.opacity = '0';
    item.style.transform = 'translateX(-10px)';
    this.log.appendChild(item);
    this.log.scrollTop = this.log.scrollHeight;
    
    requestAnimationFrame(() => {
      item.style.transition = 'all 0.3s ease';
      item.style.opacity = '1';
      item.style.transform = 'translateX(0)';
    });
  }

  updatePreview(html, options = {}) {
    if (!this.output) return;
    if (options.animate) {
      this.output.style.transition = 'opacity 0.2s ease, transform 0.2s ease';
      this.output.style.opacity = '0.7';
      this.output.style.transform = 'scale(0.99)';
      setTimeout(() => {
        this.output.innerHTML = html;
        this.output.style.opacity = '1';
        this.output.style.transform = 'scale(1)';
        
        // Re-initialize visualizer for new content
        if (this.visualizer) {
          this.visualizer.init();
        }
      }, 150);
    } else {
      this.output.innerHTML = html;
      if (this.visualizer) {
        this.visualizer.init();
      }
    }
  }

  enableNext(button, message) {
    this.buttons.forEach(btn => {
      btn.disabled = !btn.classList.contains('correct');
      btn.classList.remove('next-target');
      this.clearHighlight(btn);
    });
    if (button) {
      button.disabled = false;
      button.classList.add('next-target');
      this.highlight(button, 'next');
      button.focus?.();
      
      // Show visual guidance
      if (this.visualizer && message) {
        setTimeout(() => {
          this.visualizer.spotlightElement(button, message.replace(/<[^>]*>/g, ''));
          this.visualizer.showCursorAt(button);
        }, 300);
      }
    }
    if (this.instruction && message) {
      this.instruction.innerHTML = message;
    }
  }

  markComplete(button) {
    if (!button) return;
    button.classList.add('correct', 'completed');
    button.classList.remove('next-target');
    button.disabled = true;
    this.clearHighlight(button);
    
    // Create success ripple
    if (this.visualizer) {
      this.visualizer.createRippleOnElement(button, 'rgba(34, 197, 94, 0.4)');
    }
    
    button.style.transform = 'scale(1.03)';
    setTimeout(() => {
      button.style.transition = 'transform 0.2s ease';
      button.style.transform = 'scale(1)';
    }, 200);
  }

  showTooltip(element, text) {
    if (!element || !text || this.hintsShown.has(element.dataset.hint)) return;
    if (this.visualizer) {
      this.visualizer.showTooltip(element, text);
    }
    this.hintsShown.add(element.dataset.hint);
  }

  setupEventListeners() {
    this.buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        const action = button.dataset.simAction;
        if (action && !button.disabled) {
          this.handleAction(action, button);
        }
      });
      button.addEventListener('mouseenter', () => {
        if (button.dataset.hint && !button.disabled) {
          this.showTooltip(button, button.dataset.hint);
        }
      });
      button.setAttribute('tabindex', button.disabled ? '-1' : '0');
      button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (!button.disabled) button.click();
        }
      });
    });
  }

  handleAction(action, button) {
    console.log(`Simulation action: ${action}`);
  }

  renderInitialState() {
    // Override in subclasses
  }

  getDemoSequence() {
    // Override in subclasses - return array of {action, hint}
    return [];
  }

  triggerCelebration() {
    const colors = ['#667eea', '#764ba2', '#22c55e', '#f59e0b', '#3b82f6'];
    for (let i = 0; i < 25; i++) {
      const confetti = document.createElement('div');
      confetti.style.cssText = `
        position: fixed;
        width: ${8 + Math.random() * 6}px;
        height: ${8 + Math.random() * 6}px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        border-radius: ${Math.random() > 0.5 ? '50%' : '3px'};
        left: ${Math.random() * 100}vw;
        top: -10px;
        animation: fall ${2 + Math.random() * 2.5}s linear forwards;
        z-index: 1000;
        pointer-events: none;
        opacity: 0.9;
      `;
      document.body.appendChild(confetti);
      setTimeout(() => confetti.remove(), 5000);
    }
    if (!document.querySelector('#confetti-styles')) {
      const style = document.createElement('style');
      style.id = 'confetti-styles';
      style.textContent = `@keyframes fall { to { transform: translateY(100vh) rotate(${360 + Math.random() * 720}deg); opacity: 0; } }`;
      document.head.appendChild(style);
    }
  }

  destroy() {
    if (this.visualizer) {
      this.visualizer.destroy();
    }
  }
}

// ============================================
// === LIBRARY CREATE SIMULATION ===
// ============================================
class LibraryCreateSimulation extends SimulationEngine {
  getDemoSequence() {
    return [
      { action: 'open-endnote', hint: 'Launch EndNote' },
      { action: 'choose-new-library', hint: 'Create new library' },
      { action: 'name-library', hint: 'Confirm library name' },
      { action: 'save-library', hint: 'Save and open' }
    ];
  }

  renderInitialState() {
    this.updatePreview(`
      <div class="app-mockup">
        <div class="app-titlebar">
          <div class="window-controls">
            <span class="control-dot close"></span>
            <span class="control-dot minimize"></span>
            <span class="control-dot maximize"></span>
          </div>
          <span class="app-icon" style="background:var(--primary)">EN</span>
          <span class="app-name">EndNote 2025</span>
        </div>
        
        <div class="app-content" style="text-align:center;padding:40px 20px;">
          <div style="font-size:3rem;margin-bottom:16px;">📚</div>
          <h3 style="margin:0 0 8px;font-size:1.3rem;">Welcome to EndNote</h3>
          <p style="color:var(--muted);margin:0 0 24px;font-size:0.95rem;">Choose an option to begin</p>
          
          <div style="display:grid;gap:12px;max-width:450px;margin:0 auto;">
            <button class="sim-action ribbon-btn" 
                    data-sim-action="choose-new-library"
                    style="width:100%;justify-content:start;gap:12px;background:#e8f4fd;border-color:#7eb4e7;padding:14px 18px;">
              <span class="btn-icon" style="background:var(--primary);color:white;font-size:16px;">✨</span>
              <div style="text-align:left;">
                <strong style="display:block;color:var(--text);">Create a New Library</strong>
                <small style="color:var(--muted);font-weight:400;">Start fresh for your project</small>
              </div>
            </button>
            
            <button class="sim-action ribbon-btn disabled" 
                    data-sim-action="open-existing"
                    style="width:100%;justify-content:start;gap:12px;opacity:0.5;padding:14px 18px;">
              <span class="btn-icon" style="font-size:16px;">📁</span>
              <div style="text-align:left;">
                <strong style="display:block;color:var(--text);">Open an Existing Library</strong>
                <small style="color:var(--muted);font-weight:400;">Continue working</small>
              </div>
            </button>
          </div>
        </div>
      </div>
    `, { animate: true });
    
    this.addLogEntry("EndNote 2025 launched", 'info');
    
    const btn = this.buttons.find(b => b.dataset.simAction === 'choose-new-library');
    this.enableNext(btn, 'Click <strong>Create a New Library</strong> to begin');
  }

  handleAction(action, button) {
    const actions = {
      'open-endnote': () => this.stepOpenEndNote(button),
      'choose-new-library': () => this.stepCreateLibrary(button),
      'name-library': () => this.stepNameLibrary(button),
      'save-library': () => this.stepSaveLibrary(button)
    };
    if (actions[action]) actions[action]();
  }

  stepOpenEndNote(button) {
    this.markComplete(button);
    this.addLogEntry("✓ EndNote application opened", 'success');
    
    this.updatePreview(`
      <div class="app-mockup">
        <div class="app-titlebar">
          <div class="window-controls">
            <span class="control-dot close"></span>
            <span class="control-dot minimize"></span>
            <span class="control-dot maximize"></span>
          </div>
          <span class="app-icon" style="background:var(--primary)">EN</span>
          <span class="app-name">EndNote 2025</span>
        </div>
        
        <div class="app-content" style="text-align:center;padding:40px 20px;">
          <div style="font-size:3rem;margin-bottom:16px;">👋</div>
          <h3 style="margin:0 0 8px;">Welcome to EndNote</h3>
          <p style="color:var(--muted);margin:0 0 24px;">What would you like to do?</p>
          
          <div style="display:grid;gap:12px;max-width:450px;margin:0 auto;">
            <button class="sim-action ribbon-btn" 
                    data-sim-action="choose-new-library"
                    style="width:100%;justify-content:start;gap:12px;background:#e8f4fd;border-color:#7eb4e7;padding:14px 18px;">
              <span class="btn-icon" style="background:var(--primary);color:white;font-size:16px;">✨</span>
              <div style="text-align:left;">
                <strong style="display:block;">Create a New Library</strong>
                <small style="color:var(--muted);font-weight:400;">Start fresh</small>
              </div>
            </button>
            
            <button class="sim-action ribbon-btn disabled" 
                    style="width:100%;justify-content:start;gap:12px;opacity:0.5;padding:14px 18px;">
              <span class="btn-icon" style="font-size:16px;">📁</span>
              <div style="text-align:left;">
                <strong style="display:block;">Open an Existing Library</strong>
                <small style="color:var(--muted);font-weight:400;">Continue working</small>
              </div>
            </button>
          </div>
        </div>
      </div>
    `, { animate: true });
    
    const btn = this.buttons.find(b => b.dataset.simAction === 'choose-new-library');
    this.enableNext(btn, 'Great! Now click <strong>Create a New Library</strong>');
  }

  stepCreateLibrary(button) {
    this.markComplete(button);
    this.addLogEntry("✓ 'Create New Library' selected", 'success');
    
    this.updatePreview(`
      <div class="app-mockup">
        <div class="app-titlebar">
          <div class="window-controls">
            <span class="control-dot close"></span>
            <span class="control-dot minimize"></span>
            <span class="control-dot maximize"></span>
          </div>
          <span class="app-icon" style="background:var(--primary)">EN</span>
          <span class="app-name">New Library</span>
        </div>
        
        <div style="padding:24px;">
          <div style="margin-bottom:20px;">
            <label style="display:block;font-weight:600;margin-bottom:8px;color:var(--text);">File name:</label>
            <input type="text" class="sim-input" 
                   value="MyResearch.enl"
                   data-sim-action="name-library"
                   readonly
                   style="width:100%;padding:12px;border:2px solid #7eb4e7;border-radius:6px;font-size:14px;background:#f8fafc;">
            <small class="helper" style="display:block;margin-top:6px;color:var(--muted);">💡 Tip: Use a descriptive name for your project</small>
          </div>
          
          <div style="margin-bottom:24px;">
            <label style="display:block;font-weight:600;margin-bottom:8px;color:var(--text);">Save in:</label>
            <div style="padding:12px;background:#f8fafc;border:1px solid #e0e4e9;border-radius:6px;font-family:monospace;font-size:13px;color:var(--muted);">
              📁 Documents/EndNote Libraries/
            </div>
          </div>
          
          <div style="display:flex;justify-content:flex-end;gap:10px;">
            <button class="btn ghost" style="padding:10px 20px;">Cancel</button>
            <button class="btn primary sim-action" 
                    data-sim-action="save-library"
                    style="background:var(--primary);color:white;padding:10px 24px;border:none;border-radius:6px;font-weight:600;">
              Create Library
            </button>
          </div>
        </div>
      </div>
    `, { animate: true });
    
    const btn = this.buttons.find(b => b.dataset.simAction === 'save-library');
    this.enableNext(btn, 'Click <strong>Create Library</strong> to save');
  }

  stepNameLibrary(button) {
    this.markComplete(button);
    this.addLogEntry("✓ Library named: MyResearch.enl", 'success');
    
    const saveBtn = this.buttons.find(b => b.dataset.simAction === 'save-library');
    this.enableNext(saveBtn, 'Almost done! Click <strong>Create Library</strong>');
  }

  stepSaveLibrary(button) {
    this.markComplete(button);
    this.addLogEntry("✓ Library created and opened!", 'success');
    this.triggerCelebration();
    
    this.updatePreview(`
      <div class="app-mockup">
        <div class="app-titlebar">
          <div class="window-controls">
            <span class="control-dot close"></span>
            <span class="control-dot minimize"></span>
            <span class="control-dot maximize"></span>
          </div>
          <span class="app-icon" style="background:var(--primary)">EN</span>
          <span class="app-name">MyResearch.enl - EndNote 2025</span>
        </div>
        
        <div class="app-ribbon">
          <span class="ribbon-tab active">References</span>
          <span class="ribbon-tab">Groups</span>
          <span class="ribbon-tab">Tools</span>
          
          <div class="ribbon-group">
            <button class="ribbon-btn" style="opacity:0.5;">
              <span class="btn-icon">➕</span>
              <span>New</span>
            </button>
            <button class="ribbon-btn" style="opacity:0.5;">
              <span class="btn-icon">📥</span>
              <span>Import</span>
            </button>
          </div>
        </div>
        
        <div class="endnote-library" style="display:grid;grid-template-columns:180px 1fr;min-height:250px;">
          <div class="en-sidebar" style="background:#f8f9fa;padding:12px 8px;border-right:1px solid #e0e4e9;">
            <div class="en-sidebar-item active" style="display:flex;align-items:center;gap:8px;padding:8px 12px;border-radius:4px;background:#e8f4fd;color:var(--primary);">
              <span class="icon">📋</span> All References
            </div>
            <div class="en-sidebar-item" style="display:flex;align-items:center;gap:8px;padding:8px 12px;border-radius:4px;margin-top:4px;">
              <span class="icon">📁</span> My Groups
            </div>
            <div class="en-sidebar-item" style="display:flex;align-items:center;gap:8px;padding:8px 12px;border-radius:4px;margin-top:4px;">
              <span class="icon">🗑️</span> Trash
            </div>
          </div>
          
          <div class="en-main" style="background:white;padding:24px;text-align:center;">
            <div style="font-size:3rem;margin-bottom:12px;opacity:0.5;">📭</div>
            <h4 style="margin:0 0 8px;color:var(--text);">Library Ready!</h4>
            <p style="color:var(--muted);margin:0 0 16px;">Your library is ready for references</p>
            <div style="display:inline-flex;gap:8px;">
              <span class="sim-pill status-success">✅ 0 References</span>
              <span class="sim-pill">📁 My Groups</span>
            </div>
          </div>
        </div>
      </div>
    `, { animate: true });
    
    if (this.instruction) {
      this.instruction.innerHTML = '🎉 <strong>Perfect!</strong> You\'ve created your first EndNote library. Review the preview, then continue.';
      this.instruction.className = 'sim-instruction success';
    }
    
    if (this.visualizer) {
      this.visualizer.clearSpotlight();
      this.visualizer.hideCursor();
    }
    
    this.onComplete();
  }
}

// ============================================
// === WORD CITATION SIMULATION ===
// ============================================
class WordCitationSimulation extends SimulationEngine {
  getDemoSequence() {
    return [
      { action: 'open-word', hint: 'Open Word document' },
      { action: 'open-endnote-tab', hint: 'Activate EndNote tab' },
      { action: 'insert-citation', hint: 'Insert citation' },
      { action: 'show-bibliography', hint: 'Generate bibliography' }
    ];
  }

  renderInitialState() {
    this.updatePreview(`
      <div class="app-mockup">
        <div class="app-titlebar">
          <div class="window-controls">
            <span class="control-dot close"></span>
            <span class="control-dot minimize"></span>
            <span class="control-dot maximize"></span>
          </div>
          <span class="app-icon" style="background:#2b579a">W</span>
          <span class="app-name">research-paper.docx - Word</span>
        </div>
        
        <div class="app-ribbon">
          <span class="ribbon-tab">Home</span>
          <span class="ribbon-tab">Insert</span>
          <span class="ribbon-tab">EndNote 2025</span>
        </div>
        
        <div class="app-content" style="background:#f3f3f3;padding:24px;">
          <div class="word-page" style="max-width:600px;margin:0 auto;background:white;border:1px solid #d0d4d9;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.1);padding:50px 60px;font-family:'Times New Roman',serif;font-size:12pt;line-height:1.6;">
            <p style="margin:0 0 16px;">This is a research sentence waiting for a citation<span style="opacity:0.4">[?]</span>.</p>
            <p style="color:var(--muted);font-size:10pt;margin-top:40px;">Click <strong>Open Word</strong> to begin the simulation.</p>
          </div>
        </div>
      </div>
    `, { animate: true });
    
    this.addLogEntry("Word document ready", 'info');
    
    const btn = this.buttons.find(b => b.dataset.simAction === 'open-word');
    this.enableNext(btn, 'Click <strong>Open Word</strong> to begin');
  }

  handleAction(action, button) {
    const actions = {
      'open-word': () => this.stepOpenWord(button),
      'open-endnote-tab': () => this.stepOpenTab(button),
      'insert-citation': () => this.stepInsertCitation(button),
      'show-bibliography': () => this.stepShowBibliography(button)
    };
    if (actions[action]) actions[action]();
  }

  stepOpenWord(button) {
    this.markComplete(button);
    this.addLogEntry("✓ Word document opened", 'success');
    
    this.updatePreview(`
      <div class="app-mockup">
        <div class="app-titlebar">
          <div class="window-controls">
            <span class="control-dot close"></span>
            <span class="control-dot minimize"></span>
            <span class="control-dot maximize"></span>
          </div>
          <span class="app-icon" style="background:#2b579a">W</span>
          <span class="app-name">research-paper.docx - Word</span>
        </div>
        
        <div class="app-ribbon">
          <span class="ribbon-tab">Home</span>
          <span class="ribbon-tab">Insert</span>
          <span class="ribbon-tab" style="opacity:0.6;">EndNote 2025 ▼</span>
        </div>
        
        <div class="app-content" style="background:#f3f3f3;padding:24px;">
          <div class="word-page" style="max-width:600px;margin:0 auto;background:white;border:1px solid #d0d4d9;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.1);padding:50px 60px;font-family:'Times New Roman',serif;font-size:12pt;line-height:1.6;">
            <p style="margin:0 0 16px;">This is a research sentence waiting for a citation<span style="opacity:0.4">[?]</span>.</p>
          </div>
        </div>
      </div>
    `, { animate: true });
    
    const btn = this.buttons.find(b => b.dataset.simAction === 'open-endnote-tab');
    this.enableNext(btn, 'Now click <strong>Open EndNote Tab</strong>');
  }

  stepOpenTab(button) {
    this.markComplete(button);
    this.addLogEntry("✓ EndNote tab activated", 'success');
    
    this.updatePreview(`
      <div class="app-mockup">
        <div class="app-titlebar">
          <div class="window-controls">
            <span class="control-dot close"></span>
            <span class="control-dot minimize"></span>
            <span class="control-dot maximize"></span>
          </div>
          <span class="app-icon" style="background:#2b579a">W</span>
          <span class="app-name">research-paper.docx - Word</span>
        </div>
        
        <div class="app-ribbon" style="background:#e8f4fd;border-bottom-color:#7eb4e7;">
          <span class="ribbon-tab">Home</span>
          <span class="ribbon-tab">Insert</span>
          <span class="ribbon-tab active" style="background:white;border-color:#7eb4e7;color:var(--primary);">EndNote 2025</span>
          
          <div class="ribbon-group" style="margin-left:16px;">
            <button class="ribbon-btn" style="opacity:0.6;">
              <span class="btn-icon">🔍</span>
              <span>Insert Citation</span>
            </button>
            <button class="ribbon-btn" style="opacity:0.6;">
              <span class="btn-icon">📋</span>
              <span>Style: APA 7th</span>
            </button>
          </div>
        </div>
        
        <div class="app-content" style="background:#f3f3f3;padding:24px;">
          <div class="word-page" style="max-width:600px;margin:0 auto;background:white;border:1px solid #d0d4d9;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.1);padding:50px 60px;font-family:'Times New Roman',serif;font-size:12pt;line-height:1.6;">
            <p style="margin:0 0 16px;">This is a research sentence waiting for a citation<span style="opacity:0.4">[?]</span>.</p>
          </div>
        </div>
      </div>
    `, { animate: true });
    
    const btn = this.buttons.find(b => b.dataset.simAction === 'insert-citation');
    this.enableNext(btn, 'Click <strong>Insert Citation</strong>');
  }

  stepInsertCitation(button) {
    this.markComplete(button);
    this.addLogEntry("✓ Citation inserted: (Smith, 2020)", 'success');
    
    this.updatePreview(`
      <div class="app-mockup">
        <div class="app-titlebar">
          <div class="window-controls">
            <span class="control-dot close"></span>
            <span class="control-dot minimize"></span>
            <span class="control-dot maximize"></span>
          </div>
          <span class="app-icon" style="background:#2b579a">W</span>
          <span class="app-name">research-paper.docx - Word</span>
        </div>
        
        <div class="app-ribbon" style="background:#e8f4fd;border-bottom-color:#7eb4e7;">
          <span class="ribbon-tab">Home</span>
          <span class="ribbon-tab">Insert</span>
          <span class="ribbon-tab active" style="background:white;border-color:#7eb4e7;color:var(--primary);">EndNote 2025</span>
          
          <div class="ribbon-group" style="margin-left:16px;">
            <button class="ribbon-btn" style="opacity:0.6;">
              <span class="btn-icon">🔍</span>
              <span>Insert Citation</span>
            </button>
            <button class="ribbon-btn" style="opacity:0.6;">
              <span class="btn-icon">📋</span>
              <span>Style: APA 7th</span>
            </button>
          </div>
        </div>
        
        <div class="app-content" style="background:#f3f3f3;padding:24px;">
          <div class="word-page" style="max-width:600px;margin:0 auto;background:white;border:1px solid #d0d4d9;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.1);padding:50px 60px;font-family:'Times New Roman',serif;font-size:12pt;line-height:1.6;">
            <p style="margin:0 0 16px;">This is a research sentence <span style="background:#e8f4fd;padding:2px 6px;border-radius:3px;color:var(--primary);font-weight:600;">(Smith, 2020)</span> that now includes an in-text citation.</p>
            <div style="margin-top:24px;padding:12px;background:#f0fdf4;border:1px solid #86efac;border-radius:6px;">
              <span style="color:#166534;font-weight:600;">✓ Citation formatted</span>
              <span style="color:var(--muted);margin-left:12px;">Bibliography pending</span>
            </div>
          </div>
        </div>
      </div>
    `, { animate: true });
    
    const btn = this.buttons.find(b => b.dataset.simAction === 'show-bibliography');
    this.enableNext(btn, 'Finally, click <strong>Show Bibliography</strong>');
  }

  stepShowBibliography(button) {
    this.markComplete(button);
    this.addLogEntry("✓ Bibliography generated", 'success');
    
    this.updatePreview(`
      <div class="app-mockup">
        <div class="app-titlebar">
          <div class="window-controls">
            <span class="control-dot close"></span>
            <span class="control-dot minimize"></span>
            <span class="control-dot maximize"></span>
          </div>
          <span class="app-icon" style="background:#2b579a">W</span>
          <span class="app-name">research-paper.docx - Word</span>
        </div>
        
        <div class="app-ribbon" style="background:#e8f4fd;border-bottom-color:#7eb4e7;">
          <span class="ribbon-tab">Home</span>
          <span class="ribbon-tab">Insert</span>
          <span class="ribbon-tab active" style="background:white;border-color:#7eb4e7;color:var(--primary);">EndNote 2025</span>
        </div>
        
        <div class="app-content" style="background:#f3f3f3;padding:24px;">
          <div class="word-page" style="max-width:600px;margin:0 auto;background:white;border:1px solid #d0d4d9;border-radius:2px;box-shadow:0 1px 3px rgba(0,0,0,0.1);padding:50px 60px;font-family:'Times New Roman',serif;font-size:12pt;line-height:1.6;">
            <p style="margin:0 0 16px;">This is a research sentence <span style="background:#e8f4fd;padding:2px 6px;border-radius:3px;color:var(--primary);font-weight:600;">(Smith, 2020)</span> that now includes an in-text citation.</p>
            
            <div style="margin-top:48px;padding-top:24px;border-top:2px solid var(--primary);">
              <p style="font-weight:700;color:var(--primary);margin:0 0 12px;">References</p>
              <p style="margin:0;padding-left:24px;text-indent:-24px;">
                Smith, J. (2020). <em>Introduction to Research Writing</em>. Academic Press.
              </p>
            </div>
            
            <div style="margin-top:24px;padding:12px;background:#f0fdf4;border:1px solid #86efac;border-radius:6px;text-align:center;">
              <span style="color:#166534;font-weight:600;">🎉 Bibliography Complete!</span>
            </div>
          </div>
        </div>
      </div>
    `, { animate: true });
    
    if (this.instruction) {
      this.instruction.innerHTML = '🎉 <strong>Excellent!</strong> You\'ve inserted a citation and generated a bibliography.';
      this.instruction.className = 'sim-instruction success';
    }
    
    this.triggerCelebration();
    
    if (this.visualizer) {
      this.visualizer.clearSpotlight();
      this.visualizer.hideCursor();
    }
    
    this.onComplete();
  }
}

// ============================================
// === SIMULATION MARKUP GENERATOR ===
// ============================================
function getSimulationMarkup(simulation) {
  if (!simulation) return "";

  if (simulation.type === "libraryCreate") {
    return `
      <div class="simulation-box">
        <h4>✨ Interactive demo: create a library</h4>
        <p>Click through the same order a real beginner would follow in EndNote. Follow the glowing button and cursor!</p>
        <div class="sim-instruction" id="simInstruction" role="status">Start here: click <strong>Open EndNote</strong>.</div>
        <div class="sim-toolbar">
          <button type="button" class="btn secondary sim-action" data-sim-action="open-endnote" data-hint="Launch the EndNote application">Open EndNote</button>
          <button type="button" class="btn secondary sim-action" data-sim-action="choose-new-library" data-hint="Start creating a new library file">Create New Library</button>
          <button type="button" class="btn secondary sim-action" data-sim-action="name-library" data-hint="Confirm the library name">Name Library</button>
          <button type="button" class="btn secondary sim-action" data-sim-action="save-library" data-hint="Save and open your new library">Save Library</button>
        </div>
        <div class="sim-output">
          <div class="sim-window">
            <div class="sim-window-bar">
              <span class="sim-dot red"></span><span class="sim-dot yellow"></span><span class="sim-dot green"></span>
              <span>EndNote preview</span>
            </div>
            <div class="sim-content" id="simOutputArea">
              <p style="text-align:center;color:var(--muted);padding:20px;">Select <strong>Open EndNote</strong> to begin the guided walkthrough.</p>
            </div>
          </div>
          <ol class="sim-log" id="simLog" aria-label="Action history"></ol>
        </div>
      </div>
    `;
  }

  if (simulation.type === "wordCitation") {
    return `
      <div class="simulation-box">
        <h4>✨ Interactive demo: insert a citation in Word</h4>
        <p>Practice the Cite While You Write workflow. Follow the highlighted button and cursor!</p>
        <div class="sim-instruction" id="simInstruction" role="status">Start here: click <strong>Open Word</strong>.</div>
        <div class="sim-toolbar">
          <button type="button" class="btn secondary sim-action" data-sim-action="open-word" data-hint="Open Microsoft Word">Open Word</button>
          <button type="button" class="btn secondary sim-action" data-sim-action="open-endnote-tab" data-hint="Activate the EndNote ribbon tab">Open EndNote Tab</button>
          <button type="button" class="btn secondary sim-action" data-sim-action="insert-citation" data-hint="Search and insert a reference">Insert Citation</button>
          <button type="button" class="btn secondary sim-action" data-sim-action="show-bibliography" data-hint="Generate the references list">Show Bibliography</button>
        </div>
        <div class="sim-output">
          <div class="sim-window">
            <div class="sim-window-bar">
              <span class="sim-dot red"></span><span class="sim-dot yellow"></span><span class="sim-dot green"></span>
              <span>Word document preview</span>
            </div>
            <div class="sim-content" id="simOutputArea">
              <p style="text-align:center;color:var(--muted);padding:20px;">Click <strong>Open Word</strong> to begin the simulation.</p>
            </div>
          </div>
          <ol class="sim-log" id="simLog" aria-label="Action history"></ol>
        </div>
      </div>
    `;
  }
  return "";
}

// ============================================
// === STEP RENDERING ===
// ============================================
function renderStep() {
  const module = modules[state.activeModule];
  const step = module?.steps[state.activeStep];
  if (!module || !step) return;

  state.currentQuizPassed = !step.quiz;

  // Update header info
  if (el.moduleCounter) el.moduleCounter.textContent = `Module ${module.id} of ${modules.length}`;
  if (el.stageEyebrow) el.stageEyebrow.textContent = `Module ${module.id}`;
  if (el.stageTitle) el.stageTitle.textContent = module.title;
  if (el.stageDescription) el.stageDescription.textContent = module.description;
  if (el.stageStepCount) el.stageStepCount.textContent = `Step ${state.activeStep + 1} of ${module.steps.length}`;
  if (el.stageStatus) el.stageStatus.textContent = isModuleComplete(state.activeModule) ? "Completed" : "In progress";
  if (el.practiceTask) el.practiceTask.textContent = module.practice;
  if (el.keyTakeaway) el.keyTakeaway.textContent = module.takeaway;

  // Module progress
  const modulePercent = Math.round(((state.activeStep + 1) / module.steps.length) * 100);
  if (el.moduleProgressLabel) el.moduleProgressLabel.textContent = `Step ${state.activeStep + 1}`;
  if (el.moduleProgressFill) el.moduleProgressFill.style.width = `${modulePercent}%`;
  if (el.moduleProgressText) el.moduleProgressText.textContent = `${state.activeStep + 1} of ${module.steps.length} steps viewed`;

  // List markup
  let listMarkup = "";
  if (step.list?.length) {
    const tag = step.listType === "ol" ? "ol" : "ul";
    listMarkup = `<${tag}>${step.list.map(item => `<li>${item}</li>`).join("")}</${tag}>`;
  }

  // Quiz markup
  let quizMarkup = "";
  if (step.quiz) {
    quizMarkup = `
      <div class="quiz-box" role="region" aria-label="Knowledge check">
        <strong>${step.quiz.question}</strong>
        <div class="quiz-options" role="radiogroup">
          ${step.quiz.options.map((option, i) => 
            `<button type="button" class="option-btn" role="radio" aria-checked="false" data-index="${i}">${option}</button>`
          ).join("")}
        </div>
        <button type="button" class="btn secondary" id="checkAnswerBtn">Check answer</button>
        <div class="feedback" id="quizFeedback" role="status" aria-live="polite"></div>
        <div class="quiz-lock-note">✓ Correct answer required to continue</div>
      </div>
    `;
  }

  // Render step card
  if (el.stepCard) {
    el.stepCard.innerHTML = `
      <span class="step-label">Guided step</span>
      <h3>${step.title}</h3>
      <p>${step.body}</p>
      ${listMarkup}
      ${step.callout ? `<div class="callout">💡 ${step.callout}</div>` : ""}
      ${getSimulationMarkup(step.simulation)}
      ${quizMarkup}
    `;
  }

  // Navigation buttons
  const prevDisabled = state.activeStep === 0;
  if (el.prevStepBtn) {
    el.prevStepBtn.disabled = prevDisabled;
    el.prevStepBtn.setAttribute('aria-disabled', prevDisabled);
  }

  if (el.nextStepBtn) {
    const isLastModule = state.activeModule === modules.length - 1;
    const isLastStep = state.activeStep === module.steps.length - 1;
    
    if (isLastStep && isLastModule) {
      el.nextStepBtn.textContent = "Finish tutorial 🎉";
    } else if (isLastStep) {
      el.nextStepBtn.textContent = "Complete module ✓";
    } else {
      el.nextStepBtn.textContent = "Next step →";
    }

    if (step.quiz) {
      el.nextStepBtn.disabled = true;
      el.nextStepBtn.setAttribute('aria-disabled', 'true');
    } else {
      el.nextStepBtn.disabled = false;
      el.nextStepBtn.setAttribute('aria-disabled', 'false');
    }
  }

  // Attach handlers
  attachQuizHandlers(step);
  attachSimulationHandlers(step);
  
  // Track progress
  setStepStatus(state.activeModule, state.activeStep, { viewed: true, viewedAt: Date.now() });
  setLastLocation(state.activeModule, state.activeStep);
  
  // Announce for screen readers
  announce(`Step ${state.activeStep + 1}: ${step.title}`);
}

// ============================================
// === QUIZ HANDLERS ===
// ============================================
function attachQuizHandlers(step) {
  if (!step.quiz || !el.stepCard) return;

  const optionButtons = el.stepCard.querySelectorAll(".option-btn");
  const checkButton = el.stepCard.querySelector("#checkAnswerBtn");
  const feedback = el.stepCard.querySelector("#quizFeedback");
  let selectedIndex = null;

  optionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      optionButtons.forEach(item => {
        item.classList.remove("selected");
        item.setAttribute("aria-checked", "false");
      });
      btn.classList.add("selected");
      btn.setAttribute("aria-checked", "true");
      selectedIndex = Number(btn.dataset.index);
      if (feedback) {
        feedback.textContent = "";
        feedback.removeAttribute("style");
      }
    });
    
    btn.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        btn.click();
      }
    });
  });

  if (checkButton) {
    checkButton.addEventListener("click", () => {
      if (!feedback) return;

      if (selectedIndex === null) {
        feedback.textContent = "Please choose an answer first.";
        feedback.style.color = "#b45309";
        feedback.style.background = "#fffbeb";
        announce("Please select an answer");
        return;
      }

      optionButtons.forEach(item => item.classList.remove("correct", "incorrect"));
      const correctIndex = step.quiz.correctIndex;
      const selectedButton = [...optionButtons].find(btn => Number(btn.dataset.index) === selectedIndex);
      const correctButton = [...optionButtons].find(btn => Number(btn.dataset.index) === correctIndex);

      if (selectedIndex === correctIndex) {
        if (selectedButton) {
          selectedButton.classList.add("correct");
          selectedButton.setAttribute("aria-checked", "true");
        }
        feedback.textContent = `✓ ${step.quiz.feedback}`;
        feedback.style.color = "#166534";
        feedback.style.background = "#f0fdf4";
        state.currentQuizPassed = true;
        setStepStatus(state.activeModule, state.activeStep, { quizPassed: true });
        
        if (el.nextStepBtn) {
          el.nextStepBtn.disabled = false;
          el.nextStepBtn.setAttribute('aria-disabled', 'false');
        }
        announce("Correct! You can now continue.");
      } else {
        if (selectedButton) selectedButton.classList.add("incorrect");
        if (correctButton) {
          correctButton.classList.add("correct");
          correctButton.setAttribute("aria-checked", "true");
        }
        feedback.textContent = `✗ ${step.quiz.retryHint || "Review the step and try again."}`;
        feedback.style.color = "#991b1b";
        feedback.style.background = "#fef2f2";
        state.currentQuizPassed = false;
        setStepStatus(state.activeModule, state.activeStep, { quizPassed: false });
        
        if (el.nextStepBtn) {
          el.nextStepBtn.disabled = true;
          el.nextStepBtn.setAttribute('aria-disabled', 'true');
        }
        announce("Not quite. Review and try again.");
      }
    });
  }
}

// ============================================
// === SIMULATION HANDLERS ===
// ============================================
function attachSimulationHandlers(step) {
  if (!step.simulation || !el.stepCard) return;

  const simContainer = el.stepCard.querySelector('.simulation-box');
  if (!simContainer) return;

  const simulations = {
    libraryCreate: LibraryCreateSimulation,
    wordCitation: WordCitationSimulation
  };
  
  const SimClass = simulations[step.simulation.type];
  if (SimClass) {
    // Clean up previous simulation if exists
    if (simContainer._simulation?.destroy) {
      simContainer._simulation.destroy();
    }
    
    // Initialize new simulation
    simContainer._simulation = new SimClass(simContainer, {
      onComplete: () => {
        setStepStatus(state.activeModule, state.activeStep, { simulationCompleted: true });
      }
    });
  }
}

// ============================================
// === SCREEN MANAGEMENT ===
// ============================================
function showScreen(screenName) {
  const screens = {
    welcome: el.welcomeScreen,
    overview: el.moduleOverview,
    training: el.trainingScreen,
    completion: el.completionScreen
  };
  
  Object.values(screens).forEach(screen => {
    if (!screen) return;
    screen.classList.add("hidden");
    screen.classList.remove("active-screen");
  });

  const target = screens[screenName];
  if (target) {
    target.classList.remove("hidden");
    target.classList.add("active-screen");
    const focusable = target.querySelector('button:not(:disabled), [tabindex="0"]');
    focusable?.focus?.();
  }
}

function showTraining() {
  showScreen("training");
}

// ============================================
// === RENDER ALL ===
// ============================================
function renderAll() {
  updateOverallProgress();
  renderSidebarModules();
  renderOverview();
  renderStep();
}

// ============================================
// === NAVIGATION ===
// ============================================
function advanceStep() {
  const currentStep = modules[state.activeModule]?.steps[state.activeStep];
  if (currentStep?.quiz && !state.currentQuizPassed) {
    announce("Please answer the question correctly to continue");
    return;
  }

  const module = modules[state.activeModule];
  const isLastStep = state.activeStep === module.steps.length - 1;

  if (!isLastStep) {
    state.activeStep += 1;
    renderAll();
    return;
  }

  setModuleComplete(state.activeModule);
  announce(`Module ${module.id} completed!`);

  if (state.activeModule === modules.length - 1) {
    updateOverallProgress();
    renderSidebarModules();
    showScreen("completion");
    triggerCelebration();
    return;
  }

  state.activeModule += 1;
  state.activeStep = 0;
  renderAll();
}

function triggerCelebration() {
  const colors = ['#a71930', '#667eea', '#22c55e', '#f59e0b'];
  for (let i = 0; i < 40; i++) {
    const confetti = document.createElement('div');
    confetti.style.cssText = `
      position: fixed;
      width: ${10 + Math.random() * 8}px;
      height: ${10 + Math.random() * 8}px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: ${Math.random() > 0.5 ? '50%' : '4px'};
      left: ${Math.random() * 100}vw;
      top: -15px;
      animation: fall ${3 + Math.random() * 2}s linear forwards;
      z-index: 2000;
      pointer-events: none;
      opacity: 0.95;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
    `;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 6000);
  }
}

function resumeTutorial() {
  const last = state.progress.lastLocation;
  if (last && Number.isInteger(last.moduleIndex) && Number.isInteger(last.stepIndex)) {
    state.activeModule = Math.min(last.moduleIndex, modules.length - 1);
    state.activeStep = Math.min(last.stepIndex, modules[state.activeModule]?.steps.length - 1 || 0);
    announce("Resuming from your last position");
  }
  showTraining();
  renderAll();
}

function resetProgress() {
  if (!confirm("Reset all progress? This cannot be undone.")) return;
  
  localStorage.removeItem(storageKey);
  state.progress = {};
  state.activeModule = 0;
  state.activeStep = 0;
  state.currentQuizPassed = false;
  showScreen("welcome");
  renderAll();
  announce("Progress reset. Welcome back!");
}

// ============================================
// === PERSISTENCE ===
// ============================================
function saveProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(state.progress));
  } catch (e) {
    console.warn("Could not save progress:", e);
  }
}

function getModuleKey(moduleIndex) { return `module_${moduleIndex}`; }
function getStepKey(moduleIndex, stepIndex) { return `module_${moduleIndex}_step_${stepIndex}`; }

function isModuleComplete(moduleIndex) {
  return Boolean(state.progress[getModuleKey(moduleIndex)]?.completed);
}

function setModuleComplete(moduleIndex) {
  const key = getModuleKey(moduleIndex);
  state.progress[key] = { ...(state.progress[key] || {}), completed: true };
  saveProgress();
}

function setStepStatus(moduleIndex, stepIndex, patch) {
  const key = getStepKey(moduleIndex, stepIndex);
  state.progress[key] = { ...(state.progress[key] || {}), ...patch };
  saveProgress();
}

function setLastLocation(moduleIndex, stepIndex) {
  state.progress.lastLocation = { moduleIndex, stepIndex };
  saveProgress();
}

function getCompletedCount() {
  return modules.filter((_, index) => isModuleComplete(index)).length;
}

// ============================================
// === PROGRESS UI ===
// ============================================
function updateOverallProgress() {
  const completed = getCompletedCount();
  const total = modules.length;
  const percent = Math.round((completed / total) * 100);

  if (el.progressPercent) el.progressPercent.textContent = `${percent}%`;
  if (el.progressFill) el.progressFill.style.width = `${percent}%`;
  if (el.progressText) el.progressText.textContent = `${completed} of ${total} modules completed`;
}

function renderSidebarModules() {
  if (!el.moduleList) return;
  el.moduleList.innerHTML = "";

  modules.forEach((module, index) => {
    const item = document.createElement("button");
    item.type = "button";
    item.className = `module-item ${index === state.activeModule ? "active" : ""} ${isModuleComplete(index) ? "complete" : ""}`;
    item.innerHTML = `
      <strong>Module ${module.id}: ${module.title}</strong>
      <small>${module.description}</small>
    `;
    item.addEventListener("click", () => {
      state.activeModule = index;
      state.activeStep = 0;
      showTraining();
      renderAll();
      announce(`Navigated to Module ${module.id}: ${module.title}`);
    });
    el.moduleList.appendChild(item);
  });
}

function renderOverview() {
  if (!el.overviewGrid) return;
  el.overviewGrid.innerHTML = "";

  modules.forEach((module, index) => {
    const card = document.createElement("article");
    card.className = `overview-card ${isModuleComplete(index) ? "complete" : ""}`;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.innerHTML = `
      <p class="eyebrow">Module ${module.id}</p>
      <h3>${module.title}</h3>
      <p>${module.description}</p>
    `;
    const navigate = () => {
      state.activeModule = index;
      state.activeStep = 0;
      showTraining();
      renderAll();
      announce(`Starting Module ${module.id}: ${module.title}`);
    };
    card.addEventListener("click", navigate);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        navigate();
      }
    });
    el.overviewGrid.appendChild(card);
  });
}

// ============================================
// === ACCESSIBILITY ===
// ============================================
function announce(message) {
  if (el.ariaAnnouncer) {
    el.ariaAnnouncer.textContent = "";
    setTimeout(() => { el.ariaAnnouncer.textContent = message; }, 100);
  }
}

// ============================================
// === EVENT BINDING ===
// ============================================
function bindEvents() {
  el.startTutorialBtn?.addEventListener("click", () => {
    state.activeModule = 0;
    state.activeStep = 0;
    showTraining();
    renderAll();
    announce("Starting EndNote training tutorial");
  });

  el.viewModulesBtn?.addEventListener("click", () => {
    showScreen("overview");
    announce("Showing module overview");
  });

  el.beginFromOverviewBtn?.addEventListener("click", () => {
    state.activeModule = 0;
    state.activeStep = 0;
    showTraining();
    renderAll();
  });

  el.restartTutorialBtn?.addEventListener("click", resetProgress);
  el.reviewModulesBtn?.addEventListener("click", () => showScreen("overview"));

  el.prevStepBtn?.addEventListener("click", () => {
    if (state.activeStep > 0) {
      state.activeStep -= 1;
      renderAll();
      announce("Previous step");
    }
  });

  el.nextStepBtn?.addEventListener("click", () => {
    advanceStep();
  });

  el.resetProgressBtn?.addEventListener("click", resetProgress);
  el.jumpToCurrentBtn?.addEventListener("click", resumeTutorial);

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (el.trainingScreen?.classList.contains('active-screen')) {
      if (e.key === 'ArrowRight' && !e.altKey && !e.ctrlKey) {
        e.preventDefault();
        advanceStep();
      }
      if (e.key === 'ArrowLeft' && !e.altKey && !e.ctrlKey && state.activeStep > 0) {
        e.preventDefault();
        state.activeStep -= 1;
        renderAll();
      }
    }
    if (e.key === 'Escape' && !el.trainingScreen?.classList.contains('active-screen')) {
      showScreen('welcome');
    }
  });
}

// ============================================
// === INITIALIZATION ===
// ============================================
function init() {
  bindEvents();
  renderAll();
  showScreen("welcome");
  
  setTimeout(() => {
    announce("EndNote 2025 Guided Training loaded. Welcome!");
  }, 500);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
