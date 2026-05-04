import { Link } from "react-router-dom";

import IconComponent from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";

function NotFound() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-primary px-4 py-24 font-dm-sans">
      <div className="pointer-events-none absolute inset-0 opacity-10">
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-accent1 blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-accent2 blur-3xl"></div>
      </div>

      <div className="relative mx-auto flex min-h-[70vh] max-w-4xl items-center justify-center">
        <AnimatedContent distance={60} direction="vertical">
          <div className="text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-secondary/15 bg-white shadow-sm">
              <IconComponent icon="mdi:compass-off-outline" width="38" className="text-secondary" />
            </div>

            <p className="mt-8 text-xs font-bold uppercase tracking-[0.35em] text-accent2">Error 404</p>

            <h1 className="mt-4 font-instrument-serif text-5xl leading-tight text-secondary md:text-7xl">
              Page not found
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-text/70 md:text-lg">
              The page you are looking for does not exist or may have been moved. Return to the homepage or continue
              exploring our projects and community initiatives.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/">
                <Button icon="mdi:home-outline" variant="primary" size="lg">
                  Back to Home
                </Button>
              </Link>

              <Link to="/projects-&-events">
                <Button icon="mdi:arrow-right" iconPosition="right" variant="outline" size="lg">
                  Projects & Events
                </Button>
              </Link>
            </div>

            <div className="mx-auto mt-16 h-px w-28 bg-secondary/20"></div>

            <p className="mt-6 text-sm text-text/55">SLMCS Foundation — Humanity Beyond Religion</p>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}

export default NotFound;
