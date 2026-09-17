const services = [
  {
    number: "01",
    title: "Journal Platform & OJS",
    description:
      "Deploy, configure, customize and maintain professional Open Journal Systems platforms for new and established academic journals.",
  },
  {
    number: "02",
    title: "Editorial Workflow Automation",
    description:
      "Reduce repetitive editorial work with automation across manuscript submission, peer review, revision, production and publication.",
  },
  {
    number: "03",
    title: "Journal Hosting & Infrastructure",
    description:
      "Reliable technical infrastructure for academic journals, including domains, SSL, databases, backups, performance and security.",
  },
  {
    number: "04",
    title: "Research & Publishing Technology",
    description:
      "Build practical software tools that help researchers, editors and institutions manage scholarly publishing more efficiently.",
  },
  {
    number: "05",
    title: "Metadata & Discoverability",
    description:
      "Improve journal metadata, article structure, indexing readiness, persistent identifiers and technical discoverability.",
  },
  {
    number: "06",
    title: "AI-Powered Publishing Automation",
    description:
      "Apply responsible AI and software automation to repetitive publishing and research workflows while keeping editorial decisions with people.",
  },
];

const audiences = [
  {
    title: "Researchers & Lecturers",
    text: "Technology and publishing support for researchers who need professional platforms for disseminating scholarly work.",
  },
  {
    title: "Journal Editors",
    text: "Modern tools for managing submissions, reviewers, revisions, editorial workflows and publication operations.",
  },
  {
    title: "Universities & Institutions",
    text: "Institutional journal infrastructure designed to support departments, faculties, research centres and scholarly communities.",
  },
  {
    title: "Independent Publishers",
    text: "Launch and operate professional academic journals with the technical foundation required for long-term growth.",
  },
];

const process = [
  {
    title: "Understand",
    text: "We first understand your journal, research workflow, audience, publishing model and technical requirements.",
  },
  {
    title: "Build",
    text: "We configure or develop the appropriate publishing infrastructure, software and automation around your needs.",
  },
  {
    title: "Connect",
    text: "We integrate domains, email, metadata, identifiers, analytics and other services required by your publishing workflow.",
  },
  {
    title: "Support",
    text: "We provide ongoing technical support, improvements, maintenance and automation as your journal or institution grows.",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="wrap header-inner">
          <a className="wordmark" href="/">
            ONYTECH <span>JOURNALHUB</span>
          </a>

          <nav className="site-nav" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#solutions">Solutions</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow">ONYITECH JOURNALHUB LTD</p>

            <h1>
              Digital infrastructure for modern academic publishing.
            </h1>

            <p className="lede">
              We help researchers, lecturers, journal editors, universities
              and publishers build better systems for scholarly publishing —
              from OJS platforms and journal hosting to editorial automation
              and research technology.
            </p>

            <div className="cta-row">
              <a className="btn-primary" href="#contact">
                Discuss your journal
              </a>

              <a className="secondary-link" href="#services">
                Explore our services →
              </a>
            </div>
          </div>

          <div className="hero-card">
            <p className="card-label">THE PUBLISHING WORKFLOW</p>

            <h2>From manuscript to published research.</h2>

            <div className="workflow">
              <div>
                <span>01</span>
                <strong>Submission</strong>
              </div>

              <div>
                <span>02</span>
                <strong>Peer Review</strong>
              </div>

              <div>
                <span>03</span>
                <strong>Revision</strong>
              </div>

              <div>
                <span>04</span>
                <strong>Production</strong>
              </div>

              <div>
                <span>05</span>
                <strong>Publication</strong>
              </div>
            </div>

            <p className="card-footer">
              Technology that supports editors — without replacing editorial
              judgment.
            </p>
          </div>
        </div>
      </section>

      <section className="intro" id="about">
        <div className="wrap intro-grid">
          <div>
            <p className="eyebrow">WHAT WE DO</p>
            <h2>We build the technology behind scholarly communication.</h2>
          </div>

          <div>
            <p>
              Academic publishing increasingly depends on reliable digital
              infrastructure. A journal needs more than a website: it needs
              structured workflows, secure hosting, metadata, editorial
              systems and dependable technical support.
            </p>

            <p>
              Onyitech JournalHub Ltd brings these pieces together into
              practical publishing technology for journals and research
              communities.
            </p>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">OUR CAPABILITIES</p>
              <h2>Publishing technology built around your workflow.</h2>
            </div>

            <p className="section-note">01 — 06</p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="audience-section" id="solutions">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">WHO WE SERVE</p>
              <h2>Built for the people who move research forward.</h2>
            </div>
          </div>

          <div className="audience-grid">
            {audiences.map((audience) => (
              <article className="audience-card" key={audience.title}>
                <h3>{audience.title}</h3>
                <p>{audience.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="case-study">
        <div className="wrap case-grid">
          <div>
            <p className="eyebrow">OUR APPROACH</p>
            <h2>
              Technology should make scholarly publishing more manageable.
            </h2>
          </div>

          <div>
            <p>
              We combine publishing knowledge with software engineering to
              create systems that fit real editorial environments.
            </p>

            <p>
              Our work can include OJS configuration, custom development,
              automation, hosting infrastructure, metadata management and
              research-focused software.
            </p>

            <p>
              The goal is simple: give scholarly communities dependable
              technology so that researchers and editors can focus on the
              work that matters.
            </p>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow">HOW WE WORK</p>
              <h2>A practical path from idea to working infrastructure.</h2>
            </div>
          </div>

          <div className="process">
            {process.map((step, index) => (
              <div className="process-step" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>

                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="wrap contact-grid">
          <div>
            <p className="eyebrow">START A CONVERSATION</p>

            <h2>
              Building a journal, improving an existing OJS platform, or
              automating your publishing workflow?
            </h2>

            <p>
              Tell us what you are trying to build. We can discuss the
              publishing workflow, technical requirements and the right
              infrastructure for your project.
            </p>

            <a
              className="btn-primary"
              href="mailto:onyitechideas@gmail.com"
            >
              Contact Onyitech JournalHub
            </a>
          </div>

          <div className="contact-details">
            <div>
              <span>COMPANY</span>
              Onyitech JournalHub Ltd
            </div>

            <div>
              <span>EMAIL</span>
              <a href="mailto:onyitechideas@gmail.com">
                onyitechideas@gmail.com
              </a>
            </div>

            <div>
              <span>FOCUS</span>
              Academic Publishing · OJS · Automation · Research Technology
            </div>

            <div>
              <span>LOCATION</span>
              Nigeria · Serving research communities globally
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <div>
            <strong>Onyitech JournalHub Ltd</strong>
            <p>Academic publishing technology and research infrastructure.</p>
          </div>

          <div>
            © {new Date().getFullYear()} Onyitech JournalHub Ltd
          </div>
        </div>
      </footer>
    </main>
  );
}
