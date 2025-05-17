import { solve } from "./utility/solve.js"; // Adjust path as needed

const form = document.getElementById("puzzleForm");
const input = document.getElementById("numberInput");
const resultContainer = document.getElementById("result");
const resultDiv = document.getElementById("result-number");
const resultFormulaDiv = document.getElementById("result-formula");

function showResultSection() {
  const section = document.getElementById('result');
  section.classList.remove('hidden');
  // Let the browser register the change before transitioning opacity
  requestAnimationFrame(() => {
    section.classList.remove('opacity-0');
  });
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const numStr = input.value.trim();

  // Quick input validation
  if (!/^\d{4,}$/.test(numStr)) {
    resultDiv.textContent = "Please enter a number with at least 4 digits.";
    resultDiv.classList.add("text-red-600");
    return;
  }

  // Clear previous state
  resultDiv.classList.remove("text-red-600");
  resultDiv.textContent = "Solving...";

  try {
    const solutionObj = solveNumberPuzzle(Number(numStr));
    if (
        !solutionObj ||
        solutionObj.result === null ||
        solutionObj.bestSplit === null ||
        solutionObj.bestOps === null
      ) {
        resultDiv.textContent = "No solution found.";
        return;
      }

      // Format the formula for display
      // e.g., 8 * 6 - 5 / 4 = -0.5
      const formula =
        solutionObj.bestSplit[0] +
        " " + solutionObj.bestOps[0] + " " +
        solutionObj.bestSplit[1] +
        " " + solutionObj.bestOps[1] + " " +
        solutionObj.bestSplit[2] +
        " " + solutionObj.bestOps[2] + " " +
        solutionObj.bestSplit[3];

    resultFormulaDiv.textContent = formula;
    resultDiv.textContent = solutionObj.result;

  } catch (err) {
    resultDiv.textContent =
      "Error processing input. Check console for details.";
    resultDiv.classList.add("text-red-600");
    console.error(err);
  }

  showResultSection()
});
