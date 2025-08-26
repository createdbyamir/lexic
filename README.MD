# Lexic

Lexic is a Next.js language learning app where you can create passages, store them, and manage them easily. It’s styled with Tailwind CSS and built to demonstrate clean UI, API integration, and reusable components.

## ✨ Features

- **Create Passages** – Add new passages with title, content, source, and language.
- **Show More** – Dynamically load additional passages with a “Load more” button.
- **Reusable Components** – The passage list and cards are fully reusable with props for flexibility.
- **Responsive UI** – Styled entirely with Tailwind CSS for a modern, clean look.
- **Proxy API** – Next.js API routes hide the external API URL and key for security.
- **Add, Edit** – Demonstrates CRU functionality (create, update passages).
- **Skeleton Loading** – Placeholder skeletons improve perceived performance while data loads.

## 📸 Screenshots

### Desktop
![Desktop Screenshot](/screenshots/desktop.png)

### Form + Passages
![Form and Passages Screenshot](/screenshots/form-passagesjpg)

### Edit Flow
![Edit Screenshot](/screenshots/edit.jpg)

### Mobile View
<img src="/screenshots/mobile-1.jpg" width="250" />
<img src="/screenshots/mobile-2.jpg" width="250" />
<img src="/screenshots/mobile-3.jpg" width="250" />


## 🚀 Tech Stack

- **Next.js 13+** – Framework for server/client components and API routes.
- **React** – Component-based UI with hooks (`useState`, `useEffect`).
- **Tailwind CSS** – Utility-first responsive design system.
- **Next.js API Routes** – Proxy requests to the external Lexic API.
- **Vercel** – (Optional) for deployment.

## 📂 Project Structure

```text
src/
  app/
    about/
      page.jsx
    api/
      passages/
        route.js      # API routes (GET, POST, PUT)
    components/
      Banner.jsx
    passages/
      page.jsx        # Full passages page
    posts/
      components/
        Edit.jsx
        Form.jsx
        List.jsx
        Skeleton.jsx
        Test.jsx
      lib/
        api.js
        delete.js
        post.js
        put.js
    shared/
      Footer.jsx
      Header.jsx
    layout.tsx
    page.jsx          # Home with Banner, Form + List

```

## ⚙️ Installation & Setup

1. **Clone the repo**
   ```
   git clone https://github.com/createdbyamir/lexic.git
   cd lexic
   ```

2. **Install dependencies**
    ```
    npm install
    ```

3. **Run the development server**
    ```
    npm run dev
    ```

4. **Open in browser**
    ```
    http://localhost:3000
    ```

## 💡 How I Built This

This project started as a way to practice APIs and Next.js fundamentals and evolved into a portfolio-ready CRU app.

### Key Learning Goals
- Reusable UI components (Form, List, Skeleton, Edit).
- API integration with fetch inside Next.js API routes (proxying external API).
- Managing data with useState and useEffect, including loading and empty states.
- Tailwind CSS design for responsive and accessible UI.

### Challenges Solved
- Built a **“Load more” pagination system** that fetches additional results without reloading the page.
- Implemented **API proxying in Next.js** to hide sensitive keys and URLs.
- Designing a form and list that look consistent in a responsive layout.
- Designed a **form + list layout** that stays consistent and responsive across screen sizes.
- Created an **inline edit flow** that works inside cards without breaking the grid layout.
- **Diagnosed and resolved API latency**, improving response speed by **4×** through request handling optimizations.

This project shows my ability to work with React, Next.js, Tailwind, and APIs to build a maintainable, extendable application.

## 📌 Future Improvements

- Add search and filter functionality
- Add Framer Motion (animation)
- Add error handling as well as delete capability
- Add an About page.
- Improve accessibility (ARIA labels, keyboard navigation)
- Add a dark mode toggle.

## Credits

- **Data** – Lexic API -  Created by: [Fox Islam](https://github.com/fox-islam)