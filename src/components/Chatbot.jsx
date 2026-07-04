import React, { useState } from "react";
import "../styles/chatbot.css";
import { FaRobot, FaTimes, FaPaperPlane } from "react-icons/fa";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "👋 Hi! I'm Sudais's AI assistant. Ask me anything about him!",
      sender: "bot"
    }
  ]);
  const [input, setInput] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      text: input,
      sender: "user"
    };
    setMessages([...messages, userMessage]);
    setInput("");

    setTimeout(() => {
      const botResponse = getBotResponse(input);
      setMessages(prev => [...prev, botResponse]);
    }, 500);
  };

  const getBotResponse = (userInput) => {
    const input = userInput.toLowerCase().trim();

    // ====== PERSONAL INFORMATION ======
    if (input.includes("name") || input.includes("who") || input.includes("introduce") || input.includes("tell me about yourself")) {
      return {
        id: messages.length + 2,
        text: "👤 My name is Sudais Khan! I'm a Software Engineering student at COMSATS University Islamabad. I'm passionate about AI Automation, Full Stack Development, and building innovative solutions that make a difference. 🚀",
        sender: "bot"
      };
    }

    if (input.includes("age") || input.includes("how old")) {
      return {
        id: messages.length + 2,
        text: "🎂 I'm a university student in my 4th semester. I'm in my early 20s, focused on learning and building my career in software engineering!",
        sender: "bot"
      };
    }

    if (input.includes("location") || input.includes("where") || input.includes("city") || input.includes("live") || input.includes("address")) {
      return {
        id: messages.length + 2,
        text: "📍 I'm based in Islamabad, Pakistan. I'm currently studying at COMSATS University Islamabad and working on various software projects.",
        sender: "bot"
      };
    }

    if (input.includes("pakistan") || input.includes("country") || input.includes("nationality")) {
      return {
        id: messages.length + 2,
        text: "🇵🇰 Yes! I'm from Pakistan. I'm proud to be a Pakistani and I'm working hard to contribute to the tech industry here and globally.",
        sender: "bot"
      };
    }

    // ====== EDUCATION ======
    if (input.includes("education") || input.includes("study") || input.includes("university") || input.includes("college") || input.includes("school")) {
      return {
        id: messages.length + 2,
        text: "🎓 I'm currently in my 4th semester of BS Software Engineering at COMSATS University Islamabad. My CGPA is 3.14/4.0. I've completed courses in OOP (Java), Database Systems, Data Structures, Web Development, and more! 📚",
        sender: "bot"
      };
    }

    if (input.includes("semester") || input.includes("which semester") || input.includes("what semester")) {
      return {
        id: messages.length + 2,
        text: "📚 I'm in my 4th semester of BS Software Engineering. I started in Spring 2025 and I'm progressing through my degree program at COMSATS University Islamabad.",
        sender: "bot"
      };
    }

    if (input.includes("cgpa") || input.includes("grade") || input.includes("marks") || input.includes("gpa")) {
      return {
        id: messages.length + 2,
        text: "📊 My current CGPA is 3.14/4.0. I'm working hard to improve it and maintain good academic standing while also working on practical projects.",
        sender: "bot"
      };
    }

    if (input.includes("course") || input.includes("subject") || input.includes("class")) {
      return {
        id: messages.length + 2,
        text: "📖 I've studied: 💻 Programming Fundamentals, ☕ Object Oriented Programming, 📊 Data Structures, 🗄️ Database Systems, 🌐 Web Development, 📐 Discrete Mathematics, and more!",
        sender: "bot"
      };
    }

    // ====== SKILLS ======
    if (input.includes("skill") || input.includes("tech") || input.includes("technology") || input.includes("know") || input.includes("expert")) {
      return {
        id: messages.length + 2,
        text: "🛠️ I work with: ⚛️ React.js, ☕ Java, 🐍 Python, 🗄️ MySQL, 🤖 AI Automation, 🔗 APIs, 🌐 HTML/CSS, 📜 JavaScript, and more! I'm always learning new technologies to stay updated. 💪",
        sender: "bot"
      };
    }

    if (input.includes("react") || input.includes("frontend") || input.includes("web")) {
      return {
        id: messages.length + 2,
        text: "⚛️ Yes! I'm skilled in React.js for frontend development. I've built this portfolio and other web applications using React, CSS3, and modern JavaScript practices.",
        sender: "bot"
      };
    }

    if (input.includes("java")) {
      return {
        id: messages.length + 2,
        text: "☕ Java is one of my strongest skills! I've built several projects including a Restaurant Ordering System, Library Management System, and more using Java, Swing, and OOP principles.",
        sender: "bot"
      };
    }

    if (input.includes("python")) {
      return {
        id: messages.length + 2,
        text: "🐍 Yes, I work with Python! I've built projects including a Tic Tac Toe game with AI using the Minimax algorithm. I'm also learning AI automation with Python.",
        sender: "bot"
      };
    }

    if (input.includes("database") || input.includes("mysql") || input.includes("sql")) {
      return {
        id: messages.length + 2,
        text: "🗄️ Yes! I work with MySQL and Oracle SQL. I've designed normalized databases, written complex queries, and built database-driven applications for academic projects.",
        sender: "bot"
      };
    }

    if (input.includes("ai") || input.includes("artificial intelligence") || input.includes("automation")) {
      return {
        id: messages.length + 2,
        text: "🤖 Yes! AI Automation is one of my main interests! I'm learning how to build intelligent systems, and I've completed AI Fluency training with Anthropic. I want to become an AI Automation Engineer in the future.",
        sender: "bot"
      };
    }

    // ====== PROJECTS ======
    if (input.includes("project") || input.includes("work") || input.includes("built") || input.includes("made") || input.includes("create")) {
      return {
        id: messages.length + 2,
        text: "🚀 I've built several projects: 🍽️ Restaurant Ordering System (Java/Swing), 🏠 Airbnb-Inspired Property Rental (Oracle APEX), 📚 Library Management System (Java), 🎨 This Portfolio Website (React.js), 🎮 Tic Tac Toe with AI (Python), and 🔌 Combinational Logic Circuit (Digital Logic Design). Check out the Projects section for details!",
        sender: "bot"
      };
    }

    if (input.includes("restaurant") || input.includes("ordering")) {
      return {
        id: messages.length + 2,
        text: "🍽️ The Restaurant Ordering System is a Java/Swing desktop app I built for my OOP course. It has a full order workflow with menu, cart, billing, and history. I used OOP design patterns and Java serialization for data storage.",
        sender: "bot"
      };
    }

    if (input.includes("airbnb") || input.includes("rental") || input.includes("property")) {
      return {
        id: messages.length + 2,
        text: "🏠 The Airbnb-Inspired Property Rental System is a web-based platform built with Oracle APEX. It features listing, booking, reviews, and payments with a normalized database and PL/SQL triggers for availability updates.",
        sender: "bot"
      };
    }

    if (input.includes("library")) {
      return {
        id: messages.length + 2,
        text: "📚 The Library Management System is a Java project I built with a team of 3. It has search, issue, return, and fine-calculation modules. I also wrote the full documentation including UML diagrams.",
        sender: "bot"
      };
    }

    if (input.includes("tic tac toe") || input.includes("game")) {
      return {
        id: messages.length + 2,
        text: "🎮 The Tic Tac Toe game is a Python project with AI opponent using the Minimax algorithm. It supports both two-player mode and single-player (vs AI) mode. The AI is unbeatable in optimal play!",
        sender: "bot"
      };
    }

    // ====== ACHIEVEMENTS ======
    if (input.includes("achievement") || input.includes("goal") || input.includes("future") || input.includes("dream")) {
      return {
        id: messages.length + 2,
        text: "🏆 I've completed 6+ software projects, learned 15+ technologies, and maintained a 3.14 CGPA. My future goal is to become an AI Automation Engineer at a top company like Microsoft or an international organization. I'm working hard to make that happen! 🎯",
        sender: "bot"
      };
    }

    // ====== CONTACT ======
    if (input.includes("contact") || input.includes("email") || input.includes("reach") || input.includes("phone") || input.includes("number")) {
      return {
        id: messages.length + 2,
        text: "📬 You can reach me at: 📧 surais094design@gmail.com or 📱 +92-345-0949831. Feel free to connect with me on GitHub at github.com/SK-Developer. I'm also available through the contact form on this website!",
        sender: "bot"
      };
    }

    if (input.includes("github") || input.includes("git")) {
      return {
        id: messages.length + 2,
        text: "🐙 My GitHub handle is SK-Developer. You can check out my projects and contributions at github.com/SK-Developer. I regularly work on personal and academic projects there!",
        sender: "bot"
      };
    }

    if (input.includes("linkedin")) {
      return {
        id: messages.length + 2,
        text: "🔗 Yes, I'm on LinkedIn! You can connect with me there to see my professional journey and updates. Check the footer or contact section for the link.",
        sender: "bot"
      };
    }

    // ====== SERVICES ======
    if (input.includes("service") || input.includes("help") || input.includes("offer")) {
      return {
        id: messages.length + 2,
        text: "💡 I offer: 💻 Web Development (React.js), 🤖 AI Automation Solutions, 🗄️ Database Design & Management, ☕ Java Development, and more! I'm open to freelance work and collaboration opportunities.",
        sender: "bot"
      };
    }

    // ====== INTERESTS ======
    if (input.includes("interest") || input.includes("hobby") || input.includes("like") || input.includes("enjoy")) {
      return {
        id: messages.length + 2,
        text: "💡 I'm passionate about AI Automation, Full Stack Development, and creating innovative solutions. I enjoy learning new technologies, building projects, solving real-world problems, and contributing to open source!",
        sender: "bot"
      };
    }

    // ====== WHY HIRE ======
    if (input.includes("hire") || input.includes("freelance") || input.includes("work with") || input.includes("collaborate")) {
      return {
        id: messages.length + 2,
        text: "🌟 I'm a dedicated Software Engineering student with practical project experience. I bring: strong problem-solving skills, modern tech stack knowledge, AI automation expertise, and a passion for quality. Let's work together! 🚀",
        sender: "bot"
      };
    }

    // ====== CAREER ======
    if (input.includes("career") || input.includes("job") || input.includes("internship") || input.includes("placement")) {
      return {
        id: messages.length + 2,
        text: "💼 I'm actively looking for internship opportunities in Software Engineering, Full Stack Development, and AI Automation. I'm open to both local and international opportunities. Let's connect!",
        sender: "bot"
      };
    }

    // ====== CERTIFICATIONS ======
    if (input.includes("certification") || input.includes("certificate") || input.includes("training")) {
      return {
        id: messages.length + 2,
        text: "📜 I've completed: 🐍 Python Programming Essentials (Rice University via Coursera), 🤖 AI Fluency (Anthropic), and Claude 101 (Anthropic). I'm always learning and adding new certifications!",
        sender: "bot"
      };
    }

    // ====== QUICK TIPS ======
    if (input.includes("what can you") || input.includes("help") || input.includes("what can i ask")) {
      return {
        id: messages.length + 2,
        text: "💬 You can ask me about: 👤 Who Sudais is, 🎓 His education & CGPA, 🛠️ His skills & technologies, 🚀 His projects, 🏆 Achievements & goals, 📬 Contact information, 💡 Services offered, 📜 Certifications, and more! Just type your question!",
        sender: "bot"
      };
    }

    // ====== GREETINGS ======
    if (input.includes("hi") || input.includes("hello") || input.includes("hey") || input.includes("good morning") || input.includes("good afternoon") || input.includes("good evening")) {
      return {
        id: messages.length + 2,
        text: "👋 Hello there! Great to see you! I'm Sudais's AI assistant. Feel free to ask me anything about Sudais - his skills, projects, education, contact info, or anything else you'd like to know!",
        sender: "bot"
      };
    }

    if (input.includes("bye") || input.includes("goodbye") || input.includes("see you")) {
      return {
        id: messages.length + 2,
        text: "👋 Goodbye! It was nice talking to you. Feel free to come back anytime if you have more questions about Sudais. Have a great day! 🌟",
        sender: "bot"
      };
    }

    if (input.includes("thanks") || input.includes("thank you")) {
      return {
        id: messages.length + 2,
        text: "😊 You're welcome! I'm happy to help. If you have any more questions about Sudais, feel free to ask! Have a wonderful day! 🌟",
        sender: "bot"
      };
    }

    // ====== DEFAULT RESPONSE ======
    return {
      id: messages.length + 2,
      text: "🤔 That's a good question! I'm not sure about that specific topic. But I can tell you about: 👤 Sudais's background, 🎓 Education & CGPA, 🛠️ Skills & technologies, 🚀 Projects he's built, 🏆 Achievements & career goals, 📬 Contact information, 💡 Services offered, and more! What would you like to know?",
      sender: "bot"
    };
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button className="chat-toggle" onClick={toggleChat} aria-label="Open chat">
        <FaRobot />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <FaRobot className="chat-icon" />
              <div>
                <h3>Sudais AI Assistant</h3>
                <p>Online • Ready to help</p>
              </div>
            </div>
            <button className="chat-close" onClick={toggleChat} aria-label="Close chat">
              <FaTimes />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`chat-message ${msg.sender === "user" ? "user" : "bot"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Ask me anything..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button onClick={handleSend} aria-label="Send message">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;