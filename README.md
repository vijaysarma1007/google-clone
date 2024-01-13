This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Deploy in your local

Before pulling the code and deploying it in your local, you should obtain the keys and store in ".env.local" of your project root directory.
- you need to 3 API keys 
- for country lookup , signup and get the key from [Country Lookup](https://extreme-ip-lookup.com/) and store the value with key of "NEXT_PUBLIC_IP_API_KEY".
- for google API, signup and get api key from [google for developers](https://developers.google.com/custom-search/v1/using_rest?hl=en&authuser=1) and store the value with key of "API_KEY"
- for google programmable search engine, get yoour context or programmable search engine key from [google for developers](https://developers.google.com/custom-search/v1/using_rest?hl=en&authuser=1) and streo the value with key of "CONTEXT_KEY"
