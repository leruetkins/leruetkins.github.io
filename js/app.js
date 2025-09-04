const { createApp } = Vue;

createApp({
  data() {
    return {
      projects: [
        {
          title: "E-Commerce Platform",
          description: "Полнофункциональная платформа электронной коммерции с корзиной покупок, обработкой платежей и панелью администратора.",
          tags: ["React", "Node.js", "MongoDB", "Stripe"],
          github: "#",
          demo: "#",
          image: "https://via.placeholder.com/400x200"
        },
        {
          title: "Task Management App",
          description: "Приложение для управления задачами с возможностью совместной работы в реальном времени и отслеживанием прогресса.",
          tags: ["Vue.js", "Firebase", "Tailwind CSS"],
          github: "#",
          demo: "#",
          image: "https://via.placeholder.com/400x200"
        },
        {
          title: "AI Chat Bot",
          description: "Интеллектуальный чат-бот с обработкой естественного языка и интеграцией машинного обучения.",
          tags: ["Python", "FastAPI", "OpenAI", "Docker"],
          github: "#",
          demo: "#",
          image: "https://via.placeholder.com/400x200"
        },
        {
          title: "Portfolio Website",
          description: "Адаптивный веб-сайт портфолио с современным дизайном и плавными анимациями.",
          tags: ["React", "Tailwind CSS", "Framer Motion"],
          github: "#",
          demo: "#",
          image: "https://via.placeholder.com/400x200"
        }
      ],
      skills: [
        { name: "Frontend", items: ["React", "Vue.js", "TypeScript", "Tailwind CSS"] },
        { name: "Backend", items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
        { name: "Tools", items: ["Git", "Docker", "AWS", "Figma"] },
        { name: "Soft Skills", items: ["Team Leadership", "Problem Solving", "Communication"] }
      ]
    };
  }
}).mount('#app');