# 🌐 Juntopia — Your Chat Utopia

**Juntopia** is derived from two words:  
- **Junto** (Spanish): *Together*  
- **Utopia** (Greek): *An ideal place*  

It represents a space where communication is seamless, beautiful, and deeply human. Whether you're chatting, video calling, or just vibing through emoji reactions — Juntopia is where connections feel natural.

---

## 📸 Preview

> 🔗 **Live Demo**: https://juntopia.vercel.app *(replace with your deployed URL)*

| Chat UI | Video Call |
|--------|-------------|
| ![Chat UI](![image](https://github.com/user-attachments/assets/33fab950-0db9-44b0-8fa5-a0ce5f8330ca)
 | ![Video Call](![image](https://github.com/user-attachments/assets/6ff09fad-56d4-4a35-ae38-3a6b6ee95879)
 |

![HomePage](https://github.com/user-attachments/assets/ca0596bd-f491-44c8-ac96-fbd730a89e23)
![Notofications UI](https://github.com/user-attachments/assets/0f457e38-b3c9-4a53-b47d-17cd4f94bd28)

---


## 🚀 Features

- 💬 Real-time messaging using Stream Chat SDK
- 📞 One-on-one video calling powered by Stream Video SDK
- 🧑‍🤝‍🧑 Friend requests (accept/reject)
- 🔁 Threaded replies & reactions
- ✍️ Typing indicators & presence updates
- 🎨 32+ dynamic themes with DaisyUI
- 🔔 Toast notifications for actions/events
- 🧠 State management with Zustand
- 💡 Theme persistence with localStorage
- 🔐 Login authentication via token system
- 🖼️ Media support (images, voice notes)

---

## ⚙️ Tech Stack

**Frontend**: React 19, Vite, TailwindCSS, DaisyUI, Zustand, React Query, React Router 7  
**Realtime Infra**: Stream Chat SDK, Stream Video SDK  
**UI Tools**: Lucide Icons, React Hot Toast

> No socket.io, no manual WebRTC — Stream handles it all

---


---

## 🛠️ Getting Started (Installation & Setup)

### ✅ 1. Clone the Repository

```bash
git clone https://github.com/your-username/juntopia.git
cd juntopia
```

### ✅ 2. Install Dependencies

```bash
npm install
```

### ✅ 3. Configure Environment Variables

Create a `.env` file in the root directory and add:

```env
VITE_STREAM_API_KEY=your_stream_api_key
VITE_STREAM_SECRET_KEY=your_user_token
```

> 🔐 Get your API keys from https://getstream.io/dashboard

---

## ▶️ Run the App Locally

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🚀 Deployment

- Push to GitHub
- Deploy using Vercel or Netlify
- Add the same `.env` variables in the platform settings
- Done 🎉

---

## 🌈 Theme System

Juntopia includes **32+ prebuilt themes** via DaisyUI:  
`light`, `dark`, `cupcake`, `dracula`, `luxury`, `cyberpunk`, `aqua`, `forest`, `valentine`, `retro`, and more!

Themes are persisted with `localStorage`. Customize in `tailwind.config.js`:

```js
daisyui: {
  themes: ["light", "dark", "cupcake", "dracula", "luxury", "forest"]
}
```

---




