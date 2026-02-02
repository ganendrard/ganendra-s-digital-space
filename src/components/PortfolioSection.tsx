import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "GitHub Profile",
    description: "Repository dan project-project yang telah saya kerjakan menggunakan berbagai teknologi.",
    tags: ["JavaScript", "React", "Python"],
    link: "https://github.com/ganendrard",
    type: "github",
  },
  {
    title: "Personal Blog",
    description: "Blog pribadi berisi artikel dan tulisan seputar teknologi dan pengalaman.",
    tags: ["WordPress", "Blog"],
    link: "https://ganendrarizkyd.wordpress.com",
    type: "website",
  },
  {
    title: "Pinterest Portfolio",
    description: "Koleksi inspirasi desain dan karya visual yang saya kurasi.",
    tags: ["Design", "Visual"],
    link: "https://id.pinterest.com/ganendrard/",
    type: "website",
  },
  {
    title: "SekilesInfo",
    description: "Blog informatif dengan berbagai artikel menarik dan bermanfaat.",
    tags: ["Blogger", "Content"],
    link: "https://sekilesinfo.blogspot.com",
    type: "website",
  },
  {
    title: "SekilesBola",
    description: "Blog khusus seputar berita dan informasi olahraga sepakbola.",
    tags: ["Blogger", "Sports"],
    link: "https://sekilesbola.blogspot.com",
    type: "website",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-4">Portofolio</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-foreground to-transparent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card p-6 hover:border-foreground/30 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-secondary group-hover:bg-accent transition-colors">
                    {project.type === "github" ? <Github size={24} /> : <ExternalLink size={24} />}
                  </div>
                  <ExternalLink
                    size={18}
                    className="text-muted-foreground group-hover:text-foreground transition-colors"
                  />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2 group-hover:text-foreground/90">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
