export function calculate(numbers, operations) {
    if (numbers.length !== 4 || operations.length !== 3) {
        throw new Error("Expected 4 numbers and 3 operations.");
    }
    // Start with the first number
    let result = numbers[0];
    // Apply each operation in order, left to right (no operator precedence)
    for (let i = 0; i < operations.length; i++) {
        const nextNum = numbers[i + 1];
        switch (operations[i]) {
            case '-':
                result -= nextNum;
                break;
            case '*':
                result *= nextNum;
                break;
            case '/':
                if(nextNum === 0){
                    return null;
                }
                result /= nextNum;
                break;
            default:
                throw new Error(`Unknown operation: ${operations[i]}`);
        }
    }
    return result;
}