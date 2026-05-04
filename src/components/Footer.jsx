import { Link } from "react-router-dom";

import IconComponent from "@/components/ui/Icon";
import Button from "@/components/ui/Button";

import logo from "@/assets/logo.png";

function Footer() {
  const year = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Youth Wing", path: "/youth-wing" },
    { label: "Projects & Events", path: "/projects-&-events" },
    { label: "Contact", path: "/contact" },
  ];

  const projectLinks = [
    { label: "Mealcare", path: "/projects-&-events" },
    { label: "Breakfast at Sunset", path: "/projects-&-events" },
    { label: "Flood Relief", path: "/projects-&-events" },
    { label: "Orphan Care", path: "/projects-&-events" },
  ];

  return (
    <footer className="bg-secondary text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* GRID */}
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr]">
          {/* BRAND */}
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <img src={logo} alt="SLMCS Foundation Logo" className="h-14 w-auto rounded-full bg-primary p-1" />
              <div>
                <p className="font-instrument-serif text-2xl leading-none">SLMCS</p>
                <p className="mt-1 text-xs uppercase tracking-[0.22em] text-white/65">Humanity Beyond Religion</p>
              </div>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/70">
              Sri Lanka Muslim Civil Society Foundation works toward a united, inclusive, and safe Sri Lanka through
              coexistence, community care, youth leadership, and impactful social initiatives.
            </p>
          </div>

          {/* QUICK LINKS + PROJECTS (MOBILE 2-COL) */}
          <div className="grid grid-cols-2 gap-8 lg:contents">
            {/* QUICK LINKS */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-accent1">Quick Links</h3>

              <ul className="mt-5 space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="text-sm text-white/70 transition hover:text-accent1">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* PROJECTS */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-accent1">Projects</h3>

              <ul className="mt-5 space-y-3">
                {projectLinks.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="text-sm text-white/70 transition hover:text-accent1">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-accent1">Contact</h3>

            <div className="mt-5 space-y-4 text-sm text-white/70">
              <p className="flex gap-3 leading-6">
                <IconComponent icon="mdi:map-marker-outline" width="20" className="mt-0.5 shrink-0 text-accent1" />
                <span>No. 15, Milagiriya Avenue, Colombo 04</span>
              </p>

              <a href="tel:+94756264477" className="flex gap-3 transition hover:text-accent1">
                <IconComponent icon="mdi:phone-outline" width="20" className="shrink-0 text-accent1" />
                <span>075 626 4477</span>
              </a>

              <a href="mailto:slmcs.secretariat@gmail.com" className="flex gap-3 transition hover:text-accent1">
                <IconComponent icon="mdi:email-outline" width="20" className="shrink-0 text-accent1" />
                <span>slmcs.secretariat@gmail.com</span>
              </a>
            </div>

            {/* SOCIAL */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-accent1 hover:text-accent1"
              >
                <IconComponent icon="mdi:facebook" width="20" />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-accent1 hover:text-accent1"
              >
                <IconComponent icon="mdi:instagram" width="20" />
              </a>

              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:border-accent1 hover:text-accent1"
              >
                <IconComponent icon="mdi:youtube" width="20" />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
          <p>© {year} SLMCS Foundation. All rights reserved.</p>

          <p className="max-w-xl leading-6 md:text-right">
            Built around the values of unity, service, coexistence, and humanity beyond religion.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
