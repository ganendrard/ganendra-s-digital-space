import { Mail, Phone, MapPin, Github, Linkedin, Instagram, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title text-center mb-4">Hubungi Saya</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-foreground to-transparent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-serif font-semibold mb-6">Mari Terhubung</h3>
              <p className="text-muted-foreground mb-8">
                Saya selalu terbuka untuk kesempatan baru, kolaborasi, atau sekadar berdiskusi. 
                Jangan ragu untuk menghubungi saya!
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:ganendra.rizkyd@gmail.com"
                  className="flex items-center gap-4 p-4 glass-card hover:border-foreground/30 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-secondary group-hover:bg-accent transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">ganendra.rizkyd@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+6289687269695"
                  className="flex items-center gap-4 p-4 glass-card hover:border-foreground/30 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-secondary group-hover:bg-accent transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Telepon</p>
                    <p className="font-medium">+62 896 8726 9695</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 glass-card">
                  <div className="p-2 rounded-lg bg-secondary">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Lokasi</p>
                    <p className="font-medium">Jakarta Timur, DKI Jakarta</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <p className="text-sm text-muted-foreground mb-4">Temukan saya di</p>
                <div className="flex gap-3">
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
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-card p-8">
              <h3 className="text-xl font-serif font-semibold mb-6">Kirim Pesan</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nama
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-foreground/50 focus:outline-none transition-colors"
                    placeholder="Nama Anda"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-foreground/50 focus:outline-none transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border focus:border-foreground/50 focus:outline-none transition-colors resize-none"
                    placeholder="Tulis pesan Anda..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-foreground text-background font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={18} />
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
