import { FaGithub, FaLinkedin, FaEnvelope, FaBriefcase, FaMapMarkerAlt, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import profileImg from "../assets/profile.jpg";

export default function Portfolio() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>

        <div className="container mx-auto px-4 py-20 relative z-10">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center gap-8 mb-12">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img
                  src={profileImg}
                  alt="Márcio Costa Araújo"
                  className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-purple-500 ring-4 ring-purple-500/20"
                />
              </motion.div>

              <div className="flex-1 text-center md:text-left">
                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                >
                  Márcio Costa Araújo
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  className="text-xl md:text-2xl mb-3 text-gray-300 font-semibold flex items-center justify-center md:justify-start gap-3"
                >
                  <span className="flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-4 py-2 rounded-full border border-purple-500/30">
                    <FaLaptopCode className="text-purple-400" />
                    <span>Desenvolvedor Web | JavaScript | React.js | React Native | TypeScript | HTML5 | CSS3 | APIs REST | Git</span>
                  </span>
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4 justify-center md:justify-start mb-8 text-sm"
                >
                  <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
                    <FaMapMarkerAlt className="text-purple-400" />
                    <span>Goiânia – GO</span>
                  </div>
                  <a href="mailto:marcio.araujo.m7@gmail.com" className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full hover:bg-slate-700 transition no-underline">
                    <FaEnvelope className="text-purple-400 !text-purple-400" />
                    <span className="text-gray-300">marcio.araujo.m7@gmail.com</span>
                  </a>
                  <div className="flex items-center gap-2 bg-green-600/20 px-4 py-2 rounded-full border border-green-500/30">
                    <FaBriefcase className="text-green-400" />
                    <span>Disponível para PJ e CLT</span>
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4 justify-center md:justify-start"
                >
                  <Button asChild variant="primary" href="https://github.com/manaujo" target="_blank" rel="noopener noreferrer">
                    <a>
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                  </Button>
                  <Button asChild variant="primary" href="https://www.linkedin.com/in/marcio-araujo-35b71b233/" target="_blank" rel="noopener noreferrer">
                    <a>
                      <FaLinkedin className="mr-2" /> LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline" href="mailto:marcio.araujo.m7@gmail.com">
                    <a>
                      <FaEnvelope className="mr-2" /> E-mail
                    </a>
                  </Button>
                  <Button asChild variant="whatsapp" href="https://wa.me/5562982760471" target="_blank" rel="noopener noreferrer">
                    <a>
                      <FaWhatsapp className="mr-2" /> WhatsApp
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 pb-16 max-w-6xl">
        {/* Resumo Profissional */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Resumo Profissional
          </h2>
          <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-purple-500/20">
            <CardContent className="p-8">
              <p className="text-lg mb-4 text-gray-300 leading-relaxed">
                Sou Desenvolvedor Front-end com foco em <strong>React</strong> e <strong>TypeScript</strong>, atuando no desenvolvimento de interfaces modernas, responsivas e orientadas à experiência do usuário.
              </p>
              <p className="text-lg mb-4 text-gray-300 leading-relaxed">
                Tenho experiência prática no desenvolvimento de aplicações web e mobile, utilizando <strong>React</strong>, <strong>React Native</strong> e integração com <strong>APIs REST</strong>. Ao longo da minha trajetória, participei da criação e manutenção de sistemas utilizados em ambientes corporativos e projetos científicos, sempre seguindo boas práticas de código, versionamento e metodologias ágeis.
              </p>
              <p className="text-lg mb-4 text-gray-300 leading-relaxed">
                Atualmente atuo como <strong>Analista de Informática Pleno</strong> na <strong>Hapvida NotreDame Intermédica</strong>, contribuindo com suporte e evolução de soluções internas, além de já ter trabalhado como <strong>Desenvolvedor Web</strong> e <strong>Desenvolvedor de Software</strong> em projetos reais.
              </p>
              <p className="text-lg mb-4 text-gray-300 leading-relaxed">
                Possuo conhecimentos em Back-end com <strong>Node.js</strong>, <strong>Go (Golang)</strong> e <strong>Java</strong>, o que me permite uma visão full stack e melhor comunicação entre camadas da aplicação.
              </p>
              <div className="mt-6 pt-6 border-t border-purple-500/20">
                <p className="text-lg mb-3 text-gray-300">
                  <span className="text-purple-400">🚀 Tecnologias:</span> React | TypeScript | JavaScript | React Native | HTML | CSS | APIs REST | Node.js | Go | Java | Git | Docker
                </p>
                <p className="text-lg text-gray-300">
                  <span className="text-purple-400">📌 Busco oportunidades</span> como Desenvolvedor Front-end, Front-end Mobile ou Full Stack, onde eu possa evoluir tecnicamente e gerar impacto real através da tecnologia.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Experiência Profissional */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Experiência Profissional
          </h2>
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold mb-2">Analista de Informática Pleno</h3>
                    <span className="text-purple-400 font-semibold">12/2025 – Atual</span>
                  </div>
                  <p className="text-xl text-purple-300 mb-4">Hapvida NotreDame Intermédica — Goiânia/GO</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Suporte e desenvolvimento de soluções internas com foco em sistemas e aplicações
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Apoio na manutenção e evolução de interfaces utilizadas por áreas internas
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Colaboração com equipes de desenvolvimento e áreas de negócio
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold mb-2">Desenvolvedor Web</h3>
                    <span className="text-purple-400 font-semibold">07/2024 – 11/2025</span>
                  </div>
                  <p className="text-xl text-purple-300 mb-4">Chef Comanda — Goiás</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Desenvolvimento de aplicações web responsivas utilizando React e TypeScript
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Integração com APIs REST e serviços externos
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Aplicação de boas práticas de UI/UX
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Refatoração e otimização de performance
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Versionamento com Git e GitHub
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Atuação em ambiente ágil (Scrum/Kanban)
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold mb-2">Desenvolvedor de Software</h3>
                    <span className="text-purple-400 font-semibold">06/2024 – 11/2025</span>
                  </div>
                  <p className="text-xl text-purple-300 mb-4">Aplicativo Mobile de Rastreamento Vegetal – Projeto Científico (UFG) — Goiânia/GO</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Desenvolvimento de aplicativo mobile para rastreamento vegetal
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Implementação de interfaces mobile utilizando React Native
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Consumo de APIs REST para visualização e acompanhamento de dados
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Integração com bancos de dados
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Organização do código seguindo boas práticas e padrões de projeto
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Projetos Destacados */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projetos Destacados
          </h2>
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Plataforma Web Chef Comanda</h3>
                  <ul className="space-y-2 text-gray-300 mb-4">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Desenvolvimento de aplicações web responsivas com React e TypeScript
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Criação de componentes reutilizáveis e integração com serviços externos
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Refatoração e otimização de performance da aplicação
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-blue-600/30 border border-blue-500/50 rounded-full text-sm">React</span>
                    <span className="px-3 py-1 bg-blue-600/30 border border-blue-500/50 rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-green-600/30 border border-green-500/50 rounded-full text-sm">APIs REST</span>
                    <span className="px-3 py-1 bg-pink-600/30 border border-pink-500/50 rounded-full text-sm">Git</span>
                    <span className="px-3 py-1 bg-pink-600/30 border border-pink-500/50 rounded-full text-sm">Scrum</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Aplicativo Mobile de Rastreamento Vegetal – Projeto Científico (UFG)</h3>
                  <ul className="space-y-2 text-gray-300 mb-4">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Desenvolvimento de aplicativo mobile multiplataforma
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Criação de interfaces mobile e integração com APIs REST
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Visualização e acompanhamento de dados de rastreamento vegetal
                    </li>
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    <span className="px-3 py-1 bg-blue-600/30 border border-blue-500/50 rounded-full text-sm">React Native</span>
                    <span className="px-3 py-1 bg-purple-600/30 border border-purple-500/50 rounded-full text-sm">JavaScript</span>
                    <span className="px-3 py-1 bg-green-600/30 border border-green-500/50 rounded-full text-sm">APIs REST</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Competências Técnicas */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Competências Técnicas
          </h2>
          <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-purple-500/20">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Front-end</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-600/30 border border-blue-500/50 rounded-full text-sm">React.js</span>
                    <span className="px-3 py-1 bg-blue-600/30 border border-blue-500/50 rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-blue-600/30 border border-blue-500/50 rounded-full text-sm">JavaScript</span>
                    <span className="px-3 py-1 bg-blue-600/30 border border-blue-500/50 rounded-full text-sm">HTML5</span>
                    <span className="px-3 py-1 bg-blue-600/30 border border-blue-500/50 rounded-full text-sm">CSS3</span>
                    <span className="px-3 py-1 bg-blue-600/30 border border-blue-500/50 rounded-full text-sm">UI/UX</span>
                    <span className="px-3 py-1 bg-blue-600/30 border border-blue-500/50 rounded-full text-sm">SPAs</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Mobile</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-600/30 border border-cyan-500/50 rounded-full text-sm">React Native</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Integração e Back-end</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-600/30 border border-green-500/50 rounded-full text-sm">APIs REST</span>
                    <span className="px-3 py-1 bg-green-600/30 border border-green-500/50 rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-green-600/30 border border-green-500/50 rounded-full text-sm">Go (Golang)</span>
                    <span className="px-3 py-1 bg-green-600/30 border border-green-500/50 rounded-full text-sm">Java</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Ferramentas e Infra</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-pink-600/30 border border-pink-500/50 rounded-full text-sm">Git</span>
                    <span className="px-3 py-1 bg-pink-600/30 border border-pink-500/50 rounded-full text-sm">GitHub</span>
                    <span className="px-3 py-1 bg-pink-600/30 border border-pink-500/50 rounded-full text-sm">Docker</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Metodologias e IA</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-yellow-600/30 border border-yellow-500/50 rounded-full text-sm">Scrum</span>
                    <span className="px-3 py-1 bg-yellow-600/30 border border-yellow-500/50 rounded-full text-sm">Kanban</span>
                    <span className="px-3 py-1 bg-yellow-600/30 border border-yellow-500/50 rounded-full text-sm">Engenharia de Prompts</span>
                    <span className="px-3 py-1 bg-yellow-600/30 border border-yellow-500/50 rounded-full text-sm">IA aplicada ao desenvolvimento</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.section>

        {/* Formação Acadêmica */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Formação Acadêmica
          </h2>
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-2">Análise e Desenvolvimento de Sistemas</h3>
                <p className="text-xl text-purple-300 mb-2">Faculdade Descomplica — Goiás</p>
                <p className="text-gray-400">04/2024 – Cursando</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* Idiomas */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Idiomas
          </h2>
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <h3 className="text-2xl font-bold mb-2">Inglês</h3>
                  <span className="text-purple-400 font-semibold">Básico (leitura técnica)</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.section>

        {/* Cursos e Certificações */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Cursos e Certificações
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Go (Golang): Explorando a Linguagem do Google</h3>
                  <p className="text-gray-400 mb-3">(Udemy)</p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Aprender os fundamentos da linguagem
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Conhecer as estruturas de controles, operadores, funções, ponteiros, struct, interface, polimorfismo...
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Boas práticas de programação
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Usar banco de dados com Go
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Full Stack – Projeto Completo</h3>
                  <p className="text-gray-400 mb-3">Node.js, React, React Native e TypeScript (Udemy)</p>
                  <ul className="space-y-2 text-gray-300 text-sm mb-3">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Dominar JavaScript
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Desenvolvimento Web com ReactJS e Next JS
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Desenvolvimento Backend com NodeJS + Banco de dados
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Desenvolvimento Mobile com React Native
                    </li>
                  </ul>
                  <a
                    href="https://www.udemy.com/certificate/UC-33148fd6-ddcc-44ca-8fe2-7e337f3911f6/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline text-sm"
                  >
                    Ver Certificado →
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Curso Docker Completo</h3>
                  <p className="text-gray-400 mb-3">Do Zero ao Avançado (Udemy)</p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Conceitos Básicos de Containers
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Instalação do Docker
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Criação de Imagens
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Gerenciamento de Containers
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Docker Compose
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Testes e Debugging
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Integração com CI/CD
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Implantação em Produção
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Aprenda Java em 7 dias + Projetos Reais</h3>
                  <p className="text-gray-400 mb-3">(Udemy)</p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Conceitos fundamentais de Java (variáveis, tipos de dados, operadores, loops e condicionais)
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Programação Orientada a Objetos (POO) de forma simples e aplicada
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Criação e manipulação de métodos e classes
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Uso de arrays, listas e estruturas de dados
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Manipulação de arquivos e entrada/saída de dados
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Projetos práticos para fixar o aprendizado
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Boas práticas de programação e código limpo
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Basic Front-End</h3>
                  <p className="text-gray-400">Descomplica Faculdade Digital</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/50 transition h-full">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3">Programming Basics</h3>
                  <p className="text-gray-400 mb-3">Descomplica Faculdade Digital</p>
                  <a
                    href="https://certificados.descomplica.com.br/graduacao/3b1ee3a43bf63e08b895a3e41ef45c4c1f65f8de391518137be46fb86afb323b"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-300 underline text-sm"
                  >
                    Ver Certificado →
                  </a>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.section>

        {/* Objetivo Profissional */}
        <motion.section
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Objetivo Profissional
          </h2>
          <Card className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm border border-purple-500/20">
            <CardContent className="p-8">
              <p className="text-lg text-gray-300 leading-relaxed text-center">
                Atuar como <strong>Desenvolvedor Front-end</strong>, com foco em <strong>React</strong> e <strong>TypeScript</strong>, desenvolvendo interfaces modernas, responsivas e orientadas à experiência do usuário. Contribuir também no desenvolvimento de aplicações mobile com <strong>React Native</strong>, aplicando sólidos conhecimentos em integração com <strong>APIs REST</strong> e noções de Back-end para facilitar a comunicação com equipes técnicas e a entrega de soluções completas.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Footer */}
        <footer className="mt-16 text-center border-t border-purple-500/20 pt-8">
          <p className="text-gray-400">
            © 2025 Márcio Costa Araújo. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
}
