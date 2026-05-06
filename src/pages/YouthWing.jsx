import { Link } from "react-router-dom";

import Icon from "@/components/ui/Icon";
import Button from "@/components/ui/Button";
import AnimatedContent from "@/components/ui/AnimatedContent";

const avenues = [
  {
    title: "Community Service",
    description:
      "Building meaningful relationships with communities through collaboration, hands-on service, and projects where members contribute their time, skills, and effort.",
    icon: "mdi:hand-heart-outline",
  },
  {
    title: "Co-existence & Culture",
    description:
      "Promoting unity, cultural understanding, dialogue, and harmony through initiatives rooted in Humanity Beyond Religion.",
    icon: "mdi:account-group-outline",
  },
  {
    title: "Member Development",
    description:
      "Keeping members engaged, connected, and growing through team-building, training, mentorship, personal development, and spiritual programmes.",
    icon: "mdi:account-star-outline",
  },
  {
    title: "Media & PR",
    description:
      "Creating thoughtful digital content, long-form conversations, short-form media, and public-facing storytelling for education, engagement, and unity.",
    icon: "mdi:bullhorn-outline",
  },
  {
    title: "Fundraising",
    description:
      "Supporting the sustainability of Youth Wing initiatives through creative, ethical, and community-driven fundraising efforts.",
    icon: "mdi:charity",
  },
];

const communityProjects = [
  {
    title: "Orphan Care",
    description:
      "A long-term initiative supporting over 100 orphaned children by understanding their emotional, social, and intellectual needs. Phase 1 included a joyful carnival in collaboration with Soup Kitchen, while future phases will focus on workshops, mentorship, confidence-building, and life-skills development.",
    icon: "mdi:human-male-child",
  },
  {
    title: "Revive",
    description:
      "A refurbishment-based community project restoring neglected and under-resourced spaces such as schools, elderly homes, and community centers through painting, repairing, cleaning, and rebuilding.",
    icon: "mdi:home-repair-outline",
  },
  {
    title: "Flood Relief",
    description:
      "An urgent relief initiative supporting individuals and families affected by the Ditwah floods through dry ration packs, water bottles, cleaning supplies, mattresses, pillows, clothing, and long-term recovery planning. The project raised over LKR 4.5 million through member dedication and community generosity.",
    icon: "mdi:home-flood",
  },
];

const coexistenceProjects = [
  {
    title: "Bridges of Faith",
    description:
      "A Masjid Open Day scheduled for January 2026 at Jawatte Jummah Masjid, featuring guided masjid tours, a dedicated kids’ area, and stalls showcasing Islamic clothing, art, and food.",
    icon: "mdi:mosque-outline",
  },
  {
    title: "Nujoom Night",
    description:
      "A networking and support gathering for young reverts in Sri Lanka, scheduled for February 2026 ahead of Ramadan, with a Buddy System to offer guidance, friendship, and support.",
    icon: "mdi:star-crescent",
  },
  {
    title: "Know Your Neighbour",
    description:
      "A four-part illustrated book series answering frequently asked questions about Sri Lanka’s Muslim, Sinhalese, Tamil, and Burgher communities to dispel misconceptions and encourage empathy.",
    icon: "mdi:book-open-page-variant-outline",
  },
  {
    title: "Breakfast at Sunset",
    description:
      "An annual large-scale interfaith iftar held during Ramadan in collaboration with SLMCS, Torrington Walkers, and Soup Kitchen Sri Lanka to strengthen interfaith harmony and community solidarity.",
    icon: "mdi:weather-sunset",
  },
];

const developmentProjects = [
  {
    title: "On the Paduru",
    date: "29 August 2025",
    description:
      "The inaugural SLMCS Youth Wing event held at the MyBiz car park, designed to introduce members to the board and each other while reinforcing coexistence, unity, and community spirit through Sri Lankan-themed games, traditional food, and guest speaker sessions.",
  },
  {
    title: "Your Wealth, The Halal Way",
    date: "15 November 2025",
    description:
      "A financial literacy workshop held at the CIMA Auditorium, led by Muath Mubarak of Amana Bank PLC. The session covered budgeting, responsible debt, halal investments, takaful, and career-related financial decisions in line with Islamic values.",
  },
  {
    title: "Ramadan Retreats",
    date: "Ramadan Programme",
    description:
      "Separate boys’ and girls’ retreats planned exclusively for Youth Wing members during Ramadan. The girls’ retreat created space for reflection, duas, ibadah, sisterhood, iftar, taraweeh, suhoor, and Fajr, while the boys’ retreat focused on prayer, dawah, sports, reflection, suhoor, and Fajr.",
  },
];

