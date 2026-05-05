import { Link } from "react-router-dom";

import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";

const communityGroups = ["Moors", "Malays", "Memons", "Bohras", "Wider Sri Lankan Muslim Community"];

const missionPoints = [
  "Champion co-existence through education and community-led initiatives",
  "Build a society that respects all cultures and traditions in Sri Lanka",
  "Work to mitigate extremism and contribute towards a safer country",
];

const values = [
  {
    title: "Accountability",
    description: "We take responsibility for using resources efficiently and achieving measurable results.",
    icon: "mdi:clipboard-check-outline",
  },
  {
    title: "Collaboration",
    description: "We work with communities, partners, and stakeholders to create stronger public impact.",
    icon: "mdi:handshake-outline",
  },
  {
    title: "Integrity",
    description: "We aim to remain honest, ethical, and transparent in the work we do.",
    icon: "mdi:shield-check-outline",
  },
  {
    title: "Commitment",
    description: "We set meaningful goals and stay committed to improving the quality of our initiatives.",
    icon: "mdi:target-arrow",
  },
  {
    title: "Open-mindedness",
    description: "We welcome new ideas and sustainable solutions that support communities.",
    icon: "mdi:lightbulb-on-outline",
  },
];

const boundaries = [
  "No religious or sectarian bias",
  "No personal agendas",
  "No gender bias",
  "No discrimination",
  "No direct involvement in politics",
  "No involvement in non-national issues",
  "No illegal or unethical activities",
];

const leadership = [
  { name: "Mansoor Akbarally", role: "President" },
  { name: "To Be Updated", role: "Vice President" },
  { name: "To Be Updated", role: "General Secretary" },
  { name: "To Be Updated", role: "Treasurer" },
  { name: "To Be Updated", role: "Head of Community Service" },
  { name: "To Be Updated", role: "Head of Co-existence" },
  { name: "To Be Updated", role: "Head of Projects" },
  { name: "To Be Updated", role: "Head of Partnerships" },
];

