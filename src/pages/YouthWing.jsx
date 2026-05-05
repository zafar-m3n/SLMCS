import { Link } from "react-router-dom";

import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";

const avenues = [
  {
    title: "Community Service",
    description:
      "Working through collaboration, service, and hands-on volunteering to uplift communities from the ground up.",
    icon: "mdi:hand-heart-outline",
  },
  {
    title: "Co-existence",
    description:
      "Promoting understanding, cultural respect, and unity through initiatives rooted in Humanity Beyond Religion.",
    icon: "mdi:account-group-outline",
  },
  {
    title: "Member Development",
    description:
      "Helping members grow through team-building, workshops, mentorship, spiritual reflection, and shared learning.",
    icon: "mdi:account-star-outline",
  },
  {
    title: "Media & PR",
    description:
      "Creating thoughtful content that educates, engages, and represents the Youth Wing as a trusted voice for unity.",
    icon: "mdi:bullhorn-outline",
  },
  {
    title: "Fundraising",
    description:
      "Supporting the sustainability of initiatives through ethical, creative, and community-driven fundraising.",
    icon: "mdi:charity",
  },
];

const communityProjects = [
  {
    title: "Orphan Care",
    description:
      "A long-term initiative supporting over 100 orphaned children through joyful activities, care, emotional understanding, mentorship, and future life-skills programmes.",
    icon: "mdi:human-male-child",
  },
  {
    title: "Revive",
    description:
      "A refurbishment-based project focused on restoring neglected schools, elderly homes, and community spaces through cleaning, repairing, painting, and rebuilding.",
    icon: "mdi:home-repair-outline",
  },
  {
    title: "Flood Relief",
    description:
      "A relief initiative supporting families affected by floods through dry ration packs, water, cleaning supplies, mattresses, pillows, clothing, and long-term recovery planning.",
    icon: "mdi:home-flood",
  },
];

const coexistenceProjects = [
  {
    title: "Bridges of Faith",
    description:
      "A Masjid Open Day planned at Jawatte Jummah Masjid, featuring guided tours, a kids’ area, and stalls showcasing Islamic clothing, art, and food.",
    icon: "mdi:mosque-outline",
  },
  {
    title: "Nujoom Night",
    description:
      "A networking and support gathering for young reverts in Sri Lanka, including a Buddy System to guide participants ahead of Ramadan.",
    icon: "mdi:star-crescent",
  },
  {
    title: "Know Your Neighbour",
    description:
      "A series of illustrated books answering common questions about Sri Lanka’s Muslim, Sinhalese, Tamil, and Burgher communities.",
    icon: "mdi:book-open-page-variant-outline",
  },
  {
    title: "Breakfast at Sunset",
    description:
      "An annual interfaith iftar hosted during Ramadan to bring people from diverse backgrounds together in friendship and solidarity.",
    icon: "mdi:weather-sunset",
  },
];

const developmentProjects = [
  {
    title: "On the Paduru",
    date: "29 August 2025",
    description:
      "The inaugural Youth Wing event, designed to introduce members to the board, build friendships, and reinforce coexistence through games, food, and guest speakers.",
  },
  {
    title: "Your Wealth, The Halal Way",
    date: "15 November 2025",
    description:
      "A financial literacy workshop covering budgeting, responsible debt, halal investments, takaful, and ethical wealth-building.",
  },
  {
    title: "Ramadan Retreats",
    date: "Ramadan Programme",
    description:
      "Separate boys’ and girls’ retreats focused on reflection, prayer, brotherhood, sisterhood, spiritual reset, and community-centered growth.",
  },
];

