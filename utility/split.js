export function split(numStr) {
    // Always work with a string, easier for substrings
    numStr = numStr.toString();
    const n = numStr.length;
    const results = [];

    // The 3 split points (i, j, k) must split the number into 4 non-empty parts.
    // i: end of first part, j: end of second, k: end of third
    for (let i = 1; i <= n - 3; i++) {
        for (let j = i + 1; j <= n - 2; j++) {
            for (let k = j + 1; k <= n - 1; k++) {
                const part1 = Number(numStr.slice(0, i));
                const part2 = Number(numStr.slice(i, j));
                const part3 = Number(numStr.slice(j, k));
                const part4 = Number(numStr.slice(k));

                results.push([part1, part2, part3, part4]);
            }
        }
    }

    return results;
}