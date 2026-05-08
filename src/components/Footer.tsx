export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-light py-8 border-t border-primary-dark/10">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-primary-dark/60 text-sm">
          &copy; {currentYear} Eder Oliveira. Todos os direitos reservados.
        </p>
        
        <div className="flex gap-6 text-sm">
          <a
            href="#"
            className="text-primary-dark/60 hover:text-primary-dark transition-colors"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-primary-dark/60 hover:text-primary-dark transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:seuemail@exemplo.com"
            className="text-primary-dark/60 hover:text-primary-dark transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
