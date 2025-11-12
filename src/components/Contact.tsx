import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, MapPin, Send, Sparkles, Phone, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  // 🧠 EmailJS integration
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const result = await emailjs.send(
        "service_i0564xy", // ✅ Your Service ID
        "template_87lmx7o", // ✅ Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "IEFPbotDEhKuP_ojk" // ✅ Your Public Key
      );

      console.log("EmailJS Success:", result.text);
      toast({
        title: "Message Sent ✅",
        description: "Thanks for reaching out, Vinu will get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast({
        title: "Failed to Send ❌",
        description: "Please try again later or reach me via LinkedIn!",
      });
    } finally {
      setIsSending(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "vinaykumbar17@gmail.com",
      href: "mailto:vinaykumbar17@gmail.com",
      gradient: "from-primary to-secondary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      href: "https://linkedin.com/in/vinay-kumbar-0549a4388",
      gradient: "from-secondary to-accent",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/vinaykumbar17",
      href: "https://github.com/vinaykumbar17",
      gradient: "from-accent to-primary",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Karnataka, India",
      href: null,
      gradient: "from-primary via-secondary to-accent",
    },
  ];

  return (
    <section id="contact" className="relative py-20 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary text-sm font-medium mb-4">
            <MessageCircle className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Let's <span className="gradient-primary bg-clip-text">Connect</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-border/50 hover:shadow-glow transition-smooth">
              <div className="absolute -top-4 -right-4 w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center rotate-12 shadow-glow">
                <Sparkles className="text-white" size={24} />
              </div>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Your Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-background/50 border-border/50 focus:border-primary transition-smooth"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-background/50 border-border/50 focus:border-primary transition-smooth"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full resize-none bg-background/50 border-border/50 focus:border-primary transition-smooth"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSending}
                  className="w-full gradient-primary text-white border-0 shadow-glow hover:scale-105 transition-smooth group"
                >
                  {isSending ? "Sending..." : "Send Message"}
                  <Send className="ml-2 group-hover:translate-x-1 transition-smooth" size={20} />
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={info.label}
                  className="group relative bg-card/50 backdrop-blur-sm rounded-2xl p-6 shadow-soft hover:shadow-glow transition-smooth border border-border/50 overflow-hidden"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${info.gradient} opacity-0 group-hover:opacity-5 transition-smooth`}
                  ></div>

                  <div className="relative z-10 flex items-center gap-4">
                    <div
                      className={`w-14 h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft group-hover:scale-110 group-hover:rotate-3 transition-smooth`}
                    >
                      <info.icon className="text-white" size={24} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target={info.href.startsWith("http") ? "_blank" : undefined}
                          rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="text-foreground hover:text-primary transition-smooth break-all font-medium group-hover:translate-x-1 inline-block"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Alternative Contact */}
            <div className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 backdrop-blur-sm border border-border/50 shadow-soft">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 gradient-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Alternative Contact</h3>
                  <p className="text-muted-foreground text-sm mb-2">Secondary Email:</p>
                  <a
                    href="mailto:mevinnuonline18@gmail.com"
                    className="text-foreground hover:text-primary transition-smooth font-medium"
                  >
                    mevinnuonline18@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 text-center">
                <div className="text-3xl font-bold bg-clip-text mb-1">24h</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </div>
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50 text-center">
                <div className="text-3xl font-bold bg-clip-text mb-1">100%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
