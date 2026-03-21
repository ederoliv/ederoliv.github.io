import { Github, Linkedin, Mail, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header / Navbar */}
      <header className="w-full z-50">
        <nav className="top-5 max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-5xl tracking-tighter">
            Eder<span className="font-bold text-[#32E6E2]">Oliveira</span>
          </div>
          <ul className="hidden md:flex gap-8 items-center text-2xl font-bold tracking-widest">
            <li><a href="#sobre" className="text-[#32E6E2] hover:shadow-2xl transition-colors">Sobre</a></li>
            <li><a href="#portfolion" className="text-[#32E6E2] hover:shadow-2xl transition-colors">Portfólio</a></li>
            <li>
              <a 
                href="/curriculo.pdf" 
                target="_blank"
                className="border border-[#32E6E2] text-[#32E6E2] px-6 py-2 rounded-xl hover:bg-[#32E6E2] hover:text-black transition-all"
              >
                Currículo
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="grow pt-20">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-5xl">Desenvolvedor</h2>
            <h1 className="text-[#32E6E2] text-5xl md:text-7xl font-bold leading-tight">FullStack</h1>
            <p className="text-gray-400 max-w-lg leading-relaxed">
              Transformando ideias em soluções digitais robustas e escaláveis. 
              Focado em criar interfaces intuitivas no Frontend e arquiteturas eficientes no Backend.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            {/* Espaço para a ilustração da imagem */}
            <img src="/public/dashboard.svg" alt="Ilustração Tech" className="w-full max-w-5xl animate-pulse" />
          </div>
        </section>

        {/* Sobre Mim */}
        <section id="sobre" className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-center text-3xl font-bold mb-16 uppercase tracking-widest">Sobre <span className="text-[#32E6E2]">mim</span></h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="relative group">
              <div className="absolute -inset-1 bg-[#32E6E2] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src="https://github.com/ederoliv.png" 
                alt="Eder Oliveira" 
                className="relative w-64 h-64 rounded-full border-2 border-[#32E6E2] object-cover"
              />
            </div>
            <div className="flex-1 space-y-4 text-gray-300 text-lg leading-relaxed">
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

        {/* Portfólio (Slider Concept) */}
        <section id="portfolio">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-center text-3xl font-bold mb-16 uppercase tracking-widest">Portfólio</h2>
            <div className="relative flex items-center group">
              <button className="absolute -left-4 z-10 p-2 text-white/50 hover:text-[#32E6E2] transition-colors">
                <ChevronLeft size={48} />
              </button>
              
              <div className="w-full h-[400px] bg-[#111] border border-white/10 rounded-xl overflow-hidden flex items-center justify-center relative">
                {/* Placeholder para os projetos */}
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold">Nome do Projeto</h3>
                  <p className="text-gray-500">Descrição breve das tecnologias e objetivo.</p>
                  <div className="flex justify-center gap-4">
                    <Github className="cursor-pointer hover:text-[#32E6E2]" />
                    <ExternalLink className="cursor-pointer hover:text-[#32E6E2]" />
                  </div>
                </div>
              </div>

              <button className="absolute -right-4 z-10 p-2 text-white/50 hover:text-[#32E6E2] transition-colors">
                <ChevronRight size={48} />
              </button>
            </div>
            {/* Dots */}
            <div className="flex justify-center gap-3 mt-8">
              <div className="w-3 h-3 rounded-full bg-[#32E6E2]"></div>
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
              <div className="w-3 h-3 rounded-full bg-white/20"></div>
            </div>
          </div>
        </section>

        {/* Currículo Section */}
        <section className="py-20 text-center space-y-8">
          <h2 className="text-3xl font-bold tracking-widest uppercase">Currículo</h2>
          <p className="text-gray-400 max-w-xl mx-auto px-6">
            Mais detalhes sobre experiências profissionais e informações de contato estão no meu currículo. 
            Você pode fazer o download clicando no botão abaixo:
          </p>
          <a 
            href="/curriculo.pdf" 
            download 
            className="inline-block bg-[#32E6E2] text-black font-bold px-10 py-4 rounded-md hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(50,230,226,0.3)]"
          >
            Baixar currículo.pdf
          </a>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 mt-20 bg-black/50">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-[#32E6E2] transition-colors"><Linkedin /></a>
            <a href="#" className="text-gray-400 hover:text-[#32E6E2] transition-colors"><Github /></a>
            <a href="#" className="text-gray-400 hover:text-[#32E6E2] transition-colors"><Mail /></a>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Eder Oliveira. Desenvolvido com React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;