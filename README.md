# ⚡️ Web3-Style Developer Portfolio

> A modern, high-performance personal portfolio website built with React, TypeScript, and Tailwind CSS. Featuring a "Web3" aesthetic with dark mode, glassmorphism, and interactive 3D elements.

![Portfolio Preview](./public/preview.png)
*(建議：你可以截一張網站圖放在 public 資料夾並命名為 preview.png)*

## ✨ Features

* **🎨 Web3 Aesthetic**: Deep dark mode, neon glows, glassmorphism (backdrop-blur), and noise textures.
* **🍱 Bento Grid Layout**: A fully responsive grid layout that adapts perfectly from mobile to desktop.
* **🔦 Spotlight Effect**: Custom mouse-tracking spotlight effect on cards using React hooks.
* **🌍 Interactive 3D Globe**: A draggable, auto-rotating 3D dot-matrix globe using `cobe`.
* **☁️ 3D Icon Cloud**: Interactive floating tech stack sphere using `react-icon-cloud`.
* **🧊 Spline 3D Integration**: Immersive 3D background scenes with GSAP entrance animations.
* **⚡️ High Performance**: Built with Vite for instant server start and HMR.

## 🛠 Tech Stack

* **Core**: [React 18](https://reactjs.org/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
* **Styling**: [Tailwind CSS](https://tailwindcss.com/)
* **Animation**: [Framer Motion](https://www.framer.com/motion/), [GSAP](https://greensock.com/gsap/)
* **3D & Interactive**: 
    * [`@splinetool/react-spline`](https://spline.design/) (Hero Background)
    * [`cobe`](https://github.com/shuding/cobe) (Interactive Globe)
    * [`react-icon-cloud`](https://github.com/render-props/react-icon-cloud) (Tech Stack)
* **Icons**: [Lucide React](https://lucide.dev/)

## 🚀 Getting Started

### Prerequisites

* Node.js (v18 or higher recommended)
* npm or yarn

### Installation

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    cd your-repo-name
    ```

2.  **Install dependencies**
    ```bash
    npm install
    ```

3.  **Run development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```text
src/
├── components/
│   ├── InteractiveIconCloud.tsx  # 3D Tech Stack Sphere
│   ├── LocationCard.tsx          # Draggable Cobe Globe + Clock
│   ├── SpotlightCard.tsx         # Reusable Card with Hover Glow
│   └── ...
├── App.tsx                       # Main Layout & Bento Grid
├── main.tsx                      # Entry Point
└── index.css                     # Global Styles & Tailwind Directives
public/
└── my-demo-video.mp4             # Video assets
```