import { Github, Linkedin, Mail, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react'; // Adicione o useState ao import

function App() {
  const [indiceAtivo, setIndiceAtivo] = useState(0);

  const projetos = [

    {
      nome: "Igreja Moria Restart",
      github: "https://github.com/ederoliv/igreja-moria-restart",
      demo: "https://igrejamoriarestart.com.br",
      imagem: "/igrejamoriarestart.png"
    },
    {
      nome: "Advogada Sara Mayélli",
      github: "https://github.com/ederoliv/sara-advogada",
      demo: "https://sara.adv.br",
      imagem: "/sara-adv-br.png"
    },
    {
      nome: "Espaço de Beleza Aline Bueno",
      github: "https://github.com/ederoliv/espaco-aline-bueno",
      demo: "https://espaco-aline-bueno.vercel.app/",
      imagem: "/espacoalinebueno.png"
    },
        {
      nome: "Goeat",
      descricao: "Sistema de delivery de comida.",
      github: "https://github.com/ederoliv/goeat-sejaparceiro",
      demo: "https://goeat.app.br",
      imagem: "/goeat-app-br.png" // Caminho da imagem na pasta public
    }
  ];

  const proximoProjeto = () => {
    setIndiceAtivo((prev) => (prev + 1) % projetos.length);
  };

  const projetoAnterior = () => {
    setIndiceAtivo((prev) => (prev - 1 + projetos.length) % projetos.length);
  };

  return (
    <div className="flex flex-col min-h-screen">

      <header className="w-full z-50">
        <nav className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="text-5xl tracking-tighter">
            Eder<span className="font-bold text-[#32E6E2]">Oliveira</span>
          </div>
          <ul className="hidden md:flex gap-8 items-center text-2xl font-medium tracking-widest">
            <li><a href="#sobre" className="text-[#32E6E2] hover:shadow-2xl transition-colors">Sobre</a></li>
            <li><a href="#portifolio" className="text-[#32E6E2] hover:shadow-2xl transition-colors">Portfólio</a></li>
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


      <main className="grow xl:pt-20 md:pt-20 sm:pt-0">
        <section className="max-w-6xl mx-auto px-6 py-20 md:py-32 flex flex-col md:flex-row items-center justify-between gap-12">
          <div data-aos="fade-right" className="flex-1 space-y-6 text-center md:text-left">
            <h2 className="text-5xl">Desenvolvedor</h2>
            <h1 className="text-[#32E6E2] text-5xl md:text-7xl font-bold leading-tight">FullStack</h1>
            <p className="text-gray-400 text-[20px] md:text-lgax-w-lg leading-relaxed">
              Transformando ideias em soluções digitais robustas e escaláveis. 
              Focado em criar interfaces intuitivas no Frontend e arquiteturas eficientes no Backend.
            </p>
          </div>
          <div data-aos="fade-left" className="flex-1 flex justify-center">
            <img src="dashboard.svg" alt="Ilustração Tech" className="w-full max-w-5xl" />
          </div>
        </section>


        <section id="sobre" className="max-w-5xl mx-auto px-6 py-20">
          <h2 className="text-center text-5xl text-[#32E6E2] font-bold mb-16 tracking-widest">Sobre mim</h2>
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div data-aos="fade-right" className="relative group">
              <div className="absolute -inset-1 blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <img 
                src="profile.png" 
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


<section data-aos="zoom-in" id="portifolio">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-center text-5xl text-[#32E6E2] font-bold mb-16 tracking-widest mt-20">Portfólio</h2>
    
    <div className="relative flex items-center group/carousel">

      <button 
        onClick={projetoAnterior}
        className="absolute -left-4 z-20 p-2 text-white/50 hover:text-[#32E6E2] transition-colors"
      >
        <ChevronLeft size={48} />
      </button>
      

      <div 
        className="w-full h-[500px] bg-[#111] border border-white/10 rounded-xl overflow-hidden relative group"
        style={{
          backgroundImage: `url(${projetos[indiceAtivo].imagem})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top'
        }}
      >

        <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
          <h3 className="text-4xl font-bold text-[#32E6E2] mb-6">{projetos[indiceAtivo].nome}</h3>
          
          <div className="flex gap-8">
            <a href={projetos[indiceAtivo].github} target="_blank" rel="noopener noreferrer" 
               className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-lg hover:bg-[#32E6E2] hover:text-black transition-all">
              <Github size={24} /> GitHub
            </a>
            <a href={projetos[indiceAtivo].demo} target="_blank" rel="noopener noreferrer"
               className="flex items-center gap-2 bg-[#32E6E2] text-black px-6 py-3 rounded-lg font-bold hover:scale-105 transition-all">
              <ExternalLink size={24} /> Demo
            </a>
          </div>
        </div>
      </div>

      <button 
        onClick={proximoProjeto}
        className="absolute -right-4 z-20 p-2 text-white/50 hover:text-[#32E6E2] transition-colors"
      >
        <ChevronRight size={48} />
      </button>
    </div>


    <div className="flex justify-center gap-3 mt-8">
      {projetos.map((_, i) => (
        <div 
          key={i}
          className={`w-3 h-3 rounded-full transition-colors ${i === indiceAtivo ? 'bg-[#32E6E2]' : 'bg-white/20'}`}
        ></div>
      ))}
    </div>
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
            className="inline-block bg-[#32E6E2] text-black font-bold px-10 py-4 rounded-md hover:scale-105 active:scale-95 transition-all shadow-[0_0_20px_rgba(50,230,226,0.3)]"
          >
            Baixar currículo.pdf
          </a>
        </section>
      </main>


      <footer className="border-t border-[#32E6E2]/50 py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-6">
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/ederoliv" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#32E6E2] transition-colors"><Linkedin /></a>
            <a href="https://github.com/ederoliv" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#32E6E2] transition-colors"><Github /></a>
            <a href="mailto:ederoliveira152@gmail.com" className="text-gray-400 hover:text-[#32E6E2] transition-colors"><Mail /></a>
          </div>
          <p className="text-[#32E6E2] text-sm">
            © {new Date().getFullYear()} Eder Oliveira. Desenvolvido com React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;