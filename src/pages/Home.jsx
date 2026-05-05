import { Link } from "react-router-dom";

import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";

const focusAreas = [
  {
    title: "Co-existence",
    description: "Creating understanding, dialogue, and trust between communities across Sri Lanka.",
    icon: "mdi:account-group-outline",
  },
  {
    title: "Community Care",
    description: "Supporting vulnerable families, students, and communities through practical relief and care.",
    icon: "mdi:hand-heart-outline",
  },
  {
    title: "Youth Leadership",
    description: "Empowering young people to serve, lead, collaborate, and grow with purpose.",
    icon: "mdi:account-star-outline",
  },
];

const initiatives = [
  {
    title: "Breakfast at Sunset",
    description: "An annual interfaith iftar that brings people from different backgrounds together.",
    image: "https://picsum.photos/seed/slmcs-breakfast/900/700",
    icon: "mdi:weather-sunset",
  },
  {
    title: "Flood Relief",
    description: "Emergency support for families affected by floods through essentials and donations.",
    image: "https://picsum.photos/seed/slmcs-flood-relief/900/700",
    icon: "mdi:home-flood",
  },
  {
    title: "Orphan Care",
    description: "Supporting orphaned children through care, mentorship, belonging, and confidence-building.",
    image: "https://picsum.photos/seed/slmcs-orphan-care/900/700",
    icon: "mdi:human-male-child",
  },
];

const impactStats = [
  { value: "40", label: "Schools Reached" },
  { value: "2+", label: "Years of Mealcare" },
  { value: "3", label: "Zones Served" },
];

