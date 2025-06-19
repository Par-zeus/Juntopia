# 💬 Streamify — Real-Time Chat & Video Calling App

**Streamify** is a real-time messaging and video calling app built with **React 19**, **Vite**, **TailwindCSS**, **Zustand**, and powered entirely by **Stream.io SDKs**. It supports friend requests, threaded replies, live typing indicators, emoji reactions, 1-on-1 video calls, and a theme switcher with 32+ stunning DaisyUI themes.

---

## 📸 Preview

> 🔗 **Live Demo**: https://streamify.vercel.app *(replace with your deployed URL)*

| Chat UI | Video Call |
|--------|-------------|
| ![Chat UI](./assets/chat-preview.png) | ![Video Call](./assets/video-call.png) |

---

## 🚀 Features

- 💬 Real-time chat (Stream Chat SDK)
- 📞 1-on-1 video calling (Stream Video SDK)
- 🧑‍🤝‍🧑 Friend request system (accept/reject)
- 🔁 Threaded replies
- 😀 Emoji reactions
- ✍️ Typing indicators
- 🟢 Online/offline presence
- 🔔 Toast notifications
- 🎨 32+ themes via DaisyUI
- 📁 Media sharing (images, voice)
- 🔐 Token-based login flow
- 💡 Modern UI with TailwindCSS
- 🧠 State management with Zustand
- 🪄 Auto-theme persistence via localStorage

---

## ⚙️ Tech Stack

### Frontend
- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Zustand](https://github.com/pmndrs/zustand)
- [TailwindCSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [React Router 7](https://reactrouter.com/)
- [React Query](https://tanstack.com/query)
- [Lucide React](https://lucide.dev/)
- [React Hot Toast](https://react-hot-toast.com/)

### Real-Time Infrastructure
- **Stream Chat SDK**
- **Stream Video React SDK**
- ✅ No Socket.IO or raw WebRTC — all handled by Stream

---

## 📁 Folder Structure

```
streamify/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── store/
│   ├── themes/
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── .env
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── .eslintrc.js
└── README.md
```

---

## 🛠️ Getting Started (Installation & Setup)

### ✅ 1. Clone the Repository

```bash
git clone https://github.com/Par-zeus/Streamify.git
cd streamify
```

### ✅ 2. Install Dependencies

```bash
npm install
```

### ✅ 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```env
VITE_STREAM_API_KEY=your_stream_api_key
VITE_STREAM_USER_TOKEN=your_user_token
```

> 🔐 Get your Stream credentials from [https://getstream.io/dashboard](https://getstream.io/dashboard)

---

## ▶️ Running the App Locally

```bash
npm run dev
```

Then visit [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🚀 Deployment Instructions

1. Push code to GitHub
2. Connect repo to Vercel / Netlify
3. Add the required `.env` variables in dashboard
4. Deploy

---

## 🌈 Theme System

This project uses **DaisyUI's 32+ themes**:

- light, dark, cupcake, dracula, cyberpunk, luxury, synthwave, forest, etc.

Modify in `tailwind.config.js`:

```js
daisyui: {
  themes: ["light", "dark", "cupcake", "dracula", "cyberpunk", "luxury", "forest"]
}
```

Themes are persisted using `localStorage`.

---

## 🧠 Architectural Choices

- Clean modular architecture (components, services, store)
- Zustand for client state, React Query for async/server state
- Stream.io handles all real-time logic (no WebRTC/Sockets to maintain)
- ESLint and Prettier for consistent code
- Vite for blazing-fast dev experience

---

## 📜 License

Licensed under the [MIT License](./LICENSE)

---




