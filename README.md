# Vue 3 + Tailwind CSS v4 + DaisyUI Clean Architecture Demo

This project is a clean, scalable demo built with:

- ✅ Vue 3 (Composition API + Vite)
- 🎨 Tailwind CSS v4 + DaisyUI
- 📦 Pinia for state management
- 🔁 Axios with API mocking
- 🧪 Unit Testing (Vitest)
- 🌍 E2E Testing (Playwright)
- 🧱 Clean Architecture structure

---

## 🔧 Setup Instructions

### 1. Clone the repo

```bash
git clone <your-repo-url>
cd vue-daisy-demo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

App runs at: [http://localhost:5173](http://localhost:5173)

---

## 📂 Project Structure

```
src/
├── assets/             # CSS & static assets
├── components/         # UI components (atomic if needed)
├── layouts/            # Reusable layouts (e.g., DefaultLayout)
├── router/             # Vue Router setup
├── services/           # API abstraction using Axios
│   └── api/            # Specific service files
├── stores/             # Pinia stores (auth, item)
├── views/              # Page components (Login, Dashboard, etc.)
├── App.vue             # Main layout wrapper
├── main.js             # App entry point
```

---

## 🚀 Features Implemented

- ✅ Simulated login system
- ✅ Item list view and item detail view
- ✅ Protected route structure (extendable)
- ✅ Global layout with DaisyUI styling
- ✅ Axios instance with mocked API via interceptors

---

## 🧪 Testing Setup

### Unit + Component Testing

Using [Vitest](https://vitest.dev/) + [@vue/test-utils](https://test-utils.vuejs.org/):

```bash
npm run test:unit        # Run unit tests
npm run test:unit:ui     # Launch test UI
```

Test files live under `tests/unit/`

### E2E Testing

Using [Playwright](https://playwright.dev/):

```bash
npm run test:e2e         # Run all E2E tests (headless)
npm run test:e2e:headed  # Run with visible browser
```

Test files live under `tests/e2e/`

---

## 🧱 Alias & Vite Config

Project uses alias `@` for importing from `src/`:

```js
import Login from '@/views/Login.vue'
```

Make sure it's configured in both:

- `vite.config.js`
- `vitest.config.js` (or inside `vite.config.js` under `test`)

---

## 📦 Scripts Summary

| Script              | Description                       |
|---------------------|-----------------------------------|
| `npm run dev`       | Run local development server      |
| `npm run build`     | Build for production              |
| `npm run test:unit` | Run unit + component tests        |
| `npm run test:unit:ui` | Run test UI interface        |
| `npm run test:e2e`  | Run Playwright E2E tests (headless) |
| `npm run test:e2e:headed` | E2E with browser window   |

---

## 🧰 Requirements

- Node.js >= 18
- npm >= 9
- Recommended: use Node LTS (not experimental versions)
