import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
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
  );
}
