const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-center md:text-left">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {currentYear} Ganendra Rizky Deniartra. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Built with <span className="text-foreground">♥</span> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
