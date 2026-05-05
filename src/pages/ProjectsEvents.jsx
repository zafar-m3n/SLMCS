import { Link } from "react-router-dom";

import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";
import projects from "@/data/projects";

const categories = ["All", "Community Care", "Co-existence", "Youth Wing", "Relief Work"];

function ProjectsEvents() {
  const featuredProject = projects.find((project) => project.slug === "mealcare");
  const otherProjects = projects.filter((project) => project.slug !== "mealcare");

  return (
    <main className="bg-primary pt-20 font-dm-sans text-text md:pt-22">
      <section className="relative min-h-144 overflow-hidden py-20 md:py-28">
        <img
          src="https://picsum.photos/seed/slmcs-projects-archive-hero/1800/1100"
          alt="SLMCS Foundation projects and events"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-secondary/80"></div>
        <div className="absolute inset-0 bg-text/20"></div>

        <div className="relative mx-auto flex min-h-124 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={60}>
            <div className="max-w-4xl text-white">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent1">Projects & Events</p>

              <h1 className="mt-5 font-instrument-serif text-5xl leading-tight md:text-7xl">
                Stories of care, coexistence, and community impact.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
                Explore the initiatives, events, relief work, and youth-led projects that carry forward SLMCS
                Foundation’s mission of Humanity Beyond Religion.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </section>

      {featuredProject && (
        <section className="relative z-10">
          <div className="mx-auto -mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
            <AnimatedContent distance={50} direction="horizontal" reverse>
              <article className="overflow-hidden rounded-4xl bg-white shadow-xl shadow-text/10">
                <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="h-96 w-full object-cover lg:h-full"
                  />

                  <div className="p-6 md:p-8 lg:p-10">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent2 text-white">
                        <Icon icon="mdi:food-outline" width="24" />
                      </div>
                      <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent2">
                        {featuredProject.status}
                      </p>
                    </div>

                    <h2 className="mt-6 font-instrument-serif text-4xl leading-tight text-secondary md:text-6xl">
                      {featuredProject.title}
                    </h2>

                    <p className="mt-5 text-base leading-8 text-text/70">{featuredProject.excerpt}</p>

                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                      {featuredProject.stats.map((stat) => (
                        <div key={stat.label} className="border-l-4 border-accent1 pl-4">
                          <p className="font-instrument-serif text-4xl text-secondary">{stat.value}</p>
                          <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-text/50">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Link to={`/projects-&-events/${featuredProject.slug}`}>
                        <Button variant="primary" icon="mdi:arrow-right" iconPosition="right">
                          Read Full Story
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </AnimatedContent>
          </div>
        </section>
      )}

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={50} direction="horizontal">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent2">Impact Archive</p>

                <h2 className="mt-4 font-instrument-serif text-4xl leading-tight text-secondary md:text-6xl">
                  Browse our projects and events.
                </h2>
              </div>

              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <button
                    key={category}
                    type="button"
                    className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                      index === 0
                        ? "bg-secondary text-white"
                        : "bg-white text-text/65 shadow-md shadow-text/5 hover:text-secondary"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </AnimatedContent>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project, index) => (
              <AnimatedContent
                key={project.slug}
                distance={40}
                direction={index % 3 === 0 ? "horizontal" : "vertical"}
                reverse={index % 3 === 1}
                delay={index * 60}
              >
                <article className="flex h-full flex-col overflow-hidden rounded-4xl bg-white shadow-xl shadow-text/5">
                  <img src={project.image} alt={project.title} className="h-64 w-full object-cover" />

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent2">{project.category}</p>

                    <h3 className="mt-4 font-instrument-serif text-4xl leading-tight text-secondary">
                      {project.title}
                    </h3>

                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-text/45">
                      {project.status}
                    </p>

                    <p className="mt-4 text-sm leading-7 text-text/65">{project.excerpt}</p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.stats.slice(0, 2).map((stat) => (
                        <span
                          key={stat.label}
                          className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-text/55"
                        >
                          {stat.value} {stat.label}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto pt-7">
                      <Link
                        to={`/projects-&-events/${project.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-bold text-secondary transition hover:text-accent2"
                      >
                        Read Story
                        <Icon icon="mdi:arrow-right" width="20" />
                      </Link>
                    </div>
                  </div>
                </article>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent2 py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <AnimatedContent distance={50} direction="horizontal" reverse>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent1">Project Stories</p>

              <h2 className="mt-4 font-instrument-serif text-4xl leading-tight md:text-6xl">
                Each initiative is a story of people, service, and shared responsibility.
              </h2>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={50} direction="horizontal" delay={120}>
            <p className="text-base leading-8 text-white/75">
              These project pages are built to grow over time with real galleries, videos, field updates, donor notes,
              and community outcomes. For now, each page contains detailed project information and temporary media
              placeholders.
            </p>
          </AnimatedContent>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={50}>
            <div className="rounded-4xl bg-secondary px-6 py-14 text-center text-white md:px-12 md:py-20">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent1">Support Our Work</p>

              <h2 className="mx-auto mt-4 max-w-4xl font-instrument-serif text-4xl leading-tight md:text-6xl">
                Support the next story of impact.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70">
                Your support helps SLMCS Foundation continue projects that feed, connect, educate, and uplift
                communities across Sri Lanka.
              </p>

              <div className="mt-8">
                <Link to="/contact">
                  <Button variant="primary" size="lg" icon="mdi:heart-outline">
                    Get Involved
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>
    </main>
  );
}

export default ProjectsEvents;
