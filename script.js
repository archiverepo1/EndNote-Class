// === ENDNOTE 2025 TRAINING SYSTEM ===
// Enhanced with visual guidance, interactive simulations, and accessibility

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

// === PERSISTENCE ===
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

// === PROGRESS UI ===
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

// === ACCESSIBILITY ===
function announce(message) {
  if (el.ariaAnnouncer) {
    el.ariaAnnouncer.textContent = "";
    setTimeout(() => { el.ariaAnnouncer.textContent = message; }, 100);
  }
}

// === SIMULATION ENGINE ===
class SimulationEngine {
  constructor(container, config = {}) {
    this.container = container;
    this.config = config;
    this.state = {};
    this.hintsShown = new Set();
    this.onComplete = config.onComplete || (() => {});
    this.init();
  }

  init() {
    this.output = this.container?.querySelector("#simOutputArea");
    this.log = this.container?.querySelector("#simLog");
    this.instruction = this.container?.querySelector("#simInstruction");
    this.buttons = [...(this.container?.querySelectorAll(".sim-action") || [])];
    this.setupEventListeners();
    this.renderInitialState();
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
    if (!target || !message) return null;
    const arrow = document.createElement('div');
    arrow.className = 'sim-guidance';
    arrow.innerHTML = `<span class="sim-guidance-arrow">↓</span><span>${message}</span>`;
    arrow.setAttribute('role', 'status');
    target.parentElement?.insertBefore(arrow, target);
    setTimeout(() => arrow?.remove(), 6000);
    return arrow;
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
      }, 150);
    } else {
      this.output.innerHTML = html;
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
    }
    if (this.instruction && message) {
      this.instruction.innerHTML = message;
      this.createGuidanceArrow(button, message.replace(/<[^>]*>/g, ''));
    }
  }

  markComplete(button) {
    if (!button) return;
    button.classList.add('correct', 'completed');
    button.classList.remove('next-target');
    button.disabled = true;
    this.clearHighlight(button);
    button.style.transform = 'scale(1.03)';
    setTimeout(() => {
      button.style.transition = 'transform 0.2s ease';
      button.style.transform = 'scale(1)';
    }, 200);
  }

  showTooltip(element, text) {
    if (!element || !text || this.hintsShown.has(element.dataset.hint)) return;
    const tooltip = document.createElement('div');
    tooltip.className = 'sim-tooltip';
    tooltip.textContent = text;
    const rect = element.getBoundingClientRect();
    tooltip.style.left = `${Math.min(rect.left + window.scrollX, window.innerWidth - 240)}px`;
    tooltip.style.top = `${rect.top + window.scrollY - 45}px`;
    document.body.appendChild(tooltip);
    setTimeout(() => {
      tooltip.style.opacity = '0';
      setTimeout(() => tooltip.remove(), 200);
    }, 3500);
    this.hintsShown.add(element.dataset.hint);
  }

  setupEventListeners() {
    this.buttons.forEach(button => {
      button.addEventListener('click', (e) => {
        const action = button.dataset.simAction;
        if (action) this.handleAction(action, button);
      });
      button.addEventListener('mouseenter', () => {
        if (button.dataset.hint) this.showTooltip(button, button.dataset.hint);
      });
      button.setAttribute('tabindex', button.disabled ? '-1' : '0');
      button.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          button.click();
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
}

// === LIBRARY CREATE SIMULATION ===
class LibraryCreateSimulation extends SimulationEngine {
  renderInitialState() {
    this.updatePreview(`
      <div class="sim-start-screen">
        <div class="sim-logo">📚 EndNote 2025</div>
        <p class="helper">Welcome! Choose an option to begin:</p>
        <div class="sim-options">
          <div class="sim-option disabled">📂 Open an Existing Library</div>
          <div class="sim-option highlighted">✨ Create a New Library</div>
        </div>
      </div>
    `, { animate: true });
    this.addLogEntry("EndNote launched. Ready to create your library.", 'info');
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
      <div class="sim-window-content">
        <div class="sim-header">
          <span class="sim-dot red"></span>
          <span class="sim-dot yellow"></span>
          <span class="sim-dot green"></span>
          <strong>EndNote 2025</strong>
        </div>
        <div class="sim-body">
          <div class="sim-welcome">
            <h4>👋 Welcome to EndNote</h4>
            <p>What would you like to do?</p>
            <div class="sim-action-grid">
              <button class="sim-large-btn next-target" data-sim-action="choose-new-library">
                ✨ Create New Library
              </button>
              <button class="sim-large-btn disabled">📁 Open Existing Library</button>
            </div>
          </div>
        </div>
      </div>
    `, { animate: true });
    const btn = this.buttons.find(b => b.dataset.simAction === 'choose-new-library');
    this.enableNext(btn, 'Great! Now click <strong>Create New Library</strong>');
  }

  stepCreateLibrary(button) {
    this.markComplete(button);
    this.addLogEntry("✓ 'Create New Library' selected", 'success');
    this.updatePreview(`
      <div class="sim-dialog">
        <div class="sim-dialog-header">
          <h4>📝 New Library</h4>
          <span class="sim-close">✕</span>
        </div>
        <div class="sim-dialog-body">
          <div class="sim-form-group">
            <label>Library Name</label>
            <input type="text" class="sim-input next-target" 
                   value="MyResearch.enl" 
                   data-sim-action="name-library"
                   placeholder="Enter library name"
                   readonly>
            <small class="helper">💡 Tip: Use a descriptive name for your project</small>
          </div>
          <div class="sim-form-group">
            <label>Save Location</label>
            <div class="sim-path">📁 Documents/EndNote Libraries/</div>
          </div>
        </div>
        <div class="sim-dialog-footer">
          <button class="btn ghost">Cancel</button>
          <button class="btn primary next-target" data-sim-action="save-library">
            Create Library ✨
          </button>
        </div>
      </div>
    `, { animate: true });
    const btn = this.buttons.find(b => b.dataset.simAction === 'name-library');
    this.enableNext(btn, 'The name is set. Click <strong>Name Library</strong> to confirm');
  }

  stepNameLibrary(button) {
    this.markComplete(button);
    this.addLogEntry("✓ Library named: MyResearch.enl", 'success');
    const saveBtn = this.buttons.find(b => b.dataset.simAction === 'save-library');
    this.enableNext(saveBtn, 'Almost done! Click <strong>Save Library</strong> to finish');
  }

  stepSaveLibrary(button) {
    this.markComplete(button);
    this.addLogEntry("✓ Library created and opened!", 'success');
    this.triggerCelebration();
    
    this.updatePreview(`
      <div class="sim-library-view">
        <div class="sim-toolbar">
          <span class="sim-pill status-success">✅ Library Ready</span>
          <span class="sim-pill">0 References</span>
          <span class="sim-pill">My Groups</span>
        </div>
        <div class="sim-main-area">
          <div class="sim-empty-state">
            <div class="sim-empty-icon">📭</div>
            <p>Your library is ready for references!</p>
            <button class="btn secondary">+ Add Reference</button>
          </div>
        </div>
        <div class="sim-sidebar">
          <div class="sim-group-list">
            <strong>Groups</strong>
            <ul>
              <li class="active">All References</li>
              <li>Unfiled</li>
              <li>Trash</li>
            </ul>
          </div>
        </div>
      </div>
    `, { animate: true });
    
    if (this.instruction) {
      this.instruction.innerHTML = '🎉 <strong>Perfect!</strong> You\'ve created your first EndNote library. Review the preview, then continue.';
      this.instruction.className = 'sim-instruction success';
    }
    this.onComplete();
  }
}

// === WORD CITATION SIMULATION ===
class WordCitationSimulation extends SimulationEngine {
  renderInitialState() {
    this.updatePreview(`
      <div class="sim-window">
        <div class="sim-window-bar">
          <span class="sim-dot red"></span><span class="sim-dot yellow"></span><span class="sim-dot green"></span>
          <span>research-paper.docx — Word</span>
        </div>
        <div class="sim-content">
          <div class="sim-doc-preview">
            This is a research sentence waiting for a citation<span class="sim-inline-citation" style="opacity:0.5">[?]</span>.
          </div>
        </div>
      </div>
    `, { animate: true });
    this.addLogEntry("Word document opened. Ready to insert citation.", 'info');
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
    this.addLogEntry("✓ Word document ready", 'success');
    this.updatePreview(`
      <div class="sim-window">
        <div class="sim-window-bar">
          <span class="sim-dot red"></span><span class="sim-dot yellow"></span><span class="sim-dot green"></span>
          <span>research-paper.docx — Word</span>
        </div>
        <div class="sim-content">
          <div class="sim-pill">📄 Document ready</div>
          <div class="sim-doc-preview">
            This is a research sentence waiting for a citation<span class="sim-inline-citation" style="opacity:0.5">[?]</span>.
          </div>
          <div class="sim-file-row">
            <span>Ribbon</span>
            <strong>Home | Insert | EndNote 2025 ▼</strong>
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
      <div class="sim-window">
        <div class="sim-window-bar">
          <span class="sim-dot red"></span><span class="sim-dot yellow"></span><span class="sim-dot green"></span>
          <span>research-paper.docx — Word</span>
        </div>
        <div class="sim-content">
          <div class="sim-pill status-info">🔗 EndNote 2025 tab active</div>
          <div class="sim-doc-preview">
            This is a research sentence waiting for a citation<span class="sim-inline-citation" style="opacity:0.5">[?]</span>.
          </div>
          <div class="sim-toolbar" style="margin-top:12px;background:#f1f5f9;border-radius:10px;">
            <button class="btn secondary" style="font-size:0.85rem;padding:6px 12px;">🔍 Insert Citation</button>
            <button class="btn ghost" style="font-size:0.85rem;padding:6px 12px;">APA 7th ▼</button>
            <button class="btn ghost" style="font-size:0.85rem;padding:6px 12px;">🔄 Update</button>
          </div>
        </div>
      </div>
    `, { animate: true });
    const btn = this.buttons.find(b => b.dataset.simAction === 'insert-citation');
    this.enableNext(btn, 'Click <strong>Insert Citation</strong>. Watch the sentence change.');
  }

  stepInsertCitation(button) {
    this.markComplete(button);
    this.addLogEntry("✓ Citation inserted: (Smith, 2020)", 'success');
    this.updatePreview(`
      <div class="sim-window">
        <div class="sim-window-bar">
          <span class="sim-dot red"></span><span class="sim-dot yellow"></span><span class="sim-dot green"></span>
          <span>research-paper.docx — Word</span>
        </div>
        <div class="sim-content">
          <div class="sim-pill status-success">✓ Citation added</div>
          <div class="sim-doc-preview">
            This is a research sentence <span class="sim-inline-citation">(Smith, 2020)</span> that now includes an in-text citation.
          </div>
          <div class="sim-file-row" style="background:#f0fdf4;border-color:#86efac;">
            <span>Status</span>
            <strong style="color:#166534;">Citation formatted • Bibliography pending</strong>
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
      <div class="sim-window">
        <div class="sim-window-bar">
          <span class="sim-dot red"></span><span class="sim-dot yellow"></span><span class="sim-dot green"></span>
          <span>research-paper.docx — Word</span>
        </div>
        <div class="sim-content">
          <div class="sim-pill status-success">📚 Bibliography complete</div>
          <div class="sim-doc-preview">
            <p>This is a research sentence <span class="sim-inline-citation">(Smith, 2020)</span> that now includes an in-text citation.</p>
            <div class="sim-bibliography">
              <strong style="color:var(--primary);">References</strong>
              <p style="margin:8px 0 0;padding-left:20px;text-indent:-20px;">
                Smith, J. (2020). <em>Introduction to Research Writing</em>. Academic Press.
              </p>
            </div>
          </div>
        </div>
      </div>
    `, { animate: true });
    
    if (this.instruction) {
      this.instruction.innerHTML = '🎉 <strong>Excellent!</strong> You\'ve inserted a citation and generated a bibliography. Review the result, then continue.';
      this.instruction.className = 'sim-instruction success';
    }
    this.triggerCelebration();
    this.onComplete();
  }
}

// === SIMULATION MARKUP GENERATOR ===
function getSimulationMarkup(simulation) {
  if (!simulation) return "";

  if (simulation.type === "libraryCreate") {
    return `
      <div class="simulation-box">
        <h4>✨ Interactive demo: create a library</h4>
        <p>Click through the same order a real beginner would follow in EndNote. Follow the glowing button!</p>
        <div class="sim-instruction" id="simInstruction" role="status">Start here: click <strong>Open EndNote</strong>.</div>
        <div class="sim-toolbar">
          <button type="button" class="btn secondary sim-action" data-sim-action="open-endnote" data-hint="Launch the EndNote application">Open EndNote</button>
          <button type="button" class="btn secondary sim-action" data-sim-action="choose-new-library" data-hint="Start creating a new library file">Create New Library</button>
          <button type="button" class="btn secondary sim-action" data-sim-action="name-library" data-hint="Confirm the library name">Name Library</button>
          <button type="button" class="btn secondary sim-action" data-sim-action="save-library" data-hint="Save and open your new library">Save Library</button>
        </div>
        <div class="sim-output">
          <div class="sim-spotlight-overlay"></div>
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
        <p>Practice the Cite While You Write workflow. Follow the highlighted button!</p>
        <div class="sim-instruction" id="simInstruction" role="status">Start here: click <strong>Open Word</strong>.</div>
        <div class="sim-toolbar">
          <button type="button" class="btn secondary sim-action" data-sim-action="open-word" data-hint="Open Microsoft Word">Open Word</button>
          <button type="button" class="btn secondary sim-action" data-sim-action="open-endnote-tab" data-hint="Activate the EndNote ribbon tab">Open EndNote Tab</button>
          <button type="button" class="btn secondary sim-action" data-sim-action="insert-citation" data-hint="Search and insert a reference">Insert Citation</button>
          <button type="button" class="btn secondary sim-action" data-sim-action="show-bibliography" data-hint="Generate the references list">Show Bibliography</button>
        </div>
        <div class="sim-output">
          <div class="sim-spotlight-overlay"></div>
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

// === STEP RENDERING ===
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

// === QUIZ HANDLERS ===
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
    
    // Keyboard support
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

// === SIMULATION HANDLERS ===
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

// === SCREEN MANAGEMENT ===
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
    // Focus first interactive element for accessibility
    const focusable = target.querySelector('button:not(:disabled), [tabindex="0"]');
    focusable?.focus?.();
  }
}

function showTraining() {
  showScreen("training");
}

// === RENDER ALL ===
function renderAll() {
  updateOverallProgress();
  renderSidebarModules();
  renderOverview();
  renderStep();
}

// === NAVIGATION ===
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

  // Module complete
  setModuleComplete(state.activeModule);
  announce(`Module ${module.id} completed!`);

  if (state.activeModule === modules.length - 1) {
    // All modules complete
    updateOverallProgress();
    renderSidebarModules();
    showScreen("completion");
    triggerCelebration();
    return;
  }

  // Next module
  state.activeModule += 1;
  state.activeStep = 0;
  renderAll();
}

function triggerCelebration() {
  // Global celebration for tutorial completion
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

// === EVENT BINDING ===
function bindEvents() {
  // Welcome screen
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

  // Overview screen
  el.beginFromOverviewBtn?.addEventListener("click", () => {
    state.activeModule = 0;
    state.activeStep = 0;
    showTraining();
    renderAll();
  });

  // Completion screen
  el.restartTutorialBtn?.addEventListener("click", resetProgress);
  el.reviewModulesBtn?.addEventListener("click", () => showScreen("overview"));

  // Navigation
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

  // Sidebar
  el.resetProgressBtn?.addEventListener("click", resetProgress);
  el.jumpToCurrentBtn?.addEventListener("click", resumeTutorial);

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Arrow navigation in training
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
    // Escape to go back
    if (e.key === 'Escape' && !el.trainingScreen?.classList.contains('active-screen')) {
      showScreen('welcome');
    }
  });
}

// === INITIALIZATION ===
function init() {
  bindEvents();
  renderAll();
  showScreen("welcome");
  
  // Announce page load for screen readers
  setTimeout(() => {
    announce("EndNote 2025 Guided Training loaded. Welcome!");
  }, 500);
}

// Start when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
