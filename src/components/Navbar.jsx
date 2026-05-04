import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import IconComponent from "@/components/ui/Icon";
import Button from "@/components/ui/Button";

import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Youth Wing", path: "/youth-wing" },
  { label: "Projects & Events", path: "/projects-&-events" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (menuOpen) {
      html.style.overflow = "hidden";
      body.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
      body.style.overflow = "";
    }

    return () => {
      html.style.overflow = "";
      body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-secondary/10 bg-primary/95 py-3 shadow-lg shadow-text/5 backdrop-blur-md"
            : "border-transparent bg-primary/80 py-5 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="flex shrink-0 items-center gap-3">
            <img
              src={logo}
              alt="SLMCS Foundation Logo"
              className="h-11 w-auto object-contain transition-all duration-300 md:h-12"
            />

            <div className="leading-tight">
              <p className="text-sm font-bold text-secondary md:text-base">SLMCS Foundation</p>
              <p className="hidden text-xs uppercase tracking-[0.2em] text-text/55 sm:block">
                Humanity Beyond Religion
              </p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`group relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    active ? "text-secondary" : "text-text/70 hover:text-secondary"
                  }`}
                >
                  {link.label}

                  <span
                    className={`absolute bottom-0.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-accent1 transition-all duration-300 ${
                      active ? "w-5" : "w-0 group-hover:w-5"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link to="/contact">
              <Button variant="primary" size="sm" icon="mdi:heart-outline">
                Get Involved
              </Button>
            </Link>
          </div>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
            className="rounded-lg p-2 text-secondary transition hover:bg-secondary/5 lg:hidden"
          >
            <IconComponent icon={menuOpen ? "mdi:close" : "mdi:menu"} width="28" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-40 bg-text/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      <aside
        className={`fixed left-0 top-0 z-50 flex h-dvh w-[85%] max-w-sm flex-col overflow-hidden bg-primary shadow-2xl shadow-text/20 transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-secondary/10 px-6 py-5">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="SLMCS Foundation Logo" className="h-12 w-auto object-contain" />

            <div className="leading-tight">
              <p className="text-sm font-bold text-secondary">SLMCS Foundation</p>
              <p className="text-xs uppercase text-text/55">Humanity Beyond Religion</p>
            </div>
          </Link>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
            className="rounded-full bg-secondary/10 p-2 text-secondary transition hover:bg-secondary hover:text-white"
          >
            <IconComponent icon="mdi:close" width="24" />
          </button>
        </div>

        <nav className="flex min-h-0 flex-1 flex-col overflow-y-auto px-6 py-6">
          <div className="space-y-2">
            {navLinks.map((link) => {
              const active = location.pathname === link.path;

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center justify-between rounded-2xl px-4 py-4 text-sm transition-all duration-200 ${
                    active
                      ? "bg-accent1 text-secondary"
                      : "bg-primary text-text/75 hover:bg-secondary/5 hover:text-secondary"
                  }`}
                >
                  <span className="font-semibold">{link.label}</span>
                  <IconComponent
                    icon="mdi:chevron-right"
                    width="22"
                    className={active ? "text-secondary" : "text-text/45"}
                  />
                </Link>
              );
            })}
          </div>

          <div className="mt-auto border-t border-secondary/10 pt-5">
            <Link to="/contact">
              <Button fullWidth variant="primary" icon="mdi:arrow-right" iconPosition="right">
                Get Involved
              </Button>
            </Link>

            <p className="mt-4 text-center text-xs leading-relaxed text-text/55">
              United by service, coexistence, and humanity beyond religion.
            </p>
          </div>
        </nav>
      </aside>
    </>
  );
}

export default Navbar;
