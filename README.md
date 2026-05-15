# Brand

A production-ready, full-stack online shopping platform designed for high-performance product discovery, secure commercial checkout, and robust inventory control. This application features an intuitive consumer shopping interface coupled with a comprehensive administrative management dashboard.

## 🚀 Technologies

This project utilizes a decoupled client-server architecture built on the following core technologies:

* **Frontend:** React.js
* **Backend:** Node.js, Express.js
* **Database:** MongoDB, Mongoose ODM
* **State Management:** Redux Toolkit (RTK)
* **Payment Processing:** Stripe API & Webhooks
* **Styling Engine:** Tailwind CSS
* **Authentication:** JSON Web Tokens (JWT), HTTP-only cookies

## ✨ Features

* **Advanced Product Browsing:** High-performance product catalogs featuring dynamic grid layouts, responsive carousels, and lazy-loaded image media.
* **Smart Search & Filters:** Multi-conditional client-side sorting and server-side indexing, allowing customers to filter items by price, category, and keyword matches instantly.
* **Comprehensive Admin Panel:** Isolated dashboard enabling administrators to create, read, update, and delete (CRUD) products, track sales analytics, and manage order fulfillment states.
* **Persistent Add-to-Cart:** Dynamic, central shopping cart system that manages item quantities, local browser persistence, and synchronized subtotal calculations.
* **Secure Stripe Integration:** Production-ready checkout pipelines featuring server-side amount validation, secure payment intent creation, and asynchronous payment confirmation via Stripe Webhooks.

## 🧠 What I Learned

Building this data-driven commercial application provided deep insights into handling secure transaction flows and global application states:

* **Webhooks & Payment Security:** Mastered asynchronous financial processing by creating secure Stripe Webhook endpoints, allowing the backend to process inventory deductions only after official payment confirmation.
* **Predictable State Architecture:** Implemented Redux Toolkit to govern complex application states, successfully decoupling UI logic from asynchronous API calls using Redux Thunks for cart manipulation, user sessions, and product sourcing.
* **Data-Driven Relationship Mapping:** Engineered normalized Mongoose schemas to map relationships between users, products, and nested order objects while ensuring data integrity during transactional mutations.
* **Tamper-Proof Checkout Design:** Developed secure backend route verification pipelines to calculate transaction values directly from database prices, neutralizing client-side request tampering and price modification vectors.
* **Security Best Practices:** Enhanced application security by mitigating Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) vectors using HTTP-only cookies and strict CORS policies.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
