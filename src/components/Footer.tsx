const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ganendra Rizky Deniartra. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with <span className="text-foreground">♥</span> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