function Home() {
  return (
    <main className="bg-primary pt-20 font-dm-sans text-text md:pt-22">
      <section className="relative min-h-160 overflow-hidden py-20 md:py-28">
        <img
          src="https://picsum.photos/seed/slmcs-charity-hero/1800/1100"
          alt="SLMCS Foundation community gathering"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-secondary/75"></div>
        <div className="absolute inset-0 bg-text/25"></div>

        <div className="relative mx-auto flex min-h-140 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={60}>
            <div className="max-w-4xl text-white">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent1">SLMCS Foundation</p>

              <h1 className="mt-5 font-instrument-serif text-5xl leading-tight md:text-7xl">
                Humanity beyond religion.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
                Working towards a united, inclusive, and safe Sri Lanka through coexistence, community care, youth
                leadership, and meaningful social impact.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/projects-&-events">
                  <Button variant="primary" size="lg" icon="mdi:arrow-right" iconPosition="right">
                    Explore Our Work
                  </Button>
                </Link>

                <Link to="/contact">
                  <Button variant="secondary" size="lg" icon="mdi:heart-outline">
                    Get Involved
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="relative z-10">
        <div className="mx-auto -mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={45} direction="horizontal" reverse>
            <div className="rounded-4xl bg-white p-6 shadow-xl shadow-text/10 md:p-8">
              <div className="grid gap-6 md:grid-cols-3">
                {focusAreas.map((area, index) => (
                  <div key={area.title} className="flex gap-4">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${
                        index === 0
                          ? "bg-secondary text-white"
                          : index === 1
                            ? "bg-accent2 text-white"
                            : "bg-accent1 text-secondary"
                      }`}
                    >
                      <Icon icon={area.icon} width="24" />
                    </div>

                    <div>
                      <h3 className="font-instrument-serif text-2xl text-secondary">{area.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-text/65">{area.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <AnimatedContent distance={50} direction="horizontal">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent2">Who We Are</p>

              <h2 className="mt-4 font-instrument-serif text-4xl leading-tight text-secondary md:text-6xl">
                A civil society foundation built on unity, service, and trust.
              </h2>

              <p className="mt-6 text-base leading-8 text-text/70">
                SLMCS Foundation brings people together across communities, cultures, and generations to promote
                coexistence, support vulnerable groups, and strengthen social harmony.
              </p>

              <p className="mt-4 text-base leading-8 text-text/70">
                Our work is guided by a simple belief: a better Sri Lanka is possible when people choose compassion,
                responsibility, and humanity over division.
              </p>

              <div className="mt-8">
                <Link to="/about">
                  <Button variant="secondary" icon="mdi:arrow-right" iconPosition="right">
                    Learn About SLMCS
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={50} direction="horizontal" reverse delay={120}>
            <div className="overflow-hidden rounded-4xl bg-white p-3 shadow-xl shadow-text/5">
              <img
                src="https://picsum.photos/seed/slmcs-about-preview/1100/900"
                alt="SLMCS Foundation community service"
                className="h-108 w-full rounded-3xl object-cover"
              />
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="bg-secondary py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.45fr_1fr] lg:px-8">
          <AnimatedContent distance={50}>
            <div className="mx-auto w-full max-w-80 overflow-hidden rounded-4xl bg-white/10 p-3">
              <img
                src="https://picsum.photos/seed/mansoor-akbarally-president/720/1100"
                alt="Mansoor Akbarally, President of SLMCS Foundation"
                className="h-120 w-full rounded-3xl object-cover object-top"
              />
            </div>
          </AnimatedContent>

          <AnimatedContent distance={50} direction="horizontal" reverse delay={120}>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent1">President’s Message</p>

              <h2 className="mt-4 font-instrument-serif text-4xl leading-tight md:text-6xl">
                A message from our leadership.
              </h2>

              <p className="mt-6 text-base leading-8 text-white/75 md:text-lg">
                “SLMCS was born from a moment that called for unity, courage, and compassion. Our work continues with
                the same belief — that communities become stronger when we choose humanity over division, service over
                silence, and hope over fear.”
              </p>

              <div className="mt-8 border-l-4 border-accent1 pl-5">
                <p className="font-instrument-serif text-3xl">Mansoor Akbarally</p>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-white/55">President, SLMCS Foundation</p>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={50} direction="horizontal">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent2">Featured Work</p>

              <h2 className="mt-4 font-instrument-serif text-4xl leading-tight text-secondary md:text-6xl">
                Care that reaches people where they need it most.
              </h2>
            </div>
          </AnimatedContent>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <AnimatedContent distance={50} direction="horizontal" reverse>
              <article className="overflow-hidden rounded-4xl bg-white shadow-xl shadow-text/5">
                <img
                  src="https://picsum.photos/seed/slmcs-mealcare-main/1200/850"
                  alt="Mealcare project"
                  className="h-96 w-full object-cover"
                />

                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent2 text-white">
                      <Icon icon="mdi:food-outline" width="24" />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent2">Flagship Initiative</p>
                  </div>

                  <h3 className="mt-5 font-instrument-serif text-4xl text-secondary md:text-5xl">Mealcare</h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-text/65">
                    A long-term food support initiative helping school children and vulnerable communities through
                    consistent, structured meal support.
                  </p>

                  <div className="mt-7">
                    <Link
                      to="/projects-&-events"
                      className="inline-flex items-center gap-2 text-sm font-bold text-secondary transition hover:text-accent2"
                    >
                      View Mealcare impact
                      <Icon icon="mdi:arrow-right" width="20" />
                    </Link>
                  </div>
                </div>
              </article>
            </AnimatedContent>

            <AnimatedContent distance={50}>
              <div className="space-y-5">
                {initiatives.map((initiative, index) => (
                  <article
                    key={initiative.title}
                    className="flex gap-4 rounded-4xl bg-white p-4 shadow-xl shadow-text/5"
                  >
                    <img
                      src={initiative.image}
                      alt={initiative.title}
                      className="h-28 w-28 shrink-0 rounded-3xl object-cover"
                    />

                    <div>
                      <div
                        className={`flex h-10 w-10 items-center justify-center rounded-2xl ${
                          index === 1 ? "bg-accent2 text-white" : "bg-accent1 text-secondary"
                        }`}
                      >
                        <Icon icon={initiative.icon} width="22" />
                      </div>

                      <h3 className="mt-3 font-instrument-serif text-3xl text-secondary">{initiative.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-text/65">{initiative.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      <section className="bg-accent2 py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={50} direction="horizontal">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent1">Impact So Far</p>

                <h2 className="mt-4 font-instrument-serif text-4xl leading-tight md:text-6xl">
                  Every number reflects a person, a family, or a community served.
                </h2>
              </div>

              <p className="text-base leading-8 text-white/75">
                The impact of SLMCS is measured not only in numbers, but in school attendance, community trust,
                strengthened relationships, and hope restored through practical support.
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={50} direction="horizontal" reverse delay={120}>
            <div className="mt-12 rounded-4xl bg-white p-6 text-text shadow-xl shadow-text/10 md:p-8">
              <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
                <div className="rounded-4xl bg-secondary p-8 text-white">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent1">Mealcare Support</p>
                  <p className="mt-4 font-instrument-serif text-6xl leading-none md:text-7xl">500,000+</p>
                  <p className="mt-4 text-base leading-7 text-white/75">
                    Meals supported through community-led care and school-focused programmes.
                  </p>
                </div>

                <div className="grid gap-5 sm:grid-cols-3">
                  {impactStats.map((stat) => (
                    <div key={stat.label} className="border-l-4 border-accent1 pl-5">
                      <p className="font-instrument-serif text-5xl text-secondary">{stat.value}</p>
                      <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-text/55">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <AnimatedContent distance={50} direction="horizontal" reverse>
            <div className="overflow-hidden rounded-4xl bg-white p-3 shadow-xl shadow-text/5">
              <img
                src="https://picsum.photos/seed/slmcs-youth-wing/1100/900"
                alt="SLMCS Youth Wing members"
                className="h-108 w-full rounded-3xl object-cover"
              />
            </div>
          </AnimatedContent>

          <AnimatedContent distance={50}>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent2">Youth Wing</p>

              <h2 className="mt-4 font-instrument-serif text-4xl leading-tight text-secondary md:text-6xl">
                Young people serving communities with purpose.
              </h2>

              <p className="mt-5 text-base leading-8 text-text/70">
                The Youth Wing creates space for young people to lead community projects, develop skills, build
                friendships, and contribute to a more united Sri Lanka.
              </p>

              <div className="mt-8">
                <Link to="/youth-wing">
                  <Button variant="primary" size="lg" icon="mdi:arrow-right" iconPosition="right">
                    Explore Youth Wing
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={50}>
            <div className="rounded-4xl bg-secondary px-6 py-14 text-center text-white md:px-12 md:py-20">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent1">Get Involved</p>

              <h2 className="mx-auto mt-4 max-w-4xl font-instrument-serif text-4xl leading-tight md:text-6xl">
                Help build a more united Sri Lanka.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70">
                Whether through volunteering, donations, partnerships, or youth participation, your support helps
                strengthen meaningful community impact.
              </p>

              <div className="mt-8">
                <Link to="/contact">
                  <Button variant="primary" size="lg" icon="mdi:heart-outline">
                    Contact SLMCS
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

export default Home;
