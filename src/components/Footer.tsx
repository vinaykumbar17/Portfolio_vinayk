import { Mail, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: Mail,
      href: "mailto:vinaykumbar17@gmail.com",
      label: "Email"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/vinay-kumbar-0549a4388",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/vinaykumbar17",
      label: "GitHub"
    }
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer id="contact" className="bg-card border-t border-border py-12 px-4">

      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-clip-text mb-4">
              Vinnu
            </h3>
            <p className="text-muted-foreground mb-4">
              Aspiring Software Engineer specializing in AI & ML, passionate about creating innovative solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted hover:bg-primary hover:text-white rounded-lg flex items-center justify-center transition-smooth"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>Karnataka, India</p>
              <p>
                <a href="mailto:vinaykumbar17@gmail.com" className="hover:text-primary transition-smooth">
                  vinaykumbar17@gmail.com
                </a>
              </p>
              <p className="text-sm mt-4 italic">
                "Every line of code and every frame I dream of tells a story."
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center gap-2">
            Made with <Heart className="text-primary" size={16} fill="currentColor" /> by Vinay Kumbar
          </p>
          <p className="text-sm mt-2">
            © {new Date().getFullYear()} Vinnu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
