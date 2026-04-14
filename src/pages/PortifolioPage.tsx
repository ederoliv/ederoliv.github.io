import { Github, ExternalLink, ChevronLeft, ChevronRight, Monitor, Cloud, Smartphone, Globe } from 'lucide-react';
import { useState } from 'react';

// Placeholder section component for empty categories
function CategoryPlaceholder({ title, description, icon: Icon }: { title: string, description: string, icon: any }) {
  return (
    <div className="w-full bg-[#111] border border-white/10 rounded-xl p-12 flex flex-col items-center justify-center text-center mt-8 mb-16 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-b from-[#32E6E2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="w-20 h-20 bg-[#32E6E2]/10 rounded-full flex items-center justify-center mb-6">
        <Icon size={40} className="text-[#32E6E2]" />
      </div>
      <h3 className="text-3xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 max-w-2xl">{description}</p>
      <div className="mt-8 inline-block px-6 py-2 border border-[#32E6E2]/30 text-[#32E6E2] rounded-full text-sm font-semibold tracking-wider uppercase">
        Projetos em breve
      </div>
    </div>
  );
}

export function PortifolioPage() {
  const [indiceAtivo, setIndiceAtivo] = useState(0);

  const sitesInstitucionais = [
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
      nome: "Unibits",
      github: "https://github.com/ederoliv/unibits",
      demo: "https://unibits.com.br",
      imagem: "/unibits.png"
    },
    {
      nome: "Goeat",
      descricao: "Sistema de delivery de comida.",
      github: "https://github.com/ederoliv/goeat-sejaparceiro",
      demo: "https://goeat.app.br",
      imagem: "/goeat-app-br.png"
    }
  ];

  const proximoProjeto = () => {
    setIndiceAtivo((prev) => (prev + 1) % sitesInstitucionais.length);
  };

  const projetoAnterior = () => {
    setIndiceAtivo((prev) => (prev - 1 + sitesInstitucionais.length) % sitesInstitucionais.length);
  };

  return (
    <div className="min-h-screen py-20 pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-center text-5xl md:text-6xl text-[#32E6E2] font-bold mb-8 tracking-widest mt-10">
          Portfólio Completo
        </h1>
        <p className="text-center text-gray-400 max-w-2xl mx-auto mb-20 text-lg">
          Explore as diferentes categorias de projetos em que atuo, desde robustos sistemas desktop até web apps em nuvem.
        </p>
        
        {/* Sites Institucionais Section */}
        <section data-aos="fade-up" className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <Globe className="text-[#32E6E2]" size={36} />
            <h2 className="text-4xl text-white font-bold">Sites Institucionais</h2>
          </div>
          
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
                backgroundImage: `url(${sitesInstitucionais[indiceAtivo].imagem})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-black/80 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm">
                <h3 className="text-4xl font-bold text-[#32E6E2] mb-6 text-center px-4">{sitesInstitucionais[indiceAtivo].nome}</h3>
                <div className="flex gap-4 md:gap-8 flex-wrap justify-center">
                  <a href={sitesInstitucionais[indiceAtivo].github} target="_blank" rel="noopener noreferrer" 
                     className="flex items-center gap-2 bg-white/10 px-6 py-3 rounded-lg hover:bg-[#32E6E2] hover:text-black transition-all">
                    <Github size={24} /> GitHub
                  </a>
                  <a href={sitesInstitucionais[indiceAtivo].demo} target="_blank" rel="noopener noreferrer"
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
            {sitesInstitucionais.map((_, i) => (
              <div 
                key={i}
                className={`w-3 h-3 rounded-full transition-colors ${i === indiceAtivo ? 'bg-[#32E6E2]' : 'bg-white/20'}`}
              ></div>
            ))}
          </div>
        </section>

        {/* Software Desktop Section */}
        <section data-aos="fade-up" className="mb-24">
          <div className="flex items-center gap-4 mb-2">
            <Monitor className="text-[#32E6E2]" size={36} />
            <h2 className="text-4xl text-white font-bold">Software Desktop</h2>
          </div>
          <CategoryPlaceholder 
            title="Sistemas Nativos" 
            description="Soluções robustas e de alto desempenho desenvolvidas para Windows, Linux e macOS."
            icon={Monitor} 
          />
        </section>

        {/* SaaS Section */}
        <section data-aos="fade-up" className="mb-24">
          <div className="flex items-center gap-4 mb-2">
            <Cloud className="text-[#32E6E2]" size={36} />
            <h2 className="text-4xl text-white font-bold">SaaS</h2>
          </div>
          <CategoryPlaceholder 
            title="Software as a Service" 
            description="Plataformas escaláveis na nuvem, multi-tenant e focadas em performance e disponibilidade."
            icon={Cloud} 
          />
        </section>

        {/* Aplicativos Mobile Section */}
        <section data-aos="fade-up">
          <div className="flex items-center gap-4 mb-2">
            <Smartphone className="text-[#32E6E2]" size={36} />
            <h2 className="text-4xl text-white font-bold">Aplicativos Mobile</h2>
          </div>
          <CategoryPlaceholder 
            title="Apps iOS & Android" 
            description="Aplicativos nativos e híbridos projetados para entregar a melhor experiência móvel (UX/UI)."
            icon={Smartphone} 
          />
        </section>

      </div>
    </div>
  );
}
