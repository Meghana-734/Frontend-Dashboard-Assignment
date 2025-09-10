# Frontend Trainee Assignment – Dynamic Dashboard (React + Redux Toolkit)

A dynamic dashboard page where categories contain multiple widgets. Users can add/remove widgets, manage categories, move widgets between categories, and search across all widgets. Data originates from a JSON structure and is managed by Redux Toolkit.

## ✅ Features
- JSON-driven data (`src/data/initialData.json`)
- Add a widget to any category (+ modal)
- Remove a widget via ❌ icon or from search results
- Add/Remove categories
- Move a widget between categories
- Global widget search
- Clean, responsive UI with simple CSS (no CSS framework)
- Built with **React + Redux Toolkit** on **Vite**

## 🧰 Tech Stack
- React 18
- Redux Toolkit + react-redux
- Vite

## 🚀 Local Setup
```bash
# 1) Install dependencies
npm install

# 2) Run the dev server
npm run dev
# Open the printed local URL (usually http://localhost:5173)
```

## 📦 Build for Production
```bash
npm run build
npm run preview
```

## 🗂 Project Structure
```
frontend-dashboard-assignment/
├─ index.html
├─ package.json
├─ vite.config.js
└─ src/
   ├─ App.jsx
   ├─ main.jsx
   ├─ styles.css
   ├─ data/
   │  └─ initialData.json
   ├─ store/
   │  ├─ index.js
   │  └─ dashboardSlice.js
   └─ components/
      ├─ Dashboard.jsx
      ├─ Category.jsx
      ├─ AddWidgetModal.jsx
      ├─ SearchBar.jsx
      └─ CategoryManager.jsx
```

## 📝 Notes that map to the assignment
1. **JSON to build dashboard** – `src/data/initialData.json` provides categories and their widgets.
2. **Add/Remove Widgets** –
   - Per-category: `+ Add Widget` opens modal to add widget to that category.
   - Remove via ❌ on each widget.
3. **Widget content** – free-form text supported.
4. **Add via modal** – User enters *Widget name* and *Widget text*; it adds to the chosen category.
5. **Remove from category or manager** – Remove via ❌ or from **Search**; you can also **move widgets** between categories via **Category Manager**.
6. **Search all widgets** – Top-left global search lists all matches with quick remove.

## 📤 How to Upload to GitHub
1. Create a new repo on GitHub (e.g., `frontend-dashboard-assignment`).
2. Initialize git and push:
   ```bash
   git init
   git remote add origin https://github.com/<your-username>/frontend-dashboard-assignment.git
   git add .
   git commit -m "feat: dashboard assignment (react + redux toolkit, vite)"
   git branch -M main
   git push -u origin main
   ```

## 🙌 Extras
- Unique IDs via `nanoid` from Redux Toolkit.
- Simple glassy UI with keyboard-friendly forms.
- Feel free to replace CSS with Tailwind/MUI if preferred.
