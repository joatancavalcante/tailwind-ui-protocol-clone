This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## 📏 Initial Configurations (to start development from this project)

```bash
npm i -D tailwindcss postcss autoprefixer
# and
npx tailwindcss init -p
```
Configured tailwindcss.config.js file with the following configuration on content settings:  `src/**/*.tsx`.

Deleted api folder, favicon.ico and page.modules.css files from "src/app".

Deleted all content from global.css file and configured with following content:
`@tailwind base;`
`@tailwind utilities;`
`@tailwind components;`

Run project with:
```bash
npm run dev 
```

## 🧪 Technologies

This project was developed using the following technologies:

- [NextJS](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Next-Themes]
- [Typescript]