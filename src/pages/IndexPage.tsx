import { Monitor, Cloud, Smartphone, Globe } from 'lucide-react';
import { Link } from '@tanstack/react-router';

export function IndexPage() {
  const cards = [
    { title: "Software Desktop", icon: Monitor, description: "Sistemas robustos para Windows, macOS e Linux." },
    { title: "SaaS", icon: Cloud, description: "Aplicações escaláveis baseadas na nuvem." },
    { title: "Aplicativos Mobile", icon: Smartphone, description: "Apps nativos e multiplataforma para iOS e Android." },
    { title: "Sites Institucionais", icon: Globe, description: "Presença digital moderna e otimizada para web." }
  ];

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12">
        <div data-aos="fade-right" className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-5xl">Desenvolvedor</h2>
          <h1 className="text-[#32E6E2] text-5xl md:text-7xl font-bold leading-tight">FullStack</h1>
          <p className="text-gray-400 text-[20px] md:text-lg max-w-lg leading-relaxed">
            Transformando ideias em soluções digitais robustas e escaláveis. 
            Focado em criar interfaces intuitivas no Frontend e arquiteturas eficientes no Backend.
          </p>
        </div>
        <div data-aos="fade-left" className="flex-1 flex justify-center">
          <img src="/dashboard.svg" alt="Ilustração Tech" className="w-full max-w-5xl" />
        </div>
      </section>

      <section id="sobre" className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="text-center text-5xl text-[#32E6E2] font-bold mb-16 tracking-widest">Sobre mim</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div data-aos="fade-right" className="relative group">
            <div className="absolute -inset-1 blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <img 
              src="/profile.png" 
              alt="Eder Oliveira" 
              className="relative w-100 h-100 object-cover"
            />
          </div>
          <div data-aos="fade-left" className="flex-1 space-y-4 text-gray-300 text-lg leading-relaxed">
            <p>
              Olá! Sou o Eder, um entusiasta de tecnologia focado em desenvolvimento Fullstack. 
              Minha jornada envolve a criação de sistemas que resolvem problemas reais, 
              utilizando as melhores práticas de mercado com Java, React e ecossistema Linux.
            </p>
            <p>
              Sempre em busca de novos desafios, acredito que o código é uma ferramenta para 
              impactar positivamente a vida das pessoas e o sucesso de negócios.
            </p>
          </div>
        </div>
      </section>

      <section data-aos="zoom-in" id="portifolio" className="py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-5xl text-[#32E6E2] font-bold mb-16 tracking-widest mt-20">Portfólio</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {cards.map((card, idx) => (
              <div key={idx} className="bg-[#111] border border-white/10 rounded-xl p-8 hover:border-[#32E6E2]/50 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center text-center group">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#32E6E2]/20 transition-colors">
                  <card.icon size={32} className="text-[#32E6E2]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                <p className="text-gray-400">{card.description}</p>
              </div>
            ))}
          </div>

          <Link 
            to="/portfolio" 
            className="inline-block bg-[#32E6E2] text-black font-bold px-10 py-4 rounded-md hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(50,230,226,0.3)]"
          >
            Ver Portfólio Completo
          </Link>
        </div>
      </section>

      <section className="py-20 text-center space-y-8">
        <h2 data-aos="fade-right" className="text-5xl text-[#32E6E2] font-bold tracking-widest ">Currículo</h2>
        <p data-aos="fade-left" className="text-gray-400 max-w-xl mx-auto px-6">
          Mais detalhes sobre experiências profissionais e informações de contato estão no meu currículo. 
          Você pode fazer o download clicando no botão abaixo:
        </p>
        <a data-aos="fade-right"
          href="/curriculo.pdf" 
          download 
          className="inline-block bg-white/10 text-white font-bold px-10 py-4 rounded-md hover:bg-white/20 transition-all border border-white/10"
        >
          Baixar Currículo
        </a>
      </section>
    </>
  );
}
