import { Button } from "@/components/ui/button";
import { ServicesSection } from "@/components/ServicesSection";

const logo = "/lovable-uploads/4c6fd7b0-478f-40f9-8ccb-84625da0ef4a.png";

const Navbar = () => (
  <header className="sticky top-0 z-50 bg-background/80 backdrop-blur border-b">
    <nav className="container mx-auto flex items-center justify-between py-3">
      <a href="#top" className="flex items-center gap-2">
        <img src={logo} alt="IWF Solutions logo" className="h-8 w-8" loading="lazy" />
        <span className="font-semibold">IWF Solutions</span>
      </a>
      <div className="hidden md:flex items-center gap-6 text-sm">
        <a href="#services" className="story-link">Services</a>
        <a href="#process" className="story-link">Process</a>
        <a href="#results" className="story-link">Results</a>
        <a href="#partnerships" className="story-link">Partnerships</a>
        <a href="#contact" className="story-link">Contact</a>
      </div>
      <div className="hidden md:block">
        <a href="#contact"><Button variant="accent" size="sm">WhatsApp</Button></a>
      </div>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="border-t mt-16">
    <div className="container mx-auto py-10 grid gap-6 md:grid-cols-3">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <img src={logo} alt="IWF Solutions logo small" className="h-8 w-8" loading="lazy" />
          <span className="font-semibold">IWF Solutions</span>
        </div>
        <p className="text-sm text-muted-foreground">Recruiting, Affordable Workforce (HR & Payroll), Marketing & Consulting<br/>for Legal & Healthcare</p>
      </div>
      <div className="text-sm">
        <div className="font-medium mb-2">Company</div>
        <p>Domain: <a href="https://www.iwf-solutions.com" className="story-link">www.iwf-solutions.com</a></p>
        <p>Corporate Address: 1410, Floor 14, P.H. Office One, Urbanización de Bella Vista, Ciudad de Panamá, República de Panamá</p>
      </div>
      <div className="text-sm">
        <div className="font-medium mb-2">Contact</div>
        <p>Email: <a href="mailto:info@iwf-solutions.com" className="story-link">info@iwf-solutions.com</a></p>
        <p>WhatsApp: <a href="https://wa.me/5070000000" className="story-link">+507 000‑0000</a></p>
      </div>
    </div>
    <div className="border-t py-4 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} IWF Solutions. All rights reserved.</div>
  </footer>
);

const Section = ({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: React.ReactNode }) => (
  <section id={id} className="container mx-auto py-16 scroll-mt-20">
    <header className="mb-8">
      <h2 className="text-2xl md:text-3xl font-semibold">{title}</h2>
      {subtitle && <p className="text-muted-foreground mt-2 max-w-3xl">{subtitle}</p>}
    </header>
    {children}
  </section>
);

const Index = () => {
  const wa = "https://wa.me/5070000000?text=Hola%20IWF%20Solutions%2C%20me%20gustar%C3%ADa%20agendar%20una%20llamada%20de%20descubrimiento.";

  return (
    <div id="top" className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <header className="bg-gradient-primary text-primary-foreground">
        <div className="container mx-auto py-24 md:py-28">
          <div className="max-w-3xl animate-enter">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Legal & Healthcare Recruiting, HR & Marketing — Nearshore Advantage
            </h1>
            <p className="mt-5 text-lg md:text-xl">
              Recruiting, Affordable Workforce (HR & Payroll), Marketing & Consulting for Legal & Healthcare
            </p>
            <p className="mt-1 text-base opacity-90">
              Reclutamiento, Fuerza Laboral Asequible (RRHH y Nómina), Marketing y Consultoría para Legal y Salud
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact"><Button variant="hero" size="lg">Book Discovery Call</Button></a>
              <a href={wa}><Button variant="accent" size="lg">WhatsApp Us</Button></a>
            </div>
          </div>
        </div>
      </header>

      {/* Services */}
      <Section id="services" title="Services" subtitle="Recruiting, HR & Payroll, Marketing, and Strategic Partnerships to help legal and healthcare teams scale efficiently.">
        <ServicesSection waHref={wa} />
      </Section>

      {/* Process */}
      <Section id="process" title="How We Work" subtitle="A clear 4‑step process that keeps hiring, onboarding, and growth on track.">
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {["Discovery","Sourcing & Shortlist","Interviews","Onboarding & Follow‑Through"].map((step, i) => (
            <li key={step} className="rounded-lg border p-6 hover-scale">
              <div className="text-3xl font-bold text-primary mb-2">{i + 1}.</div>
              <div className="font-medium mb-1">{step}</div>
              <p className="text-sm text-muted-foreground">
                {i===0 && "30–45 min call to align on roles, timelines, KPIs, and compliance."}
                {i===1 && "Localized sourcing across South America & LATAM + targeted U.S. outreach."}
                {i===2 && "Structured interviews, language/skills screens, culture fit."}
                {i===3 && "Offer support, background checks, and 90‑day success checkpoints."}
              </p>
            </li>
          ))}
        </ol>
      </Section>

      {/* Results */}
      <Section id="results" title="Results You Can Quantify">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-6 hover-scale">
            <div className="text-3xl font-bold text-primary">10</div>
            <p className="text-sm text-muted-foreground">Average candidate slate in 10 business days</p>
          </div>
          <div className="rounded-lg border p-6 hover-scale">
            <div className="text-3xl font-bold text-primary">↓ Cost</div>
            <p className="text-sm text-muted-foreground">Lower cost‑per‑hire and faster ramp</p>
          </div>
          <div className="rounded-lg border p-6 hover-scale">
            <div className="text-3xl font-bold text-primary">↑ Conversions</div>
            <p className="text-sm text-muted-foreground">Marketing pipelines that convert with measurable results</p>
          </div>
        </div>
      </Section>

      {/* Partnerships */}
      <Section id="partnerships" title="Strategic Partnerships">
        <div className="rounded-lg border p-6">
          <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
            <li>Co‑marketing & referral programs</li>
            <li>Templates: MOUs, SOPs, playbooks</li>
            <li>90‑day success checkpoints</li>
          </ul>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" title="Contact IWF Solutions" subtitle="Let’s align on roles, timelines, KPIs, and compliance.">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-6"><div className="font-medium mb-1">Email</div><a className="story-link" href="mailto:info@iwf-solutions.com">info@iwf-solutions.com</a></div>
          <div className="rounded-lg border p-6"><div className="font-medium mb-1">WhatsApp</div><a className="story-link" href={wa}>+507 000‑0000</a></div>
          <div className="rounded-lg border p-6"><div className="font-medium mb-1">Corporate Address</div><p className="text-sm text-muted-foreground">1410, Floor 14, P.H. Office One, Urbanización de Bella Vista, Ciudad de Panamá, República de Panamá</p></div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href={wa}><Button variant="accent" size="lg">WhatsApp Now</Button></a>
          <a href="mailto:info@iwf-solutions.com"><Button size="lg">Email Us</Button></a>
        </div>
      </Section>

      <Footer />
    </div>
  );
};

export default Index;
