import { Briefcase, GraduationCap, MonitorPlay, BookOpen } from "lucide-react";
import experienceIllustration from "@/assets/experience-illustration.png";

const experiences = [
  {
    icon: BookOpen,
    org: "SMP Labschool Ciracas",
    role: "Guru PKM (Praktik Kegiatan Mengajar) / Intern",
    period: "Juli 2026 – November 2026",
    location: "Jakarta, Indonesia",
    points: [
      "Mengajarkan mata pelajaran Informatika kepada siswa kelas VIII, dengan fokus materi pada analisis data, berpikir komputasional, serta algoritma dan pemrograman.",
      "Menyusun materi pembelajaran yang interaktif dan melakukan evaluasi terhadap perkembangan pemahaman akademik siswa secara berkala.",
    ],
  },
  {
    icon: MonitorPlay,
    org: "Nusantara TV",
    role: "Intern Master Control Room (MCR)",
    period: "Maret 2026 – Juni 2026",
    location: "Jakarta, Indonesia",
    points: [
      "Memantau kualitas tayangan audio dan video untuk memastikan kelancaran siaran program televisi agar berjalan sesuai dengan jadwal (playlist) stasiun TV.",
      "Mengoperasikan perangkat Master Control Room untuk mengatur pergantian segmen program, penyisipan jeda iklan komersial, dan integrasi grafis siaran.",
      "Berkoordinasi secara langsung dengan tim produksi dan teknisi siaran dalam menangani kendala teknis (troubleshooting) selama siaran langsung maupun siaran tunda berlangsung.",
      "Merancang dan mengembangkan MCR Logbook berbasis Web Interaktif sebagai standar pencatatan operasional harian untuk pelaporan kegiatan siaran secara terstruktur.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-4">Pengalaman Kerja & Magang</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-foreground to-transparent mx-auto mb-8 sm:mb-12" />

          <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8 lg:gap-10 items-start">
            {/* Illustration */}
            <div className="flex justify-center lg:sticky lg:top-24 animate-fade-in">
              <img
                src={experienceIllustration}
                alt="Ilustrasi monokrom kegiatan mengajar dan ruang kontrol siaran televisi"
                className="w-full max-w-md rounded-xl opacity-90 select-none pointer-events-none"
                width={1024}
                height={1024}
                loading="lazy"
                draggable={false}
              />
            </div>

            {/* Experience cards */}
            <div className="space-y-4 sm:space-y-6">
              {experiences.map((exp) => (
                <div key={exp.org} className="glass-card p-4 sm:p-6 hover:border-foreground/30 transition-colors">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="p-2 sm:p-3 rounded-lg bg-secondary flex-shrink-0">
                      <exp.icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-base sm:text-lg mb-1">{exp.org}</h3>
                      <p className="text-primary/80 text-xs sm:text-sm mb-1">{exp.role}</p>
                      <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Briefcase size={12} className="sm:w-3.5 sm:h-3.5" /> {exp.period}
                        </span>
                        <span>{exp.location}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.points.map((point, i) => (
                          <li key={i} className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex gap-2">
                            <span className="mt-1.5 h-1 w-1 rounded-full bg-muted-foreground/60 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
