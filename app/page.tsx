import SiteHeader from "./components/SiteHeader";
import SiteFooter from "./components/SiteFooter";

const capabilities = [
  ["01","Research Workspace","Plan, organize and develop research projects with AI-assisted research planning and manuscript development.","/ai-ml"],
  ["02","Research Data Collection","Design questionnaires and collect real-world responses from target populations. Coming soon.","/solutions"],
  ["03","Research Intelligence","Transform research data into statistical insights, machine-learning models and decision-support outputs. Coming soon.","/ai-ml"],
  ["04","Academic Publishing Infrastructure","OJS development, journal hosting, metadata, DOI workflows and technical publishing infrastructure.","/publishing"],
  ["05","Custom Research Solutions","Build research portals, data systems and specialized software for universities, organizations and companies.","/solutions"],
];

export const metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "https://www.onyitechub.com/" },
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <p className="eyebrow">RESEARCH · DATA · AI · PUBLISHING</p>
              <h1>Research technology for the complete research lifecycle.</h1>
              <p className="lede">Onyitech JournalHub Ltd builds research technology, data workflows, AI/ML systems and publishing infrastructure for researchers, institutions, organizations and companies.</p>
              <div className="cta-row">
                <a className="btn-primary" href="/contact">Start a project</a>
                <a className="secondary-link" href="/solutions">Explore solutions →</a>
              </div>
            </div>
            <div className="hero-card">
              <p className="card-label">RESEARCH LIFECYCLE</p>
              <h2>Connecting research ideas to data, intelligence and publication.</h2>
              <div className="workflow">
                <div><span>01</span><strong>Research Ideas</strong></div>
                <div><span>02</span><strong>Projects &amp; Design</strong></div>
                <div><span>03</span><strong>Data Collection</strong></div>
                <div><span>04</span><strong>Analysis &amp; Intelligence</strong></div>
                <div><span>05</span><strong>Publication &amp; Reporting</strong></div>
              </div>
              <p className="card-footer">Technology supports researchers and organizations while keeping human responsibility at the centre.</p>
            </div>
          </div>
        </section>

        <section className="intro">
          <div className="wrap intro-grid">
            <div><p className="eyebrow">WHAT WE DO</p><h2>Where research, data and intelligent technology come together.</h2></div>
            <div>
              <p>We develop technology across the research lifecycle — from research planning and data collection to analysis, intelligent workflows and scholarly publication.</p>
              <p>Our work serves academic researchers and publishers as well as organizations and companies that need reliable ways to collect evidence, understand data and improve real-world decisions.</p>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="wrap">
            <div className="section-head"><div><p className="eyebrow">PRODUCTS &amp; SERVICES</p><h2>Research technology built around real workflows.</h2></div><p className="section-note">01 — 05</p></div>
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
              <article className="audience-card"><h3>Researchers &amp; Research Groups</h3><p>Tools for research planning, project development, data workflows, analysis and publication preparation.</p></article>
              <article className="audience-card"><h3>Universities &amp; Research Centres</h3><p>Digital infrastructure, research systems and automation for departments, faculties and scholarly communities.</p></article>
              <article className="audience-card"><h3>Journal Publishers</h3><p>OJS platforms, editorial workflows, metadata, hosting and technical publishing support.</p></article>
              <article className="audience-card"><h3>NGOs &amp; Organizations</h3><p>Evidence collection, research workflows, data systems and technology designed around operational needs.</p></article>
              <article className="audience-card"><h3>Companies &amp; Brands</h3><p>Market and customer research workflows for understanding products, customers, demand and brand perception.</p></article>
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
              <a className="secondary-link" href="/case-studies/ojps">Read the OJPS case study →</a>
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
            <div><p className="eyebrow">START A CONVERSATION</p><h2>Have a research, data, publishing or AI/ML problem worth solving?</h2><p>Tell us what you are trying to build. We can discuss the research question, workflow, technical requirements and a practical path forward.</p><a className="btn-primary" href="/contact">Contact Onyitech JournalHub</a></div>
            <div className="contact-details"><div><span>EMAIL</span><a href="mailto:admin@onyitechub.com">admin@onyitechub.com</a></div><div><span>FOCUS</span>Research Technology · Data · AI/ML · Publishing Infrastructure</div><div><span>LOCATION</span>Nigeria · Serving research communities and organizations globally</div></div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
