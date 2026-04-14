import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MessageCircle, Mail, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    toast({ title: "Message sent!", description: "We'll get back to you shortly." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">Contact Us</h1>
          <p className="font-body text-muted-foreground mb-12 max-w-xl">
            Reach out for wholesale pricing, custom orders, MOQ details, or any business enquiries.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-primary mt-0.5" />
                <div>
                  <h3 className="font-body font-semibold text-foreground">Email</h3>
                  <a href="mailto:hello@cinni.com" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">hello@cinni.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle size={20} className="text-primary mt-0.5" />
                <div>
                  <h3 className="font-body font-semibold text-foreground">WhatsApp</h3>
                  <a href="https://wa.me/919044130123" target="_blank" rel="noopener noreferrer" className="font-body text-sm text-muted-foreground hover:text-primary transition-colors">+1 234 567 8900</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-primary mt-0.5" />
                <div>
                  <h3 className="font-body font-semibold text-foreground">Location</h3>
                  <p className="font-body text-sm text-muted-foreground">Manufactured in India · Serving clients worldwide</p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your full name" maxLength={100} />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" maxLength={255} />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Tell us about your requirements..." rows={5} maxLength={1000} />
              </div>
              <Button type="submit" size="lg" className="w-full">Send Message</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
