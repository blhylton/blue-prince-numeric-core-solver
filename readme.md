# Blue Prince Numeric Core Solver

A modern, browser-based solver for the "Blue Prince Numeric Core" puzzle.

<!-- ![Screenshot](screenshot.png) -->
<!-- (Uncomment and add a screenshot if desired) -->

## Features

- **Enter any 4+ digit number** and get the smallest possible whole number result from all valid split and operation permutations (using subtraction, multiplication, and division).
- **Formula display:** See not only the result, but the exact formula used to achieve it.
- **Dark mode:** Automatically adapts to your OS preference, thanks to glassmorphism and responsive colors.
- **Zero dependencies:** Just HTML, CSS (via Tailwind v4 CDN), and JavaScript modules.
- **Mobile friendly & fast.**

## Usage

1. **Visit the [GitHub Pages site](https://blhylton.github.io/blue-prince-numeric-core-solver/)**
2. **Enter a 4+ digit number** in the input field.
3. **Click "Solve"** to see:
   - The smallest possible whole number result.
   - The split and formula that achieves it.

## Development

### Folder Structure
.
├── index.html
├── main.js
├── modules/
│ ├── split.js
│ ├── calculate.js
│ └── solve.js
├── style.css # (Optional - if you add custom styles)
└── README.md


- All logic lives in the `/modules` folder as ES modules.
- `main.js` connects the UI to the solving logic and performs basic validation.

## Tech Stack

- [Tailwind CSS v4 (via CDN)](https://tailwindcss.com/)
- Vanilla JavaScript (ES modules)
- Pure browser—no Node or npm needed!

## License

MIT License. See [LICENSE](LICENSE) for details.

---

**PRs welcome!**  
Have ideas or want more features? Open an issue or pull request!
