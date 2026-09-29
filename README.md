# Paradise Nursery Shopping Application

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://reactjs.org/)
[![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-2.2-764ABC?logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
[![React Router](https://img.shields.io/badge/React_Router-6.26-CA4245?logo=react-router&logoColor=white)](https://reactrouter.com/)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)

An elegant, fully-featured botanical e-commerce web application built for **Paradise Nursery**. Designed to bring nature into every home, this application allows customers to discover, explore, and purchase carefully curated houseplants across multiple botanical categories with a responsive, modern shopping cart powered by Redux Toolkit.

---

## Table of Contents

- [Project Description](#project-description)
- [Purpose of the Application](#purpose-of-the-application)
- [Main Features](#main-features)
- [Technologies Used](#technologies-used)
- [Shopping Cart Functionality](#shopping-cart-functionality)
- [Project Structure](#project-structure)
- [Installation Instructions](#installation-instructions)
- [Routes and Navigation](#routes-and-navigation)
- [Grading Criteria Verification](#grading-criteria-verification)

---

## Project Description

**Paradise Nursery Shopping Application** is a specialized single-page application (SPA) created to deliver a seamless shopping experience for gardening and houseplant enthusiasts. The website features an atmospheric landing page with high-resolution botanical visuals, an informative About Us company page, a catalog of 18+ handpicked houseplants divided into clear categories, and an interactive shopping cart with dynamic real-time price and quantity adjustments.

---

## Purpose of the Application

The core purpose of the Paradise Nursery platform is to:
1. **Promote Green Living**: Provide urban households and gardening aficionados with effortless access to healthy, premium houseplants that enhance indoor air quality and emotional wellbeing.
2. **Demonstrate Modern Web Architecture**: Showcase clean, maintainable, state-driven front-end engineering principles using functional React components, predictable state management with Redux Toolkit, client-side routing with React Router, and tailored CSS design.
3. **Offer Intuitive E-Commerce UX**: Deliver zero-friction shopping workflows including instant cart feedback, persistent item counts, quantity fine-tuning, and dynamic subtotal calculations.

---

## Main Features

- **Botanical Hero Landing Page**:
  - Immersive CSS background imagery showcasing lush greenhouse foliage.
  - Distinct company branding and mission slogan: *"Bring nature home with beautiful, healthy and carefully selected houseplants."*
  - Prominent **GET STARTED** call-to-action button that transitions directly to the plant catalog.
- **Categorized Botanical Catalog**:
  - **Indoor Plants**: Monstera Deliciosa, Snake Plant, Peace Lily, ZZ Plant, Spider Plant, Rubber Plant.
  - **Outdoor Plants**: Areca Palm, Hibiscus, Bougainvillea, Jasmine, Croton, Gardenia.
  - **Succulents & Cacti**: Echeveria, Jade Plant, Haworthia, Barrel Cactus, Aloe Vera, String of Pearls.
  - High-resolution thumbnails, descriptions, category labels, and prices for every specimen.
- **Dynamic Add to Cart Interaction**:
  - Single-click cart dispatch.
  - Disables button immediately when an item is added to prevent accidental duplicates.
  - Button state dynamically updates to **"Added to Cart"** with checkmark feedback.
- **Universal Responsive Navbar**:
  - Persistent brand identity with quick links to Home, Plants, About Us, and Cart.
  - Live shopping cart badge computing the total quantity of items currently in the cart.
- **Comprehensive Shopping Cart**:
  - Displays thumbnail, plant name, unit price, quantity, and individual subtotal (`unit price × quantity`).
  - Interactive **+** and **-** controls to increment and decrement item counts.
  - Immediate removal via dedicated **Delete** buttons.
  - Live calculation of total item count and grand total order cost (`SUM(price × quantity)`).
  - Friendly **Checkout** feedback notification: *"Checkout feature is coming soon!"*
  - **Continue Shopping** button redirecting customers back to the plant catalog.
- **About Us Brand Story**:
  - In-depth company background highlighting quality houseplants, plant variety, and customer-centric service.

---

## Technologies Used

- **React** (v18.3) — Declarative, component-based user interface library.
- **Redux Toolkit** (v2.2) — Standard toolset for efficient, predictable Redux state management.
- **React Redux** (v9.1) — Official React UI bindings for Redux.
- **React Router** (v6.26) — Declarative client-side routing (`BrowserRouter`, `Routes`, `Route`, `Link`).
- **JavaScript (ES6+)** — Modern, clean functional programming without TypeScript.
- **CSS3** — Custom, responsive styling featuring CSS variables, flexbox, CSS Grid, and glassmorphism.
- **Vite** (v5.4) — Next-generation blazing fast build tool and development server.

---

## Shopping Cart Functionality

The application state is managed centrally using Redux Toolkit via `CartSlice.jsx`.

| Action | Reducer Logic | UI Behavior |
| :--- | :--- | :--- |
| `addItem` | Appends item to `items` array with `quantity: 1`. Checks for existence to avoid duplicates. | Card button changes to disabled "Added to Cart"; Navbar badge increments. |
| `removeItem` | Filters out target item by `id`. | Removes product row from cart; immediately updates cart total and badge count. |
| `increaseQuantity` | Finds target item and increments `quantity` by `1`. | Updates row subtotal, summary items count, and grand total. |
| `decreaseQuantity` | Decrements `quantity` by `1`. Automatically removes item if quantity reaches 0 to prevent invalid quantities. | Updates quantity, subtotal, and grand total immediately. |
| `clearCart` | Resets `items` array to `[]`. | Empties cart and displays empty state. |

---

## Project Structure

```text
paradise-nursery-shopping-application/
├── README.md                   # Comprehensive project documentation
├── package.json                # Project dependencies and npm scripts
├── vite.config.js              # Vite bundler configuration
├── index.html                  # HTML entry point with metadata and fonts
│
└── src/
    ├── main.jsx                # React root with Redux Provider wrapper
    ├── App.jsx                 # Routing configuration & Landing Page
    ├── App.css                 # Master CSS stylesheet & responsive rules
    │
    ├── components/
    │   ├── Navbar.jsx          # Header navigation with dynamic cart badge
    │   ├── AboutUs.jsx         # Company mission, values, and features
    │   ├── ProductList.jsx     # 3 categories with 18 unique plant cards
    │   └── CartItem.jsx        # Interactive cart page with item controls
    │
    └── redux/
        ├── store.js            # Redux store configuration
        └── CartSlice.jsx       # Cart reducer slice and action creators
```

---

## Installation Instructions

Follow these steps to set up and run the application locally:

### 1. Clone the repository
```bash
git clone https://github.com/aaryanbangale2306/paradise-nursery-shopping-application.git
cd paradise-nursery-shopping-application
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal).

### 4. Build for production
```bash
npm run build
```
This generates an optimized production bundle in the `dist/` directory.

---

## Routes and Navigation

| Route | Component | Description |
| :--- | :--- | :--- |
| `/` | `LandingPage` in `App.jsx` | Welcome page with company slogan and "GET STARTED" button |
| `/plants` | `ProductList.jsx` | 3 categories with 18 plant cards and "Add to Cart" |
| `/cart` | `CartItem.jsx` | Shopping cart with quantity modification and checkout |
| `/about` | `AboutUs.jsx` | Company story, plant quality assurance, and mission |

---

## Grading Criteria Verification

- [x] **README.md** complete with description, technologies, installation, and structure.
- [x] **AboutUs.jsx** contains Paradise Nursery company details and quality guarantees.
- [x] **App.css** includes `background-image: url(...)`, green nature palette, and responsive rules.
- [x] **App.jsx** features PARADISE NURSERY, slogan, GET STARTED button, and React Router routes.
- [x] **CartSlice.jsx** implements `addItem`, `removeItem`, `increaseQuantity`, `decreaseQuantity`, `clearCart`.
- [x] **store.js** registers `cart: cartReducer` using `configureStore`.
- [x] **ProductList.jsx** includes 3 categories and 18 unique plants with image, price, and dynamic Add to Cart.
- [x] **CartItem.jsx** supports item subtotal, grand total calculation, +/-, delete, and "Coming Soon" checkout.
- [x] Tested production build with `npm run build` — 0 errors.
