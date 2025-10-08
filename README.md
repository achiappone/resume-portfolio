# 💼 Anthony Chiappone — Resume Portfolio

This project is a **personal portfolio website** built with **React**, **TypeScript**, and **Vite**.  
It showcases professional experience, technical skills, and software development projects in a clean, responsive layout.

👉 **Live Demo:** [https://achiappone.github.io/resume-portfolio](https://achiappone.github.io/resume-portfolio)

---

## 🛠️ Tech Stack

- **Frontend Framework:** React + TypeScript  
- **Bundler & Dev Server:** Vite  
- **UI Components:** Material-UI (MUI)  
- **PDF Generation:** pdfmake  
- **Hosting:** GitHub Pages  

---

## ⚙️ Features

- Modern, minimal design with responsive layout  
- Dynamic project cards with GitHub and Live links  
- Resume download and print options  
- About, Resume, and Projects sections  
- ESLint and TypeScript configuration for clean, maintainable code  

---

## 🚀 Getting Started

To run this project locally:

```
# Clone the repository
git clone https://github.com/achiappone/resume-portfolio.git

# Navigate into the project folder
cd resume-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🧩 Project Structure

```
resume-portfolio/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Page components (Home, Resume, Projects)
│   ├── data/            # Resume and project data
│   ├── assets/          # Icons, images, and fonts
│   └── main.tsx         # App entry point
├── public/              # Static assets
├── package.json         # Dependencies and scripts
└── vite.config.ts       # Vite configuration
```

---

## 🧹 Code Quality

The project uses **ESLint** and **TypeScript strict mode** for consistent, type-safe development.

Example ESLint setup:

```
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

Optional React-specific lint rules:

```
npm install eslint-plugin-react-x eslint-plugin-react-dom --save-dev
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Anthony Chiappone**  
Senior Product Manager | Software Developer  

- [LinkedIn](https://www.linkedin.com/in/anthonychiappone)  
- [Portfolio](https://achiappone.github.io/resume-portfolio)
