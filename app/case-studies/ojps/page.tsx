import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export const metadata = {
  title: "Ojukwu Journal of Psychological Services | Case Study | Onyitech JournalHub Ltd",
  description: "Case study of digital publishing infrastructure, Open Journal Systems and technical publishing support for the Ojukwu Journal of Psychological Services.",
  alternates: { canonical: "/case-studies/ojps" },
  openGraph: { url: "https://www.onyitechub.com/case-studies/ojps" },
};

export default function OJPSCaseStudyPage() {
  return (
    <>
      <SiteHeader />
      <main className="detail-page">
        <section className="detail-hero">
          <div className="wrap">
            <p className="eyebrow">CASE STUDY · ACADEMIC PUBLISHING</p>
            <h1>Ojukwu Journal of Psychological Services</h1>
            <p className="detail-lede">
              Digital publishing infrastructure and technical support for an academic journal using Open Journal Systems.
            </p>
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="section-head">
              <div>
                <p className="eyebrow">THE PROJECT</p>
                <h2>Building a dependable digital publishing environment.</h2>
              </div>
            </div>
            <div className="feature-grid">
              <article>
                <span>01</span>
                <h3>OJS platform</h3>
                <p>Development, configuration, maintenance and technical support for the journal's Open Journal Systems publishing environment.</p>
              </article>
              <article>
                <span>02</span>
                <h3>Publishing workflows</h3>
                <p>Technical configuration supporting submissions, peer review, editorial processing, production and online publication.</p>
              </article>
              <article>
                <span>03</span>
                <h3>Metadata &amp; identifiers</h3>
                <p>Support for structured article metadata and DOI-related publishing workflows used to prepare scholarly records for persistent identification.</p>
              </article>
              <article>
                <span>04</span>
                <h3>Discoverability readiness</h3>
                <p>Technical support around journal structure, machine-readable information, sitemaps and indexing-related configuration.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="case-study">
          <div className="wrap case-grid">
            <div>
              <p className="eyebrow">TECHNICAL ROLE</p>
              <h2>Publishing infrastructure partner</h2>
            </div>
            <div>
              <p>
                Onyitech JournalHub Ltd provides digital publishing infrastructure and technical support for the Ojukwu Journal of Psychological Services (OJPS).
              </p>
              <p>
                The technical role is focused on the systems that enable online scholarly publishing. Editorial decisions, peer-review judgments, authorship and scholarly responsibility remain with the appropriate editors, reviewers, authors and institution.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap two-column">
            <div>
              <p className="eyebrow">LIVE SYSTEMS</p>
              <h2>See the publishing environment.</h2>
            </div>
            <div>
              <p>The journal website and OJS platform are publicly available for researchers, authors, reviewers and readers.</p>
              <a className="secondary-link" href="https://psyservicesjournal.org.ng" target="_blank" rel="noreferrer">Visit OJPS journal →</a>
              <a className="secondary-link" href="https://ojs.psyservicesjournal.org.ng" target="_blank" rel="noreferrer">Open OJPS OJS platform →</a>
            </div>
          </div>
        </section>

        <section className="paper-panel">
          <div className="wrap two-column">
            <div>
              <p className="eyebrow">WHAT THIS DEMONSTRATES</p>
              <h2>Technology built around a real scholarly workflow.</h2>
            </div>
            <p>
              The OJPS project demonstrates how publishing technology can combine OJS, web infrastructure, metadata workflows and ongoing technical maintenance into one operational system for an academic journal.
            </p>
          </div>
        </section>

        <section>
          <div className="wrap cta-band">
            <div>
              <p className="eyebrow">ACADEMIC PUBLISHING</p>
              <h2>Need technical infrastructure for a journal?</h2>
            </div>
            <a className="btn-primary" href="/contact">Discuss your project</a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
