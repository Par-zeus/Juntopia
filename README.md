# 💬 Streamify — Real-Time Chat & Video Calling App

A full-stack real-time messaging and video calling platform built with **React 19**, **Vite**, and fully powered by the **Stream.io SDKs**. Inspired by apps like WhatsApp and Slack, this project features threaded messaging, emoji reactions, live typing indicators, call history, and 32+ customizable themes — all deployed on modern infrastructure with production-grade tools.

---

## 🚀 Features

✅ Real-time 1-on-1 Messaging  
✅ Video Calling via **Stream Video SDK**  
✅ Friend Requests (Accept / Reject flow)  
✅ Threaded Replies to Messages (Slack-style)  
✅ Emoji Reactions (Stream-native)  
✅ Typing Indicators (Live via Stream SDK)  
✅ Online / Offline Status and Presence  
✅ Call History Tracking  
✅ Push Notifications (Toast-based)  
✅ 32 DaisyUI Themes — Light, Dark, Cyberpunk, etc.  
✅ Media Sharing (Images / Voice Notes / Docs)  
✅ Persistent Authentication Flow  
✅ Fully Responsive UI  
✅ Built using **Vite**, **Zustand**, **TailwindCSS**, and **React Query**

---

## ⚙️ Tech Stack

### 🔧 Frontend

- [React 19](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Zustand](https://github.com/pmndrs/zustand)
- [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/)
- [React Router 7](https://reactrouter.com/)
- [TanStack React Query](https://tanstack.com/query)
- [Lucide React](https://lucide.dev/)
- [React Hot Toast](https://react-hot-toast.com/)

### 📡 Real-Time & Video Infrastructure (Powered by [Stream.io](https://getstream.io/))

- **Stream Chat SDK** – Messaging, threads, emoji reactions, typing indicators, user presence  
- **Stream Video React SDK** – WebRTC-based video calls (abstracted SDK integration)  
- **No Socket.IO or Custom Signaling Logic** – All real-time operations handled via Stream SDKs

---

## 🖼️ Preview

| Chat UI | Video Call |
|--------|-------------|
| ![chat-ui](./assets/chat-preview.png) | ![video-call](./assets/video-call.png) |

*(Add your actual screenshots in the `/assets` folder)*

---

## 📁 Project Structure

```bash
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── pages/
│   ├── services/
│   ├── store/         # Zustand state
│   ├── themes/        # DaisyUI themes
│   ├── utils/
│   ├── App.jsx
│   └── main.jsx
├── tailwind.config.js
├── postcss.config.js
├── .eslintrc.js
└── package.json
🛠️ Installation & Setup
1. Clone the Repo
bash
Copy
Edit
git clone https://github.com/your-username/streamconnect.git
cd streamconnect
2. Install Dependencies
bash
Copy
Edit
npm install
3. Environment Variables
Create a .env file in the root:

env
Copy
Edit
VITE_STREAM_API_KEY=your_stream_api_key
VITE_STREAM_USER_TOKEN=your_stream_user_token
VITE_BACKEND_URL=http://localhost:5000
⚠️ Get your Stream credentials at: https://getstream.io/dashboard/

4. Start the Dev Server
bash
Copy
Edit
npm run dev
🌈 Theme Selector
Includes 32+ prebuilt DaisyUI themes including:

Light, Dark, Cupcake, Cyberpunk, Retro, Wireframe, Dracula, etc.

User preference is stored with localStorage

Easily extendable via tailwind.config.js

🔐 Authentication
Secure login & registration with token-based flow

Auth token stored in browser context

User sessions persist across refresh

📦 Deployment (Optional)
Frontend: Vercel or Netlify

Backend: Render, Railway

Stream: Messaging and video infra hosted on https://getstream.io

Want to try the app? 👉 Live Demo (update with actual link)

🧠 Design Decisions
Stream.io SDKs are used for real-time infra to simulate production systems

Avoids reinventing WebRTC or Socket layers — offloads complexity to a scalable API

Focus on building user experience, polish, and UI/UX consistency
