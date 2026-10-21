import { ArrowDown, Github, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import heroIllustration from "@/assets/hero-illustration.png";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-[100svh] flex items-center relative pt-14 sm:pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,hsl(0_0%_15%)_0%,transparent_50%)] opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 relative z-10">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-[1.15fr_1fr] gap-10 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base mb-3 sm:mb-4 animate-fade-in-up opacity-0 stagger-1">
              Selamat Datang di Portofolio Saya
            </p>
            
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-4 sm:mb-6 animate-fade-in-up opacity-0 stagger-2 leading-tight">
              Ganendra Rizky
              <span className="block gradient-text">Deniartra</span>
            </h1>
            
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-6 sm:mb-8 animate-fade-in-up opacity-0 stagger-3 px-2 lg:px-0">
              Mahasiswa Pendidikan Teknik Informatika & Komputer | Web Developer | Data Enthusiast
            </p>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-2 sm:gap-4 mb-8 sm:mb-12 animate-fade-in-up opacity-0 stagger-4 flex-wrap">
              <a
                href="https://github.com/ganendrard"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 hover:scale-110 touch-manipulation"
                aria-label="GitHub"
              >
                <Github size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/ganendrard"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 hover:scale-110 touch-manipulation"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.instagram.com/ganendra.rd/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 hover:scale-110 touch-manipulation"
                aria-label="Instagram"
              >
                <Instagram size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:ganendra.rizkyd@gmail.com"
                className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 hover:scale-110 touch-manipulation"
                aria-label="Email"
              >
                <Mail size={18} className="sm:w-5 sm:h-5" />
              </a>
              <a
                href="tel:+6289687269695"
                className="p-2.5 sm:p-3 rounded-full bg-secondary hover:bg-accent transition-all duration-300 hover:scale-110 touch-manipulation"
                aria-label="Phone"
              >
                <Phone size={18} className="sm:w-5 sm:h-5" />
              </a>
            </div>

            <a
              href="#about"
              className="inline-flex items-center gap-2 text-sm sm:text-base text-muted-foreground hover:text-foreground transition-colors animate-fade-in-up opacity-0 stagger-5 touch-manipulation"
            >
              <span>Scroll untuk melihat lebih</span>
              <ArrowDown className="animate-bounce" size={18} />
            </a>
          </div>

          {/* Illustration */}
          <div className="flex justify-center animate-fade-in opacity-0 stagger-3">
            <img
              src={heroIllustration}
              alt="Ilustrasi monokrom seorang developer yang sedang bekerja ditemani elemen kode, data, dan pendidikan"
              className="w-56 sm:w-72 lg:w-full max-w-md rounded-xl opacity-90 select-none pointer-events-none"
              width={1024}
              height={1024}
              draggable={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
