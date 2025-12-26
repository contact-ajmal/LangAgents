import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerColumns = [
  {
    title: "Product",
    links: ["Platform", "Observability", "Integrations", "Pricing"],
  },
  {
    title: "Solutions",
    links: ["Healthcare", "Finance", "Legal", "Government"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API Reference", "Tutorials", "Blog"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Contact", "Security"],
  },
];

const socialLinks = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Mail, href: "#", label: "Email" },
];

export const Footer = () => {
  return (
    <footer className="border-t border-glass bg-card/30">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <span className="text-xl font-bold text-foreground">NexusFlow</span>
            <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
              Enterprise AI Agents for the world's most regulated industries.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    className="w-9 h-9 rounded-lg bg-secondary/50 border border-glass flex items-center justify-center hover:bg-secondary hover:border-primary/30 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-4 h-4 text-muted-foreground" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Link Columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-glass flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-xs text-muted-foreground">
            <span>© 2024 NexusFlow. All rights reserved.</span>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>

          {/* Status Indicator */}
          <div className="flex items-center gap-2 text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-muted-foreground">Status:</span>
            <span className="text-accent">All Systems Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
