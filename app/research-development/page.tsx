import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

export const metadata: Metadata = {
  title: "Research Development & Scholarly Publishing | Onyitech JournalHub",
  description:
    "Explore Onyitech Research Workspace, empirical research development, AI-assisted research workflows, data analysis, and professional journal publishing infrastructure.",
  alternates: { canonical: "/research-development" },
  openGraph: {
    title: "Build Better Research. Publish with Confidence. | Onyitech",
    description:
      "Integrated research development, data, analytics and scholarly publishing support for researchers and institutions.",
    url: "https://www.onyitechub.com/research-development",
    siteName: "Onyitech JournalHub Ltd",
    type: "website",
  },
};

const capabilities = [
  ["01", "Research Foundation", "Develop research topics, objectives, questions and conceptual frameworks."],
  ["02", "Literature & Evidence", "Organise scholarly literature, connect claims to supporting evidence and identify research gaps."],
  ["03", "References & Citations", "Manage scholarly references and support consistent citation workflows."],
  ["04", "Research Design & Methodology", "Plan research designs, methods, protocols and analytical approaches."],
  ["05", "Instruments & Data Collection", "Develop questionnaires and interview guides, plan validation, and organise online data collection."],
  ["06", "Study Screening", "Document literature, participant and empirical-response screening against defined criteria."],
  ["07", "Data Workspace", "Organise, clean, document and prepare research datasets."],
  ["08", "Statistical Analysis", "Apply appropriate statistical methods and interpret results in context."],
  ["09", "Machine Learning & Prediction", "Develop and evaluate predictive models when justified by the research question and data."],
  ["10", "Research Integrity & Quality", "Review claims, methodology, references, DOI information and statistical consistency."],
  ["11", "Manuscript Development", "Develop structured academic manuscripts with the researcher retaining scholarly control."],
  ["12", "Journal Preparation", "Prepare manuscripts and metadata for journal submission."],
];

const packages = [
  {
    name: "Research Development",
    price: "₦150,000–₦200,000",
    audience: "For proposals and early-stage research development.",
    scope: "Research foundation, literature and evidence organisation, research questions, conceptual framework and methodology support.",
  },
  {
    name: "Advanced Empirical Research",
    price: "₦250,000–₦350,000",
    audience: "For original studies involving primary or structured empirical data.",
    scope: "Instrument development support, data-collection setup, data organisation, appropriate statistical analysis and manuscript development.",
  },
  {
    name: "PhD Research Intelligence",
    price: "₦350,000–₦500,000",
    audience: "For more demanding doctoral research projects.",
    scope: "Integrated research development, empirical data management, advanced analysis, suitable machine-learning evaluation and research-quality checks.",
    featured: true,
  },
  {
    name: "Institutional & Premium Research",
    price: "₦500,000–₦1,000,000+",
    audience: "For universities, research centres, departments and research teams.",
    scope: "Complex workflows, multi-stage research support, advanced analytical requirements and tailored institutional solutions.",
  },
];

