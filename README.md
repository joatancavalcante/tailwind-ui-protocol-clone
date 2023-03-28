This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Initial Configurations

```bash
npm i -D tailwindcss postcss autoprefixer
# and
npx tailwindcss init -p
```
Configure tailwindcss.config.js file with the following configuration on content settings:  `src/**/*.tsx`.

Delete api folder, favicon.ico and page.modules.css files from "src/app".

Delete all content from global.css file and configure with following content:
`@tailwind base;`
`@tailwind utilities;`
`@tailwind components;`

Run project with:
```bash
npm run dev 
```

![Gravação de Tela 2023-03-28 às 14 12 26](https://user-images.githubusercontent.com/7294833/228317458-263f3c32-1384-4723-a627-3c14b53e7b23.gif)
