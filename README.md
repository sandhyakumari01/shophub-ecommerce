# E-commerce App

This is a **Next.js** e-commerce application bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).  
It allows users to browse products, view product details, add items to a cart, manage a wishlist, and proceed to checkout.

## Features

- Fetch products from a public API ([DummyJSON](https://dummyjson.com/products))
- Product listing and detailed product pages
- Cart functionality using `CartContext`
- Wishlist functionality using `WishlistContext`
- Checkout flow
- Responsive UI with reusable `ProductCard` component

## Project Structure
ecommerce-app/
│
├─ app/
│ ├─ cart/page.tsx # Cart page
│ ├─ checkout/page.tsx # Checkout page
│ ├─ product/[id]/page.tsx # Individual product detail page
│ └─ wishlist/page.tsx # Wishlist page
│
├─ components/
│ └─ productCard.tsx # Reusable product card component
│
├─ context/
│ ├─ cartContext.tsx # Cart context provider
│ └─ wishlistContext.tsx # Wishlist context provider
│
├─ lib/
│ └─ api.ts # API functions to fetch products
│
└─ README.md # Project documentation


## API Details

API functions are located in `lib/api.ts`:

```ts

npm install
npm run dev

# or with yarn
yarn
yarn dev

# or with pnpm
pnpm install
pnpm dev

Open http://localhost:3000
 in your browser. The app will auto-update as you edit files.

Context Providers

CartContext: Manages cart state and provides functions to add/remove products.

WishlistContext: Manages wishlist state and allows users to add/remove favorite products.

Components

ProductCard: Reusable card component for displaying product information like image, title, price, and buttons to add to cart or wishlist.

Learn More

Next.js Documentation
 – learn about Next.js features and API

Learn Next.js
 – interactive Next.js tutorial

Vercel Deployment
 – deploy your app easily

Deploy on Vercel

The easiest way to deploy this Next.js app is through Vercel
.

Check out Next.js deployment documentation
 for more details.


This README now includes:

1. **Project overview**  
2. **Folder structure explanation**  
3. **API function details**  
4. **Context usage**  
5. **Component overview**  
6. **Setup & deployment instructions**  

If you want, I can also add **screenshots and demo links** to make it look exactly like a polished GitHub project README.  

Do you want me to do that next?