export default function ResearchDevelopmentPage() {
  return (
    <>
      <SiteHeader />
      <main className="detail-page">
        <section className="detail-hero">
          <div className="wrap">
            <p className="eyebrow">ONYITECH RESEARCH WORKSPACE</p>
            <h1>Build better research. Publish with confidence.</h1>
            <p className="detail-lede">
              An integrated research-development environment for PhD researchers, academics, research teams and institutions.
              Connect research planning, evidence, data collection, analysis, research quality and manuscript preparation in one
              structured workflow.
            </p>
            <div className="cta-row" style={{ marginTop: 32 }}>
              <a className="btn-primary" href="https://app.onyitechub.com">Explore Research Workspace</a>
              <a className="secondary-link" href="/contact">Discuss a research project →</a>
            </div>
            <p className="availability-note">
              Platform capabilities are being released and validated in stages. Specific tools and service deliverables are
              confirmed during project scoping.
            </p>
          </div>
        </section>

        <section className="paper-panel">
          <div className="wrap two-column">
            <div>
              <p className="eyebrow">MORE THAN A WRITING TOOL</p>
              <h2>Support across the research lifecycle.</h2>
            </div>
            <div>
              <p>
                Onyitech Research Workspace is designed to help researchers move from a clearly defined research problem to
                organised evidence, defensible methods, well-managed data, appropriate analysis and a carefully developed
                manuscript.
              </p>
              <p>
                AI-assisted workflows can support research tasks, but they do not replace the researcher. Researchers remain
                responsible for their data, academic decisions, interpretation, authorship and final submission.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">12 CONNECTED WORKSPACES</p>
                <h2>What you can work on with Onyitech.</h2>
              </div>
            </div>
            <div className="feature-grid">
              {capabilities.map(([number, title, description]) => (
                <article key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-panel">
          <div className="wrap">
            <p className="eyebrow">TWO RESEARCH PATHWAYS</p>
            <h2>Designed for empirical research and evidence synthesis.</h2>
            <div className="two-column">
              <div>
                <h3>Original &amp; empirical research</h3>
                <p>
                  Plan instruments, prepare data-collection workflows, organise participant responses, document screening
                  decisions, analyse datasets and develop manuscripts. Recruitment, fieldwork and participant incentives are
                  scoped separately.
                </p>
              </div>
              <div>
                <h3>Scoping &amp; systematic reviews</h3>
                <p>
                  Organise references, screen titles and abstracts, assess full texts against documented criteria, record
                  inclusion and exclusion decisions, synthesise evidence and prepare review manuscripts.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="packages" className="paper-panel">
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">RESEARCH DEVELOPMENT PACKAGES</p>
                <h2>Clear starting points. Scoped to your study.</h2>
              </div>
            </div>
            <div className="pricing-grid">
              {packages.map((item) => (
                <article className={item.featured ? "price-card price-card-featured" : "price-card"} key={item.name}>
                  {item.featured && <p className="price-badge">DOCTORAL RESEARCH</p>}
                  <h3>{item.name}</h3>
                  <p className="price-value">{item.price}</p>
                  <p className="price-audience">{item.audience}</p>
                  <p>{item.scope}</p>
                  <a className="secondary-link" href="/contact">Request a project quotation →</a>
                </article>
              ))}
            </div>
            <p className="pricing-disclaimer">
              Prices are indicative service-package ranges in Nigerian naira, not a promise of publication or a fixed fee for
              every study. Final quotations depend on research complexity, sample and data requirements, methods, deliverables
              and timeline. Fieldwork, participant recruitment, enumerators, incentives, paid third-party services and journal
              publication charges are excluded unless expressly included in a written quotation.
            </p>
          </div>
        </section>

        <section>
          <div className="wrap two-column">
            <div>
              <p className="eyebrow">FOR JOURNALS &amp; ACADEMIC PUBLISHERS</p>
              <h2>Professional scholarly publishing infrastructure.</h2>
            </div>
            <div>
              <div className="content-list">
                <div><h3>Journal website development &amp; hosting</h3><p>Professional journal websites and dependable publishing infrastructure.</p></div>
                <div><h3>Open Journal Systems (OJS)</h3><p>OJS installation, configuration, management and editorial workflow support.</p></div>
                <div><h3>Crossref DOI &amp; metadata support</h3><p>DOI registration workflows and structured metadata support for scholarly outputs.</p></div>
                <div><h3>Discoverability &amp; indexing readiness</h3><p>Technical preparation involving metadata quality, journal information, website structure and publishing standards.</p></div>
              </div>
              <p style={{ marginTop: 22 }}>
                We support journals seeking to strengthen their publishing operations and prepare for external evaluation.
                Scopus inclusion and other indexing decisions are made independently by the relevant indexing organisations;
                no indexing outcome is guaranteed.
              </p>
              <a className="secondary-link" href="/publishing">Explore journal publishing services →</a>
            </div>
          </div>
        </section>

        <section className="dark-panel">
          <div className="wrap">
            <p className="eyebrow">OUR COMMITMENT</p>
            <h2>Research support built around evidence, transparency and researcher responsibility.</h2>
            <p>
              We do not promise fabricated data, invented references, guaranteed findings or guaranteed publication.
              Research methods, analysis and machine-learning techniques must be appropriate to the study and its data.
              Important screening and analytical decisions should remain documented and reviewable.
            </p>
          </div>
        </section>

        <section>
          <div className="wrap cta-band">
            <div>
              <p className="eyebrow">START YOUR NEXT PROJECT</p>
              <h2>Tell us what you are researching. Let’s scope the right workflow.</h2>
              <p style={{ color: "var(--ink-soft)", maxWidth: 650 }}>
                Contact Onyitech JournalHub Ltd to discuss research development, empirical data workflows or scholarly
                publishing infrastructure.
              </p>
            </div>
            <div className="cta-stack">
              <a className="btn-primary" href="/contact">Request a consultation</a>
              <a className="secondary-link" href="https://wa.me/2349110161537">Chat on WhatsApp →</a>
              <a className="secondary-link" href="mailto:admin@onyitechub.com">admin@onyitechub.com</a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
