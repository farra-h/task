let currentStep = 1;
const totalSteps = 4;

function updateProgressVer() {
  const segments = document.querySelectorAll(".segment");
  segments.forEach((segment, index) => {
    if (index < currentStep) {
      segment.classList.add("active");
    } else {
      segment.classList.remove("active");
    }
  });
}

function nextStepVer() {
  if (currentStep < totalSteps) {
    document.getElementById(`step-${currentStep}`).classList.remove("active");
    currentStep++;
    
    const nextStepEl = document.getElementById(`step-${currentStep}`);
    if (nextStepEl) {
      nextStepEl.classList.add("active");
    }
    updateProgressVer();
  }
}

function prevStepVer() {
  if (currentStep > 1) {
    document.getElementById(`step-${currentStep}`).classList.remove("active");
    currentStep--;
    
    const prevStepEl = document.getElementById(`step-${currentStep}`);
    if (prevStepEl) {
      prevStepEl.classList.add("active");
    }
    updateProgress();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  updateProgressVer();
});