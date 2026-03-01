import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold font-[Montserrat] mb-3">
              <span className="gradient-text">Eng</span> Indhagod
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Building Digital Experiences That Inspire, Convert & Grow Businesses.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold font-[Montserrat] mb-3">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {['About', 'Services', 'Skills', 'Portfolio', 'Contact'].map((link) => (
                <Link
                  key={link}
                  to={`/${link.toLowerCase()}`}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold font-[Montserrat] mb-3">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:+252618847090" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone size={14} /> +252 61 8847090
              </a>
              <a href="mailto:hassanyare20051@gmail.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail size={14} /> hassanyare20051@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin size={14} /> Mogadishu, Somalia
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Eng Indhagod. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
