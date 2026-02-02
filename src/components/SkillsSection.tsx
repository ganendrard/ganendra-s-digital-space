import { Code, Brain, MessageSquare, Languages, Wrench } from "lucide-react";

const hardSkills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React JS",
  "Python",
  "Data Processing",
  "Data Visualization",
  "Web Development",
];

const softSkills = [
  "Problem Solving",
  "Adaptability",
  "Analytical Thinking",
  "Leadership",
  "Teamwork",
  "Communication",
];

const tools = [
  "Microsoft Office",
  "VS Code",
  "Figma",
  "Canva",
  "Google Colab",
  "Git/GitHub",
];

const languages = [
  { name: "Indonesia", level: "Native", percentage: 100 },
  { name: "English", level: "Pasif", percentage: 60 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="section-title text-center mb-4">Keahlian</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-foreground to-transparent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Hard Skills */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-secondary">
                  <Code size={24} />
                </div>
                <h3 className="text-xl font-serif font-semibold">Hard Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {hardSkills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-secondary">
                  <Brain size={24} />
                </div>
                <h3 className="text-xl font-serif font-semibold">Soft Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {softSkills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-secondary">
                  <Wrench size={24} />
                </div>
                <h3 className="text-xl font-serif font-semibold">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool) => (
                  <span key={tool} className="skill-badge">
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-secondary">
                  <Languages size={24} />
                </div>
                <h3 className="text-xl font-serif font-semibold">Bahasa</h3>
              </div>
              <div className="space-y-4">
                {languages.map((lang) => (
                  <div key={lang.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{lang.name}</span>
                      <span className="text-sm text-muted-foreground">{lang.level}</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-foreground/80 rounded-full transition-all duration-1000"
                        style={{ width: `${lang.percentage}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
