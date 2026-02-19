import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  owners: [
    { href: "/owners", label: "Why PMF" },
    { href: "/services", label: "Our Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/areas", label: "Areas We Serve" },
  ],
  tenants: [
    { href: "/tenants", label: "Available Rentals" },
    { href: "/tenants", label: "Apply Online" },
    { href: "/tenants", label: "Tenant Portal" },
    { href: "/tenants", label: "Maintenance Request" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/resources", label: "Resources" },
    { href: "/contact", label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground flex items-center justify-center">
                <span className="text-primary font-bold text-lg">P</span>
              </div>
              <span className="text-xl font-semibold">PMF</span>
            </Link>
            <p className="text-primary-foreground/70 text-sm mb-6 max-w-sm">
              Professional property management that treats your property like an asset.
              Transparent fees. Local expertise. Real-time reporting.
            </p>
            <div className="space-y-3">
              <a href="tel:+15551234567" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone size={16} />
                (555) 123-4567
              </a>
              <a href="mailto:info@pmfproperty.com" className="flex items-center gap-3 text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Mail size={16} />
                info@pmfproperty.com
              </a>
              <div className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>123 Main Street, Suite 100<br />Austin, TX 78701</span>
              </div>
            </div>
          </div>

          {/* Owners Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-primary-foreground">For Owners</h4>
            <ul className="space-y-3">
              {footerLinks.owners.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tenants Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-primary-foreground">For Tenants</h4>
            <ul className="space-y-3">
              {footerLinks.tenants.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-primary-foreground">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} PMF Property Management. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
