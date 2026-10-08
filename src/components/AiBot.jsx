import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Bot,
  X,
  Send,
  Sparkles,
  Trash2,
} from "lucide-react";
import { profile, summary, experience, projects, education, certifications } from "../data/portfolio";

const QUICK_PROMPTS = [
  "What are her core Java & Spring Boot skills?",
  "Tell me about the AI Mock Interview project",
  "What is her internship experience?",
  "Education background & CGPA?",
  "How can I reach out or hire Komal?",
];

// Smart search & response generator based on Komal's actual verified portfolio data
function generateBotResponse(input) {
  const q = input.toLowerCase().trim();

  // Contact / Hire
  if (
    q.includes("contact") ||
    q.includes("hire") ||
    q.includes("email") ||
    q.includes("reach") ||
    q.includes("linkedin") ||
    q.includes("phone") ||
    q.includes("mobile") ||
    q.includes("number")
  ) {
    if (q.includes("phone") || q.includes("mobile") || q.includes("number")) {
      return `For privacy reasons, Komal's direct phone number is not listed publicly. However, you can connect directly via:
• **Email**: [${profile.email}](mailto:${profile.email})
• **LinkedIn**: [linkedin.com/in/komal-kathwade](${profile.linkedin})
• **GitHub**: [github.com/komal-k2005](${profile.github})
She usually responds within 24 hours!`;
    }
    return `You can connect with Komal through the following channels:
• **Email**: [${profile.email}](mailto:${profile.email})
• **LinkedIn**: [linkedin.com/in/komal-kathwade](${profile.linkedin})
• **GitHub**: [github.com/komal-k2005](${profile.github})
• **Location**: ${profile.location}
She is currently **Open to Work** for Java Full Stack Engineer and Trainee opportunities!`;
  }

  // AI Mock Interview Platform
  if (
    q.includes("interview") ||
    q.includes("spring ai") ||
    q.includes("mock") ||
    q.includes("openai") ||
    q.includes("ai project")
  ) {
    const aiProj = projects.find((p) => p.title.toLowerCase().includes("interview")) || projects[0];
    return `### **${aiProj.title}**
• **Tech Stack**: ${aiProj.tech.join(", ")}
• **Overview**: ${aiProj.description}
• **Live Demo**: [Open Live App](${aiProj.live})
• **Code**: [View on GitHub](${aiProj.github})

This project showcases her expertise integrating **Spring AI & OpenAI** with **Java Spring Boot backend** and **Firebase Authentication**!`;
  }

  // Work experience / Internship
  if (
    q.includes("experience") ||
    q.includes("intern") ||
    q.includes("job") ||
    q.includes("navotkarsha") ||
    q.includes("work") ||
    q.includes("company")
  ) {
    const expList = experience
      .map(
        (exp) =>
          `**${exp.role}** at **${exp.company}** (${exp.period})\n` +
          exp.points.map((pt) => `  • ${pt}`).join("\n")
      )
      .join("\n\n");
    return `Here is Komal's professional work experience:\n\n${expList}`;
  }

  // Skills & Tech Stack
  if (
    q.includes("skill") ||
    q.includes("java") ||
    q.includes("spring") ||
    q.includes("react") ||
    q.includes("backend") ||
    q.includes("frontend") ||
    q.includes("database") ||
    q.includes("tech") ||
    q.includes("stack")
  ) {
    return `Here is an overview of Komal's technical skill set:
• **Languages**: Java, JavaScript, SQL, HTML5, CSS3
• **Backend & APIs**: Spring Boot, Spring Data JPA, REST APIs, Spring Security, JWT, Hibernate
• **AI & Cloud**: Spring AI, OpenAI API, Firebase Authentication
• **Frontend**: React.js, Tailwind CSS, Bootstrap, JavaScript (ES6+)
• **Databases**: MySQL, PostgreSQL, MongoDB
• **Core CS**: Data Structures & Algorithms (DSA), OOP, DBMS
• **DevOps & Tools**: Git, GitHub, Postman, Docker Basics, Maven`;
  }

  // Education / CGPA / College
  if (
    q.includes("education") ||
    q.includes("cgpa") ||
    q.includes("college") ||
    q.includes("degree") ||
    q.includes("btech") ||
    q.includes("b.tech") ||
    q.includes("diploma") ||
    q.includes("study") ||
    q.includes("marks")
  ) {
    const eduList = education
      .map(
        (edu) =>
          `• **${edu.degree}**\n  *${edu.institution}* (${edu.period}) — **${edu.score}**`
      )
      .join("\n\n");
    return `Here is Komal's educational background:\n\n${eduList}`;
  }

  // All Projects
  if (
    q.includes("project") ||
    q.includes("build") ||
    q.includes("portfolio") ||
    q.includes("github") ||
    q.includes("app")
  ) {
    const projList = projects
      .slice(0, 4)
      .map(
        (p) =>
          `• **${p.title}** (${p.tech.slice(0, 3).join(", ")})\n  ${p.description.slice(0, 110)}...`
      )
      .join("\n\n");
    return `Here are some of Komal's highlighted projects:\n\n${projList}\n\nCheck out the Projects section or her [GitHub Profile](https://github.com/komal-k2005) for all 15+ repositories!`;
  }

  // Certifications
  if (
    q.includes("certificate") ||
    q.includes("certification") ||
    q.includes("course") ||
    q.includes("learned")
  ) {
    const certList = certifications
      .slice(0, 5)
      .map((c) => `• **${c.title}** — *${c.issuer}* (${c.date})`)
      .join("\n");
    return `Komal holds 10+ certifications including:\n${certList}\n...and more!`;
  }

  // Who is Komal / Overview / Bio
  if (
    q.includes("who") ||
    q.includes("about") ||
    q.includes("tell me") ||
    q.includes("summary") ||
    q.includes("objective")
  ) {
    return `${summary}\n\n**Current Status**: Final-year student & Full Stack Intern at Navotkarsha IT Solutions, actively seeking Java Full Stack Engineer Trainee positions.`;
  }

  // Fallback default
  return `I can help you explore Komal's background! Try asking:
• "What are her Spring Boot and Java skills?"
• "Explain her AI Mock Interview project"
• "Tell me about her Navotkarsha internship"
• "What is her CGPA and college?"
• "How can I contact her for an interview?"`;
}

