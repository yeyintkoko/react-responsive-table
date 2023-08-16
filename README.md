This is an assignment project bootstrapped with [Next.js](https://nextjs.org/).

## Getting Started

First, install dependencies:

```bash
yarn install
```

Run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file. But you may need to refresh the page manually when you update the data feeded to the Table component.

#### How to test Table component with customized data

-   Edit `app/page.tsx`, comment/uncomment predefined data.

```
const data = fourColumnsDataSet
// const data = threeColumnsDataSet
```

-   Update the data in `app/data.tsx`

This project uses custom local font `Avenir LT Std`.
