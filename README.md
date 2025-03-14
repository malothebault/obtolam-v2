# Gyoza

Gyoza is a static blog template built with Astro and React.

![astro version](https://img.shields.io/badge/astro-4.6-red)
![node version](https://img.shields.io/badge/node-18.18-green)

Demo Site:

- [gyoza.lxchapu.com](https://gyoza.lxchapu.com)
- [www.lxchapu.com](https://www.lxchapu.com)

Enjoy it!

## 📷 Screenshots

![Preview](https://s2.loli.net/2024/05/06/A9rzC3Uym7RwdQc.webp)

- ✅ SEO-friendly with canonical URL and OpenGraph information
- ✅ Support for sitemaps
- ✅ Supports RSS feeds
- ✅ Night mode support
- ✅ Graying of special dates
- ✅ Simple and clean color scheme and theme
- ✅ Support comment system
- ✅ Code highlighting support

## 🔧 Tech Stack

- [Astro](https://astro.build/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Jotai](https://jotai.org/)

## 📖 Documentation

Go to: [Documentation](https://gyoza.lxchapu.com/posts/guide)

## 🚀 Project Structure

```text
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   ├── pages/
│   ├── plugins/
│   ├── store/
│   ├── styles/
│   ├── utils/
│   └── config.json
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

La configuration du site est sauvegardée dans le fichier `config.json`.

## 🧞 Commands

| Command        | Action                                       |
| :------------- | :------------------------------------------- |
| `pnpm i`       | Installs dependencies                        |
| `pnpm dev`     | Starts local dev server at `localhost:4321`  |
| `pnpm build`   | Build your production site to `./dist/`      |
| `pnpm preview` | Preview your build locally, before deploying |
| `pnpm format`  | Format code using Prettier                   |
