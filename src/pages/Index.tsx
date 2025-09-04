import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Mail, Linkedin, Twitter, Code, Zap, Users, Database } from "lucide-react";

const Index = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Полнофункциональная платформа электронной коммерции с корзиной покупок, обработкой платежей и панелью администратора.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg"
    },
    {
      title: "Task Management App",
      description: "Приложение для управления задачами с возможностью совместной работы в реальном времени и отслеживанием прогресса.",
      tags: ["Vue.js", "Firebase", "Tailwind CSS"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg"
    },
    {
      title: "AI Chat Bot",
      description: "Интеллектуальный чат-бот с обработкой естественного языка и интеграцией машинного обучения.",
      tags: ["Python", "FastAPI", "OpenAI", "Docker"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg"
    },
    {
      title: "Portfolio Website",
      description: "Адаптивный веб-сайт портфолио с современным дизайном и плавными анимациями.",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      github: "#",
      demo: "#",
      image: "/placeholder.svg"
    }
  ];

  const skills = [
    { name: "Frontend", icon: Code, items: ["React", "Vue.js", "TypeScript", "Tailwind CSS"] },
    { name: "Backend", icon: Database, items: ["Node.js", "Python", "PostgreSQL", "MongoDB"] },
    { name: "Tools", icon: Zap, items: ["Git", "Docker", "AWS", "Figma"] },
    { name: "Soft Skills", icon: Users, items: ["Team Leadership", "Problem Solving", "Communication"] }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-md">
        <div className="container-custom section-padding !py-4">
          <div className="flex items-center justify-between">
            <div className="gradient-text text-xl font-bold">
              Portfolio
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О себе</a>
              <a href="#projects" className="text-foreground hover:text-primary transition-colors">Проекты</a>
              <a href="#skills" className="text-foreground hover:text-primary transition-colors">Навыки</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
              </Button>
              <Button className="btn-primary">
                Связаться
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-4">
                  Привет, я{" "}
                  <span className="gradient-text">Разработчик</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Создаю современные веб-приложения с фокусом на пользовательский опыт 
                  и производительность. Специализируюсь на React, Vue.js и backend-разработке.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button className="btn-primary">
                  <Github className="mr-2 h-4 w-4" />
                  Мои проекты
                </Button>
                <Button className="btn-secondary">
                  <Mail className="mr-2 h-4 w-4" />
                  Связаться
                </Button>
              </div>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Twitter className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="aspect-square bg-gradient-card rounded-2xl p-8 shadow-card card-hover">
                <div className="w-full h-full bg-gradient-primary rounded-xl opacity-20"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">О себе</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Опытный разработчик с 5+ годами в создании масштабируемых веб-приложений
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Я увлеченный разработчик, который любит превращать идеи в реальные 
                продукты. Моя экспертиза охватывает полный стек веб-разработки, 
                от создания интуитивных пользовательских интерфейсов до проектирования 
                надежных backend-систем.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                В свободное время изучаю новые технологии, участвую в open-source проектах 
                и делюсь знаниями с сообществом разработчиков.
              </p>
            </div>
            <div className="space-y-4">
              <div className="bg-card rounded-lg p-6 border card-hover">
                <h3 className="font-semibold mb-2">💼 Опыт работы</h3>
                <p className="text-muted-foreground">5+ лет в веб-разработке</p>
              </div>
              <div className="bg-card rounded-lg p-6 border card-hover">
                <h3 className="font-semibold mb-2">🚀 Проектов завершено</h3>
                <p className="text-muted-foreground">50+ успешных проектов</p>
              </div>
              <div className="bg-card rounded-lg p-6 border card-hover">
                <h3 className="font-semibold mb-2">🎯 Специализация</h3>
                <p className="text-muted-foreground">Full-stack разработка</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Мои проекты</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Коллекция моих последних работ и экспериментов
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="card-hover group border-0 shadow-card bg-gradient-card">
                <CardHeader>
                  <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="flex items-center justify-between">
                    {project.title}
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Github className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-card/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Навыки</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Технологии и инструменты, с которыми я работаю
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <Card key={index} className="card-hover text-center border-0 shadow-card bg-gradient-card">
                <CardHeader>
                  <skill.icon className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle>{skill.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <Badge key={itemIndex} variant="outline" className="w-full">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Свяжитесь со мной</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Готов обсудить ваш проект или возможности сотрудничества
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-card bg-gradient-card">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <h3 className="text-xl font-semibold">Давайте работать вместе</h3>
                    <p className="text-muted-foreground">
                      Если у вас есть проект, которым вы хотели бы поделиться, или просто 
                      хотите поздороваться, я буду рад услышать от вас.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Mail className="h-5 w-5 text-primary" />
                        <span>your.email@example.com</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Github className="h-5 w-5 text-primary" />
                        <span>github.com/yourusername</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Linkedin className="h-5 w-5 text-primary" />
                        <span>linkedin.com/in/yourprofile</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <Button className="btn-primary w-full">
                      <Mail className="mr-2 h-4 w-4" />
                      Отправить письмо
                    </Button>
                    <Button className="btn-secondary w-full">
                      <Github className="mr-2 h-4 w-4" />
                      Посмотреть GitHub
                    </Button>
                    <div className="flex justify-center space-x-4 pt-4">
                      <Button variant="ghost" size="icon" className="hover:text-primary">
                        <Github className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:text-primary">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:text-primary">
                        <Twitter className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card/30">
        <div className="container-custom section-padding !py-8">
          <div className="text-center">
            <p className="text-muted-foreground">
              © 2024 Portfolio. Создано с ❤️ и React
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
