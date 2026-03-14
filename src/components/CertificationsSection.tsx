import { Award, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const certifications = [
  {
    title: "CSS, JavaScript And Python Complete Course",
    issuer: "Udemy",
    link: "https://www.udemy.com/certificate/UC-afcc4698-581d-422a-ac9a-1b57d26885da/",
  },
  {
    title: "React Native Unveiled: From Basics to Mobile Mastery",
    issuer: "Online Academy",
    link: "https://www.udemy.com/certificate/UC-bc175de0-d094-4e35-8c71-7b4ee7819fe3/",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg">Professional achievements</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={cert.title}
              className="group animate-fade-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="card-gradient border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 h-full flex flex-col">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Award className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{cert.issuer}</p>
                <Button variant="ghost" size="sm" asChild className="mt-auto w-fit">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    View Certificate
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
