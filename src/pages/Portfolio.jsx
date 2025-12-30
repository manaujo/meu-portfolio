import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaBriefcase, FaMapMarkerAlt, FaLaptopCode, FaMobileAlt } from "react-icons/fa";
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
                  alt="Marcio Araujo"
                  className="w-48 h-48 rounded-full object-cover shadow-2xl border-4 border-purple-500 ring-4 ring-purple-500/20"
                />
              </motion.div>

              <div className="flex-1 text-center md:text-left">
                <motion.h1
                  variants={fadeInUp}
                  className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                >
                  Marcio Araujo
                </motion.h1>
                <motion.p
                  variants={fadeInUp}
                  className="text-xl md:text-2xl mb-3 text-gray-300 font-semibold flex items-center justify-center md:justify-start gap-3"
                >
                  <span className="flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 px-4 py-2 rounded-full border border-purple-500/30">
                    <FaLaptopCode className="text-purple-400" />
                    <span>Desenvolvedor Back-end | Go (Golang) • APIs REST • Docker</span>
                  </span>
                </motion.p>
                <motion.p
                  variants={fadeInUp}
                  className="text-base mb-3 text-gray-400 italic"
                >
                  Com experiência em Front-end (JavaScript, React e React Native)
                </motion.p>

                <motion.div
                  variants={fadeInUp}
                  className="flex flex-wrap gap-4 justify-center md:justify-start mb-8 text-sm"
                >
                  <div className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full">
                    <FaMapMarkerAlt className="text-purple-400" />
                    <span>Goiânia – GO</span>
                  </div>
                  <a href="mailto:marcio.araujo.m7@gmail.com" className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full hover:bg-slate-700 transition">
                    <FaEnvelope className="text-purple-400" />
                    <span>marcio.araujo.m7@gmail.com</span>
                  </a>
                  <a href="https://wa.me/5562982760471" target="_blank" className="flex items-center gap-2 bg-slate-800/50 px-4 py-2 rounded-full hover:bg-slate-700 transition">
                    <FaPhone className="text-purple-400" />
                    <span>(62) 98276-0471</span>
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
                  <Button asChild variant="primary">
                    <a href="https://github.com/manaujo" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="mr-2" /> GitHub
                    </a>
                  </Button>
                  <Button asChild variant="primary">
                    <a href="https://www.linkedin.com/in/marcio-araujo-35b71b233/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="mr-2" /> LinkedIn
                    </a>
                  </Button>
                  <Button asChild variant="outline">
                    <a href="mailto:marcio.araujo.m7@gmail.com">
                      <FaEnvelope className="mr-2" /> E-mail
                    </a>
                  </Button>
                  <Button asChild variant="whatsapp">
                    <a href="https://wa.me/5562982760471" target="_blank" rel="noopener noreferrer">
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
                Desenvolvedor Back-end com foco em <strong>Go (Golang)</strong> e construção de <strong>APIs REST</strong>, com experiência prática em projetos reais e participação em <strong>Projeto Científico</strong>.
              </p>
              <p className="text-lg mb-4 text-gray-300 leading-relaxed">
                Possui experiência complementar em Front-end, atuando no desenvolvimento de interfaces modernas e responsivas com <strong>React</strong> e <strong>React Native</strong>, adquirida por meio de projetos profissionais e aplicações em produção. Essa vivência contribui para uma visão completa do ciclo de desenvolvimento, desde a interface até a lógica de negócio e integrações.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Conhecimento em <strong>Docker</strong>, integração com bancos de dados modernos (<strong>Supabase</strong>) e serviços externos como <strong>Stripe</strong>, aplicando boas práticas de organização de código, versionamento com <strong>Git</strong> e trabalho colaborativo.
              </p>
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
                      Suporte e desenvolvimento de soluções internas voltadas à eficiência operacional.
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Manutenção e evolução de sistemas, com foco em estabilidade e melhoria contínua.
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Atuação colaborativa com equipes multidisciplinares, seguindo boas práticas e padrões de qualidade.
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
                      Desenvolvimento e manutenção de aplicações web responsivas com React e TypeScript.
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Integração com APIs REST e serviços externos.
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Implementação de boas práticas de UI/UX, melhorando a experiência do usuário.
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Versionamento com Git/GitHub e trabalho em equipe.
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Correção de bugs, refatoração e otimização de performance.
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Participação ativa em rituais ágeis (Scrum/Kanban).
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
                  <p className="text-xl text-purple-300 mb-4">Projeto Científico – UFG (Confidencial) — Goiânia/GO</p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Desenvolvimento de aplicações web para projeto científico federal.
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Criação de interfaces modernas e funcionais.
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Integrações com APIs e bancos de dados modernos.
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2">▹</span>
                      Organização do código seguindo padrões de projeto e boas práticas.
                    </li>
                  </ul>
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
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Linguagens</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-purple-600/30 border border-purple-500/50 rounded-full text-sm">JavaScript</span>
                    <span className="px-3 py-1 bg-purple-600/30 border border-purple-500/50 rounded-full text-sm">TypeScript</span>
                    <span className="px-3 py-1 bg-purple-600/30 border border-purple-500/50 rounded-full text-sm">Go (Golang)</span>
                    <span className="px-3 py-1 bg-purple-600/30 border border-purple-500/50 rounded-full text-sm">Java</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Front-end</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-600/30 border border-blue-500/50 rounded-full text-sm">React.js</span>
                    <span className="px-3 py-1 bg-blue-600/30 border border-blue-500/50 rounded-full text-sm">React Native</span>
                    <span className="px-3 py-1 bg-blue-600/30 border border-blue-500/50 rounded-full text-sm">HTML5</span>
                    <span className="px-3 py-1 bg-blue-600/30 border border-blue-500/50 rounded-full text-sm">CSS3</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Back-end</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-green-600/30 border border-green-500/50 rounded-full text-sm">Node.js</span>
                    <span className="px-3 py-1 bg-green-600/30 border border-green-500/50 rounded-full text-sm">Go (Golang)</span>
                    <span className="px-3 py-1 bg-green-600/30 border border-green-500/50 rounded-full text-sm">Java</span>
                    <span className="px-3 py-1 bg-green-600/30 border border-green-500/50 rounded-full text-sm">APIs REST</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Banco de Dados & BaaS</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-yellow-600/30 border border-yellow-500/50 rounded-full text-sm">Supabase</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Infra & DevOps</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-cyan-600/30 border border-cyan-500/50 rounded-full text-sm">Docker</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4 text-purple-300">Ferramentas & Metodologias</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-pink-600/30 border border-pink-500/50 rounded-full text-sm">Git</span>
                    <span className="px-3 py-1 bg-pink-600/30 border border-pink-500/50 rounded-full text-sm">GitHub</span>
                    <span className="px-3 py-1 bg-pink-600/30 border border-pink-500/50 rounded-full text-sm">Scrum</span>
                    <span className="px-3 py-1 bg-pink-600/30 border border-pink-500/50 rounded-full text-sm">Kanban</span>
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
                Atuar como <strong>Desenvolvedor de Software</strong>, com foco principal em <strong>Back-end (Go / APIs REST)</strong> e experiência prática em <strong>Front-end (React e React Native)</strong>, contribuindo para o desenvolvimento de soluções completas, escaláveis e bem estruturadas. Aplicar boas práticas de código, versionamento, integração entre camadas e trabalho colaborativo, agregando valor tanto em projetos de Back-end quanto de Front-end, conforme a necessidade da equipe e do produto.
              </p>
            </CardContent>
          </Card>
        </motion.section>

        {/* Footer */}
        <footer className="mt-16 text-center border-t border-purple-500/20 pt-8">
          <p className="text-gray-400">
            © 2025 Marcio Araujo. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </div>
  );
}
