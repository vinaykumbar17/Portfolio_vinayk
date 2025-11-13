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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const result = await emailjs.send(
        "service_i0564xy",
        "template_87lmx7o",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "IEFPbotDEhKuP_ojk"
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
    <section
      id="contact"
      className="relative py-14 sm:py-20 px-3 sm:px-4 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-1/4 -right-20 w-72 sm:w-96 h-72 sm:h-96 bg-secondary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-primary text-sm font-medium mb-3">
            <MessageCircle className="w-4 h-4" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-4">
            Let's <span className="gradient-primary bg-clip-text">Connect</span>
          </h2>
          <div className="w-20 sm:w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-3"></div>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Contact Form */}
          <div className="animate-slide-up">
            <div className="relative bg-card/50 backdrop-blur-sm rounded-3xl p-5 sm:p-8 shadow-soft border border-border/50 hover:shadow-glow transition-smooth">
              <div className="absolute -top-4 -right-4 w-14 sm:w-16 h-14 sm:h-16 gradient-primary rounded-2xl flex items-center justify-center rotate-12 shadow-glow">
                <Sparkles className="text-white" size={22} />
              </div>

              <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6 relative z-10">
                <div>
                  <label className="block text-sm font-semibold mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    Your Name
                  </label>
                  <Input
                    type="text"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full bg-background/50 border-border/50 focus:border-primary transition-smooth text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    Email Address
                  </label>
                  <Input
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full bg-background/50 border-border/50 focus:border-primary transition-smooth text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-1 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    Message
                  </label>
                  <Textarea
                    placeholder="Tell me about your project or idea..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="w-full resize-none bg-background/50 border-border/50 focus:border-primary transition-smooth text-sm sm:text-base"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSending}
                  className="w-full gradient-primary text-white border-0 shadow-glow hover:scale-105 transition-smooth group text-sm sm:text-base"
                >
                  {isSending ? "Sending..." : "Send Message"}
                  <Send className="ml-2 group-hover:translate-x-1 transition-smooth" size={18} />
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="space-y-4 sm:space-y-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="grid gap-4">
              {contactInfo.map((info, index) => (
                <div
                  key={info.label}
                  className="group relative bg-card/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-soft hover:shadow-glow transition-smooth border border-border/50 overflow-hidden"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-5 transition-smooth"></div>

                  <div className="relative z-10 flex items-center gap-3 sm:gap-4">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft`}
                    >
                      <info.icon className="text-white" size={20} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-xs sm:text-sm text-muted-foreground mb-1">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          target="_blank"
                          className="text-foreground hover:text-primary transition-smooth break-all font-medium text-sm sm:text-base"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground font-medium text-sm sm:text-base">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Alternative Contact */}
            <div className="relative bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-6 sm:p-8 backdrop-blur-sm border border-border/50 shadow-soft">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 gradient-secondary rounded-xl flex items-center justify-center">
                  <Phone className="text-white" size={20} />
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-1 sm:mb-2">Alternative Contact</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm mb-1">Secondary Email:</p>
                  <a
                    href="mailto:mevinnuonline18@gmail.com"
                    className="text-foreground hover:text-primary transition-smooth font-medium text-sm sm:text-base"
                  >
                    mevinnuonline18@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-border/50 text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1">24h</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Response Time</div>
              </div>

              <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-border/50 text-center">
                <div className="text-2xl sm:text-3xl font-bold mb-1">100%</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
