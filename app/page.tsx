import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const capabilities = [
  ["01","AI & Machine Learning","Practical AI/ML systems for research, text intelligence, data pipelines and decision-support workflows.","/ai-ml"],
  ["02","Publishing Technology","OJS development, journal hosting, metadata, DOI workflows and technical publishing infrastructure.","/publishing"],
  ["03","Workflow Automation","Python, APIs and automation that connect repetitive operational processes into dependable software.","/automation"],
  ["04","Custom Solutions","Technology designed around the specific workflow, data and infrastructure of your organization.","/solutions"],
];

export const metadata = { alternates: { canonical: "/" }, openGraph: { url: "https://www.onyitechub.com/" } };

export const metadata = { alternates: { canonical: "/" }, openGraph: { url: "https://www.onyitechub.com/" } };

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <p className="eyebrow">AI · ML · PUBLISHING · AUTOMATION</p>
              <h1>Intelligent technology for research and real-world workflows.</h1>
              <p className="lede">Onyitech JournalHub Ltd builds AI/ML software, publishing infrastructure and workflow automation for journals, research organizations and teams that need practical digital systems.</p>
              <div className="cta-row">
                <a className="btn-primary" href="/contact">Start a project</a>
                <a className="secondary-link" href="/solutions">Explore solutions →</a>
              </div>
            </div>
            <div className="hero-card">
              <p className="card-label">OUR TECHNOLOGY STACK</p>
              <h2>Software that connects intelligence with operations.</h2>
              <div className="workflow">
                <div><span>01</span><strong>AI / ML</strong></div>
                <div><span>02</span><strong>Python &amp; APIs</strong></div>
                <div><span>03</span><strong>Publishing Systems</strong></div>
                <div><span>04</span><strong>Automation</strong></div>
                <div><span>05</span><strong>Cloud Infrastructure</strong></div>
              </div>
              <p className="card-footer">Built to support people and workflows — not replace human responsibility.</p>
            </div>
          </div>
        </section>

        <section className="intro">
          <div className="wrap intro-grid">
            <div><p className="eyebrow">WHAT WE DO</p><h2>Where AI engineering meets publishing technology.</h2></div>
            <div>
              <p>We develop software at the intersection of machine learning, automation and scholarly communication. Our publishing work includes OJS platforms and journal infrastructure, while our engineering work extends to Python applications, APIs, data workflows and intelligent systems.</p>
              <p>The result is technology built around a real operational problem: a journal that needs better infrastructure, a team that needs automation, or an organization that needs an AI-enabled workflow.</p>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="wrap">
            <div className="section-head"><div><p className="eyebrow">CAPABILITIES</p><h2>Four areas, one engineering approach.</h2></div><p className="section-note">01 — 04</p></div>
            <div className="services-grid">
              {capabilities.map(([number,title,description,href]) => (
                <a className="service-card service-link-card" href={href} key={number}>
                  <span className="service-number">{number}</span><h3>{title}</h3><p>{description}</p><span className="card-arrow">Explore →</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="audience-section" id="solutions">
          <div className="wrap">
            <div className="section-head"><div><p className="eyebrow">WHO WE SERVE</p><h2>Technology for research-driven organizations.</h2></div></div>
            <div className="audience-grid">
              <article className="audience-card"><h3>Journal Publishers</h3><p>OJS platforms, editorial workflows, metadata, hosting and technical publishing support.</p></article>
              <article className="audience-card"><h3>Universities &amp; Research Centres</h3><p>Digital infrastructure and automation for departments, faculties and scholarly communities.</p></article>
              <article className="audience-card"><h3>Editorial Teams</h3><p>Tools that reduce repetitive coordination while keeping editorial decisions with people.</p></article>
              <article className="audience-card"><h3>Organizations</h3><p>Python, API and AI/ML solutions for structured operational and research workflows.</p></article>
            </div>
          </div>
        </section>

        <section className="case-study">
          <div className="wrap case-grid">
            <div><p className="eyebrow">R&amp;D</p><h2>Pillar AI: exploring intelligent, modular systems.</h2></div>
            <div>
              <p>Pillar AI is an R&amp;D project exploring a multi-layered architecture that combines machine learning, technical analysis, blockchain intelligence, sentiment signals and risk controls.</p>
              <p>It reflects our engineering interest in integrating heterogeneous data sources, model pipelines and automated decision-support components. It is presented as an engineering and research project, not as a claim of guaranteed financial performance.</p>
              <a className="secondary-link" href="/rnd">Explore our R&amp;D →</a>
            </div>
          </div>
        </section>

        <section className="paper-panel">
          <div className="wrap case-grid">
            <div><p className="eyebrow">SELECTED JOURNAL PROJECT</p><h2>Ojukwu Journal of Psychological Services</h2></div>
            <div>
              <p>We developed and support the digital publishing infrastructure for the <strong>Ojukwu Journal of Psychological Services (OJPS)</strong>, an academic journal using Open Journal Systems.</p>
              <p>The work includes journal platform development and maintenance, publishing workflows, article metadata, DOI and indexing-related technical support, and the digital infrastructure required for ongoing scholarly publication.</p>
              <a className="secondary-link" href="https://psyservicesjournal.org.ng" target="_blank" rel="noreferrer">Visit journal →</a>
              <a className="secondary-link" href="https://ojs.psyservicesjournal.org.ng" target="_blank" rel="noreferrer">Open OJS platform →</a>
            </div>
          </div>
        </section>

        <section className="process-section">
          <div className="wrap">
            <div className="section-head"><div><p className="eyebrow">HOW WE WORK</p><h2>Understand the workflow. Build the right system.</h2></div></div>
            <div className="process">
              <div className="process-step"><span>01</span><div><h3>Understand</h3><p>Map the problem, users, data, workflow and technical constraints before selecting the solution.</p></div></div>
              <div className="process-step"><span>02</span><div><h3>Design</h3><p>Define the architecture, integrations and automation points needed to make the workflow reliable.</p></div></div>
              <div className="process-step"><span>03</span><div><h3>Build</h3><p>Develop, configure and integrate the software with clear attention to maintainability and security.</p></div></div>
              <div className="process-step"><span>04</span><div><h3>Improve</h3><p>Monitor real-world use, fix friction points and extend the system as requirements evolve.</p></div></div>
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="wrap contact-grid">
            <div><p className="eyebrow">START A CONVERSATION</p><h2>Have a publishing, automation or AI/ML problem worth solving?</h2><p>Tell us what you are trying to build. We can discuss the workflow, technical requirements and a practical path forward.</p><a className="btn-primary" href="/contact">Contact Onyitech JournalHub</a></div>
            <div className="contact-details"><div><span>EMAIL</span><a href="mailto:admin@onyitechub.com">admin@onyitechub.com</a></div><div><span>FOCUS</span>AI · ML · Publishing Technology · Workflow Automation</div><div><span>LOCATION</span>Nigeria · Serving research communities globally</div></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
