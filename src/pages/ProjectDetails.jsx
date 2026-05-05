import { Link, useParams } from "react-router-dom";

import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";
import projects from "@/data/projects";

const galleryItems = [
  { type: "image", key: "one", height: "h-88", size: "700/900" },
  { type: "video", key: "video-one" },
  { type: "image", key: "two", height: "h-64", size: "700/650" },
  { type: "image", key: "three", height: "h-80", size: "700/820" },
  { type: "note", key: "gallery-note" },
  { type: "image", key: "four", height: "h-72", size: "700/760" },
  { type: "image", key: "five", height: "h-96", size: "700/980" },
  { type: "image", key: "six", height: "h-68", size: "700/720" },
  { type: "video", key: "video-two" },
  { type: "image", key: "seven", height: "h-84", size: "700/860" },
  { type: "image", key: "eight", height: "h-60", size: "700/620" },
  { type: "image", key: "nine", height: "h-76", size: "700/780" },
  { type: "image", key: "ten", height: "h-92", size: "700/940" },
];

function MasonryMedia({ seed }) {
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
      {galleryItems.map((item, index) => {
        if (item.type === "video") {
          return (
            <div
              key={item.key}
              className="mb-5 break-inside-avoid overflow-hidden rounded-4xl bg-secondary p-6 text-white shadow-xl shadow-text/10"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent1 text-secondary">
                <Icon icon="mdi:play" width="34" />
              </div>

              <p className="mt-8 font-instrument-serif text-3xl">{index < 2 ? "Video Highlight" : "Event Recap"}</p>

              <p className="mt-3 text-sm leading-7 text-white/70">
                Placeholder for project videos, event recap clips, short interviews, or field documentation.
              </p>
            </div>
          );
        }

        if (item.type === "note") {
          return (
            <div
              key={item.key}
              className="mb-5 break-inside-avoid overflow-hidden rounded-4xl bg-accent2 p-6 text-white shadow-xl shadow-text/10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent1 text-secondary">
                <Icon icon="mdi:image-multiple-outline" width="28" />
              </div>

              <p className="mt-6 font-instrument-serif text-3xl">Gallery Moment</p>

              <p className="mt-3 text-sm leading-7 text-white/70">
                Placeholder for real photos from the project or event.
              </p>
            </div>
          );
        }

        return (
          <div
            key={item.key}
            className="mb-5 break-inside-avoid overflow-hidden rounded-4xl bg-white p-3 shadow-xl shadow-text/5"
          >
            <img
              src={`https://picsum.photos/seed/${seed}-${item.key}/${item.size}`}
              alt={`${seed} gallery ${index + 1}`}
              className={`${item.height} w-full rounded-3xl object-cover`}
            />
          </div>
        );
      })}
    </div>
  );
}

