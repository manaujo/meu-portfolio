import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import profileImg from "../assets/profile.jpg";

export default function Portfolio() {
  return (
    <div className="bg-gray-900 text-white min-h-screen p-8">
      <header className="text-center mb-16 flex-auto md:text-center">
        <div className="flex flex-row items-center justify-around">
          <div className="flex justify-center mb-4">
            <img
              src={profileImg}
              alt="Foto de perfil"
              className="w-40 h-40 rounded-full object-cover shadow-lg border-4 border-blue-600"
            />
          </div>
          <div className="flex flex-col  justify-center mb-8">
            <h1 className="text-5xl font-bold mb-4">Márcio Araújo</h1>
            <p className="text-xl mb-6">
              Desenvolvedor Front-end Júnior | JavaScript, React.js, React
              Native, TypeScript | HTML5, CSS3 | APIs REST | Git
            </p>
            <div className="flex justify-center gap-4">
              <Button asChild variant="outline bg-blue-600">
                <a href="https://github.com/manaujo" target="_blank">
                  <FaGithub className="mr-2" /> GitHub
                </a>
              </Button>
              <Button asChild variant="outline bg-blue-600">
                <a
                  href="https://www.linkedin.com/in/marcio-araujo-35b71b233/"
                  target="_blank"
                >
                  <FaLinkedin className="mr-2" /> LinkedIn
                </a>
              </Button>
              <Button asChild variant="outline bg-blue-600">
                <a href="marcio.araujo.m7@gmail.com">
                  <FaEnvelope className="mr-2" /> Contato
                </a>
              </Button>
              <Button asChild variant="outline bg-blue-600">
                <a href="https://wa.me/5562982760471" target="_blank">
                  <img
                    src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png"
                    alt="WhatsApp"
                    className="w-5 h-5 mr-2"
                  />{" "}
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      <section className="mt-16">
        <motion.div whileHover={{ scale: 1.05 }}>
          <Card className="bg-gray-800">
            <CardContent className="p-4">
              <h2 className="text-3xl font-semibold mb-6">Sobre Mim</h2>

              <p className="mb-4">
                Olá sou Márcio Araújo, estudante de Análise e Desenvolvimento de
                Sistemas na faculdade Descomplica, apaixonado por tecnologia e
                desenvolvimento de software.
              </p>
              <p className="mb-4">
                Tenho experiência prática adquirida através de cursos intensivos
                e projetos pessoais, trabalhando com tecnologias como
                JavaScript, TypeScript, React.js, React Native, Node.js e
                Golang. Desenvolvi projetos que vão desde APIs REST escaláveis
                até aplicações web responsivas e redes sociais completas.
              </p>
              <p className="mb-4">
                Sou movido pela curiosidade e pelo aprendizado contínuo,
                buscando sempre novas soluções e desafios.
              </p>
              <p className="mb-4">Minhas principais habilidades incluem:</p>
              <p className="mb-4">
                - Front-end: React.js, React Native, HTML5, CSS3, JavaScript,
                TypeScript.
              </p>
              <p className="mb-4">- Back-end: Golang, APIs REST.</p>
              <p className="mb-4">- Controle de versão: Git e GitHub.</p>
              <p className="mb-4">
                - Metodologias Ágeis: Scrum (prática em projetos pessoais).
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-6">Projetos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="bg-gray-800">
              <CardContent className="p-4">
                <h3 className="text-2xl font-bold mb-2">
                  💼 Projeto: Chef Comanda
                </h3>
                <p className="mb-4">
                  Sistema Web para Restaurantes (Front-end)
                  Desenvolvido com React, TypeScript e Tailwind CSS.
                  Criação de interfaces responsivas e intuitivas, incluindo login, dashboard, cardápio online com categorias e imagens.
                  Utilização de React Router, Context API e componentes reutilizáveis.
                  Foco em boas práticas de UI/UX e integração com Stripe para planos e assinaturas.
                </p>
                <p className="mb-2 font-semibold">Tecnologias:</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-600 px-2 py-1 rounded">
                    JavaScript
                  </span>
                  <span className="bg-blue-600 px-2 py-1 rounded">
                    React.Js
                  </span>
                  <span className="bg-blue-600 px-2 py-1 rounded">
                    Tailwind CSS
                  </span>
                  <span className="bg-blue-600 px-2 py-1 rounded">
                    TypeScript
                  </span>
                  <span className="bg-blue-600 px-2 py-1 rounded">
                    React Router DOM
                  </span>
                  <span className="bg-blue-600 px-2 py-1 rounded">
                    Context API
                  </span>
                  <span className="bg-blue-600 px-2 py-1 rounded">
                    Stripe
                  </span>
                  <span className="bg-blue-600 px-2 py-1 rounded">
                    Vite
                  </span>

                </div>
                <div className="flex gap-4">
                  <Button asChild>
                    <a
                      href="https://github.com/manaujo/ChefComanda"
                      target="_blank"
                    >
                      Ver Código
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6">Experiência</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="bg-gray-800">
              <CardContent className="p-4">
                <h3 className="text-2xl font-bold mb-2">
                  Estágio em Desenvolvimento de Software
                </h3>
                <p className="mb-4">
                  Empresa Select Right - Julho 2024 - Remoto
                </p>
                <p className="mb-4">
                  Desenvolvimento de aplicações web e mobile utilizando React.js
                  e React Native. Colaboração em equipe ágil, participando de
                  reuniões diárias e sprints.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6">Licenças e certificados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="bg-gray-800">
              <CardContent className="p-4">
                <h3 className="text-2xl font-bold mb-2">
                  Projetos completo Full Stack com NodeJs, ReactJS e React
                  Native
                </h3>
                <p className="mb-4">
                  Curso: Projeto Completo NodeJS, React, React Native,
                  TypeScript - Udemy
                </p>
                <p className="mb-4">Data:03 Julho 2024</p>
                <a
                  href="https://www.udemy.com/certificate/UC-33148fd6-ddcc-44ca-8fe2-7e337f3911f6/"
                  target="_blank"
                  className="underline"
                >
                  Ver Certificado
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <motion.div whileHover={{ scale: 1.05 }}>
            <Card className="bg-gray-800">
              <CardContent className="p-4">
                <h3 className="text-2xl font-bold mb-2">PROGRAMMING BASICS</h3>
                <p className="mb-4">
                  Curso: PROGRAMMING BASICS - completou todas as disciplinas
                  deste módulo tornando-se especialista em Programming Basics
                  pelo curso de Análise e Desenvolvimento de Sistemas -
                  Descomplica Faculdade Digital{" "}
                </p>
                <p className="mb-4">Data:09 Outubro 2024</p>
                <a
                  href="https://certificados.descomplica.com.br/graduacao/3b1ee3a43bf63e08b895a3e41ef45c4c1f65f8de391518137be46fb86afb323b"
                  target="_blank"
                  className="underline"
                >
                  Ver Certificado
                </a>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <footer className="mt-16 text-center">
        <p className="text-sm">
          © 2025 Márcio Araújo. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
}
