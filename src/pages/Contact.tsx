import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const heroAnim = useScrollAnimation();
  const { toast } = useToast();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: 'Message Sent!', description: "Thank you for reaching out. I'll get back to you soon." });
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="section-padding">
      <div
        ref={heroAnim.ref}
        className={`max-w-7xl mx-auto transition-all duration-700 ${heroAnim.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-4 text-sm uppercase tracking-wide">Contact</p>
          <h1 className="text-4xl md:text-5xl font-bold font-[Montserrat] mb-4">
            Let's <span className="gradient-text">Connect</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Have a project in mind? Let's discuss how I can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium mb-1.5 block">Name</label>
                <Input
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div>
                <label className="text-sm font-medium mb-1.5 block">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Subject</label>
              <Input
                placeholder="Project inquiry"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Message</label>
              <Textarea
                placeholder="Tell me about your project..."
                className="min-h-[140px]"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>
            <Button type="submit" size="lg" className="w-full rounded-xl bg-primary hover:opacity-90 shadow-lg shadow-primary/25">
              <Send size={18} /> Send Message
            </Button>
          </form>

          {/* Info + Map */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-8 space-y-5">
              <h3 className="font-bold font-[Montserrat] text-lg mb-4">Get in Touch</h3>
              <a href="tel:+252618847090" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} className="text-primary" />
                </div>
                +252 61 8847090
              </a>
              <a href="mailto:hassanyare20051@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} className="text-primary" />
                </div>
                hassanyare20051@gmail.com
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-primary" />
                </div>
                Mogadishu, Somalia
              </div>
            </div>

            {/* Map placeholder */}
            <div className="glass rounded-2xl overflow-hidden h-64">
              <iframe
                title="Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125625.0!2d45.3!3d2.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3d58425e2abceb4b%3A0xf6ae1e2bdee16e5!2sMogadishu%2C%20Somalia!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
