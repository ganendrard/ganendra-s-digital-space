import { GraduationCap, MapPin, Calendar } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-4">Tentang Saya</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-foreground to-transparent mx-auto mb-8 sm:mb-12" />

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Profile Summary */}
            <div className="glass-card p-6 sm:p-8">
              <p className="text-muted-foreground leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Mahasiswa aktif Pendidikan Teknik Informatika dan Komputer Universitas Negeri Jakarta 
                semester 6 dengan <span className="text-foreground font-semibold">IPK 3.84</span>. 
                Berpengalaman dalam memimpin koordinasi tim sebagai Ketua Departemen Rohani dan Sosial 
                di BEMP PTIK dan Wakil Ketua Umum RISMAF.
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                Memiliki kemampuan dalam pengembangan web dan analisis data, dengan keahlian teknis 
                pada Python, Javascript, dan pemrosesan data. Memiliki minat besar dalam memanfaatkan 
                wawasan berbasis data serta teknologi untuk menyelesaikan masalah kompleks, dan sedang 
                mencari pengalaman baru pada bidang yang relevan dengan latar belakang serta keahlian 
                saya untuk berkontribusi pada proyek yang berdampak.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-lg sm:text-xl font-serif font-semibold mb-4 sm:mb-6">Pendidikan</h3>
              
              <div className="glass-card p-4 sm:p-6 hover:border-foreground/30 transition-colors">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-secondary flex-shrink-0">
                    <GraduationCap size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">Universitas Negeri Jakarta</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">
                      S-1 Pendidikan Teknik Informatika dan Komputer
                    </p>
                    <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="sm:w-3.5 sm:h-3.5" /> 2023 - Sekarang
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="sm:w-3.5 sm:h-3.5" /> DKI Jakarta
                      </span>
                    </div>
                    <p className="mt-2 text-xs sm:text-sm font-medium">IPK: 3.84</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-4 sm:p-6 hover:border-foreground/30 transition-colors">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="p-2 sm:p-3 rounded-lg bg-secondary flex-shrink-0">
                    <GraduationCap size={20} className="sm:w-6 sm:h-6" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold mb-1 text-sm sm:text-base">MAN 15 Jakarta</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground mb-2">IPA</p>
                    <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} className="sm:w-3.5 sm:h-3.5" /> 2020 - 2023
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin size={12} className="sm:w-3.5 sm:h-3.5" /> DKI Jakarta
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Organizational Experience */}
          <div className="mt-12 sm:mt-16">
            <h3 className="text-lg sm:text-xl font-serif font-semibold mb-6 sm:mb-8 text-center">Pengalaman Organisasi</h3>
            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
              <div className="glass-card p-4 sm:p-6 hover:border-foreground/30 transition-colors">
                <h4 className="font-semibold text-base sm:text-lg mb-2">BEMP PTIK</h4>
                <p className="text-primary/80 text-xs sm:text-sm mb-2 sm:mb-3">Ketua Departemen Rohani dan Sosial</p>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">Maret 2025 – Februari 2026</p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Bekerja sama dengan 4 staff departemen untuk menjalankan 4 Non-Program Kerja 
                  Departemen Rohani dan Sosial meliputi aksi sosial, pengabdian masyarakat, dan 
                  kegiatan kerohanian lingkungan kampus.
                </p>
              </div>

              <div className="glass-card p-4 sm:p-6 hover:border-foreground/30 transition-colors">
                <h4 className="font-semibold text-base sm:text-lg mb-2">RISMAF</h4>
                <p className="text-primary/80 text-xs sm:text-sm mb-2 sm:mb-3">Wakil Ketua Umum</p>
                <p className="text-xs sm:text-sm text-muted-foreground mb-2 sm:mb-3">April 2023 - Sekarang</p>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Membantu Ketua umum dalam menjalankan program kerja organisasi, bertanggung jawab 
                  mengawasi kinerja divisi tertentu dan mewakili ketua umum jika berhalangan hadir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
