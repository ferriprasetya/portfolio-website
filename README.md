# 🙋 Portfolio Website with Astro

## 📑 Getting Started

This project uses Astro for a fast and performant development experience. To run the development server, follow these steps:

1. **Install dependencies**: Run npm install in the project directory to install all required dependencies.
2. **Start the development server**: Run npm run dev to start the development server. Astro will open your browser and navigate to http://localhost:4321 by default.

## 🔧 Technologies

This project uses the following technologies:

- **[Astro](https://astro.build)**: A fast and performant web framework built with TypeScript.
- **[Tailwind CSS](https://tailwindcss.com)**: A utility-first CSS framework for rapid styling.
- **[TypeScript](https://www.typescriptlang.org)**: For type safety and improved code maintainability.
- **[Astro Icon](https://www.astroicon.dev)**: A library for adding beautiful icons to your website.
- **[Motion](https://www.framer.com/motion)**: A library for adding animations to your website.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/                             # Static assets served directly
│   ├── favicon.svg
│   └── ...other image
├── src/                                # Project source files
│   ├── assets/                         # All asset files
│   │   ├── icons/                      # SVG icons used throughout the site
│   │   │   ├── home.svg
│   │   │   └── ...other svg icons
│   │   └── styles/                     # Global CSS styles
│   │       └── global.css
│   ├── components/
│   │   ├── Button.astro
│   │   └── ...other global components
│   │       └── sections/               # Individual sections
│   │           ├── Home/               # Home section specific components
│   │           └── ...other sections
│   ├── layouts/                        # Main layout template
│   │   └── Layout.astro
│   └── pages/                          # Individual pages
│       └── index.astro                 # Landing page
└── package.json                        # Project dependencies and configuration
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                                                                                     |
| :------------------------ | :--------------------------------------------------------------------------------------------------------- |
| `npm install`             | Installs dependencies                                                                                      |
| `npm run dev`             | Starts local dev server at `localhost:4321`                                                                |
| `npm run lint`            | Auto format all file using [Prettier](https://prettier.io) and fix lint using [Eslint](https://eslint.org) |
| `npm run build`           | Build your production site to `./dist/`                                                                    |
| `npm run preview`         | Preview your build locally, before deploying                                                               |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check`                                                           |
| `npm run astro -- --help` | Get help using the Astro CLI                                                                               |