const mediaProjects = [
  {
    title: "Bridges of Belief Podcast",
    description:
      "A long-form YouTube video series answering misunderstandings and common questions non-Muslims may have about Islam. Each question will also be turned into short-form content to make the message more shareable and relevant to youth.",
    icon: "mdi:microphone-outline",
  },
  {
    title: "General Social Media Content",
    description:
      "Ongoing content for SLMCS platforms built around four pillars: education, fun and trending content, testimonials, and important dates in the Islamic calendar.",
    icon: "mdi:instagram",
  },
];

const fundraisingProjects = [
  {
    title: "On the Padhuru",
    description:
      "The Fundraising Team raised the necessary funds to ensure the On the Padhuru event ran smoothly without financial constraints.",
    icon: "mdi:calendar-heart",
  },
  {
    title: "Bridges of Faith Fundraising",
    description:
      "Funds were raised to support the smooth planning and execution of the Bridges of Faith Masjid Open Day without financial limitations.",
    icon: "mdi:mosque-outline",
  },
  {
    title: "Flood Relief Fundraising Stall",
    description:
      "During the Flood Relief initiative, the team organized and managed the SLMCS Youth Wing fundraising stall at the MCCF stalls, contributing towards donations for affected families.",
    icon: "mdi:storefront-outline",
  },
  {
    title: "Masjid Open Day Bake Sale",
    description:
      "A current fundraising initiative selling simple homemade bakery items to support the Masjid Open Day and engage the wider community.",
    icon: "mdi:cupcake",
  },
  {
    title: "SLMCS Youth Wing T-Shirts",
    description:
      "Youth Wing T-shirts are being developed to build a shared identity among members while generating profit to support ongoing and future projects.",
    icon: "mdi:tshirt-crew-outline",
  },
  {
    title: "Merchandise & Fairs",
    description:
      "Future fundraising plans include SLMCS merchandise such as tote bags and enamel pins, with the possibility of promoting them at fairs and external events.",
    icon: "mdi:shopping-outline",
  },
];

