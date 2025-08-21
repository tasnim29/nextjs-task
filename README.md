This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Project Description

A sports gear shop web application where users can log in to add products. Visitors can browse products on the landing page and view detailed information for each individual item

## Setup & Installation

### Clone the repository

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

### Install dependencies

```bash
npm install

```

### Create a .env file in the root directory and add your environment variables:

```bash
MONGODB_URI=<your-mongodb-connection-string>
DB_NAME=<your-database-name>

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<your-nextauth-secret>
GOOGLE_CLIENT_ID=<your-google-client-id>
GOOGLE_CLIENT_SECRET=<your-google-client-secret>
```

### Run the development server

```bash
npm run dev
```

## route summary

```bash
my-nextjs-app/
│
├─ app/
│   ├─ layout.js                  # Root layout: Navbar + Footer + Theme Provider
│   ├─ page.js                    # Landing Page "/"
│
├─ app/login/
│   ├─ page.js                    # Login page UI
│   └─ components/
│       ├─ CredentialForm.js      # Email/password login form
│       └─ SocialLoginButtons.js  # Google/GitHub login buttons
│
├─ app/products/
│   ├─ page.js                    # Product List page "/products"
│   └─ [id]/
│       └─ page.js                # Product Details page "/products/[id]"
│
├─ app/dashboard/add-product/
│   └─ page.js                    # Protected Add Product page with form
│
├─ components/
│   ├─ Navbar.js
│   ├─ Footer.js
│   ├─ Hero.js
│   ├─ ProductCard.js
│   ├─ ProductForm.js
│   ├─ Spinner.js                 # Loading spinner
│   └─ Toast.js                   # Toast notifications
│
├─ lib/
│   ├─ auth.js                    # NextAuth session helper
│   ├─ db.js                      # Database connection or mock DB
│   └─ fetchProducts.js           # Fetch products helper
│
├─ pages/api/
│   ├─ auth/
│   │   └─ [...nextauth].js       # NextAuth API for social + credentials login
│   ├─ products/
│   │   ├─ index.js               # GET all products / POST new product
│   │   └─ [id].js                # GET single product
│
├─ data/
│   └─ products.json               # Mock product data (optional)
│
├─ public/
│   └─ images/                    # Product images, hero images, etc.
│
├─ styles/
│   ├─ globals.css
│   └─ theme.css                  # Light/Dark theme
│
├─ .env                           # Environment variables (NextAuth secrets, DB URL)
├─ next.config.js
├─ package.json
└─ README.md
```

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
