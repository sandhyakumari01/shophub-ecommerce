# E-commerce App

[![Next.js](https://img.shields.io/badge/Next.js-16.2.0-blue?logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.2.2-blue?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

This is a **Next.js** e-commerce application bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).  
It allows users to browse products, view product details, add items to a cart, manage a wishlist, and proceed to checkout.

---

## 🚀 Live Demo
👉 https://shophubecomm.netlify.app/

## Features

- Fetch products from a public API ([DummyJSON](https://dummyjson.com/products))
- Product listing and detailed product pages
- Cart functionality using `CartContext`
- Wishlist functionality using `WishlistContext`
- Checkout flow
- Responsive UI with reusable `ProductCard` component

---

## Project Structure

```
ecommerce-app/
│
├─ app/
│  ├─ cart/page.tsx            # Cart page
│  ├─ checkout/page.tsx        # Checkout page
│  ├─ product/[id]/page.tsx    # Individual product detail page
│  └─ wishlist/page.tsx        # Wishlist page
│
├─ components/
│  ├─ clientButtons.tsx        # Buttons for cart/wishlist
│  ├─ footer.tsx               # Footer component
│  ├─ navbar.tsx               # Navbar component
│  ├─ productCard.tsx          # Product card component
│  ├─ reviews.tsx              # Product reviews
│  ├─ skeleton/                # Skeleton loaders
│  │  ├─ cartSkeleton.tsx
│  │  ├─ productSkeleton.tsx
│  │  └─ wishlistSkeleton.tsx
│  └─ userMenu.tsx             # User dropdown menu
│
├─ context/
│  ├─ CartContext.tsx          # Cart context provider
│  └─ WishlistContext.tsx      # Wishlist context provider
│
├─ lib/
│  └─ api.ts                   # API functions to fetch products
│
├─ public/                     # Static assets
├─ styles/                     # Global styles
├─ postcss.config.js
├─ tailwind.config.ts
├─ next.config.ts
├─ package.json
└─ README.md

```

Setup & Installation

Clone the repository:

git clone https://github.com/sandhyakumari01/e-commerce-web.git

cd e-commerce-web

Install dependencies:

```
npm install
# or
yarn
# or
pnpm install
```

Run the development server:

```
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open http://localhost:3000
 in your browser.
The app will auto-update as you edit files.


API Details

API functions are located in lib/api.ts:

## Context Providers

- **CartContext**  
  Manages cart state and provides functions to add, remove, and update products in the cart.

- **WishlistContext**  
  Manages wishlist state and allows users to add or remove favorite products.

---

## Components Overview

- **ProductCard**  
  Displays product information including image, title, price, and buttons to add to cart or wishlist.

- **Navbar & Footer**  
  Persistent navigation and footer components visible across all pages.

- **UserMenu**  
  Dropdown menu for user actions such as profile, orders, or logout.

- **Skeleton Loaders**  
  - `cartSkeleton` – shows loading state for cart items  
  - `productSkeleton` – shows loading state for product listing  
  - `wishlistSkeleton` – shows loading state for wishlist items