const leadership = [
  {
    name: "Asma Hussain",
    role: "President",
    description: "Leads the Youth Wing with overall direction, coordination, and responsibility for its mission.",
  },
  {
    name: "Khaalid Dulapaandan",
    role: "Vice President",
    description: "Supports strategic planning, team coordination, and the smooth running of Youth Wing initiatives.",
  },
  {
    name: "Thahaani Mohammed",
    role: "Vice President",
    description: "Assists with leadership, member engagement, and strengthening the Youth Wing’s overall impact.",
  },
  {
    name: "Dahliah Rauff",
    role: "Secretary",
    description: "Oversees documentation, communication, records, and administrative coordination for the team.",
  },
  {
    name: "Zaidh Shafraz",
    role: "Treasurer",
    description: "Manages financial oversight, budgeting, and accountability across Youth Wing activities.",
  },
  {
    name: "Rashaad Izath",
    role: "Assistant Treasurer",
    description: "Supports financial tracking, fundraising coordination, and responsible resource management.",
  },
  {
    name: "Zulqarnain Rizwan",
    role: "Media & PR Co-Lead",
    description: "Helps shape the Youth Wing’s public voice through creative content, storytelling, and outreach.",
  },
  {
    name: "Fahad Fazly",
    role: "Media & PR Co-Lead",
    description: "Supports digital content, media planning, and public communication for Youth Wing initiatives.",
  },
  {
    name: "Samiha Anzary",
    role: "Fundraising Co-Lead",
    description: "Leads community-driven fundraising efforts to support ongoing and future Youth Wing projects.",
  },
  {
    name: "Ayyoob Faizeen",
    role: "Fundraising Co-Lead",
    description: "Coordinates fundraising activities that help sustain events, relief work, and community initiatives.",
  },
  {
    name: "Nabeela Jabir",
    role: "Culture & Co-existence Co-Lead",
    description: "Supports initiatives that promote unity, dialogue, cultural understanding, and interfaith harmony.",
  },
  {
    name: "Aamina Hameed",
    role: "Culture & Co-existence Co-Lead",
    description: "Helps lead projects that build bridges across communities through culture and coexistence.",
  },
  {
    name: "Liyaanah Rauff",
    role: "Membership Development Co-Lead",
    description: "Supports member growth through team-building, training, mentorship, and meaningful engagement.",
  },
  {
    name: "Yunus Ismail",
    role: "Membership Development Co-Lead",
    description:
      "Helps strengthen member connection, development, participation, and leadership within the Youth Wing.",
  },
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
                A youth-led platform built on service, leadership, coexistence, creativity, and meaningful community
                impact under the mission of Humanity Beyond Religion.
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
                  The Youth Wing brings young people together to create lasting impact through community service,
                  coexistence and culture, member development, media and public relations, and fundraising. Every avenue
                  gives members a meaningful way to contribute while growing as individuals and as part of a united
                  community.
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
                Each avenue has its own purpose, projects, and responsibilities, allowing members to contribute without
                overlapping or combining the work of different teams.
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
                Community Service at SLMCS goes beyond simply helping others. It is about building meaningful
                relationships with the communities we serve, working through collaborations, and creating a greater and
                more lasting impact through time, skills, effort, and service.
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
                At the heart of SLMCS is the Co-existence & Culture Avenue. Guided by the motto Humanity Beyond
                Religion, this avenue promotes dialogue, cultural exchange, community projects, and understanding among
                Sri Lankans of different faiths and backgrounds.
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
                The Membership Development Avenue keeps members actively engaged and continuously developing as
                individuals and as part of a community. Through team-building, training, mentorship, professional
                growth, personal well-being, and shared learning, members gain real value from their time with the Youth
                Wing.
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
                src="https://picsum.photos/seed/slmcs-youth-media/1100/900"
                alt="Youth Wing media and public relations"
                className="h-108 w-full rounded-3xl object-cover"
              />
            </div>
          </AnimatedContent>

          <AnimatedContent distance={50} direction="horizontal" reverse delay={120}>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent2">Media & PR</p>

              <h2 className="mt-4 font-instrument-serif text-4xl leading-tight text-secondary md:text-6xl">
                Sharing stories that educate, engage, and unite.
              </h2>

              <p className="mt-6 text-base leading-8 text-text/70">
                The Media & PR Avenue creates content that connects with young people while uplifting the image of the
                Sri Lanka Muslim Youth Council as a trusted voice for peace, wisdom, and unity.
              </p>
            </div>
          </AnimatedContent>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-5 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
          {mediaProjects.map((item, index) => (
            <AnimatedContent
              key={item.title}
              distance={40}
              direction={index % 2 === 0 ? "vertical" : "horizontal"}
              reverse={index === 1}
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
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent1">Fundraising</p>

              <h2 className="mt-4 font-instrument-serif text-4xl leading-tight md:text-6xl">
                Sustaining the work through community-driven support.
              </h2>

              <p className="mt-5 text-base leading-8 text-white/70">
                The Fundraising Team acts as the backbone of SLMCS initiatives by mobilizing resources through creative,
                ethical, and community-driven efforts. Its work goes beyond traditional fundraising by creating ways for
                supporters to contribute while feeling connected to the cause.
              </p>
            </div>
          </AnimatedContent>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {fundraisingProjects.map((item, index) => (
              <AnimatedContent
                key={item.title}
                distance={40}
                direction={index % 2 === 0 ? "horizontal" : "vertical"}
                reverse={index % 3 === 1}
                delay={index * 80}
              >
                <article className="h-full rounded-4xl border border-white/10 bg-white/10 p-6">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                      index % 2 === 0 ? "bg-accent1 text-secondary" : "bg-accent2 text-white"
                    }`}
                  >
                    <Icon icon={item.icon} width="24" />
                  </div>

                  <h3 className="mt-5 font-instrument-serif text-3xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{item.description}</p>
                </article>
              </AnimatedContent>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContent distance={50} direction="horizontal">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent1">Youth Wing Leadership</p>

              <h2 className="mt-4 font-instrument-serif text-4xl leading-tight md:text-6xl">
                Led by young people committed to service.
              </h2>

              <p className="mt-5 text-base leading-8 text-white/70">
                The Youth Wing board brings together office bearers and avenue leads responsible for guiding the
                movement’s service, coexistence, media, fundraising, and member development work.
              </p>
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
                <article className="h-full rounded-4xl bg-white p-6 text-center text-text shadow-xl shadow-text/10">
                  <div className="mx-auto flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-accent2/10 text-accent2">
                    {/*
                    <img
                      src=""
                      alt={person.name}
                      className="h-full w-full object-cover"
                    />
                    */}

                    <Icon icon="mdi:account-circle-outline" width="64" />
                  </div>

                  <div className="mt-5">
                    <p className="font-instrument-serif text-2xl text-secondary">{person.name}</p>
                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-accent2">{person.role}</p>
                    <p className="mt-4 text-sm leading-7 text-text/65">{person.description}</p>
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
