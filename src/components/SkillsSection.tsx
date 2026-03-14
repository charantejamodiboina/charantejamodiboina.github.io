import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaDatabase
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiTypescript
} from "react-icons/si";

const skills = [
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
  { name: "React.js", icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-500" },
  { name: "Django REST Framework", icon: SiDjango, color: "text-green-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-400" },
  // { name: "ServiceNow", icon: SiServicenow, color: "text-green-600" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className="group flex flex-col items-center justify-center p-6 rounded-xl border border-border bg-card hover:border-primary hover:-translate-y-2 transition-all duration-300 cursor-pointer"
              >
                <Icon
                  size={45}
                  className={`${skill.color} mb-3 group-hover:scale-110 transition-transform`}
                />

                <p className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default SkillsSection;