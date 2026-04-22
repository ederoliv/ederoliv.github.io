export function Navbar() {
  return (
    <header className="w-full z-50">
      <nav className="max-w-6xl mx-auto px-6 h-20 flex justify-between items-center">
        <div className="text-5xl tracking-tighter">
          Eder<span className="font-bold text-[#32E6E2]">Oliveira</span>
        </div>
        <ul className="hidden md:flex gap-8 items-center text-white text-2xl font-medium tracking-widest">
          <li><a href="#sobre" className="hover:shadow-2xl transition-colors">Sobre</a></li>
          <li><a href="#portifolio" className="hover:shadow-2xl transition-colors">Portfólio</a></li>
          <li>
            <a 
              href="/curriculo.pdf" 
              target="_blank"
              className="border border-[#32E6E2] px-6 py-2 rounded-xl hover:bg-[#32E6E2] hover:text-black transition-all"
            >
              Currículo
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
