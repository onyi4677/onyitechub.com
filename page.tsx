export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="wrap">
          <a className="wordmark" href="#top">
            Onyitech <span>JournalHub</span>
          </a>
          <nav className="site-nav">
            <a href="#work">What we build</a>
            <a href="#proof">In production</a>
            <a href="#process">How it works</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero" style={{ borderTop: "none" }}>
          <div className="wrap">
            <div>
              <h1>Publishing infrastructure for research journals.</h1>
              <p className="lede">
                Onyitech JournalHub builds and operates the systems that take a
                manuscript from submission to indexed publication —
                Open Journal Systems deployment, editorial workflow automation,
                and the metadata plumbing that gets a journal discovered.
              </p>
              <div className="cta-row">
                <a className="btn-primary" href="#contact">
                  Start a conversation
                </a>
                <a className="secondary-link" href="#proof">
                  See a journal we run →
                </a>
              </div>
            </div>

            <div className="specimen">
              <p className="specimen-eyebrow">est. 2025 · lagos, nigeria</p>
              <p className="specimen-title">A manuscript's path through the system</p>
              <div className="specimen-flow">
                <div className="specimen-step">
                  <span>Submission portal</span>
                  <b>OJS</b>
                </div>
                <div className="specimen-step">
                  <span>Editorial & peer review</span>
                  <b>automated</b>
                </div>
                <div className="specimen-step">
                  <span>DOI & metadata</span>
                  <b>DataCite</b>
                </div>
                <div className="specimen-step">
                  <span>Indexing</span>
                  <b>Scholar, DOAJ</b>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work">
          <div className="wrap">
            <div className="section-head">
              <h2>What we build</h2>
              <span className="section-note">services</span>
            </div>
            <div className="services-list">
              <div className="service-item">
                <h3>OJS installation & customization</h3>
                <p>
                  Full Open Journal Systems deployment, themed and configured
                  around how your editorial board actually works.
                </p>
              </div>
              <div className="service-item">
                <h3>Editorial & peer review automation</h3>
                <p>
                  Python-driven workflows that route manuscripts, chase
                  reviewers, and cut the manual overhead out of each issue.
                </p>
              </div>
              <div className="service-item">
                <h3>DOI & metadata integration</h3>
                <p>
                  Registration and metadata pipelines so every article
                  resolves correctly and citations track back to the source.
                </p>
              </div>
              <div className="service-item">
                <h3>Indexing preparation</h3>
                <p>
                  Getting a journal into Google Scholar, DOAJ, and similar
                  indexes — the part that determines whether it gets read.
                </p>
              </div>
              <div className="service-item">
                <h3>Manuscript submission portals</h3>
                <p>
                  Purpose-built submission sites for departments and
                  societies that need something more tailored than the
                  defaults.
                </p>
              </div>
              <div className="service-item">
                <h3>Research & publication dashboards</h3>
                <p>
                  Editorial teams get a single view of what&apos;s in review,
                  what&apos;s stalled, and what&apos;s ready to publish.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="proof">
          <div className="wrap">
            <div className="section-head">
              <h2>Already in production</h2>
              <span className="section-note">case study</span>
            </div>
            <div className="case">
              <dl className="case-meta">
                <div>
                  <dt>Journal — </dt>Ojukwu Journal of Psychological Services
                </div>
                <div>
                  <dt>Platform — </dt>OJS
                </div>
                <div>
                  <dt>Built &amp; operated by — </dt>Onyitech JournalHub
                </div>
                <div>
                  <dt>Live since — </dt>January 2025
                </div>
              </dl>
              <div className="case-body">
                <h3>A journal we designed, built, and still run</h3>
                <p>
                  We built this journal&apos;s site from the ground up,
                  registered its ISSN, and now run its editorial pipeline on
                  Open Journal Systems — including DOI registration through
                  DataCite for every published issue.
                </p>
                <p>
                  It&apos;s not a demo. It&apos;s a working journal with
                  editors, submitted manuscripts, and published, indexed
                  issues — the same infrastructure we build for other
                  publications.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="process" className="process-section">
          <div className="wrap">
            <div className="section-head">
              <h2>How it works</h2>
              <span className="section-note">engagement</span>
            </div>
            <div className="process">
              <div className="process-step">
                <div>
                  <h3>Tell us where the journal is today</h3>
                  <p>
                    A new journal, one still running on email and
                    spreadsheets, or an existing OJS install that needs
                    fixing — we start with an honest read of the current
                    setup.
                  </p>
                </div>
              </div>
              <div className="process-step">
                <div>
                  <h3>We build the pipeline</h3>
                  <p>
                    Submission portal, review workflow, and the automation
                    layer that connects them — scoped to what the editorial
                    team will actually use.
                  </p>
                </div>
              </div>
              <div className="process-step">
                <div>
                  <h3>We prepare it to be found</h3>
                  <p>
                    DOI registration, metadata, and indexing submissions, so
                    published work is discoverable and citable from day one.
                  </p>
                </div>
              </div>
              <div className="process-step">
                <div>
                  <h3>We stay on as the operator</h3>
                  <p>
                    Most journals we work with, we continue to run —
                    ongoing issues, not a one-time handoff.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="wrap contact-grid">
            <div>
              <h2>Talk to us about your journal.</h2>
              <p>
                Whether you&apos;re launching a new publication or trying to
                get an existing one off spreadsheets and email threads, we&apos;d
                like to hear where things stand.
              </p>
            </div>
            <div className="contact-details">
              <div>
                <span>email</span>
                <a href="mailto:[email protected]">[email protected]</a>
              </div>
              <div>
                <span>based in</span>
                Nigeria
              </div>
              <div>
                <span>company</span>
                Onyitech JournalHub Ltd
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">
          <span>© {new Date().getFullYear()} Onyitech JournalHub Ltd.</span>
          <span>Incorporated 2026 · Nigeria</span>
        </div>
      </footer>
    </>
  );
}
