
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
        body: `EndNote helps a researcher collect references, organise them, store PDFs, and insert citations into a Word document while automatically building a bibliography.`,
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
  body: `A new user should begin by creating one library for a project, course, or thesis. This is usually the first practical action in EndNote training.`,
  listType: "ol",
  list: [
    "Open EndNote 2025",
    "Choose Create a New Library",
    "Name the file MyResearch.enl",
    "Save it in an easy-to-find folder"
  ],
  callout: "Avoid scattering references across many tiny libraries unless you have a clear reason."
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
          feedback: "Correct. The library is the central place where references and related files are managed."
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
          feedback: "Correct. Imported data often needs checking, especially author names, capitalization, and missing fields."
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
          feedback: "Correct. Groups are an organisational tool inside a single library."
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
        callout: "If the tab is missing, that becomes a troubleshooting step, not a writing step."
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
          feedback: "Correct. CWYW links writing and referencing, saving a lot of manual formatting time."
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
          feedback: "Correct. Backups protect work and should be part of a normal routine."
        }
      }
    ]
  }
];

const state = {
  activeModule: 0,
  activeStep: 0,
  progress: JSON.parse(localStorage.getItem("endnote2025TrainingProgress") || "{}")
};

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
  jumpToCurrentBtn: document.getElementById("jumpToCurrentBtn")
};

function saveProgress() {
  localStorage.setItem("endnote2025TrainingProgress", JSON.stringify(state.progress));
}

function getModuleKey(moduleIndex) {
  return `module_${moduleIndex}`;
}

function isModuleComplete(moduleIndex) {
  return Boolean(state.progress[getModuleKey(moduleIndex)]?.completed);
}

function setModuleComplete(moduleIndex) {
  const key = getModuleKey(moduleIndex);
  state.progress[key] = {
    ...(state.progress[key] || {}),
    completed: true
  };
  saveProgress();
}

function setLastLocation(moduleIndex, stepIndex) {
  state.progress.lastLocation = { moduleIndex, stepIndex };
  saveProgress();
}

function getCompletedCount() {
  return modules.filter((_, index) => isModuleComplete(index)).length;
}

function updateOverallProgress() {
  const completed = getCompletedCount();
  const total = modules.length;
  const percent = Math.round((completed / total) * 100);

  el.progressPercent.textContent = `${percent}%`;
  el.progressFill.style.width = `${percent}%`;
  el.progressText.textContent = `${completed} of ${total} modules completed`;
}

function renderSidebarModules() {
  el.moduleList.innerHTML = "";
  modules.forEach((module, index) => {
    const item = document.createElement("button");
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
    });
    el.moduleList.appendChild(item);
  });
}

function renderOverview() {
  el.overviewGrid.innerHTML = "";
  modules.forEach((module, index) => {
    const card = document.createElement("article");
    card.className = "overview-card";
    card.innerHTML = `
      <p class="eyebrow">Module ${module.id}</p>
      <h3>${module.title}</h3>
      <p>${module.description}</p>
    `;
    card.addEventListener("click", () => {
      state.activeModule = index;
      state.activeStep = 0;
      showTraining();
      renderAll();
    });
    el.overviewGrid.appendChild(card);
  });
}

function renderStep() {
  const module = modules[state.activeModule];
  const step = module.steps[state.activeStep];

  el.moduleCounter.textContent = `Module ${module.id} of ${modules.length}`;
  el.stageEyebrow.textContent = `Module ${module.id}`;
  el.stageTitle.textContent = module.title;
  el.stageDescription.textContent = module.description;
  el.stageStepCount.textContent = `Step ${state.activeStep + 1} of ${module.steps.length}`;
  el.stageStatus.textContent = isModuleComplete(state.activeModule) ? "Completed" : "In progress";
  el.practiceTask.textContent = module.practice;
  el.keyTakeaway.textContent = module.takeaway;

  const modulePercent = Math.round(((state.activeStep + 1) / module.steps.length) * 100);
  el.moduleProgressLabel.textContent = `Step ${state.activeStep + 1}`;
  el.moduleProgressFill.style.width = `${modulePercent}%`;
  el.moduleProgressText.textContent = `${state.activeStep + 1} of ${module.steps.length} steps viewed in this module`;

  let listMarkup = "";
  if (step.list?.length) {
    const tag = step.listType === "ol" ? "ol" : "ul";
    listMarkup = `<${tag}>${step.list.map(item => `<li>${item}</li>`).join("")}</${tag}>`;
  }

  let quizMarkup = "";
  if (step.quiz) {
    quizMarkup = `
      <div class="quiz-box" data-correct="${step.quiz.correctIndex}">
        <strong>${step.quiz.question}</strong>
        <div class="quiz-options">
          ${step.quiz.options.map((option, i) => `<button class="option-btn" data-index="${i}">${option}</button>`).join("")}
        </div>
        <button class="btn secondary" id="checkAnswerBtn">Check answer</button>
        <div class="feedback" id="quizFeedback"></div>
      </div>
    `;
  }

  el.stepCard.innerHTML = `
    <span class="step-label">Guided step</span>
    <h3>${step.title}</h3>
    <p>${step.body}</p>
    ${listMarkup}
    ${step.callout ? `<div class="callout">${step.callout}</div>` : ""}
    ${quizMarkup}
  `;

  const prevDisabled = state.activeStep === 0;
  el.prevStepBtn.disabled = prevDisabled;
  el.prevStepBtn.style.opacity = prevDisabled ? 0.5 : 1;
  el.prevStepBtn.style.cursor = prevDisabled ? "not-allowed" : "pointer";
  el.nextStepBtn.textContent = state.activeStep === module.steps.length - 1 ? (state.activeModule === modules.length - 1 ? "Finish tutorial" : "Complete module") : "Next step";

  attachQuizHandlers(step);
  setLastLocation(state.activeModule, state.activeStep);
}

