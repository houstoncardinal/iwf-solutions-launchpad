import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Gavel, Stethoscope, Users, Megaphone, Handshake } from "lucide-react";

interface Props {
  waHref: string;
}

const TabHeader = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <div className="flex flex-col items-center gap-1 md:flex-row md:gap-2">
    <Icon className="h-4 w-4 text-primary" aria-hidden="true" />
    <span className="text-center">{label}</span>
  </div>
);

const Card = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-lg border p-6 elevated bg-card">
    {children}
  </div>
);

export const ServicesSection = ({ waHref }: Props) => {
  return (
    <div>
      {/* Quick Overview Chips */}
      <div className="flex flex-wrap gap-2 mb-6 text-sm">
        <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground">Bilingual Teams</span>
        <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground">South America · LATAM · U.S.</span>
        <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground">Compliance‑Ready</span>
        <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground">Dashboards & KPIs</span>
      </div>

      <Tabs defaultValue="legal" className="w-full">
        <TabsList className="w-full grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-1 h-auto !inline-grid">
          <TabsTrigger value="legal" className="h-auto py-3 px-2 text-xs md:text-sm">
            <TabHeader icon={Gavel} label="Legal" />
          </TabsTrigger>
          <TabsTrigger value="health" className="h-auto py-3 px-2 text-xs md:text-sm">
            <TabHeader icon={Stethoscope} label="Healthcare" />
          </TabsTrigger>
          <TabsTrigger value="workforce" className="h-auto py-3 px-2 text-xs md:text-sm">
            <TabHeader icon={Users} label="HR & Payroll" />
          </TabsTrigger>
          <TabsTrigger value="marketing" className="h-auto py-3 px-2 text-xs md:text-sm">
            <TabHeader icon={Megaphone} label="Marketing" />
          </TabsTrigger>
          <TabsTrigger value="partners" className="h-auto py-3 px-2 text-xs md:text-sm">
            <TabHeader icon={Handshake} label="Partnerships" />
          </TabsTrigger>
        </TabsList>

        <TabsContent value="legal" className="mt-6">
          <Card>
            <h3 className="font-semibold mb-2">Legal Sector Recruiting — Mid‑Level</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Roles: Paralegals, Case Managers, Receptionists</li>
                <li>Focus: Personal Injury, Civil, Immigration</li>
                <li>Jurisdictions: South America, LATAM, U.S.</li>
              </ul>
              <div className="text-sm">
                <div className="font-medium mb-1">Ideal for</div>
                <p className="text-muted-foreground">Firms scaling intake and case management while keeping costs predictable.</p>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="#contact"><Button size="sm">Book Discovery Call</Button></a>
              <a href={waHref}><Button variant="accent" size="sm">WhatsApp Us</Button></a>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="health" className="mt-6">
          <Card>
            <h3 className="font-semibold mb-2">Healthcare Recruiting — Mid‑Level</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Roles: Billing Specialists (RCM), Reception/Front Desk</li>
                <li>Settings: Clinics, Imaging, Telehealth</li>
                <li>Credentialing & compliance support</li>
              </ul>
              <div className="text-sm">
                <div className="font-medium mb-1">Ideal for</div>
                <p className="text-muted-foreground">Providers needing reliable front-office and RCM talent with bilingual capabilities.</p>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="#contact"><Button size="sm">Book Discovery Call</Button></a>
              <a href={waHref}><Button variant="accent" size="sm">WhatsApp Us</Button></a>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="workforce" className="mt-6">
          <Card>
            <h3 className="font-semibold mb-2">Affordable Workforce Solutions (HR & Payroll)</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>HR policies, payroll cycles, compliance</li>
                <li>Nearshore staffing cost models</li>
                <li>Scale teams without overspending</li>
              </ul>
              <div className="text-sm">
                <div className="font-medium mb-1">Ideal for</div>
                <p className="text-muted-foreground">Leaders who want a compliant, nearshore HR engine to scale predictably.</p>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="#contact"><Button size="sm">Book Discovery Call</Button></a>
              <a href={waHref}><Button variant="accent" size="sm">WhatsApp Us</Button></a>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="marketing" className="mt-6">
          <Card>
            <h3 className="font-semibold mb-2">Marketing & Client/Patient Growth</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Acquisition funnels, tracking, and dashboards</li>
                <li>Bilingual outreach; landing pages & digital ads</li>
                <li>Strategic partnerships with attorneys, providers, insurers</li>
              </ul>
              <div className="text-sm">
                <div className="font-medium mb-1">Ideal for</div>
                <p className="text-muted-foreground">Organizations seeking measurable growth with transparent analytics.</p>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="#contact"><Button size="sm">Book Discovery Call</Button></a>
              <a href={waHref}><Button variant="accent" size="sm">WhatsApp Us</Button></a>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="partners" className="mt-6">
          <Card>
            <h3 className="font-semibold mb-2">Strategic Partnerships</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                <li>Co‑marketing & referral programs</li>
                <li>Templates: MOUs, SOPs, playbooks</li>
                <li>90‑day success checkpoints</li>
              </ul>
              <div className="text-sm">
                <div className="font-medium mb-1">Ideal for</div>
                <p className="text-muted-foreground">Teams that value repeatable, documented collaboration models.</p>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <a href="#contact"><Button size="sm">Book Discovery Call</Button></a>
              <a href={waHref}><Button variant="accent" size="sm">WhatsApp Us</Button></a>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
