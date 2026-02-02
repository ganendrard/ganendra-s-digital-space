import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  {
    title: "Belajar Data Analyst dari 0 untuk Pemula",
    issuer: "Coding Studio",
    date: "September 2025",
    link: "https://drive.google.com/file/d/1WeoeTfmgLomorX1vnXjDLPnbd19zz_wR/view",
  },
  {
    title: "Machine Learning Basic Untuk Pemula Menggunakan Python",
    issuer: "HaloGeo Academy",
    date: "September 2025",
    link: "https://drive.google.com/file/d/17f8T3vjwWZGxiPxSI6GFy87yufHJm_77/view",
  },
  {
    title: "Study Case Bootcamp Data Analyst with Excel",
    issuer: "DQ Lab",
    date: "Oktober 2025",
    link: "https://academy.dqlab.id/Certificate_check/result/DQLABMB8EXCFKNPFH#mycertificate",
  },
  {
    title: "Web Development: Back End",
    issuer: "MySkill",
    date: "Oktober 2025",
    link: "https://drive.google.com/file/d/1aNflWQXY7Fb9dC0S42x4tDUauX-onj2z/view",
  },
  {
    title: "Data Visualization with Microsoft Excel",
    issuer: "MySkill",
    date: "November 2025",
    link: "https://drive.google.com/file/d/1fg5VBNjA50So5fBxTfW_rh_UjPkk3p7p/view",
  },
  {
    title: "Data Analysis Fundamental",
    issuer: "MySkill",
    date: "November 2025",
    link: "https://drive.google.com/file/d/1N6inz90A6XIyTVGuZvVSGiI6S66-Ky43/view",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-4">Sertifikasi & Kursus</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-foreground to-transparent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card p-6 hover:border-foreground/30 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary group-hover:bg-accent transition-colors flex-shrink-0">
                    <Award size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-sm md:text-base group-hover:text-foreground/90 line-clamp-2">
                        {cert.title}
                      </h3>
                      <ExternalLink
                        size={16}
                        className="text-muted-foreground group-hover:text-foreground transition-colors flex-shrink-0 mt-1"
                      />
                    </div>
                    <p className="text-muted-foreground text-sm mt-1">{cert.issuer}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-2">
                      <Calendar size={12} />
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