function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="bg-primary pt-20 font-dm-sans text-text md:pt-22">
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="font-instrument-serif text-5xl text-secondary md:text-7xl">Project not found</h1>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-text/70">
              The project story you are looking for does not exist or may have been moved.
            </p>

            <div className="mt-8">
              <Link to="/projects-&-events">
                <Button variant="primary" icon="mdi:arrow-left">
                  Back to Projects
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-primary pt-20 font-dm-sans text-text md:pt-22">
      <section className="relative min-h-144 overflow-hidden py-20 md:py-28">
        <img src={project.image} alt={project.title} className="absolute inset-0 h-full w-full object-cover" />

        <div className="absolute inset-0 bg-secondary/80"></div>
        <div className="absolute inset-0 bg-text/20"></div>

        <div className="relative mx-auto flex min-h-124 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={60}>
            <div className="max-w-4xl text-white">
              <Link
                to="/projects-&-events"
                className="inline-flex items-center gap-2 text-sm font-bold text-accent1 transition hover:text-white"
              >
                <Icon icon="mdi:arrow-left" width="20" />
                Back to Projects
              </Link>

              <p className="mt-8 text-xs font-bold uppercase tracking-[0.3em] text-accent1">{project.category}</p>

              <h1 className="mt-5 font-instrument-serif text-5xl leading-tight md:text-7xl">{project.title}</h1>

              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.22em] text-white/55">
                {project.status} • {project.date}
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">{project.excerpt}</p>
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="relative z-10">
        <div className="mx-auto -mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={50} direction="horizontal" reverse>
            <div className="rounded-4xl bg-white p-6 shadow-xl shadow-text/10 md:p-8">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                {project.stats.map((stat) => (
                  <div key={stat.label} className="border-l-4 border-accent1 pl-5">
                    <p className="font-instrument-serif text-5xl leading-none text-secondary">{stat.value}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-text/50">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
            <AnimatedContent distance={50} direction="horizontal">
              <aside className="lg:sticky lg:top-28">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent2">Project Story</p>

                <h2 className="mt-4 font-instrument-serif text-4xl leading-tight text-secondary md:text-5xl">
                  About this initiative
                </h2>

                <p className="mt-5 text-base leading-8 text-text/70">
                  This story page gives a fuller view of the project, including its background, purpose, activities,
                  outcomes, and media gallery.
                </p>

                <div className="mt-8 rounded-4xl bg-secondary p-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-accent1">Category</p>
                  <p className="mt-3 font-instrument-serif text-3xl">{project.category}</p>
                  <p className="mt-4 text-sm leading-7 text-white/70">{project.status}</p>
                </div>
              </aside>
            </AnimatedContent>

            <div className="space-y-8">
              {project.sections.map((section, index) => (
                <AnimatedContent
                  key={section.title}
                  distance={45}
                  direction={index % 3 === 0 ? "horizontal" : "vertical"}
                  reverse={index % 3 === 1}
                  delay={index * 60}
                >
                  <article className="rounded-4xl bg-white p-6 shadow-xl shadow-text/5 md:p-8">
                    <h3 className="font-instrument-serif text-4xl text-secondary">{section.title}</h3>

                    {section.body && (
                      <div className="mt-5 space-y-4">
                        {section.body.map((paragraph) => (
                          <p key={paragraph} className="text-base leading-8 text-text/70">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}

                    {section.list && (
                      <div className="mt-6 space-y-4">
                        {section.list.map((item) => (
                          <div key={item} className="flex gap-3">
                            <Icon icon="mdi:check-circle-outline" width="22" className="mt-1 shrink-0 text-accent2" />
                            <p className="text-sm leading-7 text-text/70">{item}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </article>
                </AnimatedContent>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={50} direction="horizontal">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent1">Media Gallery</p>

              <h2 className="mt-4 font-instrument-serif text-4xl leading-tight md:text-6xl">
                Project moments and documentation.
              </h2>

              <p className="mt-5 text-base leading-8 text-white/70">
                Temporary image and video placeholders are used for now. These can later be replaced with real photos,
                videos, interviews, and field updates.
              </p>
            </div>
          </AnimatedContent>

          <div className="mt-12">
            <AnimatedContent distance={50} direction="horizontal" reverse>
              <MasonryMedia seed={project.slug} />
            </AnimatedContent>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <AnimatedContent distance={50} direction="horizontal">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent2">Highlights</p>

              <h2 className="mt-4 font-instrument-serif text-4xl leading-tight text-secondary md:text-6xl">
                What this initiative represents.
              </h2>

              <p className="mt-5 text-base leading-8 text-text/70">
                Every SLMCS initiative is connected to the wider purpose of service, coexistence, and Humanity Beyond
                Religion.
              </p>
            </div>
          </AnimatedContent>

          <div className="grid gap-4 sm:grid-cols-2">
            {project.highlights.map((highlight, index) => (
              <AnimatedContent
                key={highlight}
                distance={40}
                direction={index % 2 === 0 ? "vertical" : "horizontal"}
                reverse={index % 2 === 1}
                delay={index * 70}
              >
                <div className="flex h-full gap-3 rounded-3xl bg-white p-5 shadow-xl shadow-text/5">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${
                      index % 2 === 0 ? "bg-accent2 text-white" : "bg-accent1 text-secondary"
                    }`}
                  >
                    <Icon icon="mdi:star-outline" width="22" />
                  </div>

                  <p className="text-sm leading-7 text-text/70">{highlight}</p>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={50}>
            <div className="rounded-4xl bg-secondary px-6 py-14 text-center text-white md:px-12 md:py-20">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent1">Support This Work</p>

              <h2 className="mx-auto mt-4 max-w-4xl font-instrument-serif text-4xl leading-tight md:text-6xl">
                Help us continue stories like {project.title}.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70">
                Your support helps SLMCS Foundation continue meaningful initiatives that serve communities and build
                trust across Sri Lanka.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link to="/contact">
                  <Button variant="primary" size="lg" icon="mdi:heart-outline">
                    Get Involved
                  </Button>
                </Link>

                <Link to="/projects-&-events">
                  <Button variant="secondary" size="lg" icon="mdi:arrow-left">
                    Back to Projects
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

export default ProjectDetails;