const mediaFundraising = [
  {
    title: "Bridges of Belief Podcast",
    description:
      "Long-form YouTube conversations answering common questions and misunderstandings about Islam, supported by short-form content for wider reach.",
    icon: "mdi:microphone-outline",
  },
  {
    title: "Social Media Content",
    description:
      "Ongoing content built around education, fun and trending content, testimonials, and important dates in the Islamic calendar.",
    icon: "mdi:instagram",
  },
  {
    title: "Fundraising Stalls",
    description: "Community fundraising efforts including support stalls for flood relief and future events.",
    icon: "mdi:storefront-outline",
  },
  {
    title: "Merchandise & T-Shirts",
    description:
      "Youth Wing T-shirts, tote bags, enamel pins, and fair-based merchandise planned to build identity and support future initiatives.",
    icon: "mdi:tshirt-crew-outline",
  },
];

const leadership = [
  { name: "To Be Updated", role: "Youth Wing President" },
  { name: "To Be Updated", role: "Vice President" },
  { name: "To Be Updated", role: "Secretary" },
  { name: "To Be Updated", role: "Treasurer" },
  { name: "To Be Updated", role: "Community Service Lead" },
  { name: "To Be Updated", role: "Co-existence Lead" },
  { name: "To Be Updated", role: "Media & PR Lead" },
  { name: "To Be Updated", role: "Fundraising Lead" },
];

