import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactDetails = [
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
    ),
    label: "LOCATION",
    value: "Jamaica, Caribbean",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
    ),
    label: "DELIVERY",
    value: "48 hours from brief to live site",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
    ),
    label: "WHATSAPP",
    value: "+1 (876) XXX-XXXX",
  },
  {
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
    ),
    label: "INSTAGRAM",
    value: "@cobaltsites",
  },
];

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <span className="font-display text-[10px] tracking-[0.3em] text-accent mb-4 block">
            CONTACT
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Start With a <span className="text-accent glow-text">Free Demo.</span>
          </h2>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Tell us about your business. We build a free demo — no payment, no commitment. If you love it, we go live.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto reveal">
          {/* Contact details */}
          <div className="flex flex-col justify-center space-y-6">
            {contactDetails.map((d) => (
              <div key={d.label} className="flex items-start gap-4">
                <div className="w-10 h-10 border border-accent/30 flex items-center justify-center flex-shrink-0 text-accent">
                  {d.icon}
                </div>
                <div>
                  <p className="font-display text-[10px] tracking-[0.2em] text-accent mb-1">
                    {d.label}
                  </p>
                  <p className="text-muted-foreground text-sm">{d.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="clip-input w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:shadow-[0_0_12px_hsl(200_100%_50%/0.2)] outline-none transition-all"
              />
              <input
                type="text"
                placeholder="Business Name"
                className="clip-input w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:shadow-[0_0_12px_hsl(200_100%_50%/0.2)] outline-none transition-all"
              />
            </div>
            <input
              type="text"
              placeholder="Email or WhatsApp"
              required
              className="clip-input w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:shadow-[0_0_12px_hsl(200_100%_50%/0.2)] outline-none transition-all"
            />
            <select
              className="clip-input w-full bg-card border border-border px-4 py-3 text-sm text-muted-foreground focus:border-accent focus:shadow-[0_0_12px_hsl(200_100%_50%/0.2)] outline-none transition-all appearance-none"
              defaultValue=""
            >
              <option value="" disabled>
                Package Interest
              </option>
              <option>Starter</option>
              <option>Standard</option>
              <option>Premium</option>
              <option>Not sure yet</option>
            </select>
            <textarea
              placeholder="Tell us about your business..."
              rows={4}
              className="clip-input w-full bg-card border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:shadow-[0_0_12px_hsl(200_100%_50%/0.2)] outline-none transition-all resize-none"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="clip-btn w-full bg-accent text-accent-foreground font-display text-xs tracking-wider px-6 py-3.5 font-semibold hover:shadow-[0_0_20px_hsl(200_100%_50%/0.4)] transition-shadow duration-300 disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
