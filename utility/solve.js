import { split } from "./split.js";
import { calculate } from "./calculate.js";

function getAllOperationCombos(ops, slots) {
  if (slots === 0) return [[]];
  const rest = getAllOperationCombos(ops, slots - 1);
  return ops.flatMap((op) => rest.map((arr) => [op, ...arr]));
}

// Possible operations. '+' is always assumed first so we don't need it here
const OP_COMBOS = getAllOperationCombos(["-", "*", "/"], 3);

export function solve(num) {
  const splits = split(num); // 4 x N array
  const n = splits.length;

  let result = null,
    bestSplit = null,
    bestOps = null;

  // For each split (column of the transposed 4xN array)
  for (let i = 0; i < n; i++) {
    // For each operation combo
    for (const ops of OP_COMBOS) {
      const value = calculate(splits[i], ops);
      // Ignore non-finite numbers (e.g., division by zero)
      if (value === null || !Number.isInteger(value) || value < 0) continue;
      result = value;
      bestSplit = splits[i];
      bestOps = ops;

      if (result === 0) {
        return {
          result,
          bestSplit,
          bestOps,
        };
      }
    }
  }
  return {
    result,
    bestSplit,
    bestOps,
  };
}