function YouthWing() {
  return (
    <main className="bg-primary pt-20 font-dm-sans text-text md:pt-22">
      <section className="relative min-h-160 overflow-hidden py-20 md:py-28">
        <img
          src="https://picsum.photos/seed/slmcs-youth-hero/1800/1100"
          alt="SLMCS Youth Wing members"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-secondary/75"></div>
        <div className="absolute inset-0 bg-text/20"></div>

        <div className="relative mx-auto flex min-h-140 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={60}>
            <div className="max-w-4xl text-white">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent1">SLMCS Youth Wing</p>

              <h1 className="mt-5 font-instrument-serif text-5xl leading-tight md:text-7xl">
                Young people serving communities with purpose.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
                A youth-led space for service, leadership, coexistence, creativity, and meaningful community impact
                under the mission of Humanity Beyond Religion.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to="/contact">
                  <Button variant="primary" size="lg" icon="mdi:heart-outline">
                    Join the Youth Wing
                  </Button>
                </Link>

                <Link to="/projects-&-events">
                  <Button variant="secondary" size="lg" icon="mdi:arrow-right" iconPosition="right">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="relative z-10">
        <div className="mx-auto -mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={50} direction="horizontal" reverse>
            <div className="rounded-4xl bg-white p-6 shadow-xl shadow-text/10 md:p-8">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent2">What We Do</p>

                  <h2 className="mt-4 font-instrument-serif text-4xl leading-tight text-secondary md:text-5xl">
                    A place to serve, lead, learn, and grow together.
                  </h2>
                </div>

                <p className="text-base leading-8 text-text/70">
                  The Youth Wing focuses on keeping young members actively engaged and continuously developing as
                  individuals and as part of a larger community. Through projects, training, retreats, creative media,
                  and fundraising, members build friendships while contributing to causes that matter.
                </p>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={50} direction="horizontal">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent2">Youth Wing Avenues</p>

              <h2 className="mt-4 font-instrument-serif text-4xl leading-tight text-secondary md:text-6xl">
                Five avenues shaping youth-led impact.
              </h2>

              <p className="mt-5 text-base leading-8 text-text/70">
                Each avenue gives members a clear way to contribute — from direct service and coexistence work to media,
                fundraising, and personal development.
              </p>
            </div>
          </AnimatedContent>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {avenues.map((avenue, index) => (
              <AnimatedContent
                key={avenue.title}
                distance={40}
                direction={index % 3 === 0 ? "horizontal" : "vertical"}
                reverse={index % 3 === 1}
                delay={index * 80}
              >
                <article className="h-full rounded-4xl bg-white p-6 shadow-xl shadow-text/5">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      index === 0
                        ? "bg-secondary text-white"
                        : index === 1
                          ? "bg-accent2 text-white"
                          : index === 2
                            ? "bg-accent1 text-secondary"
                            : index === 3
                              ? "bg-secondary/10 text-secondary"
                              : "bg-accent2/10 text-accent2"
                    }`}
                  >
                    <Icon icon={avenue.icon} width="24" />
                  </div>

                  <h3 className="mt-5 font-instrument-serif text-3xl text-secondary">{avenue.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text/65">{avenue.description}</p>
                </article>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <AnimatedContent distance={50} direction="horizontal" reverse>
            <div className="overflow-hidden rounded-4xl bg-white/10 p-3">
              <img
                src="https://picsum.photos/seed/slmcs-youth-community-service/1100/900"
                alt="Youth Wing community service"
                className="h-108 w-full rounded-3xl object-cover"
              />
            </div>
          </AnimatedContent>

          <AnimatedContent distance={50} direction="horizontal" delay={120}>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent1">Community Service</p>

              <h2 className="mt-4 font-instrument-serif text-4xl leading-tight md:text-6xl">
                Service that starts with presence, not just donations.
              </h2>

              <p className="mt-6 text-base leading-8 text-white/75">
                Community service at the Youth Wing is about building relationships with the people and communities
                being served. The focus is not only on financial support, but on members giving their time, skills, and
                effort through collaborative projects.
              </p>
            </div>
          </AnimatedContent>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {communityProjects.map((project, index) => (
            <AnimatedContent
              key={project.title}
              distance={40}
              direction={index === 0 ? "horizontal" : index === 1 ? "vertical" : "horizontal"}
              reverse={index === 2}
              delay={index * 90}
            >
              <article className="h-full rounded-4xl border border-white/10 bg-white/10 p-6">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    index === 1 ? "bg-accent2 text-white" : "bg-accent1 text-secondary"
                  }`}
                >
                  <Icon icon={project.icon} width="24" />
                </div>

                <h3 className="mt-5 font-instrument-serif text-3xl">{project.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{project.description}</p>
              </article>
            </AnimatedContent>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={50} direction="horizontal">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent2">Co-existence & Culture</p>

              <h2 className="mt-4 font-instrument-serif text-4xl leading-tight text-secondary md:text-6xl">
                Building bridges through understanding.
              </h2>

              <p className="mt-5 text-base leading-8 text-text/70">
                Co-existence sits at the heart of the Youth Wing. These initiatives create spaces for people of
                different backgrounds to learn, ask, share, and build trust.
              </p>
            </div>
          </AnimatedContent>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {coexistenceProjects.map((project, index) => (
              <AnimatedContent
                key={project.title}
                distance={45}
                direction={index % 2 === 0 ? "horizontal" : "vertical"}
                reverse={index === 1}
                delay={index * 80}
              >
                <article className="flex h-full gap-5 rounded-4xl bg-white p-6 shadow-xl shadow-text/5">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${
                      index % 2 === 0 ? "bg-accent2 text-white" : "bg-accent1 text-secondary"
                    }`}
                  >
                    <Icon icon={project.icon} width="28" />
                  </div>

                  <div>
                    <h3 className="font-instrument-serif text-3xl text-secondary">{project.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-text/65">{project.description}</p>
                  </div>
                </article>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent2 py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <AnimatedContent distance={50} direction="horizontal" reverse>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent1">Member Development</p>

              <h2 className="mt-4 font-instrument-serif text-4xl leading-tight md:text-6xl">
                Growth through friendship, learning, and reflection.
              </h2>

              <p className="mt-6 text-base leading-8 text-white/75">
                Member Development keeps the Youth Wing active and connected. Through team-building, professional
                growth, mentorship, and spiritual programmes, members gain real value from their time in the movement.
              </p>
            </div>
          </AnimatedContent>

          <div className="space-y-5">
            {developmentProjects.map((project, index) => (
              <AnimatedContent
                key={project.title}
                distance={45}
                direction={index === 0 ? "horizontal" : index === 1 ? "vertical" : "horizontal"}
                reverse={index === 2}
                delay={index * 90}
              >
                <article className="rounded-4xl bg-white p-6 text-text shadow-xl shadow-text/10">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-accent2">{project.date}</p>
                  <h3 className="mt-3 font-instrument-serif text-3xl text-secondary">{project.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-text/65">{project.description}</p>
                </article>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <AnimatedContent distance={50} direction="horizontal">
            <div className="overflow-hidden rounded-4xl bg-white p-3 shadow-xl shadow-text/5">
              <img
                src="https://picsum.photos/seed/slmcs-youth-media-fundraising/1100/900"
                alt="Youth Wing media and fundraising"
                className="h-108 w-full rounded-3xl object-cover"
              />
            </div>
          </AnimatedContent>

          <AnimatedContent distance={50} direction="horizontal" reverse delay={120}>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent2">Media & Fundraising</p>

              <h2 className="mt-4 font-instrument-serif text-4xl leading-tight text-secondary md:text-6xl">
                Keeping the movement visible, active, and sustainable.
              </h2>

              <p className="mt-6 text-base leading-8 text-text/70">
                The Media & PR and Fundraising teams support the wider mission by telling meaningful stories, engaging
                the public, raising resources, and building a stronger Youth Wing identity.
              </p>
            </div>
          </AnimatedContent>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          {mediaFundraising.map((item, index) => (
            <AnimatedContent
              key={item.title}
              distance={40}
              direction={index % 2 === 0 ? "vertical" : "horizontal"}
              reverse={index === 1 || index === 3}
              delay={index * 80}
            >
              <article className="h-full rounded-4xl bg-white p-6 shadow-xl shadow-text/5">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                    index % 2 === 0 ? "bg-secondary text-white" : "bg-accent2 text-white"
                  }`}
                >
                  <Icon icon={item.icon} width="24" />
                </div>

                <h3 className="mt-5 font-instrument-serif text-3xl text-secondary">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-text/65">{item.description}</p>
              </article>
            </AnimatedContent>
          ))}
        </div>
      </section>

      <section className="bg-secondary py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={50} direction="horizontal">
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent1">Youth Wing Leadership</p>

                <h2 className="mt-4 font-instrument-serif text-4xl leading-tight md:text-6xl">
                  A team structure prepared for youth-led service.
                </h2>

                <p className="mt-5 text-base leading-8 text-white/70">
                  Full Youth Wing board details will be updated soon. This section is ready to present office bearers,
                  avenue leads, and project heads clearly once names and photos are finalised.
                </p>
              </div>

              <Link to="/contact">
                <Button variant="primary" icon="mdi:account-plus-outline">
                  Join the Team
                </Button>
              </Link>
            </div>
          </AnimatedContent>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person, index) => (
              <AnimatedContent
                key={`${person.role}-${index}`}
                distance={40}
                direction={index % 3 === 0 ? "horizontal" : "vertical"}
                reverse={index % 3 === 1}
                delay={index * 70}
              >
                <article className="overflow-hidden rounded-4xl bg-white p-4 text-text shadow-xl shadow-text/10">
                  <img
                    src={`https://picsum.photos/seed/youth-wing-leader-${index}/600/760`}
                    alt={person.name}
                    className="h-72 w-full rounded-3xl object-cover"
                  />

                  <div className="p-2 pt-5">
                    <p className="font-instrument-serif text-2xl text-secondary">{person.name}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-text/50">{person.role}</p>
                  </div>
                </article>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={50}>
            <div className="rounded-4xl bg-accent2 px-6 py-14 text-center text-white md:px-12 md:py-20">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent1">Get Involved</p>

              <h2 className="mx-auto mt-4 max-w-4xl font-instrument-serif text-4xl leading-tight md:text-6xl">
                Be part of a youth movement that serves with purpose.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70">
                Join the Youth Wing to serve communities, build friendships, develop skills, and contribute to a more
                united Sri Lanka.
              </p>

              <div className="mt-8">
                <Link to="/contact">
                  <Button variant="primary" size="lg" icon="mdi:heart-outline">
                    Join the Youth Wing
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

export default YouthWing;