function About() {
  return (
    <main className="bg-primary pt-20 font-dm-sans text-text md:pt-22">
      <section className="relative overflow-hidden bg-secondary py-20 text-white md:py-28">
        <img
          src="https://picsum.photos/seed/slmcs-about-hero/1800/1000"
          alt="SLMCS Foundation community gathering"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-secondary/85"></div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={60}>
            <div className="max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent1">About SLMCS Foundation</p>

              <h1 className="mt-5 font-instrument-serif text-5xl leading-tight md:text-7xl">
                A movement built on unity, responsibility, and humanity.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
                Sri Lanka Muslim Civil Society Foundation works to strengthen coexistence, trust, and community care
                across Sri Lanka under the belief that humanity must always come before division.
              </p>
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <AnimatedContent distance={50} direction="horizontal">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent2">Our Beginning</p>

              <h2 className="mt-4 font-instrument-serif text-4xl leading-tight text-secondary md:text-6xl">
                Formed in a moment that called for solidarity.
              </h2>

              <p className="mt-6 text-base leading-8 text-text/70">
                SLMCS came together in the aftermath of the 21st April 2019 terror attacks, when the country needed
                solidarity, hope, and responsible community leadership. The foundation was shaped by the call to rise,
                resist, and unite during a difficult moment in Sri Lanka’s history.
              </p>

              <p className="mt-4 text-base leading-8 text-text/70">
                What began as a response to national pain has developed into an incorporated civil society foundation
                working through charitable, community, and non-government networks within the Muslim community.
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={50} direction="horizontal" reverse delay={120}>
            <div className="overflow-hidden rounded-4xl bg-white p-3 shadow-xl shadow-text/5">
              <img
                src="https://picsum.photos/seed/slmcs-origin-story/1100/900"
                alt="SLMCS Foundation origin story"
                className="h-108 w-full rounded-3xl object-cover"
              />
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <AnimatedContent distance={50} direction="horizontal" reverse>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent2">Who We Represent</p>

              <h2 className="mt-4 font-instrument-serif text-4xl leading-tight text-secondary md:text-6xl">
                United beyond sectarian differences.
              </h2>

              <p className="mt-6 text-base leading-8 text-text/70">
                SLMCS represents the diversity of the Sri Lankan Muslim community while working with a wider national
                purpose. The foundation is not built around division, but around shared responsibility, public service,
                and peaceful coexistence.
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={50} direction="horizontal" delay={120}>
            <div className="rounded-4xl bg-primary p-6 shadow-xl shadow-text/5 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-secondary">Communities Included</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {communityGroups.map((group) => (
                  <span
                    key={group}
                    className="rounded-full border border-secondary/10 bg-white px-5 py-3 text-sm font-medium text-text/70"
                  >
                    {group}
                  </span>
                ))}
              </div>

              <div className="mt-8 border-l-4 border-accent1 pl-5">
                <p className="font-instrument-serif text-3xl text-secondary">Together, we stand stronger.</p>
                <p className="mt-3 text-sm leading-7 text-text/65">
                  The foundation’s work is guided by service, social harmony, and the belief that communities can build
                  a better future together.
                </p>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={50}>
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent2">Vision & Mission</p>

              <h2 className="mt-4 font-instrument-serif text-4xl leading-tight text-secondary md:text-6xl">
                Working towards a united, inclusive, and safe Sri Lanka.
              </h2>
            </div>
          </AnimatedContent>

          <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <AnimatedContent distance={50} direction="horizontal">
              <div className="rounded-4xl bg-secondary p-8 text-white shadow-xl shadow-text/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent1 text-secondary">
                  <Icon icon="mdi:eye-outline" width="28" />
                </div>

                <h3 className="mt-6 font-instrument-serif text-4xl">Our Vision</h3>

                <p className="mt-4 text-base leading-8 text-white/75">
                  A united, inclusive, and safe Sri Lanka where all communities can live with dignity, mutual respect,
                  and trust.
                </p>
              </div>
            </AnimatedContent>

            <AnimatedContent distance={50} direction="horizontal" reverse delay={120}>
              <div className="rounded-4xl bg-white p-8 shadow-xl shadow-text/5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent2 text-white">
                  <Icon icon="mdi:flag-outline" width="28" />
                </div>

                <h3 className="mt-6 font-instrument-serif text-4xl text-secondary">Our Mission</h3>

                <div className="mt-6 space-y-4">
                  {missionPoints.map((point) => (
                    <div key={point} className="flex gap-3">
                      <Icon icon="mdi:check-circle-outline" width="22" className="mt-1 shrink-0 text-accent2" />
                      <p className="text-sm leading-7 text-text/70">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedContent>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={50} direction="horizontal" reverse>
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent1">Our Values</p>

              <h2 className="mt-4 font-instrument-serif text-4xl leading-tight md:text-6xl">
                The principles behind every initiative.
              </h2>

              <p className="mt-5 text-base leading-8 text-white/70">
                Our values guide how we work with communities, donors, volunteers, schools, public institutions, and
                partner organisations.
              </p>
            </div>
          </AnimatedContent>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {values.map((value, index) => (
              <AnimatedContent key={value.title} distance={40} delay={index * 80}>
                <div className="h-full rounded-4xl border border-white/10 bg-white/10 p-6">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      index % 2 === 0 ? "bg-accent1 text-secondary" : "bg-accent2 text-white"
                    }`}
                  >
                    <Icon icon={value.icon} width="24" />
                  </div>

                  <h3 className="mt-5 font-instrument-serif text-3xl">{value.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/65">{value.description}</p>
                </div>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <AnimatedContent distance={50} direction="horizontal">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent2">Our Boundaries</p>

              <h2 className="mt-4 font-instrument-serif text-4xl leading-tight text-secondary md:text-6xl">
                Clear in what we stand for — and what we do not.
              </h2>

              <p className="mt-6 text-base leading-8 text-text/70">
                SLMCS is committed to public good, national harmony, ethical action, and responsible civic engagement.
                The foundation avoids activities that divide communities or move away from its humanitarian purpose.
              </p>
            </div>
          </AnimatedContent>

          <AnimatedContent distance={50} direction="horizontal" reverse delay={120}>
            <div className="rounded-4xl bg-white p-6 shadow-xl shadow-text/5 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                {boundaries.map((item) => (
                  <div key={item} className="flex gap-3 rounded-3xl bg-primary p-4">
                    <Icon icon="mdi:close-circle-outline" width="22" className="mt-1 shrink-0 text-secondary" />
                    <p className="text-sm leading-6 text-text/70">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="bg-accent2 py-16 text-white md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
          <AnimatedContent distance={50} direction="horizontal" reverse>
            <div className="overflow-hidden rounded-4xl bg-white/10 p-3">
              <img
                src="https://picsum.photos/seed/slmcs-purpose/1100/900"
                alt="SLMCS Foundation purpose"
                className="h-108 w-full rounded-3xl object-cover"
              />
            </div>
          </AnimatedContent>

          <AnimatedContent distance={50} direction="horizontal" delay={120}>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent1">Our Purpose</p>

              <h2 className="mt-4 font-instrument-serif text-4xl leading-tight md:text-6xl">
                Hope for a peaceful and progressive future.
              </h2>

              <p className="mt-6 text-base leading-8 text-white/75">
                SLMCS exists to contribute to a prosperous and peaceful future, a better quality of life, and a more
                progressive country. This purpose connects every programme, event, and community initiative.
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex gap-3">
                  <Icon icon="mdi:heart-outline" width="22" className="mt-1 text-accent1" />
                  <p className="text-sm leading-7 text-white/70">The hope of a prosperous and peaceful future.</p>
                </div>

                <div className="flex gap-3">
                  <Icon icon="mdi:home-heart" width="22" className="mt-1 text-accent1" />
                  <p className="text-sm leading-7 text-white/70">A dream of a better life for communities.</p>
                </div>

                <div className="flex gap-3">
                  <Icon icon="mdi:earth" width="22" className="mt-1 text-accent1" />
                  <p className="text-sm leading-7 text-white/70">A shared role in building a progressive country.</p>
                </div>
              </div>
            </div>
          </AnimatedContent>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={50}>
            <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent2">Leadership</p>

                <h2 className="mt-4 font-instrument-serif text-4xl leading-tight text-secondary md:text-6xl">
                  Guided by service and accountability.
                </h2>

                <p className="mt-5 text-base leading-8 text-text/70">
                  Full leadership details will be updated soon. For now, this section is prepared to present the
                  foundation’s office bearers, project leads, and community engagement heads clearly.
                </p>
              </div>

              <Link to="/contact">
                <Button variant="secondary" icon="mdi:email-outline">
                  Contact Secretariat
                </Button>
              </Link>
            </div>
          </AnimatedContent>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((person, index) => (
              <AnimatedContent key={`${person.name}-${person.role}`} distance={40} delay={index * 70}>
                <article className="overflow-hidden rounded-4xl bg-white p-4 shadow-xl shadow-text/5">
                  <img
                    src={`https://picsum.photos/seed/slmcs-leadership-${index}/600/760`}
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

      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={50}>
            <div className="rounded-4xl bg-secondary px-6 py-14 text-center text-white md:px-12 md:py-20">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent1">Get Involved</p>

              <h2 className="mx-auto mt-4 max-w-4xl font-instrument-serif text-4xl leading-tight md:text-6xl">
                Be part of building a more united Sri Lanka.
              </h2>

              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/70">
                Whether through volunteering, donations, partnerships, or community initiatives, your support helps
                strengthen meaningful impact.
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

export default About;