export default function AiBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Hello! I am Komal's Portfolio Assistant. Ask me anything about her skills, Spring Boot & AI projects, experience, or education!",
      timestamp: "Just now",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    const userMessage = {
      sender: "user",
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate natural AI thinking & response
    setTimeout(() => {
      const botReply = generateBotResponse(query);
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: botReply,
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        },
      ]);
      setIsTyping(false);
    }, 450);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        sender: "bot",
        text: "Chat cleared! Feel free to ask any question about Komal's portfolio or resume.",
        timestamp: "Just now",
      },
    ]);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          onClick={() => setIsOpen(!isOpen)}
          className="relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 text-white font-medium shadow-xl shadow-purple-900/30 border border-white/20 hover:shadow-purple-500/40 transition-all btn-primary"
          aria-label="Ask Komal AI"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
          </span>
          <Bot size={20} className="text-white" />
          <span className="text-sm font-semibold tracking-wide hidden sm:inline text-white">Ask AI</span>
          <Sparkles size={15} className="text-amber-300 animate-pulse hidden sm:inline" />
        </motion.button>
      </div>

      {/* Chat Window Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-22 right-4 sm:right-6 z-50 w-[94vw] sm:w-[420px] max-h-[80vh] flex flex-col rounded-2xl glass border border-purple-500/30 shadow-2xl overflow-hidden backdrop-blur-xl"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-purple-950/80 via-slate-900/90 to-cyan-950/80 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative p-2 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 text-white shadow-md shadow-purple-500/20">
                  <Bot size={20} className="text-white" />
                  <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-slate-900" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                    Komal AI Assistant
                    <span className="px-1.5 py-0.2 text-[10px] font-mono rounded bg-purple-500/30 text-purple-200 border border-purple-400/30">
                      Portfolio Bot
                    </span>
                  </h4>
                  <p className="text-[11px] text-slate-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Online • Ready to answer
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={clearChat}
                  title="Clear chat"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <Trash2 size={15} />
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  title="Close"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3.5 max-h-[380px] text-sm">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex flex-col ${
                    msg.sender === "user" ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`max-w-[88%] p-3.5 rounded-2xl leading-relaxed whitespace-pre-line text-[13px] shadow-sm ${
                      msg.sender === "user"
                        ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-br-none"
                        : "glass border border-white/10 rounded-bl-none text-slate-200"
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-slate-400 mt-1 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 p-3 rounded-2xl glass border border-white/10 w-24">
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.15s]" />
                  <div className="w-2 h-2 rounded-full bg-pink-400 animate-bounce [animation-delay:0.3s]" />
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="px-3 py-2 border-t border-white/5 bg-slate-950/20 overflow-x-auto flex gap-1.5 scrollbar-none">
              {QUICK_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => handleSend(prompt)}
                  className="shrink-0 text-[11px] px-2.5 py-1 rounded-full glass glass-hover text-purple-300 border border-purple-500/20 hover:border-purple-400/50 whitespace-nowrap transition-all"
                >
                  {prompt}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 border-t border-white/10 bg-slate-950/40 flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about skills, projects, experience..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400/50 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="button"
                onClick={() => handleSend()}
                disabled={!inputValue.trim()}
                className="p-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 text-white disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-purple-500/25 transition-all"
                aria-label="Send message"
              >
                <Send size={15} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
