import { ArrowDown, Github, Linkedin, Instagram, Mail, Phone } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(0_0%_15%)_0%,transparent_50%)] opacity-50" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-sm md:text-base mb-4 animate-fade-in-up opacity-0 stagger-1">
            Selamat Datang di Portofolio Saya
          </p>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 animate-fade-in-up opacity-0 stagger-2">
            Ganendra Rizky
            <span className="block gradient-text">Deniartra</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up opacity-0 stagger-3">
            Mahasiswa Pendidikan Teknik Informatika & Komputer | Web Developer | Data Enthusiast
          </p>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 mb-12 animate-fade-in-up opacity-0 stagger-4">
            <a
              href="https://github.com/ganendrard"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ganendrard/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://instagram.com/ganendrard"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="mailto:ganendra.rizkyd@gmail.com"
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="tel:+6289687269695"
              className="p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 hover:scale-110"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>

          <a
            href="#about"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-fade-in-up opacity-0 stagger-5"
          >
            <span>Scroll untuk melihat lebih</span>
            <ArrowDown className="animate-bounce" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
