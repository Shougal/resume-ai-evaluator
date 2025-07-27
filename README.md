# Resume AI Whisperer – Built for Computer Scientists

**Resume AI Whisperer** is a resume evaluation tool tailored for **software engineers, computer science students, and tech professionals**.  
Simply upload your resume in **PDF**, **DOCX**, or **TXT** format, and receive a **personalized AI evaluation** powered by the **Groq LLM (`llama3-70b-8192`)**—engineered to provide actionable, technical, and role-specific feedback in seconds.


This project leverages Groq’s ultra-fast `llama3-70b-8192` model to deliver high-quality, low-cost, and lightning-speed resume evaluations—designed specifically for the needs of technical applicants.

---

## Live Demo

👉 [Try it now](https://resume-ai-evaluator-psi.vercel.app/)

---

## 🔍 Why This Matters

Generic resume tools don’t understand software. They keyword-match or rate formats—but overlook depth, logic, and clarity in technical storytelling. This tool changes that.

### Tailored for:
- Full-stack developers
- Computer science students
- Software engineers (interns & professionals)
- Technical project contributors

---

## ⚙How It Works

1. **Upload Your Resume (PDF/Docx)**
2. **Backend converts and summarizes the full text**
3. **5 specialized prompts** analyze key resume dimensions:
   - Technical experience
   - Code communication
   - System design clarity
   - Keyword coverage
   - Overall technical strength
4. **AI Response is returned instantly** with actionable feedback

---

## LLM Optimization Strategy

### Challenge
> A full 1MB resume can exceed 250,000 tokens — over 1.25M tokens for a full 5-prompt evaluation.  
> That’s $6+ per resume and unsustainable for production.

### 💡 Solution

| Step | Strategy | Result |
|------|----------|--------|
| 1 | **Summarize Once** | Extract key info (skills, experience, education) |
| 2 | **Reuse Summary** | Used across all 5 prompts |
| 3 | **Reduced Tokens** | 1.25M ➝ ~20K total |
| 4 | **Final Cost** | $6.25 ➝ **~$0.08 per resume** |
| 5 | **Speed** | Sub-second evaluation with Groq |

---

## 📦 Tech Stack

| Layer | Tools |
|-------|-------|
| Frontend | React + Vite + Shadcn/UI + TypeScript |
| Backend | Node.js + Express + Multer |
| LLM Provider | Groq (`llama3-70b-8192`) |
| Hosting | Vercel (frontend), Heroku (backend) |
| File Handling | PDF/Docx parsing, streaming, CORS configured |
| Prompt Choreography | Modular, scalable prompt system for consistent evaluations |

---

## 📝 Local Setup

```bash
# Clone the repo
git clone https://github.com/yourusername/resume-ai-evaluator.git
cd resume-ai-evaluator

# Frontend
cd frontend
npm install
npm run dev

# Backend
cd ../backend
npm install
npm run dev
