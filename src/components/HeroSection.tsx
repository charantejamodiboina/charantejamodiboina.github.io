import { Download, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
import { Github, Linkedin, Instagram } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              I'm a{" "}
              <span className="text-gradient">Full Stack</span>
              <br />
              Developer
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto lg:mx-0 mb-8">
              Experienced full stack developer with a passion for creating 
              visually stunning, user-friendly websites.
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="lg" asChild>
                <a href="#about">About Me</a>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <a href="" className="flex items-center gap-2">
                  <Download className="w-5 h-5" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-10 justify-center lg:justify-start">
               <a
              href="https://www.instagram.com/charan_teja_011_/"
              rel="noopener noreferrer"
              target="_blank"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/charantejamodiboina"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/charantejamodiboina"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <Github className="w-4 h-4" />
            </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center animate-fade-in">
            <div className="relative">
              {/* Glowing rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full border-2 border-primary/30 animate-spin" style={{ animationDuration: '20s' }} />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-80 h-80 md:w-96 md:h-96 rounded-full border-2 border-dashed border-accent/20" style={{ animation: 'spin 30s linear infinite reverse' }} />
              </div>
              
              {/* Profile container */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-primary/50 animate-glow">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
                <img
                  src="/charan2.png"
                  alt="Charan Teja"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
