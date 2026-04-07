let currentStep = 1;
const totalSteps = 9;

function updateProgress() {
  const segments = document.querySelectorAll(".segment");
  segments.forEach((segment, index) => {
    if (index < currentStep) {
      segment.classList.add("active");
    } else {
      segment.classList.remove("active");
    }
  });
}

function nextStep() {
  if (currentStep < totalSteps) {
    document.getElementById(`step-${currentStep}`).classList.remove("active");
    currentStep++;
    
    const nextStepEl = document.getElementById(`step-${currentStep}`);
    if (nextStepEl) {
      nextStepEl.classList.add("active");
    }
    updateProgress();
  }
}

function prevStep() {
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
  updateProgress();
});

function selectOption(el) {
  document
    .querySelectorAll(".policy-card")
    .forEach((card) => card.classList.remove("active"));
  el.classList.add("active");
}

function selectRental(el) {
  document
    .querySelectorAll(".rental-card")
    .forEach((r) => r.classList.remove("active"));
  el.classList.add("active");
}


function changeCount(type, delta) {
  const element = document.getElementById(`${type}-val`);
  let currentVal = parseInt(element.innerText);
  
  if (currentVal + delta >= 0) {
    element.innerText = currentVal + delta;
  }
}