function attachQuizHandlers(step) {
  if (!step.quiz) return;

  const optionButtons = el.stepCard.querySelectorAll(".option-btn");
  const checkButton = el.stepCard.querySelector("#checkAnswerBtn");
  const feedback = el.stepCard.querySelector("#quizFeedback");
  let selectedIndex = null;

  optionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      optionButtons.forEach(item => item.classList.remove("selected"));
      btn.classList.add("selected");
      selectedIndex = Number(btn.dataset.index);
      feedback.textContent = "";
    });
  });

  checkButton.addEventListener("click", () => {
    if (selectedIndex === null) {
      feedback.textContent = "Please choose an answer first.";
      feedback.style.color = "#b45309";
      return;
    }

    optionButtons.forEach(item => item.classList.remove("correct", "incorrect"));
    const correctIndex = step.quiz.correctIndex;
    const selectedButton = [...optionButtons].find(btn => Number(btn.dataset.index) === selectedIndex);
    const correctButton = [...optionButtons].find(btn => Number(btn.dataset.index) === correctIndex);

    if (selectedIndex === correctIndex) {
      selectedButton.classList.add("correct");
      feedback.textContent = step.quiz.feedback;
      feedback.style.color = "#166534";
    } else {
      selectedButton.classList.add("incorrect");
      correctButton.classList.add("correct");
      feedback.textContent = `Not quite. ${step.quiz.feedback}`;
      feedback.style.color = "#9f1239";
    }
  });
}

function showScreen(screenName) {
  [el.welcomeScreen, el.moduleOverview, el.trainingScreen, el.completionScreen].forEach(screen => {
    screen.classList.add("hidden");
    screen.classList.remove("active-screen");
  });

  const target = {
    welcome: el.welcomeScreen,
    overview: el.moduleOverview,
    training: el.trainingScreen,
    completion: el.completionScreen
  }[screenName];

  target.classList.remove("hidden");
  target.classList.add("active-screen");
}

function showTraining() {
  showScreen("training");
}

function renderAll() {
  updateOverallProgress();
  renderSidebarModules();
  renderOverview();
  renderStep();
}

function advanceStep() {
  const module = modules[state.activeModule];
  const isLastStep = state.activeStep === module.steps.length - 1;

  if (!isLastStep) {
    state.activeStep += 1;
    renderAll();
    return;
  }

  setModuleComplete(state.activeModule);

  if (state.activeModule === modules.length - 1) {
    updateOverallProgress();
    renderSidebarModules();
    showScreen("completion");
    return;
  }

  state.activeModule += 1;
  state.activeStep = 0;
  renderAll();
}

function resumeTutorial() {
  const last = state.progress.lastLocation;
  if (last && Number.isInteger(last.moduleIndex) && Number.isInteger(last.stepIndex)) {
    state.activeModule = Math.min(last.moduleIndex, modules.length - 1);
    state.activeStep = Math.min(last.stepIndex, modules[state.activeModule].steps.length - 1);
  }
  showTraining();
  renderAll();
}

function resetProgress() {
  localStorage.removeItem("endnote2025TrainingProgress");
  state.progress = {};
  state.activeModule = 0;
  state.activeStep = 0;
  showScreen("welcome");
  renderAll();
}

document.getElementById("startTutorialBtn").addEventListener("click", () => {
  state.activeModule = 0;
  state.activeStep = 0;
  showTraining();
  renderAll();
});

document.getElementById("viewModulesBtn").addEventListener("click", () => showScreen("overview"));
document.getElementById("beginFromOverviewBtn").addEventListener("click", () => {
  state.activeModule = 0;
  state.activeStep = 0;
  showTraining();
  renderAll();
});
document.getElementById("restartTutorialBtn").addEventListener("click", resetProgress);
document.getElementById("reviewModulesBtn").addEventListener("click", () => showScreen("overview"));
el.prevStepBtn.addEventListener("click", () => {
  if (state.activeStep > 0) {
    state.activeStep -= 1;
    renderAll();
  }
});
el.nextStepBtn.addEventListener("click", advanceStep);
el.resetProgressBtn.addEventListener("click", resetProgress);
el.jumpToCurrentBtn.addEventListener("click", resumeTutorial);

renderAll();
showScreen("welcome");
