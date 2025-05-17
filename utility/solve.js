import { split } from "./split.js";
import { calculate } from "./calculate.js";

function getAllOperationCombos(ops) {
    // Return all unique orderings (permutations) of the ops array
    if (ops.length === 0) return [[]];
    if (ops.length === 1) return [ops];

    const results = [];
    for (let i = 0; i < ops.length; i++) {
        const op = ops[i];
        const rest = ops.slice(0, i).concat(ops.slice(i + 1));
        for (const perm of getAllOperationCombos(rest)) {
            results.push([op, ...perm]);
        }
    }
    return results;
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
      if (value === null || !Number.isInteger(value) || value < 0 || value > result) continue;
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
