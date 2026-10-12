import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS, SKILLS, TEAM } from "@/lib/data";
import { SITE } from "@/lib/site";

function SectionHeading({
  number,
  label,
  title,
}: {
  number: string;
  label: string;
  title: string;
}) {
  return (
    <Reveal>
      <div className="flex items-center gap-4">
        <span className="font-mono text-xs text-ember">{number}</span>
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-soft">
          {label}
        </span>
        <span className="h-px flex-1 bg-line" />
      </div>
      <h2 className="mt-6 font-display text-4xl tracking-tight sm:text-5xl">
        {title}
      </h2>
    </Reveal>
  );
}

const CAPABILITIES = [
  {
    title: "Software Products",
    body: "Web platforms, SaaS dashboards and e-commerce — designed carefully, built with modern frameworks and shipped fast without cutting corners.",
  },
  {
    title: "Digital Infrastructure",
    body: "The invisible layer that keeps products alive: cloud architecture on AWS, CI/CD pipelines, containerised deployments, monitoring and security hardening.",
  },
  {
    title: "Blockchain Systems",
    body: "Token economies, smart contracts and decentralized applications — from ERC-20 launches on Polygon PoS to full protocol platforms with wallet integration.",
  },
];

export default function Home() {
  const [featured, ...rest] = PROJECTS;

  return (
    <div id="top" className="flex-1">
      <Nav />

      <main className="mx-auto max-w-6xl px-6">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="flex min-h-[92vh] flex-col justify-center pt-28 pb-16">
          <Reveal>
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-soft">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" />
              {SITE.tagline}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-8 max-w-4xl font-display text-5xl leading-[1.05] tracking-tight sm:text-7xl">
              We build the software, infrastructure &amp; blockchain systems
              behind modern businesses.
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-soft">
              {SITE.description}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-80"
              >
                View our work
              </a>
              <a
                href="#contact"
                className="rounded-full border border-line px-6 py-3 text-sm font-medium transition-colors hover:border-ink"
              >
                Get in touch
              </a>
            </div>
          </Reveal>
          <Reveal delay={400}>
            <dl className="mt-20 grid grid-cols-2 gap-8 border-t border-line pt-8 sm:grid-cols-4">
              {[
                [String(PROJECTS.length).padStart(2, "0"), "Products shipped"],
                ["03", "Core domains"],
                ["100%", "Built in-house"],
                [SITE.location.split(",")[0], "Based in"],
              ].map(([value, label]) => (
                <div key={label}>
                  <dd className="font-display text-3xl">{value}</dd>
                  <dt className="mt-1 text-xs uppercase tracking-[0.14em] text-faint">
                    {label}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        {/* ── Capabilities ─────────────────────────────────── */}
        <section className="border-t border-line py-24">
          <div className="grid gap-12 md:grid-cols-3">
            {CAPABILITIES.map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <span className="font-mono text-xs text-faint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-2xl tracking-tight">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-soft">{c.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Work ─────────────────────────────────────────── */}
        <section id="work" className="scroll-mt-24 border-t border-line py-24">
          <SectionHeading number="01" label="Selected Work" title="Nine products, live in the wild." />

          <div className="mt-16">
            <Reveal>
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <ProjectCard project={featured} />
                <div className="hidden lg:block">
                  <p className="font-display text-3xl leading-snug tracking-tight text-soft">
                    From property intelligence to on-chain economies — each
                    project below is designed, engineered and operated by our
                    team, end to end.
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="mt-20 grid gap-x-10 gap-y-20 sm:grid-cols-2">
              {rest.map((p, i) => (
                <Reveal key={p.slug} delay={(i % 2) * 100}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Expertise ────────────────────────────────────── */}
        <section id="expertise" className="scroll-mt-24 border-t border-line py-24">
          <SectionHeading
            number="02"
            label="Expertise"
            title="The full stack, from pixel to protocol."
          />
          <Reveal delay={100}>
            <p className="mt-6 max-w-xl text-soft">
              Infrastructure-grade projects demand depth at every layer. These
              are the tools we reach for.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {SKILLS.map((s, i) => (
              <Reveal key={s.group} delay={(i % 3) * 80}>
                <h3 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em]">
                  <span className="font-mono text-xs font-normal text-ember">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s.group}
                </h3>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-card px-3.5 py-1.5 text-sm text-soft transition-colors hover:border-ink hover:text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Team ─────────────────────────────────────────── */}
        <section id="team" className="scroll-mt-24 border-t border-line py-24">
          <SectionHeading number="03" label="Team" title="Two engineers, zero handoffs." />
          <Reveal delay={100}>
            <p className="mt-6 max-w-xl text-soft">
              You talk directly to the people writing the code. No account
              managers, no layers — just the builders.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-10 md:grid-cols-2">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 100}>
                <div className="rounded-2xl border border-line bg-card p-8 transition-shadow duration-300 hover:shadow-[0_16px_40px_-12px_rgba(28,25,23,0.14)]">
                  <div className="flex items-center gap-5">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ink font-display text-xl text-paper">
                      {m.initials}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl tracking-tight">{m.name}</h3>
                      <p className="mt-1 text-sm text-soft">{m.role}</p>
                    </div>
                  </div>
                  <dl className="mt-8 space-y-3 text-sm">
                    <div className="flex gap-4">
                      <dt className="w-20 shrink-0 text-faint">Email</dt>
                      <dd>
                        <a href={`mailto:${m.email}`} className="underline-offset-4 hover:underline">
                          {m.email}
                        </a>
                      </dd>
                    </div>
                    <div className="flex gap-4">
                      <dt className="w-20 shrink-0 text-faint">Phone</dt>
                      <dd>
                        <a href={`tel:${m.phone.replace(/\s/g, "")}`} className="underline-offset-4 hover:underline">
                          {m.phone}
                        </a>
                      </dd>
                    </div>
                  </dl>
                  <div className="mt-8 flex gap-3">
                    <a
                      href={m.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-ink"
                    >
                      GitHub ↗
                    </a>
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-line px-4 py-2 text-sm transition-colors hover:border-ink"
                    >
                      LinkedIn ↗
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Contact ──────────────────────────────────────── */}
        <section id="contact" className="scroll-mt-24 border-t border-line py-28">
          <Reveal>
            <div className="text-center">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-soft">
                04 — Contact
              </p>
              <h2 className="mx-auto mt-6 max-w-3xl font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl">
                Have something worth building?
                <br />
                <span className="text-ember">Let&apos;s talk.</span>
              </h2>
              <p className="mx-auto mt-6 max-w-lg text-soft">
                Tell us what you&apos;re trying to ship — a product, a platform or a
                protocol — and we&apos;ll come back with a plan.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <a
                  href={`mailto:${TEAM[0].email},${TEAM[1].email}?subject=Project inquiry`}
                  className="rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-opacity hover:opacity-80"
                >
                  Email the team
                </a>
                <a
                  href={`tel:${TEAM[0].phone.replace(/\s/g, "")}`}
                  className="rounded-full border border-line px-7 py-3.5 text-sm font-medium transition-colors hover:border-ink"
                >
                  {TEAM[0].phone}
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-faint sm:flex-row">
          <p>
            © {new Date().getFullYear()} {SITE.name} · {SITE.location}
          </p>
          <p className="font-mono text-xs">{SITE.tagline}</p>
        </div>
      </footer>
    </div>
  );
}
