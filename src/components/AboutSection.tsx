const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg">My introduction</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="card-gradient border border-border rounded-2xl p-8 md:p-12 border-gradient">
            <p className="text-muted-foreground text-lg leading-relaxed mb-8"> I am a passionate and dedicated{" "} <span className="text-primary font-semibold">Frontend Developer</span>{" "} with <span className="text-primary font-semibold">2+ years of experience</span> building scalable and high-performance web applications. I focus on creating responsive user interfaces and integrating them with powerful backend systems to deliver seamless user experiences. </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8"> My expertise includes{" "} <span className="text-accent"> React.js, Next.js, TypeScript, JavaScript, HTML5, CSS3, and Tailwind CSS </span> , allowing me to develop modern and visually appealing applications. I also have experience building API-driven applications using{" "} <span className="text-accent">REST APIs and Django REST Framework</span>
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8"> I enjoy designing scalable UI systems, optimizing application performance, and building intelligent applications. I also have exposure to{" "} <span className="text-accent"> AWS deployment, AI integrations, and real-time applications </span> , which helps me deliver reliable and production-ready software.
            </p>
            <div className="grid grid-cols-3 gap-4 md:gap-8">
              <div className="text-center p-4 rounded-xl bg-secondary/50">
                <p className="text-2xl md:text-3xl font-display font-bold text-primary">2+</p>
                <p className="text-muted-foreground text-sm">Years Experience</p>
              </div> <div className="text-center p-4 rounded-xl bg-secondary/50">
                <p className="text-2xl md:text-3xl font-display font-bold text-primary">15+</p>
                <p className="text-muted-foreground text-sm">Projects Completed</p>
              </div> <div className="text-center p-4 rounded-xl bg-secondary/50">
                <p className="text-2xl md:text-3xl font-display font-bold text-primary">10+</p>
                <p className="text-muted-foreground text-sm">Technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default AboutSection;
