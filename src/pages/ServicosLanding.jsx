import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaWhatsapp,
  FaInstagram,
  FaCheckCircle,
  FaRocket,
  FaPalette,
  FaChartLine,
  FaMobileAlt,
  FaBolt,
  FaShieldAlt,
} from "react-icons/fa";
import { Button } from "../components/ui/button";
import { BrandMark } from "../components/BrandMark";

const WHATSAPP_NUMBER = "5562982760471";
const WHATSAPP_MESSAGE = encodeURIComponent(
  "Olá Marcio! Quero um orçamento para página/site. Pode me orientar?"
);
const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`;

const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5 },
};

const portfolioProjects = [
  {
    name: "Chef Comanda",
    type: "Landing page",
    image: "/portfolio/photochefcomanda.png",
    resultLabel: "Resultado buscado",
    result:
      "Visitante entende o serviço em poucos segundos e pede orçamento ou compra com mais segurança.",
    description:
      "Página voltada a venda e contato: oferta clara, prova de que o serviço é sério e caminho direto para o WhatsApp.",
    structureLabel: "Como a página trabalha a favor do negócio",
    layoutHint:
      "Abertura com imagem forte do produto ou do chef, benefícios em blocos fáceis de ler e chamada para conversar no celular sempre à mão.",
  },
  {
    name: "Rifativa",
    type: "Landing page",
    image: "/portfolio/photorifativa.png",
    resultLabel: "Resultado buscado",
    result:
      "Pessoa entende as regras rápido, confia na proposta e segue para participar ou tirar dúvida.",
    description:
      "Conteúdo enxuto, ordem lógica e linguagem simples — para quem chega pelo link do anúncio e não quer perder tempo.",
    structureLabel: "Como a página trabalha a favor do negócio",
    layoutHint:
      "Título que resume a proposta, bloco de confiança (depoimento ou número), passos numerados e fechamento com ação clara antes do CTA final.",
  },
  {
    name: "Braga & Braga Advogados Associados",
    type: "Site institucional",
    image: "/portfolio/photobraga.png",
    resultLabel: "Resultado buscado",
    result:
      "Cliente em potencial vê um escritório organizado e sabe como e sobre o que pode consultar os advogados.",
    description:
      "Identidade sóbria: áreas de atuação, contatos e informações essenciais — autoridade sem poluição visual.",
    structureLabel: "Como o site reforça a credibilidade",
    layoutHint:
      "Topo com identidade do escritório, serviços em destaque discreto, opcional de prova (tempo de atuação ou casos) e rodapé com telefone e WhatsApp fáceis de achar.",
  },
  {
    name: "Andressa Terapeuta",
    type: "Landing page",
    image: "/portfolio/photoandressa.png",
    resultLabel: "Resultado buscado",
    result:
      "Visitante sente acolhimento, entende o tipo de atendimento e inicia contato com mais tranquilidade.",
    description:
      "Tom respeitoso: quem é a profissional, para quem é o trabalho e como dar o próximo passo — sempre com espaço para conversa no WhatsApp.",
    structureLabel: "Como a página trabalha a favor do negócio",
    layoutHint:
      "Imagem humana, texto curto sobre mudança que o acompanhamento pode trazer, benefícios em lista e convites suaves para agendar uma conversa ao longo da página.",
  },
];

function PortfolioThumb({ name, type, image }) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(image) && !failed;

  return (
    <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-inner">
      {showImage ? (
        <img
          src={image}
          alt={`Prévia do projeto ${name}`}
          className="h-full w-full object-cover object-top"
          loading="lazy"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="flex h-full min-h-[12rem] flex-col items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-emerald-950/40 p-8 text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-emerald-400/90">
            {!image ? "Sem prévia configurada" : "Imagem não encontrada"}
          </span>
          <p className="mt-2 text-lg font-semibold text-white">{name}</p>
          <p className="mt-1 text-sm text-slate-400">{type}</p>
          <p className="mt-4 max-w-[16rem] text-xs leading-relaxed text-slate-500">
            {!image
              ? "Pré-visualização em breve."
              : "Não foi possível carregar a prévia."}
          </p>
        </div>
      )}
    </div>
  );
}

function WhatsappCtaButton({ className = "", children }) {
  return (
    <Button
      asChild
      variant="whatsapp"
      href={waHref}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      <span className="inline-flex items-center justify-center">{children}</span>
    </Button>
  );
}

export default function ServicosLanding() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-800/90 bg-slate-950/95 px-4 py-3 backdrop-blur-md md:hidden pb-[max(0.75rem,env(safe-area-inset-bottom))]">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto flex max-w-lg items-center justify-center gap-3 rounded-xl bg-emerald-600 py-3.5 px-5 text-[15px] font-semibold tracking-wide text-white shadow-lg shadow-emerald-950/50 ring-1 ring-white/10 transition hover:bg-emerald-500 active:scale-[0.99]"
        >
          <FaWhatsapp className="text-2xl shrink-0 opacity-95" aria-hidden />
          <span>Iniciar conversa no WhatsApp</span>
        </a>
      </div>

      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-4">
          <div className="flex min-w-0 items-center gap-3">
            <BrandMark variant="lumen" className="h-9 w-9 shrink-0 sm:h-10 sm:w-10" />
            <span className="text-sm font-semibold tracking-tight text-slate-100 sm:text-base">
              Marcio Araujo
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://instagram.com/marcio.weblp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition hover:text-emerald-400"
              aria-label="Instagram @marcio.weblp"
            >
              <FaInstagram className="text-xl" />
            </a>
            <WhatsappCtaButton className="!rounded-lg !py-2.5 !px-5 !text-sm !font-semibold !shadow-lg !shadow-emerald-950/40 !ring-1 !ring-white/10">
              <>
                <FaWhatsapp className="mr-2 text-lg" />
                Solicitar orçamento
              </>
            </WhatsappCtaButton>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-slate-800/60">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 20%, rgb(16 185 129), transparent 45%),
              radial-gradient(circle at 80% 60%, rgb(56 189 248), transparent 40%)`,
          }}
        />
        <div className="relative mx-auto max-w-5xl px-4 pb-20 pt-16 md:pb-28 md:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-medium text-emerald-300">
              <FaBolt className="text-emerald-400 shrink-0" />
              Landing pages · sites institucionais · portfólios
            </p>
            <h1 className="text-balance text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl md:text-[2.65rem] md:leading-tight">
              Transforme visitantes em clientes
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-balance text-base leading-relaxed text-slate-300 md:text-lg">
              Com uma página clara, profissional e focada em resultado.
              <span className="mt-3 block text-[0.95rem] font-normal leading-relaxed text-slate-500 md:text-base">
                Landing pages, sites institucionais e portfólios — do planejamento ao convite para conversar no WhatsApp.
              </span>
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-3">
              <WhatsappCtaButton className="!animate-none w-full min-w-[260px] !rounded-xl !py-4 !px-8 !text-base !font-semibold sm:!text-lg sm:w-auto relative overflow-hidden !shadow-xl !shadow-emerald-950/45 !ring-2 !ring-emerald-400/35 !ring-offset-2 !ring-offset-slate-950">
                <>
                  <FaWhatsapp className="mr-2.5 text-2xl shrink-0" />
                  Conversar no WhatsApp
                </>
              </WhatsappCtaButton>
              <p className="text-center text-sm leading-snug text-slate-500">
                Orçamento sem compromisso.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-slate-800/60 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div {...fadeInUp} className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">
              Por que fechar comigo
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
              Você não precisa saber montar página. Precisa de alguém que organize ideia, texto e visual
              e entregue algo que gere contato.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                icon: FaShieldAlt,
                title: "Compromisso com prazo e alinhamento",
                text: "Combinamos o que entra na página, prazo realista e revisão. Você acompanha pelo WhatsApp, sem surpresa na entrega.",
              },
              {
                icon: FaPalette,
                title: "Visual atual, leitura fácil",
                text: "Layout limpo. Quem entra no celular ou no computador entende rápido quem você é e o que oferece.",
              },
              {
                icon: FaChartLine,
                title: "Feito para gerar conversa",
                text: "Título, textos e botões no lugar certo. Objetivo: a visita virar mensagem ou ligação, não só clique perdido.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                {...fadeInUp}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 shadow-lg shadow-black/20"
              >
                <item.icon className="mb-4 text-2xl text-emerald-400" />
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div {...fadeInUp} className="mt-12 text-center">
            <WhatsappCtaButton className="!rounded-xl !py-3.5 !px-8 !font-semibold !shadow-lg !shadow-emerald-950/40 !ring-1 !ring-white/10">
              <>
                <FaWhatsapp className="mr-2 text-lg" />
                Tirar dúvidas
              </>
            </WhatsappCtaButton>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-slate-800/60 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">O que você pode contratar</h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
              Três formatos. O melhor para você depende do que você vende hoje — a gente define isso na conversa.
            </p>
          </motion.div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Landing page",
                lead: "Uma página, um objetivo: levar a pessoa a te chamar ou comprar aquela oferta.",
                bullets: [
                  "Ideal para anúncio, campanha ou lançamento",
                  "Mensagem curta e direta",
                  "WhatsApp em destaque o tempo todo",
                ],
                cta: "Quero landing page",
              },
              {
                title: "Site institucional",
                lead: "Seu negócio com cara de empresa estável: quem você é, o que resolve e como contratar.",
                bullets: [
                  "Quem pesquisa seu nome no Google vê informação clara",
                  "Passa segurança antes da primeira conversa",
                  "Base para crescer depois com novas seções",
                ],
                cta: "Quero site institucional",
              },
              {
                title: "Página de portfólio",
                lead: "Mostre trabalhos e resultados em ordem. Quem precisa de prova social entende seu nível rápido.",
                bullets: [
                  "Bom para autônomo, criativo, saúde e serviço",
                  "Fotos e textos organizados por projeto ou tipo de cliente",
                  "Convite claro para próximo passo (orçamento ou conversa)",
                ],
                cta: "Quero página de portfólio",
              },
            ].map((s) => (
              <motion.div
                key={s.title}
                {...fadeInUp}
                className="flex flex-col rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950 p-6"
              >
                <FaRocket className="mb-3 text-emerald-400" />
                <h3 className="text-xl font-semibold text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400">{s.lead}</p>
                <ul className="mt-4 flex flex-1 flex-col gap-2 border-t border-slate-800/80 pt-4">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm leading-snug text-slate-300">
                      <FaCheckCircle className="mt-0.5 shrink-0 text-emerald-500/90" aria-hidden />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center text-sm font-semibold text-emerald-400 hover:text-emerald-300"
                >
                  {s.cta}
                  <span className="ml-1" aria-hidden>
                    →
                  </span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate-800/60 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">Alguns projetos</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-400 md:text-base">
              Cada um com meta clara: clareza para o visitante e caminho até o contato.
            </p>
          </motion.div>
          <div className="flex flex-col gap-14">
            {portfolioProjects.map((p, i) => (
              <motion.article
                key={p.name}
                {...fadeInUp}
                className={`grid items-start gap-8 md:grid-cols-2 ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <PortfolioThumb name={p.name} type={p.type} image={p.image} />
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-emerald-500">
                    {p.type}
                  </span>
                  <h3 className="mt-2 text-xl font-bold text-white md:text-2xl">{p.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">{p.description}</p>
                  <div className="mt-4 rounded-xl border border-emerald-500/20 bg-emerald-950/20 p-4">
                    <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400/90">
                      {p.resultLabel}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-200">{p.result}</p>
                  </div>
                  <div className="mt-4 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                    <p className="text-xs font-semibold uppercase text-slate-500">
                      {p.structureLabel}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.layoutHint}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <motion.div
            {...fadeInUp}
            className="mt-14 rounded-2xl border border-slate-800 bg-slate-900/40 px-6 py-8 text-center md:px-10"
          >
            <p className="text-sm font-medium text-white md:text-base">
              Quer algo nesse nível para o seu negócio?
            </p>
            <WhatsappCtaButton className="mt-6 !rounded-xl !py-3.5 !px-8 !font-semibold !shadow-lg !shadow-emerald-950/40 !ring-1 !ring-white/10">
              <>
                <FaWhatsapp className="mr-2 text-lg" />
                Pedir uma ideia para meu negócio
              </>
            </WhatsappCtaButton>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-slate-800/60 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div {...fadeInUp} className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">O que isso muda no seu dia a dia</h2>
            <p className="mx-auto mt-2 max-w-lg text-sm text-slate-400">
              Não é “ter site por ter”. É parar de repetir a mesma explicação e ganhar confiança antes da venda.
            </p>
          </motion.div>
          <ul className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
            {[
              "Menos tempo explicando preço e serviço no direct — a página já responde o básico",
              "Aparência de negócio organizado, não de improviso",
              "Cliente chega mais decidido porque já viu quem você é",
              "Funciona bem no celular, onde quase todo mundo pesquisa primeiro",
            ].map((line) => (
              <motion.li
                key={line}
                {...fadeInUp}
                className="flex gap-3 rounded-xl border border-slate-800 bg-slate-900/40 px-4 py-3 text-sm leading-snug text-slate-300"
              >
                <FaCheckCircle className="mt-0.5 shrink-0 text-emerald-500" />
                <span>{line}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-b border-slate-800/60 py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div {...fadeInUp} className="mb-12 text-center">
            <h2 className="text-2xl font-bold text-white md:text-3xl">Como funciona</h2>
            <p className="mt-3 text-sm text-slate-400 md:text-base">Quatro passos. Você entra pouco tempo, eu cuido da parte técnica.</p>
          </motion.div>
          <ol className="grid gap-6 md:grid-cols-4">
            {[
              { step: "1", title: "Você chama", desc: "WhatsApp com o que você vende e o que imagina para a página." },
              { step: "2", title: "Alinhamento", desc: "Textos, referências e prioridades. Fica claro o que vai no ar." },
              { step: "3", title: "Montagem", desc: "Eu desenvolvo e mostro para você ajustar detalhes." },
              { step: "4", title: "Publicação", desc: "Página no ar e orientação para você usar no dia a dia." },
            ].map((item) => (
              <motion.li
                key={item.step}
                {...fadeInUp}
                className="relative rounded-2xl border border-slate-800 bg-slate-900/50 p-6 text-center md:text-left"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/20 text-lg font-bold text-emerald-400">
                  {item.step}
                </span>
                <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.desc}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-24 pb-28 md:pb-24">
        <div className="mx-auto max-w-5xl px-4">
          <motion.div
            {...fadeInUp}
            className="rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-950/50 via-slate-900 to-slate-950 p-8 text-center shadow-xl shadow-emerald-900/20 md:p-14"
          >
            <FaMobileAlt className="mx-auto mb-4 text-3xl text-emerald-400" />
            <h2 className="text-2xl font-bold leading-snug text-white md:text-3xl">
              Quem procura seu serviço hoje já compara com quem tem página boa
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-300 md:text-base">
              Não precisa esperar o “momento perfeito”. Uma conversa no WhatsApp já basta para eu entender seu
              negócio e te dizer o que faz sentido — prazo e investimento com transparência.
            </p>
            <p className="mt-8 text-base font-semibold text-white md:text-lg">
              Chame agora e peça seu orçamento
            </p>
            <div className="mt-6 flex w-full max-w-md flex-col items-stretch gap-4 sm:mx-auto sm:max-w-lg">
              <WhatsappCtaButton className="!rounded-xl !py-4 !px-10 !text-base !font-semibold !shadow-xl !shadow-emerald-950/50 md:!text-lg !ring-1 !ring-white/15">
                <>
                  <FaWhatsapp className="mr-2.5 text-2xl shrink-0" />
                  Entre em contato pelo WhatsApp
                </>
              </WhatsappCtaButton>
              <p className="text-center text-sm text-slate-400">
                Orçamento sem compromisso.
              </p>
              <a
                href="https://instagram.com/marcio.weblp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir Instagram — ver projetos reais"
                className="group flex w-full flex-col items-center gap-1 rounded-xl bg-gradient-to-r from-[#833AB4] via-[#E1306C] to-[#F77737] p-[1px] shadow-lg shadow-purple-950/30 transition hover:brightness-110 active:scale-[0.99]"
              >
                <span className="flex w-full items-center justify-center gap-2.5 rounded-[11px] bg-slate-950 px-5 py-3.5 sm:py-4">
                  <FaInstagram className="text-2xl text-white drop-shadow-sm shrink-0" aria-hidden />
                  <span className="text-sm font-semibold tracking-wide text-white sm:text-base">
                    Veja projetos reais no Instagram
                  </span>
                </span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 hidden h-[3.25rem] min-w-[3.25rem] items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 text-sm font-semibold text-white shadow-xl shadow-emerald-950/45 ring-2 ring-emerald-400/30 transition hover:scale-[1.03] hover:bg-emerald-500 md:inline-flex"
        aria-label="Abrir WhatsApp para solicitar orçamento"
        title="WhatsApp — orçamento"
      >
        <FaWhatsapp className="text-2xl shrink-0" aria-hidden />
        <span className="pr-0.5">WhatsApp</span>
      </a>
    </div>
  );
}
